(ns amp.components.sections.budget-section
  (:require [amp.components.sections.quote-section :refer [quote-section]]
            [amp.components.section :refer [section]]
            [amp.hooks.use-scroll-trigger :refer [use-scroll-trigger]]
            ["@heroicons/react/24/outline" :as icons]
            [amp.components.ui.main-button :refer [main-button]]
            [amp.views.hero-image-view :refer [hero-image-view]]
            [amp.hooks.use-media-query :refer [use-media-breakpoint use-touch-enabled]]
            [amp.components.elements.video-background :refer [video-background]]
            [amp.components.sections.contact-section :refer [contact-section]]
            [amp.components.elements.lazy-image :refer [lazy-image]]
            [amp.components.elements.budget-table :refer [budget-table]]
            [amp.components.elements.captioned-image :refer [captioned-image]]
            [amp.lib.defnc :refer [defnc]]
            [helix.core :refer [$]]
            [helix.dom :as d]
            [helix.hooks :as hooks]))

(def cost-data
  [{:title "Venue Ops"
    :details [{:title "Venue rent" :amount 130000}
              {:title "Staffing" :amount 75000}
              {:title "Utilities" :amount 0}
              {:title "Permits & insurance" :amount 16000}
              {:title "Construction" :amount 17000}
              {:title "Lighting" :amount 7500}
              {:title "Taxes & VAT" :amount 53900}
              {:title "Contingency" :amount 30040}]}

   {:title "Administration"
    :details [{:title "Curators & artists" :amount 60000}
              {:title "Admin support" :amount 32500}
              {:title "Engineering" :amount 4500}
              {:title "Legal & accounting" :amount 15000}
              {:title "Bookkeeping & HR" :amount 6800}
              {:title "Software tools" :amount 900}
              {:title "Travel & lodging" :amount 44000}
              {:title "Proposal travel" :amount 16000}
              {:title "Contingency" :amount 16720}]}

   {:title "Production"
    :details [{:title "Foam core" :amount 17500}
              {:title "Pigments" :amount 12500}
              {:title "Plaster" :amount 3750}
              {:title "Gold leaf" :amount 35000}
              {:title "Gold sizing" :amount 3530}
              {:title "Glass" :amount 3000}
              {:title "Studio rent" :amount 15360}
              {:title "Utilities & ins." :amount 7200}
              {:title "Gilders" :amount 33600}
              {:title "Casters" :amount 72000}
              {:title "Assistants" :amount 24000}
              {:title "Crates" :amount 15000}
              {:title "Supplies" :amount 10000}
              {:title "Packing labor" :amount 6000}
              {:title "Shipping LA–Venice" :amount 30000}
              {:title "Shipping Venice–LA" :amount 30000}
              {:title "Insurance" :amount 12000}
              {:title "Install crew" :amount 16200}
              {:title "Contingency" :amount 34914}]}

   {:title "Logistics"
    :details [{:title "Port handling" :amount 2500}
              {:title "Barge transport" :amount 6000}
              {:title "Local trucking" :amount 2400}
              {:title "Forklift & crew" :amount 1800}
              {:title "Short storage" :amount 1200}
              {:title "Crate storage" :amount 2000}
              {:title "Waste removal" :amount 1000}
              {:title "Reverse logistics" :amount 6700}
              {:title "Contingency" :amount 2240}]}

   {:title "Opening Week"
    :details [{:title "Catering food" :amount 7000}
              {:title "Catering drinks" :amount 2250}
              {:title "Event staff" :amount 2500}
              {:title "Coordinator" :amount 3000}
              {:title "Security" :amount 1200}
              {:title "Rentals" :amount 2500}
              {:title "A/V & tech" :amount 1500}
              {:title "Event media" :amount 2500}
              {:title "Invitations" :amount 1000}
              {:title "VIP staff" :amount 5500}
              {:title "Protocol support" :amount 1000}
              {:title "Press materials" :amount 900}
              {:title "Interpreter" :amount 700}
              {:title "Water taxis" :amount 960}
              {:title "Public talks" :amount 1200}
              {:title "Accessibility" :amount 250}
              {:title "Signage" :amount 300}
              {:title "Contingency" :amount 3606}]}

   {:title "Studio Ops"
    :details [{:title "Part-time staff" :amount 18000}
              {:title "Full-time staff" :amount 30000}
              {:title "Temp staff" :amount 25000}
              {:title "Materials" :amount 5000}
              {:title "Expendables" :amount 7000}
              {:title "Equipment" :amount 7500}
              {:title "Lodging & per diem" :amount 40000}
              {:title "Waste" :amount 1400}
              {:title "Contingency" :amount 13390}]}

   {:title "Marketing"
    :details [{:title "Visual identity" :amount 12500}
              {:title "Press kit" :amount 7500}
              {:title "Website" :amount 12000}
              {:title "OOH design" :amount 3500}
              {:title "Exhibition graphics" :amount 5000}
              {:title "Copywriting" :amount 1500}
              {:title "PR writing" :amount 3500}
              {:title "OOH placement" :amount 8400}
              {:title "Posters" :amount 8000}
              {:title "Social ads" :amount 5000}
              {:title "Campaign mgmt" :amount 5000}
              {:title "Digital ads" :amount 7500}
              {:title "Print ads" :amount 10000}
              {:title "PR pre-opening" :amount 10000}
              {:title "PR ongoing" :amount 10000}
              {:title "Marketing fee" :amount 7500}
              {:title "Contingency" :amount 11690}]}

   {:title "Publication"
    :details [{:title "Curatorial essay" :amount 2500}
              {:title "Commissioned essays" :amount 8000}
              {:title "Artist texts" :amount 1500}
              {:title "Wall texts" :amount 1500}
              {:title "Catalogue design" :amount 10000}
              {:title "Editing & layout" :amount 7500}
              {:title "Catalogue print" :amount 24000}
              {:title "Tote design" :amount 3500}
              {:title "Tote printing" :amount 4500}
              {:title "Stationery design" :amount 2500}
              {:title "Stationery print" :amount 1500}
              {:title "Misc & proofs" :amount 1750}
              {:title "Contingency" :amount 6875}]}

   {:title "Documentation"
    :details [{:title "Camera rental" :amount 10000}
              {:title "Film crew" :amount 24900}
              {:title "Sound recording" :amount 2800}
              {:title "Install photos" :amount 1750}
              {:title "Final photos" :amount 1800}
              {:title "Event photos" :amount 1400}
              {:title "Film editing" :amount 5400}
              {:title "Sound mix" :amount 1600}
              {:title "Social clips" :amount 6000}
              {:title "Archiving" :amount 750}
              {:title "Contingency" :amount 5640}]}])

