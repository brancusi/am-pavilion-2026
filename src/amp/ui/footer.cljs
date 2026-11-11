(ns amp.ui.footer
  "Site-wide footer (design system: Footer), rendered by the layout shell.
   A night band in both themes: the exhibition and a way to visit, a map of
   the whole site (pages and their main sections), contact and non-profit
   details, the Biennale mark and the legal line."
  (:require
   [amp.config]
   [amp.data.journal :as journal]
   [amp.i18n :as i18n :refer [t ts] :refer-macros [defcatalog]]
   [amp.ui.lang-switch :refer [lang-switch]]
   [amp.lib.defnc :refer [defnc]]
   [amp.state.provider :refer [use-main-state]]
   [amp.ui.share-bar :refer [share-bar]]
   [amp.ui.social-links :refer [social-links]]
   [amp.ui.studio-mark :refer [studio-mark-3d]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defcatalog "footer")

(defn- columns
  "The site map, in the current locale (hrefs without the locale prefix)."
  []
  [{:title :footer/col-exhibition
    :links [{:label :footer/studio :href "/"}
            {:label :footer/unit :href "/#unit"}
            {:label :footer/films :href "/#film"}
            {:label :footer/essay :href "/#about-studio"}
            {:label :footer/in-minor-keys :href "/#in-minor-keys"}
            {:label :footer/curators :href "/#curators"}
            {:label :footer/supporters :href "/#supporters"}]}
   {:title :footer/col-artist
    :links [{:label :footer/zadikian :href "/artist"}
            {:label :footer/chronology :href "/artist#chronology"}
            {:label :footer/armenian-as-well :href "/armenian-as-well"}
            {:label :footer/portage :href "/portage"}
            {:label :footer/walks :href "/walks"}]}
   {:title :footer/col-visit
    :links [{:label :footer/plan :href "/visit"}
            {:label :footer/by-taxi :href "/visit#taxi"}
            {:label :footer/taxi-card :href "/route-from-hotel-gabrielli"}]}
   {:title :footer/col-journal
    :links (conj (mapv (fn [{:keys [slug title]}] {:text title :href (str "/blog/" slug)})
                       (take 2 (journal/posts)))
                 {:label :footer/all-posts :href "/blog"}
                 {:label :footer/press :href "/press"})}])

(def news-status
  {:sent    :footer/news-sent
   :invalid :footer/news-invalid
   :error   :footer/news-error})

(defn use-subscribe
  "[state submit] for a sign-up form with `email` and `website` (honeypot)
   fields. Posts to the Worker (/api/subscribe), which adds the address to
   Buttondown with `tags` (e.g. [\"walks\"]); Buttondown sends the
   confirmation email (double opt-in) and handles unsubscribing. state is
   :idle, :sending, :sent, :invalid or :error."
  [tags]
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
                                                  :tags (clj->js (or tags []))
                                                  :page (.-pathname js/location)})})
                       (.then (fn [res] (.then (.json res) (fn [body] [(.-ok res) body]))))
                       (.then (fn [[ok body]]
                                (if ok
                                  (do (.reset form) (set-state! :sent))
                                  (set-state! (if (= "invalid" (.-error body)) :invalid :error)))))
                       (.catch #(set-state! :error)))))]
    [state submit]))

