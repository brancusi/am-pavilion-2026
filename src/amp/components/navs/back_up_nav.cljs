(ns amp.components.navs.back-up-nav
  (:require [amp.hooks.use-hover-animations :refer [use-hover-animations]]
            [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
            [amp.hooks.use-scroll-to :refer [use-scroll-to-top]]
            [amp.hooks.use-toggle-animations :refer [use-toggle-animations]]
            [amp.utils.window :as win-utils]
            [amp.lib.defnc :refer [defnc]]
            [amp.components.icons :refer [ArrowTurnRightUp]]
            [helix.core :refer [$]]
            [helix.dom :as d]

            [helix.hooks :as hooks]))

(defnc back-up-nav
  []
  (let [container-ref (hooks/use-ref "container-ref")
        button-ref (hooks/use-ref "button-ref")
        scroll-to-top (use-scroll-to-top {:duration 1})
        [visited? is-active?] (use-scroll-trigger container-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8)))
                                                  :end "1000000px"
                                                  :markers? false
                                                  :debug? false)]

    (use-hover-animations button-ref
                          :over {:opacity 1}
                          :out {:opacity 0.7})

    (use-toggle-animations
     {:target container-ref

      :on-to {:y 0
              :opacity 1}
      :off-to {:y -150
               :opacity 0.25}
      :is-on? is-active?})

    (d/div {:ref container-ref
            :class "fixed right-0 cursor-pointer z-30"}
           (d/div {:ref button-ref
                   :class "flex 
                           w-full
                           h-full
                           bg-pink-300
                           opacity-90
                           font-bold
                           text-xl
                           px-4
                           white-space-no-wrap"
                   :on-click scroll-to-top}
                  "To Top "
                  ($ ArrowTurnRightUp {})))))


