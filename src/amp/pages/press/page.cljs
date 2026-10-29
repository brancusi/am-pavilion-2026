(ns amp.pages.press.page
  "Press images. The list is resources/data/press/press.json, built by
   `npm run press` from the Caption Genius project \"Pavilion — Press\"
   (the images marked Include, in its order); the images are on R2 under
   press/<uid>, each with a 2400px JPEG and a full-size JPEG to download.
   A grid by section, and a viewer with the full caption and downloads."
  (:require ["react-dom" :refer [createPortal]]
            [amp.lib.defnc :refer [defnc]]
            [amp.ui.picture :refer [picture media-host]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(def ^:private data-url "/data/press/press.json")
(def ^:private csv-url "/data/press/captions.csv")

(def ^:private sections
  "Sections in the order the filter shows them; images with none are Other."
  [["pavilion" "The Pavilion"] ["process" "Process"] ["renderings" "Renderings"]
   ["people" "People"] ["archive" "Archive"] ["" "Other"]])

(defn- pad2 [n] (.padStart (str n) 2 "0"))

(defn- src [{:keys [key]}] (str media-host key))
(defn- jpeg [{:keys [key]}] (str media-host key ".jpg"))
(defn- full-jpeg [{:keys [key]}] (str media-host key "-full.jpg"))

(defn- title-of [{:keys [title caption_short caption]}]
  (or (not-empty title) (not-empty caption_short) caption))

(defn- copy-text [{:keys [caption caption_short credit]}]
  (or (not-empty caption) (not-empty caption_short) (when (seq credit) (str "Photo: " credit))))

(defn- use-press []
  (let [[data set-data!] (hooks/use-state nil)]
    (hooks/use-effect
     :once
     ;; Revalidated each time: a Sync replaces the list without a new build.
     (-> (js/fetch data-url #js {:cache "no-cache"})
         (.then #(if (.-ok %) (.json %) #js {:images #js []}))
         (.then #(set-data! (js->clj % :keywordize-keys true)))
         (.catch (fn [_] (set-data! {:images []})))))
    data))

;; ── Viewer ─────────────────────────────────────────────────────────────────

(defnc copy-button
  [{:keys [text]}]
  (let [[copied? set-copied!] (hooks/use-state false)]
    (hooks/use-effect
     [copied?]
     (when copied?
       (let [t (js/setTimeout #(set-copied! false) 1600)]
         #(js/clearTimeout t))))
    (d/button {:type "button" :class "ap-press__btn"
               :on-click #(-> (.writeText js/navigator.clipboard text)
                              (.then (fn [] (set-copied! true))))}
              (if copied? "Copied" "Copy caption"))))

(defnc downloads
  [{:keys [image]}]
  (d/div {:class "ap-press__dl"}
         (d/a {:class "ap-press__btn" :href (jpeg image) :download true} "JPEG · 2400 px")
         (d/a {:class "ap-press__btn" :href (full-jpeg image) :download true} "Full size")))

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
            label (some (fn [[k v]] (when (= k section) v)) sections)]
        (createPortal
         (d/div {:class "ap-lightbox ap-press__viewer" :role "dialog" :aria-modal true
                 :aria-label (title-of image)}
                (d/div {:class "ap-lightbox__bar"}
                       (d/p {:class "ap-label m-0"}
                            (d/span {:class "text-yellow"} (str (pad2 (inc at)) " / " (pad2 n)))
                            (when label (str " · " label)))
                       (d/button {:ref close-ref :class "ap-iconbtn" :aria-label "Close"
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
                              (d/p {:class "ap-press__vtitle"} (title-of image))
                              (when (seq caption) (d/p {:class "ap-press__cap"} caption))
                              (when (and (seq credit) (not (re-find #"Photo:" (or caption ""))))
                                (d/p {:class "ap-label m-0"} (str "Photo: " credit)))
                              ($ downloads {:image image})
                              (when-let [t (copy-text image)] ($ copy-button {:text t}))
                              (d/div {:class "ap-press__nav"}
                                     (d/button {:type "button" :class "ap-press__btn"
                                                :on-click #(on-go (mod (dec at) n))} "← Previous")
                                     (d/button {:type "button" :class "ap-press__btn"
                                                :on-click #(on-go (mod (inc at) n))} "Next →")))))
         (.-body js/document))))))

;; ── Page ───────────────────────────────────────────────────────────────────

(defnc press-card
  [{:keys [image on-open]}]
  (let [{:keys [w h date credit]} image]
    (d/li {:class "ap-press__item"}
          (d/button {:type "button" :class "ap-press__frame" :on-click on-open
                     :aria-label (str "View: " (title-of image))}
                    ($ picture {:src (src image) :alt (title-of image)
                                :ar (when (and w h) (/ w h))
                                :sizes "(min-width: 1440px) 25vw, (min-width: 1100px) 33vw, (min-width: 720px) 50vw, 100vw"}))
          (d/div {:class "ap-press__meta"}
                 (d/p {:class "ap-press__title"}
                      (title-of image)
                      (when (seq date) (d/span {:class "ap-muted"} (str ", " date))))
                 (when (seq credit) (d/p {:class "ap-label ap-muted m-0"} (str "Photo: " credit)))
                 ($ downloads {:image image})))))

(defnc press-view
  [_props]
  (let [data (use-press)
        images (:images data)
        present (set (map :section images))
        filters (filter #(present (first %)) sections)
        [sec set-sec!] (hooks/use-state nil)
        shown (if sec (filterv #(= sec (:section %)) images) (vec images))
        [at set-at!] (hooks/use-state nil)]
    (d/div {:class "ap-wrap"}
           (d/div {:class "ap-jhead"}
                  (d/div {:class "ap-jhead__title"}
                         (d/div {:class "flex flex-col gap-3"}
                                (d/p {:class "ap-label ap-muted m-0"} "Press")
                                (d/h1 {:class "ap-display-xl"} "Press images"))
                         (when data
                           (d/div {:class "flex flex-col items-end gap-2" :aria-live "polite"
                                   :aria-label (str (count shown) " images")}
                                  (d/span {:class "ap-jhead__count" :aria-hidden true} (pad2 (count shown)))
                                  (d/span {:class "ap-label ap-muted" :aria-hidden true} "Images"))))
                  (d/p {:class "ap-lede m-0 max-w-[52ch]"}
                       "The Studio, Zadik Zadikian’s Armenia Pavilion at Biennale Arte 2026: the work, its making, the people and the archive behind it.")
                  (d/p {:class "ap-label ap-muted m-0 max-w-[70ch] leading-relaxed"}
                       "For press use with the caption and credit given. Each image downloads as a 2400 px JPEG for the web, or at full size for print. "
                       (d/a {:href csv-url :download "armenia-pavilion-press-captions.csv" :class "underline underline-offset-2"}
                            "All captions (CSV)"))
                  (when (> (count filters) 1)
                    (d/div {:class "ap-filter" :role "group" :aria-label "Filter by section"}
                           (d/button {:aria-pressed (nil? sec) :on-click #(set-sec! nil)} "All")
                           (for [[k label] filters]
                             (d/button {:key k :aria-pressed (= k sec) :on-click #(set-sec! k)} label)))))
           (cond
             (nil? data) (d/div {:class "min-h-[60vh]"})
             (empty? shown) (d/p {:class "ap-body ap-muted py-12"} "Press images are on their way.")
             :else
             (d/ul {:class "ap-press pb-16 lg:pb-24"}
                   (map-indexed
                    (fn [i image]
                      ($ press-card {:key (:uid image) :image image :on-open #(set-at! i)}))
                    shown)))
           ($ viewer {:images shown :at at :on-go set-at! :on-close #(set-at! nil)}))))
