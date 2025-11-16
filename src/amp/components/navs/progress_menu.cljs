(ns amp.components.navs.progress-menu
  (:require
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [amp.utils.for-indexed :refer [for-indexed]]
   [amp.hooks.use-scroll-progress :refer [use-scroll-progress]]
   [helix.dom :as d]))

(defnc progress-menu
  [{:keys [total-sections]}]
  (let [calculated-index (use-scroll-progress total-sections {:throttle-interval 10})
        current-active-index (min (- total-sections 1) calculated-index)]
    (d/div {:class ""}

           (for-indexed [_ idx (range total-sections)]
                        (d/div {:key idx
                                :class (str "w-2 h-2 bg-white rounded-full my-2"
                                            (when (= idx current-active-index)
                                              " opacity-100")
                                            (when (not= idx current-active-index)
                                              " opacity-50"))})))))
