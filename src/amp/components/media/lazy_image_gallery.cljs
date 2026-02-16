(ns amp.components.media.lazy-image-gallery
  (:require ["embla-carousel-react" :as use-embla-carousel]
            ["embla-carousel-autoplay" :as auto-play]

            [amp.components.elements.captioned-image :refer [captioned-image]]
            [amp.components.media.lazy-image-with-overlay :refer [lazy-image-with-overlay]]
            [amp.components.ui.overlays :refer [caption-overlay]]
            [amp.utils.math :refer [progress->index]]
            [amp.components.navs.progress-menu :refer [progress-menu-v2]]
            [amp.components.icons :refer [ChevronRightIcon]]
            [helix.core :refer [$]]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            [amp.utils.gsap :as gsap]
            [amp.lib.defnc :refer [defnc]]
            [clojure.math :as math]))

(defnc lazy-image-gallery
  [{:keys [slides enabled?]}]
  (let [lazy-image-parent-styles "font-mono
                               bg-white/70 dark:bg-slate-900/70
                               px-2
                               text-slate-700 dark:text-slate-200"

        auto-play-opts (clj->js {:delay 7000})

        [embla-container-ref embla-api] (use-embla-carousel (clj->js {:loop true}) (clj->js [(auto-play auto-play-opts)]))

        autoplay (hooks/use-memo [embla-api]
                                 (when embla-api
                                   (-> embla-api
                                       (.plugins)
                                       (.-autoplay))))

        [current-index set-current-index!] (hooks/use-state 1)
        total-slides (count slides)
        next-slide (hooks/use-callback [embla-api]
                                       (when embla-api
                                         (.-scrollNext embla-api)))
        previous-slide (hooks/use-callback [embla-api]
                                           (when embla-api
                                             (.-scrollPrev embla-api)))

        on-scroll-handler (hooks/use-callback [embla-api]
                                              (fn [_e]
                                                (set-current-index! (progress->index
                                                                     total-slides
                                                                     ((.-scrollProgress embla-api))))))]
    (hooks/use-layout-effect [autoplay enabled?]
                             (when autoplay
                               (if enabled?
                                 (.play autoplay)
                                 (.stop autoplay))))

    (hooks/use-effect [embla-api on-scroll-handler]
                      (when embla-api
                        (js/console.log embla-api)
                        (embla-api.on "scroll" on-scroll-handler)))


    (d/div {:class "relative w-full max-h-screen overflow-hidden"}
           (d/div {:ref embla-container-ref
                   :class "embla w-full overflow-hidden max-h-screen"}
                  (d/div {:class "embla__container w-full flex items-center max-h-screen"}
                         (map-indexed (fn [idx {:keys [img-src credit caption aspect-ratio]}]
                                        (let [is-active? (and enabled? (= idx (dec current-index)))]
                                          (d/div {:key img-src
                                                  :class "embla__slide w-full flex-[0_0_100%] min-w-0 relative max-h-screen"
                                                  :style {:aspect-ratio (str aspect-ratio)}}
                                                 (d/div {:class "w-full h-full"}
                                                        ($ lazy-image-with-overlay
                                                           {:img-src img-src
                                                            :aspect-ratio aspect-ratio
                                                            :active? is-active?}

                                                           (d/div {:class ""}
                                                                  ($ caption-overlay {:position :tl
                                                                                      :rotation 90
                                                                                      :parent-styles lazy-image-parent-styles}
                                                                     (d/div
                                                                      (d/span {:class "italic text-xs"} caption)))
                                                                  ($ caption-overlay {:position :bl
                                                                                      :parent-styles lazy-image-parent-styles}
                                                                     (d/div
                                                                      (d/span {:class "italic text-xs"} credit)))))))))
                                      slides))

                  (d/div {:class "absolute w-full top-1/2 transform -translate-y-1/2"}
                         (d/div {:class "flex justify-between h-full w-full items-center "}
                                (d/div {:on-click previous-slide
                                        :class "w-12 flex items-center "}
                                       (d/div {:class "w-10 h-10 transition-transform rotate-180 text-pink-600 dark:text-red-500"}
                                              ($ ChevronRightIcon)))
                                (d/div {:on-click next-slide
                                        :class "w-12 flex justify-end items-center "}
                                       (d/div {:class "w-10 h-10 transition-transform text-pink-600 dark:text-red-500"}
                                              ($ ChevronRightIcon)))))

                  (d/div {:class "absolute w-full bottom-4"}
                         (d/div {:class "flex items-center justify-center w-full"}
                                (d/div {:class ""}
                                       ($ progress-menu-v2 {:total-count total-slides
                                                            :current-index current-index
                                                            :marker-styles "w-3 h-3 bg-pink-400 dark:bg-pink-300 rounded-full my-2 border-slate-400 dark:border-slate-700 border-2"}))))))))


