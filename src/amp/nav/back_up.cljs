(ns amp.nav.back-up
  "Back-to-top button (design system: BackToTop). Fixed bottom right on every
   page; shown once the reader is two screens down and hidden again while the
   footer is on screen, so it never sits over the legal line."
  (:require [amp.hooks.use-scroll-to :refer [use-scroll-to-top]]
            [amp.lib.defnc :refer [defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(defn- show? []
  (let [y (.-scrollY js/window)
        h (.-innerHeight js/window)
        footer-top (some-> (.querySelector js/document ".ap-footer")
                           (.getBoundingClientRect) (.-top))]
    (and (> y (* 2 h))
         (or (nil? footer-top) (> footer-top h)))))

(defnc back-up-nav
  []
  (let [scroll-to-top (use-scroll-to-top {:duration 1})
        [active? set-active!] (hooks/use-state false)]
    (hooks/use-effect
     :once
     (let [update! #(set-active! (show?))]
       (.addEventListener js/window "scroll" update! #js {:passive true})
       (.addEventListener js/window "resize" update!)
       (update!)
       (fn []
         (.removeEventListener js/window "scroll" update!)
         (.removeEventListener js/window "resize" update!))))
    (d/button {:class "ap-totop"
               :data-hidden (when-not active? "")
               :aria-hidden (not active?)
               :aria-label "Back to top"
               :tab-index (if active? 0 -1)
               :on-click scroll-to-top}
              (d/svg {:viewBox "0 0 16 16" :fill "none" :stroke "currentColor"
                      :stroke-width 1.6 :aria-hidden true}
                     (d/path {:d "M8 13V3M3.5 7.5L8 3l4.5 4.5"}))
              (d/span {:class "ap-totop__label"} "Top"))))
