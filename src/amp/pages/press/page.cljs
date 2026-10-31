(ns amp.pages.press.page
  "The press page, /press and /it/press: the press kit (amp.data.press-kit,
   built from the press_kit Markdown by build/press-kit.mjs), then the image
   library, films, people, quotes, visits, coverage and logos. Each section
   has a stable anchor (/press#serra) for pitches to link to.

   The images are resources/data/press/press.json, built by `npm run press`
   from the Caption Genius project \"Pavilion — Press\" (the images marked
   Include, in its order); they are on R2 under press/<uid>, each with a
   2400px JPEG and a full-size JPEG. The kit carries a copy of the list so the
   page is laid out at once; the live list replaces it (a Sync changes it
   without a new build). Images can be picked one by one, by section or all,
   and download as one ZIP made by the site Worker (/press/zip/…), with the
   captions as CSV inside.

   Until the kit's :live is true, armenianpavilion.org shows only the images;
   other hosts (the review build) show the whole kit."
  (:require ["react-dom" :refer [createPortal]]
            [amp.data.films :as films]
            [amp.data.press-kit :as press-kit]
            [amp.lib.defnc :refer [defnc]]
            [amp.ui.picture :refer [picture media-host]]
            [clojure.string :as str]
            [helix.core :refer [$ <>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(def ^:private data-url "/data/press/press.json")
(def ^:private csv-url "/data/press/captions.csv")
(def ^:private press-email "pressoffice@armenianpavilion2026.org")

(def ^:private sections
  "Image sections in the order the filter shows them; images with none are Other."
  {:en [["pavilion" "The Pavilion"] ["process" "Process"] ["renderings" "Renderings"]
        ["people" "People"] ["archive" "Archive"] ["" "Other"]]
   :it [["pavilion" "Il Padiglione"] ["process" "Lavorazione"] ["renderings" "Rendering"]
        ["people" "Persone"] ["archive" "Archivio"] ["" "Altro"]]})

(def ^:private notes ["studio" "serra" "tehran" "downtown" "accademia" "armenia"])

(def ^:private copy
  {:en {:eyebrow "Press" :title "Press kit" :images-title "Press images"
        :lede "The Studio, Zadik Zadikian’s Armenian Pavilion at Biennale Arte 2026: the work, its making, the people and the archive behind it."
        :essentials "Essentials" :release "Press release" :facts "Fact sheet" :notes "Story notes"
        :images "Images" :video "Films" :people "People" :chronology "Chronology" :quotes "Quotes"
        :visit "Studio visits" :coverage "Coverage" :logos "Logos and credits"
        :book "Book a studio visit or interview" :book-subject "Studio visit or interview request"
        :earlier "Earlier releases" :pdf "PDF" :copy-facts "Copy fact sheet" :copy-bio "Copy bio"
        :copy-quote "Copy quote" :copied "Copied" :copy-caption "Copy caption"
        :images-note "For press use with the caption and credit given. Renderings and maquettes are labelled as such: they show work proposed or in progress, not built."
        :csv "All captions (CSV)" :all "All" :select "Select" :selected "Selected"
        :download "Download" :zip-jpeg "JPEGs, 2400 px · ZIP" :zip-full "Full size · ZIP"
        :jpeg "JPEG · 2400 px" :full "Full size" :clear "Clear" :pick-all "Select all"
        :n-selected #(str % (if (= % 1) " image selected" " images selected"))
        :section-zip "This section" :all-zip "All images"
        :rendering "Rendering" :maquette "Maquette"
        :film-download "Download MP4" :held "Download on request" :short "Short bio"
        :source "Source" :draft "Review build. Not public: the kit shows on armenianpavilion.org only once approved."
        :english-only "In English only." :later "To come." :prev "← Previous" :next "Next →"
        :close "Close" :photo "Photo: " :view "View: " :on-way "Press images are on their way."
        :filter "Filter by section" :contents "On this page"}
   :it {:eyebrow "Stampa" :title "Cartella stampa" :images-title "Immagini per la stampa"
        :lede "The Studio, il Padiglione della Repubblica di Armenia alla Biennale Arte 2026 con Zadik Zadikian: l’opera, la sua lavorazione, le persone e l’archivio."
        :essentials "In breve" :release "Comunicato stampa" :facts "Scheda" :notes "Approfondimenti"
        :images "Immagini" :video "Video" :people "Biografie" :chronology "Cronologia" :quotes "Citazioni"
        :visit "Visite in studio" :coverage "Rassegna stampa" :logos "Loghi e crediti"
        :book "Prenota una visita in studio o un’intervista" :book-subject "Richiesta di visita o intervista"
        :earlier "Comunicati precedenti" :pdf "PDF" :copy-facts "Copia la scheda" :copy-bio "Copia la biografia"
        :copy-quote "Copia la citazione" :copied "Copiato" :copy-caption "Copia la didascalia"
        :images-note "Per uso stampa, con la didascalia e il credito indicati. Rendering e modelli sono indicati come tali: mostrano opere proposte o in lavorazione, non realizzate."
        :csv "Tutte le didascalie (CSV)" :all "Tutte" :select "Seleziona" :selected "Selezionata"
        :download "Scarica" :zip-jpeg "JPEG, 2400 px · ZIP" :zip-full "Dimensione piena · ZIP"
        :jpeg "JPEG · 2400 px" :full "Dimensione piena" :clear "Annulla" :pick-all "Seleziona tutte"
        :n-selected #(str % (if (= % 1) " immagine selezionata" " immagini selezionate"))
        :section-zip "Questa sezione" :all-zip "Tutte le immagini"
        :rendering "Rendering" :maquette "Modello"
        :film-download "Scarica MP4" :held "Download su richiesta" :short "Biografia breve"
        :source "Fonte" :draft "Versione di revisione, non pubblica."
        :english-only "Solo in inglese." :later "In arrivo." :prev "← Precedente" :next "Successiva →"
        :close "Chiudi" :photo "Foto: " :view "Apri: " :on-way "Le immagini sono in arrivo."
        :filter "Filtra per sezione" :contents "In questa pagina"}})

(defn- pad2 [n] (.padStart (str n) 2 "0"))

(defn- src [{:keys [key]}] (str media-host key))
(defn- jpeg [{:keys [key]}] (str media-host key ".jpg"))
(defn- full-jpeg [{:keys [key]}] (str media-host key "-full.jpg"))

(defn- title-of [{:keys [title caption_short caption]}]
  (or (not-empty title) (not-empty caption_short) caption))

(defn- copy-text [{:keys [caption caption_short credit]}]
  (or (not-empty caption) (not-empty caption_short) (when (seq credit) (str "Photo: " credit))))

(defn- kind
  "Renderings and maquettes are labelled: they show work proposed or in progress."
  [{:keys [section title caption]}]
  (let [t (str title " " caption)]
    (cond
      (or (= section "renderings") (re-find #"(?i)\brender" t)) :rendering
      (re-find #"(?i)\bmaquette|\bmodel\b" t) :maquette)))

(defn- zip-url [name uids size]
  (str "/press/zip/" name ".zip?" (when (seq uids) (str "i=" (str/join "," uids) "&")) "s=" size))

(defn- show-kit? []
  (or (:live press-kit/kit) (not= (.. js/location -hostname) "armenianpavilion.org")))

(defn- use-press
  "The image list: the copy built into the kit at once, then the live one."
  []
  (let [[data set-data!] (hooks/use-state {:images (:images press-kit/kit)})]
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

(defnc badge [{:keys [image t]}]
  (when-let [k (kind image)]
    (d/span {:class "ap-kit__badge"} (t k))))

;; ── Viewer ─────────────────────────────────────────────────────────────────

(defnc downloads
  [{:keys [image t]}]
  (d/div {:class "ap-press__dl"}
         (d/a {:class "ap-press__btn" :href (jpeg image) :download true} (t :jpeg))
         (d/a {:class "ap-press__btn" :href (full-jpeg image) :download true} (t :full))))

(defnc viewer
  [{:keys [images at on-go on-close lang t]}]
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
            label (some (fn [[k v]] (when (= k section) v)) (sections lang))]
        (createPortal
         (d/div {:class "ap-lightbox ap-press__viewer" :role "dialog" :aria-modal true
                 :aria-label (title-of image)}
                (d/div {:class "ap-lightbox__bar"}
                       (d/p {:class "ap-label m-0"}
                            (d/span {:class "text-yellow"} (str (pad2 (inc at)) " / " (pad2 n)))
                            (when label (str " · " label)))
                       (d/button {:ref close-ref :class "ap-iconbtn" :aria-label (t :close)
                                  :on-click on-close}
                                 (d/svg {:viewBox "0 0 16 16" :fill "none" :stroke "currentColor"
                                         :stroke-width 1.6 :aria-hidden true}
                                        (d/path {:d "M3 3l10 10M13 3L3 13"}))))
                (d/div {:class "ap-press__stage"}
                       (d/div {:class "ap-press__shot"
                               :on-click #(when (= (.-target %) (.-currentTarget %)) (on-close))}
                              ($ picture {:key (:uid image) :src (src image) :alt (title-of image)
                                          :sizes "(min-width: 960px) 70vw, 100vw" :eager? true}))
                       (d/div {:class "ap-press__info"}
                              ($ badge {:image image :t t})
                              (d/p {:class "ap-press__vtitle"} (title-of image))
                              (when (seq caption) (d/p {:class "ap-press__cap"} caption))
                              (when (and (seq credit) (not (re-find #"Photo:" (or caption ""))))
                                (d/p {:class "ap-label m-0"} (str (t :photo) credit)))
                              ($ downloads {:image image :t t})
                              (when-let [c (copy-text image)]
                                ($ copy-button {:text c :label (t :copy-caption) :done (t :copied)}))
                              (d/div {:class "ap-press__nav"}
                                     (d/button {:type "button" :class "ap-press__btn"
                                                :on-click #(on-go (mod (dec at) n))} (t :prev))
                                     (d/button {:type "button" :class "ap-press__btn"
                                                :on-click #(on-go (mod (inc at) n))} (t :next))))))
         (.-body js/document))))))

;; ── Image library ──────────────────────────────────────────────────────────

(defnc press-card
  [{:keys [image on-open picked? on-pick t]}]
  (let [{:keys [w h date credit]} image]
    (d/li {:class "ap-press__item" :data-picked (when picked? "")}
          (d/div {:class "relative"}
                 (d/button {:type "button" :class "ap-press__frame" :on-click on-open
                            :aria-label (str (t :view) (title-of image))}
                           ($ picture {:src (src image) :alt (title-of image)
                                       :ar (when (and w h) (/ w h))
                                       :sizes "(min-width: 1440px) 25vw, (min-width: 1100px) 33vw, (min-width: 720px) 50vw, 100vw"}))
                 (d/label {:class "ap-press__pick"}
                          (d/input {:type "checkbox" :checked (boolean picked?) :on-change on-pick})
                          (d/span (t (if picked? :selected :select))))
                 ($ badge {:image image :t t}))
          (d/div {:class "ap-press__meta"}
                 (d/p {:class "ap-press__title"}
                      (title-of image)
                      (when (seq date) (d/span {:class "ap-muted"} (str ", " date))))
                 (when (seq credit) (d/p {:class "ap-label ap-muted m-0"} (str (t :photo) credit)))
                 ($ downloads {:image image :t t})))))

(defnc zip-links [{:keys [name uids t]}]
  (<>
   (d/a {:class "ap-press__btn" :href (zip-url name uids "jpg")} (t :zip-jpeg))
   (d/a {:class "ap-press__btn" :href (zip-url name uids "full")} (t :zip-full))))

(defnc library
  [{:keys [images lang t heading?]}]
  (let [present (set (map :section images))
        filters (filter #(present (first %)) (sections lang))
        [sec set-sec!] (hooks/use-state nil)
        shown (if sec (filterv #(= sec (:section %)) images) (vec images))
        [picked set-picked!] (hooks/use-state #{})
        ;; Picks survive filtering; ones a Sync removed drop out.
        uids (set (map :uid images))
        picked (into #{} (filter uids) picked)
        chosen (filterv #(picked (:uid %)) images)
        [at set-at!] (hooks/use-state nil)
        all-shown? (and (seq shown) (every? #(picked (:uid %)) shown))]
    (<>
     (d/div {:class "ap-press__tools"}
            (d/p {:class "ap-label ap-muted m-0 max-w-[70ch] leading-relaxed"}
                 (t :images-note) " "
                 (d/a {:href csv-url :download "armenian-pavilion-press-captions.csv" :class "underline underline-offset-2"}
                      (t :csv)))
            (when (> (count filters) 1)
              (d/div {:class "ap-filter" :role "group" :aria-label (t :filter)}
                     (d/button {:aria-pressed (nil? sec) :on-click #(set-sec! nil)}
                               (str (t :all) " " (count images)))
                     (for [[k label] filters]
                       (d/button {:key k :aria-pressed (= k sec) :on-click #(set-sec! k)}
                                 (str label " " (count (filter (fn [i] (= k (:section i))) images)))))))
            (d/div {:class "ap-press__zips"}
                   (d/span {:class "ap-label ap-muted"} (str (t :download) " · " (if sec (t :section-zip) (t :all-zip)) " (" (count shown) ")"))
                   ($ zip-links {:name (str "armenian-pavilion-press-" (if sec (if (= sec "") "other" sec) "all"))
                                 :uids (when sec (map :uid shown)) :t t})
                   (d/button {:type "button" :class "ap-press__btn"
                              :on-click #(set-picked! (if all-shown?
                                                        (apply disj picked (map :uid shown))
                                                        (into picked (map :uid shown))))}
                             (if all-shown? (t :clear) (t :pick-all)))))
     (if (empty? shown)
       (d/p {:class "ap-body ap-muted py-12"} (t :on-way))
       (d/ul {:class "ap-press pb-16 lg:pb-24"}
             (map-indexed
              (fn [i image]
                (let [uid (:uid image)]
                  ($ press-card {:key uid :image image :t t
                                 :picked? (picked uid)
                                 :on-pick #(set-picked! (if (picked uid) (disj picked uid) (conj picked uid)))
                                 :on-open #(set-at! i)})))
              shown)))
     ;; The selection bar, fixed at the foot of the window while anything is picked.
     (when (seq chosen)
       (d/div {:class "ap-press__bar" :role "region" :aria-label (t :selected)}
              (d/span {:class "ap-label"} ((t :n-selected) (count chosen)))
              (d/div {:class "flex flex-wrap gap-2"}
                     ($ zip-links {:name (if (= 1 (count chosen))
                                           (:file (first chosen))
                                           (str "armenian-pavilion-press-selection-" (count chosen)))
                                   :uids (map :uid chosen) :t t})
                     (d/button {:type "button" :class "ap-press__btn" :on-click #(set-picked! #{})} (t :clear)))))
     ($ viewer {:images shown :at at :on-go set-at! :on-close #(set-at! nil) :lang lang :t t}))))

;; ── Kit sections ───────────────────────────────────────────────────────────

(defnc note-images
  "A story note's images, from the library by uid: open in the viewer."
  [{:keys [uids by-uid lang t]}]
  (let [images (keep by-uid uids)
        [at set-at!] (hooks/use-state nil)]
    (when (seq images)
      (<>
       (d/ul {:class "ap-kit__thumbs"}
             (map-indexed
              (fn [i image]
                (d/li {:key (:uid image)}
                      (d/button {:type "button" :class "ap-press__frame" :on-click #(set-at! i)
                                 :aria-label (str (t :view) (title-of image))}
                                ($ picture {:src (src image) :alt (title-of image)
                                            :sizes "(min-width: 1100px) 20vw, 50vw"}))
                      ($ badge {:image image :t t})
                      (d/p {:class "ap-label ap-muted m-0 mt-2"} (title-of image))))
              images))
       ($ viewer {:images (vec images) :at at :on-go set-at! :on-close #(set-at! nil) :lang lang :t t})))))

(defn- mmss [s] (str (quot s 60) ":" (pad2 (mod s 60))))

(defnc film-row
  [{:keys [film text t]}]
  (let [{:keys [slug title playback-id duration poster]} film
        tiers (if (= slug "murano") ["1080p"] ["2160p" "1440p" "1080p"])
        {:keys [date credit line held]} text]
    (d/li {:class "ap-kit__film" :id (str "film-" slug)}
          (d/a {:class "ap-kit__poster" :href (str "/#film-" slug) :aria-label title}
               (d/img {:src (str "https://image.mux.com/" playback-id "/thumbnail.webp?width=640&time=" poster)
                       :alt "" :loading "lazy" :width 640 :height 360}))
          (d/div {:class "grid gap-2 content-start"}
                 (d/h3 {:class "ap-h3 m-0"} (or (:title text) title))
                 (d/p {:class "ap-label ap-muted m-0"}
                      (str/join " · " (remove str/blank? [(mmss duration) (or date (:when film)) credit])))
                 (when line (d/p {:class "ap-body m-0"} line))
                 (when-let [h (:html text)] ($ html {:of h :class "ap-muted"}))
                 (d/div {:class "ap-press__dl"}
                        (if held
                          (d/a {:class "ap-press__btn" :href (str "mailto:" press-email "?subject=" (js/encodeURIComponent (str "Film: " title)))}
                               (t :held))
                          (for [r tiers]
                            (d/a {:key r :class "ap-press__btn"
                                  :href (str "https://stream.mux.com/" playback-id "/" r ".mp4?download="
                                             (js/encodeURIComponent (str "armenian-pavilion-" slug "-" r)))}
                                 (str (t :film-download) " · " r)))))))))

(defn- section-list
  "The sections present, in page order: [id label]."
  [k t]
  (filter
   some?
   (concat
    [(when (:essentials k) ["essentials" (t :essentials)])
     (when (:release k) ["release" (t :release)])
     (when (:facts k) ["facts" (t :facts)])
     (when (some k (map keyword notes)) ["notes" (t :notes)])
     ["images" (t :images)]
     (when (:video k) ["video" (t :video)])
     (when (:people k) ["people" (t :people)])
     (when (:chronology k) ["chronology" (t :chronology)])
     (when (:quotes k) ["quotes" (t :quotes)])
     (when (:visit k) ["visit" (t :visit)])
     (when (:coverage k) ["coverage" (t :coverage)])
     (when (:logos k) ["logos" (t :logos)])])))

(defnc press-page
  [{:keys [lang]}]
  (let [lang (or lang :en)
        t (fn [k] (get-in copy [lang k] (get-in copy [:en k])))
        kit? (show-kit?)
        own (get press-kit/kit lang)
        en (:en press-kit/kit)
        ;; A section with no Italian version shows in English, marked so.
        k (if kit? (merge en own) {})
        en-only (fn [id] (when (and (not= lang :en) (not (get own id))) (t :english-only)))
        data (use-press)
        images (:images data)
        by-uid (into {} (map (juxt :uid identity)) images)
        listed (section-list k t)
        num (into {} (map-indexed (fn [i [id]] [id (inc i)])) listed)
        {:keys [essentials release facts people chronology quotes visit coverage logos video]} k]
    (d/div {:class "ap-wrap"}
           (d/div {:class "ap-jhead"}
                  (d/div {:class "ap-jhead__title"}
                         (d/div {:class "flex flex-col gap-3"}
                                (d/p {:class "ap-label ap-muted m-0"} (t :eyebrow))
                                (d/h1 {:class "ap-display-xl"} (if kit? (t :title) (t :images-title))))
                         (d/div {:class "flex flex-col items-end gap-2"}
                                (d/span {:class "ap-jhead__count" :aria-hidden true} (pad2 (count images)))
                                (d/span {:class "ap-label ap-muted" :aria-hidden true} (t :images))))
                  (d/p {:class "ap-lede m-0 max-w-[52ch]"} (t :lede))
                  (when (and kit? (not (:live press-kit/kit)))
                    (d/p {:class "ap-kit__draft"} (t :draft)))
                  (when kit?
                    (d/nav {:class "ap-kit__toc" :aria-label (t :contents)}
                           (d/p {:class "ap-label ap-muted m-0"} (t :contents))
                           (d/ol
                            (for [[id label] listed]
                              (d/li {:key id} (d/a {:href (str "#" id)} label))))
                           (d/p {:class "ap-label m-0"}
                                (d/a {:href (if (= lang :it) "/press" "/it/press")} (if (= lang :it) "English" "Italiano"))))))

           (when essentials
             ($ sec {:id "essentials" :n (num "essentials") :label (t :essentials) :note (en-only :essentials)}
                ($ html {:of (:html essentials) :class "ap-kit__lead"})
                (d/p {:class "m-0"}
                     (d/a {:class "ap-btn ap-btn--red"
                           :href (str "mailto:" press-email "?subject=" (js/encodeURIComponent (t :book-subject)))}
                          (t :book)))))

           (when release
             ($ sec {:id "release" :n (num "release") :label (t :release) :note (en-only :release)}
                (d/div {:class "ap-kit__release"}
                       (d/div {:class "ap-kit__dl"}
                              (when-let [d (or (:date-text release) (:date release))] (d/p {:class "ap-label m-0"} d))
                              (for [[l url] (:pdfs release)]
                                (d/a {:key l :class "ap-press__btn" :href url :download true}
                                     (str (t :pdf) " · " (str/upper-case (name l))))))
                       ($ html {:of (:html release)}))
                (when (seq (:earlier release))
                  (d/div {:class "ap-kit__earlier"}
                         (d/p {:class "ap-label ap-muted m-0"} (t :earlier))
                         (d/ul
                          (for [{:keys [title date url]} (:earlier release)]
                            (d/li {:key title}
                                  (d/span {:class "ap-label ap-muted"} date) " "
                                  (if url (d/a {:href url} title) title))))))))

           (when facts
             ($ sec {:id "facts" :n (num "facts") :label (t :facts) :note (en-only :facts)}
                ($ html {:of (:html facts) :class "ap-kit__facts"})
                (d/p {:class "m-0"} ($ copy-button {:text (:text facts) :label (t :copy-facts) :done (t :copied)}))))

           (when (num "notes")
             (d/div {:id "notes" :class "ap-kit__sec"}
                    (d/header {:class "ap-kit__head"}
                              (d/p {:class "ap-label ap-muted m-0"} (str (pad2 (num "notes")) " · " (t :notes))))
                    (for [id notes
                          :let [note (get k (keyword id))]
                          :when note]
                      (d/article {:key id :id id :class "ap-kit__note"}
                                 (d/h2 {:class "ap-h1 m-0"} (:title note))
                                 (when-let [n (en-only (keyword id))] (d/p {:class "ap-label ap-muted m-0"} n))
                                 ($ html {:of (:html note)})
                                 ($ note-images {:uids (:images note) :by-uid by-uid :lang lang :t t})))))

           (d/section {:id "images" :class (if kit? "ap-kit__sec" "")}
                      (when kit?
                        (d/header {:class "ap-kit__head"}
                                  (d/p {:class "ap-label ap-muted m-0"} (str (pad2 (num "images")) " · " (t :images)))))
                      ($ library {:images images :lang lang :t t}))

           (when video
             ($ sec {:id "video" :n (num "video") :label (t :video) :note (en-only :video)}
                (d/ul {:class "ap-kit__films"}
                      (for [film films/films
                            :let [text (some #(when (= (:slug %) (:slug film)) %) (:films video))]]
                        ($ film-row {:key (:slug film) :film film :text text :t t})))))

           (when people
             ($ sec {:id "people" :n (num "people") :label (t :people) :note (en-only :people)}
                (d/div {:class "ap-kit__people"}
                       (for [{:keys [name role html short text]} (:people people)]
                         (d/article {:key name :class "ap-kit__person"}
                                    (d/h3 {:class "ap-h3 m-0"} name)
                                    (d/p {:class "ap-label ap-muted m-0"} role)
                                    ($ amp.pages.press.page/html {:of html})
                                    (when short
                                      (d/p {:class "ap-kit__short"} (d/span {:class "ap-label ap-muted"} (t :short)) " " short))
                                    (d/p {:class "m-0"} ($ copy-button {:text text :label (t :copy-bio) :done (t :copied)})))))))

           (when chronology
             ($ sec {:id "chronology" :n (num "chronology") :label (t :chronology) :note (en-only :chronology)}
                (d/ol {:class "ap-kit__chron"}
                      (for [[i item] (map-indexed vector (:items chronology))]
                        (d/li {:key i}
                              (d/span {:class "ap-label"} (:when item))
                              (d/span {:dangerouslySetInnerHTML #js {:__html (:html item)}}))))))

           (when quotes
             ($ sec {:id "quotes" :n (num "quotes") :label (t :quotes) :note (en-only :quotes)}
                (d/ul {:class "ap-kit__quotes"}
                      (for [[i {:keys [speaker text source]}] (map-indexed vector (:quotes quotes))]
                        (d/li {:key i}
                              (d/blockquote {:class "m-0"} (str "“" text "”"))
                              (d/p {:class "ap-label m-0"} speaker)
                              (when source
                                (d/p {:class "ap-label ap-muted m-0"}
                                     (str (t :source) ": ")
                                     (d/span {:dangerouslySetInnerHTML #js {:__html source}})))
                              (d/p {:class "m-0"}
                                   ($ copy-button {:text (str "“" text "” " speaker) :label (t :copy-quote) :done (t :copied)})))))))

           (when visit
             ($ sec {:id "visit" :n (num "visit") :label (t :visit) :title (:title visit) :note (en-only :visit)}
                ($ html {:of (:html visit)})))

           (when coverage
             ($ sec {:id "coverage" :n (num "coverage") :label (t :coverage) :note (en-only :coverage)}
                (d/ul {:class "ap-kit__coverage"}
                      (for [{:keys [outlet title date url]} (:items coverage)]
                        (d/li {:key (str outlet title)}
                              (d/span {:class "ap-label"} outlet)
                              (if url
                                (d/a {:href url :target "_blank" :rel "noopener noreferrer"} title)
                                (d/span title))
                              (d/span {:class "ap-label ap-muted"} date))))))

           (when logos
             ($ sec {:id "logos" :n (num "logos") :label (t :logos) :note (en-only :logos)}
                (when (seq (:files logos))
                  (d/ul {:class "ap-kit__logos"}
                        (for [{:keys [name preview dark files]} (:files logos)]
                          (d/li {:key name}
                                (d/div {:class (str "ap-kit__logo" (when dark " ap-kit__logo--dark"))}
                                       (d/img {:src preview :alt name :loading "lazy"}))
                                (d/p {:class "ap-label m-0"} name)
                                (d/div {:class "ap-press__dl"}
                                       (for [{:keys [label url]} files]
                                         (d/a {:key label :class "ap-press__btn" :href url :download true} label)))))))
                ($ html {:of (:html logos)})))

           (d/div {:class "pb-16"}))))

(defnc press-view [_props] ($ press-page {:lang :en}))

(defnc press-it-view [_props] ($ press-page {:lang :it}))
