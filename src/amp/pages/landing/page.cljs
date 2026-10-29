(ns amp.pages.landing.page
  "Homepage (design canvas: Main). Video hero, intro + facts, the ephemeral
   Unit chapter, works gallery, the Hall, the film, a visit teaser and the
   latest journal posts, then the long-form exhibition texts."
  (:require
   [amp.data.films :as films]
   [amp.data.journal :as journal]
   [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
   [amp.lib.defnc :refer [defnc]]
   [amp.pages.landing.curators :refer [curators-section]]
   [amp.pages.landing.in-minor-keys :refer [in-minor-keys]]
   [amp.pages.landing.studio :refer [about-studio]]
   [amp.styles :as s]
   [amp.pages.venue.map-config :as mc]
   [amp.ui.fit-gallery :refer [fit-gallery]]
   [amp.ui.lazy-map :refer [mapbox-map]]
   [amp.ui.lightbox :refer [film-lightbox]]
   [amp.ui.picture :as picture :refer [picture mux-poster]]
   [amp.ui.post-card :refer [post-card]]
   [amp.ui.studio-mark :refer [studio-mark-3d]]
   [amp.ui.temporary-closure :refer [closure-banner]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def lazy-video (lazy-component amp.ui.video-background/video-background))

(def lazy-film (lazy-component amp.ui.video-background/film-player))

;; Hero loop: Carrying (a red unit carried through the Arsenale, Oct 2026).
(def ^:private hero-playback-id "El6mWAaeWtIxqHERgu7fYE00pcLH7szuH8EG16lbn7CE")

(def ^:private media picture/media-host)

(def ^:private big-red-model
  "Interactive Big Red: the stack-formation data for amp.ui.threejs-slide."
  {:camera     {:position [250 250 250] :target [10 60 0]}
   :scene-data {:lighting [[:ambient-light {:intensity 0.7}]
                           [:directional-light {:cast-shadow true :position [-100 120 60] :intensity 1.5}]]
                :data [{:bounds [144 36 72]
                        :layers [[{:align :tr :color "#1ebe3a" :dims [9 6 9]}
                                  {:align :tl :color "#0b080c" :dims [24 6 12]}
                                  {:align :br :color "#0b080c" :dims [36 6 12]}
                                  {:align :bl :color "#ec9c3b" :dims [6 6 12]}]
                                 [{:dims [144 36 72] :color "#ef3548"}]
                                 [{:dims [36 9 36] :align :tr :color "#0070df"}]
                                 [{:dims [18 9 18] :align :tr :color "#f1afed"}]
                                 [{:dims [9 4.5 9] :align :tr :color "#0b080c"}]
                                 [{:dims [4.5 9 4.5] :align :tr :color "#ec9c3b"}]]}]}})

(def ^:private works
  "Works gallery. :aspect-ratio is each image's own (width / height), so
   nothing is cropped."
  [{:img-src "blue_yellow/top_view.jpg" :aspect-ratio 0.75
    :caption "Blue Yellow Blue Yellow" :credit "Maquette · 2026"
    :alt "A turquoise and yellow plaster unit seen from above, casting a long blue shadow"}
   {:img-src "big_red/master.jpg" :aspect-ratio 1.778
    :caption "The Big Red" :credit "Render · 2026"
    :alt "A long red plaster block on black feet, with smaller blue and pink units on top"}
   {:img-src "artwork/1.jpeg" :aspect-ratio 0.75
    :caption "Leaning Red" :credit "Pigmented plaster · 2026"
    :alt "A tall red slab leaning against a wall beside a narrow green unit"}
   (merge {:type :threejs :aspect-ratio 0.75
           :caption "The Big Red" :credit "Interactive 3D"}
          big-red-model)
   {:img-src "big_red_walkway/5.jpg" :aspect-ratio 1.791
    :caption "The Big Red at the Arsenale" :credit "Render · 2026"
    :alt "The Big Red on the quay beside the canal at the Arsenale gate, with a wooden footbridge"}
   {:img-src "blue_yellow/side-2.jpg" :aspect-ratio 0.75
    :caption "Blue Yellow Blue Yellow" :credit "Render · 2026"
    :alt "A turquoise unit topped with yellow, its shadow falling across a pale floor"}
   {:img-src "blue_yellow/cu-2.jpg" :aspect-ratio 0.75
    :caption "Blue Yellow Blue Yellow" :credit "Detail · 2026"
    :alt "Close view of turquoise and yellow plaster faces meeting at a corner"}
   {:img-src "big_red/low_side.jpg" :aspect-ratio 1.778
    :caption "The Big Red" :credit "Render · 2026"
    :alt "The Big Red from a low angle, with blue, pink and black units stepped on its top"}
   {:img-src "photos/blue_unit_with_hand.jpg" :aspect-ratio 1.5
    :caption "Blue Block" :credit "Los Angeles · 2026"
    :alt "A hand resting on a single blue plaster unit"}
   {:img-src "big_red/corner_low.jpg" :aspect-ratio 0.75
    :caption "The Big Red" :credit "Render · 2026"
    :alt "The Big Red seen corner-on, its stepped units rising to a small yellow block"}
   {:img-src "big_red/black_leg.jpg" :aspect-ratio 0.75
    :caption "The Big Red" :credit "Detail · 2026"
    :alt "Close view of a black foot and a green foot under the red block"}
   {:img-src "big_red/flag.jpg" :aspect-ratio 1.383
    :caption "The Big Red" :credit "Render · 2026"
    :alt "The Big Red from above, its shadow stretched across a pale floor"}])

(def ^:private facts
  [["Artist"       "Zadik Zadikian"]
   ["Curators"     "Tony Shafrazi, Tina Chakarian"]
   ["Commissioner" "Svetlana Sahakyan"]
   ["Venue"        "Arsenale Militare, Tesa 41"]
   ["Dates"        "9 May – 22 November 2026"]
   ["Hours"        "Tuesday – Sunday, 11:00–18:30 · closed Mondays"]])

;; ── Hero ────────────────────────────────────────────────────────────────

(defnc hero []
  (let [ref (hooks/use-ref nil)
        [_ in-view?] (use-scroll-trigger ref {:start "top bottom" :end "bottom top"})
        [paused? set-paused!] (hooks/use-state false)
        [film-open? set-film-open!] (hooks/use-state false)
        hero-film (some #(when (= hero-playback-id (:playback-id %)) %) films/films)]
    (<>
     ($ film-lightbox {:film (when film-open? hero-film)
                       :on-close #(set-film-open! false)})
     (d/section {:ref ref :class "ap-hero isolate"}
                (d/div {:class "ap-hero__media" :aria-hidden true}
                       (d/img {:src (mux-poster hero-playback-id {:w 1600 :time 100})
                               :alt "" :class "absolute inset-0 w-full h-full object-cover"})
                       ($ lazy-video {:allow-audio? false
                                      :playback-id hero-playback-id
                                      :should-play? (and in-view? (not paused?) (not film-open?))}))
                (d/div {:class "ap-hero__controls"}
                       (d/button {:class "ap-iconbtn"
                                  :aria-label (if paused? "Play background video" "Pause background video")
                                  :on-click #(set-paused! (not paused?))}
                                 (d/svg {:viewBox "0 0 16 16" :fill "currentColor" :aria-hidden true}
                                        (if paused?
                                          (d/path {:d "M4 2l10 6-10 6z"})
                                          (<> (d/rect {:x 3 :y 2 :width 3.5 :height 12})
                                              (d/rect {:x 9.5 :y 2 :width 3.5 :height 12}))))))
                (d/div {:class "ap-hero__body"}
                       (d/p {:class "ap-label m-0"} "Armenia Pavilion · Biennale Arte 2026")
                       (d/h1 {:class "ap-display-xl ap-hero__title"} "Zadik Zadikian: The Studio")
                       (d/p {:class "ap-lede max-w-[34ch]"}
                            "Pigmented plaster units, cast and set by hand in Tesa 41 at the Arsenale.")
                       (d/div {:class "ap-hero__meta ap-label"}
                              (d/span "9 May – 22 November 2026")
                              (d/span "Arsenale Militare, Venice"))
                       (d/div {:class "flex flex-wrap gap-2"}
                              (d/button {:class "ap-btn ap-btn--yellow" :type "button"
                                         :on-click #(set-film-open! true)}
                                   (d/svg {:viewBox "0 0 16 16" :fill "currentColor" :aria-hidden true}
                                          (d/path {:d "M4 2l10 6-10 6z"}))
                                   "Watch the film")
                              (d/a {:class "ap-btn ap-btn--ghost !text-white !border-white" :href "/visit"}
                                   "Plan your visit"))))
     (d/div {:class "ap-hero__strip" :aria-hidden true}
            (for [i (range 9)] (d/i {:key i}))))))

;; ── Intro + facts ───────────────────────────────────────────────────────

(defnc intro []
  (d/section {:class "ap-sec"}
             (d/div {:class "ap-wrap ap-intro"}
                    (d/div {:class "flex flex-col gap-6"}
                           (d/p {:class "ap-label ap-muted m-0"}
                                "61st International Art Exhibition — La Biennale di Venezia · In Minor Keys")
                           (d/h2 {:class "ap-display-l"} "One unit, set by hand, again and again.")
                           (d/p {:class "ap-lede"}
                                "At the heart of Zadik Zadikian’s work is a small plaster block, colored all the way through. "
                                "Gathered, balanced and stacked, the units become The Studio: a working room of color inside the Arsenale.")
                           (d/a {:class "ap-link ap-body-s self-start py-3 -my-3" :href "/blog/the-studio-play-balance"}
                                "Read: Play, Balance, and the Life of Form"))
                    (d/dl {:class "ap-facts"}
                          (for [[k v] facts]
                            (d/div {:key k} (d/dt k) (d/dd v)))))))

;; ── Chapter I: the ephemeral ground ─────────────────────────────────────

(def ^:private grounds
  "Ground and text colour for each pigment a hovered letter can carry."
  {"red" ["--red" "--on-red"] "blue" ["--blue" "--on-blue"] "yellow" ["--yellow" "--on-yellow"]
   "turquoise" ["--turquoise" "--on-turquoise"] "pink" ["--pink" "--on-pink"]
   "brick" ["--brick" "--on-yellow"] "ink" ["--night" "--on-night"]})

(defnc unit-chapter []
  ;; Hovering a letter (desktop) holds the ground on its pigment, so that
  ;; letter sinks into it and only its tilted depth shows.
  (let [[ground set-ground!] (hooks/use-state nil)
        [bg on] (grounds ground)]
    (d/section {:class "ap-chapter ap-chapter--ephemeral" :id "unit"
                :data-ground (when ground "")
                :style (when ground #js {"--ground" (str "var(" bg ")") "--ground-on" (str "var(" on ")")})}
               (d/div {:class "ap-wrap ap-ch-grid !px-0"}
                      (d/div {:class "flex flex-col gap-4"}
                             (d/p {:class "ap-label ap-chapter__eyebrow m-0"} "Chapter")
                             (d/p {:class "ap-numeral" :aria-hidden true} "I")
                             (d/h2 {:class "ap-display-l ap-chapter__title"} "The Unit")
                             (d/p {:class "ap-body m-0 max-w-[36ch]"}
                                  "Each block is resolved on its own before it joins anything. Color is embedded in the material, not painted on.")
                             (d/p {:class "ap-ephemeral-note"}
                                  "Structures are assembled for a moment, then gone. Watch the ground: each color erases its own letters."))
                      (d/div {:class "ap-ch-mark"}
                             ($ studio-mark-3d {:variants #{:stack :pigment} :on-hover set-ground!}))))))

;; ── Works gallery ───────────────────────────────────────────────────────

(defnc works-gallery []
  (d/section {:class "ap-sec" :aria-label "Works"}
             ($ fit-gallery {:label "Works · 2026"
                             :title "The units, assembled"
                             :slides (mapv #(cond-> % (:img-src %) (update :img-src (partial str media)))
                                           works)
                             :action (d/a {:class "ap-btn ap-btn--ghost max-sm:!hidden" :href "/artist"}
                                          "The artist")})))

;; ── Chapter 41: the Hall ────────────────────────────────────────────────

(defnc hall-chapter []
  (<>
   (d/section {:class "ap-chapter ap-chapter--red"}
              (d/div {:class "ap-wrap !px-0 flex flex-col gap-4"}
                     (d/p {:class "ap-label ap-chapter__eyebrow m-0"} "Chapter · Arsenale")
                     (d/p {:class "ap-numeral" :aria-hidden true} "41")
                     (d/h2 {:class "ap-display-l ap-chapter__title"} "The Hall")
                     (d/p {:class "ap-body m-0 max-w-[40ch]"}
                          "Tesa 41: timber trusses and brick in the historic Arsenale, the room The Studio is built for.")))
   (d/figure {:class "ap-figure m-0"}
             (d/div {:class "ap-figure__frame" :style #js {"--ar" "21/9"}}
                    ($ picture {:src (str media "big_red_walkway/1.jpg") :ar (/ 21 9)
                                :alt "The Big Red on the quay in front of the Arsenale gate towers"}))
             (d/figcaption {:class "ap-tomb ap-wrap mt-2"}
                           (d/span {:class "ap-tomb__no"} "FIG. 1")
                           (d/span {:class "ap-tomb__title"} "The Big Red at the Arsenale")
                           (d/span {:class "ap-tomb__credit"} "Render · Venice 2026")))))

;; ── Films ───────────────────────────────────────────────────────────────

(defnc films-section []
  (let [[current set-current!] (hooks/use-state (first films/films))
        [playing? set-playing!] (hooks/use-state false)
        {:keys [title playback-id poster summary where duration]} current
        pick! (fn [f] (set-current! f) (set-playing! true))]
    (d/section {:class "ap-sec ap-film" :id "film"}
               (d/div {:class "ap-wrap flex flex-col gap-6"}
                      (d/div {:class "ap-head-row !m-0"}
                             (d/div
                              (d/p {:class "ap-label m-0 mb-1 text-yellow"} "Films")
                              (d/h2 {:class "ap-h1"} "In the studio"))
                             (d/p {:class "ap-caption m-0 !text-on-night opacity-70"}
                                  (str (count films/films) " films · sound on")))
                      (d/figure {:class "ap-figure"}
                                (d/div {:class "ap-figure__frame" :style #js {"--ar" "16/9"}}
                                       (if playing?
                                         ($ lazy-film {:key playback-id :playback-id playback-id :title title
                                                       :poster (mux-poster playback-id {:w 1600 :time poster})})
                                         (<>
                                          (d/img {:src (mux-poster playback-id {:w 1600 :time poster})
                                                  :alt "" :loading "lazy"})
                                          (d/button {:class "ap-play" :aria-label (str "Play " title)
                                                     :on-click #(set-playing! true)}
                                                    (d/svg {:width 28 :height 28 :viewBox "0 0 16 16"
                                                            :fill "currentColor" :aria-hidden true}
                                                           (d/path {:d "M4 2l10 6-10 6z"}))))))
                                (d/figcaption {:class "ap-tomb"}
                                              (d/span {:class "ap-tomb__no"} (films/running-time duration))
                                              (d/span {:class "ap-tomb__title"} title)
                                              (d/span {:class "ap-tomb__credit"} (str where " · " (:when current)))))
                      (d/p {:class "ap-body m-0 max-w-[60ch]"} summary)
                      (d/ul {:class "ap-reel" :aria-label "All films"}
                            (for [{:keys [slug] :as f} films/films]
                              (d/li {:key slug}
                                    (d/button {:class "ap-reel__item"
                                               :aria-current (when (= slug (:slug current)) "true")
                                               :on-click #(pick! f)}
                                              (d/span {:class "ap-reel__thumb"}
                                                      (d/img {:src (mux-poster (:playback-id f) {:w 480 :time (:poster f)})
                                                              :alt "" :loading "lazy"})
                                                      (d/span {:class "ap-reel__time"} (films/running-time (:duration f))))
                                              (d/span {:class "ap-reel__title"} (:title f))
                                              (d/span {:class "ap-reel__meta"} (:when f))))))))))

;; ── Visit teaser ────────────────────────────────────────────────────────

(defnc visit-teaser []
  (d/section {:class "ap-sec"}
             (d/div {:class "ap-wrap ap-visit"}
                    (d/div {:class "ap-map ap-map--stack"}
                           (d/div {:class "ap-map__plate" :role "img"
                                   :aria-label "Map of the water taxi route through Rio delle Galeazze to the pavilion landing"}
                                  ($ mapbox-map {:class "!h-full"
                                                 :interactive? false
                                                 :initial-view mc/water-taxi-initial-view
                                                 :bounds mc/galeazze-bounds
                                                 :ant-paths mc/water-taxi-ant-paths
                                                 :layers mc/water-taxi-layers :labels-url mc/water-taxi-data-url}))
                           (d/p {:class "ap-caption m-0 p-4"}
                                "Water taxi route: enter from the North Lagoon via Rio delle Galeazze to the pavilion drop-off point."))
                    (d/div {:class "flex flex-col gap-6"}
                           (d/p {:class "ap-label ap-muted m-0"} "Visit · Venice")
                           (d/h2 {:class "ap-display-l"} "Getting to Tesa 41")
                           (d/ul {:class "ap-modes"}
                                 (d/li (d/i {:class "ap-swatch bg-yellow outline outline-2 outline-ink"})
                                       (d/div (d/h3 {:class "ap-h3"} "On foot")
                                              (d/p {:class "ap-body-s mt-1 mb-0"}
                                                   "About an eight-minute walk from the crossing at the Piraeus Lion.")))
                                 (d/li (d/i {:class "ap-swatch bg-blue"})
                                       (d/div (d/h3 {:class "ap-h3"} "Water taxi")
                                              (d/p {:class "ap-body-s mt-1 mb-0"}
                                                   "From the North Lagoon through Rio delle Galeazze, the only permitted entrance."))))
                           (d/div {:class "flex flex-wrap gap-2"}
                                  (d/a {:class "ap-btn ap-btn--blue" :href "/visit"} "Plan your visit")
                                  (d/a {:class "ap-btn ap-btn--ghost" :href "/route-from-hotel-gabrielli"}
                                       "Water taxi card"))))))

;; ── Journal teaser ──────────────────────────────────────────────────────

(defnc journal-teaser []
  (d/section {:class "ap-sec !pt-0"}
             (d/div {:class "ap-wrap"}
                    (d/div {:class "ap-head-row"}
                           (d/div
                            (d/p {:class "ap-label ap-muted m-0 mb-1"} "Journal")
                            (d/h2 {:class "ap-h1"} "Notes from the studio"))
                           (d/a {:class "ap-btn ap-btn--ghost" :href "/blog"} "All posts"))
                    (d/div {:class "ap-cards"}
                           (for [p (take 3 journal/posts)]
                             ($ post-card {:key (:slug p) :& p}))
                           ;; Fill the row while there are fewer than three posts.
                           (when (< (count journal/posts) 3)
                             (d/a {:class "ap-card ap-card--text" :href "/blog"}
                                  (d/div {:class "ap-card__meta"} (d/span "Journal"))
                                  (d/h3 {:class "ap-card__title"} "More notes from the studio as the work is made.")
                                  (d/span {:class "ap-label"} "All posts →")))))))

;; ── Page ────────────────────────────────────────────────────────────────

(defnc landing-view []
  (d/div {:class "overflow-x-hidden"}
         ($ closure-banner)
         ($ hero)
         ($ intro)
         ($ unit-chapter)
         ($ works-gallery)
         ($ hall-chapter)
         ($ films-section)
         ($ visit-teaser)
         ($ journal-teaser)
         (d/div {:class (s/cx s/content-column-container "border-t border-rule")}
                (d/div {:class (str "flex flex-col " s/content-column)}
                       ($ about-studio {:id "about-studio" :title "The Studio"})
                       ($ in-minor-keys {:id "in-minor-keys" :title "In Minor Keys"})
                       ($ curators-section {:id "curators" :title "Curators"})))))
