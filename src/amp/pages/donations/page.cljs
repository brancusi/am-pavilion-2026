(ns amp.pages.donations.page
  "Donate page. Gifts are made through Fallen Angels Inc., the pavilion's
   501(c)(3) fiscal home; until an online checkout link is added, donors
   are asked to get in touch by email."
  (:require [amp.lib.defnc :refer [defnc]]
            [helix.dom :as d]))

(def ^:private email "hello@armenianpavilion2026.org")

(defnc donations-view
  [_props]
  (d/div
   (d/section {:class "ap-chapter ap-chapter--red"}
              (d/div {:class "ap-wrap !px-0 flex flex-col gap-4"}
                     (d/p {:class "ap-label ap-chapter__eyebrow m-0"} "Support the pavilion")
                     (d/h1 {:class "ap-display-l ap-chapter__title"} "Help bring The Studio to Venice")
                     (d/p {:class "ap-lede m-0 max-w-[40ch]"}
                          "Your contribution directly supports Armenia’s national presentation at Biennale Arte 2026.")))
   (d/section {:class "ap-sec"}
              (d/div {:class "ap-wrap ap-intro"}
                     (d/div {:class "flex flex-col gap-6"}
                            (d/h2 {:class "ap-h1"} "How to give")
                            (d/p {:class "ap-body m-0"}
                                 "The Armenia Pavilion is supported through Fallen Angels Inc., a registered 501(c)(3) public non-profit organization. "
                                 "Contributions are tax deductible to the extent permitted by law.")
                            (d/p {:class "ap-body m-0"}
                                 "To make a gift by card or bank transfer, write to us and we will send the details and a receipt.")
                            (d/div {:class "flex flex-wrap gap-2"}
                                   (d/a {:class "ap-btn ap-btn--red"
                                         :href (str "mailto:" email "?subject=Donation%20to%20the%20Armenia%20Pavilion")}
                                        "Email to donate")
                                   (d/a {:class "ap-btn ap-btn--ghost" :href "/budget"} "See the budget")))
                     (d/dl {:class "ap-facts"}
                           (for [[k v] [["Organization" "Fallen Angels Inc."]
                                        ["Status" "501(c)(3) public non-profit"]
                                        ["EIN" "92-2395513"]
                                        ["Located in" "Los Angeles, CA"]
                                        ["Contact" email]]]
                             (d/div {:key k} (d/dt k) (d/dd v))))))))
