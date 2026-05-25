(ns amp.pages.budget.non-profit
  (:require
   [amp.data.donations :as donations]
   [amp.pages.budget.section-block :refer [section-block]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))


(defnc transfer-field
  [{:keys [label value field-label field-value]}]
  (d/div {:class "flex items-start justify-between gap-6"}
         (d/span {:class field-label} (str label ":"))
         (if (sequential? value)
           (d/div {:class "text-right leading-snug"}
                  (map-indexed (fn [idx line]
                                 (d/p {:key (str label "-" idx)} line))
                               value))
           (d/span {:class field-value} value))))

(defnc transfer-card
  [{:keys [title fields field-label field-value]}]
  (d/div
   (d/p {:class (s/cx s/heading-section s/text-primary "mb-4")}
        title)
   (d/div {:class (s/cx s/font-ui s/text-sm "space-y-3")}
          (map (fn [{:keys [label] :as field}]
                 ($ transfer-field
                    {:key label
                     :label (:label field)
                     :value (:value field)
                     :field-label field-label
                     :field-value field-value}))
               fields))))



(defnc non-profit
  [{:keys [id subtitle title]}]
  (let [field-label (s/cx s/weight-semibold s/text-muted)
        field-value (s/cx "text-right" s/weight-bold s/text-value s/tracking-wide)]
    (d/div {:id id}
           ($ section-block
              {:idx 8
               :eyebrow subtitle
               :title title}
              (d/div
               {:class "space-y-8 p-4"}
               (d/div {:class (s/cx s/text-secondary "mb-12")}

                      (d/p {}
                           "The Armenia Pavilion 2026 is supported through "
                           (d/span {:class s/weight-semibold} (:name donations/organization))
                           ", a registered "
                           (d/span {:class s/weight-semibold} (:status donations/organization))
                           " public non-profit organization. "
                           (d/span {:class s/weight-semibold} "Contributions are tax deductible")
                           " to the extent permitted by law.")

                      (d/div {:class (s/cx s/font-ui s/text-sm "mt-6 space-y-1")}
                             (d/p {}
                                  (d/span {:class field-label} "Organization: ")
                                  (:name donations/organization))
                             (d/p {}
                                  (d/span {:class field-label} "EIN: ")
                                  (d/span {:class field-value} (:ein donations/organization)))
                             (d/p {}
                                  (d/span {:class field-label} "Located in: ")
                                  (d/span {:class s/em-bold} (:location donations/organization))))

                      (d/div {:class "mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10"}

                             ($ transfer-card
                                {:title (:title donations/domestic-transfer)
                                 :fields (:fields donations/domestic-transfer)
                                 :field-label field-label
                                 :field-value field-value})

                             ($ transfer-card
                                {:title (:title donations/international-transfer)
                                 :fields (:fields donations/international-transfer)
                                 :field-label field-label
                                 :field-value field-value})))

               (d/p {:class (s/cx s/text-muted "p-4 mt-10 text-sm md:text-base")}
                    donations/receipt-note))))))