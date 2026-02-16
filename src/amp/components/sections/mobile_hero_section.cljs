(ns amp.components.sections.mobile-hero-section
  (:require
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def lazy-video-background (lazy-component amp.components.elements.video-background/video-background))


(defnc mobile-hero-section
  []
  (let [outer-ctx (hooks/use-ref "outer-ctx")
        [_visited? is-active?] (use-scroll-trigger outer-ctx {:end "bottom"})
        block-bg "bg-black/70 px-3 py-1.5 inline decoration-clone"
        block-bg-light "bg-black/50 px-3 py-1 inline decoration-clone"]

    (d/div
     {:id "video"
      :ref outer-ctx
      :class "relative h-full w-full overflow-hidden"}

     (d/div
      {:class "w-screen h-screen relative flex flex-col items-start justify-center"}

      ;; ── Video background ──
      (d/div {:class "absolute inset-0"}
             ($ lazy-video-background {:allow-audio? false
                                       :playback-id "fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo"
                                       :should-play? is-active?}))

      ;; ── Content overlay ──
      (d/div
       {:class "relative z-10 flex flex-col items-start justify-center px-8 text-left gap-6"}

       ;; Biennale logo — red version
       (d/img {:src "images/graphics/61_biennale_logo_red.svg"
               :class "w-36"})

       ;; Show title — blocky background
       (d/h1
        {:class "font-mono font-extrabold uppercase tracking-wider leading-tight text-6xl text-white"}
        (d/span
         {:class block-bg
          :style {:boxDecorationBreak "clone"
                  :WebkitBoxDecorationBreak "clone"}}
         "The Studio"))

       ;; Subtitle — same blocky treatment, lighter
       (d/p
        {:class "font-mono text-xs uppercase tracking-[0.2em] max-w-[18rem] leading-loose text-white/90"}
        (d/span
         {:class block-bg-light
          :style {:boxDecorationBreak "clone"
                  :WebkitBoxDecorationBreak "clone"}}
         "Armenia Pavilion \u00B7 61st International Art Exhibition La Biennale di Venezia")))

      ;; Learn more — anchored to bottom of viewport container
      (d/a
       {:href "#about"
        :class "absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-1 text-white/80 hover:text-white transition-colors font-mono text-xs uppercase tracking-[0.2em]"}
       "Learn More"
       (d/span {:class "text-lg animate-bounce"} "\u2193"))))))
