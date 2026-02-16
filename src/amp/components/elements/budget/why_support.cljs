(ns amp.components.elements.budget.why-support
  (:require
   [amp.components.elements.expandable-text-area :refer [expandable-text-area-2]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(defnc preview
  [{:keys []}]
  (d/div {:class "text-xl text-slate-100 p-4"}
         (d/span {}
                 "To stand on the Biennale's global stage is not \"participation\" in an art event—it is ")
         (d/span {:class "font-semibold text-pink-300"} "presence in the world's most influential cultural forum")
         (d/span {:class "text-slate-300"}
                 ", where nations are read, remembered, and measured in real time. ")
         (d/span {}
                 "For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a ")
         (d/span {:class "font-semibold italic text-slate-100"} "living intelligence")
         (d/span {:class "text-slate-300"}
                 "—capable of producing contemporary vision at the highest level. ")))

(defnc details
  [{:keys []}]
  (d/div {:class "text-xl text-slate-100 p-4"}
         ;; Opening paragraph
         (d/span {}
                 "To stand on the Biennale's global stage is not \"participation\" in an art event—it is ")
         (d/span {:class "font-semibold text-pink-300"} "presence in the world's most influential cultural forum")
         (d/span {:class "text-slate-300"}
                 ", where nations are read, remembered, and measured in real time. ")
         (d/span {}
                 "For the Republic of Armenia, a Pavilion is a sovereign act of cultural visibility: it declares that Armenia is not only a history to be mourned or a headline to be managed, but a ")
         (d/span {:class "font-semibold italic text-slate-100"} "living intelligence")
         (d/span {:class "text-slate-300"}
                 "—capable of producing contemporary vision at the highest level. ")
         (d/span {:class "text-slate-300"}
                 "This is how nations earn stature without asking permission: by contributing meaning, not pleading for sympathy. In Venice, Armenia enters the shared conversation that curators, museums, collectors, journalists, and governments track—and what is seen there echoes for years in exhibitions, acquisitions, education, tourism, diplomacy, and philanthropic interest.")

         ;; What presence elevates
         (d/div {:class "mt-8 mb-4"}
                (d/span {:class "font-semibold text-pink-300 text-lg"}
                        "This is why being present matters—and what it elevates:"))

         (d/ul {:class "space-y-4 ml-4 text-slate-300"}
               (d/li {:class ""}
                     (d/span {:class "font-semibold text-slate-100"} "National dignity, made public: ")
                     "Armenia is framed through excellence, discipline, and contemporary creativity—not solely through tragedy or geopolitics.")
               (d/li {:class ""}
                     (d/span {:class "font-semibold text-slate-100"} "Soft power that compounds: ")
                     "Cultural visibility becomes long-term credibility—opening doors that money or lobbying cannot.")
               (d/li {:class ""}
                     (d/span {:class "font-semibold text-slate-100"} "Narrative control: ")
                     "If Armenia does not author its own image, others will—and they will simplify it.")
               (d/li {:class ""}
                     (d/span {:class "font-semibold text-slate-100"} "A platform for future generations: ")
                     "A serious national presence signals to Armenian artists, students, and institutions that the world stage is not \"for others.\"")
               (d/li {:class ""}
                     (d/span {:class "font-semibold text-slate-100"} "Diaspora cohesion: ")
                     "A Pavilion becomes a shared achievement—an anchor event that unifies donors, families, and communities around something constructive and proud.")
               (d/li {:class ""}
                     (d/span {:class "font-semibold text-slate-100"} "Institutional consequences: ")
                     "Serious participation invites museum partnerships, residencies, publications, acquisitions, and recurring invitations—real infrastructure, not a momentary spotlight."))

         ;; Opportunity cost paragraph
         (d/div {:class "block mt-8"}
                (d/span {:class "font-semibold text-pink-300"} "The opportunity cost of not partaking is brutal and silent: ")
                (d/span {:class "font-semibold italic text-slate-100"} "invisibility")
                (d/span {:class "text-slate-300"}
                        ". The world does not pause because a nation is under-resourced; it simply moves on, and the absence becomes a habit. In a cultural ecosystem, absence reads as incapacity. It reinforces the unfair but persistent idea that Armenia is peripheral—always reacting, never defining. "))

         (d/span {:class "block mt-6 text-slate-300"}
                 "That is the long-term gap: Armenia is not always \"where it should be\" because it has too often been forced into survival mode—outspent, out-networked, and underrepresented in the institutions that shape global memory. ")

         (d/span {:class "block mt-6 text-slate-300"}
                 "A donor is not \"buying\" a sculpture or an event; they are buying ")
         (d/span {:class "font-semibold text-pink-300"} "representation with consequences")
         (d/span {:class "text-slate-300"}
                 ": an enduring record that Armenia showed up with seriousness, ambition, and world-class execution. The legacy is reputational and generational: a Pavilion that becomes a reference point—documented, published, archived, collected, cited—and a model that makes the next Armenian presence easier, stronger, and inevitable.")

         ;; Closing — cultural battle
         (d/span {:class "block mt-8"}
                 "And yes: ")
         (d/span {:class "font-semibold italic text-slate-100"}
                 "the cultural battle must be won")
         (d/span {:class "text-slate-300"}
                 "—not with aggression, but with clarity, consistency, and excellence. Culture is where nations become undeniable. It is where influence is built without violence; where history is not only remembered, but translated into future power. ")

         (d/span {:class "block mt-6 font-mono italic text-lg text-slate-100"}
                 "Supporting this Pavilion is patriotism in its most practical form: it is an investment in Armenia's standing, Armenia's narrative, and Armenia's right to be seen at full scale—on equal terms—where the world is watching.")))

(defnc why-support
  [{:keys [id subtitle title]}]
  (d/div {:id id}
         ($ expandable-text-area-2 {:idx 9
                                    :section-hint subtitle
                                    :title title
                                    :expand-button-label "Read more"
                                    :preview-text preview
                                    :full-text details})))
