(ns amp.components.writing-card
  (:require [amp.api.cms]
            [amp.api.cms :refer [get-gallery-images!] :as cms]
            [amp.components.elements.rotating-lazy-image-gallery :refer [rotating-lazy-image-gallery]]
            [amp.components.sections.quote-section :refer [quote-section]]
            [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
            [amp.lib.defnc :refer [defnc]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(defnc writing-card
  [{:keys [children]}]
  (let [outer-ctx (hooks/use-ref "outer-ctx")]

    (d/div {:id "hero"
            :ref outer-ctx
            :class "absolute
                    pointer-events-none
                    h-screen
                    w-screen
                    overflow-hidden"}
           (d/div {:class "h-full
                           w-full
                           relative 
                           flex items-center
                           justify-items-center justify-center"}
                  (d/div {:class "z-20 absolute w-full h-full"}
                         (d/div {:class "w-full h-full absolute opacity-30"})
                         ($ quote-section {:section-id "main-quote"
                                           :from {:opacity 0
                                                  :duration 0.5
                                                  :ease "expo.inOut",
                                                  :stagger 0.02}}
                            children))))))