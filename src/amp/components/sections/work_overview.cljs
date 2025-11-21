(ns amp.components.sections.work-overview
  (:require [amp.components.sections.quote-section :refer [quote-section]]
            [amp.components.section :refer [section]]
            [amp.components.ui.main-button :refer [main-button]]
            [amp.components.elements.lazy-image :refer [lazy-image]]
            [amp.lib.defnc :refer [defnc]]
            [helix.core :refer [$]]
            [helix.dom :as d]))

(defnc work-overview
  []
  ($ section
     {:key "about-work"
      :section-id "about-work"}
     ($ quote-section {:section-id "tech-quote"
                       :gradient-class "grey-grad"
                       :from {:opacity 0
                              :duration 0.5
                              :ease "expo.inOut",
                              :stagger 0.01}
                       :to {:opacity 1
                            :duration 0.1
                            :ease "expo.inOut",
                            :stagger 0.1}}
        (d/div
         {:class "flex
                  justify-center
                  items-center
                  flex-col
                  w-full"}

         (d/div
          {:class "text-slate-300
                   font-light
                   flex
                   justify-center
                   flex-col
                   h-full
                   py-8
                   lg:w-3/4 w-full
                   p-8
                   text-lg
                   lg:text-2xl"}

          (d/p {:class "mt-12
                        mb-16
                        font-bold
                        font-futura
                        text-5xl"}
               "THE STUDIO")

          (d/p {:class "mb-8"}
               "For the full duration of the Biennale, the Armenian Pavilion becomes a "
               (d/span {:class "font-medium text-pink-600"} ":working-studio ")
               "— Zadik Zadikian’s living laboratory, a site where form is made, unmade, and made again.")

          (d/p {:class "mb-8"}
               "Each day, "
               (d/span {:class "font-medium text-pink-600"} ":7–10 people")
               " move through the space — assistants, fabricators, editors, camera crew — all part of a continuous organism of creation.")

          (d/p {:class "mb-8"}
               "They produce thousands of modular units: lightweight foam forms hand-coated in thin plaster, each one a small gesture in a much larger "
               (d/span {:class "font-medium text-pink-600"} ":architecture-of-change")
               ".")

          (d/p {:class "mb-8"}
               "These units are stacked into structures — walls, pyramids, horizons, interior architectures — shifting daily as fragile formations rise and dissolve like "
               (d/span {:class "font-medium text-pink-600"} "breath")
               ".")

          ;; KEY MESSAGE BLOCK
          (d/p {:class "mb-12 italic"}
               "Nothing is static. Nothing is final. "
               (d/span {:class "font-medium text-pink-600"} ":The-artwork")
               " is the cycle itself — the rhythm of making, unmaking, and returning again to zero.")

          ;; WORK STATEMENT — CONCEPTUAL
          (d/p {:class "mb-8 italic"}
               "In Minor Keys — The Philosophy of the Work")

          (d/p {:class "mb-8"}
               "Here, repetition becomes a meditation. Labor becomes devotion. "
               (d/span {:class "font-medium text-pink-600"} ":Structure")
               " is only a temporary embodiment of an ongoing frequency.")

          (d/p {:class "mb-8"}
               "The studio behaves like an "
               (d/span {:class "font-medium text-pink-600"} ":organism")
               " — sensitive, cyclical, and always in motion, responding to the theme of “In Minor Keys” through gestures rather than declarations.")

          (d/p {:class "mb-8"}
               "The material language is intentionally light: foam, plaster, dust. Fragile materials meet fragile cycles — a nod to Armenian histories of endurance, where the act of repeating becomes a form of survival, a "
               (d/span {:class "font-medium text-pink-600"} ":quiet-resilience")
               ".")

          (d/p {:class "mb-8"}
               "Nothing here reaches for spectacle. The work moves in frequencies, not fireworks. What matters is the pulse — the rhythm of stacking, filming, dismantling, and returning again to the beginning.")

          (d/p {:class "mb-8"}
               "This cycle functions like a "
               (d/span {:class "font-medium text-pink-600"} ":score")
               ": a choreography of hands, blocks, dust, light. Each day, the studio composes itself anew, only to erase itself by night."))))))