(defnc cost-breakdown
  []
  (d/div
   {:class "flex flex-col justify-center h-full w-full py-8 text-2xl"}

   (d/p {:class "mb-8 p-4 text-5xl font-futura font-bold"}
        "BUDGET")

   (d/div {:class "p-4 mb-12"}
          (d/p {}
               "The total budget for the Armenian Pavilion 2026 is approximately "
               (d/span {:class "font-bold"}
                       "1,4M Euro, ")
               (d/span {:class "font-bold"}
                       "1,6M USD")
               ", covering all aspects of production, installation, operations, marketing, and documentation."))

   ($ budget-table
      {:cost-data cost-data})))

(defnc header
  []
  (d/div
   (d/div {:class "w-1/2 lg:w-1/4 lg:max-w-64 mt-4 lg:mt-12 px-4"}
          (d/img {:src "images/graphics/biennale_logo.png"}))

   (d/div {:class "text-xl italic text-white px-4 mt-12 mb-8"}
          (d/ul {}
                (d/li {}
                      "Armenian Pavilion")
                (d/li {}
                      "Artist: Zadik Zadikian")
                (d/li {}
                      "Curator: Tony Shafrazi")
                (d/li {}
                      "Curator: Tina Chakarian")
                (d/li {}
                      "2026 Venice Biennale")))))

