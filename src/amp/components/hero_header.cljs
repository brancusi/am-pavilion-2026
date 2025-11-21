(ns amp.components.hero-header
  (:require
   [amp.components.fragments.about-me :refer [about-event]]
   [amp.components.sections.quote-section :refer [quote-section]]
   [amp.components.sections.video-section :refer [video-section]]
   [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
   [amp.components.ui.lower-panel-cta :refer [lower-panel-cta]]
   [amp.hooks.use-scroll-to :refer [use-scroll-to]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc hero-header
  []
  (let [outer-ctx (hooks/use-ref "outer-ctx")
        {:keys [scroll-to-id]} (use-scroll-to)
        [visited? is-active?] (use-scroll-trigger outer-ctx {:end "bottom"})]

    (d/div {:id "hero"
            :ref outer-ctx
            :class "relative
                    h-screen
                    w-screen
                    overflow-hidden"}
           (d/div {:class "h-full
                           w-full
                           relative 
                           flex items-center
                           justify-items-center justify-center"}
                  (d/div {:class "z-10 absolute w-full h-full"}
                         ($ video-section {:playback-id "Izp5007Abkc00t4Ubns7pAiqq2zG7JIp01tvAoaVOny7O00"}))
                  (d/div {:class "z-20 absolute w-full h-full"}
                         (d/div {:class "w-full h-full absolute pink-grad opacity-30"})
                         (d/div {:class "flex 
                                         flex-col
                                         w-1/2
                                         h-full
                                         items-center
                                         justify-center
                                         mx-auto
                                         px-4"}
                                (d/div
                                 {:class "
                                          
                                                                      font-medium
                                                                      font-fira-code
                                                                      flex
                                                                      items-center
                                                                      justify-center"}
                                 ($ quote-section {:section-id "main-quote"
                                                   :from {:opacity 0
                                                          :duration 0.5
                                                          :ease "expo.inOut",
                                                          :stagger 0.02}}
                                    ($ about-event)))
                                ($ lower-panel-cta {:cta-title "Learn More"
                                                    :is-visible? visited?
                                                    :on-click (fn [] (scroll-to-id "about-work"))})))))))