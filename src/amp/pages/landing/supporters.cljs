(ns amp.pages.landing.supporters
  "The pavilion's supporters: the lead supporter, then the institutions and
   families who made it possible, in the order the pavilion credits them."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [helix.dom :as d]))

(def lead "The Shafrazian Foundation")

(def supporters
  ["Armenia Fund"
   "Ministry of Education, Science, Culture and Sport of the Republic of Armenia"
   "Andy and Hayde Torosyan and family"
   "Rafi Ourfalian and family"
   "Khachik Khudikyan and family"])

(defnc supporters-section
  [{:keys [id]}]
  (d/section {:id id :class "ap-sec !pt-0 lg:!pb-24"}
             (d/div {:class "ap-wrap"}
                    (d/div {:class "border-t border-rule pt-12 grid gap-8 lg:grid-cols-[1fr_2fr] lg:gap-12"}
                           (d/div
                            (d/p {:class "ap-label ap-muted m-0 mb-1"} "Armenian Pavilion")
                            (d/h2 {:class "ap-display-l"} "With the support of"))
                           (d/div {:class "flex flex-col gap-6"}
                                  (d/p {:class "ap-h1 m-0"} lead)
                                  (d/ul {:class "m-0 p-0 list-none grid max-w-[40rem]"}
                                        (for [s supporters]
                                          (d/li {:key s :class "ap-h3 py-3 border-t border-rule"} s))))))))
