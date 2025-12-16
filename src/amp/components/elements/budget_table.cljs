(ns amp.components.elements.budget-table
  (:require
   ["@heroicons/react/24/outline" :refer [ChevronRightIcon]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defn format-currency [amount]
  (str "€" (.toLocaleString amount "en-US")))

(defn calculate-section-total [details]
  (reduce + (map :amount details)))

(defnc total-section
  [{:keys [cost-data]}]
  (let [grand-total (reduce + (map #(calculate-section-total (:details %)) cost-data))]
    (d/li {:class "bg-slate-200 text-slate-900 flex justify-between items-center px-4 py-4 mt-4"}
          (d/div {:class "w-6/12 "}
                 (d/h3 {:class "font-semibold text-2xl"}
                       "BUDGET"))
          (d/div {:class "w-1/12 "})
          (d/div {:class "w-4/12 flex justify-end items-center space-x-4 "}
                 (d/span {:class "font-medium "}
                         (format-currency grand-total)))
          (d/div {:class "w-1/12"}))))

(defnc detail-line-item
  [{:keys [idx detail]}]
  (let [is-odd-detail? (odd? idx)]
    (d/li {:key (:title detail)
           :class (str "px-4 py-2 flex justify-between items-center "
                       (if is-odd-detail? "bg-slate-700/50" ""))}
          (d/span (:title detail))
          (d/span {:class "text-slate-300 font-medium"}
                  (format-currency (:amount detail))))))

(defnc section-line-item
  [{:keys [idx item set-expanded-items expanded-items]}]
  (let [item-id (str "item-" idx)
        section-total (calculate-section-total (:details item))
        is-odd (odd? idx)]
    (d/li {:key item-id
           :class (str "overflow-hidden " (if is-odd "" "bg-slate-800"))}
          (d/div {:class "flex justify-between items-center px-4 py-4 cursor-pointer transition-colors"
                  :on-click #(set-expanded-items
                              (fn [prev]
                                (if (prev item-id)
                                  (disj prev item-id)
                                  (conj prev item-id))))}
                 (d/div {:class "w-6/12 "}
                        (d/h3 {:class "font-semibold text-2xl"}
                              (:title item)))
                 (d/div {:class "w-1/12 "})
                 (d/div {:class "w-4/12 flex justify-end items-center "}
                        (d/span {:class "font-medium"}
                                (format-currency section-total)))
                 (d/div {:class "w-1/12 flex justify-end items-center "}
                        (d/div {:class (str "w-5 h-5 transition-transform "
                                            (when (expanded-items item-id) "rotate-90"))}
                               ($ ChevronRightIcon)))
                 (when (expanded-items item-id)
                   (d/div {:class "text-base bg-slate-900"}
                          (d/ul {:class "pt-2"}
                                (map-indexed (fn [idx detail]
                                               ($ detail-line-item
                                                  {:idx idx
                                                   :detail detail}))
                                             (:details item)))))))))

(defnc budget-table
  [{:keys [cost-data]}]
  (let [[expanded-items set-expanded-items] (hooks/use-state #{})]
    (d/ol {:class "w-full text-white"}
          (map-indexed
           (fn [idx item]
             ($ section-line-item
                {:idx idx
                 :item item
                 :set-expanded-items set-expanded-items
                 :expanded-items expanded-items}))
           cost-data)

          ;; Total
          ($ total-section {:cost-data cost-data}))))
