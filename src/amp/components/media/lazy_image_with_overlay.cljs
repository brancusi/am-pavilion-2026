(ns amp.components.media.lazy-image-with-overlay
  (:require
   [amp.components.elements.lazy-image :refer [lazy-image]]
   [amp.lib.defnc :refer [defnc]]
   [amp.reducers.requires]
   [amp.hooks.use-container-size :refer [use-container-size]]
   [amp.utils.math :refer [normalize-dimensions-v2]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc lazy-image-with-overlay
  [{:keys [img-src aspect-ratio active? fit children]}]

  (let [aspect-ratio (or aspect-ratio 1.77)
        fit (or fit "clip")
        image-container (hooks/use-ref "image-container")
        dimensions (use-container-size image-container)
        normalized-dimensions (normalize-dimensions-v2 dimensions {:increment 10
                                                                   :fitting-aspect-ratio aspect-ratio})]
    (d/div {:class "relative w-full h-full flex justify-center items-center"
            :ref image-container
            :style {#_#_:min-width (str (:width dimensions) "px")
                    #_#_:min-height (str (/ (:width dimensions) aspect-ratio) "px")}}
           ($ lazy-image {:src img-src

                          :w (:width normalized-dimensions)
                          :h (:height normalized-dimensions)
                          :fit fit
                          :transition {:duration 1
                                       :opacity 1}
                          :should-load? active?}
              children))))
