(ns amp.ui.image
  (:require [helix.core :refer [$]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [amp.utils.gsap :as gsap]
            [amp.lib.defnc :refer [defnc]]))

(def ^:private size-buckets
  "Pre-computed width/height buckets for imgix cache friendliness.
   Small images get fine-grained buckets; large images get coarse ones.
   Every requested dimension snaps UP to the next value in this list so
   that nearby viewport sizes share the same cached imgix render.
   Covers 50 → 3200 px which handles everything from avatars to 4K hero
   images at 2× DPR."
  [50 75 100 150 200 300 400 500 600 700 800 900
   1000 1200 1400 1600 1800 2000 2400 2800 3200])

(defn- snap-to-bucket
  "Snap `n` UP to the nearest value in `size-buckets`.
   Returns the largest bucket if `n` exceeds all of them.
   Zero or negative values pass through unchanged."
  [n]
  (if (pos? n)
    (or (first (drop-while #(< % n) size-buckets))
        (last size-buckets))
    n))

(defn- snap-dimensions
  "Snap w and h to cache-friendly buckets while preserving aspect ratio.
   Snaps the width first, then derives the height from the original
   aspect ratio (also snapped up) so the image is always slightly
   oversized but never distorted.
   Returns [0 0] for zero, negative, or NaN inputs."
  [w h]
  (if (and (number? w) (number? h)
           (pos? w) (pos? h)
           (js/isFinite w) (js/isFinite h))
    (let [snapped-w (snap-to-bucket w)
          aspect    (/ h w)
          raw-h     (* snapped-w aspect)
          snapped-h (snap-to-bucket raw-h)]
      [snapped-w snapped-h])
    [0 0]))

(def ^:private max-edge
  "Longest edge, in device pixels, we ever ask imgix for. Past this the
   extra detail is invisible but the bytes are not."
  2400)

(def ^:private densities [1 1.5 2])

(defn- srcset-candidates
  "Returns [{:url _ :dpr _}] for each display density. Each candidate's
   pixel size is w×dpr by h×dpr, scaled down to fit within `max-edge`.
   Densities that would hit the cap at the same size as a lower one are
   dropped, since they'd fetch the same pixels. High-density renders use a
   lower quality setting, which imgix recommends because the extra pixels
   hide compression artefacts."
  [src base-params w h]
  (when (and (pos? w) (pos? h))
    (->> densities
         (map (fn [dpr]
                (let [scale (min dpr (/ max-edge (max w h)))
                      pw    (js/Math.round (* w scale))
                      ph    (js/Math.round (* h scale))]
                  {:dpr dpr
                   :size [pw ph]
                   :url (str src base-params
                             "&w=" pw "&h=" ph
                             "&q=" (if (> dpr 1) 50 75))})))
         (reduce (fn [acc c]
                   (if (= (:size c) (:size (peek acc))) acc (conj acc c)))
                 []))))

(defn preload-image
  "Preloads an image and waits for full decode before calling on-success.
   Uses .decode() which ensures the image is fully decoded and ready to
   render without layout shift. Pass the same srcset the <img> will use so
   the browser fetches (and caches) the one candidate it will display,
   rather than the 1x src followed by a second, denser download."
  [url src-set on-success on-error]
  (let [image (js/Image.)]
    (when src-set (set! (.-srcset image) src-set))
    (set! (.-onload image)
          (fn [_]
            (if (.-decode image)
              (-> (.decode image)
                  (.then (fn [] (on-success nil)))
                  (.catch (fn [_] (on-success nil)))) ;; decode fail is rare; show anyway
              (on-success nil))))
    (set! (.-onerror image) on-error)
    (set! (.-src image) url)))

(defnc lazy-image
  "Renders an image element with lazy loading using imgix API. The image will only load when the `should-load?` flag is set to true.
  
  Parameters:
  - src: The imgix image source URL.
  - w: Target width in pixels.
  - h: Target height in pixels.
  - fp-x: Focal point x-coordinate (0-1).
  - fp-y: Focal point y-coordinate (0-1).
  - should-load?: A boolean value determining if the image should be loaded.
  - transition: GSAP transition object for intro animation.
  - on-intro-completed: Callback function when intro animation completes.

  Returns:
  - An image element if the image is loaded, otherwise a div element with a gray background.

  Example usage:
  (lazy-image {:src \"https://example.imgix.net/image.jpg\"
               :w 1920
               :h 1080
               :fp-x 0.5
               :fp-y 0.5
               :should-load? true})"
  [{:keys [src w h fp-x fp-y fit object-fit should-load? transition on-intro-completed children]}]

  (let [;; Snap dimensions to cache-friendly buckets, preserving aspect ratio.
        [w h] (snap-dimensions w h)

        ;; imgix best practices: use auto format, auto compression, and fit=crop with focal point
        base-params (hooks/use-memo
                     [fit fp-x fp-y]
                     (str "?fit=" (or fit "clip")
                          "&crop=focalpoint"
                          "&fp-x=" (or fp-x 0.5)
                          "&fp-y=" (or fp-y 0.5)
                          "&auto=format,compress"))

        ;; One candidate per display density, each capped at `max-edge` so
        ;; large and high-DPR screens never pull multi-megabyte renders.
        candidates (hooks/use-memo
                    [src base-params w h]
                    (srcset-candidates src base-params w h))

        ;; Primary src is the 1x candidate
        img-src (:url (first candidates))

        img-src-set (hooks/use-memo
                     [candidates]
                     (->> candidates
                          (map (fn [{:keys [url dpr]}] (str url " " dpr "x")))
                          (interpose ", ")
                          (apply str)))

        ;; Layout mode for the <img> element:
        ;; - "cover" (default): absolute-positioned, fills container, crops excess.
        ;;   Image cannot overflow because inset-0 pins it to the container edges.
        ;; - "contain": absolute-positioned, fits within container, letterboxed.
        ;; - "none": normal flow, w-full h-auto (image height dictates layout).
        img-class (case object-fit
                    "cover"   "absolute inset-0 w-full h-full object-cover block"
                    "contain" "absolute inset-0 w-full h-full object-contain block"
                    "fill"    "absolute inset-0 w-full h-full object-fill block"
                    "none"    "w-full h-auto block"
                    ;; default: cover
                    "absolute inset-0 w-full h-full object-cover block")

        ref (hooks/use-ref "lazy-image-ref")
        overlay-ref (hooks/use-ref "overlay-ref")

        ;; Two-phase loading:
        ;; 1. preloaded? — image bytes are cached (triggers DOM render of <img>)
        ;; 2. painted?   — the actual <img> element has fired onLoad (safe to show overlays)
        [preloaded? set-preloaded!] (hooks/use-state false)
        [painted? set-painted!] (hooks/use-state false)

        on-success-handler (hooks/use-callback
                            :once
                            (fn [_]
                              (set-preloaded! true)))

        on-error-handler (hooks/use-callback
                          :once
                          (fn [_]
                            (set-preloaded! true)))

        on-img-load (hooks/use-callback
                     :once
                     (fn [_]
                       (set-painted! true)))]

    (hooks/use-effect
     [img-src img-src-set w h should-load? preloaded?]

     (when (and should-load?
                (not preloaded?)
                (pos? w) (pos? h))
       (preload-image img-src
                      img-src-set
                      on-success-handler
                      on-error-handler)))

    (hooks/use-layout-effect
     [painted?]
     (when painted?
       (gsap/to-ref ref (merge
                         transition
                         {:onComplete on-intro-completed}))

       (gsap/to-ref overlay-ref (merge
                                 transition
                                 {:delay 0.5
                                  :onComplete on-intro-completed}))))

    (d/div {:class "relative w-full h-full min-w-0"}

           (if preloaded?
             (d/div {:style {:opacity 0}
                     :ref ref
                     :class "relative w-full h-full"}
                    (d/img {:srcSet img-src-set
                            :src img-src
                            :alt ""
                            :class img-class
                            :onLoad on-img-load})
                    (when painted?
                      (d/div {:style {:opacity 0}
                              :ref overlay-ref}
                             (when children
                               children))))

             ;; Minimal loading indicator — three pulsing dots
             (d/div {:class "flex items-center justify-center w-full h-full"}
                    (d/div {:style {:display "flex" :gap "6px"}}
                           (d/span {:style {:width "8px"
                                            :height "8px"
                                            :border-radius "50%"
                                            :background "#9ca3af"
                                            :animation "lazy-img-pulse 1s ease-in-out infinite"
                                            :animation-delay "0ms"}})
                           (d/span {:style {:width "8px"
                                            :height "8px"
                                            :border-radius "50%"
                                            :background "#9ca3af"
                                            :animation "lazy-img-pulse 1s ease-in-out infinite"
                                            :animation-delay "200ms"}})
                           (d/span {:style {:width "8px"
                                            :height "8px"
                                            :border-radius "50%"
                                            :background "#9ca3af"
                                            :animation "lazy-img-pulse 1s ease-in-out infinite"
                                            :animation-delay "400ms"}})))))))
