(ns amp.components.sections.press-release
  (:require
   [amp.components.elements.expandable-text-area :refer [expandable-text-area-2]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc preview
  [{:keys []}]
  (d/div {:class "px-4"}
         (d/p {:class " text-xl"}
              (d/span {:class "italic"} "Yerevan / Los Angeles / Venice — ")
              "The Ministry of Culture of the Republic of Armenia has selected "
              (d/span {:class "font-semibold"} "Zadik Zadikian")
              " to represent Armenia at the "
              (d/span {:class "font-semibold"} "61st Venice Biennale Arte")
              " in 2026. Led by legendary art dealer "
              (d/span {:class "font-semibold"} "Tony Shafrazi")
              " as Chief Curator, the Pavilion aligns with Armenia's broader commitment to elevating its cultural presence on the international stage...")))

(defnc details
  [{:keys []}]
  (d/div {:class "px-4"}
         (d/p {:class " text-xl mb-6"}
              (d/span {:class "italic"} "Yerevan / Los Angeles / Venice — ")
              "The Ministry of Culture of the Republic of Armenia has selected "
              (d/span {:class "font-semibold"} "Zadik Zadikian")
              " to represent Armenia at the "
              (d/span {:class "font-semibold"} "61st Venice Biennale Arte")
              " in 2026. Led by legendary art dealer "
              (d/span {:class "font-semibold"} "Tony Shafrazi")
              " as Chief Curator, the Pavilion aligns with Armenia's broader commitment to elevating its cultural presence on the international stage.")

         ;; Context / history
         (d/p {:class "mb-6"}
              "This collaboration marks a historic and deeply resonant moment in both Zadikian's and Shafrazi's lives and careers: a symbolic return to Armenia and a shared mission to present a world-class national Pavilion to a global audience.")

         (d/p {:class "mb-6"}
              "Zadikian—who left Soviet Armenia at nineteen and experienced a radical cultural rupture upon arriving in the United States—came of age artistically through an uncommon trajectory. From San Francisco during the height of the countercultural moment, working with "
              (d/span {:class "italic"} "Benjamin Bufano")
              ", to New York, where he assisted "
              (d/span {:class "italic"} "Richard Serra")
              " on monumental oil-stick wall drawings—one of which Serra titled "
              (d/span {:class "italic"} "Zadikian")
              "—the artist now returns with a project of uncommon ambition and conceptual rigor.")

         ;; Project description
         (d/p {:class "mb-6"}
              (d/span {:class "font-bold text-pink-400"} "THE STUDIO ")
              "transforms the Armenian Pavilion into an active site of sustained, concentrated making. Throughout the Biennale, Zadikian and his team will fabricate primordial plaster units on site—ranging from palm-sized objects to human-scale forms—each one a three-dimensional articulation of distilled color, ratio, and reflectivity.")

         ;; Quote
         (d/p {:class "mb-6 italic"}
              "\"We're creating material that transforms by its very nature into sculpture—material with a clarity of line and reflection so immediate that the eye can fly across it,\" says Zadikian.")

         ;; Shafrazi quote
         (d/p {:class "mb-6 italic"}
              "For Shafrazi, the work's insistence on touch is central: \" It's haptic. Do you know how important that is? That's what makes it. \"")

         ;; Sensory emphasis
         (d/p {:class "mb-6"}
              "The Pavilion privileges a form of seeing grounded in the body—through weight, temperature, balance, and texture—rather than spectacle or narrative. Units will be cast, stacked, dismantled, and restacked throughout the exhibition, remaining in constant motion.")

         ;; Curatorial alignment
         (d/p {:class "mb-6"}
              "By presenting the studio in its raw, working state—without performance or theatrical staging—"
              (d/span {:class "font-bold text-pink-400"} "THE STUDIO ")
              "aligns closely with the Biennale's curatorial framework, "
              (d/span {:class "italic"} "In Minor Keys")
              ". The work responds not with commentary or illustration, but with material intelligence, meditative clarity, and poetic restraint—tuning visitors to the lower frequencies: the modest, the elemental, the sanctuary.")

         ;; Practice shift
         (d/p {:class "mb-6"}
              "The project marks an inner shift for Zadikian, turning away from the bombast of gold toward a quieter thread that has long run through his practice: plaster and pigment. The work foregrounds the rigor, repetition, and material intelligence that have underpinned his oeuvre for decades.")

         ;; Closing
         (d/p {}
              "In a cultural moment dominated by speed, novelty, and distraction, "
              (d/span {:class "font-bold text-pink-400"} "THE STUDIO ")
              "turns toward repetition, exactitude, and touch. Drawing on childhood experiences working with Armenian tuff stone and a lifelong intimacy with plaster, Zadikian produces units that appear plain at first glance, yet reveal unexpected depth through surface, edge, and volume. Together, they form a precise yet open-ended vocabulary—a language of blocks, strata, and intervals that underwrites a larger meditation on resilience, renewal, and the rediscovery of origins.")

         (d/p {:class "mt-8"}
              (d/span {:class "text-2xl italic"} "- Nov 15th, 2025 "))))

(defnc footer
  [{:keys []}]
  (d/div {:class "p-4 italic text-lg text-slate-100"}
         (d/span {:class "block mt-6"}
                 "*Note: As Armenia does not maintain a permanent national pavilion in Venice, the Pavilion must be realized through a rented venue—a standard and widely accepted model for many non-permanent participating nations.")

         (d/div {:class "mt-6"}
                (d/span {:class "text-slate-300"}
                        "The selected site operates at a base rental cost of approximately ")

                (d/span {:class "font-semibold text-white"} "$195,000")

                (d/span {:class ""}
                        ", representing a strategic and responsible choice when compared to venues in the Giardini or Arsenale, "
                        "where base rents—when space is available at all—typically begin at ")

                (d/span {:class "font-semibold text-white"} "$450,000")

                (d/span {:class "text-slate-300"}
                        ", excluding construction, staffing, and operational expenses. "))

         ;; Fundraising committee
         (d/span {:class "block mt-6"}
                 "To support the scale and international significance of this undertaking, "
                 "a dedicated fundraising committee has been formed to guide and advance the project’s philanthropic efforts. ")

         (d/div {:class "mt-6"}
                (d/span {:class "mt-4 text-slate-200"}
                        "The committee is led by ")

                (d/span {:class "font-medium text-white"}
                        "Archbishop Hovnan Derderian, Tony Shafrazi, Rafi Ourfalian, Khachik Khudikyan, "
                        "Andranik Torosyan, Aram Alajajian, and Vik Hovsepian.")

                (d/span {:class "text-slate-300"}
                        ", ensuring the Pavilion’s successful realization through coordinated leadership, stewardship, and long-term commitment. "))))

(defnc press-release
  [{:keys [id subtitle title]}]
  (d/div {:id id}
         ($ expandable-text-area-2 {:section-hint subtitle
                                    :title title
                                    :expand-button-label "Read full release"
                                    :preview-text preview
                                    :full-text details
                                    :footer-text footer})))