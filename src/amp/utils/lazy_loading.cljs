(ns amp.utils.lazy-loading
  (:require-macros [amp.utils.lazy-loading])
  (:require
   ["react" :as react]
   [helix.core :refer [fnc $]]
   [shadow.lazy :as lazy]))

(defn lazy-component*
  "A component for code in another module, with a `.preload` fn that loads
   it. Once loaded it renders straight away instead of suspending, so the
   section transitioner can load a page while the old one fades out.

   It carries its own Suspense boundary: while its module loads it shows
   the `:fallback` prop (give it the same footprint, so nothing shifts) and
   never suspends the page around it, which would blank the page and lose
   the reader's scroll position."
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
                       (preload))))
        boundary (fnc LazyBoundary [props]
                      ($ react/Suspense {:fallback (:fallback props)}
                         ($ component {& (dissoc props :fallback)})))]
    (set! (.-preload boundary) preload)
    boundary))
