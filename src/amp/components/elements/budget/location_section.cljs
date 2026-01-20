(ns amp.components.elements.budget.location-section
  (:require
   [amp.components.elements.captioned-image :refer [captioned-image]]
   [amp.components.elements.expandable-text-area :refer [expandable-text-area-2]]
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.components.media.lazy-image-with-overlay :refer [lazy-image-with-overlay]]
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
              "The Armenian Pavilion 2026 unfolds across "
              (d/span {:class "font-semibold"} "three contiguous sites")
              " within the historic Arsenale of Venice—"
              (d/span {:class "font-semibold"} "an interior studio")
              ", "
              (d/span {:class "font-semibold"} "an open-air church courtyard")
              ", and " (d/span {:class "font-semibold"} "a canal-side outpost")
              ". "
              "Together, these spaces form a single spatial constellation: "
              (d/span {:class ""} "a place of work")
              ", "
              (d/span {:class ""} "a place of weather and ruin")
              ", and "
              (d/span {:class ""} "a public-facing threshold")
              "—each distinct, yet inseparable.")))


(defnc full-details
  [{:keys [id subtitle title]}]
  (d/div
   {:class "space-y-8"}
   (d/div {:class "text-slate-100  text-xl"}
          (d/div {:class "p-4 mb-12"}
                 (d/p {:class ""}
                      "The Armenian Pavilion 2026 unfolds across "
                      (d/span {:class "font-semibold"} "three contiguous sites")
                      " within the historic Arsenale of Venice—"
                      (d/span {:class "font-semibold"} "an interior studio")
                      ", "
                      (d/span {:class "font-semibold"} "an open-air church courtyard")
                      ", and " (d/span {:class "font-semibold"} "a canal-side outpost")
                      ". "
                      "Together, these spaces form a single spatial constellation: "
                      (d/span {:class ""} "a place of work")
                      ", "
                      (d/span {:class ""} "a place of weather and ruin")
                      ", and "
                      (d/span {:class ""} "a public-facing threshold")
                      "—each distinct, yet inseparable."))

          (d/div {:class "text-xl "}

                 ;; --------------------------
                 ;; #1 — TESA 41
                 ;; --------------------------
                 (d/div {:class "p-4"}
                        (d/p {:class "text-3xl pb-4 font-bold uppercase"}
                             "#1 - TESA 41 (MAIN STUDIO)")

                        (d/div {:class "space-y-6"}
                               (d/p {}
                                    (d/span {:class "font-semibold text-slate-100"} "Tesa 41")
                                    " is the primary studio and interior exhibition space for the Armenian Pavilion 2026—"
                                    (d/span {:class "font-semibold"} "5,000 square feet")
                                    " ("
                                    (d/span {:class "font-semibold"} "~464 square meters")
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
                                    (d/span {:class "font-semibold"} "working studio")
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
                                    (d/span {:class "font-semibold text-slate-100"} "Tesa 41")
                                    " anchors the Pavilion physically and philosophically—establishing "
                                    (d/span {:class "italic"} "the studio as the artwork itself")
                                    ".")))

                 (d/div {:class "w-full h-full flex flex-col gap-4 mt-12"}
                        (let [outer-ctx (hooks/use-ref "outer-ctx")
                              [visited? is-visible?] (use-intersection-observer outer-ctx)]
                          (d/div {:class "flex flex-col gap-4"
                                  :ref outer-ctx}
                                 ($ lazy-video {:playback-id "KaA1Jf2AusJZ966KPeZrdwJ5S53kboLO4E4fGLrgTLk"
                                                :aspect-ratio 1.77
                                                :should-play? is-visible?
                                                :allow-audio? false})
                                 ($ lazy-image-with-overlay
                                    {:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif"
                                     :aspect-ratio 1.34
                                     :active? true})

                                 ($ lazy-image-with-overlay
                                    {:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.08.tif"
                                     :aspect-ratio 1.34
                                     :active? true})

                                 ($ lazy-image-with-overlay
                                    {:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.18.tif"
                                     :aspect-ratio 1.34
                                     :active? true})))


                        #_#_#_($ captioned-image
                                 {:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif"})
                            ($ captioned-image
                               {:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.08.tif"})
                          ($ captioned-image
                             {:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.18.tif"}))


                 (d/div {:class "mt-12"}
                        (d/div {:class "p-4"}
                               (d/p {:class "pb-4 text-3xl font-helvetica font-bold uppercase"}
                                    "#2 - GIARDINO 25 (CHURCH COURTYARD)")

                               (d/div {:class "space-y-6"}
                                      (d/p {}
                                           (d/span {:class "font-semibold text-slate-100"} "Giardino 25")
                                           " is an adjacent open-air courtyard formed from the remains of a former church. "
                                           "Only the original perimeter walls remain; the roof has long since collapsed—"
                                           "leaving the space exposed to "
                                           (d/span {:class ""} "light")
                                           ", "
                                           (d/span {:class ""} "weather")
                                           ", and "
                                           (d/span {:class ""} "time")
                                           ".")

                                      (d/p {}
                                           "What survives is a richly textured architectural shell marked by age, erosion, and history. "
                                           "The courtyard’s stone walls, uneven surfaces, and traces of former sacred use create an atmosphere of "
                                           (d/span {:class "italic"} "quiet intensity")
                                           " and material depth.")

                                      (d/p {}
                                           "In contrast to the controlled interior of Tesa 41, Giardino 25 functions as a "
                                           (d/span {:class "font-semibold"} "threshold space")
                                           "—neither fully inside nor fully outside—where the work enters into direct dialogue with "
                                           (d/span {:class ""} "ruin")
                                           ", "
                                           (d/span {:class ""} "open sky")
                                           ", and "
                                           (d/span {:class ""} "changing light")
                                           ".")

                                      (d/p {:class "pt-2"}
                                           (d/span {:class "font-semibold text-slate-100"} "Giardino 25")
                                           " extends the Pavilion outward—allowing the project to breathe within an environment shaped as much by "
                                           (d/span {:class "italic"} "absence")
                                           " as by structure."))) (d/div {:class "w-full h-full flex flex-col gap-4 mt-12"}
                                                                         (let [is-desktop? (use-touch-enabled)
                                                                               outer-ctx (hooks/use-ref "outer-ctx")
                                                                               [visited? is-visible?] (use-intersection-observer outer-ctx)]
                                                                           (d/div {:class ""
                                                                                   :ref outer-ctx}
                                                                                  ($ lazy-video {:playback-id "00r6626C33zSItHxx4iRh1oJPgP1tsH01qR00bNkN7i4go"
                                                                                                 :should-play? is-visible?
                                                                                                 :allow-audio? false})))))




                 ;; --------------------------
                 ;; #3 — OUTPOST
                 ;; --------------------------
                 (d/div {:class "mt-12"}
                        (d/div {:class "p-4"}
                               (d/p {:class "pb-4 text-3xl font-helvetica font-bold uppercase"}
                                    "#3 — OUTPOST (CANAL WALKWAY)")

                               (d/div {:class "space-y-6"}
                                      (d/p {}
                                           "The "
                                           (d/span {:class "font-semibold text-slate-100"} "Outpost")
                                           " occupies a brick- and stone-laid walkway that projects into the main canal of the Arsenale. "
                                           "Positioned directly in front of "
                                           (d/span {:class "font-medium"} "Tesa 41")
                                           " and "
                                           (d/span {:class "font-medium"} "Giardino 25")
                                           ", this narrow but critical site serves as the Pavilion’s most "
                                           (d/span {:class "font-semibold"} "publicly visible point of contact")
                                           ".")

                                      (d/p {}
                                           "The Outpost can be seen from a major pedestrian route leading into the central Arsenale exhibition grounds. "
                                           "Visitors cross a well-known, heavily trafficked bridge and encounter this site "
                                           (d/span {:class "italic"} "before")
                                           " reaching the main Biennale axis.")

                                      (d/p {}
                                           "As a result, the Outpost functions as a "
                                           (d/span {:class "font-semibold"} "signal")
                                           " and a "
                                           (d/span {:class "font-semibold"} "threshold")
                                           "—an early, unavoidable presence that announces the Pavilion to thousands of passersby, including those who may never enter the interior spaces.")

                                      (d/p {:class "pt-2"}
                                           "This location extends the Pavilion into the daily flow of the Biennale—establishing a continuous visual and conceptual presence along the canal.")))

                        (d/div {:class "w-full h-full flex flex-col gap-4 mt-12"}
                               (let [is-desktop? (use-touch-enabled)
                                     outer-ctx (hooks/use-ref "outer-ctx")
                                     [visited? is-visible?] (use-intersection-observer outer-ctx)]
                                 (d/div {:class ""
                                         :ref outer-ctx}
                                        ($ lazy-video {:playback-id "A602Gnm6A7gpYTl2w4ZnC9xDEnOQQJWbS3dNxhE1O1FE"
                                                       :should-play? is-visible?
                                                       :allow-audio? false})
                                        ($ lazy-image-with-overlay
                                           {:img-src "https://atd-722658831.imgix.net/red_blue_black_w_person/red_blue_black_w_person.tif"
                                            :aspect-ratio 0.525
                                            :active? is-visible?})
                                        #_($ captioned-image
                                             {:img-src "https://atd-722658831.imgix.net/red_blue_black_w_person/red_blue_black_w_person.tif"
                                              :caption "RED BLUE BLACK"
                                              :credit "© Zadik Zadikian 2026"})))))))))

(defnc location-section
  [{:keys [id subtitle title]}]
  (d/div {:id id}
         ($ expandable-text-area-2 {:section-hint subtitle
                                    :title title
                                    :expand-button-label "Expand details"
                                    :preview-text preview
                                    :full-text full-details})))
