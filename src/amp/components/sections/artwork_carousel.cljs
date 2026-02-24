(ns amp.components.sections.artwork-carousel
  "Interactive artwork carousel using Embla. Slides can be either
   lazy-loaded images or interactive Three.js instances."
  (:require ["embla-carousel-react" :as use-embla-carousel]

            [amp.components.elements.lazy-image :refer [lazy-image]]
            [amp.components.elements.threejs-slide :refer [threejs-slide]]
            [amp.components.icons :refer [ChevronRightIcon]]
            [amp.hooks.use-container-size :refer [use-container-size]]
            [amp.lib.defnc :refer [defnc]]
            [amp.styles :as s]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

;; ---------------------------------------------------------------------------
;; Slide components
;; ---------------------------------------------------------------------------

(defnc image-slide
  "A single image slide backed by the lazy-image system."
  [{:keys [img-src caption credit active?]}]
  (let [container-ref (hooks/use-ref nil)
        dimensions    (use-container-size container-ref)]
    (d/div {:ref   container-ref
            :class "relative w-full h-full overflow-hidden"}
           ($ lazy-image {:src         img-src
                          :w           (:width dimensions)
                          :h           (:height dimensions)
                          :fit         "clip"
                          :transition  {:duration 1 :opacity 1}
                          :should-load? active?})
           ;; Caption overlay — bottom-left
           (when (or caption credit)
             (d/div {:class "absolute bottom-0 left-0 w-full
                             bg-black/60 px-4 py-2 flex items-center gap-4
                             font-mono text-[10px] uppercase tracking-[0.15em]"}
                    (when caption
                      (d/span {:class "text-slate-200"} caption))
                    (when credit
                      (d/span {:class "text-slate-500"} (str "— " credit))))))))

;; ---------------------------------------------------------------------------
;; Dot indicator
;; ---------------------------------------------------------------------------

(defnc dot-indicators
  [{:keys [total current on-click]}]
  (d/div {:class "flex items-center justify-center gap-2"}
         (for [i (range total)]
           (d/button {:key      i
                      :on-click #(when on-click (on-click i))
                      :class    (s/cx "w-2 h-2 transition-all duration-300"
                                      (if (= i current)
                                        "bg-pink-300 scale-125"
                                        "bg-slate-600 hover:bg-slate-400"))}))))

;; ---------------------------------------------------------------------------
;; Nav arrow button
;; ---------------------------------------------------------------------------

(defnc nav-arrow
  [{:keys [direction on-click]}]
  (d/button {:on-click on-click
             :class    (s/cx "absolute top-1/2 -translate-y-1/2 z-10
                              w-10 h-10 flex items-center justify-center
                              text-pink-300 hover:text-pink-200
                              transition-colors cursor-pointer"
                             (if (= direction :prev)
                               "left-2 rotate-180"
                               "right-2"))}
            ($ ChevronRightIcon)))

;; ---------------------------------------------------------------------------
;; Main carousel
;; ---------------------------------------------------------------------------

(defnc artwork-carousel
  "Embla-powered artwork carousel.

   Props
   -----
   :slides — vector of maps, each with:
       :type        — :image (default) or :threejs (future)
       :img-src     — imgix URL (for :image slides)
       :caption     — optional caption string
       :credit      — optional credit string
   :aspect-ratio — CSS aspect-ratio for the carousel viewport (default \"16/9\")"
  [{:keys [slides aspect-ratio]}]
  (let [aspect-ratio (or aspect-ratio "16/9")

        ;; Embla instance
        [embla-ref embla-api]
        (use-embla-carousel
         (clj->js {:loop      true
                   :dragFree  false
                   :align     "center"
                   :containScroll "trimSnaps"}))

        ;; Track current slide index
        [current-index set-current-index!] (hooks/use-state 0)
        total (count slides)

        ;; Navigation handlers
        next-slide     (hooks/use-callback
                        [embla-api]
                        (fn [] (when embla-api (.scrollNext embla-api))))
        previous-slide (hooks/use-callback
                        [embla-api]
                        (fn [] (when embla-api (.scrollPrev embla-api))))
        go-to-slide    (hooks/use-callback
                        [embla-api]
                        (fn [idx] (when embla-api (.scrollTo embla-api idx))))

        ;; Scroll listener — update current-index from Embla's progress
        on-select (hooks/use-callback
                   [embla-api total]
                   (fn []
                     (when embla-api
                       (set-current-index! (.selectedScrollSnap embla-api)))))]

    ;; Attach / detach the select listener
    (hooks/use-effect
     [embla-api on-select]
     (when embla-api
       (.on embla-api "select" on-select)
       ;; fire once to seed initial index
       (on-select)
       (fn [] (.off embla-api "select" on-select))))

    ;; Outer wrapper
    (d/div {:class "relative w-full select-none"}

           ;; Section eyebrow
           (d/div {:class "mb-6 flex items-center gap-3 px-4"}
                  (d/div {:class (s/cx "w-10" s/divider-accent)})
                  (d/p {:class s/eyebrow} "Artworks"))

           ;; Carousel viewport
           (d/div {:ref   embla-ref
                   :class "overflow-hidden w-full"}
                  (d/div {:class "flex"}
                         (map-indexed
                          (fn [idx slide]
                            (let [is-active? (= idx current-index)]
                              (d/div {:key   idx
                                      :class "flex-[0_0_100%] min-w-0 relative"
                                      :style {:aspect-ratio aspect-ratio}}
                                     (case (:type slide)
                                       :threejs
                                       ($ threejs-slide
                                          {:scene-data (:scene-data slide)
                                           :camera     (:camera slide)
                                           :caption    (:caption slide)
                                           :credit     (:credit slide)
                                           :active?    is-active?})
                                       ;; Default to image slide
                                       ($ image-slide
                                          {:img-src  (:img-src slide)
                                           :caption  (:caption slide)
                                           :credit   (:credit slide)
                                           :active?  is-active?})))))
                          slides)))

           ;; Prev / Next arrows
           ($ nav-arrow {:direction :prev :on-click previous-slide})
           ($ nav-arrow {:direction :next :on-click next-slide})

           ;; Dot indicators
           (d/div {:class "mt-4 flex justify-center"}
                  ($ dot-indicators {:total    total
                                     :current  current-index
                                     :on-click go-to-slide})))))
