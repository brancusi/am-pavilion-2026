(ns amp.views.mockup-view
  (:require
   [amp.components.threejs.copy-link-button :refer [copy-link-button]]
   [amp.components.threejs.mockup-footer :refer [mockup-footer]]
   [amp.components.threejs.mockup-hud :refer [mockup-hud]]
   [amp.components.threejs.objects :as objects]
   [amp.components.threejs.parts-panel :refer [parts-panel]]
   [amp.components.threejs.scene :as scene]
   [amp.components.threejs.selection-info-bar :refer [selection-info-bar]]
   [amp.components.threejs.stack :as stack]
   [amp.hooks.use-atom-state :refer [use-atom-state]]
   [amp.lib.defnc :refer [defnc]]
   [amp.providers.main-provider :refer [use-main-state]]
   [amp.reducers.requires]
   [amp.services.firebase :refer [listen-to-edn]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]
   [threeagent.core :as th]))

;; ============ HOT-RELOADABLE STATE ============
;; These defonce atoms persist across hot reloads

(defonce controls-atom (atom nil))
(defonce context-atom (atom nil))
(defonce resize-fn-atom (atom nil))
(defonce container-atom (atom nil))
(defonce canvas-listeners-atom (atom nil))
(defonce wireframe-atom (th/atom false))
(defonce ground-plane-atom (th/atom true))
(defonce parts-panel-atom (atom false))
(defonce mockup-data-atom (th/atom nil))
(defonce camera-state-atom (atom {:position nil :target nil}))
(defonce selected-block-atom (th/atom nil))

;; Convenience map for passing atoms to scene functions
(def scene-atoms
  {:controls controls-atom
   :context context-atom
   :resize-fn resize-fn-atom
   :canvas-listeners canvas-listeners-atom
   :selected-block selected-block-atom
   :camera-state camera-state-atom})

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
          show-ground? @ground-plane-atom
          selection @selected-block-atom]
      (if data
        (stack/create-stack (:data data)
                            {:wireframe? wireframe?
                             :show-ground? show-ground?
                             :lighting (:lighting data)
                             :selection selection})
        [:object]))))

(defn toggle!
  "Toggle a boolean atom's value."
  [a]
  (swap! a not))

(defn setup-scene! [^js container]
  (scene/setup-scene! container
                      {:root-fn root
                       :entity-types objects/custom-entity-types}
                      scene-atoms))

(defn cleanup-scene! []
  (scene/cleanup-scene! scene-atoms))

(defn set-camera-position!
  ([[x y z]] (scene/set-camera-position! [x y z] scene-atoms))
  ([[x y z] opts] (scene/set-camera-position! [x y z] opts scene-atoms)))

(defn display-firebase-data
  [{:keys [camera] :as mockup-data}]
  (reset! scene-override-atom nil) ;; Clear any REPL override
  (reset! mockup-data-atom mockup-data)
  (set-camera-position! (:position camera) {:target (:target camera)}))

;; No watchers needed — root derives the scene directly from the reactive
;; atoms (wireframe-atom, ground-plane-atom, mockup-data-atom), so threeagent
;; automatically re-renders when any of them change.

(defnc mockup-view
  [_]

  (let [[state _] (use-main-state)
        piece-id (get-in state [:current-route :query-params :piece])
        container-ref (hooks/use-ref nil)
        wireframe? (use-atom-state wireframe-atom)
        ground-plane? (use-atom-state ground-plane-atom)
        panel-open? (use-atom-state parts-panel-atom)
        [hud-open? set-hud-open!] (hooks/use-state true)
        mockup-data (use-atom-state mockup-data-atom)
        selected-block (use-atom-state selected-block-atom)]

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
    (hooks/use-effect
     [piece-id]
     (listen-to-edn piece-id display-firebase-data))

    (d/div
     {:class "relative w-screen h-screen"}
     (d/canvas {:class "fixed inset-0 z-10"
                :style {:touch-action "none"}
                :ref container-ref})
     ;; HUD
     ($ mockup-hud {:title (or (:name mockup-data) "Untitled")
                    :mockup-data mockup-data
                    :hud-open? hud-open?
                    :wireframe? wireframe?
                    :ground-plane? ground-plane?
                    :on-toggle-hud #(set-hud-open! (not hud-open?))
                    :on-toggle-wireframe #(toggle! wireframe-atom)
                    :on-toggle-ground #(toggle! ground-plane-atom)
                    :on-toggle-parts-panel #(toggle! parts-panel-atom)})
     ;; Copy link button
     ($ copy-link-button {:piece-id piece-id})
     ;; Parts panel
     ($ parts-panel {:open? panel-open?
                     :mockup-data mockup-data
                     :on-close #(toggle! parts-panel-atom)})
     ;; Selected block info bar
     ($ selection-info-bar {:selection selected-block})
     ;; Footer
     ($ mockup-footer))))

;; Shadow-cljs hot reload hooks
(defn ^:dev/before-load stop []
  (js/console.log "Stopping for hot reload...")
  ;; Tear down scene so it gets rebuilt with updated entity types & click handler
  (cleanup-scene!))

(defn ^:dev/after-load start []
  (js/console.log "Hot reload — reinitializing scene...")
  (when-let [^js container @container-atom]
    (setup-scene! container)))