(defnc newsletter
  "Sign-up for news and events. The status line keeps its height whether or
   not it has text, so nothing moves."
  [_props]
  (let [[state submit] (use-subscribe nil)]
    (d/section {:class "ap-footer__news" :aria-labelledby "ap-news-h"}
               (d/div
                (d/h2 {:id "ap-news-h" :class "ap-footer__h"} (t :footer/news-title))
                (d/p {:class "ap-body-s m-0"} (t :footer/news-text)))
               (d/form {:class "ap-footer__form" :on-submit submit}
                       (d/label {:class "sr-only" :for "ap-news-email"} (t :footer/news-email))
                       (d/input {:id "ap-news-email" :name "email" :type "email" :required true
                                 :auto-complete "email" :placeholder (ts :footer/news-placeholder)})
                       ;; Honeypot: hidden from people, filled by bots.
                       (d/input {:class "ap-footer__hp" :name "website" :type "text"
                                 :tab-index -1 :auto-complete "off" :aria-hidden true})
                       (d/button {:class "ap-btn ap-btn--yellow" :type "submit"
                                  :disabled (= state :sending)}
                                 (t (if (= state :sending) :footer/news-sending :footer/news-subscribe)))
                       (d/p {:class "ap-footer__status" :role "status" :aria-live "polite"}
                            (some-> (get news-status state) t))))))

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
                   (d/a {:class "ap-footer__brand" :href (i18n/href "/")}
                        ($ studio-mark-3d {:variants #{:pigment} :label nil})
                        (d/span {:class "ap-label"} (t :footer/brand)))
                   (d/p {:class "ap-display-l m-0"} "Zadik Zadikian: The Studio")
                   (d/p {:class "ap-footer__when ap-label m-0"}
                        (d/span (t :footer/where))
                        (d/span (t :footer/dates)))
                   (d/div {:class "flex flex-wrap gap-2 mt-2"}
                          (d/a {:class "ap-btn ap-btn--yellow" :href (i18n/href "/visit")} (t :footer/plan))
                          (d/a {:class "ap-btn ap-btn--ghost !text-on-night !border-on-night"
                                :href (i18n/href "/route-from-hotel-gabrielli")}
                               (t :footer/taxi-card))))

            (d/nav {:class "ap-footer__map" :aria-label (ts :footer/site)}
                   (for [{:keys [title links]} (columns)]
                     (d/div {:key title}
                            (d/h2 {:class "ap-footer__h"} (t title))
                            (d/ul
                             (for [{:keys [label text href]} links
                                   :let [href (i18n/href href)]]
                               (d/li {:key href}
                                     (d/a {:href href
                                           :aria-current (when (= href path) "page")}
                                          (or text (t label)))))))))

            ($ newsletter)

            (d/div {:class "ap-footer__info"}
                   (d/div
                    (d/h2 {:class "ap-footer__h"} (t :footer/contact))
                    (d/ul
                     (d/li (d/a {:href "mailto:hello@armenianpavilion2026.org?subject=Let's%20connect"}
                                "hello@armenianpavilion2026.org"))))
                   (d/div
                    (d/h2 {:class "ap-footer__h"} (t :footer/nonprofit))
                    (d/p {:class "ap-body-s m-0"} "Fallen Angels Inc.")
                    (d/p {:class "ap-body-s m-0 opacity-70"} (t :footer/los-angeles)))
                   ($ social-links)
                   (d/div
                    (d/h2 {:class "ap-footer__h"} (t :footer/language))
                    ($ lang-switch {:class "ap-lang--night"}))
                   (d/div
                    (d/h2 {:class "ap-footer__h"} (t :footer/share))
                    ($ share-bar {:title (ts :footer/share-title)
                                  :url   (str "https://armenianpavilion.org" (i18n/href "/"))
                                  :label ""
                                  :class "ap-sharebar--night"})))

            (d/div {:class "ap-footer__base"}
                   (d/a {:href "https://www.labiennale.org/en/art/2026" :target "_blank" :rel "noopener"
                         :class "ap-footer__biennale"
                         :aria-label (ts :footer/biennale-label)}
                        ;; Sized up front, so the legal line beside it never moves.
                        (d/img {:src "/images/graphics/61_biennale_logo_line.svg"
                                :width 158 :height 146
                                :alt "Biennale Arte 2026"}))
                   (d/p {:class "ap-footer__legal"}
                        (t :footer/legal)
                        (d/br)
                        "© 2026 AZ Studios Inc. · v" amp.config/git-hash)
                   (d/button {:type "button" :class "ap-footer__top ap-label"
                              :on-click #(.scrollTo js/window #js {:top 0 :behavior "smooth"})}
                             (t :footer/top)))))))
