(ns amp.ui.temporary-closure
  "Temporary closure notices (military symposium at the Arsenale, October 4–8,
   2026). Both the homepage banner and the Visit page notice stop rendering by
   themselves at the start of October 9 in Venice time, so nothing has to be
   taken down by hand. Safe to delete this namespace and its two call sites
   after the reopening."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

;; Midnight at the start of October 9, 2026, Europe/Rome (CEST, UTC+2).
;; An absolute instant, so the visitor's own timezone doesn't matter.
(def reopens-at-ms (js/Date.parse "2026-10-09T00:00:00+02:00"))

(defn closed-at?
  "True while `now-ms` is before the reopening instant."
  [now-ms]
  (< now-ms reopens-at-ms))

;; Re-check at least this often so a sleeping device or a changed clock is
;; caught soon after it wakes, even if no visibility event fires.
(def ^:private max-wait-ms 60000)

(defn use-closed?
  "True until the reopening instant, then false. Re-evaluates on a timer aimed
   at the cutoff and whenever the page is shown or focused again, since
   background tabs and sleeping devices suspend timers."
  []
  (let [[closed? set-closed!] (hooks/use-state #(closed-at? (js/Date.now)))]
    (hooks/use-effect
     :once
     (let [timer (atom nil)
           check! (fn check! []
                    (js/clearTimeout @timer)
                    (let [remaining (- reopens-at-ms (js/Date.now))]
                      (set-closed! (pos? remaining))
                      (when (pos? remaining)
                        (reset! timer (js/setTimeout check! (min remaining max-wait-ms))))))
           events ["focus" "pageshow"]]
       (check!)
       (doseq [e events] (.addEventListener js/window e check!))
       (.addEventListener js/document "visibilitychange" check!)
       (fn []
         (js/clearTimeout @timer)
         (doseq [e events] (.removeEventListener js/window e check!))
         (.removeEventListener js/document "visibilitychange" check!))))
    closed?))

(def ^:private heading
  (s/cx s/font-display s/weight-bold s/uppercase- s/tracking-wider s/text-accent "leading-tight"))

;; ── Homepage banner ──────────────────────────────────────────────────────

(defnc banner-bar [_props]
  (let [ref (hooks/use-ref nil)]
    ;; Reserve room at the page bottom so the banner never hides the footer;
    ;; unmounting (including at the cutoff) gives the space back.
    (hooks/use-effect
     :once
     (let [el (.-current ref)
           body-style (.-style js/document.body)
           pad! #(set! (.-paddingBottom body-style) (str (.-offsetHeight el) "px"))
           ro (js/ResizeObserver. pad!)]
       (pad!)
       (.observe ro el)
       (fn []
         (.disconnect ro)
         (set! (.-paddingBottom body-style) ""))))
    (d/aside {:ref ref
              :aria-labelledby "closure-banner-heading"
              :class (s/cx "fixed bottom-0 left-0 right-0 z-30"
                           "border-t-4" s/border-accent s/bg-glass)}
             (d/div {:class "max-w-5xl mx-auto px-4 md:px-8 py-3 md:py-4 text-left md:text-center"}
                    (d/h2 {:id "closure-banner-heading"
                           :class (s/cx heading "text-xl md:text-3xl mb-1")}
                          "Temporarily closed")
                    (d/p {:class (s/cx s/font-body s/text-sm "md:text-base" s/text-primary "leading-snug")}
                         "The pavilion is closed from October 4 because of the military symposium at the Arsenale and "
                         (d/span {:class s/em-strong} "reopens on October 9, 2026")
                         ". We apologize for the inconvenience. "
                         (d/a {:href "/visit"
                               :class (s/cx s/text-accent "underline underline-offset-4 whitespace-nowrap")}
                              "Visitor info"))))))

(defnc closure-banner
  "Sticky bottom banner for the homepage."
  [_props]
  (when (use-closed?)
    ($ banner-bar)))

;; ── Visit page notice ────────────────────────────────────────────────────

(defnc closure-notice
  "Callout at the top of the Visit page."
  [_props]
  (when (use-closed?)
    (d/aside {:class "px-4 pb-8" :aria-labelledby "closure-notice-heading"}
             (d/div {:class (s/cx "border-l-4 pl-4 md:pl-6 py-3" s/border-accent s/bg-surface-alt)}
                    (d/h2 {:id "closure-notice-heading"
                           :class (s/cx heading "text-2xl md:text-4xl mb-2")}
                          "Temporarily closed")
                    (d/p {:class (s/cx s/body-lg "text-left")}
                         "The pavilion is closed from October 4 because of the military symposium at the Arsenale. "
                         (d/span {:class s/em-strong} "We reopen on October 9, 2026."))))))
