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
   [amp.ui.share-bar :refer [share-bar]]
   [amp.ui.social-links :refer [social-links]]
   [amp.ui.studio-mark :refer [studio-mark-3d]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def ^:private columns
  [{:title "The exhibition"
    :links [{:label "The Studio" :href "/"}
            {:label "The Unit" :href "/#unit"}
            {:label "Films" :href "/#film"}
            {:label "The essay" :href "/#about-studio"}
            {:label "In Minor Keys" :href "/#in-minor-keys"}
            {:label "Curators" :href "/#curators"}
            {:label "Supporters" :href "/#supporters"}]}
   {:title "The artist"
    :links [{:label "Zadik Zadikian" :href "/artist"}
            {:label "Chronology" :href "/artist#chronology"}
            {:label "Armenian as well" :href "/armenian-as-well"}
            {:label "Portage" :href "/portage"}
            {:label "Walks" :href "/walks"}]}
   {:title "Visit"
    :links [{:label "Plan your visit" :href "/visit"}
            {:label "By water taxi" :href "/visit#taxi"}
            {:label "Water taxi card" :href "/route-from-hotel-gabrielli"}]}
   {:title "Journal & press"
    :links (conj (mapv (fn [{:keys [slug title]}] {:label title :href (str "/blog/" slug)})
                       (take 2 journal/posts))
                 {:label "All journal posts" :href "/blog"}
                 {:label "Press" :href "/press"})}])

(def ^:private news-status
  {:sent    "Thank you. Check your inbox for an email to confirm."
   :invalid "That address doesn't look right. Please check it."
   :error   "Something went wrong. Please try again in a moment."})

(defnc newsletter
  "Sign-up for news and events. Posts to the Worker (/api/subscribe), which
   adds the address to Buttondown; Buttondown sends the confirmation email
   (double opt-in) and handles unsubscribing. The status line keeps its
   height whether or not it has text, so nothing moves."
  [_props]
  (let [[state set-state!] (hooks/use-state :idle)
        submit (fn [e]
                 (.preventDefault e)
                 (let [form (.-currentTarget e)
                       data (js/FormData. form)]
                   (set-state! :sending)
                   (-> (js/fetch "/api/subscribe"
                                 #js {:method "POST"
                                      :headers #js {"content-type" "application/json"}
                                      :body (js/JSON.stringify
                                             #js {:email (.get data "email")
                                                  :website (.get data "website")
                                                  :page (.-pathname js/location)})})
                       (.then (fn [res] (.then (.json res) (fn [body] [(.-ok res) body]))))
                       (.then (fn [[ok body]]
                                (if ok
                                  (do (.reset form) (set-state! :sent))
                                  (set-state! (if (= "invalid" (.-error body)) :invalid :error)))))
                       (.catch #(set-state! :error)))))]
    (d/section {:class "ap-footer__news" :aria-labelledby "ap-news-h"}
               (d/div
                (d/h2 {:id "ap-news-h" :class "ap-footer__h"} "News & events")
                (d/p {:class "ap-body-s m-0"}
                     "Exhibition news, events and what comes next for the studio. Occasional emails; leave any time."))
               (d/form {:class "ap-footer__form" :on-submit submit}
                       (d/label {:class "sr-only" :for "ap-news-email"} "Email address")
                       (d/input {:id "ap-news-email" :name "email" :type "email" :required true
                                 :autocomplete "email" :placeholder "your@email.com"})
                       ;; Honeypot: hidden from people, filled by bots.
                       (d/input {:class "ap-footer__hp" :name "website" :type "text"
                                 :tab-index -1 :autocomplete "off" :aria-hidden true})
                       (d/button {:class "ap-btn ap-btn--yellow" :type "submit"
                                  :disabled (= state :sending)}
                                 (if (= state :sending) "Sending…" "Subscribe"))
                       (d/p {:class "ap-footer__status" :role "status" :aria-live "polite"}
                            (get news-status state))))))

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
                        (d/span {:class "ap-label"} "Armenian Pavilion · Biennale Arte 2026"))
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

            ($ newsletter)

            (d/div {:class "ap-footer__info"}
                   (d/div
                    (d/h2 {:class "ap-footer__h"} "Get in touch")
                    (d/ul
                     (d/li (d/a {:href "mailto:hello@armenianpavilion2026.org?subject=Let's%20connect"}
                                "hello@armenianpavilion2026.org"))))
                   (d/div
                    (d/h2 {:class "ap-footer__h"} "501(c)(3) non-profit")
                    (d/p {:class "ap-body-s m-0"} "Fallen Angels Inc.")
                    (d/p {:class "ap-body-s m-0 opacity-70"} "Los Angeles, CA"))
                   ($ social-links)
                   (d/div
                    (d/h2 {:class "ap-footer__h"} "Share this site")
                    ($ share-bar {:title "Zadik Zadikian: The Studio. Armenian Pavilion, Biennale Arte 2026"
                                  :url   "https://armenianpavilion.org/"
                                  :label ""
                                  :class "ap-sharebar--night"})))

            (d/div {:class "ap-footer__base"}
                   (d/a {:href "https://www.labiennale.org/en/art/2026" :target "_blank" :rel "noopener"
                         :class "ap-footer__biennale"
                         :aria-label "La Biennale di Venezia — Biennale Arte 2026"}
                        ;; Sized up front, so the legal line beside it never moves.
                        (d/img {:src "/images/graphics/61_biennale_logo_line.svg"
                                :width 158 :height 146
                                :alt "Biennale Arte 2026"}))
                   (d/p {:class "ap-footer__legal"}
                        "Armenian Pavilion · 61st International Art Exhibition — La Biennale di Venezia"
                        (d/br)
                        "© 2026 AZ Studios Inc. · v" amp.config/git-hash)
                   (d/button {:type "button" :class "ap-footer__top ap-label"
                              :on-click #(.scrollTo js/window #js {:top 0 :behavior "smooth"})}
                             "Back to top ↑"))))))
