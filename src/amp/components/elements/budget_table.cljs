(ns amp.components.elements.budget-table
  (:require
   [amp.components.icons :refer [ChevronRightIcon]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [amp.hooks.use-scroll-to :refer [use-scroll-to-ref]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defn format-currency [amount]
  (str "€" (.toLocaleString amount "en-US")))

(defn calculate-section-total [details]
  (reduce + (map :amount details)))


(comment

  (calculate-section-total [{:title "Crates" :amount 15000}
                            {:title "Supplies" :amount 10000}
                            {:title "Packing labor" :amount 6000}
                            {:title "Ship LA–Venice" :amount 30000}
                            {:title "Ship Venice–LA" :amount 30000}
                            {:title "Insurance" :amount 12000}
                            {:title "Install crew" :amount 16200}
                            {:title "Port handling" :amount 2500}
                            {:title "Barge transport" :amount 6000}
                            {:title "Local trucking" :amount 2400}
                            {:title "Forklift & crew" :amount 1800}
                            {:title "Short storage" :amount 1200}
                            {:title "Crate storage" :amount 2000}
                            {:title "Waste removal" :amount 1000}
                            {:title "Reverse logistics" :amount 6700}
                            {:title "Contingency" :amount 14160}])

  ;;Keep from folding
  )

(defnc total-section
  [{:keys [cost-data]}]
  (let [sub-total (reduce + (map #(calculate-section-total (:details %)) cost-data))
        contingency (* sub-total 0.1)
        grand-total (+ sub-total contingency)]
    (d/div {:class "flex flex-col"}
           (d/li {:class "bg-slate-200 text-slate-900 flex justify-between items-center px-4 py-2 mt-4"}
                 (d/div {:class "w-6/12 "}
                        (d/h3 {:class "text-xl italic"}
                              "Sub total"))
                 (d/div {:class "w-1/12 "})
                 (d/div {:class "w-4/12 flex justify-end items-center space-x-4 "}
                        (d/span {:class "font-medium "}
                                (format-currency sub-total)))
                 (d/div {:class "w-1/12"}))
           (d/li {:class "bg-slate-300 text-slate-900 flex justify-between items-center px-4 py-2"}
                 (d/div {:class "w-6/12 "}
                        (d/h3 {:class "text-xl italic"}
                              "Contingency 10%"))
                 (d/div {:class "w-1/12 "})
                 (d/div {:class "w-4/12 flex justify-end items-center space-x-4 "}
                        (d/span {:class "font-medium "}
                                (format-currency (* sub-total 0.1))))
                 (d/div {:class "w-1/12"}))
           (d/li {:class "bg-slate-200 text-slate-900 flex justify-between items-center px-4 py-4"}
                 (d/div {:class "w-6/12 "}
                        (d/h3 {:class "font-semibold text-2xl"}
                              "TOTAL"))
                 (d/div {:class "w-1/12 "})
                 (d/div {:class "w-4/12 flex justify-end items-center space-x-4 "}
                        (d/span {:class "font-medium "}
                                (format-currency grand-total)))
                 (d/div {:class "w-1/12"})))))

;; Write a function that pads the number with 0s to the left to make it 2 digits
(defn pad-two-digits [n]
  (if (< n 10)
    (str "0" n)
    (str n)))

(comment

  (pad-two-digits 1)

  ;;Keep from folding
  )

(defnc detail-line-item
  [{:keys [idx detail]}]
  (let [is-odd-detail? (odd? idx)]
    (d/li {:class (str "px-8 py-2 flex justify-between items-center "
                       (if is-odd-detail? "bg-slate-700/50" ""))}
          (d/span {:class "font-mono text-sm text-slate-400 mr-4"}
                  (str (pad-two-digits (inc idx)) "."))
          (d/span {:class "justify-start flex-1"}
                  (:title detail))
          (d/span {:class "text-slate-300 font-medium"}
                  (format-currency (:amount detail))))))

(defnc section-line-item
  [{:keys [idx item set-expanded-items expanded-items]}]
  (let [section-ref (hooks/use-ref (str "section-" idx))
        scroll-to-ref (use-scroll-to-ref)
        item-id (str "item-" idx)
        section-total (calculate-section-total (:details item))
        is-odd (odd? idx)]
    (d/li {:ref section-ref
           :class (str "overflow-hidden " (if is-odd "" "bg-slate-800"))}
          (d/div {:class "flex justify-between items-center px-4 py-4 cursor-pointer transition-colors"
                  :on-click (fn []
                              (set-expanded-items
                               (fn [prev]
                                 (if (prev item-id)
                                   (disj prev item-id)
                                   (conj prev item-id)))))}
                 (d/div {:class "w-6/12 "}
                        (d/h3 {:class "font-semibold text-xl"}
                              (:title item)))
                 (d/div {:class "w-1/12 "})
                 (d/div {:class "w-4/12 flex justify-end items-center "}
                        (d/span {:class "font-medium"}
                                (format-currency section-total)))
                 (d/div {:class "w-1/12 flex justify-end items-center "}
                        (d/div {:class (str "w-5 h-5 transition-transform "
                                            (when (expanded-items item-id) "rotate-90"))}
                               ($ ChevronRightIcon))))
          (when (expanded-items item-id)
            (d/div {:class "border-l-8 border-slate-600"}
                   (d/div {:class ""}
                          (d/div {:class "text-base bg-slate-200/10 text-white"}
                                 (d/p {:class "px-8 py-4 italic"}
                                      (:description item)))
                          ;;  Make line items have numbers
                          (d/ol {:class ""}
                                (map-indexed (fn [idx detail]
                                               ($ detail-line-item
                                                  {:idx idx
                                                   :key (str "detail-" idx)
                                                   :detail detail}))
                                             (:details item))))

                   (d/div {:class "bg-blue-900 flex flex-col"}
                          (d/div {:class "font-semibold text-xl px-8 py-4  flex"}
                                 (d/span {:class "font-mono text-sm text-slate-400"}
                                         "-")
                                 (d/div {:class "flex justify-between ml-8 w-full text-blue-100"}
                                        (d/span "Total: ")
                                        (d/span (format-currency section-total))))
                          (d/div {:class "bg-slate-800 flex p-4 justify-center items-center cursor-pointer"
                                  :on-click (fn []
                                              (set-expanded-items
                                               (fn [prev]
                                                 (if (prev item-id)
                                                   (disj prev item-id)
                                                   (conj prev item-id))))
                                              (scroll-to-ref section-ref))}
                                 "CLOSE SECTION"
                                 (d/div {:class (str "w-5 h-5 transition-transform ml-4 "
                                                     (when (expanded-items item-id) "-rotate-90"))}
                                        ($ ChevronRightIcon)))))))))

(defnc budget-table
  [{:keys [cost-data]}]
  (let [[expanded-items set-expanded-items] (hooks/use-state #{})]
    (d/ol {:class "w-full text-white"}
          (map-indexed
           (fn [idx item]
             ($ section-line-item
                {:idx idx
                 :key (str idx "-section")
                 :item item
                 :set-expanded-items set-expanded-items
                 :expanded-items expanded-items}))
           cost-data)

          ;; Total
          ($ total-section {:cost-data cost-data}))))
