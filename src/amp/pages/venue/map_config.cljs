(ns amp.pages.venue.map-config
  "Map data for the directions maps: GeoJSON urls, camera framing, route
   lines and pins. Point labels are drawn as HTML by amp.ui.map/html-labels
   from each file's `label` properties (pass :labels-url).")

;; ── Route colours (design system: MapGuide) ────────────────────────────────
;; Walking is solid yellow with an ink casing, water taxi is a marching blue
;; line, the pavilion is red.

;; Theme tokens, resolved to their current values by amp.ui.map (so the
;; routes and pins follow light/dark). Water uses the text blue, which is
;; lighter in the dark theme.
(def pigment
  {:yellow "var(--yellow)" :blue "var(--blue-text)" :red "var(--red)" :ink "var(--ink)" :paper "var(--paper)"})

;; ── Coordinates ────────────────────────────────────────────────────────────

(def tesa-41-coords
  "Tesa 41 pavilion location."
  {:latitude 45.436882 :longitude 12.350369})

(def maps-url
  "Universal Google Maps short link for Tesa 41 directions."
  "https://maps.app.goo.gl/XBwAbBQcj47eHyq5A")

;; ── Map view ───────────────────────────────────────────────────────────────

(def initial-view
  "Default center and zoom for the venue map."
  {:longitude 12.349872
   :latitude  45.436114
   :zoom      16.2})

;; ── Ant paths (animated walking route) ─────────────────────────────────────

(def visitor-data-url "/data/biennale_data.geojson")

(defn ant-paths-for
  "Animated walking-route ant path for the LineString in `url`."
  [url]
  [{:source-id "directions-ant"
    :url url
    :filter ["==" ["geometry-type"] "LineString"]
    :color (:yellow pigment)
    :dash-color "#fff6c2"
    :casing (:ink pigment)
    :width 5
    :bg-opacity 1
    :duration 2}])

(defn water-ant-paths-for
  "Marching water-taxi route for the LineString in `url`."
  [url]
  [{:source-id "water-ant"
    :url url
    :filter ["==" ["geometry-type"] "LineString"]
    :color (:blue pigment)
    :width 5
    :bg-opacity 0.3
    :duration 1.2}])

(def visitor-bounds
  "The walking route from the Piraeus Lion to Tesa 41; fitted on load so
   the whole route shows on any viewport."
  [[12.34842 45.43443] [12.35076 45.43802]])

(def ant-paths (ant-paths-for visitor-data-url))

;; ── GeoJSON layers ─────────────────────────────────────────────────────────

(defn layers-for
  "Declarative GeoJSON layers (footprint, start/end markers, pavilion pin,
   labels) for the features in `url`."
  [url]
  [;; Polygon fill — venue footprints
   {:source {:id "biennale" :url url}
    :layer  {:id "biennale-fill"
             :type "fill"
             :filter ["==" ["geometry-type"] "Polygon"]
             :paint {:fill-color (:red pigment)
                     :fill-opacity 0.5}}}

   ;; Walking-route start marker
   {:source {:id "biennale-start" :url url}
    :layer  {:id "directions-start"
             :type "circle"
             :filter ["==" ["get" "marker"] "start"]
             :paint {:circle-radius 6
                     :circle-color (:yellow pigment)
                     :circle-stroke-width 2
                     :circle-stroke-color (:ink pigment)}}}

   ;; Walking-route end marker
   {:source {:id "biennale-end" :url url}
    :layer  {:id "directions-end"
             :type "circle"
             :filter ["==" ["get" "marker"] "end"]
             :paint {:circle-radius 6
                     :circle-color (:red pigment)
                     :circle-stroke-width 2
                     :circle-stroke-color (:paper pigment)}}}

   ;; Pavilion point markers
   {:source {:id "biennale-points" :url url}
    :layer  {:id "biennale-point"
             :type "circle"
             :filter ["all"
                      ["==" ["geometry-type"] "Point"]
                      ["!" ["has" "marker"]]]
             :paint {:circle-radius 8
                     :circle-color (:red pigment)
                     :circle-stroke-width 2
                     :circle-stroke-color (:paper pigment)}}}])

(def layers (layers-for visitor-data-url))

;; ── Delivery map (/delivery) ───────────────────────────────────────────────
;; Shorter walking route that starts at the Arsenale Militare gate by the
;; Celestia church instead of the main Biennale entrance to the south.

(def delivery-data-url "/data/delivery_data.geojson")

(def delivery-initial-view
  {:longitude 12.350250
   :latitude  45.437300
   :zoom      17.2})

(def delivery-bounds
  [[12.34993 45.43674] [12.35076 45.43802]])

(def delivery-ant-paths (ant-paths-for delivery-data-url))
(def delivery-layers    (layers-for delivery-data-url))

;; ── Water taxi map (/route-from-hotel-gabrielli) ───────────────────────────
;; Hotel Gabrielli (Riva degli Schiavoni) → Rio della Pietà → Rio di
;; Sant'Antonin → Rio di Santa Giustina → North Lagoon → Rio delle Galeazze
;; → pavilion landing beside Tesa 41. Route geometry follows the OSM canal
;; centrelines; the lagoon leg sits just north of the marked channel.

(def water-taxi-data-url "/data/water_taxi_route.geojson")

(def water-taxi-initial-view
  "Frames the whole route: Riva degli Schiavoni at the bottom, the North
   Lagoon at the top."
  {:longitude 12.348900
   :latitude  45.437000
   :zoom      15.3})

(def water-taxi-bounds
  "Bounding box of the route line; the map fits this on load so the whole
   route is visible on any viewport."
  [[12.34535 45.43305] [12.35190 45.44012]])

(def galeazze-bounds
  "The last leg only: the Rio delle Galeazze entrance from the North Lagoon
   down to the pavilion landing (driver card, homepage teaser)."
  [[12.3492 45.4361] [12.3528 45.4398]])

(def water-taxi-ant-paths
  (water-ant-paths-for water-taxi-data-url))

(def water-taxi-layers
  "Tesa 41 footprint, start/end markers, and data-driven labels (each label
   point carries an `anchor` property so labels sit clear of the route)."
  [;; Tesa 41 footprint
   {:source {:id "water-taxi-footprint" :url water-taxi-data-url}
    :layer  {:id "water-taxi-footprint-fill"
             :type "fill"
             :filter ["==" ["geometry-type"] "Polygon"]
             :paint {:fill-color (:red pigment)
                     :fill-opacity 0.5}}}

   ;; Start marker — Hotel Gabrielli landing
   {:source {:id "water-taxi-start" :url water-taxi-data-url}
    :layer  {:id "water-taxi-start-marker"
             :type "circle"
             :filter ["==" ["get" "marker"] "start"]
             :paint {:circle-radius 7
                     :circle-color (:blue pigment)
                     :circle-stroke-width 2
                     :circle-stroke-color (:paper pigment)}}}

   ;; End marker — pavilion landing
   {:source {:id "water-taxi-end" :url water-taxi-data-url}
    :layer  {:id "water-taxi-end-marker"
             :type "circle"
             :filter ["==" ["get" "marker"] "end"]
             :paint {:circle-radius 7
                     :circle-color (:red pigment)
                     :circle-stroke-width 2
                     :circle-stroke-color (:paper pigment)}}}])
