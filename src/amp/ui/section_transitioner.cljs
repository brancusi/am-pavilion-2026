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

(defn- show!
  "Fade the new page in, or, while a part of it is still loading (Suspense
   renders nothing yet), once it's there."
  [^js el]
  (let [fade-in! #(.fromTo gsap el #js {:opacity 0}
                           #js {:opacity 1 :duration in-s :ease "power2.out" :overwrite true
                                :clearProps "opacity"})]
    (if (pos? (.-childElementCount el))
      (fade-in!)
      (let [mo (js/MutationObserver.
                (fn [_ ^js mo]
                  (when (pos? (.-childElementCount el))
                    (.disconnect mo)
                    (flush-scroll!)
                    (fade-in!))))]
        (.set gsap el #js {:opacity 0})
        (.observe mo el #js {:childList true})))))

(defnc section-transitioner
  []
  (let [[state _] (use-main-state)
        route (:current-route state)
        target (target-of route)
        ;; The page on screen: target + a counter that changes on each swap.
        [shown set-shown!] (hooks/use-state nil)
        shown-ref (hooks/use-ref nil)
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
         (set-shown! (assoc target :n 0 :fade? false))

         ;; Same page (a hash change, a blog post to another, a Portage
         ;; sheet): cancel any swap under way and let it handle the scroll.
         (= (:id target) (:id cur))
         (do (bump! token)
             (when (and el (< (js/parseFloat (.. el -style -opacity)) 1))
               (.to gsap el #js {:opacity 1 :duration in-s :ease "power2.out" :overwrite true}))
             (when-not (:inner-swap target) (flush-scroll!)))

         :else
         (let [t (bump! token)
               fade-out (js/Promise.
                         (fn [resolve]
                           (if (reduced-motion?)
                             (resolve nil)
                             (.to gsap el #js {:opacity 0 :duration out-s :ease "power1.in"
                                               :overwrite true :onComplete resolve}))))]
           (-> (js/Promise.all #js [fade-out (preload (:view target))])
               (.then #(when (= t @token)
                         (set-shown! (assoc target :n (inc (:n cur)) :fade? true)))))))
       js/undefined))

    ;; The new page is in the DOM: scroll, then fade it in.
    (hooks/use-layout-effect
     [(:n shown)]
     (when shown
       (flush-scroll!)
       (if-let [el (and (:fade? shown) (not (reduced-motion?)) @wrapper)]
         (show! el)
         (some-> @wrapper (#(.set gsap % #js {:clearProps "opacity"})))))
     js/undefined)

    ;; Clipped, so the marker two screens down never makes a short page
    ;; scrollable (clip, unlike hidden, keeps the header sticky).
    (d/div {:class "relative overflow-clip"}
     (d/div {:ref top-ref :class "absolute top-0 left-0 w-px h-px pointer-events-none" :aria-hidden true})
     (d/div {:ref deep-ref :class "absolute top-0 left-0 w-px h-[200vh] pointer-events-none" :aria-hidden true})
     ($ menu {:scrolled? (not top-in?)})
     ;; At least a screen tall, so the footer never rises into view while a
     ;; page is still loading its content.
     (d/div {:ref wrapper :class "w-full overflow-x-clip min-h-[100svh]"}
            (when-let [view (:view shown)]
              ;; A boundary of its own per page: while a part of the new page
              ;; is still loading, React shows nothing, never the old page.
              ($ react/Suspense {:key (:n shown) :fallback nil}
                 ($ view))))
     (when shown
       (d/div {:ref footer-ref}
              ($ site-footer)))
     ($ back-up-nav {:active? (and deep-above? (not footer-in?))}))))
