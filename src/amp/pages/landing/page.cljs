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
   [amp.i18n :as i18n :refer [t ts] :refer-macros [defcatalog]]
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

(defcatalog "landing")

(def lazy-video (lazy-component amp.ui.video-background/video-background))

(def lazy-film (lazy-component amp.ui.video-background/film-player))

;; Hero loop: Carrying (a red unit carried through the Arsenale, Oct 2026).
(def ^:private hero-playback-id "El6mWAaeWtIxqHERgu7fYE00pcLH7szuH8EG16lbn7CE")

(def ^:private media picture/media-host)

(defn- facts []
  [[(t :landing/facts.artist)       (t :landing/facts.artist-value)]
   [(t :landing/facts.curators)     (t :landing/facts.curators-value)]
   [(t :landing/facts.commissioner) (t :landing/facts.commissioner-value)]
   [(t :landing/facts.venue)        "Arsenale Militare, Tesa 41"]
   [(t :landing/facts.dates)        (t :landing/facts.dates-value)]
   [(t :landing/facts.hours)        (t :landing/facts.hours-value)]])

;; ── Hero ────────────────────────────────────────────────────────────────

(defnc hero []
  (let [[ref {in-view? :in?}] (use-in-view)
        [paused? set-paused!] (hooks/use-state false)
        [film-open? set-film-open!] (hooks/use-state false)
        hero-film (some #(when (= hero-playback-id (:playback-id %)) %) (films/films))]
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
                                  :aria-label (ts (if paused? :landing/hero.play-bg :landing/hero.pause-bg))
                                  :on-click #(set-paused! (not paused?))}
                                 (d/svg {:viewBox "0 0 16 16" :fill "currentColor" :aria-hidden true}
                                        (if paused?
                                          (d/path {:d "M4 2l10 6-10 6z"})
                                          (<> (d/rect {:x 3 :y 2 :width 3.5 :height 12})
                                              (d/rect {:x 9.5 :y 2 :width 3.5 :height 12}))))))
                (d/div {:class "ap-hero__body"}
                       (d/p {:class "ap-label m-0"} (t :landing/hero.eyebrow))
                       (d/h1 {:class "ap-display-xl ap-hero__title"} "Zadik Zadikian: The Studio")
                       (d/p {:class "ap-lede max-w-[34ch]"}
                            (t :landing/hero.lede))
                       (d/div {:class "ap-hero__meta ap-label"}
                              (d/span (t :landing/hero.dates))
                              (d/span (t :landing/hero.where)))
                       (d/div {:class "flex flex-wrap gap-2"}
                              (d/button {:class "ap-btn ap-btn--yellow" :type "button"
                                         :on-click #(set-film-open! true)}
                                   (d/svg {:viewBox "0 0 16 16" :fill "currentColor" :aria-hidden true}
                                          (d/path {:d "M4 2l10 6-10 6z"}))
                                   (t :landing/hero.watch))
                              (d/a {:class "ap-btn ap-btn--ghost !text-white !border-white" :href (i18n/href "/visit")}
                                   (t :landing/hero.plan)))))
     (d/div {:class "ap-hero__strip" :aria-hidden true}
            (for [i (range 9)] (d/i {:key i}))))))

;; ── Intro + facts ───────────────────────────────────────────────────────

(defnc intro []
  (d/section {:class "ap-sec"}
             (d/div {:class "ap-wrap ap-intro"}
                    (d/div {:class "flex flex-col gap-6"}
                           (d/p {:class "ap-label ap-muted m-0"}
                                (t :landing/intro.eyebrow))
                           (d/h2 {:class "ap-display-l"} (t :landing/intro.title))
                           (d/p {:class "ap-lede"} (t :landing/intro.lede))
                           (d/a {:class "ap-link ap-body-s self-start py-3 -my-3" :href (i18n/href "/blog/the-studio-play-balance")}
                                (t :landing/intro.read)))
                    (d/dl {:class "ap-facts"}
                          (for [[k v] (facts)]
                            (d/div {:key k} (d/dt k) (d/dd v)))))))

;; ── Chapter I: the ephemeral ground ─────────────────────────────────────

(def ^:private grounds
  "Ground and text colour for each pigment a hovered letter can carry."
  {"red" ["--red" "--on-red"] "blue" ["--blue" "--on-blue"] "yellow" ["--yellow" "--on-yellow"]
   "turquoise" ["--turquoise" "--on-turquoise"] "pink" ["--pink" "--on-pink"]
   "brick" ["--brick" "--on-yellow"] "ink" ["--night" "--on-night"]})

