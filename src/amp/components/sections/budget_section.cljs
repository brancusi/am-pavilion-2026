(ns amp.components.sections.budget-section
  (:require
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [amp.components.elements.budget-table :refer [budget-table]]
   [amp.components.elements.captioned-image :refer [captioned-image]]
   [amp.components.icons :refer [ChevronRightIcon]]
   [amp.components.section :refer [section]]
   [amp.components.sections.contact-section :refer [contact-section]]
   [amp.components.ui.main-button :refer [main-button]]
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.hooks.use-scroll-to :refer [use-scroll-to-id]]
   [amp.components.navs.back-up-nav :refer [back-up-nav]]
   [amp.components.elements.aspect-box :refer [aspect-box]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def lazy-video-background (lazy-component amp.components.elements.video-background/video-background))

(def section-classes "mt-8 flex flex-col w-full h-full text-lg md:text-xl  font-helvetica")

(defn css
  [& classes]
  (apply str (interpose " " classes)))

(def cost-data
  [{:title "Venue Ops"
    :description "Secures and operates the Venice exhibition venue: exclusive rental, public-facing staffing, required approvals, insurance coverage, minor architectural adjustments, lighting, and statutory taxes—ensuring the Pavilion is compliant, safe, and fully exhibition-ready."
    :details [{:title "Venue rent" :amount 130000}
              {:title "Base staff" :amount 50000}
              {:title "Mediator" :amount 25000}
              {:title "Cleaning" :amount 7000}
              {:title "Utilities" :amount 0}
              {:title "Permits" :amount 10000}
              {:title "Fire cert" :amount 3500}
              {:title "Liability ins." :amount 2500}
              {:title "Build-outs" :amount 9500}
              {:title "Lighting" :amount 7500}
              {:title "Signage tax" :amount 1500}
              {:title "VAT" :amount 53900}]}

   {:title "Administration"
    :description "Leadership and project management supporting curatorial direction, artist oversight, coordination, compliance, and travel—keeping the Pavilion contract-ready, fiscally transparent, and operationally stable across the full production timeline."
    :details [{:title "Tony (Curator)" :amount 15000}
              {:title "Tina (Curator)" :amount 15000}
              {:title "Zadik (Artist)" :amount 15000}
              {:title "Aram (Artist)" :amount 15000}
              {:title "Admin support" :amount 10000}
              {:title "Venice coord." :amount 22500}
              {:title "Engineer" :amount 4500}
              {:title "Legal" :amount 6000}
              {:title "Accounting" :amount 9000}
              {:title "Bookkeeping" :amount 4800}
              {:title "HR/Payroll" :amount 2000}
              {:title "Software/tools" :amount 900}
              {:title "Flights/local" :amount 12000}
              {:title "Lodging/per diem" :amount 19500}
              {:title "Pitch dev" :amount 3500}
              {:title "Proposal travel" :amount 12500}]}

   {:title "Production"
    :description "Core fabrication of the work: materials, gilding inputs, casting infrastructure, studio overhead, and skilled labor—supporting precision, durability, and museum-level finish in the sculptural units."
    :details [{:title "Foam core" :amount 17500}
              {:title "Pigments" :amount 12500}
              {:title "Plaster" :amount 3750}
              {:title "Gold leaf" :amount 35000}
              {:title "Gold sizing" :amount 3530}
              {:title "Expendables" :amount 2500}
              {:title "Glass" :amount 3000}
              {:title "Studio rent" :amount 15360}
              {:title "Utilities/ins." :amount 7200}
              {:title "Gilders" :amount 33600}
              {:title "Casters" :amount 72000}
              {:title "Assistants" :amount 24000}]}

   {:title "Logistics"
    :description "International and local movement of the work: crating, packing, freight, installation/uninstallation labor, port handling, barge and trucking transfers, storage, and waste removal—ensuring secure handling across Venice’s complex access conditions."
    :details [{:title "Crates" :amount 15000}
              {:title "Supplies" :amount 10000}
              {:title "Packers" :amount 6000}
              {:title "Ship LA–Venice" :amount 30000}
              {:title "Ship Venice–LA" :amount 30000}
              {:title "Insurance" :amount 12000}
              {:title "Installers" :amount 7200}
              {:title "Uninstallers" :amount 9000}
              {:title "Port handling" :amount 2500}
              {:title "Barge (inbound)" :amount 3000}
              {:title "Truck (inbound)" :amount 1200}
              {:title "Barge (to site)" :amount 3000}
              {:title "Forklift" :amount 1300}
              {:title "Handling crew" :amount 500}
              {:title "Short storage" :amount 1200}
              {:title "Crate storage" :amount 2000}
              {:title "Waste removal" :amount 1000}
              {:title "Barge (return)" :amount 3000}
              {:title "Truck (return)" :amount 1200}
              {:title "Port (return)" :amount 2500}]}

   {:title "Opening Week"
    :description "Opening reception and public-facing diplomatic visibility: hospitality, staffing, security, rentals, technical support, press/VIP coordination, translation, water transport support, and public talks."
    :details [{:title "Catering food" :amount 7000}
              {:title "Catering drinks" :amount 2250}
              {:title "Catering staff" :amount 2500}
              {:title "Event coord." :amount 3000}
              {:title "Security" :amount 1200}
              {:title "Rentals" :amount 2500}
              {:title "A/V & tech" :amount 1500}
              {:title "Event media" :amount 2500}
              {:title "Invitations" :amount 1000}
              {:title "VIP/press staff" :amount 1500}
              {:title "VIP hospitality" :amount 1800}
              {:title "VIP liaison" :amount 2250}
              {:title "Protocol" :amount 1000}
              {:title "Press packets" :amount 400}
              {:title "Press A/V" :amount 500}
              {:title "Interpreter" :amount 700}
              {:title "Water taxis" :amount 960}
              {:title "Public talks" :amount 1200}
              {:title "Talk staff" :amount 800}
              {:title "Accessibility" :amount 250}
              {:title "Program signage" :amount 300}]}

   {:title "Studio Ops"
    :description "Seven-month operation of THE STUDIO on-site: staffing, ongoing materials and expendables, local equipment needs, lodging/per diem, and daily maintenance—supporting continuous execution during the Biennale."
    :details [{:title "PT assistants" :amount 18000}
              {:title "FT assistants" :amount 30000}
              {:title "Temp staff" :amount 25000}
              {:title "Local materials" :amount 5000}
              {:title "Expendables" :amount 7000}
              {:title "Local equip." :amount 7500}
              {:title "Lodging/per diem" :amount 40000}
              {:title "Rubbish" :amount 1400}]}

   {:title "Marketing"
    :description "Visibility and communications campaign: brand system, website, press toolkit, PR writing, advertising, outdoor placements, social media strategy, and media buys—positioning the Pavilion with institutional clarity and global reach."
    :details [{:title "Visual ID" :amount 12500}
              {:title "Press kit" :amount 7500}
              {:title "Website" :amount 12000}
              {:title "OOH design" :amount 3500}
              {:title "Exh graphics" :amount 5000}
              {:title "Copywriting" :amount 1500}
              {:title "PR writing" :amount 3500}
              {:title "Totem OOH" :amount 8400}
              {:title "Poster print" :amount 5000}
              {:title "City posters" :amount 3000}
              {:title "Social ad spend" :amount 5000}
              {:title "Campaign mgmt" :amount 5000}
              {:title "Digital pub ads" :amount 7500}
              {:title "Print pub ads" :amount 10000}
              {:title "PR pre-open" :amount 10000}
              {:title "PR ongoing" :amount 10000}
              {:title "Marketing fee" :amount 7500}]}

   {:title "Publication"
    :description "Catalogue and printed collateral: commissioned writing, design, editing, printing, and limited-run branded materials—extending the Pavilion into libraries, archives, and institutional discourse."
    :details [{:title "Curatorial essay" :amount 2500}
              {:title "Commissioned essays" :amount 8000}
              {:title "Artist texts" :amount 1500}
              {:title "Wall texts" :amount 1500}
              {:title "Cat design" :amount 10000}
              {:title "Edit & layout" :amount 7500}
              {:title "Cat print" :amount 24000}
              {:title "Cat misc" :amount 1000}
              {:title "Tote design" :amount 3500}
              {:title "Tote print" :amount 4500}
              {:title "Tote misc" :amount 500}
              {:title "Stationery design" :amount 2500}
              {:title "Stationery print" :amount 1500}
              {:title "Stationery misc" :amount 250}]}

   {:title "Documentation"
    :description "Permanent record of the Pavilion: professional cinematography, sound, photography, editing/color, social deliverables, and archival storage—supporting press, scholarship, donor stewardship, and legacy."
    :details [{:title "Camera pkg" :amount 10000}
              {:title "Film crew" :amount 24900}
              {:title "Sound record" :amount 2800}
              {:title "Install photos" :amount 1750}
              {:title "Final photos" :amount 1800}
              {:title "Event photos" :amount 1400}
              {:title "Edit (assembly)" :amount 3000}
              {:title "Edit (final)" :amount 2400}
              {:title "Sound mix" :amount 1600}
              {:title "Social clips" :amount 6000}
              {:title "Archiving" :amount 750}]}])

(defnc cost-breakdown
  []
  (d/div
   {:class (css section-classes "justify-center py-8")
    :id "budget"}

   (d/p {:class "p-4 text-5xl font-helvetica font-bold"}
        "BUDGET")

   (d/div {:class "p-4 mb-6 font-medium"}
          (d/p {:class "text-xl  text-slate-100"}
               (d/span {}
                       "The Armenian Pavilion at the 61st Venice Biennale is a major international cultural undertaking—"
                       "structured to meet the standards of the most rigorous national presentations. ")
               (d/span {}
                       "With a total budget of approximately ")
               (d/span {:class "font-bold text-white"} "€1.4M")
               (d/span {:class "text-slate-300"} " (")
               (d/span {:class "font-bold text-white"} "$1.6M USD")
               (d/span {:class "text-slate-300"} "), the financial framework covers the full scope of ")
               (d/span {:class "font-semibold text-pink-400"} "production, installation, operations, communications,")
               (d/span {:class "text-slate-300"} " and ")
               (d/span {:class "font-semibold text-pink-400"} "documentation")
               (d/span {:class "text-slate-300"} ". ")

               (d/span {:class "block mt-6"}
                       "Unlike projects that culminate at opening, this Pavilion is designed as a ")
               (d/span {:class "font-semibold italic text-slate-100"} "seven-month operational commitment")
               (d/span {:class "text-slate-300"} ": a living environment that functions simultaneously as exhibition space, working studio, public forum, and diplomatic platform—requiring sustained staffing, materials, logistics, and institutional oversight throughout the Biennale. ")

               (d/span {:class "block mt-6"}
                       "Significant investment secures venue readiness and compliance, supports curatorial and administrative leadership, funds museum-scale fabrication and specialized craft, and addresses Venice-specific transport, storage, installation, and return logistics. ")

               (d/span {:class "block mt-6"} "THE STUDIO is budgeted as an ongoing on-site operation, ensuring continuous execution, maintenance, and evolution of the work across the exhibition period—distinguishing the Pavilion from static presentations. ")

               (d/span {:class "block mt-6"}
                       "Public visibility and long-term legacy are strengthened through opening week programs, marketing and PR, publication, and comprehensive film and photographic documentation—ensuring the Pavilion’s impact extends into international media, scholarship, and archives. ")

               (d/span {:class "block italic mt-6 font-normal text-lg"}
                       "A responsible contingency is included to accommodate the realities of an extended international project operating across jurisdictions, timelines, and currencies.")))

   ($ budget-table
      {:cost-data cost-data})))

(defnc section-link
  [{:keys [title anchor]}]
  (let [scroll-to-id (use-scroll-to-id)]
    (d/button {:on-click #(scroll-to-id anchor)
               :class "hover:text-pink-400 transition-colors"}
              title " " ($ ChevronRightIcon {:class "w-6 h-6 inline-block ml-1"}))))

(defnc header
  []
  (d/div {:class ""}


         (d/div {:class "w-1/2 lg:w-1/4 lg:max-w-64 mt-4 lg:mt-8 px-4"}
                (d/img {:src "images/graphics/biennale_logo.png"}))

         ;; Create main header text that explain the purpose of the document for potential donors
         (d/div {:class "px-4 mt-12 lg:mt-16 max-w-4xl"}
                (d/h1 {:class "font-helvetica font-bold text-5xl lg:text-6xl text-white mb-6"}
                      "ARMENIAN PAVILION 2026 VENICE BIENNALE"))



         #_(d/div {:class " italic text-white px-4 my-12"}
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
                              "2026 Venice Biennale")))

         (d/div {:class "w-full px-4 mt-16"}
                (d/div {:class "text-2xl text-white space-y-4 flex flex-col justify-start items-start"}
                       ($ section-link
                          {:title "1. Exhibition Press Release"
                           :anchor "press-release"})
                       ($ section-link
                          {:title "2. Overview - THE STUDIO"
                           :anchor "about"})
                       ($ section-link
                          {:title "3. Budget"
                           :anchor "budget"})
                       ($ section-link
                          {:title "4. Location Details"
                           :anchor "location"})
                       ($ section-link
                          {:title "5. Donation Info"
                           :anchor "donation"})))))
