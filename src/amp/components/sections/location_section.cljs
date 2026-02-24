(ns amp.components.sections.location-section
  "Public-facing venue section — Tesa 41 & the Arsenale crossing.
   Adapted from the budget location module for the landing page."
  (:require
   [amp.components.elements.expandable-text-area :refer [expandable-text-area-2]]
   [amp.components.maps.mapbox-map :refer [mapbox-map]]
   [amp.components.media.lazy-image-gallery :refer [lazy-image-gallery]]
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def lazy-video (lazy-component amp.components.elements.video-background/video-background))

;; ── Preview copy ───────────────────────────────────────────────────────────

(defnc preview
  [{:keys []}]
  (d/div {:class "px-4"}
         (d/p {:class (s/cx s/body-lg "mb-6")}
              "The Armenia Pavilion 2026 is located across "
              (d/span {:class s/em-strong} "two sites")
              " within the historic "
              (d/span {:class s/em-strong} "Arsenale of Venice")
              "—a grand interior studio and a prominent exterior crossing. "
              "Together they form a single spatial constellation: "
              (d/span {:class s/em-italic}
                      "a place for study, for work, to create, share and exhibit")
              ".")))

;; ── Full details ───────────────────────────────────────────────────────────

(defnc details
  [{:keys []}]
  (let [is-desktop? (use-touch-enabled)]
    (d/div
     {:class "space-y-8"}

     ;; Intro paragraph
     (d/div {:class "px-4"}
            (d/p {:class (s/cx s/body-lg "mb-6")}
                 "The Armenia Pavilion 2026 is located across "
                 (d/span {:class s/em-strong} "two sites")
                 " within the historic "
                 (d/span {:class s/em-strong} "Arsenale of Venice")
                 "—a grand interior studio and a prominent exterior crossing. "
                 "Together they form a single spatial constellation: "
                 (d/span {:class s/em-italic}
                         "a place for study, for work, to create, share and exhibit")
                 "."))

     ;; ── Map ────────────────────────────────────────────────────────────
     (d/div {:class "my-8"}
            ($ mapbox-map
               {:dev false
                :interactive? is-desktop?
                :initial-view {:longitude 12.349872
                               :latitude  45.436114
                               :zoom      16.2}

                :ant-paths
                [{:source-id "directions-ant"
                  :url "/data/biennale_data.geojson"
                  :filter ["==" ["geometry-type"] "LineString"]
                  :color "#c7630b"
                  :width 4
                  :bg-opacity 0.2
                  :duration 2}]

                :layers
                [;; Polygon fill — venue footprints
                 {:source {:id "biennale" :url "/data/biennale_data.geojson"}
                  :layer  {:id "biennale-fill"
                           :type "fill"
                           :filter ["==" ["geometry-type"] "Polygon"]
                           :paint {:fill-color "#b91c1c"
                                   :fill-opacity 0.5}}}

                 ;; Walking-route start marker
                 {:source {:id "biennale-start" :url "/data/biennale_data.geojson"}
                  :layer  {:id "directions-start"
                           :type "circle"
                           :filter ["==" ["get" "marker"] "start"]
                           :paint {:circle-radius 6
                                   :circle-color "#0c0cd0"
                                   :circle-stroke-width 2
                                   :circle-stroke-color "#ffffff"}}}

                 ;; Walking-route end marker
                 {:source {:id "biennale-end" :url "/data/biennale_data.geojson"}
                  :layer  {:id "directions-end"
                           :type "circle"
                           :filter ["==" ["get" "marker"] "end"]
                           :paint {:circle-radius 6
                                   :circle-color "#ef4444"
                                   :circle-stroke-width 2
                                   :circle-stroke-color "#ffffff"}}}

                 ;; Pavilion point markers
                 {:source {:id "biennale-points" :url "/data/biennale_data.geojson"}
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
                 {:source {:id "biennale-labels" :url "/data/biennale_data.geojson"}
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
                                   :text-halo-width 5}}}]})
            (d/p {:class (s/cx s/font-ui s/text-sm s/em-italic "mt-4 px-4")}
                 "* Walking path from the crossing to the pavilion — approximately 8 minutes"))

     ;; ── TESA 41 ────────────────────────────────────────────────────────
     (d/div {:class (s/cx s/text-xl "p-4")}
            (d/p {:class (s/cx s/heading-section "pb-4")}
                 "TESA 41")

            (d/div {:class "space-y-6"}
                   (d/p {}
                        (d/span {:class s/em-strong} "Tesa 41")
                        " is the primary studio and exhibition space for the Armenia Pavilion—"
                        (d/span {:class s/em-strong} "5,000 square feet")
                        " of expansive industrial volume within the Arsenale that functions as the "
                        (d/span {:class s/em-italic} "operational and conceptual heart")
                        " of the project.")

                   (d/p {}
                        "Defined by scale, clarity, and architectural restraint, the space is built for sustained "
                        (d/span {:class s/weight-medium} "fabrication")
                        ", "
                        (d/span {:class s/weight-medium} "assembly")
                        ", and "
                        (d/span {:class s/weight-medium} "reconfiguration")
                        " across the full duration of the Biennale.")

                   (d/p {}
                        "Here, the Pavilion operates as a "
                        (d/span {:class s/em-strong} "working studio")
                        " rather than a static exhibition—a place of continuous "
                        (d/span {:class s/weight-medium} "making")
                        ", "
                        (d/span {:class s/weight-medium} "stacking")
                        ", "
                        (d/span {:class s/weight-medium} "dismantling")
                        ", and "
                        (d/span {:class s/weight-medium} "rebuilding")
                        ". The interior volume allows the work to expand "
                        (d/span {:class s/weight-medium} "horizontally")
                        " and "
                        (d/span {:class s/weight-medium} "vertically")
                        ", accommodating both monumental arrangements and intimate moments of material attention.")

                   (d/p {}
                        (d/span {:class s/em-strong} "Tesa 41")
                        " anchors the Pavilion physically and philosophically—establishing "
                        (d/span {:class s/em-italic} "the studio as the artwork itself")
                        ".")))

     ;; ── Tesa 41 media — video + gallery ────────────────────────────────
     (d/div {:class "w-full flex flex-col gap-4 mt-4"}
            (let [ref (hooks/use-ref "loc-tesa-ref")
                  [_visited? is-visible?] (use-intersection-observer ref)]
              (d/div {:class "flex flex-col gap-4" :ref ref}
                     (d/div {:class "w-full aspect-[16/9]"}
                            ($ lazy-video {:playback-id "KaA1Jf2AusJZ966KPeZrdwJ5S53kboLO4E4fGLrgTLk"
                                           :aspect-ratio 1.77
                                           :should-play? is-visible?
                                           :allow-audio? false}))

                     ($ lazy-image-gallery {:enabled? is-visible?
                                            :slides [{:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif"
                                                      :aspect-ratio 1.34
                                                      :active? true}
                                                     {:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.08.tif"
                                                      :aspect-ratio 1.34
                                                      :active? true}
                                                     {:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.18.tif"
                                                      :aspect-ratio 1.34
                                                      :active? true}]}))))

     ;; ── CROSSING TO THE ARSENALE ───────────────────────────────────────
     (d/div {:class (s/cx s/text-xl "mt-12 p-4")}
            (d/p {:class (s/cx s/heading-section "pb-4")}
                 "CROSSING TO THE ARSENALE")

            (d/div {:class "space-y-6"}
                   (d/p {}
                        "The outdoor artwork will be installed at the historic crossing grounds near the "
                        (d/span {:class s/em-bold} "Piraeus Lion")
                        ", one of the most recognized landmarks marking the approach to the Arsenale. "
                        "Positioned at a critical pedestrian junction, this site receives "
                        (d/span {:class s/em-strong} "exceptionally high foot traffic")
                        " throughout the six-month exhibition period.")

                   (d/p {}
                        "Visitors moving between venues, crossing the bridge into the Arsenale, and navigating the surrounding waterfront naturally converge here. "
                        "The Armenian Pavilion lies less than a ten-minute walk from this point, making the installation both a "
                        (d/span {:class s/em-strong} "threshold")
                        " and a "
                        (d/span {:class s/em-strong} "directional marker")
                        "—an early encounter that orients audiences toward the Pavilion.")

                   (d/p {}
                        "As a freestanding, architecturally scaled form, it will command attention without obstructing circulation, functioning simultaneously as "
                        (d/span {:class s/weight-semibold} "sculpture")
                        ", "
                        (d/span {:class s/em-strong} "signal")
                        ", and "
                        (d/span {:class s/em-strong} "prelude")
                        ".")))

     ;; ── Crossing media — image gallery ─────────────────────────────────
     (d/div {:class "w-full flex flex-col gap-4 mt-4"}
            (let [ref (hooks/use-ref "loc-crossing-ref")
                  [_visited? is-visible?] (use-intersection-observer ref)]
              (d/div {:ref ref}
                     ($ lazy-image-gallery {:enabled? is-visible?
                                            :slides [{:img-src "https://atd-722658831.imgix.net/big_red_walkway/5.jpg"
                                                      :aspect-ratio 1.82
                                                      :caption "Crossing at the Arsenale"
                                                      :credit "Render 2026"}
                                                     {:img-src "https://atd-722658831.imgix.net/big_red_walkway/1.jpg"
                                                      :aspect-ratio 1.82
                                                      :caption "Crossing at the Arsenale"
                                                      :credit "Render 2026"}]})))))))

;; ── Public API ─────────────────────────────────────────────────────────────

(defnc location-section
  [{:keys [id title]}]
  (d/div {:id id}
         ($ expandable-text-area-2 {:title (or title "The Venue")
                                    :expand-button-label "Explore the venue"
                                    :preview-text preview
                                    :full-text details})))
