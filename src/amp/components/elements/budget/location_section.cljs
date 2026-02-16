(ns amp.components.elements.budget.location-section
  (:require
   [amp.components.elements.captioned-image :refer [captioned-image]]
   [amp.components.elements.expandable-text-area :refer [expandable-text-area-2]]
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.components.media.lazy-image-with-overlay :refer [lazy-image-with-overlay]]
   [amp.components.maps.mapbox-map :refer [mapbox-map]]
   [amp.components.media.lazy-image-gallery :refer [lazy-image-gallery]]
   [amp.components.ui.overlays :refer [caption-overlay]]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.lib.defnc :refer [defnc]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))


(def lazy-video (lazy-component amp.components.elements.video-background/video-background))


(defnc preview
  [{:keys []}]
  (d/div {:class "p-4 mb-12"}
         (d/p {:class ""}
              "The Armenia Pavilion 2026 unfolds across "
              (d/span {:class "font-semibold text-pink-300"} "two sites")
              " within the historic Arsenale of Venice—"
              (d/span {:class "font-semibold text-pink-300"} "an interior studio")
              ", and "
              (d/span {:class "font-semibold text-pink-300"} "a landmark crossing to the Arsenale")
              ". "
              "Together, these sites form a single spatial constellation: "
              (d/span {:class "text-slate-100"} "a place of work")
              ", "
              (d/span {:class "text-slate-100"} "a place of weather and ruin")
              ", and "
              (d/span {:class "text-slate-100"} "a public-facing threshold")
              "—each distinct, yet inseparable.")))


