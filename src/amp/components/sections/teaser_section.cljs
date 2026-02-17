(ns amp.components.sections.teaser-section
  (:require
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def lazy-video (lazy-component amp.components.elements.video-background/video-background))

(defnc teaser-section
  []
  (let [outer-ref (hooks/use-ref "outer-ref")
        [_visited? is-active?] (use-scroll-trigger outer-ref {:end "bottom"})
        block-bg "bg-black/70 px-3 py-1.5 inline decoration-clone"
        block-bg-light "bg-black/50 px-3 py-1 inline decoration-clone"
        block-bg-info "bg-black/60 px-2 py-1 inline decoration-clone"
        clone-style {:boxDecorationBreak "clone"
                     :WebkitBoxDecorationBreak "clone"}]

    (d/div
     {:id "teaser"
      :ref outer-ref
      :class "relative w-full min-h-screen overflow-hidden"}

     ;; ── Video background ──
     (d/div {:class "absolute inset-0"}
            ($ lazy-video {:allow-audio? false
                           :playback-id "Izp5007Abkc00t4Ubns7pAiqq2zG7JIp01tvAoaVOny7O00"
                           :should-play? is-active?}))

     ;; ── Content overlay ──
     (d/div
      {:class "relative z-10 flex flex-col justify-center
               min-h-screen px-6 sm:px-12 lg:px-20
               py-16 sm:py-24
               max-w-4xl"}

      ;; Title
      (d/h2
       {:class "font-display font-bold uppercase tracking-wider
                leading-relaxed text-4xl sm:text-5xl lg:text-6xl text-white mb-6"}
       (d/span {:class block-bg :style clone-style}
               "The Studio"))

      ;; Subtitle / tagline
      (d/p
       {:class "font-display text-sm sm:text-base uppercase tracking-[0.15em]
                leading-loose text-white/90 mb-8 max-w-xl"}
       (d/span {:class block-bg-light :style clone-style}
               "A living studio at the heart of the Venice Biennale"))

      ;; Description
      (d/div
       {:class "space-y-3 mb-10 max-w-lg"}
       (d/p {:class "font-display text-xs sm:text-sm leading-relaxed text-white/80"}
            (d/span {:class block-bg-info :style clone-style}
                    "Over six months, sculptor Zadik Zadikian and his team will occupy the Arsenale Militare\u2014casting, assembling, and building in real time. Nothing is fixed. Nothing is final. The work is the making itself.")))

      ;; ── Info grid ──
      (d/div
       {:class "grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-10"}

       ;; Dates
       (d/div
        {:class "space-y-1"}
        (d/p {:class "font-display font-medium text-[10px] uppercase tracking-[0.2em] text-amber-300/70"}
             "Opening")
        (d/p {:class "font-display text-xs sm:text-sm text-white/90"}
             (d/span {:class block-bg-info :style clone-style}
                     "9 May \u2013 22 November 2026"))
        (d/p {:class "font-display font-medium text-[9px] text-amber-200/40 mt-1"}
             "Preview: 6, 7, 8 May"))

       ;; Venue
       (d/div
        {:class "space-y-1"}
        (d/p {:class "font-display font-medium text-[10px] uppercase tracking-[0.2em] text-amber-300/70"}
             "Venue")
        (d/a {:href "https://maps.app.goo.gl/QvYkqwN1Bv7L9VDn7"
              :target "_blank"
              :rel "noopener noreferrer"
              :class "font-display text-xs sm:text-sm text-white/90 hover:text-white
                      underline underline-offset-4 decoration-white/30 hover:decoration-white/60
                      transition-colors block whitespace-nowrap"}
             (d/span {:class block-bg-info :style clone-style}
                     "Arsenale Militare, Venice")))

       ;; Pavilion
       (d/div
        {:class "space-y-1"}
        (d/p {:class "font-display font-medium text-[10px] uppercase tracking-[0.2em] text-amber-300/70"}
             "Pavilion")
        (d/p {:class "font-display text-xs sm:text-sm text-white/90"}
             (d/span {:class block-bg-info :style clone-style}
                     "Republic of Armenia"))))))))
