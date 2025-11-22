(ns amp.components.sections.contact-section
  (:require [helix.core :refer [$]]
            [amp.components.sections.video-section :refer [video-section]]
            [amp.config]
            [helix.hooks :as hooks]
            [helix.dom :as d]
            ["gsap" :refer [gsap]]
            [amp.views.hero-image-view :refer [hero-image-view]]
            [amp.components.elements.rotating-lazy-image-gallery :refer [rotating-lazy-image-gallery]]
            [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
            ["gsap/SplitText" :refer [SplitText]]
            [amp.api.cms :refer [get-gallery-images!] :as cms]
            [amp.components.elements.lazy-image :refer [lazy-image]]
            [applied-science.js-interop :as j]
            [amp.lib.defnc :refer [defnc]]))

(defnc contact-section [{:keys [gradient-class
                                is-visible?
                                force-on?]}]
  (let [outer-ctx (hooks/use-ref "outer-ctx")
        [background-images set-background-images!] (hooks/use-state nil)

        [visited? is-active?] (use-scroll-trigger outer-ctx)]

    (d/section {:ref outer-ctx
                :class "h-screen 
                    w-screen
                    flex
                    items-end
                    justify-center
                    
                    bg-slate-700
                    relative"}

               (hooks/use-memo
                [is-active? visited? background-images]
                (d/div {:class "z-10 absolute w-full h-full"}
                       (d/div {:class "w-screen h-screen relative"}
                              (d/div {:class "absolute w-full h-full"}
                                     ($ hero-image-view
                                        {:img-src "https://atd-722658831.imgix.net/stacks/FileName_131354_001DenoisedBeauty_ViewLayer_012.tif"}

                                        (d/div (d/span {} "Rendering - ")
                                               (d/span {:class "italic font-bold"} "THE ORANGE ONE")
                                               (d/span {} " - © Zadik Zadikian 2026")))))))


               (d/div
                {:class "flex flex-col w-full h-2/5 z-20 items-center justify-center bg-black/50 backdrop-blur-sm"} ; Add items-center and justify-center here
                (d/div {:class "flex flex-col justify-between w-4/5 h-4/5"}
                       (d/div
                        {:class "
                                  font-fira-code
                                  font-light
                                  italic
                                  text-white
                                  text-md
                                  "}
                        "Armenian Pavilion 2026.")

                       (d/div {:class "lg:text-2xl font-fira-code
                                  font-light
                                  text-white"}
                              (d/div
                               {:class "text-2xl"}
                               "Get In Touch")

                              (d/div {:class "flex flex-col space-y-2 mt-2"}
                                     (d/a
                                      {:href "mailto:hello@armenianpavilion2026.org?subject=Let's%20connect"
                                       :target "_blank"
                                       :class "font-fira-code
                                         font-light
                                         text-slate-300"}
                                      "hello@armenianpavilion2026.org")
                                     (d/a
                                      {:href "tel:+13234041152"
                                       :target "_blank"
                                       :class "text-slate-300"}
                                      "+1 323-404-1152")))

                       (d/div {:class "flex justify-between mt-4 text-xs"}
                              (d/span {:class "text-white font-fira-code font-light"}
                                      "© 2025 AZ Studios Inc.")
                              (d/span {:class "text-slate-900 font-fira-code font-light"}
                                      (str "Version " amp.config/git-hash))))))))