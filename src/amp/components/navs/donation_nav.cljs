(ns amp.components.navs.donation-nav
  (:require ["@heroicons/react/24/outline" :as icons]
            [amp.utils.debug :refer [spy]]
            [amp.hooks.use-hover-animations :refer [use-hover-animations]]
            [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
            [amp.hooks.use-toggle-animations :refer [use-toggle-animations]]
            [amp.hooks.use-window-resize :refer [use-window-size]]
            [amp.utils.window :as win-utils]
            [amp.components.ui.main-button :refer [main-button]]
            [amp.hooks.use-media-query :refer [use-media-query]]
            [amp.lib.defnc :refer [defnc]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))



(defnc donation-nav
  []
  (let [comp-ref (hooks/use-ref "comp-ref")
        is-desktop? (use-media-query :md)
        dimensions (use-window-size)

        [visited? is-active?] (use-scroll-trigger comp-ref :start (fn [] (win-utils/height))
                                                  :end "1000000px"
                                                  :markers? false
                                                  :debug? false)]
    (use-hover-animations comp-ref
                          :over {:opacity 1}
                          :out {:opacity 0.7})

    (use-toggle-animations
     comp-ref
     :on {:y 0}
     :off {:y (- (:height dimensions))}
     :is-on? is-active?
     :initial false)

    (if is-desktop?
      (d/div {:ref comp-ref
              :class "fixed
                      opacity-90
                      z-30
                      text-xl
                      mr-8
                      mt-4
                      top-0
                      right-0"}
             ($ main-button
                {:title "Donate Now"
                 :additional-classes "text-2xl"
                 :on-click #(js/window.open "https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00" "_blank")}))

      (d/div {:ref comp-ref
              :class "fixed 
                          opacity-90
                          z-30
                          text-xl
                      w-full
                          "}
             ($ main-button
                {:title "Donate Now"
                 :additional-classes "text-2xl"
                 :on-click #(js/window.open "https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00" "_blank")})))))



