(ns amp.pages.landing.supporters
  "The pavilion's supporters, by tier: the lead supporter, then the
   institutions and families who made it possible, ordered by what they gave."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

;; A supporter is a :name, with an optional :sub (a second, quieter line) and
;; :href (their official site).
(def tiers
  [{:tier "Diamond"
    :lead? true
    :names [{:name "The Shafrazian Foundation"}]}
   {:tier "Platinum"
    :names [{:name "Armenia Fund" :href "https://www.armeniafund.org/"}]}
   {:tier "Gold"
    :names [{:name "Khachik Khudikyan and family"}
            {:name "Rafi Ourfalian and family"}]}
   {:tier "Silver"
    :names [{:name "Ministry of Education, Science, Culture and Sport"
             :sub "Republic of Armenia"
             :href "https://escs.gov.am/en"}]}
   {:tier "Bronze"
    :names [{:name "Andy and Hayde Torosyan and family"}]}])

(defnc supporter
  [{:keys [name sub href lead?]}]
  (d/li {:class "m-0"}
        (d/p {:class (str (if lead? "ap-h1" "ap-h3") " m-0 [text-wrap:balance]")}
             (if href
               (d/a {:class "ap-link" :href href :target "_blank" :rel "noopener"} name)
               name))
        (when sub
          (d/p {:class "ap-label ap-muted m-0 mt-1"} sub))))

(defnc supporters-section
  [{:keys [id]}]
  (d/section {:id id :class "ap-sec !pt-0 lg:!pb-24"}
             (d/div {:class "ap-wrap"}
                    (d/div {:class "border-t border-rule pt-12 grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-12"}
                           (d/div
                            (d/p {:class "ap-label ap-muted m-0 mb-1"} "Armenian Pavilion")
                            (d/h2 {:class "ap-display-l"} "With the support of"))
                           (d/dl {:class "m-0 grid max-w-[44rem]"}
                                 (for [{:keys [tier lead? names]} tiers]
                                   (d/div {:key tier
                                           :class (str "grid gap-2 sm:grid-cols-[7rem_1fr] sm:gap-6 py-4"
                                                       (when-not lead? " border-t border-rule"))}
                                          (d/dt {:class "ap-label ap-muted m-0 sm:pt-[.45em]"} tier)
                                          (d/dd {:class "m-0"}
                                                (d/ul {:class "m-0 p-0 list-none grid gap-2"}
                                                      (for [n names]
                                                        ($ supporter {:key (:name n) :lead? lead? & n})))))))))))
