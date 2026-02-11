(ns amp.views.mockup-view
  (:require [amp.lib.defnc :refer [defnc]]
            [threeagent.core :as th]
            [threeagent.entity :as entity]
            [amp.reducers.requires]
            [amp.components.icons :refer [CollapseIcon ExpandIcon DocumentIcon]]
            [amp.services.firebase :refer [listen-to-edn]]
            [amp.providers.main-provider :refer [use-main-state]]

            [helix.core :refer [$]]

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
(defonce ground-plane-atom (th/atom true))
(defonce parts-panel-atom (atom false))
(defonce mockup-data-atom (th/atom nil))
(defonce camera-state-atom (atom {:position nil :target nil}))

(declare create-stack)

(declare build-box-tree)

;; Dev/REPL override — when non-nil, root returns this directly
(defonce scene-override-atom (th/atom nil))

;; Call this function to render arbitrary elements from the REPL
;; Example: (render-elements [:object {:position [0 0 -4]} [:box {:dims [1 1 1] :material {:color "green"}}]])
(defn render-elements [elements]
  (reset! scene-override-atom elements))

;; Root component render function — fully derived from reactive atoms.
;; Reading wireframe-atom, ground-plane-atom, and mockup-data-atom here
;; means threeagent automatically re-renders when any of them change.
(defn root []
  (if-let [override @scene-override-atom]
    override
    (let [data @mockup-data-atom
          wireframe? @wireframe-atom
          show-ground? @ground-plane-atom]
      (if data
        (create-stack (:data data)
                      {:wireframe? wireframe?
                       :show-ground? show-ground?
                       :lighting (:lighting data)})
        [:object]))))

(defn create-sky-gradient-texture
  "Creates a vertical gradient canvas texture simulating a warm sky/sun environment."
  []
  (let [^js canvas (.createElement js/document "canvas")
        _ (set! (.-width canvas) 2)
        _ (set! (.-height canvas) 512)
        ^js ctx (.getContext canvas "2d")
        ^js gradient (.createLinearGradient ctx 0 0 0 512)]
    ;; Sky gradient: soft blue top → warm peach horizon → light cream bottom
    (.addColorStop gradient 0.0 "#7EC8E3")
    (.addColorStop gradient 0.3 "#B8DBE8")
    (.addColorStop gradient 0.5 "#E8D5C4")
    (.addColorStop gradient 0.7 "#F5EDE4")
    (.addColorStop gradient 1.0 "#FAF6F0")
    (set! (.-fillStyle ctx) gradient)
    (.fillRect ctx 0 0 2 512)
    (let [^js texture (THREE/CanvasTexture. canvas)]
      (set! (.-needsUpdate texture) true)
      texture)))

(defn configure-shadow-camera!
  "Traverses scene to find DirectionalLight and configure its shadow camera
   for proper coverage. Marks each light so it's only configured once."
  [^js scene]
  (when scene
    (.traverse scene
               (fn [^js obj]
                 (when (and (instance? THREE/DirectionalLight obj)
                            (not (.-_shadowConfigured obj)))
                   (let [^js shadow (.-shadow obj)
                         ^js shadow-cam (.-camera shadow)
                         size 200]
                     (set! (.-left shadow-cam) (- size))
                     (set! (.-right shadow-cam) size)
                     (set! (.-top shadow-cam) size)
                     (set! (.-bottom shadow-cam) (- size))
                     (set! (.-near shadow-cam) 0.5)
                     (set! (.-far shadow-cam) 500)
                     (set! (.. shadow -mapSize -x) 2048)
                     (set! (.. shadow -mapSize -y) 2048)
                     (set! (.-bias shadow) -0.0001)
                     ;; Dispose old shadow map so new mapSize takes effect
                     (when-let [^js m (.-map shadow)]
                       (.dispose m)
                       (set! (.-map shadow) nil))
                     (set! (.-_shadowConfigured obj) true)))))))

(defn- fmt-dim
  "Formats a dimension value: integer when whole, 1 decimal place otherwise."
  [n]
  (if (== n (js/Math.floor n))
    (str (int n))
    (.toFixed n 1)))

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

(defn toggle-ground-plane!
  "Toggle ground plane visibility."
  []
  (swap! ground-plane-atom not))

(defn set-ground-plane!
  "Set ground plane visibility."
  [visible?]
  (reset! ground-plane-atom visible?))

(declare total-level-height)

(defn- collect-all-dims
  "Recursively collects all :dims vectors from the data tree,
   including boxes nested via :layers on individual boxes."
  [data]
  (when (seq data)
    (mapcat
     (fn [level]
       (mapcat
        (fn [layer-group]
          (mapcat
           (fn [box]
             (concat
              (when (:dims box) [(:dims box)])
              (when (seq (:layers box))
                (collect-all-dims [{:layers (:layers box)}]))))
           layer-group))
        (:layers level)))
     data)))

(defn extract-parts-list
  "Extracts all parts from mockup data and groups by dimensions.
   Recurses into nested :layers so every rendered box is counted.
   Returns a sorted list of {:dims [w h d] :qty n} maps."
  [mockup-data]
  (when-let [data (:data mockup-data)]
    (let [all-parts (collect-all-dims data)
          grouped (frequencies all-parts)
          parts-list (for [[dims qty] grouped]
                       {:dims dims :qty qty})]
      ;; Sort by dimensions (L x W x H)
      (sort-by (fn [{:keys [dims]}]
                 [(- (nth dims 2)) (- (nth dims 0)) (- (nth dims 1))])
               parts-list))))

(defn calculate-total-dimensions
  "Calculates the overall bounding box of the full stacked piece.
   Width & Length are the max across ALL dims in the tree (including nested).
   Height is computed recursively via total-level-height so stacked layers
   are properly summed. Returns unrounded float values."
  [mockup-data]
  (when-let [data (:data mockup-data)]
    (when (seq data)
      (let [all-dims (collect-all-dims data)
            total-w (when (seq all-dims)
                      (apply max (map #(nth % 0) all-dims)))
            total-d (when (seq all-dims)
                      (apply max (map #(nth % 2) all-dims)))
            total-h (reduce + 0.0
                            (for [level data
                                  :when (seq (:layers level))]
                              (total-level-height (:layers level))))]
        (when (and total-w total-d)
          {:width (double total-w)
           :height total-h
           :length (double total-d)})))))

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
     (destroy! [_ _ ^js obj _]
       (when obj
         (.traverse obj
                    (fn [^js child]
                      (when (.-geometry child)
                        (.dispose (.-geometry child)))
                      (when (.-material child)
                        (.dispose (.-material child))))))))})




(declare total-level-height)

(defn- total-box-height
  "Returns the total height a box occupies, including any nested layers stacked on top.
   Falls back to :bounds if :dims is not set."
  [{:keys [dims bounds layers]}]
  (let [[_dw dh _dd] (or dims bounds [0 0 0])]
    (if (seq layers)
      (+ dh (total-level-height layers))
      dh)))

(defn- total-level-height
  "Returns the total stacked height of all layer groups in a level.
   Layer groups stack vertically (summed), boxes within a group share the
   same vertical space (max). Recurses into nested children."
  [layers]
  (reduce + (map (fn [lg]
                   (if (seq lg)
                     (apply max (map total-box-height lg))
                     0))
                 layers)))

(defn- layer-group-height
  "Returns the max total height of a single layer group (vector of boxes),
   including recursively nested children."
  [layer-group]
  (if (seq layer-group)
    (apply max (map total-box-height layer-group))
    0))

(defn- build-layer-elements
  "Builds threeagent elements for a single layer group at a given y-offset.
   Returns a vector of elements.
   When a box has no :dims, falls back to :bounds then to the parent effective-bounds.
   Children use the box's :bounds (or :dims) as their effective-bounds."
  [layer-group y-offset effective-bounds base-x base-z wireframe?]
  (into []
        (mapcat identity
                (for [box layer-group
                      :let [{:keys [align dims bounds color]} box
                            sub-layers (:layers box)
                            ;; Effective dims for this box: dims > bounds > parent effective-bounds
                            effective-dims (or dims bounds effective-bounds)
                            [dw dh dd] effective-dims
                            [rel-x rel-z] (calculate-position align effective-bounds effective-dims)
                            x (+ base-x rel-x)
                            z (+ base-z rel-z)
                            box-y (+ y-offset (/ dh 2))
                            ;; Children use box's bounds if set, else box's dims, else parent bounds
                            child-bounds (or bounds dims effective-bounds)]]
                  (let [;; Only render a visible box if :dims is explicitly set
                        box-elem (when dims
                                   (if wireframe?
                                     [:edge-box {:position [x box-y z]
                                                 :width dw
                                                 :height dh
                                                 :depth dd
                                                 :color (or color "gray")}]
                                     [:box {:position [x box-y z]
                                            :cast-shadow true
                                            :width dw
                                            :height dh
                                            :depth dd
                                            :material {:color (or color "gray")}}]))]
                    (if (seq sub-layers)
                      (let [child-elems (build-box-tree
                                         [{:bounds child-bounds :layers sub-layers}]
                                         wireframe?)]
                        (cond-> []
                          box-elem (conj box-elem)
                          true (conj (into [:object {:position [x (+ y-offset dh) z]}]
                                           child-elems))))
                      (if box-elem
                        [box-elem]
                        [])))))))

(defn- build-box-tree
  "Recursively builds threeagent elements from stacked levels.
   Each level has :bounds and :layers. Layers within a level stack vertically —
   each layer group sits on top of the previous one's tallest content (including children).
   When a box has nested :layers, children are wrapped in an [:object] group
   positioned at the top of the parent box, making child positions relative."
  [levels wireframe?]
  (loop [remaining levels
         y-offset 0
         prev-bounds nil
         prev-offset [0 0]
         elements []]
    (if (empty? remaining)
      elements
      (let [{:keys [bounds layers]} (first remaining)
            effective-bounds (or bounds prev-bounds)
            [base-x base-z] (if bounds [0 0] prev-offset)
            ;; Process each layer group sequentially, stacking vertically
            {:keys [elems total-h]}
            (reduce (fn [{:keys [elems layer-y]} layer-group]
                      (let [layer-elems (build-layer-elements
                                         layer-group layer-y effective-bounds
                                         base-x base-z wireframe?)
                            h (layer-group-height layer-group)]
                        {:elems (into elems layer-elems)
                         :layer-y (+ layer-y h)
                         :total-h (+ layer-y h)}))
                    {:elems [] :layer-y y-offset :total-h y-offset}
                    layers)
            first-box (-> layers first first)
            first-dims (or (:dims first-box) (:bounds first-box))
            first-align (:align first-box)
            [first-rel-x first-rel-z] (calculate-position first-align effective-bounds (or first-dims effective-bounds))
            next-offset [(+ base-x first-rel-x) (+ base-z first-rel-z)]
            next-bounds (or first-dims effective-bounds)]
        (recur (rest remaining)
               total-h
               next-bounds
               next-offset
               (into elements elems))))))

(defn create-stack
  "Creates a vertical stack of box layers with support for nested layers.
   Each box can have :layers for sub-layers positioned relative to its top.
   Uses [:object] groups for nesting so child positions are relative to parent.
   Options:
     :wireframe? - if true, renders boxes in wireframe mode (default: reads from wireframe-atom)
     :show-ground? - if true, adds a ground plane (default: reads from ground-plane-atom)
     :lighting - vector of light elements, e.g. [[:ambient-light {:intensity 0.5}]].
                 When nil, uses default ambient + directional lights."
  ([elements] (create-stack elements {}))
  ([elements {:keys [wireframe? show-ground? lighting]
              :or {wireframe? @wireframe-atom
                   show-ground? @ground-plane-atom}}]
   (let [boxes (build-box-tree elements wireframe?)
         lights (or lighting
                    [[:ambient-light {:intensity 0.7}]
                     [:directional-light {:cast-shadow true
                                          :position [80 120 60]
                                          :intensity 1.5}]])]
     (into (into [:object {:position [0 0 -4]}]
                 (conj (vec lights)
                       ;; Ground plane container — always present to keep child indices stable
                       [:object {}
                        (when show-ground?
                          [:box {:position [0 -0.05 0]
                                 :receive-shadow true
                                 :width 500
                                 :height 0.1
                                 :depth 500
                                 :material {:color 0xf0ece6}}])]))
           boxes))))

(defn setup-scene! [^js container]
  (let [ctx (th/render root container
                       {:antialias true
                        :shadow-map {:enabled true
                                     :type THREE/PCFSoftShadowMap}
                        :entity-types custom-entity-types
                        :on-before-render
                        (fn [_]
                          (when-let [^js controls @controls-atom]
                            (.update controls))
                          ;; Configure shadow camera on newly-created directional lights
                          (when-let [ctx @context-atom]
                            (configure-shadow-camera! (:threejs-scene ctx))))})
        ^js renderer (:threejs-renderer ctx)
        ^js camera (:threejs-default-camera ctx)
        ^js canvas (:canvas ctx)

        resize-fn (fn []
                    (let [width js/window.innerWidth
                          height js/window.innerHeight]
                      (.setSize renderer width height true)
                      (set! (.-aspect camera) (/ width height))
                      (.updateProjectionMatrix camera)))]

    ;; Set gradient sky background (warm sun environment)
    (let [^js scene (:threejs-scene ctx)]
      (set! (.-background scene) (create-sky-gradient-texture)))

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

(defn display-firebase-data
  [{:keys [camera] :as mockup-data}]
  (reset! scene-override-atom nil) ;; Clear any REPL override
  (reset! mockup-data-atom mockup-data)
  (set-camera-position! (:position camera) {:target (:target camera)}))

;; No watchers needed — root derives the scene directly from the reactive
;; atoms (wireframe-atom, ground-plane-atom, mockup-data-atom), so threeagent
;; automatically re-renders when any of them change.

(defnc hud-header
  [{:keys [title set-hud-open! hud-open?]}]
  (d/div {:class "flex items-center cursor-pointer select-none"
          :on-click #(set-hud-open! (not hud-open?))}
         ($ (if hud-open? CollapseIcon ExpandIcon)
            {:class "w-5 h-5 text-slate-800 mr-4"})
         (d/p {:class "text-md font-fira-code font-bold"} title)))

(defnc mockup-view
  [{:keys [active
           intro-complete-callback
           outro-complete-callback]
    :as params}]

  (let [[state _] (use-main-state)
        piece-id (get-in state [:current-route :query-params :piece])
        container-ref (hooks/use-ref nil)
        [wireframe? set-wireframe-state!] (hooks/use-state false)
        [ground-plane? set-ground-plane-state!] (hooks/use-state false)
        [panel-open? set-panel-open!] (hooks/use-state false)
        [hud-open? set-hud-open!] (hooks/use-state true)
        [mockup-data set-mockup-data!] (hooks/use-state nil)
        [copied? set-copied!] (hooks/use-state false)]

    ;; Sync wireframe state with atom for reactivity
    (hooks/use-effect
     []
     (let [update-fn (fn [_ _ _ new-val] (set-wireframe-state! new-val))]
       (add-watch wireframe-atom :ui-sync update-fn)
       (set-wireframe-state! @wireframe-atom)
       #(remove-watch wireframe-atom :ui-sync)))

    ;; Sync ground plane state with atom
    (hooks/use-effect
     []
     (let [update-fn (fn [_ _ _ new-val] (set-ground-plane-state! new-val))]
       (add-watch ground-plane-atom :ground-sync update-fn)
       (set-ground-plane-state! @ground-plane-atom)
       #(remove-watch ground-plane-atom :ground-sync)))

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
     (d/div {:class "z-20 flex flex-col gap-2 absolute bg-white/40 px-4 py-2 border-slate-800 border-4 m-2"}
            ($ hud-header {:set-hud-open! set-hud-open!
                           :title (or (:name mockup-data) "Untitled")
                           :hud-open? hud-open?})
            (when hud-open?
              (d/div {:class "flex flex-col gap-2"}
                     (when-let [{:keys [width height length]} (calculate-total-dimensions mockup-data)]
                       (d/p {:class "text-xs font-fira-code text-slate-700"}
                            (str (fmt-dim length) "\"(L) × " (fmt-dim width) "\"(W) × " (fmt-dim height) "\"(H)")))
                     #_(d/p {:class "text-xs font-fira-code text-slate-600"} (or piece-id "N/A"))
                     (d/button {:class "px-3 py-1 bg-slate-800 text-white text-sm font-fira-code rounded hover:bg-slate-700 transition-colors"
                                :on-click toggle-wireframe!}
                               (if wireframe? "Solid" "Lines"))
                     (d/button {:class "px-3 py-1 bg-slate-800 text-white text-sm font-fira-code rounded hover:bg-slate-700 transition-colors"
                                :on-click toggle-ground-plane!}
                               (if ground-plane? "Hide Ground" "Show Ground"))
                     (d/button {:class "px-3 py-1 bg-slate-800 text-white text-sm font-fira-code rounded hover:bg-slate-700 transition-colors"
                                :on-click toggle-parts-panel!}
                               "Parts List"))))
     ;; Copy link button — fixed top-right
     (d/button {:class (str "z-20 fixed top-0 right-0 m-2 p-2 rounded "
                            "bg-white/40 border-2 border-slate-800 "
                            "hover:bg-white/60 transition-colors")
                :title "Copy link to clipboard"
                :on-click (fn []
                            (let [url (str "https://armenianpavilion2026.org/mockups?piece=" piece-id)]
                              (-> (js/navigator.clipboard.writeText url)
                                  (.then (fn []
                                           (set-copied! true)
                                           (js/setTimeout #(set-copied! false) 2000))))))}
               (if copied?
                 (d/span {:class "text-xs font-fira-code text-slate-800"} "Copied!")
                 ($ DocumentIcon {:class "w-5 h-5 text-slate-800"})))
     ;; Parts panel (slide in from right)
     (d/div {:class (str "z-30 fixed top-0 right-0 h-full bg-white border-l-4 border-slate-800 shadow-lg "
                         "transition-transform duration-300 ease-in-out "
                         (if panel-open? "translate-x-0" "translate-x-full"))
             :style {:width "360px"}}
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
                                      (d/span {} (str (fmt-dim d) "\"(L) × " (fmt-dim w) "\"(W) × " (fmt-dim h) "\"(H)")))))
                            parts))
                     (d/p {:class "text-slate-500 italic"} "No parts data available"))))
     ;; Footer
     (d/footer {:class "z-20 fixed bottom-0 left-0 right-0 py-2 px-4"}
               (d/p {:class "text-xs font-fira-code text-slate-700"}
                    "© Armenian Pavilion Venice Biennale Arte 2026")))))

;; Shadow-cljs hot reload hooks
;; Since custom-entity-types uses defonce, it persists across hot reloads
;; Just let React re-render with the existing context
(defn ^:dev/before-load stop []
  (js/console.log "Stopping for hot reload..."))

(defn ^:dev/after-load start []
  (js/console.log "Hot reload complete"))
