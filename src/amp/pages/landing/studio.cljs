(ns amp.pages.landing.studio
  "The exhibition essay by Carlo McCormick, as an article: the opening
   paragraph, then the rest behind Read the full essay."
  (:require
   [amp.lib.defnc :refer [defnc]]
   [amp.ui.read-more :refer [read-more]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc about-studio
  [{:keys [id]}]
  (d/section {:id id :class "ap-article border-t border-rule pb-12 lg:pb-24"}
             (d/header {:class "ap-article__head"}
                       (d/p {:class "ap-label ap-muted m-0"} "The exhibition")
                       (d/h2 {:class "ap-display-l"} "The Studio")
                       (d/p {:class "ap-article__byline m-0"}
                            (d/span "Written by Carlo McCormick")
                            (d/span "Exhibition essay")))
             (d/div {:class "ap-article__body"}
                    (d/p {:class "ap-dropcap"}
                         "Over the entire six-month duration of the Biennale, the "
                         (d/strong "Armenia Pavilion") " will operate as " (d/em "The Studio")
                         ", a functioning atelier where the artist " (d/strong "Zadik Zadikian")
                         ", with his son Aram and assistants, will be engaged in the process and the study of making things. Located in the "
                         (d/strong "Arsenale Militare")
                         ", a vast complex of shipyards and armories that for over 900 years was the heart of Venetian naval power, the studio becomes a neutral site where things are studied, formed, cast, assembled, and made through "
                         (d/strong "precision, repetition, calibration, attentive labor, and careful consideration")
                         ". Using the art and language of craft—long a part of the culture of Armenia, of Venice, and of human experience everywhere—Zadikian actualizes the studio as a workshop of the handmade, the contemplative, and the constantly developing sculpture."))
             ($ read-more {:label "Read the full essay"}
                (d/div {:class "ap-article__body"}
                       (d/p "Centered on the most basic unit—the " (d/strong "block, or brick")
                            "—which has been continuously used for building for over eleven millennia, Zadikian’s simplified plaster casts are elemental and foundational: a humble aesthetics where form, beauty, and meaning emerge through the assembly and fluid recombination of humanity’s most common architectural building element. Evolving from the block that has remained consistent in his practice for over half a century, these new composite forms extend the human scale, infused with pigments across a broad chromatic spectrum, and—most importantly—remain "
                            (d/em "free of one another and moveable") ".")
                       (d/p "Here, the studio encourages experimentation: variances within the basic units that generate unexpected amalgamations—multiple distinct forms resolving into a unified whole. Minimal and maximal, the one and the many, the this and the that—the primary objects become at once "
                            (d/strong "singular and interdependent") ".")
                       (d/p (d/em "The Studio") ", for Zadikian, is " (d/strong "workroom, factory, and laboratory")
                            " at once: a locus of constant production, invention, and reinvention. It is a place of infinite possibility, where art is not only what is made, but the study of its creation—and what we make of it. Amid Ruskin’s "
                            (d/em "Stones of Venice")
                            ", within the seduction of sensations that bewitch the soul, Zadikian’s open studio reminds us that art can also be about "
                            (d/strong "material presence and process") "."))
                (d/blockquote {:class "ap-quote ap-wide !my-4"}
                              (d/p "Seeing and studying art in the making.")
                              (d/cite "Tony Shafrazi, curator"))
                (d/div {:class "ap-article__body"}
                       (d/p "Meaning does not arrive solely through explanation, but through the object’s coming-into-being as witnessed over time. The unit does not arrive as image, symbol, or representation. It exists as a tangible fact—built through internal necessities of "
                            (d/strong "measure, form, weight, and placement")
                            ". Here, sculpture is distilled to its organic essence—not to empty it of meaning, but to fully accord it its "
                            (d/em "epistemic and haptic") " qualities.")
                       (d/p "This is why the studio itself matters—why it is foregrounded, front and center. The act of making is not staged, but neither is it hidden. The object’s formation is not only shown as finished; it is witnessed in its making. As the pavilion’s curator, "
                            (d/strong "Tony Shafrazi") ", has described it, the studio offers the experience of "
                            (d/em "“seeing and studying art in the making.”")
                            " The work is not fixed in certainty or frozen in stasis; it is the continuous navigation of possibility—the sum of decisions made across the life of a studio practice.")))))
