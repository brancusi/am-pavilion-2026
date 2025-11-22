(ns amp.views.hero-image-view
  (:require
   [amp.components.elements.lazy-image :refer [lazy-image]]
   [amp.hooks.use-window-resize :refer [use-window-size]]
   [amp.lib.defnc :refer [defnc]]
   [amp.reducers.requires]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc hero-image-view
  [{:keys [img-src caption children]}]
  (let [dimensions (use-window-size)]
    (d/div {:class "relative w-full h-screen overflow-hidden"}
           (d/div {:class "h-full w-full overflow-hidden "}
                  ($ lazy-image {:src img-src
                                 :w (:width dimensions)
                                 :h (:height dimensions)
                                 :transition {:duration 0.25
                                              :opacity 1}
                                 :should-load? true}))

           (d/div {:class "relative origin-bottom-right"
                   :style {:transform "rotate(-90deg) translateX(100%)"}}
                  (d/div {:class ""}
                         (d/p {:class "absolute
                                       bottom-0
                                       font-fira-code
                                       bg-white/60
                                       text-sm
                                       p-1
                                       px-4
                                       mb-4
                                       text-slate-700
                                       whitespace-nowrap"}
                              children))))))