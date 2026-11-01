(ns amp.ui.section-transitioner
  (:require [amp.hooks.use-in-view :refer [use-in-view]]
            [amp.lib.defnc :refer [defnc]]
            [amp.nav.back-up :refer [back-up-nav]]
            [amp.nav.menu :refer [menu]]
            [amp.services.router :refer [flush-scroll!]]
            [amp.state.provider :refer [use-main-state]]
            [amp.ui.footer :refer [site-footer]]
            ["gsap" :refer [gsap]]
            ["react" :as react]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

;; ---------------------------------------------------------------------------
;; Section transitions: one page on screen at a time. On a route change the
;; page fades out quickly while the next page's module loads; then the new
;; page mounts, the held scroll runs (top, #anchor or back/forward position)
;; and it fades in. Nothing overlaps and the old page never jumps.
;;
;; Routes with the same :group (default: the route name) are one page here.
;; A group whose route data has :inner-swap swaps its own content (Portage).
;; ---------------------------------------------------------------------------

(def ^:private out-s 0.14)
(def ^:private in-s 0.24)

(defn- reduced-motion? []
  (.-matches (js/matchMedia "(prefers-reduced-motion: reduce)")))

(defn- target-of [route]
  (let [{:keys [name view group inner-swap]} (:data route)]
    (when (keyword? name)
      {:id (or group name) :view view :inner-swap inner-swap})))

(defn- preload [view]
  (if-let [f (some-> view .-preload)]
    (.catch (f) (fn [_] nil))
    (js/Promise.resolve nil)))

(defn- bump!
  "Next value of a counter ref; a later navigation cancels an earlier swap."
  [ref]
  (set! (.-current ref) (inc (.-current ref))))

(defn- bucket [] (js/Math.round (/ (.-innerWidth js/window) 40)))

(defn- height-key [path] (str "ap:h:" path ":" (bucket)))

(defn- remembered-height
  "The height this page had last time at about this width, if any."
  [path]
  (try (some-> (.getItem js/localStorage (height-key path)) js/parseInt)
       (catch :default _ nil)))

(defn- content-height
  "How tall the page's own content is, apart from the wrapper's minimum."
  [^js el]
  (if-let [c (.-lastElementChild el)]
    (js/Math.round (- (.. c getBoundingClientRect -bottom) (.. el getBoundingClientRect -top)))
    0))

(defn- remember-height! [path ^js el]
  (let [h (content-height el)]
    (when (and path (pos? h))
      (try (.setItem js/localStorage (height-key path) h) (catch :default _ nil)))))

(defn- when-filled
  "Run `f` once the page has content (Suspense renders nothing while its
   module loads) and the fonts it asked for are in, at most `cap` ms later."
  [^js el live? f]
  (let [fonts! (fn []
                 ;; Lay it out first, so its fonts start loading.
                 (.-offsetHeight el)
                 (-> (js/Promise.race
                      #js [(if-let [fs (.-fonts js/document)] (.-ready fs) (js/Promise.resolve nil))
                           (js/Promise. (fn [r] (js/setTimeout r 1000)))])
                     (.then #(when (live?) (f)))))]
    (if (pos? (.-childElementCount el))
      (fonts!)
      (let [mo (js/MutationObserver.
                (fn [_ ^js mo]
                  (when (pos? (.-childElementCount el))
                    (.disconnect mo)
                    (if (live?) (do (flush-scroll!) (fonts!)) nil))))]
        (.observe mo el #js {:childList true})))))

(defn- reveal!
  "Show the new page: it has been held, invisible, at the height it had last
   time. Once it is filled it comes in from a slight blur; once its height
   stops changing the hold is let go and the footer fades in below it."
  [^js el live? on-settled]
  (when-filled
   el live?
   (fn []
     (.setAttribute el "data-shown" "")
     (if (reduced-motion?)
       (.set gsap el #js {:clearProps "opacity,filter"})
       (.fromTo gsap el #js {:opacity 0 :filter "blur(6px)"}
                #js {:opacity 1 :filter "blur(0px)" :duration in-s :ease "power2.out" :overwrite true
                     :clearProps "opacity,filter"}))
     ;; Settled: the same height for a dozen frames, or three seconds on.
     (let [last-h (atom -1) same (atom 0) frames (atom 0)]
       ((fn watch []
          (when (live?)
            (let [h (content-height el)]
              (if (= h @last-h) (swap! same inc) (do (reset! same 0) (reset! last-h h)))
              (if (or (>= @same 12) (>= (swap! frames inc) 180))
                (do (set! (.. el -style -minHeight) "")
                    (.setAttribute el "data-settled" "")
                    (on-settled))
                (js/requestAnimationFrame watch))))))))))

(defnc section-transitioner
  []
  (let [[state _] (use-main-state)
        route (:current-route state)
        target (target-of route)
        ;; The page on screen: target + a counter that changes on each swap.
        [shown set-shown!] (hooks/use-state nil)
        shown-ref (hooks/use-ref nil)
        settled-ref (hooks/use-ref nil)
        wrapper (hooks/use-ref nil)
        token (hooks/use-ref 0)
        ;; Where the reader is, from IntersectionObserver: off the top of the
        ;; page, two screens down, and whether the footer is on screen.
        [top-ref {top-in? :in?}] (use-in-view)
        [deep-ref {deep-above? :above?}] (use-in-view)
        [footer-ref {footer-in? :in?}] (use-in-view)]
    (set! (.-current shown-ref) shown)

    (hooks/use-effect
     [route]
     (let [cur @shown-ref
           el @wrapper]
       (cond
         (nil? target) nil

         ;; First page: no fade.
         (nil? cur)
         (set-shown! (assoc target :n 0 :path (.. js/location -pathname)))

         ;; Same page (a hash change, a blog post to another, a Portage
         ;; sheet): cancel any swap under way and let it handle the scroll.
         (= (:id target) (:id cur))
         (do (bump! token)
             (when (and el (< (js/parseFloat (.. el -style -opacity)) 1))
               (.to gsap el #js {:opacity 1 :duration in-s :ease "power2.out" :overwrite true}))
             (when (and el (= @settled-ref (:n cur))) (.setAttribute el "data-settled" ""))
             (when-not (:inner-swap target) (flush-scroll!)))

         :else
         (let [t (bump! token)
               _ (when el
                   (remember-height! (:path cur) el)
                   ;; The footer goes with the old page.
                   (.removeAttribute el "data-settled"))
               fade-out (js/Promise.
                         (fn [resolve]
                           (if (reduced-motion?)
                             (resolve nil)
                             (.to gsap el #js {:opacity 0 :duration out-s :ease "power1.in"
                                               :overwrite true :onComplete resolve}))))]
           (-> (js/Promise.all #js [fade-out (preload (:view target))])
               (.then #(when (= t @token)
                         (set-shown! (assoc target :n (inc (:n cur)) :path (.. js/location -pathname))))))))
       js/undefined))

    ;; The new page is in the DOM: hold its expected height, scroll, then
    ;; bring it in once it's filled.
    (hooks/use-layout-effect
     [(:n shown)]
     (when-let [^js el (and shown @wrapper)]
       (let [n (:n shown)
             live? #(= n (:n @shown-ref))]
         (.removeAttribute el "data-shown")
         (.removeAttribute el "data-settled")
         (set! (.. el -style -minHeight)
               (if-let [h (remembered-height (:path shown))] (str h "px") ""))
         (flush-scroll!)
         (reveal! el live? (fn []
                             (set! (.-current settled-ref) n)
                             (remember-height! (:path shown) el)))))
     js/undefined)

    ;; Clipped, so the marker two screens down never makes a short page
    ;; scrollable (clip, unlike hidden, keeps the header sticky).
    (d/div {:class "relative overflow-clip"}
     (d/div {:ref top-ref :class "absolute top-0 left-0 w-px h-px pointer-events-none" :aria-hidden true})
     (d/div {:ref deep-ref :class "absolute top-0 left-0 w-px h-[200vh] pointer-events-none" :aria-hidden true})
     ($ menu {:scrolled? (not top-in?)})
     ;; At least a screen tall, and while a page fills, as tall as it was
     ;; last time; the footer stays hidden until it has settled.
     (d/div {:ref wrapper :class "ap-stage w-full overflow-x-clip min-h-[100svh]"}
            (when-let [view (:view shown)]
              ;; A boundary of its own per page: while a part of the new page
              ;; is still loading, React shows nothing, never the old page.
              ($ react/Suspense {:key (:n shown) :fallback nil}
                 ($ view))))
     (when shown
       (d/div {:ref footer-ref :class "ap-foot"}
              ($ site-footer)))
     ($ back-up-nav {:active? (and deep-above? (not footer-in?))}))))
