(ns amp.pages.artist.biography
  "Expandable biography section — preview paragraph + full bio on expand."
  (:require
   [amp.ui.expandable-text :refer [expandable-text-area-light]]
   [amp.ui.written-by :refer [written-by]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

;; ── Preview (visible before expand) ────────────────────────────────────────

(defnc preview
  []
  (d/div {:class "px-4"}
         ($ written-by {:author "Carlo McCormick" :class "mb-6"})

         (d/p {:class (s/cx s/body-lg "mb-6")}
              (d/span {:class s/em-strong} "Zadik Zadikian")
              " (b. 1948, Erevan, Soviet Armenia) has spent over five decades creating works "
              "that challenge both the materials and ideologies of contemporary art. A daring "
              "escape from the Soviet Union in his youth marked the beginning of an extraordinary "
              "journey, from his training under "
              (d/span {:class s/em-strong} "Benjamino Bufano")
              " to his longstanding friendship with "
              (d/span {:class s/em-strong} "Richard Serra")
              ".")))

;; ── Full text (visible after expand) ───────────────────────────────────────

(defnc details
  []
  (d/div {:class "px-4"}
         ($ written-by {:author "Carlo McCormick" :class "mb-6"})

         ;; Lead paragraph — duplicated so the expanded view feels complete
         (d/p {:class (s/cx s/body-lg "mb-6")}
              (d/span {:class s/em-strong} "Zadik Zadikian")
              " (b. 1948, Erevan, Soviet Armenia) has spent over five decades creating works "
              "that challenge both the materials and ideologies of contemporary art. A daring "
              "escape from the Soviet Union in his youth marked the beginning of an extraordinary "
              "journey, from his training under "
              (d/span {:class s/em-strong} "Benjamino Bufano")
              " to his longstanding friendship with "
              (d/span {:class s/em-strong} "Richard Serra")
              ".")

         ;; TODO: Replace stub paragraphs with final biography text
         (d/p {:class (s/cx s/body-base "mb-6")}
              "Born in Erevan during the late Soviet period, Zadikian grew up amid the tension "
              "between the rich cultural heritage of Armenia and the rigid constraints of the "
              "Soviet system. From an early age he was drawn to material and form\u2014carving, "
              "assembling, and building with whatever was at hand. This instinct for making "
              "would define his entire career.")

         (d/p {:class (s/cx s/body-base "mb-6")}
              "After arriving in the United States, Zadikian studied under "
              (d/span {:class s/em-strong} "Benjamino Bufano")
              " in San Francisco, absorbing the elder sculptor\u2019s commitment to monumental "
              "public art and the conviction that sculpture should occupy and transform shared space. "
              "These formative years instilled a deep respect for craft, scale, and the social "
              "responsibility of the artist.")

         (d/p {:class (s/cx s/body-base "mb-6")}
              "Zadikian\u2019s exploration of gilded forms has established him as one of the leading "
              "sculptors in the realm of contemporary alchemy. His pieces, often crafted from "
              (d/span {:class s/em-strong} "gold leaf")
              ", suggest a transcendence of time and place, pushing boundaries while creating "
              "worlds that seem to belong to another realm entirely.")

         (d/p {:class (s/cx s/body-base "mb-6")}
              "Centered on the most basic unit\u2014the "
              (d/span {:class s/em-strong} "block, or brick")
              "\u2014which has been continuously used for building for over eleven millennia, "
              "Zadikian\u2019s simplified plaster casts are elemental and foundational: a humble "
              "aesthetics where form, beauty, and meaning emerge through the assembly and fluid "
              "recombination of humanity\u2019s most common architectural building element.")

         (d/p {:class (s/cx s/body-base "mb-6")}
              "His friendship with "
              (d/span {:class s/em-strong} "Richard Serra")
              " has been a touchstone throughout his practice\u2014not as influence in a stylistic "
              "sense, but as a shared conviction that sculpture\u2019s power resides in the encounter "
              "between material, space, and the viewer\u2019s body. Both artists insist that the "
              "experience of the work cannot be reduced to a photograph; it must be walked "
              "through, stood beside, and felt.")

         (d/p {:class (s/cx s/body-base)}
              "Over five decades, Zadikian has built a body of work that is at once minimal "
              "and maximal\u2014pared to the elemental unit yet expansive in its combinatorial "
              "possibilities. Each block is singular; together they form structures that echo "
              "the layered histories of the civilizations that invented them.")))

;; ── Public component ──────────────────────────────────────────────────────

(defnc biography-section
  [{:keys [id]}]
  (d/div {:id id}
         ($ expandable-text-area-light
            {:section-hint  "biography"
             :title         "The Artist"
             :expand-button-label "Read full biography"
             :preview-text  preview
             :full-text     details})))
