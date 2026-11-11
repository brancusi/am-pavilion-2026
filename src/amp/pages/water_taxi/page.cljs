(ns amp.pages.water-taxi.page
  "Water-taxi directions from Hotel Gabrielli to the Armenian Pavilion.
   A single-purpose cut of the Visit page's directions: one departure
   point, one mode of transport, one route — with an animated Mapbox
   route and instructions to hand to the driver.

   The page follows the site locale (copy: resources/i18n/<locale>/
   water-taxi.json). The driver card can be switched to Italian with one
   tap on any other locale, since it is meant to be handed to the
   (Italian-speaking) driver as-is.
   Lives at /route-from-hotel-gabrielli; not linked from the main nav."
  (:require
   [amp.i18n :as i18n :refer [t] :refer-macros [defcatalog]]
   [amp.pages.venue.map-config :as mc]
   [amp.ui.directions :refer [hotel-gabrielli-address julda-contact luca-contact aram-contact]]
   [amp.ui.wayfinding :as wf]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defcatalog "water-taxi")

(defn- rich
  "A message whose <b> spans are set in medium weight."
  [k]
  (t k {:b (i18n/tag "strong" {:className "font-medium"})}))

(defn- card-copy
  "The driver card's copy in locale `l`."
  [l]
  (let [c #(i18n/t-in l (keyword "water-taxi" (str "card." %)))]
    {:subtitle (c "subtitle")
     :authorized [(c "authorized-1") (c "authorized-2")]
     :before-title (c "before-title")
     :before-body (c "before-body")
     :before-quote (c "before-quote")
     :contacts [[(c "julda") julda-contact]
                [(c "luca") luca-contact]]
     :before-note (c "before-note")
     :entrance-title (c "entrance-title")
     :entrance-name (c "entrance-name")
     :entrance-body (c "entrance-body")
     :entrance-warn (c "entrance-warn")
     :steps-title (c "steps-title")
     :steps (mapv #(c (str "step-" %)) (range 1 7))
     :legend [[:water (c "legend-water")] [:pav (c "legend-pav")]]}))

;; ── Sections ───────────────────────────────────────────────────────────────

(defnc essentials []
  (d/section {:class "ap-sec"}
             (d/div {:class "ap-wrap grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start"}
                    (d/div {:class "flex flex-col gap-8"}
                           (d/p {:class "ap-lede m-0"} (rich :water-taxi/intro))
                           (d/div {:class "grid sm:grid-cols-2 gap-8"}
                                  ($ wf/address {:title (t :water-taxi/from-title) :lines hotel-gabrielli-address})
                                  ($ wf/address {:title (t :water-taxi/to-title)})))
                    ($ wf/contacts {:title (t :water-taxi/contacts.title)
                                    :intro (t :water-taxi/contacts.intro)
                                    :items [[(t :water-taxi/contacts.primary) julda-contact]
                                            [(t :water-taxi/contacts.secondary) luca-contact]
                                            [(t :water-taxi/contacts.third) aram-contact (t :water-taxi/contacts.third-note)]]}))))

(defnc route []
  (let [interactive? (use-touch-enabled)]
    (d/section {:class "ap-sec !pt-0"}
               (d/div {:class "ap-wrap"}
                      ($ wf/section-head {:label (t :water-taxi/route.eyebrow) :title (t :water-taxi/route.title)
                                          :lede (rich :water-taxi/route.body)})
                      ($ wf/route-map
                         {:tall? true
                          :map {:interactive? interactive?
                                :initial-view mc/water-taxi-initial-view
                                :bounds mc/water-taxi-bounds
                                :bounds-padding {:top 48 :bottom 48 :left 32 :right 32}
                                :ant-paths mc/water-taxi-ant-paths
                                :layers mc/water-taxi-layers
                                :labels-url mc/water-taxi-data-url}
                          :legend [[:water (t :water-taxi/route.legend-water)]
                                   [:start (t :water-taxi/route.legend-start)]
                                   [:pav (t :water-taxi/route.legend-pav)]]
                          :caption (t :water-taxi/route.caption)})))))

(defnc driver []
  (let [[l italian? set-italian!] (wf/use-card-locale true)]
    (d/section {:class "ap-sec bg-paper-sunk" :id "driver"}
               (d/div {:class "ap-wrap flex flex-col gap-6 !max-w-[880px]"}
                      (d/div
                       ($ wf/section-head {:label (t :water-taxi/driver.eyebrow) :title (t :water-taxi/driver.title)
                                           :lede (t :water-taxi/driver.intro)})
                       ($ wf/card-lang-toggle {:italian? italian? :on-change set-italian!
                                               :to-italian (i18n/t-in "it" :water-taxi/card.show-it)
                                               :back (t :water-taxi/card.show-own)}))
                      ($ wf/driver-card {:lang l :c (card-copy l)})))))

;; ── Page ───────────────────────────────────────────────────────────────────

(defnc water-taxi-view
  [_props]
  (d/div {:class "bg-paper text-ink"}
         ($ wf/page-head {:eyebrow (t :water-taxi/head.eyebrow)
                          :title (t :water-taxi/head.title)
                          :lede (rich :water-taxi/head.lede)
                          :facts (for [k ["from" "to" "time" "hours"]]
                                   [(t (keyword "water-taxi" (str "facts." k)))
                                    (t (keyword "water-taxi" (str "facts." k "-v")))])})
         ($ essentials)
         ($ route)
         ($ driver)))
