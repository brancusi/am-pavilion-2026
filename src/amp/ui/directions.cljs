(ns amp.ui.directions
  "Shared wayfinding data + small building blocks used by the Visit page
   (/visit) and the Italian delivery-instructions page (/delivery)."
  (:require
   [amp.pages.venue.map-config :as mc]
   [amp.ui.button :refer [main-button]]
   [amp.ui.icons :refer [MapPinIcon]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

;; ── Data ───────────────────────────────────────────────────────────────────

(def pavilion-address
  ["Armenian Pavilion"
   "Rio delle Galeazze"
   "Fondamenta Case Nuove"
   "Castello 2738/C"
   "Venezia"])

(def marine-office-phone
  {:display "+39 041 244 1595" :tel "+390412441595"})

(def water-taxi-map-src "/images/graphics/water_taxi_route.jpg")

;; ── Building blocks ────────────────────────────────────────────────────────

(defnc phone-link
  "Tap-to-call phone number."
  [{:keys [display tel]}]
  (d/a {:href (str "tel:" tel)
        :class (s/cx s/font-ui s/weight-semibold s/text-lg s/text-accent s/link-subtle s/nowrap-)}
       display))

(defnc map-button
  "Opens the Google Maps pin for Tesa 41 in a new tab."
  [{:keys [label]
    :or   {label "Navigate to the Pavilion"}}]
  (d/div {:class "mb-10 flex justify-center sm:justify-start"}
         (d/a {:href mc/maps-url
               :target "_blank"
               :rel "noopener noreferrer"}
              ($ main-button
                 {:children (d/span {:class "flex items-center gap-3"}
                                    ($ MapPinIcon {:class "w-5 h-5"})
                                    label)}))))

(defnc sub-heading
  "Secondary heading inside a directions section (ON FOOT / BY WATER TAXI)."
  [{:keys [text]}]
  (d/div {:class "flex items-center gap-4 mb-6"}
         (d/div {:class (s/cx s/divider-accent "w-8 shrink-0")})
         (d/h3 {:class s/heading-section} text)))

(defnc mini-heading
  "Tertiary heading for blocks inside a subsection."
  [{:keys [text warn?]}]
  (d/h4 {:class (s/cx s/heading-sm "mb-2" (when warn? s/text-danger))}
        (when warn? (d/span {:class "mr-2"} "⚠"))
        text))

(defnc address-block
  "Prominent postal address. First two lines are emphasised."
  [{:keys [title lines]
    :or   {lines pavilion-address}}]
  (d/div
   (when title ($ mini-heading {:text title}))
   (d/address {:class (s/cx s/font-display "not-italic leading-snug" s/text-secondary
                            "text-xl sm:text-2xl")}
              (map-indexed (fn [i line]
                             (d/span {:key i
                                      :class (when (< i 2) (s/cx s/weight-semibold s/text-inverse))}
                                     line
                                     (d/br)))
                           lines))))

(defnc callout
  "Bordered box for must-follow instructions."
  [{:keys [children]}]
  (d/div {:class (s/cx "border-l-2 pl-4 py-1" s/border-accent)}
         children))

(defnc numbered-steps
  [{:keys [steps]}]
  (d/ol {:class "space-y-3"}
        (map-indexed (fn [i step]
                       (d/li {:key i :class "flex gap-4"}
                             (d/span {:class (s/cx s/font-ui s/weight-semibold s/text-accent "shrink-0 w-5 text-right")}
                                     (inc i))
                             (d/span {:class (s/cx s/body-base "text-left")} step)))
                     steps)))