(defnc about
  []
  (let [is-desktop? (use-touch-enabled)]
    (d/div
     {:class "text-white
                     
                     flex
                     justify-center
                     flex-col
                     h-full
                     
                      w-full
                     
                     text-2xl
                     lg:text-2xl"}

     (d/div {:class "p-4"}
            (d/p {:class "
                          mb-8
                          font-bold
                          font-futura
                          text-5xl"}
                 "THE STUDIO")

            (d/p
             {:class "leading-relaxed text-lg md:text-xl"}
             (d/span {:class "font-bold text-pink-400"} "THE STUDIO ")
             "is conceived as a living, evolving workspace—an active site of fabrication, touch, and continual reconfiguration. Throughout the Biennale, "
             (d/span {:class "font-semibold italic"} "Zadik Zadikian and his team")
             " transform the Armenian Pavilion into a functioning studio where plaster units are cast, pigmented, stacked, dismantled, and rebuilt in shifting constellations. "
             (d/span {:class "italic"} "This is not a performance or a simulation,")
             " but the studio made visible: an oasis and natural habitat in which "
             (d/span {:class "font-medium"} "making itself becomes the work."))

            (d/p
             {:class "mt-6 leading-relaxed text-lg md:text-xl"}
             "At the heart of the project is an "
             (d/span {:class "font-semibold"} "invented casting process")
             ", in which liquid plaster is poured onto flat glass, producing planes of exceptional smoothness reinforced with lightweight foam cores. Pigment is embedded at the moment of formation, saturating each unit from within, while select pieces are "
             (d/span {:class "font-semibold text-yellow-400"} "gilded in 24-karat gold")
             ", marking moments where the elemental meets the transcendent. These blocks recall "
             (d/span {:class "italic"} "Armenian tufo")
             "—humble, ancient, and foundational—returning to Zadikian as memory, metaphor, and form, and mirroring the diasporic condition of "
             (d/span {:class "italic"} "endurance through fragmentation and reinvention."))

            (d/p
             {:class "mt-6 leading-relaxed text-lg md:text-xl"}
             "Guided by the ethos of "
             (d/span {:class "italic font-medium"} "In Minor Keys")
             ", "
             (d/span {:class "font-bold text-pink-400"} "THE STUDIO ")
             "elevates the quiet, easily overlooked unit through care, repetition, and precision. Over seven months, structures are endlessly assembled and disassembled like "
             (d/span {:class "italic"} "musical modulations")
             ", remaining perpetually unfinished. Visitors are invited into this process through touch, making "
             (d/span {:class "font-medium"} "haptic experience a mode of knowledge and participation.")
             " In this communal space of slowness and attention, "
             (d/span {:class "font-bold"} "THE STUDIO becomes the artwork itself")
             ": a place where making is continuous, form is fluid, and the elemental reveals its quiet, enduring power.")

            (d/div {:class "flex items-center justify-center"}
                   (d/div {:class "w-12 mt-12 border-t border-pink-500"})))



     (d/div
      {:class "w-full h-full flex flex-col gap-4 mt-12"}
      (let [outer-ctx (hooks/use-ref "outer-ctx")
            [visited? is-active?] (use-scroll-trigger outer-ctx {:end "bottom"})]
        (d/div {:class ""
                :ref outer-ctx}
               (if is-desktop?
                 ($ video-background {:playback-id "fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo"
                                      :should-play? is-active?
                                      :allow-audio? true})
                 ($ video-background {:playback-id "7qwSp8dt00X2Qht88MC86zyKRc4mykJno5TpkflUuN5E"
                                      :should-play? is-active?
                                      :allow-audio? false}))))
      ($ captioned-image
         {:img-src "https://atd-722658831.imgix.net/simple_blocks/FileName_001Beauty_ViewLayer_099-3.tif"
          :caption "BLUE YELLOW BLUE YELLOW"
          :credit "© Zadik Zadikian 2026"})

      ($ captioned-image
         {:img-src "https://atd-722658831.imgix.net/photos/DSC02376%20Large.jpeg"
          :caption "Stacked units"
          :credit "Los Angeles, 2025"})

      ($ captioned-image
         {:img-src "https://atd-722658831.imgix.net/photos/DSC02363%20Large.jpeg"
          :caption "Making of blue unit"
          :credit "Los Angeles, 2025"})))))

(defnc non-profit
  []
  (d/div
   (d/p {:class "mb-8 p-4 text-5xl font-futura font-bold"}
        "DONATION INFORMATION")

   (d/div {:class "px-4 mb-12 text-lg md:text-xl leading-relaxed text-slate-300"}

          (d/p {}
               "The Armenian Pavilion 2026 is supported through "
               (d/span {:class "font-semibold"} "Fallen Angels Inc.")
               ", a registered "
               (d/span {:class "font-semibold"} "501(c)(3)")
               " non-profit organization. "
               (d/span {:class "font-semibold"} "Contributions are tax deductible")
               " to the extent permitted by law.")

          (d/div {:class "mt-6 space-y-1"}
                 (d/p {}
                      (d/span {:class "font-semibold"} "Organization: ")
                      "Fallen Angels Inc.")
                 (d/p {}
                      (d/span {:class "font-semibold"} "EIN: ")
                      (d/span {:class "font-bold text-slate-100"} "92-2395513"))
                 (d/p {}
                      (d/span {:class "font-semibold"} "Located in: ")
                      (d/span {:class "font-bold text-slate-100"} "Los Angeles, CA")))

          (d/div {:class "mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10"}

                 ;; Domestic
                 (d/div
                  (d/p {:class "text-3xl font-futura font-bold text-slate-100 mb-4"}
                       "Domestic "
                       (d/span {:class "italic font-normal text-slate-300"} "Transfers"))

                  (d/div {:class "space-y-3"}
                         (d/div {:class "flex items-baseline justify-between gap-6"}
                                (d/span {:class "font-semibold"} "Name:")
                                (d/span {:class "text-right"} "Fallen Angels Inc."))
                         (d/div {:class "flex items-baseline justify-between gap-6"}
                                (d/span {:class "font-semibold"} "Routing:")
                                (d/span {:class "text-right font-bold text-slate-100 tracking-wide"} "091311229"))
                         (d/div {:class "flex items-baseline justify-between gap-6"}
                                (d/span {:class "font-semibold"} "Account #:")
                                (d/span {:class "text-right font-bold text-slate-100 tracking-wide"} "202535309341"))
                         (d/div {:class "flex items-start justify-between gap-6"}
                                (d/span {:class "font-semibold"} "Address:")
                                (d/div {:class "text-right leading-snug"}
                                       (d/p {} "Choice Financial Group")
                                       (d/p {} "4501 23rd Avenue S")
                                       (d/p {} "Fargo, ND 58104")))))

                 ;; International
                 (d/div
                  (d/p {:class "text-3xl font-futura font-bold text-slate-100 mb-4"}
                       "International "
                       (d/span {:class "italic font-normal text-slate-300"} "Transfers"))

                  (d/div {:class "space-y-3"}
                         (d/div {:class "flex items-baseline justify-between gap-6"}
                                (d/span {:class "font-semibold"} "Name:")
                                (d/span {:class "text-right"} "Fallen Angels Inc."))
                         (d/div {:class "flex items-baseline justify-between gap-6"}
                                (d/span {:class "font-semibold"} "SWIFT/BIC:")
                                (d/span {:class "text-right font-bold text-slate-100 tracking-wide"} "CHFGUS44021"))
                         (d/div {:class "flex items-baseline justify-between gap-6"}
                                (d/span {:class "font-semibold"} "ABA/Routing:")
                                (d/span {:class "text-right font-bold text-slate-100 tracking-wide"} "091311229"))
                         (d/div {:class "flex items-baseline justify-between gap-6"}
                                (d/span {:class "font-semibold"} "IBAN/Account #:")
                                (d/span {:class "text-right font-bold text-slate-100 tracking-wide"} "202535309341"))
                         (d/div {:class "flex items-start justify-between gap-6"}
                                (d/span {:class "font-semibold"} "Address:")
                                (d/div {:class "text-right leading-snug"}
                                       (d/p {} "Choice Financial Group")
                                       (d/p {} "4501 23rd Avenue S")
                                       (d/p {} "Fargo, ND 58104")))))))

   (d/p {:class "p-4 mt-10 text-sm md:text-base text-slate-400"}
        "If you would like a receipt letter for your records, please include your name and email address with the transfer memo.")))

(defnc budget-section
  []
  ($ section
     {:key "budget-section"
      :section-id "budget-section"}
     (d/div
      {:class "w-full h-full
               text-white
               grey-grad
               flex items-center justify-center flex-col"}
      (d/div {:class "flex flex-col w-full lg:w-8/12"}
             ($ header)
             ($ about)
             ($ cost-breakdown)
             ($ non-profit)
             ($ contact-section)))))