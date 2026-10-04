(ns amp.pages.landing.page
  (:require
   [amp.nav.logo :refer [logo-nav]]
   [amp.ui.section :refer [section]]
   [amp.pages.landing.studio :refer [about-studio]]
   [amp.pages.landing.artist :refer [artist-section]]
   [amp.pages.landing.curators :refer [curators-section]]
   [amp.pages.landing.in-minor-keys :refer [in-minor-keys]]
   [amp.pages.landing.venue :refer [location-section]]
   [amp.pages.landing.hero :refer [mobile-hero-section]]
   [amp.pages.landing.press-release :refer [press-release]]
   [amp.pages.landing.teaser :refer [teaser-section]]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

;; Temporary closure banner — remove once the pavilion has reopened on
;; October 9, 2026. Pinned to the bottom edge so it never covers the nav.
(defnc closure-banner [_props]
  (d/aside {:aria-label "Temporary closure"
            :class (s/cx "fixed bottom-0 left-0 right-0 z-30"
                         "border-t-2" s/border-accent s/bg-glass)}
           (d/p {:class (s/cx s/font-body s/text-sm s/text-primary
                              "max-w-5xl mx-auto px-4 md:px-8 py-3 text-left md:text-center leading-snug")}
                (d/span {:class s/em-strong} "Temporarily closed.")
                " The pavilion is closed from October 4 because of the military symposium at the Arsenale and "
                (d/span {:class s/em-strong} "reopens on October 9, 2026")
                ". We apologize for the inconvenience. "
                (d/a {:href "/visit"
                      :class (s/cx s/text-accent "underline underline-offset-4 whitespace-nowrap")}
                     "Visitor info"))))

(defnc landing-view []
  (let [container-ref (hooks/use-ref "container-ref")
        is-desktop? (use-touch-enabled)]

    ($ :div {:ref container-ref
             :class (str "overflow-x-hidden grey-grad pb-28 md:pb-16 " s/text-primary)}
       ($ closure-banner)
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

       (d/div {:class s/content-column-container}

              (d/div {:class (str "flex flex-col " s/content-column)}
                     ($ press-release {:id "press-release"
                                       :title "Press Release"})
                     ($ about-studio {:id "about-studio"
                                      :title "The Studio"})

                     ($ location-section {:id "venue"
                                          :title "The Venue"})
                     ($ in-minor-keys {:id "in-minor-keys"
                                       :title "In Minor Keys"})
                     ($ artist-section {:id "artist"
                                        :title "The Artist"})
                     ($ curators-section {:id "curators"
                                          :title "Curators"}))))))
