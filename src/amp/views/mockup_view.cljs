(ns amp.views.mockup-view
  (:require [amp.lib.defnc :refer [defnc]]
            [threeagent.core :as th]
            [threeagent.entity :as entity]
            [amp.reducers.requires]
            [amp.services.firebase :refer [listen-to-path listen-to-edn set-edn]]
            [amp.providers.main-provider :refer [use-main-state]]

            [helix.core :refer [$]]
            ["gsap" :refer [gsap]]
            ["three" :as THREE]
            ["three/addons/controls/OrbitControls.js" :refer [OrbitControls]]
            ["three/addons/lines/Line2.js" :refer [Line2]]
            ["three/addons/lines/LineMaterial.js" :refer [LineMaterial]]
            ["three/addons/lines/LineGeometry.js" :refer [LineGeometry]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

;; ============ HOT-RELOADABLE STATE ============
;; These defonce atoms persist across hot reloads

(defonce controls-atom (atom nil))
(defonce context-atom (atom nil))
(defonce resize-fn-atom (atom nil))
(defonce container-atom (atom nil))
(defonce show-dimensions-atom (th/atom false))
(defonce wireframe-atom (th/atom false))
(defonce parts-panel-atom (atom false))
(defonce mockup-data-atom (atom nil))
(defonce camera-state-atom (atom {:position nil :target nil}))



;; Scene elements atom - use threeagent's reactive atom for automatic re-renders
(defonce scene-atom
  (th/atom []))

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

(defn toggle-wireframe!
  "Toggle wireframe display mode."
  []
  (swap! wireframe-atom not))

(defn set-wireframe!
  "Set wireframe display mode."
  [wireframe?]
  (reset! wireframe-atom wireframe?))

(defn toggle-parts-panel!
  "Toggle parts panel visibility."
  []
  (swap! parts-panel-atom not))

(defn extract-parts-list
  "Extracts all parts from mockup data and groups by dimensions.
   Returns a sorted list of {:dims [w h d] :qty n} maps."
  [mockup-data]
  (when-let [data (:data mockup-data)]
    (let [all-parts (for [level data
                          layer (:layers level)
                          box layer
                          :when (:dims box)]
                      (:dims box))
          grouped (frequencies all-parts)
          parts-list (for [[dims qty] grouped]
                       {:dims dims :qty qty})]
      ;; Sort by dimensions (L x W x H)
      (sort-by (fn [{:keys [dims]}]
                 [(- (nth dims 2)) (- (nth dims 0)) (- (nth dims 1))])
               parts-list))))

(defn create-text-texture
  "Creates a canvas texture with text for stamping on blocks."
  [text font-size]
  (let [^js canvas (.createElement js/document "canvas")
        ^js ctx (.getContext canvas "2d")
        ;; Measure text to size canvas appropriately
        _ (set! (.-font ctx) (str "bold " font-size "px Arial"))
        metrics (.measureText ctx text)
        text-width (.-width metrics)
        padding 20
        canvas-width (+ text-width (* padding 2))
        canvas-height (+ font-size (* padding 2))]
    ;; Set canvas size
    (set! (.-width canvas) canvas-width)
    (set! (.-height canvas) canvas-height)
    ;; Redraw after resize (canvas clears on resize)
    (set! (.-font ctx) (str "bold " font-size "px Arial"))
    ;; Transparent background
    (set! (.-fillStyle ctx) "rgba(0, 0, 0, 0)")
    (.fillRect ctx 0 0 canvas-width canvas-height)
    ;; Draw text
    (set! (.-fillStyle ctx) "rgba(0, 0, 0, 0.8)")
    (set! (.-textAlign ctx) "center")
    (set! (.-textBaseline ctx) "middle")
    (.fillText ctx text (/ canvas-width 2) (/ canvas-height 2))
    ;; Create texture
    (let [^js texture (THREE/CanvasTexture. canvas)]
      (set! (.-needsUpdate texture) true)
      {:texture texture
       :width canvas-width
       :height canvas-height})))

;; Helper function for creating text labels as planar meshes (stamped on blocks)
(defn create-text-label [config]
  (let [{:keys [text position block-height block-width scale]} config
        ;; Use block dimensions if provided, otherwise fallback for old :scale format
        face-height (or block-height (when scale (* (first scale) 4)) 4)
        face-width (or block-width face-height)  ; default to square if width not specified
        ;; 5% padding on each side (so 90% of face is available)
        padding-ratio 0.05
        max-label-height (* face-height (- 1 (* 2 padding-ratio)))
        max-label-width (* face-width (- 1 (* 2 padding-ratio)))
        ;; Create texture with good resolution for measuring
        base-font-size 100
        {:keys [texture width height]} (create-text-texture text base-font-size)
        ;; Texture aspect ratio (must preserve this to avoid skewing)
        texture-aspect (/ width height)
        ;; Calculate scale factor to fit within bounds while preserving aspect ratio
        ;; Scale by height: plane-height = max-label-height, plane-width = max-label-height * aspect
        scale-by-height (/ max-label-height height)
        width-if-scale-by-height (* width scale-by-height)
        ;; Scale by width: plane-width = max-label-width, plane-height = max-label-width / aspect
        scale-by-width (/ max-label-width width)
        height-if-scale-by-width (* height scale-by-width)
        ;; Choose the scale that fits both constraints
        scale-factor (if (<= width-if-scale-by-height max-label-width)
                       scale-by-height
                       scale-by-width)
        ;; Final plane dimensions (proportional to texture)
        plane-width (* width scale-factor)
        plane-height (* height scale-factor)
        ^js geometry (THREE/PlaneGeometry. plane-width plane-height)
        ^js material (THREE/MeshBasicMaterial. #js {:map texture
                                                    :transparent true
                                                    :side THREE/DoubleSide
                                                    :depthTest true
                                                    :depthWrite false})
        ^js mesh (THREE/Mesh. geometry material)
        ^js mesh-position (.-position mesh)]
    ;; Position the mesh
    (when position
      (.set mesh-position (nth position 0) (nth position 1) (nth position 2)))
    ;; No rotation needed - plane faces forward (+Z direction) by default
    mesh))

(defn create-edge-box
  "Creates a box rendered as edge lines only (like a line drawing).
   Uses Line2 for thick lines that work across all platforms.
   All edges are rendered in a fixed dark grey color."
  [config]
  (let [{:keys [position width height depth]} config
        hw (/ width 2)
        hh (/ height 2)
        hd (/ depth 2)
        ;; Define the 12 edges of a box as line segments
        ;; Each edge is defined by start and end points
        edges [;; Bottom face edges
               [(- hw) (- hh) (- hd)  hw (- hh) (- hd)]     ; back
               [hw (- hh) (- hd)  hw (- hh) hd]             ; right
               [hw (- hh) hd  (- hw) (- hh) hd]             ; front
               [(- hw) (- hh) hd  (- hw) (- hh) (- hd)]     ; left
               ;; Top face edges
               [(- hw) hh (- hd)  hw hh (- hd)]             ; back
               [hw hh (- hd)  hw hh hd]                     ; right
               [hw hh hd  (- hw) hh hd]                     ; front
               [(- hw) hh hd  (- hw) hh (- hd)]             ; left
               ;; Vertical edges
               [(- hw) (- hh) (- hd)  (- hw) hh (- hd)]     ; back-left
               [hw (- hh) (- hd)  hw hh (- hd)]             ; back-right
               [hw (- hh) hd  hw hh hd]                     ; front-right
               [(- hw) (- hh) hd  (- hw) hh hd]]            ; front-left
        ;; Create a group to hold all edge lines
        ^js group (THREE/Group.)
        ;; Use fixed dark grey color for wireframe mode
        edge-color (THREE/Color. 0x444444)]
    ;; Create each edge as a Line2
    (doseq [edge edges]
      (let [^js geometry (LineGeometry.)
            _ (.setPositions geometry (clj->js edge))
            ^js material (LineMaterial. #js {:color (.getHex edge-color)
                                             :linewidth 3
                                             :resolution (THREE/Vector2. js/window.innerWidth js/window.innerHeight)
                                             :depthTest true
                                             :depthWrite false
                                             :polygonOffset true
                                             :polygonOffsetFactor -1
                                             :polygonOffsetUnits -1})
            ^js line (Line2. geometry material)]
        (.add group line)))
    ;; Position the group
    (when position
      (let [^js group-pos (.-position group)]
        (.set group-pos (nth position 0) (nth position 1) (nth position 2))))
    group))

;; Entity types map - use defonce so it persists across hot reloads
;; Use var reference #' so create-text-label changes are picked up
(defonce custom-entity-types
  {:text-sprite
   (reify entity/IEntityType
     (create [_ _ config]
       (#'create-text-label config))
     (destroy! [_ _ _ _]))
   :edge-box
   (reify entity/IEntityType
     (create [_ _ config]
       (#'create-edge-box config))
     (destroy! [_ _ _ _]))})

(defn create-stack
  "Creates a vertical stack of box layers from element data.
   Each element has :bounds [w h d] and :layers (vector of box groups).
   Boxes in all layers of an element share the same vertical level.
   If no bounds specified, inherits from previous layer and positions
   the new layer sitting on top of the previous content.
   Options:
     :show-dimensions? - if true, adds floating dimension labels (default: reads from show-dimensions-atom)
     :wireframe? - if true, renders boxes in wireframe mode (default: reads from wireframe-atom)"
  ([elements] (create-stack elements {}))
  ([elements {:keys [show-dimensions? wireframe?]
              :or {show-dimensions? @show-dimensions-atom
                   wireframe? @wireframe-atom}}]
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
                                     ;; Format dimension text: 3"(W) x 12"(L) x 12"(H)
                                     dim-text (str (int dw) "\"(W) x " (int dd) "\"(L) x " (int dh) "\"(H)")
                                     ;; Position label on front face of box (positive Z side)
                                     label-y box-y  ; center of box height
                                     label-x x
                                     label-z (+ z (/ dd 2) 0.1)]]  ; front face + offset to prevent z-fighting
                           {:box (if wireframe?
                                   [:edge-box {:position [x box-y z]
                                               :width dw
                                               :height dh
                                               :depth dd
                                               :color (or color "gray")}]
                                   [:box {:position [x box-y z]
                                          :width dw
                                          :height dh
                                          :depth dd
                                          :material {:color (or color "gray")}}])
                            :label [:text-sprite {:text dim-text
                                                  :position [label-x label-y label-z]
                                                  :block-height dh
                                                  :block-width dw}]})
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
                                  {:layers [[{:color "blue"
                                              :align :tl
                                              :dims [36 36 48]}]]}
                                  {:layers [[{:color "red"
                                              :align :tl
                                              :dims [36 8 12]}]]}
                                  {:layers [[{:color "green"
                                              :align :tl
                                              :dims [18 12 12]}]]}

                                  {:layers [[{:color "grey"
                                              :align :tl
                                              :dims [4 4 4]}]]}

                                  ;; 8" x 12" x 36" step (sits on the top plane of the base)
                                  ]))

  (render-elements (create-stack [{:bounds [36 36 60]
                                   :layers [[{:color "red"
                                              :align :tl
                                              :dims  [4 4 6]}
                                             {:color "red"
                                              :align :tr
                                              :dims  [4 4 6]}
                                             {:color "red"
                                              :align :bl
                                              :dims  [4 4 6]}
                                             {:color "red"
                                              :align :br
                                              :dims  [4 4 6]}]]}
                                  {:layers [[{:color "yellow"
                                              :align :tl
                                              :dims [36 36 60]}]]}
                                  {:layers [[{:color "red"
                                              :align :tl
                                              :dims [36 6 28]}]]}
                                  {:layers [[{:color "white"
                                              :align :tl
                                              :dims [12 12 28]}]]}

                                  {:layers [[{:color "darkred"
                                              :align :tl
                                              :dims [7 7 7]}]]}

                                  ;; 8" x 12" x 36" step (sits on the top plane of the base)
                                  ]))

  ;; Squares all the way
  (render-elements (create-stack [{:bounds [36 36 60]
                                   :layers [[{:color "red"
                                              :align :tl
                                              :dims  [4 4 6]}
                                             {:color "red"
                                              :align :tr
                                              :dims  [4 4 6]}
                                             {:color "red"
                                              :align :bl
                                              :dims  [4 4 6]}
                                             {:color "red"
                                              :align :br
                                              :dims  [4 4 6]}]]}
                                  {:layers [[{:color "yellow"
                                              :align :tl
                                              :dims [36 36 60]}]]}
                                  {:layers [[{:color "red"
                                              :align :tl
                                              :dims [36 6 28]}]]}
                                  {:layers [[{:color "white"
                                              :align :tl
                                              :dims [12 12 28]}]]}

                                  {:layers [[{:color "darkred"
                                              :align :tl
                                              :dims [12 12 14]}]]}
                                  {:layers [[{:color "gold"
                                              :align :tl
                                              :dims [12 2 2]}]]}

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





(comment

  (set-camera-position! [60 80 50] {:target [0 20 0]})
  (set-camera-position! 100 100 100
                        {:target [0 30 0]})

  (set-camera-position! 100 100 100)

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
                    (let [width js/window.innerWidth
                          height js/window.innerHeight]
                      (.setSize renderer width height true)
                      (set! (.-aspect camera) (/ width height))
                      (.updateProjectionMatrix camera)))]

    ;; Set background color to light blue
    (.setClearColor renderer 0xFFFFFF 1)

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

    ;; Apply any pending camera position that arrived before scene was ready
    (when-let [{:keys [position target]} @camera-state-atom]
      (when position
        (let [^js cam (:threejs-default-camera ctx)
              ^js cam-pos (.-position cam)
              [x y z] position]
          (.set cam-pos x y z)
          (when-let [^js controls @controls-atom]
            (when target
              (let [^js ctrl-target (.-target controls)]
                (.set ctrl-target (nth target 0) (nth target 1) (nth target 2))))
            (.update controls)))))

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

(defn set-camera-position!
  "Set the camera position. Takes [x y z] coordinates.
   Optionally set :target [x y z] to also update the orbit controls look-at point.
   Only updates if values have changed from the last call."
  ([[x y z]] (set-camera-position! [x y z] nil))
  ([[x y z] {:keys [target]}]
   (let [new-state {:position [x y z] :target target}
         old-state @camera-state-atom]
     (when (not= new-state old-state)
       (reset! camera-state-atom new-state)
       (when-let [ctx @context-atom]
         (let [^js camera (:threejs-default-camera ctx)
               ^js cam-pos (.-position camera)]
           (.set cam-pos x y z)
           (when-let [^js controls @controls-atom]
             (when target
               (let [^js ctrl-target (.-target controls)]
                 (.set ctrl-target (nth target 0) (nth target 1) (nth target 2))))
             (.update controls))))))))


(defn re-render-scene!
  "Re-renders the current scene with updated options (e.g., wireframe toggle)."
  []
  (when-let [data @mockup-data-atom]
    (render-elements (create-stack (:data data)))))

(defn display-firebase-data
  [{:keys [name camera data] :as mockup-data}]
  (reset! mockup-data-atom mockup-data)
  (render-elements (create-stack data))
  (set-camera-position! (:position camera) {:target (:target camera)}))

;; Watch wireframe-atom to re-render when it changes
(add-watch wireframe-atom :wireframe-watcher
           (fn [_ _ old-val new-val]
             (when (not= old-val new-val)
               (re-render-scene!))))

(comment

  (listen-to-edn "mockup" display-firebase-data)
  (set-edn "mockup" {:name "The Big Red"
                     :camera {:position [210 210 210]
                              :target [0 20 0]}
                     :data [{:bounds [36 36 60]
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
                            {:layers [[{:color "white"
                                        :align :tl
                                        :dims [36 36 60]}]]}
                            {:layers [[{:color "grey"
                                        :align :tl
                                        :dims [36 6 28]}]]}
                            {:layers [[{:color "white"
                                        :align :tl
                                        :dims [12 12 28]}]]}
                            {:layers [[{:color "grey"
                                        :align :tl
                                        :dims [12 12 14]}]]}
                            {:layers [[{:color "white"
                                        :align :tl
                                        :dims [12 2 2]}]]}

                            ;; 8" x 12" x 36" step (sits on the top plane of the base)
                            ]})


  (set-edn "mockup-001"
           {:name "Mockup 001"
            :camera {:position [210 210 210]
                     :target [0 20 0]}
            :data [{:bounds [36 36 60]
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
                   {:layers [[{:color "white"
                               :align :tl
                               :dims [36 36 60]}]]}
                   {:layers [[{:color "grey"
                               :align :tl
                               :dims [36 6 28]}]]}
                   {:layers [[{:color "white"
                               :align :tl
                               :dims [12 12 28]}]]}
                   {:layers [[{:color "grey"
                               :align :tl
                               :dims [12 12 14]}]]}
                   #_{:layers [[{:color "white"
                                 :align :tl
                                 :dims [12 2 2]}]]}

                   ;; 8" x 12" x 36" step (sits on the top plane of the base)
                   ]}
           #_{:name "Mockup 001"
              :camera {:position [210 210 210]
                       :target [0 20 0]}
              :data [{:bounds [36 36 60]
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
                     {:layers [[{:color "white"
                                 :align :tl
                                 :dims [36 36 60]}]]}
                     {:layers [[{:color "grey"
                                 :align :tl
                                 :dims [36 6 28]}]]}
                     {:layers [[{:color "white"
                                 :align :tl
                                 :dims [12 12 28]}]]}
                     {:layers [[{:color "grey"
                                 :align :tl
                                 :dims [12 12 14]}]]}
                     #_{:layers [[{:color "white"
                                   :align :tl
                                   :dims [12 2 2]}]]}

                     ;; 8" x 12" x 36" step (sits on the top plane of the base)
                     ]})

  (set-edn "mockup-002"
           {:name "Mockup 002"
            :camera {:position [210 210 210]
                     :target [0 20 0]}
            :data [{:bounds [36 36 48]
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
                   {:layers [[{:color "white"
                               :align :tl
                               :dims [36 36 48]}]]}
                   {:layers [[{:color "grey"
                               :align :tl
                               :dims [36 6 12]}]]}
                   {:layers [[{:color "white"
                               :align :tl
                               :dims [12 6 12]}]]}
                   {:layers [[{:color "grey"
                               :align :tl
                               :dims [4 4 4]}]]}]})


  (set-edn "big-red" {:name "The Big Red"
                      :camera {:position [210 210 210]
                               :target [0 20 0]}
                      :data [{:bounds [144 36 72]
                              :layers [[{:color "yellow"
                                         :align :tl
                                         :dims  [4 4 6]}
                                        {:color "black"
                                         :align :tr
                                         :dims  [4 4 6]}
                                        {:color "yellow"
                                         :align :bl
                                         :dims  [4 4 6]}
                                        {:color "green"
                                         :align :br
                                         :dims  [4 4 6]}]]}
                             {:layers [[{:color "red"
                                         :align :tl
                                         :dims [144 36 72]}]]}
                             {:layers [[{:color "lightblue"
                                         :align :tl
                                         :dims [36 6 28]}]]}
                             {:layers [[{:color "white"
                                         :align :tl
                                         :dims [12 12 28]}]]}
                             {:layers [[{:color "darkred"
                                         :align :tl
                                         :dims [12 12 14]}]]}
                             {:layers [[{:color "gold"
                                         :align :tl
                                         :dims [12 2 2]}]]}

                             ;; 8" x 12" x 36" step (sits on the top plane of the base)
                             ]})


  ;;Keep from folding
  )


