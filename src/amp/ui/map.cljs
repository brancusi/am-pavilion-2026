(ns amp.ui.map
  (:require ["react-map-gl/mapbox" :default ReactMapGL
             :refer [Marker NavigationControl Source Layer useMap]]
            ["gsap" :refer [gsap]]
            [helix.core :refer [$ <>]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [amp.lib.defnc :refer [defnc]]))

;; Mapbox's stylesheet is only needed once this module loads, so inject it
;; here rather than render-blocking every page from index.html.
(defonce ^:private stylesheet
  (let [href "https://api.mapbox.com/mapbox-gl-js/v3.18.1/mapbox-gl.css"]
    (when-not (js/document.querySelector (str "link[href='" href "']"))
      (let [link (js/document.createElement "link")]
        (set! (.-rel link) "stylesheet")
        (set! (.-href link) href)
        (.appendChild js/document.head link)))))

(def access-token"pk.eyJ1IjoiYXJhbXphZGlraWFuIiwiYSI6IkVhVERJS28ifQ.fpzwPGWJ9AWc1Jab8LeKPA")
;; Mapbox Standard, configured (`:config` on the map) to a quiet monochrome
;; base that follows the site theme, so our routes, pins and labels carry
;; the colour.
(def map-style "mapbox://styles/mapbox/standard")

(defn- dark-theme? []
  (.contains (.. js/document -documentElement -classList) "dark"))

(defn- resolve-color
  "Map paint can't read CSS variables: turn \"var(--x)\" into its current value."
  [c]
  (if-let [[_ v] (and (string? c) (re-matches #"var\((--[a-z-]+)\)" c))]
    (.trim (.getPropertyValue (js/getComputedStyle (.-documentElement js/document)) v))
    c))

(def ^:private emissive
  "Standard lights custom layers with its day/night scene; full emissive
   strength keeps our colours exact in both."
  {"fill" :fill-emissive-strength "line" :line-emissive-strength "circle" :circle-emissive-strength})

(defn- resolve-paint [type paint]
  (cond-> (update-vals (or paint {}) resolve-color)
    (emissive type) (assoc (emissive type) 1)))

(defn- use-dark-theme
  "Tracks the site's `dark` class on <html>."
  []
  (let [[dark? set-dark!] (hooks/use-state (dark-theme?))]
    (hooks/use-effect
     :once
     (let [obs (js/MutationObserver. #(set-dark! (dark-theme?)))]
       (.observe obs (.-documentElement js/document) #js {:attributes true :attributeFilter #js ["class"]})
       #(.disconnect obs)))
    dark?))

(defnc theme-sync
  "Keeps the basemap's light preset in step with the site theme.
   Must be rendered inside a <Map>."
  [{:keys [dark?]}]
  (let [current (.-current (useMap))]
    (hooks/use-effect
     [current dark?]
     (when current
       (try (.setConfigProperty ^js (.getMap ^js current) "basemap" "lightPreset" (if dark? "night" "day"))
            (catch :default _))))
    nil))

(defnc html-labels
  "Point labels from the GeoJSON at `url` (features with a `label`
   property, optional `anchor`: top/left/right/bottom), drawn as HTML so
   they use the site's type and theme colours; the pavilion's label is red."
  [{:keys [url]}]
  (let [[features set-features!] (hooks/use-state [])]
    (hooks/use-effect
     [url]
     (-> (js/fetch url)
         (.then #(.json %))
         (.then (fn [data]
                  (set-features!
                   (->> (.-features data)
                        (filter #(and (= "Point" (.. % -geometry -type))
                                      (.. % -properties -label)
                                      (not (contains? #{"Start" "End"} (.. % -properties -label)))))
                        vec))))
         (.catch (fn [_])))
     js/undefined)
    (<>
     (for [^js f features
           :let [props (.-properties f)
                 [lng lat] (.. f -geometry -coordinates)
                 anchor (or (.-anchor props) "bottom")
                 ;; Marker anchor is the side of the label touching the point.
                 marker-anchor ({"top" "top" "bottom" "bottom" "left" "left" "right" "right"} anchor "bottom")]]
       ($ Marker {:key (str lng lat) :longitude lng :latitude lat :anchor marker-anchor}
          (d/span {:class (str "ap-maplabel ap-maplabel--" anchor
                               (when (re-find #"Pavilion|Padiglione" (.-label props)) " ap-maplabel--pavilion"))}
                  (.-label props)))))))

(def venice-arsenale
  {:longitude 12.3525
   :latitude 45.4345
   :zoom 15.5})

(defnc geojson-layer
  "Renders a single GeoJSON source + layer pair.
   Expects :source {:id \"src-id\" :url \"/data/file.geojson\"}
           :layer  {:id \"layer-id\" :type \"fill\"
                    :paint  {...}    ;; fill-color, line-width, etc.
                    :layout {...}}   ;; text-field, text-size, etc. (for symbol layers)"
  [{:keys [source layer]}]
  (let [layer-props (clj->js (cond-> {:id (:id layer)
                                      :type (:type layer)
                                      :source (:id source)}
                               true           (assoc :paint (resolve-paint (:type layer) (:paint layer)))
                               (:layout layer) (assoc :layout (:layout layer))
                               (:filter layer) (assoc :filter (:filter layer))))]
    ($ Source {:id (:id source)
               :type "geojson"
               :data (:url source)}
       ($ Layer {& layer-props}))))

(def ^:private dash-period
  "Total period of the dash pattern: dash(3) + gap(4) = 7."
  7)

(defn- clamp-min
  "Clamp n to at least mn."
  [n mn]
  (if (< n mn) mn n))

(defn phase->dasharray
  "Compute a continuous line-dasharray from a phase value 0→period.
   Dash=3, gap=4, period=7. Always returns a 4-element JS array
   (even count) so Mapbox keeps a constant period of 7.
   Values are clamped to a minimum epsilon to avoid zero-length
   dash/gap segments which can cause Mapbox rendering artifacts."
  [phase]
  (let [e 0.01
        p (mod phase dash-period)]
    (if (<= p 3)
      #js [(clamp-min p e) 4 (clamp-min (- 3 p) e) e]
      #js [e (clamp-min (- p 3) e) 3 (clamp-min (- 7 p) e)])))

(defnc ant-path
  "Animated ant-march line using native Mapbox line-dasharray + GSAP.
   Renders two line layers (background + dashed) on the same source
   and animates the dasharray with GSAP for the marching effect.
   Must be rendered inside a <Map> component.
   Props:
     :source-id  - unique source identifier for the line data
     :url        - GeoJSON data url
     :filter     - optional Mapbox expression filter for features
     :color      - line color (default \"#fbbf24\")
     :width      - line width (default 4)
     :bg-opacity - background line opacity (default 0.4)
     :duration   - full animation cycle in seconds (default 2)
     :dash-color - colour of the moving dashes (defaults to :color)
     :casing     - optional outline colour drawn 4px wider beneath the line"
  [{:keys [source-id url filter color width bg-opacity duration dash-color casing dark?]
    :or {color "#fbbf24" width 4 bg-opacity 0.4 duration 2}}]
  (let [current (.-current (useMap))
        color (resolve-color color)
        dash-color (resolve-color dash-color)
        casing (resolve-color casing)
        casing-id (str source-id "-casing")
        bg-id (str source-id "-bg")
        dash-id (str source-id "-dash")]

    (hooks/use-effect
     [current source-id url dark?]
     (when current
       (let [^js map-obj (.getMap ^js current)
             proxy #js {:phase 0}

             setup!
             (fn []
               ;; Add GeoJSON source
               (when-not (.getSource ^js map-obj source-id)
                 (.addSource ^js map-obj source-id
                             #js {:type "geojson" :data url}))

               ;; Casing — a darker outline under the route
               (when (and casing (not (.getLayer ^js map-obj casing-id)))
                 (.addLayer ^js map-obj
                            (clj->js (cond-> {:id casing-id
                                              :type "line"
                                              :source source-id
                                              :layout {:line-join "round" :line-cap "round"}
                                              :paint {:line-color casing
                                                      :line-width (+ width 4)
                                                      :line-emissive-strength 1}}
                                       filter (assoc :filter filter)))))

               ;; Background line — fills the gaps in the dashed line
               (when-not (.getLayer ^js map-obj bg-id)
                 (.addLayer ^js map-obj
                            (clj->js (cond-> {:id bg-id
                                              :type "line"
                                              :source source-id
                                              :paint {:line-color color
                                                      :line-width width
                                                      :line-opacity bg-opacity
                                                      :line-emissive-strength 1}}
                                       filter (assoc :filter filter)))))

               ;; Dashed line — animated with GSAP
               (when-not (.getLayer ^js map-obj dash-id)
                 (.addLayer ^js map-obj
                            (clj->js (cond-> {:id dash-id
                                              :type "line"
                                              :source source-id
                                              :paint {:line-color (or dash-color color)
                                                      :line-width width
                                                      :line-dasharray [0 4 3]
                                                      :line-emissive-strength 1}}
                                       filter (assoc :filter filter)))))

               ;; GSAP ticker drives the animation for perfectly smooth looping.
               ;; Using elapsed time + mod avoids any restart discontinuity.
               (let [start-time (atom nil)
                     speed (/ dash-period duration)
                     tick-fn (fn []
                               (when-not @start-time
                                 (reset! start-time (.now js/Date)))
                               (let [elapsed (/ (- (.now js/Date) @start-time) 1000)
                                     phase (mod (* elapsed speed) dash-period)]
                                 (when (.getLayer ^js map-obj dash-id)
                                   (.setPaintProperty ^js map-obj
                                                      dash-id
                                                      "line-dasharray"
                                                      (phase->dasharray phase))
                                   (.triggerRepaint ^js map-obj))))]
                 (.add (.-ticker gsap) tick-fn)
                 ;; Store tick-fn on proxy so cleanup can remove it
                 (set! (.-tickFn proxy) tick-fn)))]

         ;; Only rendered after the map's load event, so the style is ready.
         (setup!)

         ;; Cleanup: remove ticker, layers & source
         (fn []
           (when (.-tickFn proxy)
             (.remove (.-ticker gsap) (.-tickFn proxy)))
           (try
             (when (.getLayer ^js map-obj dash-id) (.removeLayer ^js map-obj dash-id))
             (when (.getLayer ^js map-obj bg-id) (.removeLayer ^js map-obj bg-id))
             (when (.getLayer ^js map-obj casing-id) (.removeLayer ^js map-obj casing-id))
             (when (.getSource ^js map-obj source-id) (.removeSource ^js map-obj source-id))
             (catch :default _))))))

    ;; Purely imperative — renders nothing
    nil))

(defnc dev-info-widget
  "Dev overlay showing current lng/lat/zoom with copy-to-clipboard."
  [{:keys [view-state]}]
  (let [[copied? set-copied!] (hooks/use-state false)
        fmt (fn [n decimals] (.toFixed n decimals))
        clj-str (str "{:longitude " (fmt (:longitude view-state) 6) "\n"
                     " :latitude  " (fmt (:latitude view-state) 6) "\n"
                     " :zoom      " (fmt (:zoom view-state) 1) "}")]
    (d/div {:class "absolute bottom-2 left-2 z-20 bg-black/80 text-white font-mono text-xs
                    p-2 flex items-center gap-2 select-none"}
           (d/span {} (str (fmt (:latitude view-state) 6)
                           ", " (fmt (:longitude view-state) 6)
                           " z" (fmt (:zoom view-state) 1)))
           (d/button {:class "px-2 py-0.5 bg-white/20 hover:bg-white/30 transition-colors
                             cursor-pointer text-[10px] uppercase tracking-wider"
                      :on-click (fn [_]
                                  (-> (js/navigator.clipboard.writeText clj-str)
                                      (.then (fn []
                                               (set-copied! true)
                                               (js/setTimeout #(set-copied! false) 1500)))))}
                     (if copied? "copied!" "copy")))))

(defnc mapbox-map
  "An interactive Mapbox map centered on the Arsenale in Venice.
   Accepts:
     :class        - extra Tailwind classes for the outer container
     :initial-view - {:longitude _ :latitude _ :zoom _} (defaults to Arsenale)
     :dev          - when true, shows a lat/lng/zoom widget with copy-to-clipboard
     :interactive? - when false, disables all map interactions (default true)
     :layers       - vector of source+layer maps for declarative GeoJSON layers
     :ant-paths    - vector of ant-path configs, e.g.
                     [{:source-id \"dir\" :url \"/data/geo.geojson\"
                       :filter [\"==\" [\"geometry-type\"] \"LineString\"]
                       :color \"#fbbf24\" :width 4 :duration 2}]
     :bounds       - optional [[west south] [east north]]; when given, the
                     camera is fitted to these bounds once the map loads (with
                     :bounds-padding px, default 32) so the framing adapts to
                     the viewport. :initial-view is the pre-load camera.
     :bounds-padding - number or {:top _ :bottom _ :left _ :right _}"
  [{:keys [class initial-view dev interactive? layers ant-paths bounds bounds-padding labels-url]
    :or {interactive? true bounds-padding 32}}]
  (let [dark? (use-dark-theme)
        [view-state set-view-state!] (hooks/use-state (merge venice-arsenale initial-view))
        [map-loaded? set-map-loaded!] (hooks/use-state false)
        container (hooks/use-ref nil)
        map-ref (hooks/use-ref nil)
        ;; The camera is controlled by `view-state`, so ask Mapbox for the
        ;; camera that fits `bounds` and feed it into state (an imperative
        ;; fitBounds would be overridden by the controlled props).
        fit! (fn [^js m]
               (when bounds
                 (when-let [cam (.cameraForBounds m (clj->js bounds) (clj->js {:padding bounds-padding}))]
                   (let [center (.-center ^js cam)]
                     (set-view-state!
                      (fn [vs]
                        (assoc vs
                               :longitude (.-lng ^js center)
                               :latitude  (.-lat ^js center)
                               :zoom      (.-zoom ^js cam))))))))]
    ;; The container's size can settle after the map is created (aspect-ratio
    ;; boxes, lazy layout): resize the canvas and re-fit the bounds.
    (hooks/use-effect
     [map-loaded?]
     (when (and map-loaded? @container)
       (let [ro (js/ResizeObserver.
                 (fn [_]
                   (when-let [^js m @map-ref]
                     (.resize m)
                     (fit! m))))]
         (.observe ro @container)
         #(.disconnect ro))))
    ;; Sync initial-view prop into state on hot-reload / prop changes
    (hooks/use-effect
     [initial-view]
     (set-view-state! (merge venice-arsenale initial-view)))

    (d/div {:ref container :class (str "ap-mapbox relative w-full h-[70vh] overflow-hidden " class)}
           (when dev
             ($ dev-info-widget {:view-state view-state}))
           ($ ReactMapGL
              {:mapboxAccessToken access-token
               :mapStyle map-style
               ;; Basemap config, set up front so the default colours never
               ;; flash in. `theme-sync` switches the light preset later.
               :config #js {:basemap #js {:theme "monochrome"
                                          :lightPreset (if dark? "night" "day")
                                          :showPointOfInterestLabels false
                                          :showTransitLabels false
                                          :showPedestrianRoads false
                                          :show3dObjects false
                                          :font "Roboto Mono"}}
               :longitude (:longitude view-state)
               :latitude (:latitude view-state)
               :zoom (:zoom view-state)
               :onMove (fn [e] (set-view-state! (js->clj (.-viewState e) :keywordize-keys true)))
               :onLoad (fn [e]
                         (reset! map-ref (.-target e))
                         (.resize ^js (.-target e))
                         (fit! (.-target e))
                         (set-map-loaded! true))
               :style #js {:width "100%" :height "100%"}
               :scrollZoom interactive?
               :boxZoom interactive?
               :dragRotate interactive?
               :dragPan interactive?
               :keyboard interactive?
               :doubleClickZoom interactive?
               :touchZoomRotate interactive?
               :touchPitch interactive?
               :attributionControl false
               :logoPosition "bottom-left"
               :mapboxLogo false}
              (when interactive? ($ NavigationControl {:position "top-right" :showCompass false}))
              ($ theme-sync {:dark? dark?})
              (when (and map-loaded? labels-url) ($ html-labels {:url labels-url}))
              ;; Standard loads its imports asynchronously: add our sources
              ;; and layers only once the map reports it has loaded.
              (when (and map-loaded? (seq layers))
                (<>
                 (for [layer-cfg layers]
                   ($ geojson-layer {:key (str (-> layer-cfg :layer :id) dark?)
                                     :source (:source layer-cfg)
                                     :layer (:layer layer-cfg)}))))
              ;; Defer ant-path rendering until the map has fully loaded.
              ;; This prevents a race where useMap().current is null on
              ;; the first render (common on lazy-loaded route pages).
              (when (and map-loaded? (seq ant-paths))
                (<>
                 (for [path-cfg ant-paths]
                   ($ ant-path {:key (:source-id path-cfg)
                                :dark? dark?
                                & path-cfg}))))))))