(defn- unit-words
  "A word and a line for each pigment, in the order the ground cycles
   through them (the ap-ground keyframes): each shows while its colour holds
   the ground, and hovering a block shows the word of its colour
   (landing.json unit.word.<pigment>, unit.line.<pigment>)."
  []
  (for [pigment ["yellow" "red" "blue" "turquoise" "pink" "brick" "ink"]]
    [pigment
     (t (keyword "landing" (str "unit.word." pigment)))
     (t (keyword "landing" (str "unit.line." pigment)))]))

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
                                            (unit-words)))
                        (d/div {:class "ap-swap__held" :aria-hidden true}
                               (for [[pigment :as w] (unit-words)]
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
                             (d/button {:type "button" :class "ap-ground-ui__btn" :data-ground-pause "" :aria-pressed "false"
                                        :data-play (ts :landing/unit.play) :data-pause (ts :landing/unit.pause)}
                                       (t :landing/unit.pause))
                             (d/button {:type "button" :class "ap-ground-ui__btn" :data-ground-next ""}
                                       (d/span {:class "sm:hidden"} (t :landing/unit.next))
                                       (d/span {:class "max-sm:hidden"} (t :landing/unit.next-ground)))
                             ;; A select-only combobox (WAI-ARIA APG): focus stays
                             ;; on it, the list opens upward over the chapter.
                             (d/span {:id "ground-pick-label" :class "sr-only"} (t :landing/unit.ground))
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
                             (d/p {:class "ap-label ap-chapter__eyebrow m-0"} (t :landing/unit.eyebrow))
                             (d/p {:class "ap-numeral" :aria-hidden true} "I")
                             (d/h2 {:class "ap-display-l ap-chapter__title m-0"}
                                   (swap "" "span" :word))
                             (swap "ap-body max-w-[36ch]" "p" :line)
                             (d/p {:class "ap-ephemeral-note"}
                                  (t :landing/unit.note)))
                      (d/div {:class "ap-ch-mark"}
                             ($ studio-mark-flat {:variants #{:stack :pigment} :on-hover set-ground!}))))))

;; ── Works gallery ───────────────────────────────────────────────────────

(defnc works-gallery []
  (let [[ref {near? :in?}] (use-in-view :root-margin "150% 0px")
        press (press-home/of (use-press-home near?) "works")]
    (d/section {:ref ref :class "ap-sec" :aria-label (ts :landing/works.aria)}
               ($ fit-gallery {:label (t :landing/works.label)
                               :title (t :landing/works.title)
                               :slides (mapv #(cond-> % (:img-src %) (update :img-src (partial str media)))
                                             (works/slides press))
                               :action (d/a {:class "ap-btn ap-btn--ghost max-sm:!hidden" :href (i18n/href "/artist")}
                                            (t :landing/works.artist))}))))

;; ── Films ───────────────────────────────────────────────────────────────

(defn- linked-film
  "The film the address names: /films/<slug>, or the older /#film-<slug>."
  []
  (let [slug (or (second (re-find #"^/films/([a-z0-9-]+)/?$" (second (i18n/split-path (.. js/location -pathname)))))
                 (let [h (.. js/location -hash)] (when (str/starts-with? h "#film-") (subs h 6))))]
    (some #(when (= (:slug %) slug) %) (films/films))))

(defn- scroll-to-film!
  "Bring the films section into view, again once the page above has settled."
  [slug]
  (doseq [ms [300 900]]
    (js/setTimeout #(some-> (.getElementById js/document (str "film-" slug)) (.scrollIntoView #js {:block "start"})) ms)))

(defnc films-section []
  (let [[current set-current!] (hooks/use-state #(or (linked-film) (first (films/films))))
        ;; A /films/<slug> link (a share) picks that film and scrolls to it; an
        ;; older /#film-<slug> link too (the router scrolls to its anchor).
        _ (hooks/use-effect
           :once
           (when (str/starts-with? (second (i18n/split-path (.. js/location -pathname))) "/films/")
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
                (.replaceState js/history (.-state js/history) "" (i18n/href (str "/films/" (:slug f)))))
        ;; Fetch the player's code before anyone presses play.
        [ref {near? :in?}] (use-in-view :root-margin "100% 0px")
        _ (hooks/use-effect [near?] (when near? (.preload lazy-film)))
        still (d/img {:src (mux-poster playback-id {:w 1600 :time poster})
                      :alt "" :loading "lazy"})]
    (d/section {:ref ref :class "ap-sec ap-film relative" :id "film"}
               ;; One anchor per film at the top of the section, for #film-<slug>.
               (for [{:keys [slug]} (films/films)]
                 (d/span {:key slug :id (str "film-" slug) :class "absolute top-0 left-0" :aria-hidden true
                            :style #js {:scrollMarginTop "var(--header-h)"}}))
               (d/div {:class "ap-wrap flex flex-col gap-6"}
                      (d/div {:class "ap-head-row !m-0"}
                             (d/div
                              (d/p {:class "ap-label m-0 mb-1 text-yellow"} (t :landing/films.label))
                              (d/h2 {:class "ap-h1"} (t :landing/films.title)))
                             (d/p {:class "ap-caption m-0 !text-on-night opacity-70"}
                                  (t :landing/films.count {:n (count (films/films))})))
                      (d/figure {:class "ap-figure"}
                                (d/div {:class "ap-figure__frame" :style #js {"--ar" "16/9"}}
                                       (if playing?
                                         ($ lazy-film {:key playback-id :playback-id playback-id :title title
                                                       :fallback still
                                                       :poster (mux-poster playback-id {:w 1600 :time poster})})
                                         (<>
                                          still
                                          (d/button {:class "ap-play" :aria-label (ts :landing/films.play {:title title})
                                                     :on-click #(set-playing! true)}
                                                    (d/svg {:width 28 :height 28 :viewBox "0 0 16 16"
                                                            :fill "currentColor" :aria-hidden true}
                                                           (d/path {:d "M4 2l10 6-10 6z"}))))))
                                (d/figcaption {:class "ap-tomb"}
                                              (d/span {:class "ap-tomb__no"} (films/running-time duration))
                                              (d/span {:class "ap-tomb__title"} title)
                                              (d/span {:class "ap-tomb__credit"} (str where " · " (:when current)))))
                      (d/p {:class "ap-body m-0 max-w-[60ch]"} summary)
                      (d/ul {:class "ap-reel" :aria-label (ts :landing/films.all)}
                            (for [{:keys [slug] :as f} (films/films)]
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

(defn- visit-modes []
  [{:id :walk :swatch "bg-yellow" :title (t :landing/visit.walk.title)
    :body (t :landing/visit.walk.body)
    :caption (t :landing/visit.walk.caption)}
   {:id :water :swatch "bg-paper" :title (t :landing/visit.water.title)
    :body (t :landing/visit.water.body)
    :caption (t :landing/visit.water.caption)}])

(defn- visit-facts []
  [[(t :landing/visit.where) "Arsenale Militare, Tesa 41"]
   [(t :landing/visit.open) (t :landing/visit.open-value)]
   [(t :landing/visit.until) (t :landing/visit.until-value)]])

(defnc visit-teaser []
  ;; A blue plate of its own. On foot by default; the two ways in switch the map.
  (let [[mode set-mode!] (hooks/use-state :walk)
        walk? (= mode :walk)
        modes (visit-modes)]
    (d/section {:class "ap-vt" :aria-labelledby "vt-title"}
               (d/div {:class "ap-wrap ap-vt__grid"}
                      (d/div {:class "ap-vt__head"}
                             (d/p {:class "ap-label m-0 ap-vt__eyebrow"} (t :landing/visit.eyebrow))
                             (d/h2 {:id "vt-title" :class "ap-display-l m-0"} (t :landing/visit.title))
                             (d/p {:class "ap-lede m-0 max-w-[34ch]"} (t :landing/visit.lede)))
                      (d/ul {:class "ap-vt__modes" :role "group" :aria-label (ts :landing/visit.modes)}
                            (for [{:keys [id swatch title body]} modes]
                              (d/li {:key (name id)}
                                    (d/button {:type "button" :aria-pressed (= mode id)
                                               :on-click #(set-mode! id)}
                                              (d/i {:class (str "ap-vt__swatch " swatch)})
                                              (d/span {:class "ap-h3 block"} title)
                                              (d/span {:class "ap-body-s block"} body)))))
                      (d/figure {:class "ap-vt__map m-0"}
                                (d/div {:class "ap-vt__plate" :role "img"
                                        :aria-label (ts (if walk? :landing/visit.walk.map :landing/visit.water.map))}
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
                                              (:caption (some #(when (= mode (:id %)) %) modes))))
                      (d/div {:class "ap-vt__foot"}
                             (d/dl {:class "ap-vt__facts"}
                                   (for [[k v] (visit-facts)]
                                     (d/div {:key k} (d/dt k) (d/dd v))))
                             (d/div {:class "flex flex-wrap gap-2"}
                                    (d/a {:class "ap-btn ap-btn--yellow" :href (i18n/href "/visit")} (t :landing/visit.plan))
                                    (if walk?
                                      (d/a {:class "ap-btn ap-vt__ghost" :href mc/maps-url
                                            :target "_blank" :rel "noopener"}
                                           (t :landing/visit.maps))
                                      (d/a {:class "ap-btn ap-vt__ghost" :href (i18n/href "/route-from-hotel-gabrielli")}
                                           (t :landing/visit.card)))))))))

;; ── Journal teaser ──────────────────────────────────────────────────────

(defnc journal-teaser []
  (d/section {:class "ap-sec"}
             (d/div {:class "ap-wrap"}
                    (d/div {:class "ap-head-row"}
                           (d/div
                            (d/p {:class "ap-label ap-muted m-0 mb-1"} (t :landing/journal.label))
                            (d/h2 {:class "ap-h1"} (t :landing/journal.title)))
                           (d/a {:class "ap-btn ap-btn--ghost" :href (i18n/href "/blog")} (t :landing/journal.all)))
                    (d/div {:class "ap-cards"}
                           (for [p (take 3 (journal/posts))]
                             ($ post-card {:key (:slug p) :& p}))
                           ;; Fill the row while there are fewer than three posts.
                           (when (< (count (journal/posts)) 3)
                             (d/a {:class "ap-card ap-card--text" :href (i18n/href "/blog")}
                                  (d/div {:class "ap-card__meta"} (d/span (t :landing/journal.label)))
                                  (d/h3 {:class "ap-card__title"} (t :landing/journal.more))
                                  (d/span {:class "ap-label"} (t :landing/journal.all-arrow))))))))

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
