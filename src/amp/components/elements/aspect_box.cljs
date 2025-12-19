(ns amp.components.elements.aspect-box
  (:require
   [amp.lib.defnc :refer [defnc]]
   [helix.dom :as d]))

(defnc aspect-box
  [{:keys [ar children]}]
  (d/div {:style {:aspectRatio ar
                  :width "100%"
                  :position "relative"
                  :overflow "hidden"}}
         (d/div {:style {:position "absolute"
                         :inset 0}}
                children)))