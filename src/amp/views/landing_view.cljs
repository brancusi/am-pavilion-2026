(ns amp.views.landing-view
  (:require [amp.components.section :refer [section]]
            [amp.views.hero-image-view :refer [hero-image-view]]
            [amp.components.sections.quote-section :refer [quote-section]]
            [amp.components.sections.video-section :refer [video-section]]
            [amp.components.sections.what-section :refer [what-section]]
            [amp.components.sections.work-overview :refer [work-overview]]
            [amp.components.sections.non-profit :refer [non-profit-section]]
            [amp.components.elements.lazy-image :refer [lazy-image]]
            [amp.components.sections.about-biennale :refer [about-biennale-section]]
            [amp.components.sections.team-section :refer [team-section]]
            [amp.components.ui.main-button :refer [main-button]]
            [amp.components.sections.contact-section :refer [contact-section]]

            [amp.lib.defnc :refer [defnc]]
            [amp.reducers.requires]
            [amp.components.hero-header :refer [hero-header]]
            [amp.components.navs.progress-menu :refer [progress-menu]]
            [amp.components.sections.mobile-hero-section :refer [mobile-hero-section]]
            [amp.hooks.use-media-query :refer [use-media-breakpoint use-touch-enabled]]
            [amp.components.playful-titles :refer [playful-titles]]
            [amp.config]

            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(defnc landing-view []
  (let [container-ref (hooks/use-ref "container-ref")
        #_#_current-index (use-scroll-progress 6 container-ref {:throttle-interval 200})
        is-desktop? (use-touch-enabled)]

    ($ :div {:ref container-ref
             :class ""}
       (d/p amp.config/git-hash)

       (d/div {:class "fixed z-20 justify-center items-center top-1/2 -translate-y-1/2 left-2"}
              ($ progress-menu {:total-sections 3}))

       (if is-desktop?
         ($ section
            {:key "video"
             :section-id "video"}
            (d/div {:class "w-screen h-screen relative"}
                   (d/div {:class "absolute w-full h-full"}
                          ($ video-section {:playback-id "fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo"}))
                   (d/div {:class "absolute w-full h-full pointer-events-none"}
                          ($ playful-titles))
                   (d/div {:class "absolute bottom-[40px] left-1/2 -translate-x-1/2"}
                          ($ main-button
                             {:title "Donate Now"
                              :additional-classes "text-2xl"
                              :on-click #(js/window.open "https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00" "_blank")}))))
         ($ section
            {:key "mobile-hero"
             :section-id "mobile-hero"}
            ($ mobile-hero-section)))

       (when is-desktop?
         ($ section
            {:key "hero"
             :section-id "hero"}
            ($ hero-header)))

       ($ hero-image-view {:img-src "https://atd-722658831.imgix.net/stacks/FileName_205932_001DenoisedBeauty_ViewLayer_012.tif"})
       #_(d/div {:class "h-screen w-screen overflow-hidden"}
                ($ lazy-image {:src "https://atd-722658831.imgix.net/stacks/FileName_205932_001DenoisedBeauty_ViewLayer_012.tif?w=1200&auto=compress&auto=format"
                               :transition {:duration 0.25
                                            :opacity 1}
                               :should-load? true}))

       ($ work-overview)
       ($ team-section)
       ($ about-biennale-section)
       ($ non-profit-section)

































       #_($ section
            {:key "video-section"
             :section-id "video-section"}
            (d/div {:class "w-screen h-screen relative"}
                   (d/div {:class "absolute w-full h-full"}
                          ($ video-section {:playback-id "4xg96n14D7TLhM5S02g2v4kUD00gpNMpyYLNGGcyk8U3k"}))))

       #_($ section
            {:key "main-quote"
             :section-id "main-quote"}
            ($ quote-section {:section-id "main-quote"
                              :gradient-class "orange-grad"
                              :quote ["The way you do anything"
                                      "Is the way you do everything"]}))

       #_($ section
            {:key "doing"
             :section-id "doing"}
            ($ quote-section {:class ""
                              :gradient-class "blue-grad"
                              :section-id "doing"
                              :header "What I Love"
                              :quote ["Making immutable data move."
                                      "Making moving images that make people stop."]}))

       #_($ section
            {:key "what"
             :section-id "what"}
            ($ what-section {:class ""
                             :gradient-class "purple-grad"
                             :section-id "what"}))

       #_($ section
            {:key "contact"
             :section-id "contact"}
            ($ contact-section {:force-on? false
                                :section-id "contact"})))))