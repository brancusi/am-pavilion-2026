(ns amp.hooks.use-in-view
  "Where an element is relative to the viewport, from IntersectionObserver
   (no scroll listeners, no layout reads on scroll)."
  (:require [helix.hooks :as hooks]))

(defn use-in-view
  "Returns [ref state]. `ref` is a callback ref, so it follows elements that
   mount later or are swapped out. `state` is {:in? :above?}: :in? while any
   part is inside the viewport (grown by `root-margin`), :above? once it has
   gone past the top.

   Options: :root-margin (CSS margin string), :threshold (0–1),
   :root (an element to observe within instead of the viewport)."
  [& {:keys [root-margin threshold root] :or {root-margin "0px" threshold 0}}]
  (let [[node set-node!] (hooks/use-state nil)
        [state set-state!] (hooks/use-state {:in? false :above? false})]
    (hooks/use-effect
     [node root-margin threshold root]
     (if node
       (let [io (js/IntersectionObserver.
                 (fn [entries]
                   (let [^js e (last entries)
                         top (if-let [rb (.-rootBounds e)] (.-top rb) 0)]
                     (set-state! {:in? (.-isIntersecting e)
                                  :above? (and (not (.-isIntersecting e))
                                               (< (.. e -boundingClientRect -bottom) top))})))
                 #js {:rootMargin root-margin :threshold threshold :root root})]
         (.observe io node)
         #(.disconnect io))
       (set-state! {:in? false :above? false})))
    [set-node! state]))

(defn observe!
  "Calls (f entry) for each change of each element in `els`. For code that
   works on DOM it found itself. Returns a cleanup fn."
  [els f & {:keys [root-margin threshold root] :or {root-margin "0px" threshold 0}}]
  (let [io (js/IntersectionObserver.
            (fn [entries] (doseq [e entries] (f e)))
            #js {:rootMargin root-margin :threshold threshold :root root})]
    (doseq [el els :when el] (.observe io el))
    #(.disconnect io)))

(defn watch-edges!
  "A scroller's two ends: `start` and `end` are 1px markers at the start of
   its first item and the end of its last (.ap-edge). Calls (f {:start? :end?})
   as each comes in or out of view inside `track`. Returns a cleanup fn."
  [^js track ^js start ^js end f]
  (let [seen (atom {:start? true :end? false})]
    (observe! [start end]
              (fn [^js e]
                (let [k (if (identical? (.-target e) start) :start? :end?)]
                  (f (swap! seen assoc k (.-isIntersecting e)))))
              :root track :root-margin "0px 4px")))
