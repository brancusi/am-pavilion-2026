(ns amp.components.elements.lazy-image-gallery
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.hooks.use-hover-animations :refer [use-hover-animations]]
   [amp.hooks.use-container-size :refer [use-container-size]]
   [amp.utils.gsap :as gsap :refer [to-ref to-element]]
   [amp.utils.debug :refer [spy]]
   [helix.dom :as d]
   [helix.core :refer [$]]
   [helix.hooks :as hooks]))

(def aspect-ratios [1
                    (/ 16 9)
                    (/ 4 3)
                    (/ 3 4)
                    (/ 9 16)])

(def image-sizes
  {1 [[200 200] [300 300] [400 400] [500 500] [600 600]
      [700 700] [800 800] [900 900] [1000 1000] [1200 1200]]

   (/ 16 9) [[320 180] [480 270] [640 360] [800 450] [960 540]
             [1120 630] [1280 720] [1440 810] [1600 900] [1920 1080]]

   (/ 4 3) [[320 240] [400 300] [480 360] [640 480] [800 600]
            [960 720] [1120 840] [1280 960] [1440 1080] [1600 1200]]

   (/ 3 4) [[240 320] [300 400] [360 480] [480 640] [600 800]
            [720 960] [840 1120] [960 1280] [1080 1440] [1200 1600]]

   (/ 9 16) [[180 320] [270 480] [360 640] [450 800] [540 960]
             [630 1120] [720 1280] [810 1440] [900 1600] [1080 1920]]})

(defn check-column-dimensions
  [columns]
  (reduce (fn [total-height dimensions]
            (+ total-height (second dimensions)))
          0
          columns))

(defn aspect-column
  [width height]
  (let [initial-images (loop [accumulated-height 0
                              result []]
                         (if (>= accumulated-height height)
                           result
                           (let [aspect-ratio (rand-nth aspect-ratios)
                                 img-height (Math/round (* width aspect-ratio))]
                             (recur (+ accumulated-height img-height)
                                    (conj result (with-meta [width img-height] {:aspect-ratio aspect-ratio}))))))
        total-height (check-column-dimensions initial-images)
        scale-factor (/ height total-height)]
    (mapv (fn [dimensions]
            (let [[w h] dimensions]
              (with-meta
                [w (* h scale-factor)]
                (meta dimensions))))
          initial-images)))

(defn all-image-sizes
  []
  (vec (mapcat val image-sizes)))

(defn find-closest-size
  [target-width target-height]
  (let [sizes (all-image-sizes)]
    (reduce (fn [closest [w h]]
              (let [closest-diff (+ (Math/abs (- (first closest) target-width))
                                    (Math/abs (- (second closest) target-height)))
                    current-diff (+ (Math/abs (- w target-width))
                                    (Math/abs (- h target-height)))]
                (if (< current-diff closest-diff)
                  [w h]
                  closest)))
            (first sizes)
            sizes)))

(defn build-masonary-grid-slots
  [cols width height]
  (let [column-width (Math/round (/ width cols))]
    (mapcat (fn [_]
              (aspect-column column-width height))
            (range cols))))

(comment

  (find-closest-size 350 500)

  (check-column-dimensions (aspect-column 300 800))

  (build-masonary-grid-slots 3 500 800)

  ;;Keep from folding
  )


(defnc image-layer
  [{:keys [img-src]}]
  (let [base-ref (hooks/use-ref "base-ref")
        transition-ref (hooks/use-ref "trans-ref")

        [current-src set-current-src] (hooks/use-state nil)
        [prev-src set-prev-src] (hooks/use-state nil)]

    (hooks/use-layout-effect
     [img-src current-src]
     (when (not (= current-src img-src))
       (set-prev-src current-src)))

    (d/div {:class "z-10"}
           (when (or prev-src current-src)
             (d/img {:key "base"
                     :ref base-ref
                     :src (or prev-src current-src)
                     :class "absolute
                               z-10
                               w-full
                               h-full
                               object-cover
                               overflow-hidden"
                     :onLoad (fn [e]
                               (to-ref
                                transition-ref
                                {:opacity 0
                                 :duration 0}))}))

           (when (or (nil? prev-src)
                     img-src)
             (d/img {:src img-src
                     :key "trans"
                     :ref transition-ref
                     :class "absolute
                             z-20
                             w-full
                             h-full
                             object-cover
                             overflow-hidden"
                     :style {:opacity 0}
                     :onLoad (fn [_]
                               (to-ref
                                transition-ref
                                {:opacity 1
                                 :duration 1
                                 :onComplete (fn []
                                               (set-prev-src nil)
                                               (set-current-src img-src))}))})))))
(defnc caption-layer
  [{:keys [target-ref caption credit other]}]
  (d/div {:class "absolute
                  z-20
                  bottom-0 
                  left-0
                  w-full
                  h-12
                  pointer-events-none"
          :ref target-ref}
         (d/div {:class "h-full
                         w-full
                         bg-slate-900/50
                         p-2"}
                (d/p {:class "text-white 
                              font-fira-code
                              text-xs"}
                     caption)
                (d/p {:class "text-white 
                              font-fira-code
                              text-xs"}
                     credit))))

(defnc image-card [{:keys [width height img-src caption credit other key idx]}]
  (let [trigger-ref (hooks/use-ref "trigger-ref")
        target-ref (hooks/use-ref "target-ref")]

    (use-hover-animations trigger-ref
                          {:target target-ref
                           :initial {:y 100
                                     :opacity 0}
                           :over {:y 0
                                  :opacity 1
                                  :duration 0.25}
                           :out {:y 100
                                 :opacity 0
                                 :duration 0.125}})

    (d/div {:ref trigger-ref
            :style {:width width
                    :height height}
            :class "relative
                    bg-white/10
                    overflow-hidden"}

           ($ image-layer {:img-src img-src})

           (when caption
             ($ caption-layer {:target-ref target-ref
                               :caption caption
                               :credit credit})))))

(defnc lazy-image-gallery  [{:keys [images is-visible? image-gallery-container-ref]}]
  (let [outer-ctx (hooks/use-ref "outer-ctx")
        gallery-dimensions (use-container-size image-gallery-container-ref)

        [masonary-grid-slots set-masonary-grid-slots] (hooks/use-state (build-masonary-grid-slots
                                                                        3
                                                                        8
                                                                        200))]
    (hooks/use-layout-effect
     [(:width gallery-dimensions) (:height gallery-dimensions)]
     (set-masonary-grid-slots (build-masonary-grid-slots
                               3
                               (:width gallery-dimensions)
                               (:height gallery-dimensions))))

    (d/section {:ref outer-ctx
                :class "overflow-hidden h-full"}
               (d/div {:class "columns-3
                               gap-0
                               h-full"
                       :style {:background-image "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.1) 4px, rgba(255,255,255,0.1) 5px)"}}
                      (map-indexed (fn [idx dimensions]
                                     (let [{:keys [src caption credit]} (rand-nth images)
                                           aspect-ratio (-> dimensions meta :aspect-ratio)
                                           closest-match (find-closest-size (first dimensions) (second dimensions))
                                           [width height] dimensions
                                           [closest-width closest-height] closest-match
                                           sized-image-src (str src "?w=" closest-width "&h=" closest-height "&fit=crop&auto=format,compress&crop=faces,edges")]
                                       ($ image-card {:key idx
                                                      :width width
                                                      :height height
                                                      :img-src sized-image-src
                                                      :caption caption
                                                      :credit credit
                                                      :other (str aspect-ratio)
                                                      :idx idx})))
                                   masonary-grid-slots)))))
