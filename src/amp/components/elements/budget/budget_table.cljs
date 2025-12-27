(ns amp.components.elements.budget.budget-table
  (:require
   [amp.components.icons :refer [ChevronRightIcon InformationCircle]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [amp.hooks.use-scroll-to :refer [use-scroll-to-ref]]
   [amp.utils.debug :refer [spy]]

   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defn format-currency [amount]
  (let [rounded-amount (Math/round amount)]
    (str "$" (.toLocaleString rounded-amount "en-US"))))

(defn calculate-section-total-no-tax [details]
  (reduce + (map :amount details)))

(defn calculate-section-total-with-tax [item]
  (let [item-details (-> item :details)
        sub-total (reduce + (map :amount item-details))
        tax-rate (-> item :tax :rate)
        has-tax? (> tax-rate 0)
        tax-total (if has-tax? (* tax-rate sub-total) 0)]
    (+ tax-total sub-total)))

(defn sub-total-all-sections
  [cost-data]
  (reduce + (map #(calculate-section-total-with-tax %) cost-data)))

(defnc total-section
  [{:keys [cost-data]}]
  (let [sub-total (sub-total-all-sections cost-data)
        contingency (* sub-total 0.1)
        grand-total (+ sub-total contingency)]
    (d/div {:class "flex flex-col"}
           (d/li {:class "bg-slate-600 text-slate-100 flex justify-between items-center px-4 py-2 border-t-4 border-t-blue-400"}
                 (d/div {:class "w-6/12 "}
                        (d/h3 {:class "text-xl italic"}
                              "Sub total"))
                 (d/div {:class "w-1/12 "})
                 (d/div {:class "w-4/12 flex justify-end items-center space-x-4 "}
                        (d/span {:class "font-medium "}
                                (format-currency sub-total)))
                 (d/div {:class "w-1/12"}))
           (d/li {:class "bg-slate-700 text-slate-100 flex justify-between items-center px-4 py-2"}
                 (d/div {:class "w-6/12 "}
                        (d/h3 {:class "text-xl italic"}
                              "Contingency 10%"))
                 (d/div {:class "w-1/12 "})
                 (d/div {:class "w-4/12 flex justify-end items-center space-x-4 "}
                        (d/span {:class "font-medium "}
                                (format-currency (* sub-total 0.1))))
                 (d/div {:class "w-1/12"}))
           (d/li {:class "bg-slate-600 text-slate-100 flex justify-between items-center px-4 py-4"}
                 (d/div {:class "w-6/12 "}
                        (d/h3 {:class "font-semibold text-2xl"}
                              "TOTAL"))
                 (d/div {:class "w-1/12 "})
                 (d/div {:class "w-4/12 flex justify-end items-center space-x-4 "}
                        (d/span {:class "font-medium "}
                                (format-currency grand-total)))
                 (d/div {:class "w-1/12"})))))

(defn pad-two-digits [n]
  (if (< n 10)
    (str "0" n)
    (str n)))

(defnc detail-line-item
  [{:keys [idx detail set-expanded-items expanded-items]}]
  (let [item-id (str "detail-item-" idx)
        description (-> detail :description)
        has-description? description
        is-odd-detail? (odd? idx)]
    (if has-description?
      (d/li {:class (str "cursor-pointer overflow-hidden "
                         (if is-odd-detail? "bg-slate-700/50" ""))
             :on-click (fn []
                         (set-expanded-items
                          (fn [prev]
                            (if (prev item-id)
                              (disj prev item-id)
                              (conj prev item-id)))))}
            (d/div {:class "px-8 py-2 flex justify-between items-center"}
                   (d/span {:class "font-mono text-sm text-slate-400 mr-4"}
                           (str (pad-two-digits (inc idx)) "."))

                   (d/span {:class "justify-start flex-1 flex items-center"}
                           (:title detail)
                           (d/div {:class "w-5 h-5 ml-2"} ($ InformationCircle)))
                   (d/span {:class "text-slate-300 font-medium"}
                           (format-currency (:amount detail))))
            (when (expanded-items item-id)
              (d/div {:class "border-l-8 border-slate-600"}
                     (d/div {:class ""}
                            (d/div {:class "text-base bg-slate-200/10 text-white"}
                                   (d/p {:class "px-6 py-4 italic"}
                                        description))
                            ;;  Make line items have numbers
                            ))))
      (d/li {:class (if is-odd-detail? "bg-slate-700/50" "")}
            (d/div {:class "px-8 py-2 flex justify-between items-center"}
                   (d/span {:class "font-mono text-sm text-slate-400 mr-4"}
                           (str (pad-two-digits (inc idx)) "."))
                   (d/span {:class "justify-start flex-1"}
                           (:title detail))
                   (d/span {:class "text-slate-300 font-medium"}
                           (format-currency (:amount detail))))))))

(defnc section-line-item
  [{:keys [idx item set-expanded-items expanded-items]}]
  (let [section-ref (hooks/use-ref (str "section-" idx))
        scroll-to-ref (use-scroll-to-ref)
        item-id (str "item-" idx)
        sub-total (calculate-section-total-no-tax (:details item))

        tax-rate (-> item :tax :rate)
        tax-label (-> item :tax :label)
        tax-total (* sub-total tax-rate)
        has-tax? (> tax-rate 0)

        total (+ sub-total tax-total)
        is-odd (odd? idx)]

    (d/li {:ref section-ref
           :class (str "overflow-hidden " (if is-odd "bg-slate-900" "bg-slate-800"))}
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
                                (format-currency total)))
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
                                                   :detail detail
                                                   :set-expanded-items set-expanded-items
                                                   :expanded-items expanded-items}))
                                             (:details item))))

                   (d/div {:class "bg-blue-800 flex flex-col"}
                          (when has-tax?
                            (d/div (d/div {:class "font-semibold text-lg px-8 py-2 flex"}
                                          (d/span {:class "font-mono text-sm text-slate-400"}
                                                  "-")
                                          (d/div {:class "flex justify-between ml-8 w-full text-blue-100"}
                                                 (d/span "Sub total: ")
                                                 (d/span (format-currency sub-total))))
                                   (d/div {:class "font-semibold text-lg px-8 py-2  flex"}
                                          (d/span {:class "font-mono text-sm text-slate-400"}
                                                  "-")
                                          (d/div {:class "flex justify-between ml-8 w-full text-blue-100"}
                                                 (d/span tax-label)
                                                 (d/span (format-currency tax-total))))))
                          (d/div {:class "font-semibold bg-blue-900 text-xl px-8 py-4  flex"}
                                 (d/span {:class "font-mono text-sm text-slate-400"}
                                         "-")
                                 (d/div {:class "flex justify-between ml-8 w-full text-blue-100"}
                                        (d/span "Total: ")
                                        (d/span (format-currency total))))
                          (d/div {:class "bg-slate-700 flex p-4 justify-center items-center cursor-pointer"
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