(defnc mockup-view
  [{:keys [active
           intro-complete-callback
           outro-complete-callback]
    :as params}]

  (let [[state _] (use-main-state)
        piece-id (get-in state [:current-route :query-params :piece])
        container-ref (hooks/use-ref nil)
        [wireframe? set-wireframe-state!] (hooks/use-state false)
        [panel-open? set-panel-open!] (hooks/use-state false)
        [mockup-data set-mockup-data!] (hooks/use-state nil)]

    ;; Sync wireframe state with atom for reactivity
    (hooks/use-effect
     []
     (let [update-fn (fn [_ _ _ new-val] (set-wireframe-state! new-val))]
       (add-watch wireframe-atom :ui-sync update-fn)
       (set-wireframe-state! @wireframe-atom)
       #(remove-watch wireframe-atom :ui-sync)))

    ;; Sync parts panel state with atom
    (hooks/use-effect
     []
     (let [update-fn (fn [_ _ _ new-val] (set-panel-open! new-val))]
       (add-watch parts-panel-atom :panel-sync update-fn)
       (set-panel-open! @parts-panel-atom)
       #(remove-watch parts-panel-atom :panel-sync)))

    ;; Sync mockup data for parts list
    (hooks/use-effect
     []
     (let [update-fn (fn [_ _ _ new-val] (set-mockup-data! new-val))]
       (add-watch mockup-data-atom :data-sync update-fn)
       (set-mockup-data! @mockup-data-atom)
       #(remove-watch mockup-data-atom :data-sync)))

    (hooks/use-layout-effect
     []
     (when-let [^js container @container-ref]
       ;; Store container reference for hot reload
       (reset! container-atom container)
       ;; Setup scene if not already done
       (when-not @context-atom
         (setup-scene! container)))
     ;; Don't cleanup on unmount during dev - let hot reload preserve state
     js/undefined)

    ;; Setup firebase listener to the current piece id.
    (hooks/use-effect []
                      (listen-to-edn piece-id display-firebase-data))

    (d/div
     {:class "relative w-screen h-screen"}
     (d/canvas {:class "fixed inset-0 z-10"
                :style {:touch-action "none"}
                :ref container-ref})
     ;; HUD
     (d/div {:class "z-20 flex flex-col gap-2 absolute bg-white/20 px-4 py-2 border-slate-800 border-4 m-2"}
            (d/p {:class "text-md font-fira-code"} (or piece-id "N/A"))
            (d/p {:class "text-sm font-fira-code italic"} "v1.2")
            (d/button {:class "px-3 py-1 bg-slate-800 text-white text-sm font-fira-code rounded hover:bg-slate-700 transition-colors"
                       :on-click toggle-wireframe!}
                      (if wireframe? "Solid" "Lines"))
            (d/button {:class "px-3 py-1 bg-slate-800 text-white text-sm font-fira-code rounded hover:bg-slate-700 transition-colors"
                       :on-click toggle-parts-panel!}
                      "Parts List"))
     ;; Parts panel (slide in from right)
     (d/div {:class (str "z-30 fixed top-0 right-0 h-full bg-white border-l-4 border-slate-800 shadow-lg "
                         "transition-transform duration-300 ease-in-out "
                         (if panel-open? "translate-x-0" "translate-x-full"))
             :style {:width "320px"}}
            ;; Panel header
            (d/div {:class "flex justify-between items-center px-4 py-3 border-b-2 border-slate-300"}
                   (d/h2 {:class "text-lg font-bold font-fira-code"} "Parts List")
                   (d/button {:class "text-2xl font-bold text-slate-600 hover:text-slate-800"
                              :on-click toggle-parts-panel!}
                             "×"))
            ;; Panel content
            (d/div {:class "p-4 overflow-y-auto" :style {:height "calc(100% - 60px)"}}
                   (if-let [parts (extract-parts-list mockup-data)]
                     (d/ol {:class "list-decimal list-inside space-y-2 font-fira-code text-sm"}
                           (map-indexed
                            (fn [idx {:keys [dims qty]}]
                              (let [[w h d] dims]
                                (d/li {:key idx :class "py-1 border-b border-slate-200"}
                                      (d/span {:class "font-bold"} (str qty "x "))
                                      (d/span {} (str d "\"(L) × " w "\"(W) × " h "\"(H)")))))
                            parts))
                     (d/p {:class "text-slate-500 italic"} "No parts data available")))))))

;; Shadow-cljs hot reload hooks
;; Since custom-entity-types uses defonce, it persists across hot reloads
;; Just let React re-render with the existing context
(defn ^:dev/before-load stop []
  (js/console.log "Stopping for hot reload..."))

(defn ^:dev/after-load start []
  (js/console.log "Hot reload complete"))
