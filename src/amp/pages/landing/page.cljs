(ns amp.pages.landing.page
  "Homepage (design canvas: Main). Video hero, the walks teaser, intro + facts, the ephemeral
   Unit chapter, On the bench (work in progress), works gallery, the story
   teaser, the Portage teaser, the films, getting to the pavilion and the
   latest journal posts, then the long-form exhibition texts."
  (:require
   [amp.config :as config]
   [amp.data.films :as films]
   [amp.data.journal :as journal]
   [amp.hooks.use-in-view :refer [use-in-view]]
   [amp.hooks.use-press-home :as press-home :refer [use-press-home]]
   [amp.lib.defnc :refer [defnc]]
   [amp.pages.landing.bench :refer [on-the-bench]]
   [amp.pages.landing.curators :refer [curators-section]]
   [amp.pages.landing.supporters :refer [supporters-section]]
   [amp.pages.landing.in-minor-keys :refer [in-minor-keys]]
   [amp.pages.landing.studio :refer [about-studio]]
   [amp.pages.landing.teasers :refer [portage-teaser story-teaser walks-teaser]]
   [amp.pages.landing.works :as works]
   [amp.pages.venue.map-config :as mc]
   [amp.ui.fit-gallery :refer [fit-gallery]]
   [amp.ui.lazy-map :refer [mapbox-map]]
   [amp.ui.lightbox :refer [film-lightbox]]
   [amp.ui.picture :as picture :refer [picture mux-poster]]
   [amp.ui.post-card :refer [post-card]]
   [amp.ui.studio-mark :refer [studio-mark-flat]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [clojure.string :as str]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def lazy-video (lazy-component amp.ui.video-background/video-background))

(def lazy-film (lazy-component amp.ui.video-background/film-player))

;; Hero loop: Carrying (a red unit carried through the Arsenale, Oct 2026).
(def ^:private hero-playback-id "El6mWAaeWtIxqHERgu7fYE00pcLH7szuH8EG16lbn7CE")

(def ^:private media picture/media-host)

(def ^:private facts
  [["Artist"       "Zadik Zadikian"]
   ["Curators"     "Tony Shafrazi, Tina Chakarian"]
   ["Commissioner" "Svetlana Sahakyan"]
   ["Venue"        "Arsenale Militare, Tesa 41"]
   ["Dates"        "9 May – 22 November 2026"]
   ["Hours"        "Tuesday – Sunday, 10:00–17:30 · closed Mondays"]])

;; ── Hero ────────────────────────────────────────────────────────────────

(defnc hero []
  (let [[ref {in-view? :in?}] (use-in-view)
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
                       (d/p {:class "ap-label m-0"} "Armenian Pavilion · Biennale Arte 2026")
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

(def ^:private unit-words
  "A word and a line for each pigment, in the order the ground cycles
   through them (the ap-ground keyframes): each shows while its colour holds
   the ground, and hovering a block shows the word of its colour."
  [["yellow" "The Unit" "Each block is resolved on its own before it joins anything. Color is embedded in the material, not painted on."]
   ["red" "Touch" "Form is thought through by hand, one block at a time."]
   ["blue" "Hand" "In Venice everything arrives on foot or by boat, carried by hand."]
   ["turquoise" "Ephemeral" "A stack stands for a day, then becomes the next one."]
   ["pink" "Improvise" "The block is a tool for improvisation, for rhythm, for play."]
   ["brick" "Stack" "One block on another: the oldest way to build."]
   ["ink" "Tune" "“You tune into simplicity, blocks of colour.” Zadik Zadikian"]])

(defn- use-living-ground
  "Fetches the living-grounds player (resources/data/grounds) once the
   chapter comes near the screen, and hands it the section. Skipped under
   reduced motion, where the ground holds still."
  [section]
  (hooks/use-effect
   :once
   (let [el @section]
     (when (and el (not (.-matches (js/matchMedia "(prefers-reduced-motion: reduce)"))))
       (let [start! (fn []
                      (let [go #(some-> (.-GroundsPlayer js/window) (.start el))]
                        (if (.-GroundsPlayer js/window)
                          (go)
                          (let [s (js/document.createElement "script")]
                            (set! (.-src s) (str "/data/grounds/player.js?v=" config/git-hash))
                            (set! (.-async s) true)
                            (set! (.-onload s) go)
                            (js/document.head.appendChild s)))))
             io (js/IntersectionObserver.
                 (fn [entries ^js obs]
                   (when (some #(.-isIntersecting ^js %) (array-seq entries))
                     (.disconnect obs)
                     (start!)))
                 #js {:rootMargin "400px"})]
         (.observe io el)
         (fn []
           (.disconnect io)
           (some-> (.-GroundsPlayer js/window) (.stop el))))))))

(defnc unit-chapter []
  ;; The words follow the ground: each pigment's word shows while that colour
  ;; holds (CSS, in step with ap-ground). Hovering a letter (desktop) holds
  ;; the ground on its pigment, so that letter sinks into it and only its
  ;; tilted depth shows, and holds that colour's word.
  (let [section (hooks/use-ref nil)
        _ (use-living-ground section)
        [ground set-ground!] (hooks/use-state nil)
        ;; Keep the last colour after the pointer leaves so the overlay
        ;; fades out in it instead of snapping to transparent.
        [last-ground set-last!] (hooks/use-state nil)
        _ (hooks/use-effect [ground] (when ground (set-last! ground)))
        [bg on] (grounds (or ground last-ground))
        ;; Every word sits in the same grid cell, so the block is as tall as
        ;; the longest and nothing below it moves when the words change.
        ;; Two layers: the cycle (CSS, in step with the ground) and the held
        ;; word of the hovered colour, kept through the fade back out.
        held (or ground last-ground)
        swap (fn [class tag k]
               (let [text (fn [[_ word line]] (if (= k :word) word line))]
                 (d/div {:class (str "ap-swap " class)}
                        (d/div {:class "ap-swap__cycle"}
                               (map-indexed (fn [i w]
                                              ($ tag {:key i :class "m-0" :style #js {"--k" i}
                                                      :aria-hidden (when (pos? i) true)}
                                                 (text w)))
                                            unit-words))
                        (d/div {:class "ap-swap__held" :aria-hidden true}
                               (for [[pigment :as w] unit-words]
                                 ($ tag {:key pigment :class "m-0"
                                         :data-on (when (= pigment held) "")}
                                    (text w)))))))]
    (d/section {:class "ap-chapter ap-chapter--ephemeral" :id "unit" :ref section
                :data-ground (when ground "")
                :style (when (or ground last-ground) #js {"--ground" (str "var(" bg ")") "--ground-on" (str "var(" on ")")})}
               (d/canvas {:class "ap-ground-canvas" :aria-hidden true})
               ;; The grounds' controls; resources/data/grounds/player.js fills
               ;; the picker and wires them, and shows them once one plays.
               (d/div {:class "ap-ground-ui" :data-ground-ui ""}
                      (d/div {:class "ap-ground-ui__row"}
                             (d/button {:type "button" :class "ap-ground-ui__btn" :data-ground-pause "" :aria-pressed "false"}
                                       "Pause")
                             (d/button {:type "button" :class "ap-ground-ui__btn" :data-ground-next ""}
                                       "Next" (d/span {:class "max-sm:hidden"} " ground"))
                             ;; A select-only combobox (WAI-ARIA APG): focus stays
                             ;; on it, the list opens upward over the chapter.
                             (d/span {:id "ground-pick-label" :class "sr-only"} "Ground")
                             (d/div {:class "ap-ground-ui__combo" :role "combobox" :tab-index 0
                                     :aria-haspopup "listbox" :aria-expanded "false" :aria-controls "ground-list"
                                     :aria-labelledby "ground-pick-label ground-pick-value" :data-ground-pick ""}
                                    (d/span {:id "ground-pick-value" :class "ap-ground-ui__value" :data-ground-value ""})
                                    (d/span {:class "ap-ground-ui__chev" :aria-hidden true}))
                             (d/ul {:id "ground-list" :role "listbox" :class "ap-ground-ui__list" :tab-index -1
                                    :aria-labelledby "ground-pick-label" :hidden true :data-ground-list ""}))
                      (d/p {:class "ap-ground-ui__idea m-0" :data-ground-idea ""}))
               (d/div {:class "ap-wrap ap-ch-grid !px-0"}
                      (d/div {:class "flex flex-col gap-4"}
                             (d/p {:class "ap-label ap-chapter__eyebrow m-0"} "Chapter")
                             (d/p {:class "ap-numeral" :aria-hidden true} "I")
                             (d/h2 {:class "ap-display-l ap-chapter__title m-0"}
                                   (swap "" "span" :word))
                             (swap "ap-body max-w-[36ch]" "p" :line)
                             (d/p {:class "ap-ephemeral-note"}
                                  "Structures are assembled for a moment, then gone. Watch the ground: each color erases its own letters."))
                      (d/div {:class "ap-ch-mark"}
                             ($ studio-mark-flat {:variants #{:stack :pigment} :on-hover set-ground!}))))))

;; ── Works gallery ───────────────────────────────────────────────────────

(defnc works-gallery []
  (let [[ref {near? :in?}] (use-in-view :root-margin "150% 0px")
        press (press-home/of (use-press-home near?) "works")]
    (d/section {:ref ref :class "ap-sec" :aria-label "Works"}
               ($ fit-gallery {:label "Works · 2026"
                               :title "The units, assembled"
                               :slides (mapv #(cond-> % (:img-src %) (update :img-src (partial str media)))
                                             (works/slides press))
                               :action (d/a {:class "ap-btn ap-btn--ghost max-sm:!hidden" :href "/artist"}
                                            "The artist")}))))

;; ── Films ───────────────────────────────────────────────────────────────

(defn- linked-film
  "The film the address names: /films/<slug>, or the older /#film-<slug>."
  []
  (let [slug (or (second (re-find #"^/films/([a-z0-9-]+)/?$" (.. js/location -pathname)))
                 (let [h (.. js/location -hash)] (when (str/starts-with? h "#film-") (subs h 6))))]
    (some #(when (= (:slug %) slug) %) films/films)))

(defn- scroll-to-film!
  "Bring the films section into view, again once the page above has settled."
  [slug]
  (doseq [ms [300 900]]
    (js/setTimeout #(some-> (.getElementById js/document (str "film-" slug)) (.scrollIntoView #js {:block "start"})) ms)))

(defnc films-section []
  (let [[current set-current!] (hooks/use-state #(or (linked-film) (first films/films)))
        ;; A /films/<slug> link (a share) picks that film and scrolls to it; an
        ;; older /#film-<slug> link too (the router scrolls to its anchor).
        _ (hooks/use-effect
           :once
           (when (str/starts-with? (.. js/location -pathname) "/films/")
             (some-> (linked-film) :slug scroll-to-film!))
           (let [on-hash #(when-let [f (linked-film)] (set-current! f))]
             (.addEventListener js/window "hashchange" on-hash)
             #(.removeEventListener js/window "hashchange" on-hash)))
        [playing? set-playing!] (hooks/use-state false)
        {:keys [title playback-id poster summary where duration]} current
        ;; Picking a film puts its link (/films/<slug>) in the address bar,
        ;; without a navigation, so it can be copied and shared with a preview.
        pick! (fn [f]
                (set-current! f)
                (set-playing! true)
                (.replaceState js/history (.-state js/history) "" (str "/films/" (:slug f))))
        ;; Fetch the player's code before anyone presses play.
        [ref {near? :in?}] (use-in-view :root-margin "100% 0px")
        _ (hooks/use-effect [near?] (when near? (.preload lazy-film)))
        still (d/img {:src (mux-poster playback-id {:w 1600 :time poster})
                      :alt "" :loading "lazy"})]
    (d/section {:ref ref :class "ap-sec ap-film relative" :id "film"}
               ;; One anchor per film at the top of the section, for #film-<slug>.
               (for [{:keys [slug]} films/films]
                 (d/span {:key slug :id (str "film-" slug) :class "absolute top-0 left-0" :aria-hidden true
                            :style #js {:scrollMarginTop "var(--header-h)"}}))
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
                                                       :fallback still
                                                       :poster (mux-poster playback-id {:w 1600 :time poster})})
                                         (<>
                                          still
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

(def ^:private visit-modes
  [{:id :walk :swatch "bg-yellow" :title "On foot"
    :body "About an eight-minute walk from the crossing at the Piraeus Lion."
    :caption "Walking route: from the Piraeus Lion through the Arsenale to the pavilion."}
   {:id :water :swatch "bg-paper" :title "Water taxi"
    :body "From the North Lagoon through Rio delle Galeazze, the only permitted entrance."
    :caption "Water taxi route: enter from the North Lagoon via Rio delle Galeazze to the pavilion drop-off point."}])

(def ^:private visit-facts
  [["Where" "Arsenale Militare, Tesa 41"]
   ["Open" "Tuesday – Sunday, 10:00–17:30"]
   ["Until" "22 November 2026"]])

(defnc visit-teaser []
  ;; A blue plate of its own. On foot by default; the two ways in switch the map.
  (let [[mode set-mode!] (hooks/use-state :walk)
        walk? (= mode :walk)]
    (d/section {:class "ap-vt" :aria-labelledby "vt-title"}
               (d/div {:class "ap-wrap ap-vt__grid"}
                      (d/div {:class "ap-vt__head"}
                             (d/p {:class "ap-label m-0 ap-vt__eyebrow"} "Visit · Venice")
                             (d/h2 {:id "vt-title" :class "ap-display-l m-0"} "Getting to the pavilion")
                             (d/p {:class "ap-lede m-0 max-w-[34ch]"}
                                  "We are in Tesa 41, a hall inside the Arsenale Militare. Come on foot, or by water taxi to the landing at the door."))
                      (d/ul {:class "ap-vt__modes" :role "group" :aria-label "Route on the map"}
                            (for [{:keys [id swatch title body]} visit-modes]
                              (d/li {:key (name id)}
                                    (d/button {:type "button" :aria-pressed (= mode id)
                                               :on-click #(set-mode! id)}
                                              (d/i {:class (str "ap-vt__swatch " swatch)})
                                              (d/span {:class "ap-h3 block"} title)
                                              (d/span {:class "ap-body-s block"} body)))))
                      (d/figure {:class "ap-vt__map m-0"}
                                (d/div {:class "ap-vt__plate" :role "img"
                                        :aria-label (if walk?
                                                      "Map of the walking route from the Piraeus Lion to the pavilion"
                                                      "Map of the water taxi route through Rio delle Galeazze to the pavilion landing")}
                                       (if walk?
                                         ($ mapbox-map {:key "walk" :class "!h-full"
                                                        :interactive? false
                                                        :initial-view mc/initial-view
                                                        :bounds mc/visitor-bounds :bounds-padding 32
                                                        :ant-paths mc/ant-paths
                                                        :layers mc/layers :labels-url mc/visitor-data-url})
                                         ($ mapbox-map {:key "water" :class "!h-full"
                                                        :interactive? false
                                                        :initial-view mc/water-taxi-initial-view
                                                        :bounds mc/galeazze-bounds
                                                        :ant-paths mc/water-taxi-ant-paths
                                                        :layers mc/water-taxi-layers :labels-url mc/water-taxi-data-url})))
                                (d/figcaption {:class "ap-vt__cap"}
                                              (:caption (some #(when (= mode (:id %)) %) visit-modes))))
                      (d/div {:class "ap-vt__foot"}
                             (d/dl {:class "ap-vt__facts"}
                                   (for [[k v] visit-facts]
                                     (d/div {:key k} (d/dt k) (d/dd v))))
                             (d/div {:class "flex flex-wrap gap-2"}
                                    (d/a {:class "ap-btn ap-btn--yellow" :href "/visit"} "Plan your visit")
                                    (if walk?
                                      (d/a {:class "ap-btn ap-vt__ghost" :href mc/maps-url
                                            :target "_blank" :rel "noopener"}
                                           "Open in Maps")
                                      (d/a {:class "ap-btn ap-vt__ghost" :href "/route-from-hotel-gabrielli"}
                                           "Water taxi card"))))))))

;; ── Journal teaser ──────────────────────────────────────────────────────

(defnc journal-teaser []
  (d/section {:class "ap-sec"}
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
         ($ hero)
         ($ walks-teaser)
         ($ intro)
         ($ unit-chapter)
         ($ on-the-bench)
         ($ works-gallery)
         ($ story-teaser)
         ($ portage-teaser)
         ($ films-section)
         ($ visit-teaser)
         ($ journal-teaser)
         ($ about-studio {:id "about-studio"})
         ($ in-minor-keys {:id "in-minor-keys"})
         ($ curators-section {:id "curators"})
         ($ supporters-section {:id "supporters"})))
