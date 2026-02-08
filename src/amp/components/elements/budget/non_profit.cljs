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

                    (d/div {:class "mt-6 space-y-1"}
                           (d/p {}
                                (d/span {:class "font-semibold"} "Organization: ")
                                "Fallen Angels Inc.")
                           (d/p {}
                                (d/span {:class "font-semibold"} "EIN: ")
                                (d/span {:class "font-bold text-slate-100"} "92-2395513"))
                           (d/p {}
                                (d/span {:class "font-semibold"} "Located in: ")
                                (d/span {:class "font-bold text-slate-100"} "Los Angeles, CA")))

                    (d/div {:class "mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10"}

                           ;; Domestic
                           (d/div
                            (d/p {:class "text-3xl font-helvetica font-bold text-slate-100 mb-4"}
                                 "Domestic "
                                 (d/span {:class "italic font-normal text-slate-300"} "Transfers"))

                            (d/div {:class "space-y-3"}
                                   (d/div {:class "flex items-baseline justify-between gap-6"}
                                          (d/span {:class "font-semibold"} "Name:")
                                          (d/span {:class "text-right"} "Fallen Angels Inc."))
                                   (d/div {:class "flex items-baseline justify-between gap-6"}
                                          (d/span {:class "font-semibold"} "Routing:")
                                          (d/span {:class "text-right font-bold text-slate-100 tracking-wide"} "091311229"))
                                   (d/div {:class "flex items-baseline justify-between gap-6"}
                                          (d/span {:class "font-semibold"} "Account #:")
                                          (d/span {:class "text-right font-bold text-slate-100 tracking-wide"} "202535309341"))
                                   (d/div {:class "flex items-start justify-between gap-6"}
                                          (d/span {:class "font-semibold"} "Address:")
                                          (d/div {:class "text-right leading-snug"}
                                                 (d/p {} "Choice Financial Group")
                                                 (d/p {} "4501 23rd Avenue S")
                                                 (d/p {} "Fargo, ND 58104")))))

                           ;; International
                           (d/div
                            (d/p {:class "text-3xl font-helvetica font-bold text-slate-100 mb-4"}
                                 "International "
                                 (d/span {:class "italic font-normal text-slate-300"} "Transfers"))

                            (d/div {:class "space-y-3"}
                                   (d/div {:class "flex items-baseline justify-between gap-6"}
                                          (d/span {:class "font-semibold"} "Name:")
                                          (d/span {:class "text-right"} "Fallen Angels Inc."))
                                   (d/div {:class "flex items-baseline justify-between gap-6"}
                                          (d/span {:class "font-semibold"} "SWIFT/BIC:")
                                          (d/span {:class "text-right font-bold text-slate-100 tracking-wide"} "CHFGUS44021"))
                                   (d/div {:class "flex items-baseline justify-between gap-6"}
                                          (d/span {:class "font-semibold"} "ABA/Routing:")
                                          (d/span {:class "text-right font-bold text-slate-100 tracking-wide"} "091311229"))
                                   (d/div {:class "flex items-baseline justify-between gap-6"}
                                          (d/span {:class "font-semibold"} "IBAN/Account #:")
                                          (d/span {:class "text-right font-bold text-slate-100 tracking-wide"} "202535309341"))
                                   (d/div {:class "flex items-start justify-between gap-6"}
                                          (d/span {:class "font-semibold"} "Address:")
                                          (d/div {:class "text-right leading-snug"}
                                                 (d/p {} "Choice Financial Group")
                                                 (d/p {} "4501 23rd Avenue S")
                                                 (d/p {} "Fargo, ND 58104")))))))

             (d/p {:class "p-4 mt-10 text-sm md:text-base text-slate-400"}
                  "If you would like a receipt letter for your records, please include your name and email address with the transfer memo.")))))