(defnc about
  []
  (let [is-desktop? (use-touch-enabled)]
    (d/div
     {:class (css section-classes
                  "text-white
                     justify-center")
      :id "about"}

     (d/div {:class "p-4"}
            (d/p {:class "
                     mb-8
                     font-bold
                     font-helvetica
                     text-5xl"}
                 "OVERVIEW - THE STUDIO")

            (d/div {:class "text-xl"}
                   (d/p
                    {:class ""}
                    (d/span {:class "font-bold text-pink-400"} "THE STUDIO ")
                    "presents a body of sculptural work by "
                    (d/span {:class "font-semibold"} "Zadik Zadikian")
                    ", composed of discrete, serially produced units. Each unit is a complete work—materially resolved, formally precise, and conceptually sufficient. "
                    "The Pavilion does not stage an event, a performance, or a process. "
                    (d/span {:class "italic"} "It presents objects."))

                   (d/p
                    {:class "mt-6"}
                    "The work consists of plaster units "
                    "pigmented through their full depth, calibrated in scale, and defined by strict attention to surface, edge, and volume. "
                    "Select units are marked by restrained applications of "
                    (d/span {:class "font-semibold text-yellow-400"} "24-karat gold")
                    ". Together, the works form a coherent system governed by internal logic rather than narrative or symbolism. "
                    "Meaning arises through direct encounter with the object as it exists—"
                    (d/span {:class "italic"} "not through instruction, participation, or spectacle."))

                   (d/p
                    {:class "mt-6"}
                    "This position situates "
                    (d/span {:class "font-bold text-pink-400"} "THE STUDIO ")
                    "within a lineage of post-Minimal and Conceptual practice, recalling the serial clarity of "
                    (d/span {:class "italic"} "Sol LeWitt")
                    " and the refusal of expressive excess that defined a generation committed to objecthood. "
                    "Like those precedents, the work does not ask what the object represents, "
                    "but insists on "
                    (d/span {:class "font-medium"} "what it is."))

                   (d/p
                    {:class "mt-6"}
                    "The Pavilion operates as a neutral container—an armature that allows the work to be seen with restraint and precision. "
                    "While the artist and his team remain present on site throughout the Biennale, their labor is not framed as performance. "
                    "Making is neither dramatized nor aestheticized. "
                    "The studio here is not a spectacle, but a condition of necessity: "
                    "the place where work exists because it must.")

                   (d/p
                    {:class "mt-6"}
                    "This approach resonates closely with the Biennale’s curatorial framework, "
                    (d/span {:class "italic font-medium"} "In Minor Keys")
                    ". Rather than amplification or declaration, the project advances through reduction, attention, and precision. "
                    "The modest, repeatable unit—easily overlooked—becomes the site of sustained focus. "
                    "Through rigor rather than scale, the work asserts its presence.")

                   (d/p
                    {:class "mt-6"}
                    "Philosophically, "
                    (d/span {:class "font-bold text-pink-400"} "THE STUDIO ")
                    "approaches what "
                    (d/span {:class "italic"} "Immanuel Kant")
                    " described as the thing as such: the object freed from instrumental meaning, encountered on its own terms. "
                    "The works do not illustrate ideas, nor do they perform identity. "
                    (d/span {:class "font-medium"} "They stand as themselves—unadorned, resolute, and sufficient."))

                   (d/div {:class "flex items-center justify-center"}
                          (d/div {:class "w-12 mt-12 border-t border-pink-500"}))))


     (d/div
      {:class "w-full h-full flex flex-col gap-4 mt-12"}
      (let [outer-ctx (hooks/use-ref "outer-ctx")
            [visited? is-visible?] (use-intersection-observer outer-ctx)]
        (d/div {:class ""
                :ref outer-ctx}
               ($ aspect-box {:ar "16/9"}
                  ($ lazy-video-background {:playback-id "fuKbU028e02haCGC2i94J15M00lnafQ94p01YgKQ4JPPwfo"
                                            :should-play? is-visible?
                                            :allow-audio? true}))))
      ($ captioned-image
         {:img-src "https://atd-722658831.imgix.net/artwork/blue_yellow_blue_yellow.jpg"
          :caption "BLUE YELLOW BLUE YELLOW"
          :credit "© Zadik Zadikian 2026"})
      ($ aspect-box {:ar "16/9"}
         ($ captioned-image
            {:img-src "https://atd-722658831.imgix.net/artwork/blue_unit_with_hand.tif"}))))))

(defnc non-profit
  []
  (d/div {:class section-classes :id "donation"}
         (d/p {:class "mb-8 p-4 text-5xl font-helvetica font-bold"}
              "DONATION INFORMATION")

         (d/div {:class "px-4 mb-12 text-slate-300"}

                (d/p {}
                     "The Armenian Pavilion 2026 is supported through "
                     (d/span {:class "font-semibold"} "Fallen Angels Inc.")
                     ", a registered "
                     (d/span {:class "font-semibold"} "501(c)(3)")
                     " public non-profit organization. "
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
                        (d/p {:class "text-3xl font-helvetica font-bold text-slate-100 mb-4"}
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
                        (d/p {:class "text-3xl font-helvetica font-bold text-slate-100 mb-4"}
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

(defnc press-release
  []
  (let [[expanded? set-expanded] (hooks/use-state false)]
    (d/div {:class section-classes :id "press-release"}
           ;; Header
           (d/div {:class "p-4"}
                  (d/p {:class "text-5xl font-helvetica font-bold"}
                       "PRESS RELEASE"))

           ;; Always visible teaser content
           (d/div {:class "px-4 text-slate-100"}

                  ;; Dateline - always visible
                  (d/p {:class "font-medium text-xl mb-6"}
                       (d/span {:class "italic"} "Yerevan / Los Angeles / Venice — ")
                       "The Ministry of Culture of the Republic of Armenia has selected "
                       (d/span {:class "font-semibold"} "Zadik Zadikian")
                       " to represent Armenia at the "
                       (d/span {:class "font-semibold"} "61st Venice Biennale Arte")
                       " in 2026. Led by legendary art dealer "
                       (d/span {:class "font-semibold"} "Tony Shafrazi")
                       " as Chief Curator, the Pavilion aligns with Armenia's broader commitment to elevating its cultural presence on the international stage."))

           ;; Expandable full content
           (when expanded?
             (d/div {:class "px-4 text-slate-100 text-xl"}

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
                         "turns toward repetition, exactitude, and touch. Drawing on childhood experiences working with Armenian tuff stone and a lifelong intimacy with plaster, Zadikian produces units that appear plain at first glance, yet reveal unexpected depth through surface, edge, and volume. Together, they form a precise yet open-ended vocabulary—a language of blocks, strata, and intervals that underwrites a larger meditation on resilience, renewal, and the rediscovery of origins.")))

           ;; Read more / Read less button
           (when (not expanded?)
             (d/div {:class "flex justify-center p-4 mt-6"}
                    ($ main-button
                       {:on-click #(set-expanded (not expanded?))
                        :class "px-8 py-3"
                        :title "Read more"}))))))

(defnc space-section
  []
  (d/div {:class section-classes :id "location"}
         (d/p {:class "p-4 text-5xl font-bold uppercase"}
              "Location information")

         (d/div {:class "text-slate-100 font-medium text-xl"}
                (d/div {:class "px-4 mb-12 border-b border-slate-600 pb-12"}
                       (d/p {:class " "}
                            "The Armenian Pavilion 2026 unfolds across "
                            (d/span {:class "font-semibold"} "three contiguous sites")
                            " within the historic Arsenale of Venice—"
                            (d/span {:class "font-semibold"} "an interior studio")
                            ", "
                            (d/span {:class "font-semibold"} "an open-air church courtyard")
                            ", and "
                            (d/span {:class "font-semibold"} "a canal-side outpost")
                            ".")
                       (d/p {:class "mt-4 "}
                            "Together, these spaces form a single spatial constellation: "
                            (d/span {:class ""} "a place of work")
                            ", "
                            (d/span {:class ""} "a place of weather and ruin")
                            ", and "
                            (d/span {:class ""} "a public-facing threshold")
                            "—each distinct, yet inseparable."))

                ;; --------------------------
                ;; #1 — TESA 41
                ;; --------------------------
                (d/div {:class "text-xl font-medium"}
                       (d/p {:class "px-4 pb-4 font-bold uppercase"}
                            "#1 — TESA 41 (MAIN STUDIO)")

                       (d/div {:class "px-4 space-y-6"}
                              (d/p {}
                                   (d/span {:class "font-semibold text-slate-100"} "Tesa 41")
                                   " is the primary studio and interior exhibition space for the Armenian Pavilion 2026—"
                                   (d/span {:class "font-semibold"} "5,000 square feet")
                                   " ("
                                   (d/span {:class "font-semibold"} "≈465 square meters")
                                   ") of expansive industrial volume that functions as the "
                                   (d/span {:class "italic"} "operational and conceptual heart")
                                   " of the project.")

                              (d/p {}
                                   "Defined by scale, clarity, and architectural restraint, it is built for sustained "
                                   (d/span {:class "font-medium"} "fabrication")
                                   ", "
                                   (d/span {:class "font-medium"} "assembly")
                                   ", and "
                                   (d/span {:class "font-medium"} "reconfiguration")
                                   " across the full duration of the Biennale.")

                              (d/p {}
                                   "Here, the Pavilion operates as a "
                                   (d/span {:class "font-semibold"} "working studio")
                                   " rather than a static exhibition: a place of continuous "
                                   (d/span {:class "font-medium"} "making")
                                   ", "
                                   (d/span {:class "font-medium"} "stacking")
                                   ", "
                                   (d/span {:class "font-medium"} "dismantling")
                                   ", and "
                                   (d/span {:class "font-medium"} "rebuilding")
                                   ". The interior volume allows the work to expand "
                                   (d/span {:class "font-medium"} "horizontally")
                                   " and "
                                   (d/span {:class "font-medium"} "vertically")
                                   ", accommodating both monumental arrangements and intimate moments of material attention.")

                              (d/p {:class "pt-2"}
                                   (d/span {:class "font-semibold text-slate-100"} "Tesa 41")
                                   " anchors the Pavilion physically and philosophically—establishing "
                                   (d/span {:class "italic"} "the studio as the artwork itself")
                                   "."))

                       (d/div {:class "w-full h-full flex flex-col gap-4 mt-12"}
                              (let [is-desktop? (use-touch-enabled)
                                    outer-ctx (hooks/use-ref "outer-ctx")
                                    [visited? is-visible?] (use-intersection-observer outer-ctx)]
                                (d/div {:class ""
                                        :ref outer-ctx}
                                       ($ lazy-video-background {:playback-id "KE8WAwG3HNzHl01MfXZ8xAkMx5bLISQByLnYRSrp02J1w"
                                                                 :should-play? is-visible?
                                                                 :allow-audio? false}))))

                       (d/div {:class "border-t border-slate-600 my-12"})

                       ;; --------------------------
                       ;; #2 — GIARDINO 25
                       ;; --------------------------
                       (d/div
                        (d/p {:class "px-4 pb-4 text-2xl font-helvetica font-bold uppercase"}
                             "#2 — GIARDINO 25 (CHURCH COURTYARD)")

                        (d/div {:class "px-4 space-y-6"}
                               (d/p {}
                                    (d/span {:class "font-semibold text-slate-100"} "Giardino 25")
                                    " is an adjacent open-air courtyard formed from the remains of a former church. "
                                    "Only the original perimeter walls remain; the roof has long since collapsed—"
                                    "leaving the space exposed to "
                                    (d/span {:class ""} "light")
                                    ", "
                                    (d/span {:class ""} "weather")
                                    ", and "
                                    (d/span {:class ""} "time")
                                    ".")

                               (d/p {}
                                    "What survives is a richly textured architectural shell marked by age, erosion, and history. "
                                    "The courtyard’s stone walls, uneven surfaces, and traces of former sacred use create an atmosphere of "
                                    (d/span {:class "italic"} "quiet intensity")
                                    " and material depth.")

                               (d/p {}
                                    "In contrast to the controlled interior of Tesa 41, Giardino 25 functions as a "
                                    (d/span {:class "font-semibold"} "threshold space")
                                    "—neither fully inside nor fully outside—where the work enters into direct dialogue with "
                                    (d/span {:class ""} "ruin")
                                    ", "
                                    (d/span {:class ""} "open sky")
                                    ", and "
                                    (d/span {:class ""} "changing light")
                                    ".")

                               (d/p {:class "pt-2"}
                                    (d/span {:class "font-semibold text-slate-100"} "Giardino 25")
                                    " extends the Pavilion outward—allowing the project to breathe within an environment shaped as much by "
                                    (d/span {:class "italic"} "absence")
                                    " as by structure."))

                        (d/div {:class "w-full h-full flex flex-col gap-4 mt-12"}
                               (let [is-desktop? (use-touch-enabled)
                                     outer-ctx (hooks/use-ref "outer-ctx")
                                     [visited? is-visible?] (use-intersection-observer outer-ctx)]
                                 (d/div {:class ""
                                         :ref outer-ctx}
                                        ($ lazy-video-background {:playback-id "00r6626C33zSItHxx4iRh1oJPgP1tsH01qR00bNkN7i4go"
                                                                  :should-play? is-visible?
                                                                  :allow-audio? false})))))


                       (d/div {:class "border-t border-slate-600 my-12"})

                       ;; --------------------------
                       ;; #3 — OUTPOST
                       ;; --------------------------
                       (d/div
                        (d/p {:class "px-4 pb-4 text-2xl font-helvetica font-bold uppercase"}
                             "#3 — OUTPOST (CANAL WALKWAY)")

                        (d/div {:class "px-4 space-y-6"}
                               (d/p {}
                                    "The "
                                    (d/span {:class "font-semibold text-slate-100"} "Outpost")
                                    " occupies a brick- and stone-laid walkway that projects into the main canal of the Arsenale. "
                                    "Positioned directly in front of "
                                    (d/span {:class "font-medium"} "Tesa 41")
                                    " and "
                                    (d/span {:class "font-medium"} "Giardino 25")
                                    ", this narrow but critical site serves as the Pavilion’s most "
                                    (d/span {:class "font-semibold"} "publicly visible point of contact")
                                    ".")

                               (d/p {}
                                    "The Outpost can be seen from a major pedestrian route leading into the central Arsenale exhibition grounds. "
                                    "Visitors cross a well-known, heavily trafficked bridge and encounter this site "
                                    (d/span {:class "italic"} "before")
                                    " reaching the main Biennale axis.")

                               (d/p {}
                                    "As a result, the Outpost functions as a "
                                    (d/span {:class "font-semibold"} "signal")
                                    " and a "
                                    (d/span {:class "font-semibold"} "threshold")
                                    "—an early, unavoidable presence that announces the Pavilion to thousands of passersby, including those who may never enter the interior spaces.")

                               (d/p {:class "pt-2"}
                                    "This location extends the Pavilion into the daily flow of the Biennale—establishing a continuous visual and conceptual presence along the canal."))

                        (d/div {:class "w-full h-full flex flex-col gap-4 mt-12"}
                               (let [is-desktop? (use-touch-enabled)
                                     outer-ctx (hooks/use-ref "outer-ctx")
                                     [visited? is-visible?] (use-intersection-observer outer-ctx)]
                                 (d/div {:class ""
                                         :ref outer-ctx}
                                        ($ lazy-video-background {:playback-id "A602Gnm6A7gpYTl2w4ZnC9xDEnOQQJWbS3dNxhE1O1FE"
                                                                  :should-play? is-visible?
                                                                  :allow-audio? false})))))))))

(defnc budget-section
  []
  ($ section
     {:key "budget-section"
      :section-id "budget-section"}
     ($ back-up-nav)
     (d/div
      {:class "w-full h-full
               text-white
               grey-grad
               flex items-center justify-center flex-col"}
      (d/div {:class "flex flex-col w-full lg:w-8/12"}
             ($ header)
             ($ press-release)
             ($ about)
             ($ cost-breakdown)
             ($ space-section)
             ($ non-profit)
             ($ contact-section)))))
