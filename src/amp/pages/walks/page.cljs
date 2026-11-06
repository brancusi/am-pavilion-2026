(ns amp.pages.walks.page
  "Walks (/walks): the studio carries the works out of Tesa 41 and through
   the city, November 2026. A map of every walk (scripts/walks.mjs routes
   them over OpenStreetMap, favouring wide passages and new streets), a
   player that carries the works along the chosen walk and stops where they
   were set down, the walk's itinerary, film and photographs, and the
   schedule. The walk list is amp.data.walks (generated); the lines and the
   base map are fetched from /data/walks/ when the map comes near. Films are
   short silent loops on R2 (walks/films/), graded from the camera originals."
  (:require
   [amp.data.walk-media :as wm :refer [films photos stop-photos hero-photo
                                       at-time duration short-date long-date
                                       weekday day-of status-label]]
   [amp.hooks.use-in-view :refer [use-in-view]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.picture :as picture :refer [picture]]
   [clojure.string :as str]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def ^:private media picture/media-host)
(def ^:private routes-url "/data/walks/routes.json")

(defn- film-src [id] (str media "walks/films/" id ".mp4"))
(defn- film-poster [id w] (picture/image-url (str media "walks/films/" id ".jpg") {:w w}))

;; ── Pieces ──────────────────────────────────────────────────────────────

(defn- reduced-motion? []
  (.-matches (js/matchMedia "(prefers-reduced-motion: reduce)")))

(defnc loop-film
  "A silent loop: plays while on screen, with a pause control; under
   reduced motion it holds its poster until played."
  [{:keys [id title]}]
  (let [[ref {in? :in?}] (use-in-view :root-margin "100px 0px")
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
                                :aria-label (if paused? (str "Play: " title) (str "Pause: " title))
                                :on-click #(set-paused! (not paused?))}
                               (d/svg {:viewBox "0 0 16 16" :fill "currentColor" :aria-hidden true}
                                      (if paused?
                                        (d/path {:d "M4 2l10 6-10 6z"})
                                        (<> (d/rect {:x 3 :y 2 :width 3.5 :height 12})
                                            (d/rect {:x 9.5 :y 2 :width 3.5 :height 12}))))))
              (d/figcaption {:class "ap-caption"} (str "Film · " title)))))

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
                              :aria-label (str "Map of Venice with every walk from the Armenian Pavilion; walk "
                                               (:n walk) ", " (:title walk) ", drawn in yellow")}
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
                                    (d/text {:x 28 :y -12} (if here (str (inc here) " · " (stop-name here)) "Leaving Tesa 41"))))
                             (d/g {:class "ap-wk-map__north" :transform "translate(1530 70)" :aria-hidden true}
                                  (d/path {:d "M0 -26 L9 0 L0 -6 L-9 0 Z"})
                                  (d/text {:y 22 :text-anchor "middle"} "N"))
                             (d/g {:class "ap-wk-map__scale" :transform "translate(60 1040)" :aria-hidden true}
                                  (d/rect {:y -6 :width (/ 500 (:m-per-px routes)) :height 6})
                                  (d/text {:y -14} "500 m"))))
                    (d/ul {:class "ap-wk-map__key ap-label" :aria-label "Key"}
                          (d/li (d/i {:class "is-this"}) "This walk")
                          (d/li (d/i {:class "is-walked"}) "Walked")
                          (d/li (d/i {:class "is-planned"}) "Planned")
                          (d/li (d/i {:class "is-ap"}) "Armenian Pavilion"))
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
                              (cond playing? "Pause" (< t 1) "Carry on" :else "Play the walk"))
                    (d/input {:type "range" :min 0 :max 1000 :step 1 :value (js/Math.round (* t 1000))
                              :class "ap-wk-player__range" :aria-label "Position along the walk"
                              :disabled (nil? line)
                              :on-change (fn [e] (stop!) (set-at! (/ (js/Number (.. e -target -value)) 1000)))})
                    (d/span {:class "ap-wk-player__clock ap-data"}
                            (str (at-time depart (wm/clock walk t)) " · " (.toFixed (* km t) 1) " of " (.toFixed km 1) " km")))))))

;; ── Sections ────────────────────────────────────────────────────────────

