(ns amp.components.sections.non-profit
  (:require
   [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
   [amp.components.elements.lazy-image-gallery :refer [lazy-image-gallery]]
   [amp.lib.defnc :refer [defnc]]
   [helix.dom :as d]
   [amp.components.ui.main-button :refer [main-button]]
   [helix.core :refer [$]]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [helix.hooks :as hooks]))

(def images
  [{:src "https://atd-722658831.imgix.net/biennale/metalocus_venice-biennale-corderie-arsenale-photo-giulio-squillacciotti_01.jpg"
    :caption "Arsenale"
    :credit "Artnews"}
   {:src "https://atd-722658831.imgix.net/biennale/arsenale-venezia.jpg"
    :caption "Arsenale"
    :credit "Artnews"}
   {:src "https://atd-722658831.imgix.net/biennale/6431873131_844b5c6d48_b-112659047.jpg"
    :caption "Arsenale"
    :credit "Artnews"}])

(defnc title []
  (d/div {:class "lg:flex
                    w-full
                    lg:h-2/5
                    z-20
                    items-center
                    justify-between
                    bg-black/10
                    lg:p-12 p-4
                    lg:text-6xl text-3xl
                    font-futura
                    font-bold
                    text-slate-800"}

         (d/div {:class "flex flex-col"}
                (d/p {:class "w-1"}
                     "support the armenian pavilion"))))

(defnc copy-block
  [{:keys [title copy]}]
  (d/div {:class "flex flex-col mb-12 font-futura"}
         (d/p {:class "font-bold text-4xl text-slate-800 lowercase"} title)
         (d/p {:class "text-slate-800"} copy)))

(defnc non-profit-section  [{:keys [gradient-class
                                    is-visible?
                                    force-on?]}]
  (let [outer-ctx (hooks/use-ref "outer-ctx")
        [visited? is-active?] (use-scroll-trigger outer-ctx)
        [images set-images] (hooks/use-state images)
        image-gallery-container-ref (hooks/use-ref "image-gallery-container-ref")

        is-desktop? (use-touch-enabled)]
    (d/section {:ref outer-ctx
                :class "h-full 
                          w-full
                          flex
                          blue-purple-grad
                          light-red-grad
                          items-center
                          justify-center
                          font-futura
                          relative"}

               (d/div {:class "flex 
                                 flex-col
                                 overflow-hidden
                                 relative
                                 w-full
                                 lg:p-12 p-4"}
                      ($ title)

                      (d/div {:class "flex overflow-hidden relative"}
                             (d/div {:class "lg:w-1/2 
                                               lg:p-16 p-4"}
                                    ($ copy-block {:title ""
                                                   :copy "Funds go to keep THE STUDIO alive for six months in Venice.  Your support ensures the artist’s residency, covers materials and fabrication, pays our production crew, builds and ships the pavilion, and funds public programs and the exhibition catalogue.  Gifts are handled by Fallen Angels, a registered 501(c)(3) non‑profit; donations to a 501(c)(3) are tax‑deductible"})

                                    (d/div {:class "flex flex-col mb-12 font-futura"}
                                           (d/p {:class "font-bold text-4xl text-slate-800 lowercase"} "What Your Donation Funds")
                                           (d/ul {:class "list-disc list-outside ml-5 text-slate-800"}
                                                 (d/li {} "Artist & team residency in Venice")
                                                 (d/li {} "Fabrication materials and modular blocks")
                                                 (d/li {} "Production crew & documentation (video, photography, editing)")
                                                 (d/li {} "Pavilion build‑out, shipping & logistics")
                                                 (d/li {} "Public programs & education")
                                                 (d/li {} "Archival filming & catalogue")))))

                      (d/div {:class "lg:absolute lg:bottom-[40px] lg:left-1/2 lg:-translate-x-1/2"}
                             ($ main-button
                                {:title "Donate Now"
                                 :additional-classes "text-2xl"
                                 :on-click #(js/window.open "https://donate.stripe.com/14A5kC6SC5RQfo4frS6Ri00" "_blank")}))))))