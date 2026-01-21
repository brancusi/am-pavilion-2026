(ns amp.components.sections.contact-section
  (:require
   [amp.components.elements.captioned-image :refer [captioned-image]]
   [amp.config]
   [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
   [amp.components.media.lazy-image-with-overlay :refer [lazy-image-with-overlay]]

   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc contact-section [{:keys [gradient-class
                                is-visible?
                                force-on?]}]
  (let [outer-ctx (hooks/use-ref "outer-ctx")


        [visited? is-active?] (use-scroll-trigger outer-ctx)]

    (d/section {:ref outer-ctx
                :class "
                    flex
                    items-end
                    justify-center
                    bg-slate-700
                    relative"}

               (d/div {:class "w-full aspect-[4/5]"}
                      ($ lazy-image-with-overlay
                         {:img-src "https://atd-722658831.imgix.net/simple_blocks/FileName_001Beauty_ViewLayer_099.tif"
                          :aspect-ratio 0.8
                          :fit "crop"
                          :active? true}))


               (d/div
                {:class "absolute flex flex-col w-full h-2/5 z-20 items-center justify-center bg-black/50 backdrop-blur-sm"} ; Add items-center and justify-center here
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
                                      "© 2026 AZ Studios Inc.")
                              (d/span {:class "text-slate-900 font-fira-code font-light"}
                                      (str "Version " amp.config/git-hash))))))))