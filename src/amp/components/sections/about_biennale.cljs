(ns amp.components.sections.about-biennale
  (:require
   [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
   [amp.components.elements.lazy-image-gallery :refer [lazy-image-gallery]]
   [amp.lib.defnc :refer [defnc]]
   [helix.dom :as d]
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
    :credit "Artnews"}
   {:src "https://atd-722658831.imgix.net/biennale/Edificio-E-delle-Sale-dArmi-sud-Arsenale-di-Venezia_01-406863818.jpg"
    :caption "Arsenale"
    :credit "Artnews"}
   {:src "https://atd-722658831.imgix.net/biennale/GettyImages-1396739612-2882003488.jpg"
    :caption "Arsenale"
    :credit "Artnews"}
   {:src "https://atd-722658831.imgix.net/biennale/arsenale-venezia-cosa-vedere-come-visitare-408454160.jpg"
    :caption "Arsenale"
    :credit "Artnews"}
   {:src "https://atd-722658831.imgix.net/biennale/Pavilions-tours-plan.png"
    :caption "Arsenale"
    :credit "Artnews"}
   {:src "https://atd-722658831.imgix.net/biennale/Pavilions-tours-plan.png"
    :caption "Arsenale"
    :credit "Artnews"}
   {:src "https://atd-722658831.imgix.net/biennale/IMG_1754-scaled-1386547518.jpg"
    :caption "Arsenale"
    :credit "Artnews"}

   ;;    
   ])

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
                (d/p {:class ""}
                     "venice")
                (d/p {:class ""}
                     "biennale")
                (d/p {:class ""}
                     "2026"))

         (d/div {:class "flex
                         flex-col
                         font-futura
                         font-bold
                         lg:text-right
                         italic
                         text-white/60"}
                (d/p {:class ""}
                     "in")
                (d/p {:class ""}
                     "minor")
                (d/p {:class ""}
                     "keys"))))

(defnc copy-block
  [{:keys [title copy]}]
  (d/div {:class "flex flex-col mb-12 font-futura"}
         (d/p {:class "font-bold text-4xl text-slate-800 lowercase"} title)
         (d/p {:class "text-slate-800"} copy)))

(defnc about-biennale-section  [{:keys [gradient-class
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
                        pink-grad
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
                                    ($ copy-block {:title "the biennale"
                                                   :copy "The Venice Biennale is the most prestigious platform for contemporary art in the world—the cultural equivalent of the Olympics.  Every two years, nations convene in the Giardini and Arsenale to present the best of their artists.  The 61st International Art Exhibition will run from May 9 to November 22 2026 and, following the unexpected passing of curator Koyo Kouoh, will be realized exactly as she conceived it."})

                                    ($ copy-block {:title "The theme: In Minor Keys"
                                                   :copy "Kouoh’s vision invites us to slow down and listen to the “frequencies of the minor keys,” the quiet tones and lower frequencies that often get lost amid today’s chaos .  In her curatorial text, she describes the minor key as a metaphor for small islands and intimate oases—gardens, courtyards, dance floors—where artists cultivate rich social and ecological worlds .  Rather than celebrating spectacle, the exhibition tunes into “the persistent signals of earth and life,” foregrounding sensory, affective experiences .  As Kouoh’s team notes, “In minor keys are sequences of exhilarating journeys that address the sensate and the affective, inviting visitors to marvel, meditate, dream, revel, reflect and commune in realms where time is not corporate property nor at the mercy of relentlessly accelerated productivity” ."})

                                    ($ copy-block {:title "Why this matters to Armenians"
                                                   :copy "Armenia’s cultural memory is one of quiet endurance, repetition and devotion.  From stone‑carved khachkars to endless rows of hand‑woven carpets, Armenian art has always been a labour of patience and persistence.  Kouoh’s vision of the Biennale as an archipelago of “minor keys” resonates deeply with this ethos.  It is about valuing the handmade over the manufactured, the intimate gesture over the headline‑grabbing spectacle—precisely what Zadik Zadikian will embody in The Studio."})

                                    (d/p {:class ""} "By bringing an Armenian “island” to Venice, we affirm that our heritage belongs on the world’s biggest stage not because it shouts the loudest, but because it teaches the world how to listen.  Supporting the Armenian Pavilion is more than funding an exhibition; it is enabling a sanctuary of slow, deliberate creativity—an oasis of dignity and resilience—within a global conversation on art’s future."))

                             (when (and is-desktop? visited?)
                               (d/div {:ref image-gallery-container-ref
                                       :class "ml-8
                                               w-7/12
                                               relative
                                               overflow-hidden"}
                                      (d/div {:class "absolute h-full"}
                                             ($ lazy-image-gallery
                                                {:images images
                                                 :image-gallery-container-ref image-gallery-container-ref})))))))))