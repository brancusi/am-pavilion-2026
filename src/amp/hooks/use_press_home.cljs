(ns amp.hooks.use-press-home
  "The home page's images from the press set (works gallery and On the
   bench), kept in step with Caption Genius: the build's copy
   (amp.data.press-home) at first, then the live /data/press/home.json, which
   a press Sync publishes without a new build. Fetched once per visit, when
   the first section that uses it comes near."
  (:require [amp.data.press-home :as press-home]
            [helix.hooks :as hooks]))

(def ^:private url "/data/press/home.json")

(defonce ^:private live (atom nil))   ; the fetch, a promise of the list (or nil)

(defn- fetch! []
  (or @live
      (reset! live
              (-> (js/fetch url #js {:cache "no-cache"})
                  (.then #(when (.-ok %) (.json %)))
                  (.then #(when % (js->clj % :keywordize-keys true)))
                  (.catch (constantly nil))))))

(defn use-press-home
  "The list, by `home` (\"works\" or \"bench\"). `near?`: the section is about
   to be on screen; the live list is fetched then and replaces the build's
   copy if it differs."
  [near?]
  (let [[images set-images!] (hooks/use-state press-home/images)]
    (hooks/use-effect
     [near?]
     (when near?
       (let [on? (volatile! true)]
         (.then (fetch!) #(when (and @on? (seq %) (not= % images)) (set-images! (vec %))))
         #(vreset! on? false))))
    images))

(defn of [images home]
  (filterv #(= (:home %) home) images))
