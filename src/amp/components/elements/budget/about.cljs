(ns amp.components.elements.budget.about
  (:require
   [amp.components.elements.captioned-image :refer [captioned-image]]
   [amp.components.elements.expandable-text-area :refer [expandable-text-area-2]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc preview
  [{:keys []}]
  (d/div {:class "space-y-4 px-4"}
         (d/p {:class "text-xl"}
              (d/span {:class "font-bold text-pink-400"} "THE STUDIO")
              " is a sustained site of making: a working studio made visible, in full daylight, without theatrics. "
              "Over the duration of the Biennale, the Armenian Pavilion operates as a neutral armature where objects come into being through repetition, calibration, and quiet labor—"
              (d/span {:class "italic"} "work encountered as work, not as image or performance.")
              " Centered on the most basic unit—the "
              (d/span {:class "font-semibold"} "block, the brick")
              "—the project accepts a "
              (d/span {:class "font-semibold"} "Kantian limit")
              ": that the thing can never be fully known or resolved. "
              (d/span {:class "font-semibold"} "What is offered instead is presence.")
              " Meaning does not arrive through explanation, but through the object’s coming-into-being, witnessed over time, as "
              (d/span {:class "text-white/90"} "material, measure, and hand")
              " are tested again and again in pursuit of "
              (d/span {:class "italic text-white/90"} "coherence that can never be complete."))))

(defnc details
  [{:keys []}]
  (d/div
   (d/div {:class "px-4 space-y-4"}
          (d/p {:class "text-xl text-slate-100"}
               (d/span {:class "font-bold text-pink-400"} "THE STUDIO")
               " is a sustained site of making: a working studio made visible, in full daylight, without theatrics. "
               "Over the duration of the Biennale, the Armenian Pavilion operates as a neutral armature where objects come into being through repetition, calibration, and quiet labor—"
               (d/span {:class "italic"} "work encountered as work, not as image or performance.")
               " Centered on the most basic unit—the "
               (d/span {:class "font-semibold"} "block, the brick")
               "—the project accepts a "
               (d/span {:class "font-semibold"} "Kantian limit")
               ": that the thing can never be fully known or resolved. "
               (d/span {:class "font-semibold"} "What is offered instead is presence.")
               " Meaning does not arrive through explanation, but through the object’s coming-into-being, witnessed over time, as "
               (d/span {:class "text-white/90"} "material, measure, and hand")
               " are tested again and again in pursuit of "
               (d/span {:class "italic text-white/90"} "coherence that can never be complete."))
          (d/p
           {}
           "That pursuit begins with a simple form: "
           (d/span {:class "font-medium text-slate-100"} "the unit, the block, the brick")
           "—perhaps the most basic object of the modern world. Foundational, common, and easily overlooked, this reduction is intentional. "
           "The work begins by coming to terms with a "
           (d/span {:class "italic"} "Kantian")
           " limit: that we will never encounter the thing as it is in itself. "
           "For "
           (d/span {:class "italic"} "Immanuel Kant")
           ", the object always exceeds our grasp; it cannot be fully refined, fully labeled, or fully known. "
           "Here, the brick insists on that paradox: the more it is simplified, the more resistant it becomes to interpretation.")

          (d/p
           {}
           "The unit does not arrive as image or symbol. It arrives as a fact—built through internal necessity: "
           (d/span {:class "font-medium"} "measure, form, weigh, edge, join")
           ". Sculpture is reduced to its most primitive condition, not to empty it of meaning, but to expose the conditions under which meaning fails. "
           "Like a coin worn smooth through use, the block does not tell us what it is; it asks whether we can tolerate its refusal to resolve.")

          (d/p
           {}
           "This is why the studio itself matters. The act of making is not staged, but neither is it hidden. "
           "The object’s existence is not only shown; it is witnessed. "
           "As "
           (d/span {:class "font-semibold text-slate-100"} "Tony Shafrazi")
           " has described it, the pavilion offers the experience of being "
           (d/span {:class "italic"} "“like a fly on the wall,”")
           " of "
           (d/span {:class "italic"} "“seeing and studying art in the making.”")
           " "
           "This is not a performance claim. It is an epistemic one: understanding shifts because the object’s coming-into-being is present. "
           "The work is not explained. It is verified through test, trial, correction, and return.")

          (d/p
           {}
           "The process is exacting by design. A famously unstable material—"
           (d/span {:class "font-medium"} "plaster")
           "—is subjected to an uncompromising aim toward precision. "
           "Units are cast on flat glass, refined, sanded, calibrated. "
           "When blocks meet, they strive to read as one—so continuous that the hand passing over them cannot locate the seam. "
           "This is not fetish precision. It is a philosophical position made physical: an attempt to bring coherence to something that resists it.")

          (d/p
           {}
           "The studio does not conceal the truth that this aim can never be fully achieved. "
           "Plaster shifts. Humidity intervenes. The hand decides. "
           "Precision here is not purity; it is pursuit. "
           "And it is the pursuit that transforms the object: something crosses a threshold when the artist returns again and again—measuring, flattening, correcting—"
           "not to perfect the unit, but to test whether it can hold together. "
           "In this striving, the block becomes something more than material. "
           "It becomes an instance of existence asserting itself without interpretation.")

          (d/p
           {}
           "This is the moment where Kant becomes tangible. Meaning does not arise from narrative or representation, but from the object’s right to exist as itself—unexhausted by what it appears to be. "
           "Making, in this sense, becomes a way of instantiating a universe—not metaphorically, but materially. "
           "A world is established the moment the unit becomes consistent with itself and consistent with the other units around it. "
           "As Shafrazi has observed, the transformation occurs after something is completed, understood, and then revisited—again and again. "
           "It is in this loop, not in expression or excess, that force accumulates.")

          (d/p
           {}
           "Within the curatorial horizon of "
           (d/span {:class "italic font-medium"} "In Minor Keys")
           ", articulated by "
           (d/span {:class "font-medium"} "Koyo Kouoh")
           ", "
           (d/span {:class "font-bold text-pink-400"} "THE STUDIO ")
           "operates at a lower frequency. It refuses amplification. It refuses declaration. "
           "It offers instead an island of sustained attention—where the dignity of the object is safeguarded by the conditions of its making: "
           (d/span {:class "font-medium"} "slow, exacting, ongoing")
           ". "
           "The encounter is redirected away from the habitual question, "
           (d/span {:class "italic"} "What does it represent?")
           ", toward a more difficult one:")

          ;; Closing question / callout
          (d/div
           {:class "
                              mt-10
                              rounded-2xl
                              border
                              border-pink-500/20
                              bg-slate-900/40
                              p-6
                              md:p-8"}
           (d/p
            {:class "
                               text-2xl
                               md:text-3xl
                               leading-snug
                               text-slate-100"}
            "What does it mean for something to exist—"
            (d/span {:class "font-semibold"} "plainly")
            ", "
            (d/span {:class "font-semibold"} "rigorously")
            ", in front of you—without becoming an announcement?")))))

(defnc about
  [{:keys [id subtitle title]}]
  (d/div {:id id}
         ($ expandable-text-area-2 {:section-hint subtitle
                                    :title title
                                    :expand-button-label "Read more"
                                    :preview-text preview
                                    :full-text details})
         (d/div {:class "space-y-4 mt-6"}
                ($ captioned-image
                   {:img-src "https://atd-722658831.imgix.net/simple_blocks/FileName_001Beauty_ViewLayer_099-3.tif"
                    :caption "BLUE YELLOW BLUE YELLOW"
                    :credit "© Zadik Zadikian 2026"})

                ($ captioned-image
                   {:img-src "https://atd-722658831.imgix.net/red_blue_black_w_person/red_blue_black_w_person.tif"
                    :caption "RED BLUE BLACK"
                    :credit "© Zadik Zadikian 2026"})

                ($ captioned-image
                   {:img-src "https://atd-722658831.imgix.net/red_config_4/top_down_0000.tif"
                    :caption "RED BLUE BLACK"
                    :credit "© Zadik Zadikian 2026"})

                ($ captioned-image
                   {:img-src "https://atd-722658831.imgix.net/artwork/blue_unit_with_hand.tif"}))))