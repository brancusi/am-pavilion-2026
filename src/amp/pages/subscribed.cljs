(ns amp.pages.subscribed
  "/subscribed: where Buttondown sends a new subscriber after they confirm
   (its subscription_confirmation_redirect_url). A welcome, what the emails
   will carry, and the three latest journal posts to read meanwhile. Small
   enough to ship with the main bundle, like the 404."
  (:require [amp.data.journal :as journal]
            [amp.i18n :as i18n :refer [t] :refer-macros [defcatalog]]
            [amp.lib.defnc :refer [defnc]]
            [amp.ui.post-card :refer [post-card]]
            [helix.core :refer [$]]
            [helix.dom :as d]))

(defcatalog "subscribed")

(def ^:private expect
  [[:red :subscribed/studio-h :subscribed/studio-p]
   [:blue :subscribed/events-h :subscribed/events-p]
   [:yellow :subscribed/films-h :subscribed/films-p]])

(defnc subscribed-view []
  (d/div
   (d/section {:class "ap-wrap ap-subscribed"}
              (d/div {:class "ap-hero__strip" :aria-hidden true}
                     (for [i (range 9)] (d/i {:key i})))
              (d/p {:class "ap-label ap-muted m-0"} (t :subscribed/label))
              (d/h1 {:class "ap-display-l m-0"} (t :subscribed/title))
              (d/p {:class "ap-lede m-0"} (t :subscribed/lede))
              (d/ul {:class "ap-subscribed__expect"}
                    (for [[tone title text] expect]
                      (d/li {:key (name title) :class (str "ap-subscribed__item ap-subscribed__item--" (name tone))}
                            (d/h2 {:class "ap-subscribed__h"} (t title))
                            (d/p {:class "ap-body-s m-0"} (t text)))))
              (d/p {:class "ap-body-s ap-muted m-0"}
                   (t :subscribed/replies {:a (i18n/ext-link "mailto:hello@armenianpavilion2026.org")
                                           :email "hello@armenianpavilion2026.org"})))
   (d/section {:class "ap-wrap ap-subscribed__read"}
              (d/h2 {:class "ap-label m-0"} (t :subscribed/meanwhile))
              (d/div {:class "ap-posts"}
                     (for [p (take 3 (journal/posts))]
                       ($ post-card {:key (:slug p) :& p})))
              (d/div {:class "flex flex-wrap gap-2"}
                     (d/a {:class "ap-btn" :href (i18n/href "/blog")} (t :subscribed/all-posts))
                     (d/a {:class "ap-btn ap-btn--ghost" :href (i18n/href "/visit")} (t :subscribed/plan))))))
