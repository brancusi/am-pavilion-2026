(ns amp.pages.press.page
  "The press kit, /press (and /it/press, /hy/press): an overview and a
   sub-page per section (/press/release, /press/stories#serra,
   /press/images, …), with a menu beside them. The kit's text is the
   structured catalog doc-press-kit (i18n/doc), built per locale from the
   press_kit Markdown by build/press-kit.mjs; the page's own words are the
   press catalog; the images' titles, captions and alt text are looked up in
   the source-keyed data-media catalog (scripts/press-i18n.mjs writes the
   English). Links to the old single page's anchors (/press#serra) are sent
   on to the sub-page.

   The images are resources/data/press/press.json, built by `npm run press`
   from the Caption Genius project \"Pavilion — Press\" (the images marked
   Include, in its order); they are on R2 under press/<uid>, each with a
   Small, Medium and Large JPEG (1200, 2400, 4000 px on the long edge) and the
   original file (:dl in each image). amp.data.press-images carries a copy of
   the list so the page is laid out at once; the live list replaces it (a Sync changes it
   without a new build). Images can be picked one by one, by section or all,
   and download as one ZIP made by the site Worker (/press/zip/…), with the
   captions as CSV inside (in English).

   Until the kit's :live is true, armenianpavilion.org shows only the images;
   other hosts (the review build) show the whole kit."
  (:require ["react-dom" :refer [createPortal]]
            [amp.data.films :as films]
            [amp.data.press-images :as press-images]
            [amp.i18n :as i18n :refer [t ts tx] :refer-macros [defcatalog]]
            [amp.lib.defnc :refer [defnc]]
            [amp.services.router :refer [flush-scroll!]]
            [amp.state.provider :refer [use-main-state]]
            [amp.ui.lightbox :refer [film-lightbox]]
            [amp.ui.picture :refer [picture media-host]]
            [amp.ui.studio-mark :refer [studio-mark]]
            [clojure.string :as str]
            [helix.core :refer [$ <>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(def ^:private data-url "/data/press/press.json")
(def ^:private csv-url "/data/press/captions.csv")
(def ^:private press-email "pressoffice@armenianpavilion.org")

(defcatalog "press")
(defcatalog "doc-press-kit")
(defcatalog "data-media")

(defn- sections
  "Image sections in the order the filter shows them; images with none are Other."
  []
  [["pavilion" (t :press/sec-pavilion)] ["process" (t :press/sec-process)]
   ["renderings" (t :press/sec-renderings)] ["people" (t :press/sec-people)]
   ["archive" (t :press/sec-archive)] ["" (t :press/sec-other)]])

(def ^:private notes ["studio" "serra" "tehran" "downtown" "accademia" "armenia"])

(defn- kit [] (i18n/doc :doc-press-kit))

(defn- m [s] (tx :data-media s))

(defn- pad2 [n] (.padStart (str n) 2 "0"))

(defn- src [{:keys [key]}] (str media-host key))
(def ^:private tiers [:s :m :l :raw])

(defn- fixed [n digits] (i18n/number n {:minimumFractionDigits digits :maximumFractionDigits digits}))

(defn- mb [bytes]
  (let [mbs (/ bytes 1e6)]
    (cond (>= mbs 1000) (t :press/gb {:n (fixed (/ mbs 1000) 1)})
          (< mbs 1) (t :press/kb {:n (fixed (/ bytes 1e3) 0)})
          (< mbs 10) (t :press/mb {:n (fixed mbs 1)})
          :else (t :press/mb {:n (fixed mbs 0)}))))

(defn- tier-info
  "\"1,200 × 953 px · JPEG · 0.6 MB\" for one download."
  [{:keys [w h ext bytes]}]
  (str (t :press/px {:w (i18n/number w) :h (i18n/number h)})
       " · " (str/upper-case (or ext "jpeg")) " · " (mb bytes)))

(defn- tier-name [k] (t (keyword "press" (str "tier-" (name k)))))

(defn- title-of
  "The image's title (or short caption, or caption) in the page's language."
  [{:keys [title caption_short caption]}]
  (m (or (not-empty title) (not-empty caption_short) caption)))

(defn- photo
  "The credit line. A credit that already says what it is (\"Photo Silvia Motta\", \"Rendering Aram Zadikian\",
  the caption house style since 12 Nov 2026) shows as written; a bare name gets \"Photo: name\"."
  [credit]
  (if (re-find #"^(Photo|Rendering|Drawing|Video still) " credit)
    (m credit)
    (ts :press/photo {:name (m credit)})))

(defn- copy-text [{:keys [caption caption_short credit]}]
  (or (m (not-empty caption)) (m (not-empty caption_short)) (when (seq credit) (photo credit))))

(defn- kind
  "Sketches, renderings and maquettes are labelled: they show work proposed or
   in progress. A sketch is a drawing or study (\"…, drawing\", \"…, study\")."
  [{:keys [section title caption]}]
  (let [t (str title " " caption)]
    (cond
      (or (re-find #"(?i),\s*(drawing|study|sketch)\b" (str title))
          (re-find #"(?i)\bdigital sketch\b|^(drawing|study|sketch) for\b" (str caption))) :sketch
      (or (= section "renderings") (re-find #"(?i)\brender" t)) :rendering
      (re-find #"(?i)\bmaquette|\bmodel\b" t) :maquette)))

(defn- zip-url [name uids size]
  (str "/press/zip/" name ".zip?" (when (seq uids) (str "i=" (str/join "," uids) "&")) "s=" size))

(defn- page-hash [] (not-empty (subs (.. js/location -hash) 1)))

;; A film or image has its own address, /press/films/carrying or
;; /press/images/<uid> (/it/press/… in Italian): the site Worker gives it its
;; own link preview (cloudflare/site/worker.js), which a #fragment can't have,
;; since it never reaches the server. #carrying is still read.

(defn- linked-item
  "The film or image the address names: /press/<page>/<item>, else #<item>."
  []
  (or (second (re-find #"/press/[^/]+/([^/]+)/?$" (.. js/location -pathname)))
      (page-hash)))

(defn- item-path [page item]
  (i18n/href (str "/press/" page (when item (str "/" item)))))

(defn- show-item!
  "Put the open film or image (or none) in the address bar, without a
   navigation, so it can be copied as it is."
  [page item]
  (.replaceState js/history (.-state js/history) "" (item-path page item)))

(defn- kit-link [page item] (str (.-origin js/location) (item-path page item)))

(defn- use-hash
  "Calls `f` with the #fragment when it changes (a link pasted into the
   address bar of an open page)."
  [f]
  (hooks/use-effect
   :once
   (let [on-hash #(f (page-hash))]
     (.addEventListener js/window "hashchange" on-hash)
     #(.removeEventListener js/window "hashchange" on-hash))))

(defn- show-kit? []
  (or (:live (kit)) (not= (.. js/location -hostname) "armenianpavilion.org")))

(defn- use-press
  "The image list: the copy built into the kit at once, then the live one."
  []
  (let [[data set-data!] (hooks/use-state {:images press-images/images})]
    (hooks/use-effect
     :once
     ;; Revalidated each time: a Sync replaces the list without a new build.
     (-> (js/fetch data-url #js {:cache "no-cache"})
         (.then #(when (.-ok %) (.json %)))
         (.then #(when % (set-data! (js->clj % :keywordize-keys true))))
         (.catch (fn [_]))))
    data))

;; ── Small parts ────────────────────────────────────────────────────────────

(defnc copy-button
  [{:keys [text label done class]}]
  (let [[copied? set-copied!] (hooks/use-state false)]
    (hooks/use-effect
     [copied?]
     (when copied?
       (let [t (js/setTimeout #(set-copied! false) 1600)]
         #(js/clearTimeout t))))
    (d/button {:type "button" :class (str "ap-press__btn " class)
               :on-click #(-> (.writeText js/navigator.clipboard text)
                              (.then (fn [] (set-copied! true))))}
              (if copied? done label))))

(defnc html
  "Kit text, rendered from its Markdown at build time."
  [{:keys [of class]}]
  (d/div {:class (str "ap-kit__prose " class) :dangerouslySetInnerHTML #js {:__html of}}))

(defnc sec
  "A kit section: anchor, eyebrow number and heading."
  [{:keys [id n label title children note]}]
  (d/section {:id id :class "ap-kit__sec"}
             (d/header {:class "ap-kit__head"}
                       (d/p {:class "ap-label ap-muted m-0"} (str (pad2 n) " · " label))
                       (when title (d/h2 {:class "ap-display-l m-0"} title))
                       (when note (d/p {:class "ap-label ap-muted m-0"} note)))
             children))

(defnc badge [{:keys [image]}]
  (when-let [k (kind image)]
    (d/span {:class "ap-kit__badge"} (t (keyword "press" (name k))))))

;; ── Viewer ─────────────────────────────────────────────────────────────────

(defnc downloads
  "Every size of one image. `compact?`: just the size names in one line (the
   cards), each with its pixels and file size as a tooltip; else a row per size."
  [{:keys [image compact?]}]
  (when-let [dl (:dl image)]
    (if compact?
      (d/div {:class "ap-press__sizes"}
             (for [k tiers :let [f (dl k)] :when f]
               (d/a {:key (name k) :href (str media-host (:key f)) :download (:name f)
                     :title (tier-info f)}
                    (tier-name k))))
      (d/ul {:class "ap-press__tiers"}
            (for [k tiers :let [f (dl k)] :when f]
              (d/li {:key (name k)}
                    (d/a {:href (str media-host (:key f)) :download (:name f)}
                         (d/span {:class "ap-press__dl-name"}
                                 (tier-name k)
                                 (when (= k :raw) (d/span {:class "ap-muted"} (str " · " (t :press/raw-note)))))
                         (d/span {:class "ap-press__dl-info"} (tier-info f)))))))))

(defnc viewer
  [{:keys [images at on-go on-close]}]
  (let [close-ref (hooks/use-ref nil)
        n (count images)
        image (when at (nth images at nil))]
    (hooks/use-effect
     [(some? image)]
     (when image
       (let [body (.-body js/document)
             prev-overflow (.. body -style -overflow)
             prev-focus (.-activeElement js/document)]
         (set! (.. body -style -overflow) "hidden")
         (some-> @close-ref (.focus #js {:preventScroll true}))
         (fn []
           (set! (.. body -style -overflow) prev-overflow)
           (some-> prev-focus (.focus #js {:preventScroll true}))))))
    (hooks/use-effect
     [at n]
     (when at
       (let [on-key (fn [^js e]
                      (case (.-key e)
                        "Escape" (on-close)
                        "ArrowLeft" (on-go (mod (dec at) n))
                        "ArrowRight" (on-go (mod (inc at) n))
                        nil))]
         (.addEventListener js/window "keydown" on-key)
         #(.removeEventListener js/window "keydown" on-key))))
    (when image
      (let [{:keys [caption credit section]} image
            label (some (fn [[k v]] (when (= k section) v)) (sections))]
        (createPortal
         (d/div {:class "ap-lightbox ap-press__viewer" :role "dialog" :aria-modal true
                 :aria-label (title-of image)}
                (d/div {:class "ap-lightbox__bar"}
                       (d/p {:class "ap-label m-0"}
                            (d/span {:class "text-yellow"} (str (pad2 (inc at)) " / " (pad2 n)))
                            (when label (str " · " label)))
                       (d/button {:ref close-ref :class "ap-iconbtn" :aria-label (ts :press/close)
                                  :on-click on-close}
                                 (d/svg {:viewBox "0 0 16 16" :fill "none" :stroke "currentColor"
                                         :stroke-width 1.6 :aria-hidden true}
                                        (d/path {:d "M3 3l10 10M13 3L3 13"}))))
                (d/div {:class "ap-press__stage"}
                       (d/div {:class "ap-press__shot"
                               :style (when (and (:w image) (:h image)) #js {"--hw" (/ (:h image) (:w image))})
                               :on-click #(when (= (.-target %) (.-currentTarget %)) (on-close))}
                              ($ picture {:key (:uid image) :src (src image) :alt (title-of image)
                                          :sizes "(min-width: 960px) 70vw, 100vw" :eager? true}))
                       (d/div {:class "ap-press__info"}
                              ($ badge {:image image})
                              (d/p {:class "ap-press__vtitle"} (title-of image))
                              (when (seq caption) (d/p {:class "ap-press__cap"} (m caption)))
                              (when (and (seq credit) (not (re-find #"Photo:" (or caption ""))))
                                (d/p {:class "ap-label m-0"} (photo credit)))
                              ($ downloads {:image image})
                              (d/div {:class "flex flex-wrap gap-2"}
                                     (when-let [c (copy-text image)]
                                       ($ copy-button {:text c :label (t :press/copy-caption) :done (t :press/copied)}))
                                     ($ copy-button {:text (kit-link "images" (:uid image))
                                                     :label (t :press/copy-link) :done (t :press/copied)}))
                              (d/div {:class "ap-press__nav"}
                                     (d/button {:type "button" :class "ap-press__btn"
                                                :on-click #(on-go (mod (dec at) n))} (t :press/prev))
                                     (d/button {:type "button" :class "ap-press__btn"
                                                :on-click #(on-go (mod (inc at) n))} (t :press/next))))))
         (.-body js/document))))))

;; ── Image library ──────────────────────────────────────────────────────────

(defnc press-card
  [{:keys [id image on-open picked? on-pick]}]
  (let [{:keys [w h date credit]} image]
    (d/li {:id id :class "ap-press__item" :data-picked (when picked? "")}
          (d/div {:class "relative"}
                 (d/button {:type "button" :class "ap-press__frame" :on-click on-open
                            :aria-label (ts :press/view {:title (title-of image)})}
                           ($ picture {:src (src image) :alt (title-of image)
                                       :ar (when (and w h) (/ w h))
                                       :sizes "(min-width: 1440px) 25vw, (min-width: 1100px) 33vw, (min-width: 720px) 50vw, 100vw"}))
                 (d/label {:class "ap-press__pick"}
                          (d/input {:type "checkbox" :checked (boolean picked?) :on-change on-pick})
                          (d/span (t (if picked? :press/selected :press/select))))
                 ($ badge {:image image}))
          ;; One line each, cut with an ellipsis, so every card is the same
          ;; height; the viewer has the whole caption.
          (d/div {:class "ap-press__meta"}
                 (d/p {:class "ap-press__title" :title (title-of image)}
                      (title-of image)
                      (when (seq date) (d/span {:class "ap-muted"} (str ", " (m date)))))
                 (d/p {:class "ap-press__credit" :title (when (seq credit) (photo credit))}
                      (if (seq credit) (photo credit) "\u00a0"))
                 ($ downloads {:image image :compact? true})))))

(defnc zip-links
  "A ZIP of these images per size, with its total size."
  [{:keys [name images uids]}]
  (<>
   (for [k tiers
         :let [bytes (reduce + (keep #(get-in % [:dl k :bytes]) images))]
         :when (pos? bytes)]
     (d/a {:key (cljs.core/name k) :class "ap-press__btn" :href (zip-url name uids (cljs.core/name k))}
          (str (tier-name k) " · " (mb bytes))))))

(defnc library
  [{:keys [images]}]
  (let [present (set (map :section images))
        filters (filter #(present (first %)) (sections))
        [sec set-sec!] (hooks/use-state nil)
        shown (if sec (filterv #(= sec (:section %)) images) (vec images))
        [picked set-picked!] (hooks/use-state #{})
        ;; Picks survive filtering; ones a Sync removed drop out.
        uids (set (map :uid images))
        picked (into #{} (filter uids) picked)
        chosen (filterv #(picked (:uid %)) images)
        ;; The open image, by uid: /press/images/<uid> opens it, and the address
        ;; follows the viewer so it can be copied and shared.
        [open set-open!] (hooks/use-state linked-item)
        at (when open (let [i (.indexOf (to-array (map :uid shown)) open)] (when (>= i 0) i)))
        set-at! (fn [i]
                  (let [uid (when i (:uid (nth shown i nil)))]
                    (set-open! uid)
                    (show-item! "images" uid)))
        _ (use-hash set-open!)
        _ (hooks/use-effect :once (when open (js/setTimeout #(show-item! "images" open) 600)))
        all-shown? (and (seq shown) (every? #(picked (:uid %)) shown))]
    (<>
     (d/div {:class "ap-press__tools"}
            (d/p {:class "ap-label ap-muted m-0 max-w-[70ch] leading-relaxed"}
                 (t :press/images-note) " "
                 (d/a {:href csv-url :download "armenian-pavilion-press-captions.csv" :class "underline underline-offset-2"}
                      (t :press/csv)))
            (when (> (count filters) 1)
              (d/div {:class "ap-filter" :role "group" :aria-label (ts :press/filter)}
                     (d/button {:aria-pressed (nil? sec) :on-click #(set-sec! nil)}
                               (t :press/all-n {:n (count images)}))
                     (for [[k label] filters]
                       (d/button {:key k :aria-pressed (= k sec) :on-click #(set-sec! k)}
                                 (t :press/section-n {:label label :n (count (filter (fn [i] (= k (:section i))) images))})))))
            (d/div {:class "ap-press__zips"}
                   (d/span {:class "ap-label ap-muted"} (t (if sec :press/zips-section :press/zips-all) {:n (count shown)}))
                   ($ zip-links {:name (str "armenian-pavilion-press-" (if sec (if (= sec "") "other" sec) "all"))
                                 :images shown :uids (when sec (map :uid shown))})
                   (d/button {:type "button" :class "ap-press__btn"
                              :on-click #(set-picked! (if all-shown?
                                                        (apply disj picked (map :uid shown))
                                                        (into picked (map :uid shown))))}
                             (if all-shown? (t :press/clear) (t :press/pick-all)))))
     (if (empty? shown)
       (d/p {:class "ap-body ap-muted py-12"} (t :press/on-way))
       (d/ul {:class "ap-press pb-16 lg:pb-24"}
             (map-indexed
              (fn [i image]
                (let [uid (:uid image)]
                  ($ press-card {:key uid :id uid :image image
                                 :picked? (picked uid)
                                 :on-pick #(set-picked! (if (picked uid) (disj picked uid) (conj picked uid)))
                                 :on-open #(set-at! i)})))
              shown)))
     ;; The selection bar, fixed at the foot of the window while anything is picked.
     (when (seq chosen)
       (d/div {:class "ap-press__bar" :role "region" :aria-label (ts :press/selected)}
              (d/span {:class "ap-label"} (t :press/n-selected {:n (count chosen)}))
              (d/div {:class "flex flex-wrap gap-2"}
                     ($ zip-links {:name (if (= 1 (count chosen))
                                           (:file (first chosen))
                                           (str "armenian-pavilion-press-selection-" (count chosen)))
                                   :images chosen :uids (map :uid chosen)})
                     (d/button {:type "button" :class "ap-press__btn" :on-click #(set-picked! #{})} (t :press/clear)))))
     ($ viewer {:images shown :at at :on-go set-at! :on-close #(set-at! nil)}))))

;; ── Kit sections ───────────────────────────────────────────────────────────

(defnc note-images
  "A story note's images, from the library by uid: open in the viewer."
  [{:keys [uids by-uid]}]
  (let [images (keep by-uid uids)
        [at set-at!] (hooks/use-state nil)]
    (when (seq images)
      (<>
       (d/ul {:class "ap-kit__thumbs"}
             (map-indexed
              (fn [i image]
                (d/li {:key (:uid image)}
                      (d/div {:class "relative"}
                             (d/button {:type "button" :class "ap-press__frame" :on-click #(set-at! i)
                                        :aria-label (ts :press/view {:title (title-of image)})}
                                       ($ picture {:src (src image) :alt (title-of image)
                                                   :sizes "(min-width: 1100px) 20vw, 50vw"}))
                             ($ badge {:image image}))
                      (d/p {:class "ap-label ap-muted m-0"} (title-of image))))
              images))
       ($ viewer {:images (vec images) :at at :on-go set-at! :on-close #(set-at! nil)})))))

(defn- mmss [s] (str (quot s 60) ":" (pad2 (mod s 60))))

(defnc film-row
  [{:keys [film text on-play]}]
  (let [{:keys [slug title playback-id duration poster]} film
        tiers (if (= slug "murano") ["1080p"] ["2160p" "1440p" "1080p"])
        {:keys [date credit line held]} text]
    (d/li {:class "ap-kit__film" :id slug}
          ;; Plays here, in the film lightbox.
          (d/button {:type "button" :class "ap-kit__poster" :on-click on-play
                     :aria-label (ts :press/play {:title (or (:title text) title)})}
                    (d/img {:src (str "https://image.mux.com/" playback-id "/thumbnail.webp?width=640&time=" poster)
                            :alt "" :loading "lazy" :width 640 :height 360})
                    (d/span {:class "ap-kit__play" :aria-hidden true}
                            (d/svg {:width 20 :height 20 :viewBox "0 0 16 16" :fill "currentColor"}
                                   (d/path {:d "M4 2l10 6-10 6z"}))))
          (d/div {:class "grid gap-2 content-start"}
                 (d/h2 {:class "ap-h3 m-0"} (or (:title text) title))
                 (d/p {:class "ap-label ap-muted m-0"}
                      (str/join " · " (remove str/blank? [(mmss duration) (or date (:when film)) credit])))
                 (when line (d/p {:class "ap-kit__filmline"} line))
                 (when-let [h (:html text)] ($ html {:of h :class "ap-kit__small ap-muted"}))
                 (d/div {:class "ap-press__dl"}
                        (if held
                          (d/a {:class "ap-press__btn" :href (str "mailto:" press-email "?subject=" (js/encodeURIComponent (ts :press/film-subject {:title title})))}
                               (t :press/held))
                          (for [r tiers]
                            (d/a {:key r :class "ap-press__btn"
                                  :href (str "https://stream.mux.com/" playback-id "/" r ".mp4?download="
                                             (js/encodeURIComponent (str "armenian-pavilion-" slug "-" r)))}
                                 (str "MP4 · " r))))
                        ($ copy-button {:text (kit-link "films" slug) :label (t :press/copy-link) :done (t :press/copied)}))))))

(defnc film-list
  "The films, each playing in the lightbox from its poster; `only`: just
   these slugs, in that order."
  [{:keys [video only]}]
  ;; /press/films/carrying opens that film, and the address follows the
  ;; lightbox so it can be copied and shared.
  (let [by-slug (fn [h] (let [h (some-> h (str/replace #"^film-" ""))]   ; #film-<slug> was the old form
                          (some #(when (= (:slug %) h) %) (films/films))))
        [playing set-playing!] (hooks/use-state #(by-slug (linked-item)))
        play! (fn [film] (set-playing! film) (show-item! "films" (:slug film)))]
    (use-hash #(set-playing! (by-slug %)))
    (hooks/use-effect :once (when playing (js/setTimeout #(show-item! "films" (:slug playing)) 600)))
    (<>
     (d/ul {:class "ap-kit__films"}
           (for [film (if only
                        (keep (fn [s] (some #(when (= (:slug %) s) %) (films/films))) only)
                        (films/films))
                 :let [text (some #(when (= (:slug %) (:slug film)) %) (:films video))]]
             ($ film-row {:key (:slug film) :film film :text text
                          :on-play #(play! film)})))
     ($ film-lightbox {:film playing :on-close #(play! nil)}))))

(defnc fact-table
  "Property: value rows, with a copy button for the whole sheet."
  [{:keys [rows]}]
  (d/dl {:class "ap-kit__table"}
        (for [{:keys [k html]} rows]
          (d/div {:key k :class "ap-kit__row"}
                 (d/dt k)
                 (d/dd {:dangerouslySetInnerHTML #js {:__html html}})))))

;; ── Story pitches ──────────────────────────────────────────────────────────

(def ^:private walk-loop-host (str media-host "walks/films/"))

(defnc pitch-loops
  "Silent clips from the walks (R2 walks/films/<id>.mp4, poster <id>.jpg):
   each plays on click, and downloads as MP4."
  [{:keys [ids]}]
  (d/ul {:class "ap-pitch__loops"}
        (for [id ids]
          (d/li {:key id}
                (d/video {:src (str walk-loop-host id ".mp4")
                          :poster (str media-host "walks/films/" id "-800.webp")
                          :muted true :loop true :playsInline true :controls true :preload "none"
                          :width 800 :height 450})
                (d/a {:class "ap-label" :href (str walk-loop-host id ".mp4")
                      :download (str "armenian-pavilion-" id ".mp4")}
                     (str (t :press/film-download) " · " id))))))

(declare page-href)

(defnc letterhead
  "The release's head, as on its PDF: The Studio's mark in black with the
   pavilion's name (as in the site header) and La
   Biennale's National Participations logo (the official RGB file, placed by
   the 2026 logo guide for a horizontal support; see .ap-letter in the CSS),
   so a journalist sees at once that the mail comes from a national pavilion."
  [{:keys [label]}]
  (d/header {:class "ap-letter"}
            (d/div {:class "ap-letter__brand"}
                   ($ studio-mark {:variants #{} :label nil})
                   (d/p (t :press/letter-name) (d/br) (d/span "Biennale Arte 2026")))
            (d/div {:class "ap-letter__text"}
                   (d/p {:class "ap-letter__kind"} label))
            (d/img {:class "ap-letter__bie" :src "/images/press/biennale-61-PartNaz-RGB.png"
                    :alt (ts :press/biennale-alt)
                    :width 640 :height 595})))

(defnc pitch
  "A press release with its own page (/press/release/tricolore): the release
   itself, its PDFs in both languages, images from the library, films and
   walk clips."
  [{:keys [id p by-uid]}]
  (let [{body :html :keys [date-text pdfs images films loops]} p
        it-link (str (.-origin js/location) (i18n/href (str "/press/release/" id) "it"))]
    (<>
     ($ letterhead {:label (<> (d/b (t :press/release)) " · " date-text)})
     (d/div {:class "ap-kit__dl"}
            (for [l [:it :en] :let [url (get pdfs l)] :when url]
              (d/a {:key (name l) :class "ap-press__btn" :href url :download true}
                   (str (t :press/pdf) " · " (str/upper-case (name l)))))
            ($ copy-button {:text (kit-link "release" id) :label (t :press/copy-link) :done (t :press/copied)})
            (when (not= (i18n/locale) "it")
              ($ copy-button {:text it-link :label (t :press/copy-it) :done (t :press/copied)}))
            (d/a {:class "ap-press__btn" :href (page-href "")} (t :press/kit-link)))
     ($ html {:of body})
     (d/ul {:class "ap-pitch__links"}
           (d/li (d/a {:href (i18n/href "/walks")} (str (t :press/pitch-walks) " →")))
           (d/li (d/a {:href "https://www.accademiavenezia.it/eventi/zadik-zadikian-performance-e-incontro-con-l-artista-905.html"
                       :target "_blank" :rel "noopener"} (str (t :press/pitch-acc) " ↗"))))
     (when (seq images)
       (d/section {:class "ap-pitch__sec"}
                  (d/h2 {:class "ap-h1 m-0"} (t :press/pitch-images))
                  ($ note-images {:uids images :by-uid by-uid})))
     (when (seq films)
       (d/section {:class "ap-pitch__sec"}
                  (d/h2 {:class "ap-h1 m-0"} (t :press/pitch-films))
                  ($ film-list {:only films})))
     (when (seq loops)
       (d/section {:class "ap-pitch__sec"}
                  (d/h2 {:class "ap-h1 m-0"} (t :press/pitch-loops))
                  (d/p {:class "ap-label ap-muted m-0"} (t :press/loops-note))
                  ($ pitch-loops {:ids loops}))))))

(def ^:private release-slugs
  "Releases with their own page under /press/release/<slug>, newest first:
   [slug kit-key]. The general release (release.md) is the last of them."
  [["tricolore" :tricolore]
   ["final-weeks" :release]])

;; ── Sections and the menu ──────────────────────────────────────────────────

(def ^:private pages
  "The press kit's sub-pages, in menu order: [path label-key blurb-key needs]
   (needs: the kit sections that must exist for the page to be listed)."
  [["" :press/overview nil nil]
   ["release" :press/releases :press/release-blurb [:release :tricolore]]
   ["facts" :press/facts :press/facts-blurb [:facts]]
   ["stories" :press/notes :press/notes-blurb (mapv keyword notes)]
   ["images" :press/images :press/images-blurb nil]
   ["films" :press/video :press/video-blurb [:video]]
   ["people" :press/people :press/people-blurb [:people :chronology]]
   ["quotes" :press/quotes :press/quotes-blurb [:quotes]]
   ["visit" :press/visit :press/visit-blurb [:visit]]
   ["coverage" :press/coverage :press/coverage-blurb [:coverage]]
   ["logos" :press/logos :press/logos-blurb [:logos]]])

(def ^:private old-anchors
  "Anchors of the single-page kit (pitches link to them): where they live now."
  (merge {"essentials" "" "release" "release" "tricolore" "release/tricolore" "facts" "facts" "notes" "stories"
          "images" "images" "video" "films" "people" "people" "chronology" "people"
          "quotes" "quotes" "visit" "visit" "coverage" "coverage" "logos" "logos"}
         (zipmap notes (repeat "stories"))))

(defn- page-href
  "A kit sub-page in the current locale (or locale `l`): \"release\" → /it/press/release."
  ([path] (i18n/href (str "/press" (when (seq path) (str "/" path)))))
  ([path l] (i18n/href (str "/press" (when (seq path) (str "/" path))) l)))

(defn- go!
  "Replace the address with `url` and let the router follow it."
  [url]
  (.replaceState js/history nil "" url)
  (.dispatchEvent js/window (js/PopStateEvent. "popstate")))

(defnc press-menu
  [{:keys [listed here k]}]
  (let [ref (hooks/use-ref nil)]
    ;; On phones the menu is a scrolling row: bring the current tab into view.
    (hooks/use-layout-effect
     [here]
     (when-let [nav @ref]
       (when-let [a (.querySelector nav "[aria-current=page]")]
         (when (> (.-scrollWidth nav) (.-clientWidth nav))
           (set! (.-scrollLeft nav) (- (.-offsetLeft a) (/ (- (.-clientWidth nav) (.-offsetWidth a)) 2)))))))
  (d/nav {:class "ap-kit__menu" :aria-label (ts :press/sections) :ref ref :data-scroll-x ""}
         (d/ol {:class "ap-kit__menu-list"}
               (for [[path label] listed]
                 (d/li {:key path}
                       (d/a {:href (page-href path)
                             :aria-current (when (= path here) "page")}
                            (t label))
                       ;; The story notes, under Stories while it's open.
                       (when (and (= path "stories") (= here "stories"))
                         (d/ol {:class "ap-kit__menu-sub"}
                               (for [id notes :let [note (get k (keyword id))] :when note]
                                 (d/li {:key id} (d/a {:href (str (page-href "stories") "#" id)} (:title note))))))))))))

(defnc press-page
  []
  (let [l (i18n/locale)
        kit? (show-kit?)
        doc (kit)
        ;; Every section, in the page's language or (marked :en-only) in English.
        k (if kit? (dissoc doc :live) {})
        en-only (fn [id] (when (get-in k [id :en-only]) (t :press/english-only)))
        [state _] (use-main-state)
        route (:current-route state)
        group (keyword "amp.services.router" (str "press" (when (not= l i18n/default-locale) (str "." l))))
        ;; While another page's route fades this one out, keep the section showing.
        last-here (hooks/use-ref "")
        here (if (= group (-> route :data :group))
               (set! (.-current last-here) (or (-> route :path-params :section) ""))
               @last-here)
        listed (if kit?
                 (filter (fn [[_ _ _ needs]] (or (nil? needs) (some k needs))) pages)
                 [["images" :press/images]])
        raw-here here
        here (if (some #(= here (first %)) listed) here (if kit? "" "images"))
        ;; /press/release/<slug>: one release on its own page.
        item (when (= here "release") (-> route :path-params :item))
        rel (when item (some (fn [[slug kk]] (when (= slug item) (get k kk))) release-slugs))
        data (use-press)
        images (:images data)
        by-uid (into {} (map (juxt :uid identity)) images)
        {:keys [essentials release facts people chronology quotes visit coverage logos video]} k
        title (if rel (:title rel) (some (fn [[p label]] (when (= p here) (t label))) listed))]
    ;; The flag-walk release lived at /press/tricolore before the releases had a section.
    (hooks/use-layout-effect
     [raw-here]
     (when (and kit? (= raw-here "tricolore")) (go! (page-href "release/tricolore"))))
    ;; Old single-page anchors (/press#serra) go to their sub-page.
    (hooks/use-layout-effect
     :once
     (let [h (subs (.. js/location -hash) 1)]
       (when (and kit? (= here "") (contains? old-anchors h) (not= h "essentials"))
         (go! (str (page-href (old-anchors h)) (when (some #{h} notes) (str "#" h)) (when (= h "chronology") "#chronology"))))))
    (hooks/use-effect
     [here]
     (flush-scroll!)
     (set! (.-title js/document)
           (ts :press/doc-title {:page (if (= here "") (ts (if kit? :press/title :press/images-title)) title)})))
    (hooks/use-effect [item] (flush-scroll!))
    (d/div {:class "ap-wrap"}
           (d/div {:class "ap-kit__top"}
                  (d/p {:class "ap-label ap-muted m-0"}
                       (if (= here "")
                         (t :press/eyebrow)
                         (if rel
                           (d/a {:href (page-href "release") :class "ap-kit__crumb"} (t :press/releases))
                           (d/a {:href (page-href "") :class "ap-kit__crumb"} (t (if kit? :press/title :press/eyebrow))))))
                  (d/h1 {:class "ap-display-l m-0"}
                        (cond (not kit?) (t :press/images-title)
                              (= here "") (t :press/title)
                              :else title))
                  (when (and kit? (not (:live doc)))
                    (d/p {:class "ap-kit__draft"} (t :press/draft))))
           (d/div {:class (if kit? "ap-kit" "")}
                  (when kit? ($ press-menu {:listed listed :here here :k k}))
                  (d/div {:class "ap-kit__main"}
                         (when-let [n (and (not (#{"" "images" "stories"} here))
                                           (if rel
                                             (when (:en-only rel) (t :press/english-only))
                                             (en-only (keyword (if (= here "films") "video" here)))))]
                           (d/p {:class "ap-label ap-muted m-0"} n))
                         (case here
                           ""
                           (<>
                            (when essentials
                              (<>
                               ($ html {:of (:lead essentials) :class "ap-kit__lead"})
                               (when-let [rows (seq (remove :book (:rows essentials)))]
                                 ($ fact-table {:rows rows}))
                               (when (seq (:html essentials)) ($ html {:of (:html essentials)}))
                               (d/p {:class "m-0"}
                                    (d/a {:class "ap-btn ap-btn--red"
                                          :href (str "mailto:" press-email "?subject=" (js/encodeURIComponent (ts :press/book-subject)))}
                                         (t :press/book)))))
                            (d/ul {:class "ap-kit__cards"}
                                  (for [[path label blurb] (rest listed)]
                                    (d/li {:key path}
                                          (d/a {:href (page-href path)}
                                               (d/span {:class "ap-h3"} (t label))
                                               (d/span {:class "ap-kit__blurb"} (t blurb))
                                               (d/span {:class "ap-kit__arrow" :aria-hidden true} "→"))))))

                           "release"
                           (cond
                             (and rel (= item "tricolore"))
                             ($ pitch {:id "tricolore" :p rel :by-uid by-uid})

                             rel
                             (<>
                              ($ letterhead {:label (<> (d/b (t :press/release)) " · " (or (:date-text rel) (:date rel)))})
                              (d/div {:class "ap-kit__dl"}
                                     (for [[l url] (:pdfs rel)]
                                       (d/a {:key l :class "ap-press__btn" :href url :download true}
                                            (str (t :press/pdf) " · " (str/upper-case (name l)))))
                                     ($ copy-button {:text (kit-link "release" item) :label (t :press/copy-link) :done (t :press/copied)}))
                              ($ html {:of (:html rel)}))

                             :else
                             (<>
                              (d/ul {:class "ap-kit__releases"}
                                    (for [[slug kk] release-slugs :let [r (get k kk)] :when r]
                                      (d/li {:key slug}
                                            (d/a {:href (page-href (str "release/" slug))}
                                                 (d/span {:class "ap-label ap-muted"} (or (:date-text r) (:date r)))
                                                 (d/span {:class "ap-h3"} (:title r))
                                                 (when-let [b (:blurb r)] (d/span {:class "ap-kit__blurb"} b))
                                                 (d/span {:class "ap-kit__arrow" :aria-hidden true} "→")))))
                              (when (seq (:earlier release))
                                (d/div {:class "ap-kit__earlier"}
                                       (d/p {:class "ap-label ap-muted m-0"} (t :press/earlier))
                                       (d/ul
                                        (for [{:keys [title date url]} (:earlier release)]
                                          (d/li {:key title}
                                                (d/span {:class "ap-label ap-muted"} date)
                                                (if url (d/a {:href url} title) (d/span title)))))))))

                           "facts"
                           (<>
                            (d/p {:class "m-0"} ($ copy-button {:text (:text facts) :label (t :press/copy-facts) :done (t :press/copied)}))
                            ($ fact-table {:rows (:rows facts)})
                            (when (seq (:html facts)) ($ html {:of (:html facts)})))

                           "stories"
                           (<>
                           (when (:tricolore k)
                             (d/ul {:class "ap-kit__cards"}
                                   (d/li (d/a {:href (page-href "release/tricolore")}
                                              (d/span {:class "ap-h3"} (:title (:tricolore k)))
                                              (d/span {:class "ap-kit__blurb"} (t :press/pitch-card))
                                              (d/span {:class "ap-kit__arrow" :aria-hidden true} "→")))))
                           (for [id notes
                                 :let [note (get k (keyword id))]
                                 :when note]
                             (d/article {:key id :id id :class "ap-kit__note"}
                                        (d/h2 {:class "ap-h1 m-0"} (:title note))
                                        (when-let [n (en-only (keyword id))] (d/p {:class "ap-label ap-muted m-0"} n))
                                        ($ html {:of (:html note)})
                                        ($ note-images {:uids (:images note) :by-uid by-uid}))))

                           "images"
                           ($ library {:images images})

                           "films"
                           ($ film-list {:video video})

                           "people"
                           (<>
                            (d/div {:class "ap-kit__people"}
                                   (for [{:keys [name role html short text]} (:people people)]
                                     (d/article {:key name :class "ap-kit__person"}
                                                (d/h2 {:class "ap-h3 m-0"} name)
                                                (d/p {:class "ap-label ap-muted m-0"} role)
                                                ($ amp.pages.press.page/html {:of html :class "ap-kit__small"})
                                                (when short
                                                  (d/p {:class "ap-kit__short"} (d/span {:class "ap-label ap-muted"} (t :press/short)) " " short))
                                                (d/p {:class "m-0"} ($ copy-button {:text text :label (t :press/copy-bio) :done (t :press/copied)})))))
                            (when chronology
                              (d/section {:id "chronology" :class "ap-kit__chron-wrap"}
                                         (d/h2 {:class "ap-h1 m-0"} (t :press/chronology))
                                         (d/ol {:class "ap-kit__chron"}
                                               (for [[i item] (map-indexed vector (:items chronology))]
                                                 (d/li {:key i}
                                                       (d/span {:class "ap-label"} (:when item))
                                                       (d/span {:dangerouslySetInnerHTML #js {:__html (:html item)}})))))))

                           "quotes"
                           (d/ul {:class "ap-kit__quotes"}
                                 (for [[i {:keys [speaker text source]}] (map-indexed vector (:quotes quotes))]
                                   (d/li {:key i}
                                         (d/blockquote {:class "m-0"} (ts :press/quoted {:text text}))
                                         (d/p {:class "ap-label m-0"} speaker)
                                         (when source
                                           (d/p {:class "ap-label ap-muted m-0"}
                                                (t :press/source) " "
                                                (d/span {:dangerouslySetInnerHTML #js {:__html source}})))
                                         (d/p {:class "m-0"}
                                              ($ copy-button {:text (str (ts :press/quoted {:text text}) " " speaker) :label (t :press/copy-quote) :done (t :press/copied)})))))

                           "visit"
                           ($ html {:of (:html visit)})

                           "coverage"
                           (d/ul {:class "ap-kit__coverage"}
                                 (for [{:keys [outlet title date url]} (:items coverage)]
                                   (d/li {:key (str outlet title)}
                                         (d/span {:class "ap-label"} outlet)
                                         (if url
                                           (d/a {:href url :target "_blank" :rel "noopener noreferrer"} title)
                                           (d/span title))
                                         (d/span {:class "ap-label ap-muted"} date))))

                           "logos"
                           (<>
                            (when (seq (:files logos))
                              (d/ul {:class "ap-kit__logos"}
                                    (for [{:keys [name preview dark files]} (:files logos)]
                                      (d/li {:key name}
                                            (d/div {:class (str "ap-kit__logo" (when dark " ap-kit__logo--dark"))}
                                                   (d/img {:src preview :alt name :loading "lazy"}))
                                            (d/p {:class "ap-label m-0"} name)
                                            (d/div {:class "ap-press__sizes ap-press__sizes--wrap"}
                                                   (for [{:keys [label url]} files]
                                                     (d/a {:key label :href url :download true} label)))))))
                            ($ html {:of (:html logos)}))

                           nil)
                         (d/div {:class "pb-16"}))))))

(defnc press-view [_props] ($ press-page))
