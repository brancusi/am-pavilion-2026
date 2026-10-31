(ns amp.pages.artist.page
  "Artist page, in the design system's page language: night head with the
   portrait and key facts, epigraph, the biography essay, a chronology, the
   works gallery, a studio film and the closing chapter on Armenia."
  (:require
   [amp.data.films :as films]
   [amp.hooks.use-in-view :refer [use-in-view]]
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.fit-gallery :refer [fit-gallery]]
   [amp.ui.picture :refer [picture mux-poster]]
   [amp.ui.wayfinding :as wf]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def ^:private lazy-film (lazy-component amp.ui.video-background/film-player))

;; ── Data ───────────────────────────────────────────────────────────────────

(def portrait-src "https://media.armenianpavilion.org/portraits/zz-portrait-2.jpg")

(def facts
  [["Born" "Yerevan, Armenia"]
   ["Studio" "Los Angeles"]
   ["Practice" "Unit-based sculpture"]
   ["Pavilion" "Tesa 41, Arsenale"]])

(def chronology
  [{:dist "Age 19" :title "The Arax River"
    :body "Escapes Soviet Armenia by swimming across the Arax under machine-gun fire, and reaches America with nothing."}
   {:dist "San Francisco" :title "Assistant to Bufano"
    :body "Works as an assistant to the sculptor Beniamino Bufano and learns scale, color and the physical intelligence of large-form making."}
   {:dist "1973" :title "New York and Serra"
    :body "Moves east into the Minimalist circle and assists Richard Serra on the black oil-stick wall drawings, one of which Serra titles Zadikians."}
   {:dist "1976" :title "A field of gold"
    :body "Turns his ten-thousand-square-foot home and studio into a continuous field of industrial gold."}
   {:dist "1978" :title "1,000 Bricks"
    :body "1,000 Bricks Gilded in 24-Karat Gold Leaf: the unit-based language that runs through all the work since."}
   {:dist "2026" :title "Armenian Pavilion"
    :body "Represents Armenia at the 61st International Art Exhibition, La Biennale di Venezia, with The Studio in Tesa 41."}])

(def works
  [{:img-src "https://media.armenianpavilion.org/artwork/1.jpeg"
    :aspect-ratio 0.75 :caption "Gilded block composition" :credit "Zadik Zadikian"}
   {:img-src "https://media.armenianpavilion.org/blue_yellow/top_view.jpg"
    :aspect-ratio 0.75 :caption "Blue Yellow Blue Yellow" :credit "Studio 2026"}
   {:img-src "https://media.armenianpavilion.org/blue_yellow/side-2.jpg"
    :aspect-ratio 0.75 :caption "Blue Yellow Blue Yellow" :credit "Studio 2026"}
   {:img-src "https://media.armenianpavilion.org/big_red/master.jpg"
    :aspect-ratio 1.78 :caption "The Big Red" :credit "Render 2026"}
   {:img-src "https://media.armenianpavilion.org/big_red/corner_low.jpg"
    :aspect-ratio 0.75 :caption "The Big Red" :credit "Render 2026"}
   {:img-src "https://media.armenianpavilion.org/photos/blue_unit_with_hand.jpg"
    :aspect-ratio 1.50 :caption "Blue block" :credit "Los Angeles 2026"}
   {:img-src "https://media.armenianpavilion.org/big_red/flag.jpg"
    :aspect-ratio 1.38 :caption "The Big Red" :credit "Render 2026"}])

