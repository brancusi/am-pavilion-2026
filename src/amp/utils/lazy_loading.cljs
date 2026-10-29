(ns amp.utils.lazy-loading
  (:require-macros [amp.utils.lazy-loading])
  (:require
   ["react" :as react]
   [helix.core :refer [fnc $]]
   [shadow.lazy :as lazy]))

(defn lazy-component*
  "A React.lazy page component with a `.preload` fn that loads its module.
   Once loaded, the component renders straight away instead of suspending,
   so the section transitioner can load a page while the old one fades out."
  [loadable]
  (let [wrapped (atom nil)
        preload (fn []
                  (-> (lazy/load loadable)
                      (.then
                       (fn [_root-el]
                         ;; Wrap one extra level so React doesn't keep a stale
                         ;; reference and hot-reload works.
                         (or @wrapped
                             (reset! wrapped
                                     #js {:default
                                          (fnc LazyWrapper [props]
                                               ($ @loadable {& props}))}))))))
        component (react/lazy
                   (fn []
                     (if-let [m @wrapped]
                       ;; A thenable that resolves synchronously: React
                       ;; reads it on the spot and never suspends.
                       #js {:then (fn [resolve _] (resolve m))}
                       (preload))))]
    (set! (.-preload component) preload)
    component))
