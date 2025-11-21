(ns amp.components.navs.logo-nav
  (:require ["@heroicons/react/24/outline" :as icons]
            [amp.hooks.use-hover-animations :refer [use-hover-animations]]
            [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
            [amp.hooks.use-toggle-animations :refer [use-toggle-animations]]
            [amp.utils.window :as win-utils]
            [amp.lib.defnc :refer [defnc]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))



(defnc logo-nav
  []
  (let [comp-ref (hooks/use-ref "comp-ref")
        [visited? is-active?] (use-scroll-trigger comp-ref :start (fn [] (- (win-utils/height) (/ (win-utils/height) 8)))
                                                  :end "1000000px"
                                                  :markers? false
                                                  :debug? false)]
    (use-hover-animations comp-ref
                          :over {:opacity 1}
                          :out {:opacity 0.7})

    (use-toggle-animations
     comp-ref
     :on {:y 0}
     :off {:y -250}
     :is-on? is-active?
     :initial false)

    (d/div {:ref comp-ref
            :class "fixed 
                    cursor-pointer
                    opacity-90
                    z-30
                    text-xl
                    ml-4
                    mt-4
                    w-1/5
                    lg:w-32"
            :on-click #(js/window.open "https://www.labiennale.org/en/art/2026" "_blank")}
           (d/img {:src "images/graphics/biennale_logo.png"}))))



