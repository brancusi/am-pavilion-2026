(ns amp.ui.footer
  "Site-wide footer (design system: Footer), rendered by the layout shell.
   A night band in both themes: red donate block, link columns, contact and
   non-profit details, partner marks and the legal line."
  (:require
   [amp.config]
   [amp.lib.defnc :refer [defnc]]
   [amp.services.router :as router]
   [amp.state.provider :refer [use-main-state]]
   [amp.ui.social-links :refer [social-links]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [reitit.frontend.easy :as rfe]))

(def ^:private columns
  [{:title "Exhibition"
    :links [{:label "The Studio" :href "/"}
            {:label "Artist"     :href "/artist"}
            {:label "Press"      :href "/press"}]}
   {:title "Visit"
    :links [{:label "Getting there"   :href "/visit"}
            {:label "Water taxi" :href "/visit"}]}
   {:title "More"
    :links [{:label "Journal" :href "/blog"}
            {:label "Budget"  :href "/budget"}
            {:label "Donate"  :href "/donate"}]}])

(defnc site-footer
  [_props]
  (let [[state _] (use-main-state)
        donations-page? (= (-> state :current-route :data :name) ::router/donate)]
    (d/footer
     {:class "ap-footer"}

     ;; The donate page carries this message itself.
     (when-not donations-page?
       (d/div {:class "ap-footer__donate"}
              (d/p {:class "ap-label m-0"} "Support the pavilion")
              (d/p {:class "ap-h2 m-0"} "Help bring The Studio to Venice.")
              (d/p {:class "ap-body-s m-0"}
                   "Your contribution directly supports Armenia’s national presentation at Biennale Arte 2026.")
              (d/a {:class "ap-btn self-start" :href (rfe/href ::router/donate)}
                   "Donate")))

     (d/div {:class (str "ap-footer__cols" (when donations-page? " lg:col-span-2"))}
            (for [{:keys [title links]} columns]
              (d/div {:key title}
                     (d/h4 title)
                     (d/ul
                      (for [{:keys [label href]} links]
                        (d/li {:key label} (d/a {:href href} label)))))))

     (d/div {:class "grid gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-3"}
            (d/div {:class "ap-footer__cols !grid-cols-1 !gap-2"}
                   (d/div
                    (d/h4 "Get in touch")
                    (d/ul
                     (d/li (d/a {:href "mailto:hello@armenianpavilion2026.org?subject=Let's%20connect"}
                                "hello@armenianpavilion2026.org"))
                     (d/li (d/a {:href "tel:+13234041152"} "+1 323-404-1152")))))
            (d/div {:class "ap-footer__cols !grid-cols-1 !gap-2"}
                   (d/div
                    (d/h4 "501(c)(3) non-profit")
                    (d/p {:class "ap-body-s m-0"} "Fallen Angels Inc.")
                    (d/p {:class "ap-caption m-0 !text-on-night opacity-80"} "EIN 92-2395513 · Los Angeles, CA")))
            (d/div ($ social-links)))

     (d/div {:class "ap-footer__partners"}
            (d/a {:href "https://www.labiennale.org/en/art/2026" :target "_blank" :rel "noopener"
                  :aria-label "La Biennale di Venezia — Biennale Arte 2026"}
                 (d/img {:src "/images/graphics/61_biennale_logo_line.svg"
                         :alt "Biennale Arte 2026"})))

     (d/p {:class "ap-footer__legal"}
          "Armenia Pavilion · 61st International Art Exhibition — La Biennale di Venezia · "
          "Arsenale Militare, Tesa 41 · 9 May – 22 November 2026"
          (d/br)
          "© 2026 AZ Studios Inc. · v" amp.config/git-hash))))