(defnc full-details
  [{:keys [id subtitle title]}]
  (let [is-desktop? (use-touch-enabled)]
    (d/div
     {:class "space-y-8"}



     (d/div {:class "text-slate-100  text-xl"}
            (d/div {:class "p-4 mb-12"}
                   (d/p {:class ""}
                        "The Armenia Pavilion 2026 unfolds across "
                        (d/span {:class "font-semibold text-pink-300"} "two sites")
                        " within the historic Arsenale of Venice—"
                        (d/span {:class "font-semibold text-pink-300"} "an interior studio")
                        ", and "
                        (d/span {:class "font-semibold text-pink-300"} "a landmark crossing to the Arsenale")
                        ". "
                        "Together, these sites form a single spatial constellation: "
                        (d/span {:class "text-slate-100"} "a place of work")
                        ", "
                        (d/span {:class "text-slate-100"} "a place of weather and ruin")
                        ", and "
                        (d/span {:class "text-slate-100"} "a public-facing threshold")
                        "—each distinct, yet inseparable."))

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
                       [;; 1. Polygon fill
                        {:source {:id "biennale" :url "/data/biennale_data.geojson"}
                         :layer  {:id "biennale-fill"
                                  :type "fill"
                                  :filter ["==" ["geometry-type"] "Polygon"]
                                  :paint {:fill-color "#b91c1c"
                                          :fill-opacity 0.5}}}

                        ;; 4. Direction start marker
                        {:source {:id "biennale-start" :url "/data/biennale_data.geojson"}
                         :layer  {:id "directions-start"
                                  :type "circle"
                                  :filter ["==" ["get" "marker"] "start"]
                                  :paint {:circle-radius 6
                                          :circle-color "#0c0cd0"
                                          :circle-stroke-width 2
                                          :circle-stroke-color "#ffffff"}}}

                        ;; 5. Direction end marker
                        {:source {:id "biennale-end" :url "/data/biennale_data.geojson"}
                         :layer  {:id "directions-end"
                                  :type "circle"
                                  :filter ["==" ["get" "marker"] "end"]
                                  :paint {:circle-radius 6
                                          :circle-color "#ef4444"
                                          :circle-stroke-width 2
                                          :circle-stroke-color "#ffffff"}}}

                        ;; 6. Pavilion point circle (exclude direction markers)
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

                        ;; 7. Text label (exclude direction markers)
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
                   (d/p {:class "mt-4 px-4 text-sm font-mono italic"}
                        "* Walking path from the crossing to the pavilion. ~8 minutes"))

            (d/div {:class "text-xl "}


                   ;; --------------------------
                   ;; #1 — TESA 41
                   ;; --------------------------
                   (d/div {:class "p-4"}
                          (d/p {:class "text-xl pb-4 font-mono font-bold uppercase tracking-wider"}
                               "TESA 41 (THE STUDIO)")

                          (d/div {:class "space-y-6"}
                                 (d/p {}
                                      (d/span {:class "font-semibold text-pink-300"} "Tesa 41")
                                      " is the primary studio and interior exhibition space for the Armenia Pavilion 2026—"
                                      (d/span {:class "font-semibold text-pink-300"} "5,000 square feet")
                                      " ("
                                      (d/span {:class "font-semibold text-pink-300"} "~464 square meters")
                                      ") of expansive industrial volume that functions as the "
                                      (d/span {:class "italic"} "operational and conceptual heart")
                                      " of the project.")

                                 (d/p {}
                                      "Defined by scale, clarity, and architectural restraint, it is built for sustained "
                                      (d/span {:class "font-medium"} "fabrication")
                                      ", "
                                      (d/span {:class "font-medium"} "assembly")
                                      ", and "
                                      (d/span {:class "font-medium"} "reconfiguration")
                                      " across the full duration of the Biennale.")

                                 (d/p {}
                                      "Here, the Pavilion operates as a "
                                      (d/span {:class "font-semibold text-pink-300"} "working studio")
                                      " rather than a static exhibition: a place of continuous "
                                      (d/span {:class "font-medium"} "making")
                                      ", "
                                      (d/span {:class "font-medium"} "stacking")
                                      ", "
                                      (d/span {:class "font-medium"} "dismantling")
                                      ", and "
                                      (d/span {:class "font-medium"} "rebuilding")
                                      ". The interior volume allows the work to expand "
                                      (d/span {:class "font-medium"} "horizontally")
                                      " and "
                                      (d/span {:class "font-medium"} "vertically")
                                      ", accommodating both monumental arrangements and intimate moments of material attention.")

                                 (d/p {:class "pt-2"}
                                      (d/span {:class "font-semibold text-pink-300"} "Tesa 41")
                                      " anchors the Pavilion physically and philosophically—establishing "
                                      (d/span {:class "italic"} "the studio as the artwork itself")
                                      ".")))

                   (d/div {:class "w-full h-full flex flex-col gap-4 mt-12"}
                          (let [outer-ctx (hooks/use-ref "outer-ctx")
                                [visited? is-visible?] (use-intersection-observer outer-ctx)]


                            (d/div {:class "flex flex-col gap-4"
                                    :ref outer-ctx}



                                   ;;    Add the mapbox instance here with a full h-screen and w-full

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



                   ;; --------------------------
                   ;; #2 — PIRAEUS LION
                   ;; --------------------------
                   (d/div {:class "mt-12"}
                          (d/div {:class "p-4"}
                                 (d/p {:class "pb-4 text-xl font-mono font-bold uppercase tracking-wider"}
                                      "CROSSING TO THE ARSENALE — PIRAEUS LION")

                                 (d/div {:class "space-y-6"}
                                        (d/p {}
                                             "The outdoor artwork will be installed at the historic crossing grounds near the "
                                             (d/span {:class "font-semibold text-slate-100"} "Piraeus Lion")
                                             ", one of the most recognized landmarks marking the approach to the Arsenale. "
                                             "Positioned at a critical pedestrian junction along the main route into the Biennale’s Arsenale area, this site receives "
                                             (d/span {:class "font-semibold text-pink-300"} "exceptionally high foot traffic")
                                             " throughout the six-month exhibition period. "
                                             "Visitors moving between venues, crossing the bridge into the Arsenale, and navigating the surrounding waterfront naturally converge here. "
                                             "The Armenian Pavilion lies less than a ten-minute walk from this point, making the installation both a "
                                             (d/span {:class "font-semibold text-pink-300"} "threshold")
                                             " and a "
                                             (d/span {:class "font-semibold text-pink-300"} "directional marker")
                                             "—an early encounter that orients audiences toward the Pavilion.")

                                        (d/p {}
                                             "The placement ensures "
                                             (d/span {:class "font-semibold text-pink-300"} "extraordinary visibility")
                                             " within a dense flow of international visitors, curators, press, and collectors. "
                                             "The artwork, together with its identifying totem, will operate as a "
                                             (d/span {:class "font-medium"} "visual anchor")
                                             " in an open, expansive setting framed by historic brick walls, canal frontage, and the continuous movement of people.")

                                        (d/p {}
                                             "As a freestanding, architecturally scaled form, it will command attention without obstructing circulation, functioning simultaneously as "
                                             (d/span {:class "font-semibold"} "sculpture")
                                             ", "
                                             (d/span {:class "font-semibold text-pink-300"} "signal")
                                             ", and "
                                             (d/span {:class "font-semibold text-pink-300"} "prelude")
                                             ". Its presence at this symbolic gateway amplifies the Pavilion’s reach beyond its interior space, extending Armenia’s participation into one of the most traversed and photographed corridors of the Biennale.")))

                          (d/div {:class "w-full h-full flex flex-col gap-4 mt-12"}
                                 (let [is-desktop? (use-touch-enabled)
                                       outer-ctx (hooks/use-ref "outer-ctx")
                                       [visited? is-visible?] (use-intersection-observer outer-ctx)]
                                   (d/div {:class ""
                                           :ref outer-ctx}
                                          ($ lazy-image-gallery {:enabled? is-visible?
                                                                 :slides [{:img-src "https://atd-722658831.imgix.net/big_red_walkway/5.jpg"
                                                                           :aspect-ratio 1.82
                                                                           :caption "BIG RED AT ARSENALE"
                                                                           :credit "Render 2026"}

                                                                          {:img-src "https://atd-722658831.imgix.net/big_red_walkway/1.jpg"
                                                                           :aspect-ratio 1.82
                                                                           :caption "BIG RED AT ARSENALE"
                                                                           :credit "Render 2026"}]}))))))))))

(defnc location-section
  [{:keys [id subtitle title]}]
  (d/div {:id id}
         ($ expandable-text-area-2 {:idx 7
                                    :section-hint subtitle
                                    :title title
                                    :expand-button-label "Expand details"
                                    :preview-text preview
                                    :full-text full-details})))
