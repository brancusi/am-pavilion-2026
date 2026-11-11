(ns amp.pages.walks.page
  "Walks (/walks): the studio carries the works out of Tesa 41 and through
   the city, November 2026. A map of every walk (scripts/walks.mjs routes
   them over OpenStreetMap, favouring wide passages and new streets), a
   player that carries the works along the chosen walk and stops where they
   were set down, the walk's itinerary, film and photographs, and the
   schedule, then a gallery of one walk's photographs and a call to walk along
   or sign up for walk alerts. The walk list is amp.data.walks (generated); the lines and the
   base map are fetched from /data/walks/ when the map comes near. Films are
   short silent loops on R2 (walks/films/), graded from the camera originals.
   Text: the walks catalog (resources/i18n/<locale>/walks.json) for the page,
   data-walks (source-keyed, written by scripts/walks.mjs) for the plan's
   titles, notes and stops."
  (:require
   [amp.data.walk-media :as wm :refer [films photos stop-photos hero-photo
                                       at-time duration short-date long-date
                                       weekday weekday-abbr day-of status-label]]
   [amp.hooks.use-in-view :refer [use-in-view]]
   [amp.data.films :as films-data]
   [amp.i18n :as i18n :refer [t ts tx] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.footer :refer [use-subscribe]]
   [amp.ui.lightbox :refer [film-lightbox]]
   [amp.ui.picture :as picture :refer [picture]]
   ["react-dom" :refer [createPortal]]
   [clojure.string :as str]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defcatalog "walks")
(defcatalog "data-walks")

(def ^:private media picture/media-host)
(def ^:private routes-url "/data/walks/routes.json")

;; ── Text ────────────────────────────────────────────────────────────────

(defn- localize
  "A walk with its plan text (title, note, stop names and details) in the
   current locale. Call while rendering."
  [w]
  (-> w
      (update :title #(tx :data-walks %))
      (update :note #(tx :data-walks %))
      (update :stops (fn [ss] (mapv #(-> % (update :name (fn [x] (tx :data-walks x)))
                                         (update :detail (fn [x] (tx :data-walks x))))
                                    ss)))))

(defn- dec1 "One decimal: 6.3 / 6,3." [x]
  (i18n/number x {:minimumFractionDigits 1 :maximumFractionDigits 1}))

(defn- km-n "A walk's length as given (2.66 / 2,66)." [x]
  (i18n/number x {:maximumFractionDigits 2}))

(defn- works-n "A count of works: a number, or a range such as 3–6." [w]
  (if (number? w) (i18n/number w {}) (str w)))

(defn- loop-title [id] (ts (keyword "walks" (str "loop." id))))

(defn- photo-key [path] (str/replace (last (str/split path #"/")) #"\.\w+$" ""))

(defn- photo-text
  "A photograph with its :title and :alt in the current locale."
  [{:keys [path] :as ph}]
  (let [k (photo-key path)]
    (assoc ph
           :title (ts (keyword "walks" (str "photo." k ".title")))
           :alt (ts (keyword "walks" (str "photo." k ".alt"))))))

(defn- film-src [id] (str media "walks/films/" id ".mp4"))
(defn- film-poster [id w] (picture/image-url (str media "walks/films/" id ".jpg") {:w w}))

;; ── Pieces ──────────────────────────────────────────────────────────────

(defn- reduced-motion? []
  (.-matches (js/matchMedia "(prefers-reduced-motion: reduce)")))

(defnc loop-film
  "A silent loop: plays while on screen, with a pause control; under
   reduced motion it holds its poster until played."
  [{:keys [id]}]
  (let [title (loop-title id)
        [ref {in? :in?}] (use-in-view :root-margin "100px 0px")
        video (hooks/use-ref nil)
        [paused? set-paused!] (hooks/use-state (reduced-motion?))]
    (hooks/use-effect
     [in? paused?]
     (when-let [^js v @video]
       (if (and in? (not paused?))
         (some-> (.play v) (.catch (fn [_])))
         (.pause v))))
    (d/figure {:ref ref :class "ap-wk-film m-0"}
              (d/div {:class "ap-wk-film__frame"}
                     (d/video {:ref video :src (when in? (film-src id)) :poster (film-poster id 800)
                               :muted true :loop true :playsInline true :preload "none"
                               :aria-label title})
                     (d/button {:type "button" :class "ap-iconbtn ap-wk-film__btn"
                                :aria-label (if paused? (ts :walks/film.play {:title title}) (ts :walks/film.pause {:title title}))
                                :on-click #(set-paused! (not paused?))}
                               (d/svg {:viewBox "0 0 16 16" :fill "currentColor" :aria-hidden true}
                                      (if paused?
                                        (d/path {:d "M4 2l10 6-10 6z"})
                                        (<> (d/rect {:x 3 :y 2 :width 3.5 :height 12})
                                            (d/rect {:x 9.5 :y 2 :width 3.5 :height 12}))))))
              (d/figcaption {:class "ap-caption"} (t :walks/film.caption {:title title})))))

(defn- use-routes
  "The lines, fetched once `near?`: {walk-id {:d :pts :cum :len :stops}} plus
   the frame (:pavilion, :m-per-px), or nil until they arrive."
  [near?]
  (let [[routes set-routes!] (hooks/use-state nil)]
    (hooks/use-effect
     [near?]
     (when (and near? (nil? routes))
       (-> (js/fetch routes-url)
           (.then #(.json %))
           (.then (fn [^js r]
                    (set-routes!
                     {:pavilion (vec (.-pavilion r))
                      :m-per-px (.-mPerPx r)
                      :walks (into {}
                                   (for [^js w (.-walks r)
                                         :let [pts (.-pts w)
                                               cum (loop [i 1 acc [0]]
                                                     (if (< i (.-length pts))
                                                       (let [a (aget pts (dec i)) b (aget pts i)]
                                                         (recur (inc i) (conj acc (+ (peek acc) (js/Math.hypot (- (aget b 0) (aget a 0)) (- (aget b 1) (aget a 1)))))))
                                                       acc))]]
                                     [(.-id w) {:d (.-d w) :pts pts :cum cum :len (peek cum)
                                                :stops (mapv vec (.-stops w))}]))})))
           (.catch (fn [_])))))
    routes))

(defn- point-at
  "[x y] at fraction `t` along a line."
  [{:keys [pts cum len]} t]
  (let [target (* t len)
        i (max 1 (min (dec (count cum)) (or (some #(when (>= (cum %) target) %) (range 1 (count cum))) (dec (count cum)))))
        a (aget pts (dec i)) b (aget pts i)
        seg (max 1e-6 (- (cum i) (cum (dec i))))
        k (max 0 (min 1 (/ (- target (cum (dec i))) seg)))]
    [(+ (aget a 0) (* k (- (aget b 0) (aget a 0))))
     (+ (aget a 1) (* k (- (aget b 1) (aget a 1))))]))

;; ── The map and its player ──────────────────────────────────────────────

(defnc walk-map
  "Every walk on the base map, the chosen one drawn in yellow. Play carries
   the works (a little stack in their colours) along it, pausing at each
   stop; the slider moves along it by hand."
  [{:keys [walks walk routes]}]
  (let [line (get-in routes [:walks (:id walk)])
        [t set-t!] (hooks/use-state 1)
        [playing? set-playing!] (hooks/use-state false)
        t-ref (hooks/use-ref 1)
        raf (hooks/use-ref nil)
        stop! (fn [] (some-> @raf js/cancelAnimationFrame) (set-playing! false))
        set-at! (fn [x] (reset! t-ref x) (set-t! x))
        play! (fn []
                (let [start (if (>= @t-ref 1) 0 @t-ref)
                      stops-t (map #(nth % 2) (:stops line))
                      secs 18
                      last-at (atom (js/performance.now))
                      hold (atom 0)]
                  (set-at! start)
                  (set-playing! true)
                  (letfn [(step [now]
                            (let [dt (/ (- now @last-at) 1000)]
                              (reset! last-at now)
                              (if (pos? @hold)
                                (do (swap! hold - dt) (reset! raf (js/requestAnimationFrame step)))
                                (let [t0 @t-ref t1 (min 1 (+ t0 (/ dt secs)))]
                                  (when (some #(and (< t0 %) (>= t1 %)) stops-t) (reset! hold 1.4))
                                  (set-at! t1)
                                  (if (< t1 1)
                                    (reset! raf (js/requestAnimationFrame step))
                                    (set-playing! false))))))]
                    (reset! raf (js/requestAnimationFrame step)))))]
    ;; a new walk starts drawn in full; stop any run when leaving
    (hooks/use-effect [(:id walk)] (stop!) (set-at! 1))
    (hooks/use-effect :once #(some-> @raf js/cancelAnimationFrame))
    (let [{:keys [depart minutes km]} walk
          moving? (and line (< 0 t 1))
          [mx my] (if line (point-at line t) [0 0])
          stops (:stops line)
          reached (filter #(<= (nth % 2) (+ t 0.002)) stops)
          here (when moving? (when (seq reached) (dec (count reached))))
          len (or (:len line) 1)
          dash #js {:strokeDasharray (str len " " len) :strokeDashoffset (* len (- 1 t))}
          [px py] (:pavilion routes)
          stop-name (fn [i] (:name (get (:stops walk) i)))
          photo (when here (get-in stop-photos [(:id walk) here]))]
      (d/div {:class "ap-wk-map"}
             (d/div {:class "ap-wk-map__plate"}
                    (d/img {:class "ap-wk-map__base ap-wk-map__base--light" :src "/data/walks/basemap.svg" :alt "" :loading "lazy" :decoding "async"})
                    (d/img {:class "ap-wk-map__base ap-wk-map__base--dark" :src "/data/walks/basemap-dark.svg" :alt "" :loading "lazy" :decoding "async"})
                    (when routes
                      (d/svg {:viewBox "0 0 1600 1082" :class "ap-wk-map__svg" :role "img"
                              :aria-label (i18n/ts :walks/map.aria {:n (:n walk) :title (:title walk)})}
                             (d/path {:class "ap-wk-map__others is-planned"
                                      :d (str/join (for [w walks :when (and (not= (:id w) (:id walk)) (not= :walked (:status w)))]
                                                     (get-in routes [:walks (:id w) :d])))})
                             (d/path {:class "ap-wk-map__others"
                                      :d (str/join (for [w walks :when (and (not= (:id w) (:id walk)) (= :walked (:status w)))]
                                                     (get-in routes [:walks (:id w) :d])))})
                             (d/path {:class "ap-wk-map__ghost" :d (:d line)})
                             (d/path {:class "ap-wk-map__casing" :d (:d line) :style dash})
                             (d/path {:class "ap-wk-map__line" :d (:d line) :style dash})
                             (d/g {:transform (str "translate(" px " " py ")")}
                                  (d/rect {:class "ap-wk-map__ap" :x -17 :y -17 :width 34 :height 34})
                                  (d/text {:class "ap-wk-map__ap-label" :y 5 :text-anchor "middle"} "AP"))
                             (for [[i [x y st]] (map-indexed vector stops)]
                               (d/g {:key i :class "ap-wk-map__stop" :data-on (when (<= st (+ t 0.002)) "")
                                     :transform (str "translate(" x " " y ")")}
                                    (d/circle {:r 15})
                                    (d/text {:y 5 :text-anchor "middle"} (inc i))))
                             (when moving?
                               (d/g {:class "ap-wk-map__works" :transform (str "translate(" mx " " my ")")}
                                    (d/rect {:x -21 :y -30 :width 12 :height 20 :fill "var(--turquoise)"})
                                    (d/rect {:x -6 :y -30 :width 12 :height 20 :fill "#fff"})
                                    (d/rect {:x 9 :y -30 :width 12 :height 20 :fill "var(--red)"})
                                    (d/circle {:r 6})
                                    (d/text {:x 28 :y -12} (if here (str (inc here) " · " (stop-name here)) (i18n/t :walks/map.leaving)))))
                             (d/g {:class "ap-wk-map__north" :transform "translate(1530 70)" :aria-hidden true}
                                  (d/path {:d "M0 -26 L9 0 L0 -6 L-9 0 Z"})
                                  (d/text {:y 22 :text-anchor "middle"} (i18n/t :walks/map.north)))
                             (d/g {:class "ap-wk-map__scale" :transform "translate(60 1040)" :aria-hidden true}
                                  (d/rect {:y -6 :width (/ 500 (:m-per-px routes)) :height 6})
                                  (d/text {:y -14} (i18n/t :walks/map.scale {:m 500})))))
                    (d/ul {:class "ap-wk-map__key ap-label" :aria-label (i18n/ts :walks/map.key)}
                          (d/li (d/i {:class "is-this"}) (i18n/t :walks/map.key-this))
                          (d/li (d/i {:class "is-walked"}) (i18n/t :walks/walked))
                          (d/li (d/i {:class "is-planned"}) (i18n/t :walks/map.key-planned))
                          (d/li (d/i {:class "is-ap"}) (i18n/t :walks/map.key-ap)))
                    (when photo
                      (d/figure {:key photo :class "ap-wk-map__here m-0"}
                                ($ picture {:src (str media photo) :alt (stop-name here) :sizes "240px"})
                                (d/figcaption {:class "ap-label"} (str (inc here) " · " (stop-name here))))))
             (d/div {:class "ap-wk-player"}
                    (d/button {:type "button" :class "ap-btn ap-btn--yellow ap-wk-player__play"
                               :disabled (nil? line)
                               :on-click #(if playing? (stop!) (play!))}
                              (d/svg {:viewBox "0 0 16 16" :fill "currentColor" :aria-hidden true}
                                     (if playing?
                                       (<> (d/rect {:x 3 :y 2 :width 3.5 :height 12}) (d/rect {:x 9.5 :y 2 :width 3.5 :height 12}))
                                       (d/path {:d "M4 2l10 6-10 6z"})))
                              (cond playing? (i18n/t :walks/player.pause) (< t 1) (i18n/t :walks/player.carry-on) :else (i18n/t :walks/player.play)))
                    (d/input {:type "range" :min 0 :max 1000 :step 1 :value (js/Math.round (* t 1000))
                              :class "ap-wk-player__range" :aria-label (i18n/ts :walks/player.position)
                              :disabled (nil? line)
                              :on-change (fn [e] (stop!) (set-at! (/ (js/Number (.. e -target -value)) 1000)))})
                    (d/span {:class "ap-wk-player__clock ap-data"}
                            (i18n/t :walks/player.clock {:time (at-time depart (wm/clock walk t)) :done (dec1 (* km t)) :total (dec1 km)})))))))

(defn- fig-caption [date i title by]
  (ts :walks/fig.caption {:n (inc i) :title title :date (i18n/date date) :by (or by "none")}))

(defnc still-viewer
  "A walk's photographs full screen (design system: Lightbox). Arrow keys,
   swipe or the buttons step through them; Escape, × or the backdrop close."
  [{:keys [photos date by at on-go on-close]}]
  (let [close-ref (hooks/use-ref nil)
        touch (hooks/use-ref nil)
        n (count photos)
        {:keys [path title alt]} (when at (nth photos at nil))
        go #(on-go (mod (+ at %) n))]
    (hooks/use-effect
     [(some? at)]
     (when at
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
    (when path
      (createPortal
       (d/div {:class "ap-lightbox ap-wk-viewer" :role "dialog" :aria-modal true :aria-label title}
              (d/div {:class "ap-lightbox__bar"}
                     (d/p {:class "ap-label m-0"}
                          (d/span {:class "text-yellow"} (str (inc at) " / " n))
                          (str " · " title)
                          (d/span {:class "ap-lightbox__where"} (str " · " (ts :walks/viewer.where {:date (i18n/date date)}))))
                     (d/button {:ref close-ref :class "ap-iconbtn" :aria-label (ts :walks/viewer.close) :on-click on-close}
                               (d/svg {:viewBox "0 0 16 16" :fill "none" :stroke "currentColor" :stroke-width 1.6 :aria-hidden true}
                                      (d/path {:d "M3 3l10 10M13 3L3 13"}))))
              (d/div {:class "ap-wk-viewer__stage"
                      :on-click #(when (= (.-target %) (.-currentTarget %)) (on-close))
                      :on-touch-start #(reset! touch (.. % -touches (item 0) -clientX))
                      :on-touch-end (fn [e]
                                      (when-let [x0 @touch]
                                        (let [dx (- (.. e -changedTouches (item 0) -clientX) x0)]
                                          (when (> (js/Math.abs dx) 48) (go (if (neg? dx) 1 -1))))
                                        (reset! touch nil)))}
                     ($ picture {:key path :src (str media path) :alt alt :sizes "100vw" :eager? true}))
              (d/div {:class "ap-wk-viewer__foot"}
                     (d/button {:type "button" :class "ap-wk-viewer__btn" :aria-label (ts :walks/viewer.prev) :on-click #(go -1)} "←")
                     (d/p {:class "ap-caption m-0"} (fig-caption date at title by))
                     (d/button {:type "button" :class "ap-wk-viewer__btn" :aria-label (ts :walks/viewer.next) :on-click #(go 1)} "→")))
       (.-body js/document)))))

(defn- film-by-slug [slug] (some #(when (= slug (:slug %)) %) (films-data/films)))

(defnc walk-film
  "A walk's finished film: its poster with a play button; plays with sound
   in the film lightbox."
  [{:keys [film walk]}]
  (let [[open? set-open!] (hooks/use-state false)
        {:keys [title playback-id poster duration summary]} film]
    (d/figure {:class "ap-wk-film m-0"}
              (d/button {:type "button" :class "ap-wk-film__poster" :on-click #(set-open! true)
                         :aria-label (ts :walks/wfilm.play-aria {:title title})}
                        (d/img {:src (picture/mux-poster playback-id {:w 1600 :time poster})
                                :srcSet (str (picture/mux-poster playback-id {:w 960 :time poster}) " 960w, "
                                             (picture/mux-poster playback-id {:w 1600 :time poster}) " 1600w, "
                                             (picture/mux-poster playback-id {:w 2400 :time poster}) " 2400w")
                                :sizes "(min-width: 1100px) 66vw, 100vw"
                                :alt "" :loading "lazy" :decoding "async"})
                        (d/span {:class "ap-wk-film__play" :aria-hidden true}
                                (d/svg {:viewBox "0 0 16 16" :fill "currentColor"} (d/path {:d "M4 2l10 6-10 6z"}))
                                (t :walks/wfilm.play {:time (films-data/running-time duration)})))
              (d/figcaption {:class "ap-wk-film__cap"}
                            (d/p {:class "ap-label ap-muted m-0"}
                                 (if walk (t :walks/wfilm.label {:n (:n walk) :date (long-date (:date walk))}) (t :walks/wfilm.film)))
                            (d/p {:class "ap-display-l m-0"} title)
                            (d/p {:class "ap-body m-0"} summary)
                            (d/button {:type "button" :class "ap-btn ap-btn--yellow self-start" :on-click #(set-open! true)}
                                      (t :walks/wfilm.watch)))
              ($ film-lightbox {:film (when open? film) :on-close #(set-open! false)}))))

(defnc film-band
  "The latest walk film, right under the hero."
  [{:keys [walks]}]
  (let [[id slug] (last (sort-by key wm/walk-films))
        film (film-by-slug slug)
        walk (some #(when (= id (:id %)) %) walks)]
    (when film
      (d/section {:class "ap-wrap ap-wk-filmband" :aria-label (ts :walks/wfilm.film)}
                 ($ walk-film {:film film :walk walk})))))

;; ── Sections ────────────────────────────────────────────────────────────

(defnc hero [{:keys [walks]}]
  (let [done (filter #(= :walked (:status %)) walks)
        nxt (some #(when (:next? %) %) walks)]
    (<>
     (d/section {:class "ap-wk-hero"}
                ($ picture {:src (str media hero-photo) :eager? true :class "ap-wk-hero__img" :sizes "(orientation: portrait) 150vh, 100vw"
                            :alt (ts :walks/hero.alt)})
                (d/div {:class "ap-wrap ap-wk-hero__body"}
                       (d/p {:class "ap-label m-0"} (t :walks/hero.eyebrow))
                       (d/h1 {:class "ap-display-xl m-0"} (t :walks/hero.title))
                       (d/p {:class "ap-lede m-0 max-w-[32ch]"}
                            (t :walks/hero.lede))
                       (d/div {:class "flex flex-wrap gap-2"}
                              (d/a {:class "ap-btn ap-btn--yellow" :href "#walks-map"} (t :walks/hero.see))
                              (d/a {:class "ap-btn ap-btn--ghost !text-white !border-white" :href "#schedule"} (t :walks/walk-with-us)))))
     (d/section {:class "ap-wk-counts" :aria-label (ts :walks/counts.aria)}
                (d/dl {:class "ap-wrap ap-wk-counts__row"}
                      (d/div (d/dt {:class "ap-label"} (t :walks/counts.walks)) (d/dd (count done)))
                      (d/div (d/dt {:class "ap-label"} (t :walks/works-carried)) (d/dd (reduce + (map :works done))))
                      (d/div (d/dt {:class "ap-label"} (t :walks/counts.km)) (d/dd (dec1 (reduce + (map :km done)))))
                      (when nxt
                        (d/div {:class "is-next"}
                               (d/dt {:class "ap-label"} (t :walks/counts.next {:time (:depart nxt) :works (works-n (:works nxt))}))
                               (d/dd (long-date (:date nxt))))))))))

(defnc accademia-links
  "The Academy's own announcements of the 18 November walk."
  [_props]
  (let [{:keys [event-url instagram pdf]} wm/accademia]
    (d/ul {:class "ap-wk-acc__links"}
          (d/li (d/a {:href event-url :target "_blank" :rel "noopener"} (t :walks/acc.event)))
          (d/li (d/a {:href instagram :target "_blank" :rel "noopener"} (t :walks/acc.instagram)))
          (d/li (d/a {:href (str media pdf) :target "_blank" :rel "noopener"} (t :walks/acc.pdf))))))

(defnc accademia
  "The walk to the Accademia di Belle Arti, as the Academy confirmed it: the
   poster, the time and place, and links to its own announcements."
  [{:keys [walks on-pick]}]
  (let [{:keys [poster poster-ar] wid :walk} wm/accademia
        {:keys [n date depart minutes] :as w} (some #(when (= wid (:id %)) %) walks)]
    (when (and w (not= :walked (:status w)))
      (d/section {:id "accademia" :class "ap-wrap ap-wk-acc" :aria-labelledby "acc-title"}
                 (d/figure {:class "ap-wk-acc__poster m-0"}
                           (d/a {:class "ap-wk-acc__frame" :style #js {"--ar" poster-ar}
                                 :href (str media poster) :target "_blank" :rel "noopener"
                                 :aria-label (ts :walks/acc.open-poster)}
                                ($ picture {:src (str media poster) :sizes "(min-width: 960px) 30vw, 100vw"
                                            :alt (ts :walks/acc.poster-alt)}))
                           (d/figcaption {:class "ap-caption"} (t :walks/acc.poster-caption)))
                 (d/div {:class "ap-wk-acc__text"}
                        (d/p {:class "ap-label m-0"} (t :walks/acc.eyebrow {:n n :date (long-date date)}))
                        (d/h2 {:id "acc-title" :class "ap-display-l m-0"} (t :walks/acc.title))
                        (d/p {:class "ap-lede m-0"} (t :walks/acc.lede))
                        (d/dl {:class "ap-wk-facts"}
                              (d/div (d/dt {:class "ap-label"} (t :walks/acc.cloister)) (d/dd {:class "ap-data"} "11:00–12:00"))
                              (d/div (d/dt {:class "ap-label"} (t :walks/acc.rain)) (d/dd {:class "ap-data"} "Aula 1"))
                              (d/div (d/dt {:class "ap-label"} (t :walks/leaves)) (d/dd {:class "ap-data"} depart))
                              (d/div (d/dt {:class "ap-label"} (t :walks/back)) (d/dd {:class "ap-data"} (str "≈ " (at-time depart minutes)))))
                        (d/p {:class "ap-body-s m-0"}
                             (t :walks/acc.note))
                        ($ accademia-links {})
                        (d/a {:class "ap-btn self-start" :href "#walks-map" :on-click #(on-pick wid)} (t :walks/acc.route)))))))

(defnc walk-list [{:keys [walks walk on-pick]}]
  (d/ul {:class "ap-wk-list" :aria-label (ts :walks/list.aria)}
        (for [{:keys [id n date title works km minutes status next?] :as w} walks
              :let [on? (= id (:id walk))]]
          (d/li {:key id}
                (d/button {:type "button" :aria-pressed on? :on-click #(on-pick id)
                           :data-status (name status) :data-next (when next? "")}
                          (d/span {:class "ap-wk-list__n"} n)
                          (d/span {:class "ap-wk-list__text"}
                                  (d/span {:class "ap-label"} (str (short-date date) " · " (status-label w)))
                                  (d/span {:class "ap-wk-list__title"} title)
                                  (d/span {:class "ap-caption"} (t :walks/list.meta {:works (works-n works) :km (km-n km) :duration (duration minutes)}))))))))

(defnc walk-detail [{:keys [walk]}]
  (let [{:keys [id n date title works depart minutes km wide fresh via note stops status]} walk
        back (at-time depart minutes)
        fs (get films id)
        ps (mapv photo-text (get photos id))
        film (some-> (get wm/walk-films id) film-by-slug)
        [viewing set-viewing!] (hooks/use-state nil)]
    (<>
     (d/section {:class "ap-wrap ap-wk-detail" :aria-labelledby "walk-title"}
                (d/div {:class "ap-wk-detail__head"}
                       (d/div {:class "ap-wk-detail__date"}
                              (d/span {:class "ap-numeral"} (day-of date))
                              (d/span (d/span {:class "ap-label ap-muted"} (t :walks/detail.walk {:n n :weekday (weekday date)}))
                                      (d/span {:class "ap-h2 block"} (i18n/date date {:month "long" :year "numeric"}))))
                       (d/h2 {:id "walk-title" :class "ap-h1 m-0"} title)
                       (d/p {:class "ap-wk-tag ap-label m-0" :data-status (name status)} (status-label walk))
                       (d/dl {:class "ap-wk-facts"}
                             (d/div (d/dt {:class "ap-label"} (t :walks/leaves)) (d/dd {:class "ap-data"} depart))
                             (d/div (d/dt {:class "ap-label"} (t :walks/back)) (d/dd {:class "ap-data"} (str "≈ " back)))
                             (d/div (d/dt {:class "ap-label"} (t :walks/works-carried)) (d/dd {:class "ap-data"} (works-n works)))
                             (d/div (d/dt {:class "ap-label"} (t :walks/detail.dist)) (d/dd {:class "ap-data"} (str (t :walks/km {:km (km-n km)}) " · " (duration minutes))))
                             (d/div {:class "col-span-2"} (d/dt {:class "ap-label"} (t :walks/detail.wide))
                                    (d/dd {:class "ap-data"} (t :walks/detail.wide-val {:wide wide :fresh fresh}))))
                       (when (seq via)
                         (d/p {:class "ap-body-s m-0"} (d/span {:class "ap-label ap-muted block mb-2"} (t :walks/detail.via)) (str/join " · " via)))
                       (when note (d/p {:class "ap-caption m-0"} (t :walks/detail.note {:note note})))
                       (when (= id (:walk wm/accademia))
                         ($ accademia-links {})))
                (d/ol {:class "ap-wk-itin"}
                      (d/li (d/span {:class "ap-data"} depart) (d/i {:class "is-ap"} "AP")
                            (d/span {:class "ap-wk-itin__name"} (t :walks/itin.leave)))
                      (for [[i {:keys [name t detail arrive]}] (map-indexed vector stops)
                            :let [photo (get-in stop-photos [id i])]]
                        (d/li {:key name}
                              (d/span {:class "ap-data"} (or arrive (str "≈ " (at-time depart (wm/clock walk t)))))
                              (d/i (inc i))
                              (d/span {:class "ap-wk-itin__name"} name
                                      (d/span {:class "ap-caption block"}
                                              (cond detail detail
                                                    (= status :walked) (i18n/t :walks/itin.set-down-walked {:works (works-n works)})
                                                    :else (i18n/t :walks/itin.set-down {:works (works-n works)}))))
                              (d/span {:class "ap-wk-itin__photo"}
                                      (when photo ($ picture {:src (str media photo) :alt name :sizes "200px"})))))
                      (d/li (d/span {:class "ap-data"} (str "≈ " back)) (d/i {:class "is-ap"} "AP")
                            (d/span {:class "ap-wk-itin__name"} (i18n/t :walks/itin.home)))))
     (when (or (seq fs) (seq ps))
       (d/section {:class "ap-wrap ap-wk-media" :aria-label (i18n/ts :walks/media.title)}
                  (d/div {:class "ap-wk-media__head"}
                         (d/h3 {:class "ap-h2 m-0"} (t :walks/media.title))
                         (d/span {:class "ap-label ap-muted"} (t :walks/media.count {:film (if film "yes" "no") :loops (count fs) :photos (count ps)})))
                  (when film ($ walk-film {:film film :walk walk}))
                  (d/div {:class "ap-wk-films"}
                         (for [f fs] ($ loop-film {:key (:id f) :& f})))
                  (d/div {:class "ap-wk-photos"}
                         (for [[i {:keys [path title alt]}] (map-indexed vector ps)]
                           (d/figure {:key path :class "m-0"}
                                     (d/button {:type "button" :class "ap-wk-photos__frame"
                                                :aria-label (ts :walks/photo.view {:title title})
                                                :on-click #(set-viewing! i)}
                                               ($ picture {:src (str media path) :alt alt :sizes "(min-width: 960px) 25vw, 50vw"}))
                                     (d/figcaption {:class "ap-caption"} (fig-caption date i title (get wm/photographers id))))))
                  ($ still-viewer {:photos ps :date date :by (get wm/photographers id) :at viewing :on-go set-viewing! :on-close #(set-viewing! nil)}))))))

(defnc schedule [{:keys [walks walk on-pick]}]
  (let [by-date (into {} (map (juxt :date identity) walks))]
    (d/section {:id "schedule" :class "ap-wk-sched" :aria-labelledby "schedule-title"}
               (d/div {:class "ap-wrap ap-wk-sched__wrap"}
                      (d/div {:class "ap-wk-sched__head"}
                             (d/div {:class "flex flex-col gap-3"}
                                    (d/p {:class "ap-label m-0 ap-wk-sched__eyebrow"} (t :walks/sched.eyebrow))
                                    (d/h2 {:id "schedule-title" :class "ap-display-l m-0"} (t :walks/walk-with-us)))
                             (d/p {:class "ap-body m-0 max-w-[30em]"}
                                  (t :walks/sched.text)))
                      (d/div {:class "ap-wk-days" :role "group" :aria-label (ts :walks/sched.days)}
                             (for [dd (range 5 23)
                                   :let [iso (str "2026-11-" (.padStart (str dd) 2 "0"))
                                         w (by-date iso)]]
                               (d/button {:key dd :type "button" :disabled (nil? w)
                                          :aria-pressed (= (:id w) (:id walk))
                                          :aria-label (if w (ts :walks/sched.day {:date (short-date iso) :title (:title w)}) (ts :walks/sched.no-walk {:date (short-date iso)}))
                                          :data-status (when w (name (:status w)))
                                          :on-click #(when w (on-pick (:id w)))}
                                         (d/span {:class "ap-label"} (weekday-abbr iso))
                                         (d/span {:class "ap-wk-days__d"} dd)
                                         (d/span {:class "ap-caption"} (when w (works-n (:works w)))))))
                      (d/div {:class "ap-wk-table"}
                             (d/table
                              (d/thead (d/tr {:class "ap-label"}
                                             (d/th (t :walks/th.date)) (d/th (t :walks/th.leaves)) (d/th (t :walks/th.back)) (d/th (t :walks/th.route)) (d/th (t :walks/th.works)) (d/th {:class "text-right"} (t :walks/th.distance))))
                              (d/tbody
                               (for [{:keys [id date depart minutes title works km] :as w} walks
                                     :when (not= :walked (:status w))]
                                 (d/tr {:key id}
                                       (d/td {:class "ap-data whitespace-nowrap"} (short-date date))
                                       (d/td {:class "ap-data"} depart)
                                       (d/td {:class "ap-data"} (at-time depart minutes))
                                       (d/td (d/a {:href "#walks-map" :on-click #(on-pick id)} title))
                                       (d/td {:class "ap-data"} (works-n works))
                                       (d/td {:class "ap-data text-right"} (t :walks/km {:km (km-n km)})))))))))))

(defnc walked
  "The walks so far, newest first: only those with a film or photographs,
   then the solo walk that came before them. Every card leads with a 16:9
   picture so the cards line up."
  [{:keys [walks on-pick]}]
  (let [done (filter #(and (= :walked (:status %)) (or (seq (get films (:id %))) (seq (get photos (:id %))))) walks)
        {solo-date :date :as solo} wm/solo-walk]
    (when (seq done)
      (d/section {:class "ap-wrap ap-sec ap-wk-done" :aria-labelledby "walked-title"}
                 (d/div {:class "flex flex-col gap-3"}
                        (d/p {:class "ap-label ap-muted m-0"} (t :walks/walked))
                        (d/h2 {:id "walked-title" :class "ap-display-l m-0"} (t :walks/done.title)))
                 (d/div {:class "ap-wk-done__grid"}
                        (for [{:keys [id n date works km title stops]} (reverse done)
                              :let [f (or (second (get films id)) (first (get films id)))
                                    ph (some-> (first (get photos id)) photo-text)]]
                          (d/article {:key id :class "ap-wk-done__card"}
                                     (d/div {:class "ap-wk-done__media"}
                                            (if f ($ loop-film {:& f})
                                                ($ picture {:src (str media (:path ph)) :alt (:alt ph) :sizes "(min-width: 960px) 33vw, 100vw"})))
                                     (d/span {:class "ap-label ap-muted"} (t :walks/done.meta {:n n :date (short-date date) :works (works-n works) :km (km-n km)}))
                                     (d/h3 {:class "ap-h2 m-0"} title)
                                     (d/p {:class "ap-body-s m-0"} (t :walks/done.stops {:stops (str/join (ts :walks/done.then) (map :name stops))}))
                                     (d/a {:class "ap-btn self-start" :href "#walks-map" :on-click #(on-pick id)} (t :walks/done.see))))
                        (d/article {:class "ap-wk-done__card"}
                                   (d/a {:class "ap-wk-done__media" :href (i18n/href (:film solo)) :aria-label (ts :walks/solo.aria {:title (:title solo)})}
                                        ($ picture {:src (str media (:photo solo)) :alt (ts :walks/solo.alt) :sizes "(min-width: 960px) 33vw, 100vw"}))
                                   (d/span {:class "ap-label ap-muted"}
                                           (t :walks/solo.meta {:date (short-date solo-date)}))
                                   (d/h3 {:class "ap-h2 m-0"} (:title solo))
                                   (d/p {:class "ap-body-s m-0"} (t :walks/solo.summary))
                                   (d/div {:class "flex flex-wrap gap-2"}
                                          (d/a {:class "ap-btn" :href (i18n/href (:film solo))} (t :walks/solo.watch))
                                          (d/a {:class "ap-btn ap-btn--ghost" :href (i18n/href (:post solo))} (t :walks/solo.read)))))))))

(defn- justify
  "Splits photographs (in order) into rows whose summed aspect ratios come as
   close as possible to `target` (least squares over all rows), so no row is
   one lonely panorama blown up to the full width."
  [ps target]
  (let [n (count ps)
        ars (mapv :ar ps)
        cost (fn [i j] (let [d (- (reduce + (subvec ars i j)) target)] (* d d)))
        ;; best[j] = [cost split] for the first j photographs
        best (reduce (fn [best j]
                       (conj best (apply min-key first
                                         (for [i (range (max 0 (- j 5)) j)]
                                           [(+ (first (best i)) (cost i j)) i]))))
                     [[0 0]] (range 1 (inc n)))]
    (loop [j n rows ()]
      (if (zero? j) (vec rows)
          (let [i (second (best j))] (recur i (cons (subvec (vec ps) i j) rows)))))))

(defnc gallery
  "One walk's photographs, large, in justified rows: each keeps its own
   proportions (:ar), and every photograph in a row has the same height
   (each grows in proportion to its :ar). One column on phones. Opens in the
   still viewer."
  [{:keys [walks]}]
  (let [walk (some #(when (= wm/gallery-walk (:id %)) %) walks)
        ps (mapv photo-text (get photos wm/gallery-walk))
        by (get wm/photographers wm/gallery-walk)
        [viewing set-viewing!] (hooks/use-state nil)]
    (when (and walk (seq ps))
      (d/section {:id "photographs" :class "ap-wrap ap-wk-gallery" :aria-labelledby "gallery-title"}
                 (d/div {:class "ap-wk-gallery__head"}
                        (d/div {:class "flex flex-col gap-3"}
                               (d/p {:class "ap-label ap-muted m-0"}
                                    (t :walks/gallery.eyebrow {:n (:n walk) :date (long-date (:date walk))}))
                               (d/h2 {:id "gallery-title" :class "ap-display-l m-0"} (:title walk)))
                        (d/p {:class "ap-body m-0 max-w-[30em]"}
                             (t :walks/gallery.text {:works (:works walk) :photos (count ps) :by (or by "none")})))
                 (d/div {:class "ap-wk-gallery__rows"}
                        (for [row (justify (map-indexed #(assoc %2 :i %1) ps) 4.2)]
                          (d/div {:key (:path (first row)) :class "ap-wk-gallery__row"}
                                 (for [{:keys [i path title alt ar]} row]
                                   (d/figure {:key path :class "m-0" :style #js {"--ar" ar}}
                                             (d/button {:type "button" :class "ap-wk-gallery__frame"
                                                        :aria-label (ts :walks/photo.view {:title title})
                                                        :on-click #(set-viewing! i)}
                                                       ($ picture {:src (str media path) :alt alt
                                                                   :sizes (str "(min-width: 720px) " (js/Math.round (/ (* ar 100) 4.2)) "vw, 100vw")}))
                                             (d/figcaption {:class "ap-caption"} title))))))
                 ($ still-viewer {:photos ps :date (:date walk) :by by :at viewing :on-go set-viewing! :on-close #(set-viewing! nil)})))))

(defnc join
  "Walk with us, and walk alerts by email (Buttondown, tag \"walks\")."
  [{:keys [walks]}]
  (let [nxt (some #(when (:next? %) %) walks)
        [state submit] (use-subscribe ["walks"])]
    (d/section {:id "walk-with-us" :class "ap-wk-join" :aria-label (ts :walks/walk-with-us)}
               (d/div {:class "ap-wrap ap-wk-join__grid"}
                      (d/div {:class "ap-wk-join__walk"}
                             (d/p {:class "ap-label m-0"} (t :walks/walk-with-us))
                             (d/h2 {:class "ap-display-l m-0"} (t :walks/join.title))
                             (d/p {:class "ap-body m-0"}
                                  (t :walks/join.text))
                             (when nxt
                               (d/p {:class "ap-wk-join__next m-0"}
                                    (d/span {:class "ap-label block"} (t :walks/join.next))
                                    (d/span {:class "ap-h2 block"} (t :walks/join.next-when {:date (long-date (:date nxt)) :time (:depart nxt)}))
                                    (d/span {:class "ap-body-s block"} (t :walks/join.next-meta {:title (:title nxt) :works (works-n (:works nxt)) :km (km-n (:km nxt))}))))
                             (d/div {:class "flex flex-wrap gap-2"}
                                    (d/a {:class "ap-btn" :href "#schedule"} (t :walks/join.see))
                                    (d/a {:class "ap-btn ap-btn--ghost" :href (i18n/href "/visit")} (t :walks/join.getting))))
                      (d/div {:class "ap-wk-join__alerts"}
                             (d/p {:class "ap-label m-0"} (t :walks/alerts.eyebrow))
                             (d/h3 {:class "ap-h1 m-0"} (t :walks/alerts.title))
                             (d/p {:class "ap-body m-0"}
                                  (t :walks/alerts.text))
                             (d/form {:class "ap-wk-join__form" :on-submit submit}
                                     (d/label {:class "sr-only" :for "ap-walk-email"} (t :walks/alerts.email))
                                     (d/input {:id "ap-walk-email" :name "email" :type "email" :required true
                                               :auto-complete "email" :placeholder (ts :walks/alerts.placeholder)})
                                     ;; Honeypot: hidden from people, filled by bots.
                                     (d/input {:class "ap-footer__hp" :name "website" :type "text"
                                               :tab-index -1 :auto-complete "off" :aria-hidden true})
                                     (d/button {:class "ap-btn" :type "submit" :disabled (= state :sending)}
                                               (if (= state :sending) (t :walks/alerts.sending) (t :walks/alerts.submit)))
                                     (d/p {:class "ap-wk-join__status" :role "status" :aria-live "polite"}
                                          (case state
                                            :sent (t :walks/alerts.sent)
                                            :invalid (t :walks/alerts.invalid)
                                            :error (t :walks/alerts.error)
                                            nil))))))))

;; ── Page ────────────────────────────────────────────────────────────────

(defn- first-pick
  "Today's walk, else the latest walked, else the next."
  [walks]
  (:id (or (some #(when (= :today (:status %)) %) walks)
           (last (filter #(= :walked (:status %)) walks))
           (some #(when (:next? %) %) walks)
           (first walks))))

(defnc walks-view []
  (let [walks (mapv localize (hooks/use-memo :once (wm/with-status)))
        [sel set-sel!] (hooks/use-state (first-pick walks))
        [show set-show!] (hooks/use-state :all)
        walk (some #(when (= sel (:id %)) %) walks)
        [ref {near? :in?}] (use-in-view :root-margin "100% 0px")
        routes (use-routes near?)
        shown (filter #(case show :walked (= :walked (:status %)) :coming (not= :walked (:status %)) true) walks)]
    (d/div {:class "ap-wk"}
           ($ hero {:walks walks})
           ($ film-band {:walks walks})
           ($ accademia {:walks walks :on-pick set-sel!})
           (d/section {:id "walks-map" :ref ref :class "ap-wrap ap-wk-app" :aria-labelledby "map-title"}
                      (d/div {:class "ap-wk-app__head"}
                             (d/div {:class "flex flex-col gap-3"}
                                    (d/p {:class "ap-label ap-muted m-0"} (t :walks/map.eyebrow))
                                    (d/h2 {:id "map-title" :class "ap-display-l m-0"} (t :walks/map.title)))
                             (d/div {:class "ap-wk-filters" :role "group" :aria-label (ts :walks/filters.aria)}
                                    (for [[k label] [[:all (t :walks/filters.all)] [:walked (t :walks/walked)] [:coming (t :walks/filters.coming)]]]
                                      (d/button {:key (name k) :type "button" :class "ap-label" :aria-pressed (= show k)
                                                 :on-click #(set-show! k)} label))))
                      (d/div {:class "ap-wk-app__grid"}
                             ($ walk-map {:walks walks :walk walk :routes routes})
                             ($ walk-list {:walks shown :walk walk :on-pick set-sel!}))
                      (d/p {:class "ap-caption m-0"}
                           (t :walks/map.caption)))
           ($ walk-detail {:key sel :walk walk})
           ($ schedule {:walks walks :walk walk :on-pick set-sel!})
           ($ walked {:walks walks :on-pick set-sel!})
           ($ gallery {:walks walks})
           ($ join {:walks walks}))))
