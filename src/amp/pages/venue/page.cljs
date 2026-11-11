(ns amp.pages.venue.page
  "Visitor Guide — wayfinding, venue history, and space details.
   Full dedicated page for the Armenian Pavilion location at the
   Biennale Arte 2026. Copy: resources/i18n/<locale>/visit.json."
  (:require
   [amp.i18n :as i18n :refer [t ts] :refer-macros [defcatalog]]
   [amp.pages.venue.map-config :as mc]
   [amp.ui.lazy-map :refer [mapbox-map]]
   [amp.ui.image-gallery :refer [lazy-image-gallery]]
   [amp.ui.section-header :refer [section-eyebrow]]
   [amp.ui.directions :refer [julda-contact luca-contact]]
   [amp.ui.wayfinding :as wf]
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defcatalog "visit")

(def lazy-video (lazy-component amp.ui.video-background/video-background))

;; Section headings on this page (design system: display L).
(def venue-display "ap-display-l")

;; Eyebrow above section headings (amp.ui.section-header).
(def venue-eyebrow section-eyebrow)

(defn- prose
  "A prose message with <b> (strong emphasis) and <i> (italic) spans."
  [k]
  (t k {:b (i18n/tag "span" {:className s/em-strong})
        :i (i18n/tag "span" {:className s/em-italic})}))

(defn- caps
  "Step labels are set in capitals, except on Armenian pages."
  [s]
  (if (= "hy" (i18n/locale)) s (.toUpperCase s)))

;; ── Gallery slides ─────────────────────────────────────────────────────────

(def tesa-41-slides
  [{:img-src "https://media.armenianpavilion.org/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif"
    :aspect-ratio 1.34
    :active? true}
   {:img-src "https://media.armenianpavilion.org/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.08.tif"
    :aspect-ratio 1.34
    :active? true}
   {:img-src "https://media.armenianpavilion.org/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.18.tif"
    :aspect-ratio 1.34
    :active? true}])

(defn- crossing-slides []
  (mapv (fn [src]
          {:img-src src
           :aspect-ratio 1.82
           :caption (ts :visit/outdoor.slide-caption)
           :credit (ts :visit/outdoor.slide-credit)})
        ["https://media.armenianpavilion.org/big_red_walkway/5.jpg"
         "https://media.armenianpavilion.org/big_red_walkway/1.jpg"]))

;; ── Directions — shared data ───────────────────────────────────────────────

(defn- water-taxi-copy
  "The driver card's copy in locale `l` (Italian when it is shown to the
   driver on another page)."
  [l]
  (let [c #(i18n/t-in l (keyword "visit" (str "card." %)))]
    {:title          (c "title")
     :subtitle       (c "subtitle")
     :authorized     [(c "authorized-1") (c "authorized-2")]
     :before-title   (c "before-title")
     :before-body    (c "before-body")
     :before-quote   (c "before-quote")
     :contacts       [[(c "julda") julda-contact] [(c "luca") luca-contact]]
     :before-note    (c "before-note")
     :entrance-title (c "entrance-title")
     :entrance-name  (c "entrance-name")
     :entrance-body  (c "entrance-body")
     :entrance-warn  (c "entrance-warn")
     :map-caption    (c "map-caption")
     :legend         [[:water (c "legend-water")] [:pav (c "legend-pav")]]}))

;; ── Header ─────────────────────────────────────────────────────────────────

(defnc visit-head []
  (<>
   (d/section {:class "ap-vhead ap-vhead--wf"}
              (d/div {:class "ap-wrap ap-vhead__grid"}
                     (d/div {:class "flex flex-col gap-5"}
                            (d/p {:class "ap-label m-0 text-yellow"} (t :visit/head.eyebrow))
                            (d/h1 {:class "ap-display-xl"} (t :visit/head.title))
                            (d/p {:class "ap-lede max-w-[36ch]"} (t :visit/head.lede)))
                     (d/dl {:class "ap-keyfacts ap-keyfacts--wf"}
                           (for [[k v] [[:visit/facts.dates :visit/facts.dates-v]
                                        [:visit/facts.hours :visit/facts.hours-v]
                                        [:visit/facts.hall :visit/facts.hall-v]
                                        [:visit/facts.foot :visit/facts.foot-v]]]
                             (d/div {:key (name k)} (d/dt (t k)) (d/dd (t v)))))))
   (d/div {:class "ap-hero__strip" :aria-hidden true}
          (for [i (range 9)] (d/i {:key i})))))

;; ── Map guide ──────────────────────────────────────────────────────────────

(def ^:private modes
  {:walk  {:no "01" :title :visit/guide.walk-title :meta :visit/guide.walk-meta}
   :water {:no "02" :title :visit/guide.water-title :meta :visit/guide.water-meta}})

(defnc walk-steps []
  (<>
   (d/p {:class "ap-label ap-muted m-0"} (t :visit/walk.label))
   (d/ol {:class "ap-steps"}
         (d/li {:class "ap-step"}
               (d/span {:class "ap-step__dist"} (t :visit/walk.start-dist))
               (d/h3 {:class "ap-step__title"} (t :visit/walk.start-title))
               (d/p {:class "ap-step__body"} (t :visit/walk.start-body)))
         (d/li {:class "ap-step"}
               (d/span {:class "ap-step__dist"} (t :visit/walk.route-dist))
               (d/h3 {:class "ap-step__title"} (t :visit/walk.route-title))
               (d/p {:class "ap-step__body"} (t :visit/walk.route-body)))
         (d/li {:class "ap-step ap-step--end"}
               (d/span {:class "ap-step__dist"} (t :visit/walk.end-dist))
               (d/h3 {:class "ap-step__title"} (t :visit/walk.end-title))
               (d/p {:class "ap-step__body"} (t :visit/walk.end-body))))))

(defnc water-steps []
  (let [steps [[:visit/water.head-1 :visit/water.step-1]
               [:visit/water.head-2 :visit/water.step-2]
               [:visit/water.head-3 :visit/water.step-3]
               [:visit/water.head-4 :visit/water.step-4]]]
    (<>
     (d/p {:class "ap-label ap-muted m-0"} (t :visit/water.label))
     (d/ol {:class "ap-steps ap-steps--water"}
           (map-indexed
            (fn [i [head step]]
              (d/li {:key i :class (str "ap-step" (when (= i (dec (count steps))) " ap-step--end"))}
                    (d/span {:class "ap-step__dist"} (caps (ts head)))
                    (d/p {:class "ap-step__body"} (t step))))
            steps))
     (d/a {:class "ap-link ap-body-s self-start" :href (i18n/href "/route-from-hotel-gabrielli")}
          (t :visit/water.gabrielli)))))

(defnc map-guide []
  (let [[mode set-mode!] (hooks/use-state :walk)
        is-desktop? (use-touch-enabled)
        {:keys [no title meta]} (modes mode)]
    (d/section {:class "ap-sec"}
               (d/div {:class "ap-wrap ap-guide"}
                      (d/section {:class "ap-map ap-map--stack" :aria-labelledby "guide-title"}
                                 (d/div {:class "ap-map__head"}
                                        (d/p {:class "ap-label ap-muted m-0"} (t :visit/guide.label {:no no}))
                                        (d/h2 {:class "ap-h2" :id "guide-title"} (t title))
                                        (d/p {:class "ap-caption m-0"} (t meta)))
                                 (d/div {:class "ap-map__modes" :role "group" :aria-label (ts :visit/guide.modes)}
                                        (d/button {:aria-pressed (= mode :walk) :on-click #(set-mode! :walk)}
                                                  (d/i {:class "bg-yellow outline outline-1 outline-ink"}) (t :visit/guide.mode-walk))
                                        (d/button {:aria-pressed (= mode :water) :on-click #(set-mode! :water)}
                                                  (d/i {:class "bg-blue"}) (t :visit/guide.mode-water)))
                                 (d/div {:class "ap-map__live"}
                                        (if (= mode :walk)
                                          ($ mapbox-map {:key "walk"
                                                         :class "!h-full !shadow-none"
                                                         :interactive? is-desktop?
                                                         :initial-view mc/initial-view
                                                         :bounds mc/visitor-bounds
                                                         :bounds-padding 48
                                                         :ant-paths mc/ant-paths
                                                         :layers mc/layers :labels-url mc/visitor-data-url})
                                          ($ mapbox-map {:key "water"
                                                         :class "!h-full !shadow-none"
                                                         :interactive? is-desktop?
                                                         :initial-view mc/water-taxi-initial-view
                                                         :bounds mc/water-taxi-bounds
                                                         :ant-paths mc/water-taxi-ant-paths
                                                         :layers mc/water-taxi-layers :labels-url mc/water-taxi-data-url})))
                                 (d/div {:class "ap-legend"}
                                        (if (= mode :walk)
                                          (d/span (d/i {:class "walk"}) (t :visit/guide.legend-walk))
                                          (d/span (d/i {:class "water"}) (t :visit/guide.legend-water)))
                                        (d/span (d/i {:class "pav"}) (t :visit/guide.legend-pav)))
                                 (d/div {:class "ap-map__actions"}
                                        (when (= mode :walk)
                                          (d/a {:class "ap-btn" :href mc/maps-url :target "_blank" :rel "noopener"}
                                               (t :visit/guide.open-maps)))
                                        (d/a {:class "ap-btn ap-btn--ghost" :href "#taxi"} (t :visit/guide.driver-card))))
                      (d/div {:class "flex flex-col gap-6"}
                             (if (= mode :walk) ($ walk-steps) ($ water-steps))
                             ($ wf/address {:title (t :visit/guide.address)}))))))

;; ── Water taxi driver card ────────────────────────────────────────────────

(defnc taxi-card []
  (let [[l italian? set-italian!] (wf/use-card-locale)
        c (water-taxi-copy l)]
    (d/section {:class "ap-sec bg-paper-sunk" :id "taxi"}
               (d/div {:class "ap-wrap flex flex-col gap-6 !max-w-[880px]"}
                      (d/div {:class "ap-head-row !m-0"}
                             (d/div
                              (d/p {:class "ap-label ap-muted m-0 mb-1"} (t :visit/card.label))
                              (d/h2 {:class "ap-h1" :lang l} (:title c)))
                             ($ wf/card-lang-toggle {:italian? italian? :on-change set-italian!
                                                     :to-italian (i18n/t-in "it" :visit/card.show-it)
                                                     :back (t :visit/card.show-own)}))
                      ($ wf/driver-card {:lang l :c c})
                      (d/a {:class "ap-link ap-body-s self-start py-3"
                            :href (i18n/href "/route-from-hotel-gabrielli")}
                           (t :visit/water.gabrielli))))))

;; ── About ──────────────────────────────────────────────────────────────────

(defnc about-section
  [{:keys []}]
  (d/div {:class (s/cx s/section-pb "px-4")}
         ;; Display title
         (d/h2 {:class (s/cx venue-display "mb-8")}
               (t :visit/about.title))

         ;; Lead copy — enticing, sets the two-site narrative
         (d/div {:class "space-y-6"}
                (d/p {:class s/body-lg} (prose :visit/about.p1))
                (d/p {:class s/body-base} (prose :visit/about.p2)))))

;; ── The Studio (Tesa 41) ──────────────────────────────────────────────────

(defnc studio-section [{:keys []}]
  (let [ref (hooks/use-ref "studio-ref")
        [_visited? is-visible?] (use-intersection-observer ref)]
    (d/div {:class s/section-pb}
           ;; Eyebrow + display heading
           (d/div {:class "px-4"}
                  ($ venue-eyebrow {:text (t :visit/studio.eyebrow)})
                  (d/h2 {:class (s/cx venue-display "mb-8")}
                        (t :visit/studio.title)))

           ;; Prose
           (d/div {:class "px-4 space-y-6"}
                  (d/p {:class s/body-lg} (prose :visit/studio.p1))
                  (d/p {:class s/body-base} (prose :visit/studio.p2))
                  (d/p {:class s/body-base} (prose :visit/studio.p3))
                  (d/p {:class (s/cx s/body-closing)} (prose :visit/studio.p4)))

           ;; Media — video + gallery
           (d/div {:class "w-full flex flex-col gap-4 mt-8" :ref ref}
                  (d/div {:class "w-full aspect-[16/9]"}
                         ($ lazy-video {:playback-id "KaA1Jf2AusJZ966KPeZrdwJ5S53kboLO4E4fGLrgTLk"
                                        :aspect-ratio 1.77
                                        :should-play? is-visible?
                                        :allow-audio? false}))

                  ($ lazy-image-gallery {:enabled? is-visible?
                                         :slides tesa-41-slides})))))

;; ── The Outdoor Piece ─────────────────────────────────────────────────────

(defnc outdoor-section [{:keys []}]
  (let [ref (hooks/use-ref "outdoor-ref")
        [_visited? is-visible?] (use-intersection-observer ref)]
    (d/div {:class s/section-pb}
           ;; Eyebrow + display heading
           (d/div {:class "px-4"}
                  ($ venue-eyebrow {:text (t :visit/outdoor.eyebrow)})
                  (d/h2 {:class (s/cx venue-display "mb-8")}
                        (t :visit/outdoor.title)))

           ;; Prose
           (d/div {:class "px-4 space-y-6"}
                  (d/p {:class s/body-lg} (prose :visit/outdoor.p1))
                  (d/p {:class s/body-base} (prose :visit/outdoor.p2))
                  (d/p {:class (s/cx s/body-closing)} (prose :visit/outdoor.p3)))

           ;; Media — image gallery
           (d/div {:class "w-full flex flex-col gap-4 mt-8" :ref ref}
                  ($ lazy-image-gallery {:enabled? is-visible?
                                         :slides (crossing-slides)})))))

;; ── About the Arsenale Militare ───────────────────────────────────────────

(defnc arsenale-section [{:keys []}]
  (d/div {:class s/section-pb}
         ;; Eyebrow + display heading
         (d/div {:class "px-4"}
                ($ venue-eyebrow {:text (t :visit/arsenale.eyebrow)})
                (d/h2 {:class (s/cx venue-display "mb-8")}
                      (t :visit/arsenale.title)))

         ;; Prose
         (d/div {:class "px-4 space-y-6"}
                (d/p {:class s/body-lg} (prose :visit/arsenale.p1))
                (d/p {:class s/body-base} (prose :visit/arsenale.p2))
                (d/p {:class s/body-base} (prose :visit/arsenale.p3))
                (d/p {:class (s/cx s/body-closing)} (prose :visit/arsenale.p4)))))

;; ── Page ───────────────────────────────────────────────────────────────────

(defnc venue-view
  [_props]
  (d/div
   ($ visit-head)
   ($ map-guide)
   ($ taxi-card)
   (d/div {:class (s/cx s/content-column-container "pt-16 lg:pt-24")}
          (d/div {:class (s/cx "flex flex-col" s/content-column)}
                 ($ about-section)
                 ($ studio-section)
                 ($ outdoor-section)
                 ($ arsenale-section)))))
