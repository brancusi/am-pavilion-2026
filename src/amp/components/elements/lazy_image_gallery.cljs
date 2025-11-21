(ns amp.components.elements.lazy-image-gallery
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.hooks.use-hover-animations :refer [use-hover-animations]]
   [amp.hooks.use-container-size :refer [use-container-size]]
   [amp.utils.gsap :as gsap :refer [to-ref to-element]]
   [helix.dom :as d]
   [helix.core :refer [$]]
   [helix.hooks :as hooks]))

(def aspect-ratios [1
                    (/ 16 9)
                    (/ 4 3)
                    (/ 3 4)
                    (/ 9 16)])

(defn build-masonary-grid-slots
  [total-cols total-rows total-width]
  (let [column-width (Math/round (/ total-width total-cols))]
    (mapcat (fn [_]
              (map (fn [_]
                     (let [aspect-ratio (rand-nth aspect-ratios)
                           img-height (Math/round (* column-width aspect-ratio))]
                       [column-width img-height]))
                   (range total-cols)))
            (range total-rows))))


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
  [{:keys [target-ref caption credit]}]
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

(defnc image-card [{:keys [width height img-src caption credit key idx]}]
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

           ($ caption-layer {:target-ref target-ref
                             :caption caption
                             :credit credit}))))


(defnc lazy-image-gallery  [{:keys [images is-visible? image-gallery-container-ref]}]
  (let [outer-ctx (hooks/use-ref "outer-ctx")
        gallery-dimensions (use-container-size image-gallery-container-ref)

        [masonary-grid-slots set-masonary-grid-slots] (hooks/use-state (build-masonary-grid-slots
                                                                        3
                                                                        8
                                                                        200))]
    (hooks/use-layout-effect
     [(:width gallery-dimensions)]
     (set-masonary-grid-slots (build-masonary-grid-slots
                               3
                               8
                               (:width gallery-dimensions))))

    (d/section {:ref outer-ctx
                :class "overflow-hidden h-full"}
               (d/div {:class "columns-3
                               gap-0
                               h-full"
                       :style {:background-image "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.1) 4px, rgba(255,255,255,0.1) 5px)"}}
                      (map-indexed (fn [idx [width height]]
                                     (let [{:keys [src caption]} (rand-nth images)
                                           sized-image-src (str src "?w=" width "&h=" height "&fit=crop&auto=format,compress&crop=faces,edges")]
                                       ($ image-card {:key idx
                                                      :width width
                                                      :height height
                                                      :img-src sized-image-src
                                                      :caption "Tony with Basquiat!"
                                                      :credit "Aram Zadikian 2025"
                                                      :idx idx})))
                                   masonary-grid-slots)))))
