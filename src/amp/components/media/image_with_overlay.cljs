(ns amp.components.media.image-with-overlay
  (:require
   [amp.components.elements.lazy-image :refer [lazy-image]]
   [amp.hooks.use-container-size :refer [use-container-size]]
   [amp.lib.defnc :refer [defnc]]
   [amp.reducers.requires]
   [amp.utils.math :refer [normalize-dimensions]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc image-with-overlay
  [{:keys [img-src children]}]

  (let [image-container (hooks/use-ref "image-container")
        dimensions (use-container-size image-container)
        normalized-dimensions (normalize-dimensions dimensions :width 10)]
    (d/div {:class "relative w-full h-full overflow-hidden"
            :ref image-container}
           (d/div {:class "h-full w-full overflow-hidden"}
                  ($ lazy-image {:src img-src
                                 :w (:width normalized-dimensions)

                                 ;;  Simply force the width on this and allow the height to just flow
                                 #_#_:h (:height normalized-dimensions)
                                 :transition {:duration 0.25
                                              :opacity 1}
                                 :should-load? true}))


           (when children
             children))))
