(ns amp.pages.landing.studio
  "The exhibition essay by Carlo McCormick, as an article: the opening
   paragraph, then the rest behind Read the full essay. The text is in
   landing.json (studio.*)."
  (:require
   [amp.i18n :refer [t] :refer-macros [defcatalog]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.read-more :refer [read-more]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defcatalog "landing")

(defnc about-studio
  [{:keys [id]}]
  (d/section {:id id :class "ap-article border-t border-rule pb-12 lg:pb-24"}
             (d/header {:class "ap-article__head"}
                       (d/p {:class "ap-label ap-muted m-0"} (t :landing/studio.eyebrow))
                       (d/h2 {:class "ap-display-l"} "The Studio")
                       (d/p {:class "ap-article__byline m-0"}
                            (d/span (t :landing/studio.byline))
                            (d/span (t :landing/studio.kind))))
             (d/div {:class "ap-article__body"}
                    (d/p {:class "ap-dropcap"} (t :landing/studio.p1)))
             ($ read-more {:label (t :landing/studio.more)}
                (d/div {:class "ap-article__body"}
                       (d/p (t :landing/studio.p2))
                       (d/p (t :landing/studio.p3))
                       (d/p (t :landing/studio.p4)))
                (d/blockquote {:class "ap-quote ap-wide !my-4"}
                              (d/p (t :landing/studio.quote))
                              (d/cite (t :landing/studio.quote-cite)))
                (d/div {:class "ap-article__body"}
                       (d/p (t :landing/studio.p5))
                       (d/p (t :landing/studio.p6))))))
