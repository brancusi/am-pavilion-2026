(ns amp.utils.math
  (:require [clojure.math :as math]))

(defn normalize-dimensions
  [dimensions {:keys [side increment]}]
  (let [{:keys [target-side other-side]} (if (= side :width)
                                           {:target-side :width
                                            :other-side :height}
                                           {:target-side :height
                                            :other-side :width})

        target-length (get dimensions target-side)
        other-length (get dimensions other-side)
        diff (mod target-length increment)
        has-diff? (> diff 0)]
    (if has-diff?
      (let [factor (/ (- increment (mod target-length increment)) target-length)
            new-target-length (+ (* target-length factor) target-length)
            aspect-ratio (/ (max target-length other-length)
                            (min target-length other-length))
            updated-dimensions (assoc {}
                                      target-side new-target-length
                                      other-side (math/round (* new-target-length aspect-ratio)))]
        updated-dimensions)
      dimensions)))

(defn clamp-to-dimensions
  [source-dimensions clamp-dimensions]
  (if (or (and (>= (:width clamp-dimensions) (:width source-dimensions))
               (>= (:height clamp-dimensions) (:height source-dimensions)))
          (nil? (:width clamp-dimensions))
          (nil? (:height clamp-dimensions)))
    source-dimensions
    (let [source-width (:width source-dimensions)
          source-height (:height source-dimensions)
          target-width (:width clamp-dimensions)
          target-height (:height clamp-dimensions)
          width-ratio (/ target-width source-width)
          height-ratio (/ target-height source-height)
          scale-ratio (min width-ratio height-ratio)]
      {:width (math/round (* source-width scale-ratio))
       :height (math/round (* source-height scale-ratio))})))

(defn normalize-dimensions-v2
  [container-dimensions {:keys [increment fitting-aspect-ratio max-width max-height]}]
  (let [clamped-dimensions (clamp-to-dimensions {:width (* (:height container-dimensions) fitting-aspect-ratio)
                                                 :height (:height container-dimensions)}
                                                container-dimensions)

        width (:width clamped-dimensions)
        height (:height clamped-dimensions)

        max-width (or max-width (:width container-dimensions))
        max-height (or max-height (:height container-dimensions))

        aspect-ratio (/ (max width height)
                        (min width height))

        updated-dimensions (if (<= fitting-aspect-ratio 1)
                             (let [diff (mod width increment)
                                   has-diff? (> diff 0)]
                               (if has-diff?
                                 (let [factor (/ (- increment (mod width increment)) width)
                                       new-target-width (+ (* width factor) width)]
                                   (assoc {}
                                          :width new-target-width
                                          :height (math/round (* new-target-width aspect-ratio))))
                                 container-dimensions))
                             (let [diff (mod height increment)
                                   has-diff? (> diff 0)]
                               (if has-diff?
                                 (let [factor (/ (- increment (mod height increment)) height)
                                       new-target-height (+ (* height factor) height)]
                                   (assoc {}
                                          :width (math/round (* new-target-height aspect-ratio))
                                          :height new-target-height))
                                 container-dimensions)))]

    (clamp-to-dimensions updated-dimensions
                         {:width max-width
                          :height max-height})))



(comment
  (not= (:width {:width 5}) nil)

  (clamp-to-dimensions {:width 10
                        :height 10}
                       {:width 15
                        :height 15})

  (normalize-dimensions-v2 {:width 1000 :height 1000}
                           {:increment 10
                            :fitting-aspect-ratio 1.77})
  ;;=> {:width 1009, :height 570}
  ;;=> {:width 1009, :height 570}
  ;;=> {:width 1000, :height 1000}
  ;;=> {:width 1000, :height 1000}
  ;;=> {:width 1000, :height 1000}
  ;;=> {:width 1000, :height 800}
  ;;=> {:width 500, :height 400}
  ;;=> {:width 500, :height 400}
  ;;=> {:width 500, :height 400}
  ;;=> {:width 1000, :height 800}
  ;;=> {:width 1010, :height 1263}
  ;;=> {:width 1010, :height 1263}
  ;;=> {:width 0, :height 0}
  ;;=> {:width 0, :height 0}
  ;;=> {:width 0, :height 0}
  ;;=> {:width 0, :height 0}
  ;;=> {:width 0, :height 0}
  ;;=> {:width 400, :height 500}
  ;;=> {:width 400, :height 500}


  ;;Keep from folding
  )



(defn progress->index
  [total-count progress]
  (let [index (math/round (* total-count progress))
        normalized-index (if (or (< index 0)
                                 (>= index total-count))
                           0
                           index)]
    (+ normalized-index 1)))