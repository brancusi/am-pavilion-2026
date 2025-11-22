(ns amp.components.sections.team-section
  (:require
   [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
   [amp.components.elements.lazy-image-gallery :refer [lazy-image-gallery]]

   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.lib.defnc :refer [defnc]]
   [helix.dom :as d]
   [helix.core :refer [$]]
   [helix.hooks :as hooks]))

(def zadik-images
  [{:src "https://atd-722658831.imgix.net/artwork/2.webp"
    :caption "Zadik image 01 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/full_back-1.webp"
    :caption "Zadik image 02 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Zadik image 03 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Zadik image 04 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/full_back-1.webp"
    :caption "Zadik image 05 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Zadik image 06 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/0.webp"
    :caption "Zadik image 07 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Zadik image 08 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/full_back-1.webp"
    :caption "Zadik image 09 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Zadik image 10 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/full_back-1.webp"
    :caption "Zadik image 11 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Zadik image 12 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/0.webp"
    :caption "Zadik image 13 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Zadik image 14 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/full_back-1.webp"
    :caption "Zadik image 15 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Zadik image 16 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/full_back-1.webp"
    :caption "Zadik image 17 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Zadik image 18 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/0.webp"
    :caption "Zadik image 19 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/0.webp"
    :caption "Zadik image 20 caption"}])

(def tina-images
  [{:src "https://atd-722658831.imgix.net/artwork/2.webp"
    :caption "Tina image 01 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/full_back-1.webp"
    :caption "Tina image 02 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Tina image 03 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Tina image 04 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/full_back-1.webp"
    :caption "Tina image 05 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Tina image 06 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/0.webp"
    :caption "Tina image 07 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Tina image 08 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/full_back-1.webp"
    :caption "Tina image 09 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Tina image 10 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/full_back-1.webp"
    :caption "Tina image 11 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Tina image 12 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/0.webp"
    :caption "Tina image 13 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Tina image 14 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/full_back-1.webp"
    :caption "Tina image 15 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Tina image 16 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/full_back-1.webp"
    :caption "Tina image 17 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/3.webp"
    :caption "Tina image 18 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/0.webp"
    :caption "Tina image 19 caption"}
   {:src "https://atd-722658831.imgix.net/artwork/0.webp"
    :caption "Tina image 20 caption"}])

(def tony-images
  [{:src "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg"
    :caption "Tony image 01 caption"}
   {:src "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg"
    :caption "Tony image 02 caption"}
   {:src "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg"
    :caption "Tony image 03 caption"}
   {:src "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg"
    :caption "Tony image 04 caption"}
   {:src "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg"
    :caption "Tony image 05 caption"}
   {:src "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg"
    :caption "Tony image 06 caption"}
   {:src "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg"
    :caption "Tony image 07 caption"}
   {:src "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg"
    :caption "Tony image 08 caption"}
   {:src "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg"
    :caption "Tony image 09 caption"}
   {:src "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg"
    :caption "Tony image 10 caption"}
   {:src "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg"
    :caption "Tony image 11 caption"}
   {:src "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg"
    :caption "Tony image 12 caption"}
   {:src "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg"
    :caption "Tony image 13 caption"}
   {:src "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg"
    :caption "Tony image 14 caption"}
   {:src "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg"
    :caption "Tony image 15 caption"}
   {:src "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg"
    :caption "Tony image 16 caption"}
   {:src "https://atd-722658831.imgix.net/tony/jean-michel-basquiat-basquiat-tony-shafrazi-gallery-1999-(vintage-basquiat)-1315018087.jpg"
    :caption "Tony image 17 caption"}
   {:src "https://atd-722658831.imgix.net/tony/Haring_Shafrazi_Gallery_Poster_sig_master-3718979807.jpg"
    :caption "Tony image 18 caption"}
   {:src "https://atd-722658831.imgix.net/tony/tony-shafrazi-1745911128.jpg"
    :caption "Tony image 19 caption"}
   {:src "https://atd-722658831.imgix.net/tony/PALMER_VOL-07_TONY-SHAFRAZI_G-2448239116.jpg"
    :caption "Tony image 20 caption"}
   {:src "https://atd-722658831.imgix.net/tony/tony-shafrazi-dc36ac7f-7545-421c-842d-fb9f691dd22-resize-750-3792148717.jpg"
    :caption "Tony image 21 caption"}
   {:src "https://atd-722658831.imgix.net/tony/shafrazi_10-e1426165121106-2104617331.jpg"
    :caption "Tony image 22 caption"}])


