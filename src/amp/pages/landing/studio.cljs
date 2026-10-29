(ns amp.pages.landing.studio
  (:require
   [amp.ui.expandable-text :refer [expandable-text-area-2]]
   [amp.ui.written-by :refer [written-by]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc preview
  [{:keys []}]
  (d/div {:class "px-4"}
         ($ written-by {:author "Carlo McCormick" :class "mb-6"})
         (d/p {:class (s/cx s/body-base "mb-6")}
              "Over the entire six-month duration of the Biennale, the "
              (d/span {:class s/em-strong} "Armenia Pavilion")
              " will operate as "
              (d/span {:class s/em-italic} "The Studio")
              ", a functioning atelier where the artist "
              (d/span {:class s/em-strong} "Zadik Zadikian")
              ", with his son Aram and assistants, will be engaged in the process and the study of making things. "
              "Located in the "
              (d/span {:class s/em-strong} "Arsenale Militare")
              ", a vast complex of shipyards and armories that for over 900 years was the heart of Venetian naval power, "
              "the studio becomes a neutral site where things are studied, formed, cast, assembled, and made through "
              (d/span {:class s/em-strong} "precision, repetition, calibration, attentive labor, and careful consideration")
              ". Using the art and language of craft—long a part of the culture of Armenia, of Venice, and of human experience everywhere—"
              "Zadikian actualizes the studio as a workshop of the handmade, the contemplative, and the constantly developing sculpture.")))

(defnc details
  [{:keys []}]
  (d/div
   (d/div {:class "px-4"}
          ($ written-by {:author "Carlo McCormick" :class "mb-6"})

          (d/p {:class (s/cx s/body-base "mb-6")}
               "Over the entire six-month duration of the Biennale, the "
               (d/span {:class s/em-strong} "Armenia Pavilion")
               " will operate as "
               (d/span {:class s/em-italic} "The Studio")
               ", a functioning atelier where the artist "
               (d/span {:class s/em-strong} "Zadik Zadikian")
               ", with his son Aram and assistants, will be engaged in the process and the study of making things. "
               "Located in the "
               (d/span {:class s/em-strong} "Arsenale Militare")
               ", a vast complex of shipyards and armories that for over 900 years was the heart of Venetian naval power, "
               "the studio becomes a neutral site where things are studied, formed, cast, assembled, and made through "
               (d/span {:class s/em-strong} "precision, repetition, calibration, attentive labor, and careful consideration")
               ". Using the art and language of craft—long a part of the culture of Armenia, of Venice, and of human experience everywhere—"
               "Zadikian actualizes the studio as a workshop of the handmade, the contemplative, and the constantly developing sculpture.")

          (d/p
           {:class (s/cx s/body-base "mb-6")}
           "Centered on the most basic unit—the "
           (d/span {:class s/em-strong} "block, or brick")
           "—which has been continuously used for building for over eleven millennia, "
           "Zadikian's simplified plaster casts are elemental and foundational: a humble aesthetics where form, beauty, and meaning emerge through "
           "the assembly and fluid recombination of humanity's most common architectural building element. "
           "Evolving from the block that has remained consistent in his practice for over half a century, "
           "these new composite forms extend the human scale, infused with pigments across a broad chromatic spectrum, "
           "and—most importantly—remain "
           (d/span {:class s/em-italic} "free of one another and moveable")
           ".")

          (d/p
           {:class (s/cx s/body-base "mb-6")}
           "Here, the studio encourages experimentation: variances within the basic units that generate unexpected amalgamations—"
           "multiple distinct forms resolving into a unified whole. "
           "Minimal and maximal, the one and the many, the this and the that—"
           "the primary objects become at once "
           (d/span {:class s/em-strong} "singular and interdependent")
           ".")

          (d/p
           {:class (s/cx s/body-base "mb-6")}
           (d/span {:class s/em-italic} "The Studio")
           ", for Zadikian, is "
           (d/span {:class s/em-strong} "workroom, factory, and laboratory")
           " at once: a locus of constant production, invention, and reinvention. "
           "It is a place of infinite possibility, where art is not only what is made, but the study of its creation—and what we make of it. "
           "Amid Ruskin's "
           (d/span {:class s/em-italic} "Stones of Venice")
           ", within the seduction of sensations that bewitch the soul, "
           "Zadikian's open studio reminds us that art can also be about "
           (d/span {:class s/em-strong} "material presence and process")
           ".")

          (d/p
           {:class (s/cx s/body-base "mb-6")}
           "Meaning does not arrive solely through explanation, but through the object's coming-into-being as witnessed over time. "
           "The unit does not arrive as image, symbol, or representation. "
           "It exists as a tangible fact—built through internal necessities of "
           (d/span {:class s/em-strong} "measure, form, weight, and placement")
           ". "
           "Here, sculpture is distilled to its organic essence—not to empty it of meaning, but to fully accord it its "
           (d/span {:class s/em-italic} "epistemic and haptic")
           " qualities.")

          (d/p
           {:class (s/cx s/body-base "mb-6")}
           "This is why the studio itself matters—why it is foregrounded, front and center. "
           "The act of making is not staged, but neither is it hidden. "
           "The object's formation is not only shown as finished; it is witnessed in its making. "
           "As the pavilion's curator, "
           (d/span {:class s/em-strong} "Tony Shafrazi")
           ", has described it, the studio offers the experience of "
           (d/span {:class s/em-italic} "\u201Cseeing and studying art in the making.\u201D")
           " "
           "The work is not fixed in certainty or frozen in stasis; "
           "it is the continuous navigation of possibility—the sum of decisions made across the life of a studio practice."))))

(defnc about-studio
  [{:keys [id idx subtitle title]}]
  (d/div {:id id}
         ($ expandable-text-area-2 {:idx idx
                                    :section-hint subtitle
                                    :title title
                                    :expand-button-label "Read more"
                                    :preview-text preview
                                    :full-text details})))
