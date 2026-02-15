(ns amp.components.elements.budget.non-profit
  (:require
   [amp.components.elements.budget.section-block :refer [section-block]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc non-profit
  [{:keys [id subtitle title]}]
  (d/div {:id id}
         ($ section-block
            {:idx 5
             :eyebrow subtitle
             :title title}
            (d/div
             {:class "space-y-8
                   p-4"}
             (d/div {:class "mb-12 text-slate-300"}

                    (d/p {}
                         "The Armenia Pavilion 2026 is supported through "
                         (d/span {:class "font-semibold"} "Fallen Angels Inc.")
                         ", a registered "
                         (d/span {:class "font-semibold"} "501(c)(3)")
                         " public non-profit organization. "
                         (d/span {:class "font-semibold"} "Contributions are tax deductible")
                         " to the extent permitted by law.")

                    (d/div {:class "mt-6 space-y-1 font-mono text-sm"}
                           (d/p {}
                                (d/span {:class "font-semibold text-slate-400"} "Organization: ")
                                "Fallen Angels Inc.")
                           (d/p {}
                                (d/span {:class "font-semibold text-slate-400"} "EIN: ")
                                (d/span {:class "font-bold text-indigo-300"} "92-2395513"))
                           (d/p {}
                                (d/span {:class "font-semibold text-slate-400"} "Located in: ")
                                (d/span {:class "font-bold text-slate-100"} "Los Angeles, CA")))

                    (d/div {:class "mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10"}

                           (d/div
                            (d/p {:class "text-xl font-mono font-bold text-slate-100 mb-4 uppercase tracking-wider"}
                                 "Domestic "
                                 (d/span {:class "font-normal text-slate-400"} "Transfers"))

                            (d/div {:class "space-y-3 font-mono text-sm"}
                                   (d/div {:class "flex items-baseline justify-between gap-6"}
                                          (d/span {:class "font-semibold text-slate-400"} "Name:")
                                          (d/span {:class "text-right"} "Fallen Angels Inc."))
                                   (d/div {:class "flex items-baseline justify-between gap-6"}
                                          (d/span {:class "font-semibold text-slate-400"} "Routing:")
                                          (d/span {:class "text-right font-bold text-indigo-300 tracking-wide"} "091311229"))
                                   (d/div {:class "flex items-baseline justify-between gap-6"}
                                          (d/span {:class "font-semibold text-slate-400"} "Account #:")
                                          (d/span {:class "text-right font-bold text-indigo-300 tracking-wide"} "202535309341"))
                                   (d/div {:class "flex items-start justify-between gap-6"}
                                          (d/span {:class "font-semibold text-slate-400"} "Address:")
                                          (d/div {:class "text-right leading-snug"}
                                                 (d/p {} "Choice Financial Group")
                                                 (d/p {} "4501 23rd Avenue S")
                                                 (d/p {} "Fargo, ND 58104")))))

                           ;; International
                           (d/div
                            (d/p {:class "text-xl font-mono font-bold text-slate-100 mb-4 uppercase tracking-wider"}
                                 "International "
                                 (d/span {:class "font-normal text-slate-400"} "Transfers"))

                            (d/div {:class "space-y-3 font-mono text-sm"}
                                   (d/div {:class "flex items-baseline justify-between gap-6"}
                                          (d/span {:class "font-semibold text-slate-400"} "Name:")
                                          (d/span {:class "text-right"} "Fallen Angels Inc."))
                                   (d/div {:class "flex items-baseline justify-between gap-6"}
                                          (d/span {:class "font-semibold text-slate-400"} "SWIFT/BIC:")
                                          (d/span {:class "text-right font-bold text-indigo-300 tracking-wide"} "CHFGUS44021"))
                                   (d/div {:class "flex items-baseline justify-between gap-6"}
                                          (d/span {:class "font-semibold text-slate-400"} "ABA/Routing:")
                                          (d/span {:class "text-right font-bold text-indigo-300 tracking-wide"} "091311229"))
                                   (d/div {:class "flex items-baseline justify-between gap-6"}
                                          (d/span {:class "font-semibold text-slate-400"} "IBAN/Account #:")
                                          (d/span {:class "text-right font-bold text-indigo-300 tracking-wide"} "202535309341"))
                                   (d/div {:class "flex items-start justify-between gap-6"}
                                          (d/span {:class "font-semibold text-slate-400"} "Address:")
                                          (d/div {:class "text-right leading-snug"}
                                                 (d/p {} "Choice Financial Group")
                                                 (d/p {} "4501 23rd Avenue S")
                                                 (d/p {} "Fargo, ND 58104")))))))

             (d/p {:class "p-4 mt-10 text-sm md:text-base text-slate-400"}
                  "If you would like a receipt letter for your records, please include your name and email address with the transfer memo.")))))