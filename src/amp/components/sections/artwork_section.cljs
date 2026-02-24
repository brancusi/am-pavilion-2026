(ns amp.components.sections.artwork-section
  "Artwork carousel section — wraps `lazy-image-gallery` with an
   intersection observer for visibility-based autoplay.  Slides include
   both static images and an interactive Three.js mockup."
  (:require [amp.components.media.lazy-image-gallery :refer [lazy-image-gallery]]
            [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
            [amp.lib.defnc :refer [defnc]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(defnc artwork-section []
  (let [gallery-ref (hooks/use-ref nil)
        [_visited? is-visible?] (use-intersection-observer gallery-ref :threshold 0.2)]
    (d/div {:ref   gallery-ref
            :class "my-4 relative"}
           ($ lazy-image-gallery
              {:enabled? is-visible?
               :slides   [{:type        :image
                           :img-src     "https://atd-722658831.imgix.net/blue_yellow/top_view.jpg"
                           :aspect-ratio "16/9"
                           :caption     "BLUE YELLOW BLUE YELLOW"
                           :credit      "Render 2026"}
                          {:type        :image
                           :img-src     "https://atd-722658831.imgix.net/big_red_walkway/5.jpg"
                           :aspect-ratio "16/9"
                           :caption     "BIG RED AT ARSENALE"
                           :credit      "Render 2026"}
                          {:type        :threejs
                           :aspect-ratio "16/9"
                           :caption     "BIG RED — INTERACTIVE 3D"
                           :credit      "Zadik Zadikian 2026"
                           :camera      {:position [250 250 250]
                                         :target   [10 60 0]}
                           :scene-data  {:lighting [[:ambient-light {:intensity 0.7}]
                                                    [:directional-light {:cast-shadow true
                                                                         :position [-100 120 60]
                                                                         :intensity 1.5}]]
                                         :data [{:bounds [144 36 72]
                                                 :layers [[{:align :tr :color "#1ebe3a" :dims [9 6 9]}
                                                           {:align :tl :color "#0b080c" :dims [24 6 12]}
                                                           {:align :br :color "#0b080c" :dims [36 6 12]}
                                                           {:align :bl :color "#ec9c3b" :dims [6 6 12]}]
                                                          [{:dims [144 36 72] :color "#ef3548"}]
                                                          [{:dims [36 9 36] :align :tr :color "#0070df"}]
                                                          [{:dims [18 9 18] :align :tr :color "#f1afed"}]
                                                          [{:dims [9 4.5 9] :align :tr :color "#0b080c"}]
                                                          [{:dims [4.5 9 4.5] :align :tr :color "#ec9c3b"}]]}]}}
                          {:type        :image
                           :img-src     "https://atd-722658831.imgix.net/artwork/1.jpeg"
                           :aspect-ratio "16/9"
                           :caption     "Leaning Red"
                           :credit      "Render 2026"}
                          {:type        :image
                           :img-src     "https://atd-722658831.imgix.net/big_red/master.jpg"
                           :aspect-ratio "16/9"
                           :caption     "THE BIG RED"
                           :credit      "Render 2026"}
                          {:type        :image
                           :img-src     "https://atd-722658831.imgix.net/big_red/corner_low.jpg"
                           :aspect-ratio "16/9"
                           :caption     "THE BIG RED"
                           :credit      "Render 2026"}]}))))
