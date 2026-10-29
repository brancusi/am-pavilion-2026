(ns amp.ui.threejs-slide
  "Self-contained Three.js slide for use inside carousels / galleries.
   Spins up a lightweight threeagent instance with orbit controls inside
   the slide container, using the simple-stack-formation renderer.

   amp.ui.fit-gallery shows a cover first and only renders this (and so
   only loads the :threejs module) once someone chooses to explore."
  (:require ["three" :as THREE]
            ["three/addons/controls/OrbitControls.js" :refer [OrbitControls]]
            [amp.three.objects :as objects]
            [amp.three.scene :as scene]
            [amp.three.simple-stack-formation :as ssf]
            [amp.lib.defnc :refer [defnc]]
            [helix.dom :as d]
            [helix.hooks :as hooks]
            [threeagent.core :as th]))

;; ---------------------------------------------------------------------------
;; Helpers
;; ---------------------------------------------------------------------------

(defn- setup-mini-scene!
  "Creates a lightweight Three.js scene inside a *fresh wrapper div*
   appended to `container`. Using a wrapper avoids threeagent's internal
   context cache (keyed by DOM root) which would otherwise return a stale
   context with a disposed renderer on re-mount.
   Returns a teardown function."
  [^js container scene-data camera-opts]
  (let [;; Fresh wrapper so threeagent never sees a repeated DOM root
        wrapper (.createElement js/document "div")
        _       (do (set! (.. wrapper -style -width) "100%")
                    (set! (.. wrapper -style -height) "100%")
                    (set! (.. wrapper -style -position) "relative")
                    (.appendChild container wrapper))

        ;; Reactive atom driving threeagent
        data-atom  (th/atom scene-data)

        ;; Root fn — reads from the atom so threeagent re-renders on change
        root-fn    (fn []
                     (let [data @data-atom]
                       (if data
                         (ssf/render data {:wireframe?   false
                                           :show-ground? true
                                           :selection    nil})
                         [:object])))

        ;; Render into wrapper (never the same DOM root twice)
        ctx        (th/render root-fn wrapper
                              {:antialias    true
                               :shadow-map   {:enabled true
                                              :type    THREE/PCFSoftShadowMap}
                               :entity-types objects/custom-entity-types})

        ^js renderer (:threejs-renderer ctx)
        ^js camera   (:threejs-default-camera ctx)
        ^js canvas   (:canvas ctx)
        ^js scene    (:threejs-scene ctx)

        ;; --- Force canvas to fill the wrapper --------------------------------
        _ (do (set! (.. canvas -style -width) "100%")
              (set! (.. canvas -style -height) "100%")
              (set! (.. canvas -style -display) "block")
              (set! (.. canvas -style -position) "absolute")
              (set! (.. canvas -style -inset) "0"))

        ;; --- Sky + renderer via shared scene helpers -------------------------
        sky-state-atom (atom (scene/setup-sky! scene))
        _         (scene/setup-renderer-defaults! renderer camera @sky-state-atom)

        ;; --- Camera position (frustum already set by setup-renderer-defaults!) --
        {:keys [position target]
         :or   {position [250 250 250]
                target   [10 60 0]}} camera-opts

        _ (let [^js p (.-position camera)]
            (.set p (nth position 0) (nth position 1) (nth position 2)))

        ;; --- Fit to container ------------------------------------------------
        resize! (fn []
                  (let [w  (.-clientWidth container)
                        h  (.-clientHeight container)]
                    (when (and (pos? w) (pos? h))
                      (.setSize renderer w h false)
                      (set! (.-aspect camera) (/ w h))
                      (.updateProjectionMatrix camera))))
        _ (resize!)

        ;; --- Orbit controls --------------------------------------------------
        ^js controls (OrbitControls. camera canvas)
        _ (do (set! (.-enableDamping controls) true)
              (set! (.-dampingFactor controls) 0.05)
              (set! (.-enablePan controls) true)
              (set! (.-screenSpacePanning controls) true)
              (set! (.-autoRotate controls) true)
              (set! (.-autoRotateSpeed controls) 1.0)
              (let [^js t (.-target controls)]
                (.set t (nth target 0) (nth target 1) (nth target 2)))
              (.update controls))

        ;; --- Animation loop: controls + sun orbit + shadows ------------------
        raf-id  (atom nil)
        shadow-configured? (atom false)
        animate (fn animate []
                  (reset! raf-id (js/requestAnimationFrame animate))
                  (.update controls)
                  ;; Configure shadow camera once on first frame
                  (when-not @shadow-configured?
                    (objects/configure-shadow-camera! scene)
                    (reset! shadow-configured? true))
                  ;; Detect theme change and update sky preset live
                  (let [current-mode (if (scene/dark-mode?) :dark :light)
                        sky @sky-state-atom]
                    (when (not= current-mode (:mode sky))
                      (reset! sky-state-atom
                              (scene/update-sky! sky renderer current-mode))))
                  ;; Animate sun via shared helper
                  (scene/animate-sun! @sky-state-atom scene))
        _       (animate)

        ;; --- Resize observer -------------------------------------------------
        observer (js/ResizeObserver. (fn [_] (resize!)))
        _        (.observe observer container)]

    ;; Return teardown fn
    (fn teardown []
      (when-let [id @raf-id]
        (js/cancelAnimationFrame id))
      (.disconnect observer)
      (.dispose controls)
      ;; Stop threeagent animation loop and dispose the WebGL renderer
      (.setAnimationLoop renderer nil)
      (.dispose renderer)
      ;; Remove the wrapper so the DOM is clean for the next mount
      (when (.-parentNode wrapper)
        (.removeChild container wrapper)))))

;; ---------------------------------------------------------------------------
;; React component
;; ---------------------------------------------------------------------------

(defnc threejs-slide
  "Interactive Three.js view that fills its parent. Mounts the scene when
   rendered and tears it down on unmount; amp.ui.fit-gallery decides when.

   Props
   -----
   :scene-data — map for simple-stack-formation renderer (:data, :lighting …)
   :camera     — {:position [x y z] :target [x y z]}"
  [{:keys [scene-data camera]}]
  (let [container-ref (hooks/use-ref nil)]
    (hooks/use-effect
     [scene-data camera]
     (when-let [^js el @container-ref]
       (setup-mini-scene! el scene-data camera)))
    (d/div {:ref   container-ref
            :class "absolute inset-0 select-none"
            :style {:touch-action "none"}})))
