(ns amp.components.sections.mobile-hero-section
  (:require [amp.components.elements.video-background :refer [video-background]]
            [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
            [amp.lib.defnc :refer [defnc]]
            [amp.components.fragments.about-me :refer [about-event]]
            [amp.providers.main-provider :refer [use-main-state]]
            [amp.components.writing-card :refer [writing-card]]
            [amp.components.ui.main-button :refer [main-button]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(defnc mobile-hero-section
  []
  (let [[state dispatch!] (use-main-state)
        outer-ctx (hooks/use-ref "outer-ctx")
        [visited? is-active?] (use-scroll-trigger outer-ctx {:end "bottom"})]

    (d/div {:id "video"
            :ref outer-ctx
            :class "relative
                    h-full
                    w-full
                    
                    overflow-hidden"}

           (d/div {:class "w-screen h-screen 
                           flex
                           flex-col
                           relative 
                           flex items-center justify-items-center justify-center"}

                  (d/div {:class "absolute
                                  h-screen
                                  w-screen
                           "}
                         ($ video-background {:playback-id "fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo"
                                              :should-play? is-active?}))

                  (d/div {:class "absolute deep-yellow opacity-70 w-3/4 p-4"}
                         (d/div {:class "font-futura"}
                                (d/p {:class "text-5xl font-bold"}
                                     "venice biennale 2026 armenian pavilion")
                                (d/p {:class "text-4xl mt-4"}
                                     "Be a Patron of ‘The Studio’")))
                  (d/div {:class "absolute bottom-[40px]"}
                         ($ main-button
                            {:title "Donate Now"
                             :additional-classes "text-2xl"
                             :on-click #(js/window.open "https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00" "_blank")}))


                  #_($ writing-card
                       ($ about-event))))))