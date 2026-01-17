(ns amp.utils.math
  (:require [clojure.math :as math]))

(defn normalize-dimensions
  [dimensions side increment]
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