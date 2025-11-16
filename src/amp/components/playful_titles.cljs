(ns amp.components.playful-titles
  (:require ["gsap" :refer [gsap]]
            [amp.components.elements.video-background :refer [video-background]]
            [amp.components.hover-title :refer [hover-title]]
            [amp.components.nav-link :refer [nav-link]]
            [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
            [amp.components.ui.main-button :refer [main-button]]
            [amp.lib.defnc :refer [defnc]]
            [amp.providers.main-provider :refer [use-main-state]]

            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(def titles
  [["venice"
    "Venice is where everything begins again."]

   ["biennale"
    "Biennale means art alive, always becoming."]

   ["2026"
    "2026 marks our shift into becoming."]

   ["armenian"
    "Armenian means rhythm, grit, and quiet power."]

   ["pavilion"
    "A pavilion becomes a world in motion."]])

(defnc hero-menu
  [{:keys [data over out click]}]

  (d/div {:class "absolute 
                  bg-white/30
                  font-fira-code
                  pointer-events-auto"}
         (map (fn [[id writing]]
                (d/div {:key id
                        :class "flex"}
                       (d/div {:class "relative flex"}
                              ($ nav-link
                                 {:title id
                                  :writing writing
                                  :section-id id
                                  :on-mouse-over-handler over
                                  :on-mouse-out-handler out
                                  :on-click-handler click}))))
              data)))

(defnc playful-titles
  []
  (let [[state dispatch!] (use-main-state)

        hover-title-ref (hooks/use-ref "hover-title-ref")

        [current-section set-current-section!] (hooks/use-state nil)

        nav-mouse-over-handler (hooks/use-callback
                                [hover-title-ref]
                                (fn
                                  [{:keys [section-id]}]
                                  (set-current-section! section-id)
                                  (.to gsap
                                       @hover-title-ref
                                       #js{:opacity 0.8
                                           :duration 0.2})))
        nav-mouse-out-handler (hooks/use-callback
                               [hover-title-ref]
                               (fn
                                 []
                                 (.to gsap
                                      @hover-title-ref
                                      #js{:opacity 0
                                          :duration 0.2})))]

    (d/div {:class "relative
                    w-full 
                    h-full 
                    
                    "}
           (d/div {:class "relative
                    w-full 
                    h-full 
                    flex
                    items-center
                    justify-items-center
                    justify-center"}

                  ($ hover-title
                     {:hover-title-ref hover-title-ref
                      :title current-section})

                  ($ hero-menu {:data titles
                                :over nav-mouse-over-handler
                                :out nav-mouse-out-handler}))
           (d/div {:class "absolute
                                     bottom-10
                           w-full
                           flex
                           justify-center
                           "}))))