(ns amp.i18n
  "Localisation: English (default, at /), Italian (/it/…) and Armenian (/hy/…,
   Eastern Armenian).

   All the site's writing lives in JSON catalogs, resources/i18n/<locale>/<domain>.json,
   as ICU MessageFormat strings (FormatJS intl-messageformat; the format Crowdin,
   Lokalise and Weblate read). A namespace declares the catalogs it uses with
   (defcatalog \"domain\") and looks strings up with (t :domain/key).

   Three kinds of catalog:
   - UI and prose, keyed by id:  (t :footer/news-title), (t :visit/hours {:n 3}).
     Inline markup is written as tags: \"A <em>working</em> studio\"; <em> <strong>
     <i> <b> <small> <sup> <q> render by default, others (links) are passed in:
     (t :visit/press {:a (link \"/press\")}).
   - Source-keyed, for generated data (walk stops, press image titles): the key
     is the English text itself, so a changed source falls back to English
     instead of showing a stale translation: (tx :media \"Painting the green\").
   - Structured documents (the press kit): (doc :press-kit) returns the
     locale's whole JSON, falling back to English.

   The locale comes from the URL; the router sets it before each render
   (set-locale!). Missing strings fall back to English, and `npm run
   i18n:check` lists what is missing or out of step."
  (:require-macros [amp.i18n])
  (:require ["intl-messageformat" :refer [IntlMessageFormat]]
            ["react" :as react]
            [clojure.string :as str]))

(def locales ["en" "it" "hy"])
(def default-locale "en")

(def names
  "Each locale's name in its own language, for the switcher."
  {"en" "English" "it" "Italiano" "hy" "Հայերեն"})

(def short-names {"en" "EN" "it" "IT" "hy" "ՀԱՅ"})

(def ^:private intl-tags
  "BCP 47 tags for Intl date and number formatting (British English: 9 May 2026)."
  {"en" "en-GB" "it" "it-IT" "hy" "hy-AM"})

(defonce ^:private !locale (atom default-locale))

(defn locale [] @!locale)

(defn intl-tag
  ([] (intl-tag @!locale))
  ([l] (intl-tags l "en-GB")))

(defn set-locale!
  "Called by the router before a route renders."
  [l]
  (let [l (if (some #{l} locales) l default-locale)]
    (reset! !locale l)
    (when (exists? js/document)
      (set! (.. js/document -documentElement -lang) l))
    l))

;; ---------------------------------------------------------------------------
;; Paths: English at /, the others under /<locale>/
;; ---------------------------------------------------------------------------

(defn split-path
  "[locale path-without-prefix] for a path: \"/it/visit\" → [\"it\" \"/visit\"]."
  [path]
  (let [path (or path "/")
        [_ seg] (re-find #"^/([a-z]{2})(?=/|$)" path)]
    (if (and seg (not= seg default-locale) (some #{seg} locales))
      [seg (let [r (subs path 3)] (if (str/blank? r) "/" r))]
      [default-locale path])))

(defn href
  "A site path in the current (or given) locale: (href \"/visit\") → \"/it/visit\".
   External, mailto:, tel: and #anchor links pass through unchanged."
  ([path] (href path @!locale))
  ([path l]
   (if (or (not (string? path)) (not (str/starts-with? path "/")) (str/starts-with? path "//"))
     path
     (let [[_ bare] (split-path path)]
       (if (= l default-locale)
         bare
         (str "/" l (if (= bare "/") "" bare)))))))

;; ---------------------------------------------------------------------------
;; Catalogs
;; ---------------------------------------------------------------------------

;; domain → #js {locale → JSON string}, registered as modules load.
(defonce ^:private raw (js/Map.))
;; "domain|locale" → parsed object
(defonce ^:private parsed (js/Map.))
;; "locale|domain|key" → IntlMessageFormat
(defonce ^:private compiled (js/Map.))
;; "domain|locale" → Clojure data, for (doc …)
(defonce ^:private docs (js/Map.))

(defn register!
  "Called by (defcatalog …). Re-registering (hot reload) drops the caches."
  [domain ^js by-locale]
  (.set raw domain by-locale)
  (doseq [l locales]
    (.delete parsed (str domain "|" l))
    (.delete docs (str domain "|" l)))
  (.clear compiled))

(defn- catalog
  "The parsed catalog for domain and locale, or nil."
  [domain l]
  (let [k (str domain "|" l)]
    (if (.has parsed k)
      (.get parsed k)
      (let [src (some-> (.get raw domain) (aget l))
            obj (when (and (string? src) (not (str/blank? src)))
                  (try (js/JSON.parse src)
                       (catch :default e (js/console.error "i18n: bad JSON" domain l e) nil)))]
        (.set parsed k obj)
        obj))))

(defn- lookup
  "[locale string] for the key, falling back to English."
  [domain k l]
  (let [s (some-> (catalog domain l) (aget k))]
    (if (string? s)
      [l s]
      (let [en (some-> (catalog domain default-locale) (aget k))]
        (when (and goog.DEBUG (not (.has raw domain)))
          (js/console.warn "i18n: catalog not registered:" domain "(add (defcatalog" (pr-str domain) "))"))
        (when (and goog.DEBUG (.has raw domain) (not (string? en)))
          (js/console.warn "i18n: missing key" (str domain "/" k)))
        [default-locale (if (string? en) en (str domain "/" k))]))))

;; ---------------------------------------------------------------------------
;; Formatting
;; ---------------------------------------------------------------------------

(defn- element
  "A React element of `tag` with the chunks a rich-text tag wraps as children
   (spread, so React wants no keys)."
  ([tag] (element tag nil))
  ([tag props]
   (fn [chunks]
     (.apply react/createElement nil (.concat #js [tag props] chunks)))))

(def ^:private default-tags
  (into {} (map (juxt identity element)) ["em" "strong" "i" "b" "small" "sup" "sub" "q" "cite"]))

(defn tag
  "A rich-text handler: (t :k {:a (tag \"a\" {:href \"…\"})})."
  [el props]
  (element el (clj->js props)))

(defn link
  "A handler for an internal link in the current locale, styled as a text link:
   (t :visit/note {:a (link \"/press\")})."
  ([path] (link path "ap-link"))
  ([path cls] (element "a" #js {:href (href path) :className cls})))

(defn ext-link
  "A handler for an external (or mailto:, tel:) link."
  ([url] (ext-link url "ap-link"))
  ([url cls]
   (element "a" (if (re-find #"^https?:" url)
                  #js {:href url :className cls :target "_blank" :rel "noopener noreferrer"}
                  #js {:href url :className cls}))))

(defn- plain? [s] (not (re-find #"[{}<]" s)))

(defn- ->values [values]
  (let [o #js {}]
    (doseq [[k v] (merge default-tags values)]
      (aset o (name k) (if (keyword? v) (name v) v)))
    o))

(defn- fragment [parts]
  (if (and (array? parts) (every? string? parts))
    (.join parts "")
    (if (array? parts)
      (.apply react/createElement nil (.concat #js [react/Fragment nil] parts))
      parts)))

(defn t-in
  "Like t, in locale `l` instead of the current one (e.g. the water-taxi
   card shown to the driver in Italian on an Armenian page)."
  ([l k] (t-in l k nil))
  ([l k values]
   (let [domain (namespace k)
         key (name k)
         [l s] (lookup domain key l)]
     (if (plain? s)
       s
       (let [ck (str l "|" domain "|" key)
             ^js mf (or (.get compiled ck)
                        (let [mf (try (IntlMessageFormat. s l)
                                      (catch :default e
                                        (js/console.error "i18n: bad message" (str domain "/" key) e)
                                        nil))]
                          (.set compiled ck mf)
                          mf))]
         (if mf
           (try (fragment (.format mf (->values values)))
                (catch :default e
                  (js/console.error "i18n: format failed" (str domain "/" key) e)
                  s))
           s))))))

(defn t
  "The string for `k` (:domain/key) in the current locale, formatted with
   `values`. Plain strings come back as strings; rich text as a React
   fragment. Use (ts …) where a string is required (alt, aria-label, title)."
  ([k] (t-in @!locale k nil))
  ([k values] (t-in @!locale k values)))

(defn ts
  "Like t, but always a string (tags are dropped, their text kept)."
  ([k] (ts k nil))
  ([k values]
   (let [r (t k (merge (into {} (map (fn [[tg _]] [tg (fn [chunks] (.join chunks ""))])) default-tags)
                       values))]
     (if (string? r) r (str r)))))

(defn has?
  "Whether the current locale (or English) has `k`."
  [k]
  (let [domain (namespace k) key (name k)]
    (or (string? (some-> (catalog domain @!locale) (aget key)))
        (string? (some-> (catalog domain default-locale) (aget key))))))

(defn tx
  "Source-keyed lookup for generated data: the translation of `english` in
   the source-keyed catalog `domain`, or `english` itself. nil stays nil."
  [domain english]
  (when english
    (let [s (some-> (catalog (name domain) @!locale) (aget english))]
      (if (and (string? s) (not (str/blank? s))) s english))))

(defn doc
  "A structured catalog (a whole JSON document) for the current locale as
   Clojure data with keyword keys, falling back to English."
  [domain]
  (let [domain (name domain)
        l @!locale
        k (str domain "|" l)]
    (if (.has docs k)
      (.get docs k)
      (let [obj (or (catalog domain l) (catalog domain default-locale))
            v (js->clj obj :keywordize-keys true)]
        (when obj (.set docs k v))
        v))))

;; ---------------------------------------------------------------------------
;; Dates and numbers
;; ---------------------------------------------------------------------------

(defn- ->date [d]
  (cond
    (instance? js/Date d) d
    (and (string? d) (re-matches #"\d{4}-\d{2}-\d{2}" d)) (js/Date. (str d "T12:00:00"))
    :else (js/Date. d)))

;; Chrome ships no Armenian locale data: Intl with "hy-AM" falls back to
;; en-US. Armenian dates and numbers are therefore formatted here, following
;; CLDR's Eastern Armenian patterns.
(def ^:private hy-months
  ["հունվար" "փետրվար" "մարտ" "ապրիլ" "մայիս" "հունիս" "հուլիս" "օգոստոս" "սեպտեմբեր" "հոկտեմբեր" "նոյեմբեր" "դեկտեմբեր"])
(def ^:private hy-months-short
  ["հնվ" "փտվ" "մրտ" "ապր" "մյս" "հնս" "հլս" "օգս" "սեպ" "հոկ" "նոյ" "դեկ"])
(def ^:private hy-weekdays
  ["կիրակի" "երկուշաբթի" "երեքշաբթի" "չորեքշաբթի" "հինգշաբթի" "ուրբաթ" "շաբաթ"])
(def ^:private hy-weekdays-short
  ["կիր" "երկ" "երք" "չրք" "հնգ" "ուր" "շբթ"])

(defn- hy-date
  "Eastern Armenian: 2026 թ. նոյեմբերի 18 · նոյեմբերի 18 · շաբաթ, նոյեմբերի 14 ·
   նոյեմբեր 2026 · 18 նոյ · 18 նոյ, 2026 թ."
  [^js d {:keys [weekday day month year]}]
  (let [m (.getMonth d)
        dd (.getDate d)
        y (.getFullYear d)
        wd (case weekday
             "long" (nth hy-weekdays (.getDay d))
             ("short" "narrow") (nth hy-weekdays-short (.getDay d))
             nil)
        short? (#{"short" "narrow"} month)
        numeric? (#{"numeric" "2-digit"} month)
        body (cond
               (and day numeric?) (str (when (= day "2-digit") (when (< dd 10) "0")) dd "."
                                       (when (< (inc m) 10) "0") (inc m)
                                       (when year (str "." y)))
               (and day short?) (str dd " " (nth hy-months-short m) (when year (str ", " y " թ.")))
               (and day month) (str (when year (str y " թ. ")) (nth hy-months m) "ի " dd)
               month (str ((if short? hy-months-short hy-months) m) (when year (str " " y)))
               day (str dd)
               year (str y " թ.")
               :else nil)]
    (cond (and wd body) (str wd ", " body)
          wd wd
          :else (or body (str y " թ. " (nth hy-months m) "ի " dd)))))

(defn date
  "A date in the current locale. `opts` are Intl.DateTimeFormat options
   (weekday, day, month, year); default: 9 May 2026."
  ([d] (date d {:day "numeric" :month "long" :year "numeric"}))
  ([d opts]
   (let [d (->date d)]
     (if (= @!locale "hy")
       (hy-date d opts)
       (.format (js/Intl.DateTimeFormat. (intl-tag) (clj->js (or opts {}))) d)))))

(defn number
  "A number in the current locale (Armenian: 1 234,5)."
  ([n] (number n nil))
  ([n opts]
   (if (= @!locale "hy")
     (-> (.format (js/Intl.NumberFormat. "en-US" (clj->js (or opts {}))) n)
         (str/replace "," " ")
         (str/replace "." ","))
     (.format (js/Intl.NumberFormat. (intl-tag) (clj->js (or opts {}))) n))))
