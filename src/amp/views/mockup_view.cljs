(ns amp.views.mockup-view
  (:require [amp.lib.defnc :refer [defnc]]
            [threeagent.core :as th]
            [threeagent.entity :as entity]
            [amp.reducers.requires]

            [helix.core :refer [$]]
            ["gsap" :refer [gsap]]
            ["three" :as THREE]
            ["three/addons/controls/OrbitControls.js" :refer [OrbitControls]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

;; ============ HOT-RELOADABLE STATE ============
;; These defonce atoms persist across hot reloads

(defonce controls-atom (atom nil))
(defonce context-atom (atom nil))
(defonce resize-fn-atom (atom nil))
(defonce show-dimensions-atom (th/atom true))

;; Scene elements atom - use threeagent's reactive atom for automatic re-renders
(defonce scene-atom
  (th/atom
   [:object
    {:position [0 0 -4]}
    [:ambient-light {:intensity 0.5}]
    [:directional-light {:position [5 5 5], :intensity 1}]
    [:box {:position [0 1 0], :width 48, :height 2, :depth 48, :material {:color "red"}}]
    [:box
     {:position [-2.1999999999999993 3.5 -2.1999999999999993],
      :width 43.6,
      :height 3,
      :depth 43.6,
      :material {:color "blue"}}]
    [:box
     {:position [-6.600000000000001 7.5 -6.600000000000001],
      :width 34.8,
      :height 5,
      :depth 34.8,
      :material {:color "green"}}]
    [:box
     {:position [-13.200000000000003 14 -13.200000000000003],
      :width 21.599999999999994,
      :height 8,
      :depth 21.599999999999994,
      :material {:color "red"}}]
    [:box
     {:position [-22.000000000000004 24 -22.000000000000004],
      :width 3.999999999999993,
      :height 12,
      :depth 3.999999999999993,
      :material {:color "blue"}}]
    [:text-sprite {:text "48\" (w) x 48\" (l) x 2\" (h)", :position [25.15 1 24], :scale [2.3 0.29]}]
    [:text-sprite {:text "43\" (w) x 43\" (l) x 3\" (h)", :position [20.75 3.5 19.6], :scale [2.3 0.29]}]
    [:text-sprite
     {:text "34\" (w) x 34\" (l) x 5\" (h)", :position [11.949999999999998 7.5 10.799999999999997], :scale [2.3 0.29]}]
    [:text-sprite
     {:text "21\" (w) x 21\" (l) x 8\" (h)", :position [-1.2500000000000058 14 -2.4000000000000057], :scale [2.3 0.29]}]
    [:text-sprite
     {:text "3\" (w) x 3\" (l) x 12\" (h)", :position [-18.85000000000001 24 -20.000000000000007], :scale [2.3 0.29]}]]))

;; Call this function to render new elements!
;; Example: (render-elements [:object {:position [0 0 -4]} [:box {:dims [1 1 1] :material {:color "green"}}]])
(defn render-elements [elements]
  (reset! scene-atom elements))

;; Root component render function - reads from scene-atom
(defn root []
  @scene-atom)

(defn calculate-position
  "Calculates [x z] position for a box within bounds based on alignment.
   Alignment: :tl (top-left), :tr (top-right), :bl (bottom-left), :br (bottom-right)
   Top = negative Z, Left = negative X"
  [align [bw _bh bd] [dw _dh dd]]
  (let [half-bw (/ bw 2)
        half-bd (/ bd 2)
        half-dw (/ dw 2)
        half-dd (/ dd 2)]
    (case align
      :tl [(- half-dw half-bw) (- half-dd half-bd)]  ; top-left corner
      :tr [(- half-bw half-dw) (- half-dd half-bd)]  ; top-right corner
      :bl [(- half-dw half-bw) (- half-bd half-dd)]  ; bottom-left corner
      :br [(- half-bw half-dw) (- half-bd half-dd)]  ; bottom-right corner
      [0 0])))  ; centered (default)

(defn get-layer-height
  "Gets the maximum height of all boxes in a level's layers."
  [layers]
  (apply max (for [layer layers
                   box layer
                   :let [[_dw dh _dd] (:dims box)]]
               dh)))

(defn toggle-dimensions!
  "Toggle dimension labels visibility."
  []
  (swap! show-dimensions-atom not))

(defn set-dimensions-visible!
  "Set dimension labels visibility."
  [visible?]
  (reset! show-dimensions-atom visible?))

(defn create-text-texture
  "Creates a canvas texture with horizontal text."
  [text]
  (let [^js canvas (.createElement js/document "canvas")
        ^js ctx (.getContext canvas "2d")
        font-size 48
        canvas-width 640
        canvas-height 64]
    ;; Set canvas size for horizontal text
    (set! (.-width canvas) canvas-width)
    (set! (.-height canvas) canvas-height)
    ;; Draw background
    (set! (.-fillStyle ctx) "rgba(0, 0, 0, 0.7)")
    (.fillRect ctx 0 0 canvas-width canvas-height)
    ;; Draw text horizontally, left-aligned
    (set! (.-font ctx) (str "bold " font-size "px Arial"))
    (set! (.-fillStyle ctx) "white")
    (set! (.-textAlign ctx) "left")
    (set! (.-textBaseline ctx) "middle")
    (.fillText ctx text 10 (/ canvas-height 2))
    ;; Create texture
    (let [^js texture (THREE/CanvasTexture. canvas)]
      (set! (.-needsUpdate texture) true)
      texture)))

;; Custom threeagent entity type for text sprites
(deftype TextSpriteEntity []
  entity/IEntityType
  (create [_this _context config]
    (let [{:keys [text scale position]} config
          ^js texture (create-text-texture text)
          ^js material (THREE/SpriteMaterial. #js {:map texture :transparent true})
          ^js sprite (THREE/Sprite. material)
          ^js sprite-scale (.-scale sprite)
          ^js sprite-position (.-position sprite)]
      (when scale
        (.set sprite-scale (nth scale 0) (nth scale 1) 1))
      (when position
        (.set sprite-position (nth position 0) (nth position 1) (nth position 2)))
      sprite))
  (destroy! [_this _context _object _config]))

;; Entity types map for registering with threeagent
(def custom-entity-types
  {:text-sprite (TextSpriteEntity.)})

(defn create-stack
  "Creates a vertical stack of box layers from element data.
   Each element has :bounds [w h d] and :layers (vector of box groups).
   Boxes in all layers of an element share the same vertical level.
   If no bounds specified, inherits from previous layer and positions
   the new layer sitting on top of the previous content.
   Options:
     :show-dimensions? - if true, adds floating dimension labels (default: reads from show-dimensions-atom)"
  ([elements] (create-stack elements {}))
  ([elements {:keys [show-dimensions?] :or {show-dimensions? @show-dimensions-atom}}]
   (loop [levels elements
          y-offset 0
          prev-bounds nil
          prev-offset [0 0]  ; [x z] offset for inherited positioning
          boxes []
          labels []]
     (if (empty? levels)
       (into [:object {:position [0 0 -4]}
              [:ambient-light {:intensity 0.5}]
              [:directional-light {:position [5 5 5] :intensity 1}]]
             (if show-dimensions?
               (concat boxes labels)
               boxes))
       (let [{:keys [bounds layers]} (first levels)
             ;; Use explicit bounds or inherit from previous
             effective-bounds (or bounds prev-bounds)
             ;; Calculate the offset for this level based on inheritance
             [base-x base-z] (if bounds
                               [0 0]  ; Reset offset when explicit bounds
                               prev-offset)
             ;; Get the height of this level's content
             level-height (get-layer-height layers)
             ;; Fixed label size (doesn't scale with box)
             label-width 2.3
             label-height 0.29
             level-items (for [layer layers
                               box layer
                               :let [{:keys [align dims color]} box
                                     [dw dh dd] dims
                                     [rel-x rel-z] (calculate-position align effective-bounds dims)
                                     ;; Apply base offset + relative position
                                     x (+ base-x rel-x)
                                     z (+ base-z rel-z)
                                     ;; Bottom-align boxes within level
                                     box-y (+ y-offset (/ dh 2))
                                     ;; Format dimension text: 3" (w) x 4" (l) x 12" (h)
                                     dim-text (str (int dw) "\" (w) x " (int dd) "\" (l) x " (int dh) "\" (h)")
                                     ;; Anchor at front-right vertical edge, label extends outward
                                     label-x (+ x (/ dw 2) (* label-width 0.5))
                                     label-z (+ z (/ dd 2))]]
                           {:box [:box {:position [x box-y z]
                                        :width dw
                                        :height dh
                                        :depth dd
                                        :material {:color (or color "gray")}}]
                            :label [:text-sprite {:text dim-text
                                                  :position [label-x box-y label-z]
                                                  :scale [label-width label-height]}]})
             level-boxes (map :box level-items)
             level-labels (map :label level-items)
             ;; For next iteration: if current layer had alignment, calculate where
             ;; its content is positioned so child can sit on top correctly
             first-box (-> layers first first)
             first-dims (:dims first-box)
             first-align (:align first-box)
             [first-rel-x first-rel-z] (calculate-position first-align effective-bounds first-dims)
             next-offset [(+ base-x first-rel-x) (+ base-z first-rel-z)]
             ;; Next bounds = dimensions of the first box in this layer
             next-bounds (or first-dims effective-bounds)]
         (recur (rest levels)
                (+ y-offset level-height)
                next-bounds
                next-offset
                (into boxes level-boxes)
                (into labels level-labels)))))))

(defn shift-upward
  [dims row-colors align step-change]
  (reduce (fn [acc cur]
            (let [color cur
                  last-layer (-> acc last :layers ffirst)
                  last-dims (:dims last-layer)
                  next-dims [(- (nth last-dims 0)
                                step-change)
                             (+ (nth last-dims 1)
                                step-change)
                             (- (nth last-dims 2)
                                step-change)]]
              (conj acc {:layers [[{:color color
                                    :align align
                                    :dims next-dims}]]})))
          [{:bounds dims
            :layers [[{:color (first row-colors)
                       :dims dims}]]}]
          (rest row-colors)))

(defn shift-upward-v2
  [{:keys [base-dimensions
           row-colors
           alignment
           transform-width
           transform-length
           transform-height]}]
  (reduce (fn [acc cur]
            (let [color cur
                  last-layer (-> acc last :layers ffirst)
                  last-dims (:dims last-layer)
                  next-dims [(transform-width last-dims (count acc))
                             (transform-height last-dims (count acc))
                             (transform-length last-dims (count acc))]]
              (conj acc {:layers [[{:color color
                                    :align alignment
                                    :dims next-dims}]]})))
          [{:bounds base-dimensions
            :layers [[{:color (first row-colors)
                       :dims base-dimensions}]]}]
          (rest row-colors)))

(comment





  (shift-upward [72 6 72] ["red" "blue" "green"] :tl 6)

  (render-elements (create-stack [{:bounds [20 5 20]
                                   :layers [[{:align :tl
                                              :color "red"
                                              :dims [5 5 5]}
                                             {:align :tr
                                              :color "yellow"
                                              :dims [5 5 5]}
                                             {:align :bl
                                              :color "blue"
                                              :dims [5 5 5]}
                                             {:align :br
                                              :color "green"
                                              :dims [5 5 5]}]]}
                                  {:bounds [20 5 20]
                                   :layers [[{:dims [20 5 20]}]]}
                                  {:bounds [20 5 20]
                                   :layers [[{:align :tl
                                              :color "red"
                                              :dims [5 5 5]}
                                             {:align :tr
                                              :color "yellow"
                                              :dims [5 5 5]}
                                             {:align :bl
                                              :color "blue"
                                              :dims [5 5 5]}
                                             {:align :br
                                              :color "green"
                                              :dims [5 5 5]}]]}]))


  (render-elements (create-stack [{:bounds [36 36 48]
                                   :layers [[{:color "grey"
                                              :align :tl
                                              :dims  [4 4 6]}
                                             {:color "grey"
                                              :align :tr
                                              :dims  [4 4 6]}
                                             {:color "grey"
                                              :align :bl
                                              :dims  [4 4 6]}
                                             {:color "grey"
                                              :align :br
                                              :dims  [4 4 6]}]]}
                                  {:layers [[{:color "grey"
                                              :align :tl
                                              :dims [36 36 48]}]]}
                                  {:layers [[{:color "grey"
                                              :align :tl
                                              :dims [36 36 48]}]]}

                                  ;; 8" x 12" x 36" step (sits on the top plane of the base)
                                  ]))


  (render-elements (create-stack [{:bounds [20 1 20]
                                   :layers [[{:align :tl
                                              :color "red"
                                              :dims [5 1 5]}
                                             {:align :tr
                                              :color "yellow"
                                              :dims [5 1 5]}
                                             {:align :bl
                                              :color "blue"
                                              :dims [5 1 5]}
                                             {:align :br
                                              :color "green"
                                              :dims [5 1 5]}]]}
                                  {:bounds [20 2 20]
                                   :layers [[{:color "red"
                                              :dims [20 5 20]}]]}]))

  (render-elements (create-stack [{:bounds [72 6 72]
                                   :layers [[{:color "red"
                                              :dims [72 6 72]}]]}
                                  {:layers [[{:color "blue"
                                              :align :tl
                                              :dims [68 12 68]}]]}
                                  {:layers [[{:color "green"
                                              :align :tl
                                              :dims [56 18 56]}]]}
                                  {:layers [[{:color "red"
                                              :align :tl
                                              :dims [48 24 48]}]]}
                                  {:layers [[{:color "orange"
                                              :align :tl
                                              :dims [24 24 24]}]]}
                                  {:layers [[{:color "yellow"
                                              :align :center
                                              :dims [9 30 9]}]]}]))

  (render-elements [:object {:position [0 0 -4]}
                    [:ambient-light {:intensity 0.5}]
                    [:directional-light {:position [5 5 5] :intensity 1}]
                    [:box {:position [0 0 0]
                           :width 3.0
                           :height 1.0
                           :depth 2.0
                           :material {:color "red"}}]])

  (render-elements (-> (shift-upward [48 6 48] ["red" "blue" "green" "red" "blue"] :tl 9)
                       create-stack))


  (shift-upward [48 6 48] ["red" "blue" "green" "red" "blue"] :tl 9)
  [{:bounds [48 6 48], :layers [[{:color "red", :dims [48 6 48]}]]}
   {:layers [[{:color "blue", :align :tl, :dims [39 15 39]}]]}
   {:layers [[{:color "green", :align :tl, :dims [30 24 30]}]]}
   {:layers [[{:color "red", :align :tl, :dims [21 33 21]}]]}
   {:layers [[{:color "blue", :align :tl, :dims [12 42 12]}]]}]

  ;;=> [{:bounds [48 6 48], :layers [[{:color "red", :dims [48 6 48]}]]}
  ;;    {:layers [[{:color "blue", :align :tl, :dims [32 22 32]}]]}
  ;;    {:layers [[{:color "green", :align :tl, :dims [16 38 16]}]]}
  ;;    {:layers [[{:color "red", :align :tl, :dims [0 54 0]}]]}
  ;;    {:layers [[{:color "blue", :align :tl, :dims [-16 70 -16]}]]}]


  (shift-upward [72 6 72] ["red" "blue" "green" "red" "blue" "green"] :tl 6)

  (render-elements (create-stack [{:bounds [48 6 48], :layers [[{:color "red", :dims [48 2 48]}]]}
                                  {:layers [[{:color "blue", :align :tl, :dims [39 6 39]}]]}
                                  {:layers [[{:color "green", :align :tl, :dims [22 8 22]}]]}
                                  {:layers [[{:color "red", :align :tl, :dims [8 12 8]}]]}
                                  {:layers [[{:color "blue", :align :tl, :dims [3 12 3]}]]}]))


  (render-elements (create-stack (shift-upward [48 2 48] ["red" "blue" "green" "red" "blue"] :tl 10)))


  (let [squeeze 2]
    (render-elements (create-stack (shift-upward-v2 {:base-dimensions [48 2 48]
                                                     :row-colors ["red" "blue" "green" "red" "blue"]
                                                     :alignment :tl
                                                     :transform-width #(- (nth %1 0) (* squeeze %2 2.2))
                                                     :transform-height #(+ (nth %1 1) (* %2 (- squeeze 1)))
                                                     :transform-length #(- (nth %1 2) (* squeeze %2 2.2))}))))

  (shift-upward-v2 {:base-dimensions [48 2 48]
                    :row-colors ["red" "blue" "green" "red" "blue"]
                    :alignment :tl
                    :transform-width #(- (nth % 0) 2)
                    :transform-height #(+ (nth % 1) 2)
                    :transform-length #(- (nth % 2) 2)})



  (let [squeeze 3]
    (create-stack (shift-upward-v2 {:base-dimensions [48 2 48]
                                    :row-colors ["red" "blue" "green" "red" "blue"]
                                    :alignment :tl
                                    :transform-width #(- (nth %1 0) (* squeeze %2 2.2))
                                    :transform-height #(+ (nth %1 1) (* %2 (- squeeze 1)))
                                    :transform-length #(- (nth %1 2) (* squeeze %2 2.2))})))







  ;;Keep from folding
  )

(defn setup-scene! [^js container]
  (let [ctx (th/render root container
                       {:antialias true
                        :entity-types custom-entity-types
                        :on-before-render
                        (fn [_]
                          (when-let [^js controls @controls-atom]
                            (.update controls)))})
        ^js renderer (:threejs-renderer ctx)
        ^js camera (:threejs-default-camera ctx)
        ^js canvas (:canvas ctx)

        resize-fn (fn []
                    (let [width (.-clientWidth container)
                          height (.-clientHeight container)]
                      (.setSize renderer width height false)
                      (set! (.-aspect camera) (/ width height))
                      (.updateProjectionMatrix camera)))]

    ;; Set background color to light blue
    (.setClearColor renderer 0x87CEEB 1)

    ;; Set pixel ratio for crisp rendering
    (.setPixelRatio renderer (.-devicePixelRatio js/window))

    ;; Set 50mm lens
    (set! (.-fov camera) 39)
    (.updateProjectionMatrix camera)

    ;; Set initial camera position (zoomed out to see the object)
    (let [^js cam-pos (.-position camera)]
      (.set cam-pos 100 100 100))

    ;; Set initial size
    (resize-fn)

    ;; Add resize listener
    (.addEventListener js/window "resize" resize-fn)
    (reset! resize-fn-atom resize-fn)

    ;; Setup orbit controls
    (let [^js controls (OrbitControls. camera canvas)
          ^js raycaster (THREE/Raycaster.)
          ^js mouse (THREE/Vector2.)]
      (set! (.-enableDamping controls) true)
      (set! (.-dampingFactor controls) 0.05)
      (set! (.-enabled controls) true)
      (set! (.-enablePan controls) true)
      (set! (.-screenSpacePanning controls) true)
      (let [^js ctrl-target (.-target controls)]
        (.set ctrl-target 0 0 -4))
      (.update controls)

      ;; Double-click to set pivot point
      (.addEventListener canvas "dblclick"
                         (fn [^js event]
                           (let [^js rect (.getBoundingClientRect canvas)]
                             (set! (.-x mouse) (- (* (/ (- (.-clientX event) (.-left rect)) (.-width rect)) 2) 1))
                             (set! (.-y mouse) (- 1 (* (/ (- (.-clientY event) (.-top rect)) (.-height rect)) 2)))
                             (.setFromCamera raycaster mouse camera)
                             (let [^js scene (:threejs-scene ctx)
                                   ^js intersects (.intersectObjects raycaster scene true)]
                               (when (> (.-length intersects) 0)
                                 (let [^js hit (aget intersects 0)
                                       ^js point (.-point hit)
                                       ^js target (.-target controls)]
                                   (.copy target point)
                                   (.update controls)))))))

      (reset! controls-atom controls))

    (reset! context-atom ctx)
    ctx))

(defn cleanup-scene! []
  (when-let [^js controls @controls-atom]
    (.dispose controls)
    (reset! controls-atom nil))
  (when-let [resize-fn @resize-fn-atom]
    (.removeEventListener js/window "resize" resize-fn)
    (reset! resize-fn-atom nil))
  (when-let [^js ctx @context-atom]
    (.dispose ctx)
    (reset! context-atom nil)))

(defnc mockup-view
  [{:keys [active
           intro-complete-callback
           outro-complete-callback]
    :as params}]

  (let [container-ref (hooks/use-ref nil)]
    (hooks/use-layout-effect
     []
     (when-let [^js container @container-ref]
       ;; If context already exists (hot reload), just re-render the scene graph
       (if @context-atom
         (th/render root container)
         (setup-scene! container)))
     ;; Don't cleanup on unmount during dev - let hot reload preserve state
     js/undefined)

    (d/canvas {:class "w-screen h-screen fixed inset-0 z-50"
               :style {:touch-action "none"}
               :ref container-ref})))

;; Shadow-cljs hot reload hooks
(defn ^:dev/before-load stop []
  (js/console.log "Stopping for hot reload...")
  ;; Force cleanup to ensure entity-types are re-registered
  (cleanup-scene!))

(defn ^:dev/after-load start []
  (js/console.log "Hot reload complete - will reinitialize scene"))