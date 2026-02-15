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
    (d/div {:class "flex flex-col font-mono"}
           (d/li {:class "bg-slate-900 text-slate-100 flex justify-between items-center px-4 py-2 border-t-2 border-pink-500/70"}
                 (d/div {:class "w-6/12 "}
                        (d/h3 {:class "text-sm uppercase tracking-widest text-slate-400"}
                              "Sub total"))
                 (d/div {:class "w-1/12 "})
                 (d/div {:class "w-4/12 flex justify-end items-center space-x-4 "}
                        (d/span {:class "font-semibold text-slate-200"}
                                (format-currency sub-total)))
                 (d/div {:class "w-1/12"}))
           (d/li {:class "bg-slate-900/60 text-slate-100 flex justify-between items-center px-4 py-2"}
                 (d/div {:class "w-6/12 "}
                        (d/h3 {:class "text-sm uppercase tracking-widest text-slate-400"}
                              "Contingency 10%"))
                 (d/div {:class "w-1/12 "})
                 (d/div {:class "w-4/12 flex justify-end items-center space-x-4 "}
                        (d/span {:class "font-semibold text-slate-200"}
                                (format-currency (* sub-total 0.1))))
                 (d/div {:class "w-1/12"}))
           (d/li {:class "bg-slate-900 text-slate-100 flex justify-between items-center px-4 py-4 border-t border-pink-500/40"}
                 (d/div {:class "w-6/12 "}
                        (d/h3 {:class "font-bold text-lg uppercase tracking-wider"}
                              "TOTAL"))
                 (d/div {:class "w-1/12 "})
                 (d/div {:class "w-4/12 flex justify-end items-center space-x-4 "}
                        (d/span {:class "font-bold text-lg text-pink-300"}
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
      (d/li {:class (str "cursor-pointer overflow-hidden font-mono "
                         (if is-odd-detail? "bg-slate-800/50" ""))
             :on-click (fn []
                         (set-expanded-items
                          (fn [prev]
                            (if (prev item-id)
                              (disj prev item-id)
                              (conj prev item-id)))))}
            (d/div {:class "px-8 py-2 flex justify-between items-center"}
                   (d/span {:class "text-[11px] text-slate-600 mr-4"}
                           (str (pad-two-digits (inc idx)) "."))

                   (d/span {:class "justify-start flex-1 flex items-center text-sm text-slate-300"}
                           (:title detail)
                           (d/div {:class "w-4 h-4 ml-2 text-slate-600"} ($ InformationCircle)))
                   (d/span {:class "text-indigo-300 font-semibold text-sm"}
                           (format-currency (:amount detail))))
            (when (expanded-items item-id)
              (d/div {:class "border-l-2 border-pink-500/30"}
                     (d/div {:class ""}
                            (d/div {:class "text-sm bg-slate-800/60 text-slate-400"}
                                   (d/p {:class "px-6 py-4"}
                                        description))
                            ;;  Make line items have numbers
                            ))))
      (d/li {:class (str "font-mono " (if is-odd-detail? "bg-slate-800/50" ""))}
            (d/div {:class "px-8 py-2 flex justify-between items-center"}
                   (d/span {:class "text-[11px] text-slate-600 mr-4"}
                           (str (pad-two-digits (inc idx)) "."))
                   (d/span {:class "justify-start flex-1 text-sm text-slate-300"}
                           (:title detail))
                   (d/span {:class "text-indigo-300 font-semibold text-sm"}
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
           :class (str "overflow-hidden font-mono " (if is-odd "bg-slate-900" "bg-slate-900/60"))}
          (d/div {:class "flex justify-between items-center px-4 py-4 cursor-pointer transition-colors hover:bg-slate-800/50"
                  :on-click (fn []
                              (set-expanded-items
                               (fn [prev]
                                 (if (prev item-id)
                                   (disj prev item-id)
                                   (conj prev item-id)))))}
                 (d/div {:class "w-6/12 "}
                        (d/h3 {:class "font-bold text-base uppercase tracking-wide text-slate-200"}
                              (:title item)))
                 (d/div {:class "w-1/12 "})
                 (d/div {:class "w-4/12 flex justify-end items-center "}
                        (d/span {:class "font-semibold text-indigo-300"}
                                (format-currency total)))
                 (d/div {:class "w-1/12 flex justify-end items-center "}
                        (d/div {:class (str "w-4 h-4 transition-transform text-slate-500 "
                                            (when (expanded-items item-id) "rotate-90"))}
                               ($ ChevronRightIcon))))
          (when (expanded-items item-id)
            (d/div {:class "border-l-2 border-pink-500/30"}
                   (d/div {:class ""}
                          (d/div {:class "text-sm bg-slate-800/40 text-slate-400"}
                                 (d/p {:class "px-8 py-4"}
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

                   (d/div {:class "bg-slate-900 flex flex-col border-t border-slate-800"}
                          (when has-tax?
                            (d/div (d/div {:class "font-semibold text-sm px-8 py-2 flex"}
                                          (d/span {:class "text-[10px] text-slate-600"}
                                                  "-")
                                          (d/div {:class "flex justify-between ml-8 w-full text-slate-300"}
                                                 (d/span "Sub total: ")
                                                 (d/span (format-currency sub-total))))
                                   (d/div {:class "font-semibold text-sm px-8 py-2 flex"}
                                          (d/span {:class "text-[10px] text-slate-600"}
                                                  "-")
                                          (d/div {:class "flex justify-between ml-8 w-full text-amber-300/80"}
                                                 (d/span tax-label)
                                                 (d/span (format-currency tax-total))))))
                          (d/div {:class "font-bold text-base bg-slate-950 px-8 py-4 flex border-t border-pink-500/20"}
                                 (d/span {:class "text-[10px] text-slate-600"}
                                         "-")
                                 (d/div {:class "flex justify-between ml-8 w-full text-pink-300"}
                                        (d/span "Total: ")
                                        (d/span (format-currency total))))
                          (d/div {:class "bg-slate-800/40 flex p-3 justify-center items-center cursor-pointer text-[10px] uppercase tracking-[0.25em] text-slate-500 hover:text-pink-300 transition-colors"
                                  :on-click (fn []
                                              (set-expanded-items
                                               (fn [prev]
                                                 (if (prev item-id)
                                                   (disj prev item-id)
                                                   (conj prev item-id))))
                                              (scroll-to-ref section-ref))}
                                 "CLOSE SECTION"
                                 (d/div {:class (str "w-4 h-4 transition-transform ml-2 "
                                                     (when (expanded-items item-id) "-rotate-90"))}
                                        ($ ChevronRightIcon)))))))))

(defnc budget-table
  [{:keys [cost-data]}]
  (let [[expanded-items set-expanded-items] (hooks/use-state #{})]
    (d/ol {:class "w-full text-white font-mono"}
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
