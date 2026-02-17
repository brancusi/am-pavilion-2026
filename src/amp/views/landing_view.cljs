(ns amp.views.landing-view
  (:require
   [amp.components.sections.teaser-section :refer [teaser-section]]
   [amp.components.navs.donation-nav :refer [donation-nav]]
   [amp.components.navs.logo-nav :refer [logo-nav]]
   [amp.components.navs.progress-menu :refer [progress-menu]]
   [amp.components.playful-titles :refer [playful-titles]]
   [amp.components.section :refer [section]]
   [amp.components.sections.about-biennale :refer [about-biennale-section]]
   [amp.components.sections.about-studio :refer [about-studio]]
   [amp.components.sections.contact-section :refer [contact-section]]
   [amp.components.sections.artist-section :refer [artist-section]]
   [amp.components.sections.curators-section :refer [curators-section]]
   [amp.components.sections.in-minor-keys :refer [in-minor-keys]]
   [amp.components.sections.mobile-hero-section :refer [mobile-hero-section]]
   [amp.components.sections.site-footer :refer [site-footer]]

   [amp.components.sections.non-profit :refer [non-profit-section]]
   [amp.components.sections.press-release :refer [press-release]]
   [amp.components.sections.team-section :refer [team-section]]
   [amp.components.sections.video-section :refer [video-section]]
   [amp.components.sections.work-overview :refer [work-overview]]
   [amp.components.ui.main-button :refer [main-button]]
   [amp.components.ui.theme-toggle :refer [theme-toggle]]
   [amp.config]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.lib.defnc :refer [defnc]]
   [amp.reducers.requires]
   [amp.styles :as s]
   [amp.views.hero-image-view :refer [hero-image-view]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(defnc landing-view []
  (let [container-ref (hooks/use-ref "container-ref")
        #_#_current-index (use-scroll-progress 6 container-ref {:throttle-interval 200})
        is-desktop? (use-touch-enabled)]

    ($ :div {:ref container-ref
             :class (str "overflow-x-hidden grey-grad " s/text-primary)}
       #_(d/p amp.config/git-hash)
       (d/div {:class "fixed top-8 right-8 z-50"}
              ($ theme-toggle))
       (when is-desktop?
         ($ logo-nav))

       ($ section
          {:key "hero"
           :section-id "hero"}
          ($ mobile-hero-section))

       ($ section
          {:key "teaser"
           :section-id "teaser"}
          ($ teaser-section))

       #_($ hero-image-view
            {:img-src "https://atd-722658831.imgix.net/stacks/FileName_205932_001DenoisedBeauty_ViewLayer_012.tif"}

            (d/div (d/span {} "Rendering - ")
                   (d/span {:class "italic font-bold"} "THE ORANGE ONE")
                   (d/span {} " - © Zadik Zadikian 2026")))

       (d/div {:class s/content-column-container}

              (d/div {:class (str "flex flex-col " s/content-column)}
                     ($ press-release {:id "press-release"
                                       :title "Press Release"})
                     ($ about-studio {:id "about-studio"
                                      :title "The Studio"})
                     ($ in-minor-keys {:id "in-minor-keys"
                                       :title "In Minor Keys"})
                     ($ artist-section {:id "artist"
                                        :title "The Artist"})
                     ($ curators-section {:id "curators"
                                          :title "Curators"})))       ($ site-footer)       #_($ work-overview)
       #_($ team-section)
       #_($ about-biennale-section)
       #_($ non-profit-section)
       #_($ contact-section)































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