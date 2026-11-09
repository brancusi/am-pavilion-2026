(ns amp.pages.subscribed
  "/subscribed: where Buttondown sends a new subscriber after they confirm
   (its subscription_confirmation_redirect_url). A welcome, what the emails
   will carry, and the three latest journal posts to read meanwhile. Small
   enough to ship with the main bundle, like the 404."
  (:require [amp.data.journal :as journal]
            [amp.lib.defnc :refer [defnc]]
            [amp.ui.post-card :refer [post-card]]
            [helix.core :refer [$]]
            [helix.dom :as d]))

(def ^:private expect
  [[:red "From the studio" "What is being cast, stacked and carried in Tesa 41, and what comes after Venice."]
   [:blue "Events and walks" "Talks, walks through the city and studio days, with enough notice to come."]
   [:yellow "New films and writing" "Journal posts and films when they are published, a few times a month at most."]])

(defnc subscribed-view []
  (d/div
   (d/section {:class "ap-wrap ap-subscribed"}
              (d/div {:class "ap-hero__strip" :aria-hidden true}
                     (for [i (range 9)] (d/i {:key i})))
              (d/p {:class "ap-label ap-muted m-0"} "News & events")
              (d/h1 {:class "ap-display-l m-0"} "You’re on the list.")
              (d/p {:class "ap-lede m-0"}
                   "Thank you for confirming. We will write when there is something to tell: from the studio, from Venice, and from wherever the work goes next. A welcome email is on its way.")
              (d/ul {:class "ap-subscribed__expect"}
                    (for [[tone title text] expect]
                      (d/li {:key title :class (str "ap-subscribed__item ap-subscribed__item--" (name tone))}
                            (d/h2 {:class "ap-subscribed__h"} title)
                            (d/p {:class "ap-body-s m-0"} text))))
              (d/p {:class "ap-body-s ap-muted m-0"}
                   "Every email has a link to unsubscribe. Replies reach us at "
                   (d/a {:class "ap-link" :href "mailto:hello@armenianpavilion2026.org"} "hello@armenianpavilion2026.org")
                   "."))
   (d/section {:class "ap-wrap ap-subscribed__read"}
              (d/h2 {:class "ap-label m-0"} "Meanwhile, from the journal")
              (d/div {:class "ap-posts"}
                     (for [p (take 3 journal/posts)]
                       ($ post-card {:key (:slug p) :& p})))
              (d/div {:class "flex flex-wrap gap-2"}
                     (d/a {:class "ap-btn" :href "/blog"} "All journal posts")
                     (d/a {:class "ap-btn ap-btn--ghost" :href "/visit"} "Plan your visit")))))