(def film (first (filter #(= "maquette" (:slug %)) films/films)))

;; ── Sections ───────────────────────────────────────────────────────────────

(defnc head []
  (<>
   (d/section {:class "ap-vhead"}
              (d/div {:class "ap-wrap ap-vhead__grid ap-artist-head"}
                     (d/div {:class "flex flex-col gap-5"}
                            (d/p {:class "ap-label m-0 text-yellow"} "The Artist")
                            (d/h1 {:class "ap-display-xl"} "Zadik Zadikian")
                            (d/p {:class "ap-lede max-w-[36ch] m-0"}
                                 "Sculptor. Representing Armenia at the 61st International Art Exhibition — La Biennale di Venezia.")
                            (d/dl {:class "ap-keyfacts mt-4"}
                                  (for [[k v] facts]
                                    (d/div {:key k} (d/dt k) (d/dd v)))))
                     (d/figure {:class "ap-figure ap-artist-head__portrait"}
                               (d/div {:class "ap-figure__frame" :style #js {"--ar" "4/5"}}
                                      ($ picture {:src portrait-src :alt "Zadik Zadikian" :eager? true
                                                  :sizes "(min-width: 960px) 40vw, 100vw"})))))
   (d/div {:class "ap-hero__strip" :aria-hidden true}
          (for [i (range 9)] (d/i {:key i})))))

(defnc epigraph []
  (d/section {:class "ap-sec"}
             (d/div {:class "ap-wrap"}
                    (d/blockquote {:class "ap-quote max-w-[32ch] !m-0"}
                                  (d/p "If you want to learn about something, become that thing and then study yourself.")
                                  (d/cite "Zadik Zadikian")))))

(defnc biography []
  (d/section {:class "ap-article pb-12 lg:pb-24" :id "biography"}
             (d/header {:class "ap-article__head !pt-0"}
                       (d/p {:class "ap-label ap-muted m-0"} "Biography")
                       (d/h2 {:class "ap-display-l"} "A studio forged through touch")
                       (d/p {:class "ap-article__byline m-0"} (d/span "Written by Carlo McCormick")))
             (d/div {:class "ap-article__body"}
                    (d/p {:class "ap-dropcap"}
                         "Born in Yerevan, " (d/strong "Zadik Zadikian")
                         "’s life began in extremes. At nineteen—armed only with conviction—he escaped Soviet Armenia by swimming across the Arax River under machine-gun fire. He arrived in America with nothing but the instincts that had guided him since childhood: to build, to shape matter, to seek form through discipline and elemental materials.")
                    (d/p "In San Francisco, he worked as an assistant to the sculptor " (d/strong "Beniamino Bufano")
                         ", absorbing a lifelong sense of scale, color, and the physical intelligence of large-form making. Drawn to the heat and velocity of New York, he moved east in 1973 and quickly found himself inside the crucible of the Minimalist movement, assisting "
                         (d/strong "Richard Serra") " on the monumental black oil-stick wall drawings—one of which Serra titled "
                         (d/em "Zadikians") ".")
                    (d/p "This immersion into New York’s severity and possibility forged an artist who has always moved toward intensity: toward weight, clarity, touch. The son of a builder, he grew up with materials—clay, plaster, stone, the raw grammar of structure. In New York, these instincts crystallized. In 1976 he transformed his ten-thousand-square-foot home and studio into a continuous field of industrial gold, an act of totalizing vision that set the tone for everything that followed."))
             (d/blockquote {:class "ap-quote ap-quote--block ap-wide !my-4"}
                           (d/p "The block remembers two things—the wall it was taken from and the wall it will become.")
                           (d/cite "Zadik Zadikian"))
             (d/div {:class "ap-article__body"}
                    (d/p "His 1978 project " (d/em "1,000 Bricks Gilded in 24-Karat Gold Leaf")
                         " marked the emergence of his now-signature language: unit-based sculptural forms—bricklike, essential, endlessly recombinable—through which gold becomes not decoration but ontology. For decades, Zadikian has pushed this vocabulary to distill the elemental. His works hover between the geological and the luminous, between ancient memory and future speculation, always returning to the fundamental question: What is born when matter is reduced to its clearest form?")
                    (d/p "Zadikian’s practice is defined by extremes—of material, of discipline, of vision—and by a lifelong commitment to the structures that underlie both art and the world itself. His is a studio forged through touch, labor, repetition, and the pursuit of a form so essential it borders on the eternal."))))

(defnc chronology-section []
  (d/section {:class "ap-sec bg-paper-sunk" :id "chronology"}
             (d/div {:class "ap-wrap ap-guide lg:!grid-cols-[1fr_1.4fr] items-start"}
                    ($ wf/section-head {:label "Chronology" :title "From the Arax to the Arsenale"
                                        :lede "Fifty years of a single question, asked in clay, plaster, gold and pigment."})
                    ($ wf/steps {:items chronology}))))

(defnc works-section []
  (d/section {:class "ap-sec" :id "works"}
             ($ fit-gallery {:slides works :label "Selected works" :title "The Work"})))

(defnc film-section []
  (let [[playing? set-playing!] (hooks/use-state false)
        {:keys [title playback-id poster summary where duration]} film
        [ref {near? :in?}] (use-in-view :root-margin "100% 0px")
        _ (hooks/use-effect [near?] (when near? (.preload lazy-film)))
        still (d/img {:src (mux-poster playback-id {:w 1600 :time poster})
                      :alt "" :loading "lazy"})]
    (d/section {:ref ref :class "ap-sec ap-film" :id "film"}
               (d/div {:class "ap-wrap flex flex-col gap-6"}
                      (d/div
                       (d/p {:class "ap-label m-0 mb-1 text-yellow"} "In the studio")
                       (d/h2 {:class "ap-h1"} title))
                      (d/figure {:class "ap-figure"}
                                (d/div {:class "ap-figure__frame" :style #js {"--ar" "16/9"}}
                                       (if playing?
                                         ($ lazy-film {:playback-id playback-id :title title
                                                       :fallback still
                                                       :poster (mux-poster playback-id {:w 1600 :time poster})})
                                         (<>
                                          still
                                          (d/button {:class "ap-play" :aria-label (str "Play " title)
                                                     :on-click #(set-playing! true)}
                                                    (d/svg {:width 28 :height 28 :viewBox "0 0 16 16"
                                                            :fill "currentColor" :aria-hidden true}
                                                           (d/path {:d "M4 2l10 6-10 6z"}))))))
                                (d/figcaption {:class "ap-tomb"}
                                              (d/span {:class "ap-tomb__no"} (films/running-time duration))
                                              (d/span {:class "ap-tomb__title"} title)
                                              (d/span {:class "ap-tomb__credit"} (str where " · " (:when film)))))
                      (d/p {:class "ap-body m-0 max-w-[60ch]"} summary)))))

(defnc story-link []
  (d/section {:class "ap-sec" :id "story"}
             (d/div {:class "ap-wrap"}
                    (d/a {:class "ap-article__next ap-story-link" :href "/armenian-as-well"}
                         (d/span {:class "ap-label text-yellow"} "A story · 1973–2026")
                         (d/span {:class "ap-display-l"} "Armenian as well")
                         (d/span {:class "ap-body m-0 max-w-[52ch]"}
                                 "Zadik Zadikian and Tony Shafrazi: from a meeting in Richard Serra’s studio, through a Tehran gallery lost to a revolution, to The Studio in Venice.")
                         (d/span {:class "ap-link self-start mt-2"} "Read the story →")))))

(defnc return-section []
  (d/section {:class "ap-chapter ap-chapter--red" :id "return"}
             (d/div {:class "ap-wrap !px-0 grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-24"}
                    (d/div {:class "flex flex-col gap-4"}
                           (d/p {:class "ap-label ap-chapter__eyebrow m-0"} "Full circle")
                           (d/h2 {:class "ap-display-l ap-chapter__title"} "Return to Armenia")
                           (d/p {:class "ap-artist-aphorism"}
                                "“The block is the smallest homeland. Wherever you stack it, you are building Armenia.”"))
                    (d/div {:class "ap-artist-cols"}
                           (d/p "After decades in the United States, Zadik Zadikian began a gradual return—not only to the country he had fled, but to the questions of identity, belonging, and cultural memory that had shaped his work from the very beginning.")
                           (d/p "Armenia in the post-Soviet era was a country in transformation. The independence of 1991 had opened new possibilities but also revealed old wounds. For Zadikian, returning was not a simple homecoming; it was an encounter with a nation remaking itself from the same elemental materials—stone, earth, will—that he had been working with in his studio for half a century.")
                           (d/p "The invitation to represent Armenia at the 61st Biennale Arte carries a particular resonance. Venice and Armenia share a deep historical connection: the island of San Lazzaro degli Armeni has housed an Armenian monastery since 1717, preserving manuscripts, language, and culture through centuries of upheaval. To bring Armenian art to the Biennale is to continue a conversation that has been unfolding in this lagoon for over three hundred years.")
                           (d/p "For Zadikian, the Biennale is not a stage for national spectacle but a place where the quiet persistence of making—the studio as sanctuary—can speak across borders. The pavilion will operate as a living workshop, echoing the Armenian tradition of the " (d/em "arvestanots") " (workshop), where art is inseparable from the daily labor of its creation.")
                           (d/p "In representing Armenia at Venice, Zadikian closes a circle that began with his escape. The young man who left a culture behind in order to make art freely now returns that art to the world stage under the flag of the nation he never stopped carrying with him.")))))

;; ── Page ───────────────────────────────────────────────────────────────────

(defnc artist-view
  [_props]
  (d/div {:class "bg-paper text-ink"}
         ($ head)
         ($ epigraph)
         ($ biography)
         ($ chronology-section)
         ($ works-section)
         ($ film-section)
         ($ story-link)
         ($ return-section)))
