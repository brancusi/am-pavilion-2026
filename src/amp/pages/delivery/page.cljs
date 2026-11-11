(ns amp.pages.delivery.page
  "Delivery instructions for couriers and suppliers bringing materials to
   the Armenian Pavilion (Tesa 41, Arsenale Militare). Two options: on
   foot and by water (boat). Copy: resources/i18n/<locale>/delivery.json;
   the boat card can be switched to Italian with one tap on other locales.
   Lives at /delivery; not linked from the main nav."
  (:require
   [amp.i18n :as i18n :refer [t] :refer-macros [defcatalog]]
   [amp.pages.venue.map-config :as mc]
   [amp.ui.directions :refer [marine-office-phone]]
   [amp.ui.wayfinding :as wf]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]))

(defcatalog "delivery")

;; ── Data ───────────────────────────────────────────────────────────────────

(def secondary-contact
  {:name "Aram" :display "+39 344 5697130" :tel "+393445697130"})

;; What to write on the waybill: kept in Italian, like the postal address.
(def recipient-lines
  ["Padiglione Armenia"
   "Tesa 41 – Arsenale Militare"])

(def ^:private checklist
  [[:delivery/check.label-h :delivery/check.label-p]
   [:delivery/check.time-h :delivery/check.time-p]
   [:delivery/check.route-h :delivery/check.route-p]
   [:delivery/check.call-h :delivery/check.call-p]])

(defn- card-copy
  "The boat card's copy in locale `l`."
  [l]
  (let [c #(i18n/t-in l (keyword "delivery" (str "card." %)))]
    {:subtitle (c "subtitle")
     :before-title (c "before-title")
     :before-body (c "before-body")
     :before-quote (c "before-quote")
     :contacts [[(c "marine") marine-office-phone]]
     :entrance-title (c "entrance-title")
     :entrance-name (c "entrance-name")
     :entrance-body (c "entrance-body")
     :entrance-warn (c "entrance-warn")
     :steps-title (c "steps-title")
     :steps (mapv #(c (str "step-" %)) (range 1 6))
     :map-caption (c "map-caption")
     :legend [[:water (c "legend-water")] [:pav (c "legend-pav")]]}))

;; ── Sections ───────────────────────────────────────────────────────────────

(defnc essentials []
  (d/section {:class "ap-sec"}
             (d/div {:class "ap-wrap grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start"}
                    (d/div {:class "flex flex-col gap-8"}
                           (d/div {:class "grid sm:grid-cols-2 gap-8"}
                                  ($ wf/address {:title (t :delivery/recipient) :lines recipient-lines})
                                  ($ wf/address {:title (t :delivery/address)}))
                           ;; Which way
                           (d/div {:class "ap-options"}
                                  (d/a {:class "ap-option" :href "#a-piedi"}
                                       (d/span {:class "ap-label"} (t :delivery/opt1.label))
                                       (d/h3 {:class "ap-h2"} (t :delivery/opt1.title))
                                       (d/p {:class "ap-body-s m-0"} (t :delivery/opt1.body))
                                       (d/ul (d/li (t :delivery/opt1.li-1))
                                             (d/li (t :delivery/opt1.li-2))))
                                  (d/a {:class "ap-option ap-option--water" :href "#via-acqua"}
                                       (d/span {:class "ap-label"} (t :delivery/opt2.label))
                                       (d/h3 {:class "ap-h2"} (t :delivery/opt2.title))
                                       (d/p {:class "ap-body-s m-0"} (t :delivery/opt2.body))
                                       (d/ul (d/li (t :delivery/opt2.li-1))
                                             (d/li (t :delivery/opt2.li-2))))))
                    ($ wf/contacts {:title (t :delivery/contacts.title)
                                    :intro (t :delivery/contacts.intro)
                                    :items [[(t :delivery/contacts.marine) marine-office-phone]
                                            [(t :delivery/contacts.secondary {:name (:name secondary-contact)})
                                             secondary-contact
                                             (t :delivery/contacts.secondary-note)]]}))))

(defnc foot-section []
  (let [interactive? (use-touch-enabled)]
    (d/section {:class "ap-sec !pt-0" :id "a-piedi"}
               (d/div {:class "ap-wrap"}
                      ($ wf/section-head {:label (t :delivery/foot.label) :title (t :delivery/foot.title)
                                          :lede (t :delivery/foot.lede)})
                      (d/div {:class "ap-guide lg:!grid-cols-[1.4fr_1fr]"}
                             ($ wf/route-map
                                {:map {:interactive? interactive?
                                       :initial-view mc/delivery-initial-view
                                       :bounds mc/delivery-bounds
                                       :bounds-padding 56
                                       :ant-paths mc/delivery-ant-paths
                                       :layers mc/delivery-layers
                                       :labels-url mc/delivery-data-url}
                                 :legend [[:walk (t :delivery/foot.legend-walk)] [:pav (t :delivery/foot.legend-pav)]]
                                 :caption (t :delivery/foot.caption)
                                 :actions (<> (d/a {:class "ap-btn" :href mc/maps-url :target "_blank" :rel "noopener"}
                                                   (t :delivery/foot.open-maps)))})
                             (d/div {:class "flex flex-col gap-6"}
                                    (d/p {:class "ap-label ap-muted m-0"} (t :delivery/foot.steps-title))
                                    ($ wf/steps {:items (mapv #(t (keyword "delivery" (str "foot.step-" %))) (range 1 5))})))))))

(defnc water-section []
  (let [[l italian? set-italian!] (wf/use-card-locale)]
    (d/section {:class "ap-sec bg-paper-sunk" :id "via-acqua"}
               (d/div {:class "ap-wrap flex flex-col gap-6 !max-w-[880px]"}
                      (d/div
                       ($ wf/section-head {:label (t :delivery/water.label) :title (t :delivery/water.title)
                                           :lede (t :delivery/water.lede)})
                       ($ wf/card-lang-toggle {:italian? italian? :on-change set-italian!
                                               :to-italian (i18n/t-in "it" :delivery/card.show-it)
                                               :back (t :delivery/card.show-own)}))
                      ($ wf/driver-card {:lang l :c (card-copy l)})))))

(defnc checklist-section []
  (d/section {:class "ap-sec"}
             (d/div {:class "ap-wrap"}
                    ($ wf/section-head {:label (t :delivery/check.label) :title (t :delivery/check.title)})
                    (d/ol {:class "ap-checks"}
                          (for [[title body] checklist]
                            (d/li {:key (name title)}
                                  (d/h3 {:class "ap-h3"} (t title))
                                  (d/p {:class "ap-body-s m-0"} (t body)))))
                    (d/p {:class "ap-lede !mt-12 mb-0 max-w-[48ch]"}
                         (t :delivery/check.thanks)))))

;; ── Page ───────────────────────────────────────────────────────────────────

(defnc delivery-view
  [_props]
  (d/div {:class "bg-paper text-ink"}
         ($ wf/page-head
            {:eyebrow (t :delivery/head.eyebrow)
             :title (t :delivery/head.title)
             :lede (t :delivery/head.lede)
             :facts (for [k ["recipient" "hours" "foot" "water"]]
                      [(t (keyword "delivery" (str "facts." k)))
                       (t (keyword "delivery" (str "facts." k "-v")))])})
         ($ essentials)
         ($ foot-section)
         ($ water-section)
         ($ checklist-section)))
