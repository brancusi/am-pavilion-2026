(ns amp.ui.lazy-map
  "Drop-in replacement for `amp.ui.map/mapbox-map` that keeps Mapbox GL
   (~1 MB) out of the main bundle. The real map lives in the `:map` module
   and is only fetched once the placeholder comes within a screen of the
   viewport. Props are passed straight through."
  (:require ["react" :as react]
            [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
            [amp.lib.defnc :refer [defnc]]
            [amp.utils.lazy-loading :refer-macros [lazy-component]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(def ^:private MapboxMap (lazy-component amp.ui.map/mapbox-map))

(defnc map-placeholder
  "Same footprint as the real map container so nothing shifts when it swaps in."
  [{:keys [class]}]
  (d/div {:class (str "relative w-full h-[70vh] overflow-hidden shadow-lg "
                      "bg-slate-100 dark:bg-slate-800 " class)}))

(defnc mapbox-map
  [{:keys [class] :as props}]
  (let [ref (hooks/use-ref nil)
        [visited? _] (use-intersection-observer ref
                                                :threshold 0
                                                :root-margin "100% 0px")]
    (if visited?
      ($ react/Suspense {:fallback ($ map-placeholder {:class class})}
         ($ MapboxMap {& props}))
      (d/div {:ref ref}
             ($ map-placeholder {:class class})))))