(def tony-card-data {:name "Tony Shafrazi"
                     :role "Curator"
                     :social "@tonyshafrazi"
                     :email "tony.shafrazi@armenianpavilion2026.org"
                     :copy "Tony Shafrazi (b. 1943, Abadan, Iran) is a renowned art dealer, gallerist, and curator whose career has shaped the contemporary art world. Trained at the Royal College of Art in London, he moved to New York in 1969 and soon became closely associated with figures such as Andy Warhol, Roy Lichtenstein, and Leo Castelli. His early years were marked by bold artistic interventions, before establishing himself as one of the leading dealers of his generation.
                      
                      In 1979, he opened the Tony Shafrazi Gallery in New York, championing artists like Jean-Michel Basquiat, Keith Haring, and Kenny Scharf, alongside exhibitions of Picasso, Francis Bacon, Jasper Johns, Carl Andre, and Warhol. Internationally, he advised the Tehran Museum of Contemporary Art in assembling one of the most significant collections of Western modernism outside Europe and the United States.
                      
                      Shafrazi first met Zadik Zadikian while the artist was working with Richard Serra, later including him in his historic Tehran exhibition before the 1979 Revolution. Their collaboration forged a lasting connection, and Shafrazi has supported Zadikian’s work over the decades. For this project, he brings unrivaled experience, a global network, and a deep commitment to presenting Armenia on the world stage at the Venice Biennale."})
(def tina-card-data {:name "Tina Chakarian"
                     :role "Curator"
                     :social "@tinachakarian"
                     :email "tina.chakarian@armenianpavilion2026.org"
                     :copy "Tina Chakarian is a curator currently living in Boston and Yerevan. 

Born and raised in Beirut, Lebanon, she studied Visual Arts at UCLA and Tufts University. 

She was previously the Development Director at the Armenian Museum of America and an adjunct Professor at several Boston based universities.  Tina serves as a Principal and Creative Director at Chakarian Design Group, LLC, and, co-curates the Midway Artists Studios in Boston. 

As a visual artist, Tina has exhibited a number of installations in the U.S., Lebanon and Armenia, including “Living Utopias” (Yerevan, 2018). 

She has decades of experience in the field of philanthropy, where she combines her skills as an artist and fundraiser, to help support organizations and initiatives closest to her heart. 
"})

(def zadik-card-data {:name "Zadik Zadikian"
                      :role "Artist"
                      :social "@zadikzadikian"
                      :email "zadik.zadikian@armenianpavilion2026.org"
                      :copy "Born in 1948 in Yerevan, Soviet Armenia, Zadik Zadikian entered the Art Academy at fifteen and exhibited in Yerevan and Moscow before escaping the Soviet Union at nineteen by swimming across the Arax River in winter. In 1969 he arrived in San Francisco, apprenticing with sculptor Beniamino Bufano, and later moved to New York where he assisted Richard Serra on his first monumental oil-stick wall drawings—one of which was named after him. These encounters with scale, discipline, and radical form became the foundation of his artistic language.

In 1976, Zadikian gilded his entire 10,000-square-foot studio in industrial gold, an immersive act of transformation that anticipated his project 1000 Bricks Gilded in 24-Karat Gold Leaf (1978). Since then, gold has remained his central medium—at once alchemical and architectural, extravagant yet elemental. His brick-like forms distill structure into essence, revealing permanence through repetition and beauty within order.

Reflecting on exile, Zadikian writes: “When I escaped, I lost everything—my family, my country, my world. That void became my canvas. Gold is the witness. Beauty is found within structure. Repetition is the foundation of change.” Now based in Los Angeles, he has recently exhibited at the Brooklyn Museum and Tony Shafrazi’s Gallery Without Walls."})

(defnc team-member-card
  [{:keys [data images flash-images-handler]}]
  (let [{:keys [name role copy social email]} data]
    (d/div {:class "flex flex-col
                    mb-16
                    font-futura text-gray-800"}
           (d/div {:class "relative inline-block
                           z-30
                           w-fit
                           -mb-6"
                   :on-mouse-enter (fn []
                                     (flash-images-handler images))}
                  (d/div {:class "absolute inset-y-1 inset-x-0
                                  translate-x-2 translate-y-2
                                  warm-yellow
                                  pointer-events-none"})
                  (d/p {:class "relative z-10
                                text-3xl whitespace-nowrap lg:text-2xl font-bold lowercase
                                pointer-events-none"}
                       name))
           (d/p {:class "text-6xl lg:text-8xl font-bold lowercase
                         z-20
                         mb-4"}
                role)
           (d/p {:class "text-md text-gray-600"}
                copy)
           (d/hr {:class "my-4
                          border-gray-900"})
           (d/p {:class "text-md text-red-600"}
                social)
           (d/p {:class "text-md text-red-600"}
                email))))

(defnc team-members
  [{:keys [flash-images-handler]}]
  (d/div {:class "w-full
                  flex flex-col
                  items-center justify-center
                  
                  "}
         (d/div {:class "items-center justify-center
                         w-full md:w-10/12
                  
                  
                  lg:pl-32 px-8 py-16
                         "}
                ($ team-member-card {:data tony-card-data
                                     :images tony-images
                                     :flash-images-handler flash-images-handler})
                ($ team-member-card {:data tina-card-data
                                     :images tina-images
                                     :flash-images-handler flash-images-handler})
                ($ team-member-card {:data zadik-card-data
                                     :images zadik-images
                                     :flash-images-handler flash-images-handler}))))

(defnc team-section  [{:keys [gradient-class
                              is-visible?
                              force-on?]}]
  (let [outer-ctx (hooks/use-ref "outer-ctx")
        [visited? is-active?] (use-scroll-trigger outer-ctx)
        [images set-images] (hooks/use-state zadik-images)
        is-desktop? (use-touch-enabled)
        image-gallery-container-ref (hooks/use-ref "image-gallery-container-ref")]
    (d/section {:ref outer-ctx
                :class "relative
                        h-full w-full
                        flex items-end justify-center
                        pink-grad blue-light-grad"}
               (d/div {:class "relative
                               flex
                               overflow-hidden"}
                      (d/div {:class "absolute left-0 top-0
                                      font-futura font-bold text-8xl
                                      light-blue-font-color
                                      opacity-30"}
                             (d/p {:class "overflow-hidden"
                                   :style {:writing-mode "vertical-rl"}}
                                  "team.թիմ.équipe.equipo.squadra.team.թիմ.équipe.equipo.squadra.team"))

                      ($ team-members {:flash-images-handler set-images})
                      (when (and is-desktop? visited?)
                        (d/div {:ref image-gallery-container-ref
                                :class "relative
                                        w-8/12
                                        ml-8
                                        overflow-hidden"}
                               (d/div {:class "absolute h-full"}
                                      ($ lazy-image-gallery
                                         {:images images
                                          :image-gallery-container-ref image-gallery-container-ref}))))))))