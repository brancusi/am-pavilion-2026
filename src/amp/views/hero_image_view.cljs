(ns amp.views.hero-image-view
  (:require
   [amp.components.elements.lazy-image :refer [lazy-image]]
   [amp.hooks.use-window-resize :refer [use-window-size]]
   [amp.lib.defnc :refer [defnc]]
   [amp.reducers.requires]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc hero-image-view
  [{:keys [img-src caption]}]
  (let [dimensions (use-window-size)]
    (d/div {:class "h-screen w-screen overflow-hidden"}
           ($ lazy-image {:src img-src
                          :w (:width dimensions)
                          :h (:height dimensions)
                          :transition {:duration 0.25
                                       :opacity 1}
                          :should-load? true}))))