(ns amp.pages.venue.map-config)

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
    :color "#c7630b"
    :width 4
    :bg-opacity 0.2
    :duration 2}])

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
             :paint {:fill-color "#b91c1c"
                     :fill-opacity 0.5}}}

   ;; Walking-route start marker
   {:source {:id "biennale-start" :url url}
    :layer  {:id "directions-start"
             :type "circle"
             :filter ["==" ["get" "marker"] "start"]
             :paint {:circle-radius 6
                     :circle-color "#0c0cd0"
                     :circle-stroke-width 2
                     :circle-stroke-color "#ffffff"}}}

   ;; Walking-route end marker
   {:source {:id "biennale-end" :url url}
    :layer  {:id "directions-end"
             :type "circle"
             :filter ["==" ["get" "marker"] "end"]
             :paint {:circle-radius 6
                     :circle-color "#ef4444"
                     :circle-stroke-width 2
                     :circle-stroke-color "#ffffff"}}}

   ;; Pavilion point markers
   {:source {:id "biennale-points" :url url}
    :layer  {:id "biennale-point"
             :type "circle"
             :filter ["all"
                      ["==" ["geometry-type"] "Point"]
                      ["!" ["has" "marker"]]]
             :paint {:circle-radius 8
                     :circle-color "#b91c1c"
                     :circle-stroke-width 2
                     :circle-stroke-color "#ffffff"}}}

   ;; Text labels
   {:source {:id "biennale-labels" :url url}
    :layer  {:id "biennale-label"
             :type "symbol"
             :filter ["all"
                      ["==" ["geometry-type"] "Point"]
                      ["!" ["has" "marker"]]]
             :layout {:text-field ["get" "label"]
                      :text-font ["Source Code Pro Semibold"]
                      :text-size 14
                      :text-offset [0 -1.5]
                      :text-anchor "bottom"
                      :text-allow-overlap true}
             :paint {:text-color "#be136e"
                     :text-halo-color "#ffffff"
                     :text-halo-width 5}}}])

(def layers (layers-for visitor-data-url))

;; ── Delivery map (/delivery) ───────────────────────────────────────────────
;; Shorter walking route that starts at the Arsenale Militare gate by the
;; Celestia church instead of the main Biennale entrance to the south.

(def delivery-data-url "/data/delivery_data.geojson")

(def delivery-initial-view
  {:longitude 12.350250
   :latitude  45.437300
   :zoom      17.2})

(def delivery-ant-paths (ant-paths-for delivery-data-url))
(def delivery-layers    (layers-for delivery-data-url))
