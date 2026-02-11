(ns amp.components.threejs.scene
  (:require [threeagent.core :as th]
            ["three" :as THREE]
            ["three/addons/controls/OrbitControls.js" :refer [OrbitControls]]
            [amp.components.threejs.objects :as objects]))

(defn setup-scene!
  "Sets up the 3D scene with Three.js rendering, controls, and event handlers.
   config: {:root-fn fn, :entity-types map}
   atoms:  {:controls atom, :context atom, :resize-fn atom,
            :canvas-listeners atom, :selected-block atom, :camera-state atom}"
  [^js container {:keys [root-fn entity-types]} atoms]
  (let [ctx (th/render root-fn container
                       {:antialias true
                        :shadow-map {:enabled true
                                     :type THREE/PCFSoftShadowMap}
                        :entity-types entity-types
                        :on-before-render
                        (fn [_]
                          (when-let [^js controls @(:controls atoms)]
                            (.update controls))
                          ;; Configure shadow camera on newly-created directional lights
                          (when-let [ctx @(:context atoms)]
                            (objects/configure-shadow-camera! (:threejs-scene ctx))))})
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
      (set! (.-background scene) (objects/create-sky-gradient-texture)))

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
    (reset! (:resize-fn atoms) resize-fn)

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
      (let [dblclick-fn
            (fn [^js event]
              (let [^js rect (.getBoundingClientRect canvas)]
                (set! (.-x mouse) (- (* (/ (- (.-clientX event) (.-left rect)) (.-width rect)) 2) 1))
                (set! (.-y mouse) (- 1 (* (/ (- (.-clientY event) (.-top rect)) (.-height rect)) 2)))
                (.setFromCamera raycaster mouse camera)
                (let [^js scene (:threejs-scene ctx)
                      ^js intersects (.intersectObject raycaster scene true)]
                  (when (> (.-length intersects) 0)
                    (let [^js hit (aget intersects 0)
                          ^js point (.-point hit)
                          ^js target (.-target controls)]
                      (.copy target point)
                      (.update controls))))))

            ;; Click-to-select (with drag tolerance so orbiting doesn't trigger selection)
            click-start (atom nil)
            pointerdown-fn
            (fn [^js event]
              (reset! click-start [(.-clientX event) (.-clientY event)]))
            pointerup-fn
            (fn [^js event]
              (when-let [[sx sy] @click-start]
                (reset! click-start nil)
                (let [dx (- (.-clientX event) sx)
                      dy (- (.-clientY event) sy)]
                  (when (< (+ (* dx dx) (* dy dy)) 25) ;; 5px movement threshold
                    (let [^js rect (.getBoundingClientRect canvas)]
                      (set! (.-x mouse) (- (* (/ (- (.-clientX event) (.-left rect)) (.-width rect)) 2) 1))
                      (set! (.-y mouse) (- 1 (* (/ (- (.-clientY event) (.-top rect)) (.-height rect)) 2)))
                      (.setFromCamera raycaster mouse camera)
                      (let [^js scene-obj (:threejs-scene ctx)
                            ^js intersects (.intersectObject raycaster scene-obj true)]
                        (if (> (.-length intersects) 0)
                          (let [^js hit (aget intersects 0)
                                ^js obj (.-object hit)
                                block-info (.. obj -userData -blockInfo)]
                            (if block-info
                              ;; Selected a block — store info and world position
                              (let [^js world-pos (THREE/Vector3.)]
                                (.getWorldPosition obj world-pos)
                                (reset! (:selected-block atoms)
                                        {:dims (js->clj (.-dims block-info))
                                         :note (.-note block-info)
                                         :color (.-color block-info)
                                         :world-position [(.-x world-pos) (.-y world-pos) (.-z world-pos)]
                                         :width (.. obj -geometry -parameters -width)
                                         :height (.. obj -geometry -parameters -height)
                                         :depth (.. obj -geometry -parameters -depth)}))
                              ;; Clicked ground plane or non-selectable object
                              (reset! (:selected-block atoms) nil)))
                          ;; Clicked empty space
                          (reset! (:selected-block atoms) nil))))))))]

        (.addEventListener canvas "dblclick" dblclick-fn)
        (.addEventListener canvas "pointerdown" pointerdown-fn)
        (.addEventListener canvas "pointerup" pointerup-fn)

        ;; Store listener refs for cleanup
        (reset! (:canvas-listeners atoms)
                {:canvas canvas
                 :dblclick dblclick-fn
                 :pointerdown pointerdown-fn
                 :pointerup pointerup-fn}))

      (reset! (:controls atoms) controls))

    (reset! (:context atoms) ctx)

    ;; Apply any pending camera position that arrived before scene was ready
    (when-let [{:keys [position target]} @(:camera-state atoms)]
      (when position
        (let [^js cam (:threejs-default-camera ctx)
              ^js cam-pos (.-position cam)
              [x y z] position]
          (.set cam-pos x y z)
          (when-let [^js controls @(:controls atoms)]
            (when target
              (let [^js ctrl-target (.-target controls)]
                (.set ctrl-target (nth target 0) (nth target 1) (nth target 2))))
            (.update controls)))))

    ctx))

(defn cleanup-scene!
  "Tears down the 3D scene, disposing controls, removing listeners.
   atoms: {:controls atom, :context atom, :resize-fn atom, :canvas-listeners atom}"
  [atoms]
  (when-let [^js controls @(:controls atoms)]
    (.dispose controls)
    (reset! (:controls atoms) nil))
  (when-let [resize-fn @(:resize-fn atoms)]
    (.removeEventListener js/window "resize" resize-fn)
    (reset! (:resize-fn atoms) nil))
  ;; Remove canvas event listeners
  (when-let [{:keys [^js canvas dblclick pointerdown pointerup]} @(:canvas-listeners atoms)]
    (.removeEventListener canvas "dblclick" dblclick)
    (.removeEventListener canvas "pointerdown" pointerdown)
    (.removeEventListener canvas "pointerup" pointerup)
    (reset! (:canvas-listeners atoms) nil))
  (when-let [^js ctx @(:context atoms)]
    (.dispose ctx)
    (reset! (:context atoms) nil)))

(defn set-camera-position!
  "Set the camera position. Takes [x y z] coordinates.
   Optionally set :target [x y z] to also update the orbit controls look-at point.
   Only updates if values have changed from the last call.
   atoms: {:camera-state atom, :context atom, :controls atom}"
  ([[x y z] atoms] (set-camera-position! [x y z] nil atoms))
  ([[x y z] {:keys [target]} atoms]
   (let [new-state {:position [x y z] :target target}
         old-state @(:camera-state atoms)]
     (when (not= new-state old-state)
       (reset! (:camera-state atoms) new-state)
       (when-let [ctx @(:context atoms)]
         (let [^js camera (:threejs-default-camera ctx)
               ^js cam-pos (.-position camera)]
           (.set cam-pos x y z)
           (when-let [^js controls @(:controls atoms)]
             (when target
               (let [^js ctrl-target (.-target controls)]
                 (.set ctrl-target (nth target 0) (nth target 1) (nth target 2))))
             (.update controls))))))))