(defnc hero [{:keys [walks]}]
  (let [done (filter #(= :walked (:status %)) walks)
        nxt (some #(when (:next? %) %) walks)]
    (<>
     (d/section {:class "ap-wk-hero"}
                ($ picture {:src (str media hero-photo) :eager? true :class "ap-wk-hero__img" :sizes "(orientation: portrait) 150vh, 100vw"
                            :alt "Six works in red, white and green carried over the wooden bridge at the Arsenale gate"})
                (d/div {:class "ap-wrap ap-wk-hero__body"}
                       (d/p {:class "ap-label m-0"} "Walks · out from Tesa 41 · November 2026")
                       (d/h1 {:class "ap-display-xl m-0"} "Walking the Work Through Venice")
                       (d/p {:class "ap-lede m-0 max-w-[32ch]"}
                            "The studio leaves Tesa 41 with the works strapped to its back, sets them down in a campo, on a fondamenta or before a church, and carries them home another way. In the final week students of the Accademia di Belle Arti carry them, and on 18 November walk them into the Academy.")
                       (d/div {:class "flex flex-wrap gap-2"}
                              (d/a {:class "ap-btn ap-btn--yellow" :href "#walks-map"} "See the walks")
                              (d/a {:class "ap-btn ap-btn--ghost !text-white !border-white" :href "#schedule"} "Walk with us"))))
     (d/section {:class "ap-wk-counts" :aria-label "The walks so far"}
                (d/dl {:class "ap-wrap ap-wk-counts__row"}
                      (d/div (d/dt {:class "ap-label"} "Walks so far") (d/dd (count done)))
                      (d/div (d/dt {:class "ap-label"} "Works carried") (d/dd (reduce + (map :works done))))
                      (d/div (d/dt {:class "ap-label"} "Kilometres under load") (d/dd (.toFixed (reduce + (map :km done)) 1)))
                      (when nxt
                        (d/div {:class "is-next"}
                               (d/dt {:class "ap-label"} (str "Next walk · leaves " (:depart nxt) " · " (:works nxt) " works"))
                               (d/dd (long-date (:date nxt))))))))))

(defnc walk-list [{:keys [walks walk on-pick]}]
  (d/ul {:class "ap-wk-list" :aria-label "The walks"}
        (for [{:keys [id n date title works km minutes status next?] :as w} walks
              :let [on? (= id (:id walk))]]
          (d/li {:key id}
                (d/button {:type "button" :aria-pressed on? :on-click #(on-pick id)
                           :data-status (name status) :data-next (when next? "")}
                          (d/span {:class "ap-wk-list__n"} n)
                          (d/span {:class "ap-wk-list__text"}
                                  (d/span {:class "ap-label"} (str (short-date date) " · " (status-label w)))
                                  (d/span {:class "ap-wk-list__title"} title)
                                  (d/span {:class "ap-caption"} (str works " works · " km " km · " (duration minutes)))))))))

(defnc walk-detail [{:keys [walk]}]
  (let [{:keys [id n date title works depart minutes km wide fresh via note stops status]} walk
        back (at-time depart minutes)
        fs (get films id)
        ps (get photos id)]
    (<>
     (d/section {:class "ap-wrap ap-wk-detail" :aria-labelledby "walk-title"}
                (d/div {:class "ap-wk-detail__head"}
                       (d/div {:class "ap-wk-detail__date"}
                              (d/span {:class "ap-numeral"} (day-of date))
                              (d/span (d/span {:class "ap-label ap-muted"} (str "Walk " n " · " (weekday date)))
                                      (d/span {:class "ap-h2 block"} "November 2026")))
                       (d/h2 {:id "walk-title" :class "ap-h1 m-0"} title)
                       (d/p {:class "ap-wk-tag ap-label m-0" :data-status (name status)} (status-label walk))
                       (d/dl {:class "ap-wk-facts"}
                             (d/div (d/dt {:class "ap-label"} "Leaves Tesa 41") (d/dd {:class "ap-data"} depart))
                             (d/div (d/dt {:class "ap-label"} "Back") (d/dd {:class "ap-data"} (str "≈ " back)))
                             (d/div (d/dt {:class "ap-label"} "Works carried") (d/dd {:class "ap-data"} works))
                             (d/div (d/dt {:class "ap-label"} "Distance · time") (d/dd {:class "ap-data"} (str km " km · " (duration minutes))))
                             (d/div {:class "col-span-2"} (d/dt {:class "ap-label"} "On wide passages")
                                    (d/dd {:class "ap-data"} (str wide "% of the way · " fresh "% on streets no earlier walk took"))))
                       (when (seq via)
                         (d/p {:class "ap-body-s m-0"} (d/span {:class "ap-label ap-muted block mb-2"} "By way of") (str/join " · " via)))
                       (when note (d/p {:class "ap-caption m-0"} (str note "."))))
                (d/ol {:class "ap-wk-itin"}
                      (d/li (d/span {:class "ap-data"} depart) (d/i {:class "is-ap"} "AP")
                            (d/span {:class "ap-wk-itin__name"} "Leave Tesa 41 by the Fondamenta Case Nuove door"))
                      (for [[i {:keys [name t detail]}] (map-indexed vector stops)
                            :let [photo (get-in stop-photos [id i])]]
                        (d/li {:key name}
                              (d/span {:class "ap-data"} (str "≈ " (at-time depart (wm/clock walk t))))
                              (d/i (inc i))
                              (d/span {:class "ap-wk-itin__name"} name
                                      (d/span {:class "ap-caption block"}
                                              (cond detail detail
                                                    (= status :walked) (str works " works set down here")
                                                    :else (str works " works set down for a few minutes"))))
                              (d/span {:class "ap-wk-itin__photo"}
                                      (when photo ($ picture {:src (str media photo) :alt name :sizes "200px"})))))
                      (d/li (d/span {:class "ap-data"} (str "≈ " back)) (d/i {:class "is-ap"} "AP")
                            (d/span {:class "ap-wk-itin__name"} "Home to Tesa 41 by another way"))))
     (when (or (seq fs) (seq ps))
       (d/section {:class "ap-wrap ap-wk-media" :aria-label "From the walk"}
                  (d/div {:class "ap-wk-media__head"}
                         (d/h3 {:class "ap-h2 m-0"} "From the walk")
                         (d/span {:class "ap-label ap-muted"} (str (count fs) " films · " (count ps) " photographs")))
                  (d/div {:class "ap-wk-films"}
                         (for [f fs] ($ loop-film {:key (:id f) :& f})))
                  (d/div {:class "ap-wk-photos"}
                         (for [[i {:keys [path title alt]}] (map-indexed vector ps)]
                           (d/figure {:key path :class "m-0"}
                                     (d/div {:class "ap-wk-photos__frame"}
                                            ($ picture {:src (str media path) :alt alt :sizes "(min-width: 960px) 25vw, 50vw"}))
                                     (d/figcaption {:class "ap-caption"} (str "FIG. " (inc i) " · " title " · Venice, " (day-of date) " November 2026"))))))))))

(defnc schedule [{:keys [walks walk on-pick]}]
  (let [by-date (into {} (map (juxt :date identity) walks))]
    (d/section {:id "schedule" :class "ap-wk-sched" :aria-labelledby "schedule-title"}
               (d/div {:class "ap-wrap ap-wk-sched__wrap"}
                      (d/div {:class "ap-wk-sched__head"}
                             (d/div {:class "flex flex-col gap-3"}
                                    (d/p {:class "ap-label m-0 ap-wk-sched__eyebrow"} "Schedule · November 2026")
                                    (d/h2 {:id "schedule-title" :class "ap-display-l m-0"} "Walk with us"))
                             (d/p {:class "ap-body m-0 max-w-[30em]"}
                                  "Meet at the door of Tesa 41 on the Fondamenta Case Nuove ten minutes before the time. Anyone may walk alongside; the hour inside the Accademia on 18 November is for the Academy’s students and staff. The last walk is on the closing day of the Biennale."))
                      (d/div {:class "ap-wk-days" :role "group" :aria-label "Walk days"}
                             (for [dd (range 5 23)
                                   :let [iso (str "2026-11-" (.padStart (str dd) 2 "0"))
                                         w (by-date iso)]]
                               (d/button {:key dd :type "button" :disabled (nil? w)
                                          :aria-pressed (= (:id w) (:id walk))
                                          :aria-label (if w (str (short-date iso) ": " (:title w)) (str (short-date iso) ": no walk"))
                                          :data-status (when w (name (:status w)))
                                          :on-click #(when w (on-pick (:id w)))}
                                         (d/span {:class "ap-label"} (subs (weekday iso) 0 2))
                                         (d/span {:class "ap-wk-days__d"} dd)
                                         (d/span {:class "ap-caption"} (when w (str (:works w)))))))
                      (d/div {:class "ap-wk-table"}
                             (d/table
                              (d/thead (d/tr {:class "ap-label"}
                                             (d/th "Date") (d/th "Leaves") (d/th "Back ≈") (d/th "Route") (d/th "Works") (d/th {:class "text-right"} "Distance")))
                              (d/tbody
                               (for [{:keys [id date depart minutes title works km] :as w} walks
                                     :when (not= :walked (:status w))]
                                 (d/tr {:key id}
                                       (d/td {:class "ap-data whitespace-nowrap"} (short-date date))
                                       (d/td {:class "ap-data"} depart)
                                       (d/td {:class "ap-data"} (at-time depart minutes))
                                       (d/td (d/a {:href "#walks-map" :on-click #(on-pick id)} title))
                                       (d/td {:class "ap-data"} works)
                                       (d/td {:class "ap-data text-right"} (str km " km")))))))))))

(defnc walked [{:keys [walks on-pick]}]
  (let [done (filter #(= :walked (:status %)) walks)]
    (when (seq done)
      (d/section {:class "ap-wrap ap-sec ap-wk-done" :aria-labelledby "walked-title"}
                 (d/div {:class "flex flex-col gap-3"}
                        (d/p {:class "ap-label ap-muted m-0"} "Walked")
                        (d/h2 {:id "walked-title" :class "ap-display-l m-0"} "The walks so far"))
                 (d/div {:class "ap-wk-done__grid"}
                        (for [{:keys [id n date works km title stops]} (reverse done)
                              :let [f (second (get films id))]]
                          (d/article {:key id :class "ap-wk-done__card"}
                                     (when f ($ loop-film {:& f}))
                                     (d/span {:class "ap-label ap-muted"} (str "Walk " n " · " (short-date date) " · " works " works · " km " km"))
                                     (d/h3 {:class "ap-h2 m-0"} title)
                                     (d/p {:class "ap-body-s m-0"} (str (str/join ", then " (map :name stops)) ", and home by another way."))
                                     (d/a {:class "ap-btn self-start" :href "#walks-map" :on-click #(on-pick id)} "See it on the map"))))))))

;; ── Page ────────────────────────────────────────────────────────────────

(defn- first-pick
  "Today's walk, else the latest walked, else the next."
  [walks]
  (:id (or (some #(when (= :today (:status %)) %) walks)
           (last (filter #(= :walked (:status %)) walks))
           (some #(when (:next? %) %) walks)
           (first walks))))

(defnc walks-view []
  (let [walks (hooks/use-memo :once (wm/with-status))
        [sel set-sel!] (hooks/use-state (first-pick walks))
        [show set-show!] (hooks/use-state :all)
        walk (some #(when (= sel (:id %)) %) walks)
        [ref {near? :in?}] (use-in-view :root-margin "100% 0px")
        routes (use-routes near?)
        shown (filter #(case show :walked (= :walked (:status %)) :coming (not= :walked (:status %)) true) walks)]
    (d/div {:class "ap-wk"}
           ($ hero {:walks walks})
           (d/section {:id "walks-map" :ref ref :class "ap-wrap ap-wk-app" :aria-labelledby "map-title"}
                      (d/div {:class "ap-wk-app__head"}
                             (d/div {:class "flex flex-col gap-3"}
                                    (d/p {:class "ap-label ap-muted m-0"} "The map")
                                    (d/h2 {:id "map-title" :class "ap-display-l m-0"} "Every walk, out and back"))
                             (d/div {:class "ap-wk-filters" :role "group" :aria-label "Show walks"}
                                    (for [[k label] [[:all "All walks"] [:walked "Walked"] [:coming "Coming"]]]
                                      (d/button {:key (name k) :type "button" :class "ap-label" :aria-pressed (= show k)
                                                 :on-click #(set-show! k)} label))))
                      (d/div {:class "ap-wk-app__grid"}
                             ($ walk-map {:walks walks :walk walk :routes routes})
                             ($ walk-list {:walks shown :walk walk :on-pick set-sel!}))
                      (d/p {:class "ap-caption m-0"}
                           "Routes keep to wide passages (rive, fondamente, salizade, rii terà, campi) and find new streets each time, out and back. Times assume 3 km/h carrying the works and a few minutes at each stop. Map data © OpenStreetMap contributors."))
           ($ walk-detail {:key sel :walk walk})
           ($ schedule {:walks walks :walk walk :on-pick set-sel!})
           ($ walked {:walks walks :on-pick set-sel!}))))
