(ns amp.ui.footer
  "Site-wide footer (design system: Footer), rendered by the layout shell.
   A night band in both themes: the exhibition and a way to visit, a map of
   the whole site (pages and their main sections), contact and non-profit
   details, the Biennale mark and the legal line."
  (:require
   [amp.config]
   [amp.data.journal :as journal]
   [amp.lib.defnc :refer [defnc]]
   [amp.state.provider :refer [use-main-state]]
   [amp.ui.social-links :refer [social-links]]
   [amp.ui.studio-mark :refer [studio-mark-3d]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(def ^:private columns
  [{:title "The exhibition"
    :links [{:label "The Studio" :href "/"}
            {:label "The Unit" :href "/#unit"}
            {:label "Films" :href "/#film"}
            {:label "The essay" :href "/#about-studio"}
            {:label "In Minor Keys" :href "/#in-minor-keys"}
            {:label "Curators" :href "/#curators"}]}
   {:title "The artist"
    :links [{:label "Zadik Zadikian" :href "/artist"}
            {:label "Chronology" :href "/artist#chronology"}
            {:label "Armenian as well" :href "/armenian-as-well"}
            {:label "Portage" :href "/portage"}]}
   {:title "Visit"
    :links [{:label "Plan your visit" :href "/visit"}
            {:label "By water taxi" :href "/visit#taxi"}
            {:label "Water taxi card" :href "/route-from-hotel-gabrielli"}]}
   {:title "Journal & press"
    :links (conj (mapv (fn [{:keys [slug title]}] {:label title :href (str "/blog/" slug)})
                       (take 2 journal/posts))
                 {:label "All journal posts" :href "/blog"}
                 {:label "Press images" :href "/press"})}])

(defnc site-footer
  [_props]
  (let [[state _] (use-main-state)
        path (or (-> state :current-route :path) "/")]
    (d/footer
     {:class "ap-footer"}
     (d/div {:class "ap-hero__strip" :aria-hidden true}
            (for [i (range 9)] (d/i {:key i})))

     (d/div {:class "ap-footer__in"}
            (d/div {:class "ap-footer__lead"}
                   (d/a {:class "ap-footer__brand" :href "/"}
                        ($ studio-mark-3d {:variants #{:pigment} :label nil})
                        (d/span {:class "ap-label"} "Armenia Pavilion · Biennale Arte 2026"))
                   (d/p {:class "ap-display-l m-0"} "Zadik Zadikian: The Studio")
                   (d/p {:class "ap-footer__when ap-label m-0"}
                        (d/span "Arsenale Militare, Tesa 41, Venice")
                        (d/span "9 May – 22 November 2026"))
                   (d/div {:class "flex flex-wrap gap-2 mt-2"}
                          (d/a {:class "ap-btn ap-btn--yellow" :href "/visit"} "Plan your visit")
                          (d/a {:class "ap-btn ap-btn--ghost !text-on-night !border-on-night"
                                :href "/route-from-hotel-gabrielli"}
                               "Water taxi card")))

            (d/nav {:class "ap-footer__map" :aria-label "Site"}
                   (for [{:keys [title links]} columns]
                     (d/div {:key title}
                            (d/h2 {:class "ap-footer__h"} title)
                            (d/ul
                             (for [{:keys [label href]} links]
                               (d/li {:key href}
                                     (d/a {:href href
                                           :aria-current (when (= href path) "page")}
                                          label)))))))

            (d/div {:class "ap-footer__info"}
                   (d/div
                    (d/h2 {:class "ap-footer__h"} "Get in touch")
                    (d/ul
                     (d/li (d/a {:href "mailto:hello@armenianpavilion2026.org?subject=Let's%20connect"}
                                "hello@armenianpavilion2026.org"))
                     (d/li (d/a {:href "tel:+13234041152"} "+1 323-404-1152"))))
                   (d/div
                    (d/h2 {:class "ap-footer__h"} "501(c)(3) non-profit")
                    (d/p {:class "ap-body-s m-0"} "Fallen Angels Inc.")
                    (d/p {:class "ap-body-s m-0 opacity-70"} "EIN 92-2395513 · Los Angeles, CA"))
                   ($ social-links))

            (d/div {:class "ap-footer__base"}
                   (d/a {:href "https://www.labiennale.org/en/art/2026" :target "_blank" :rel "noopener"
                         :class "ap-footer__biennale"
                         :aria-label "La Biennale di Venezia — Biennale Arte 2026"}
                        (d/img {:src "/images/graphics/61_biennale_logo_line.svg"
                                :alt "Biennale Arte 2026"}))
                   (d/p {:class "ap-footer__legal"}
                        "Armenia Pavilion · 61st International Art Exhibition — La Biennale di Venezia"
                        (d/br)
                        "© 2026 AZ Studios Inc. · v" amp.config/git-hash)
                   (d/button {:type "button" :class "ap-footer__top ap-label"
                              :on-click #(.scrollTo js/window #js {:top 0 :behavior "smooth"})}
                             "Back to top ↑"))))))
