(ns amp.components.elements.lazy-image
  (:require [helix.core :refer [$]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [amp.utils.gsap :as gsap]
            [amp.lib.defnc :refer [defnc]]))

(defn preload-image
  [url on-success on-error]
  (let [image (js/Image.)]
    (set! (.-onload image) on-success)
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
  [{:keys [src w h fp-x fp-y fit should-load? transition on-intro-completed children]}]

  (let [;; imgix best practices: use auto format, auto compression, and fit=crop with focal point
        base-params (hooks/use-memo
                     [fp-x fp-y]
                     (str "?fit=" (or fit "clip")
                          "&crop=focalpoint"
                          "&fp-x=" (or fp-x 0.5)
                          "&fp-y=" (or fp-y 0.5)
                          "&auto=format,compress"
                          "&q=75"))

        ;; Primary src with target dimensions 
        img-src (hooks/use-memo
                 [src base-params w h]
                 (str src base-params "&w=" w "&h=" h))

        ;; imgix srcset best practice: use DPR (device pixel ratio) for responsive images
        ;; Generate srcset for 1x, 1.5x, 2x, and 3x displays
        img-src-set (hooks/use-memo
                     [src base-params w h]
                     (str src base-params "&w=" w "&h=" h "&dpr=1 1x, "
                          src base-params "&w=" w "&h=" h "&dpr=1.5 1.5x, "
                          src base-params "&w=" w "&h=" h "&dpr=2 2x, "
                          src base-params "&w=" w "&h=" h "&dpr=3 3x"))

        sizes "100vw"

        ref (hooks/use-ref "lazy-image-ref")

        [loaded? set-loaded!] (hooks/use-state false)

        on-success-handler (hooks/use-callback
                            :once
                            (fn [_]
                              (set-loaded! true)))

        on-error-handler (hooks/use-callback
                          :once
                          (fn [_]
                            (set-loaded! true)))]

    (hooks/use-effect
     [img-src w h should-load? loaded?]

     (when (and should-load?
                (not loaded?))
       (preload-image img-src
                      on-success-handler
                      on-error-handler)))

    (hooks/use-layout-effect
     [loaded?]
     (when loaded?
       (gsap/to-ref ref (merge
                         transition
                         {:onComplete on-intro-completed}))))

    (d/div {:class "relative flex items-center justify-center"
            #_#_:style {:min-height (str h "px")}}

           (if loaded?
             (d/div {:style {:opacity 0}
                     :ref ref}
                    (d/img {:srcSet img-src-set
                            :src img-src
                            :sizes sizes
                            :alt ""})
                    (when children
                      children))

             (d/div {:class "absolute w-12 h-12 flex items-center justify-center"}
                    (d/div {:class "relative w-12 h-12"}
                           ;; Outer ring with gradient
                           (d/div {:class "absolute w-12 h-12 inset-0 rounded-full border-4 border-gray-200"})
                           ;; Spinning arc
                           (d/div {:class "absolute w-12 h-12 inset-0 rounded-full border-4 border-transparent border-t-gray-800 animate-spin"
                                   :style {:animation-duration "0.8s"}})))))))







