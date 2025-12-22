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

(def section-classes "mt-8 flex flex-col w-full h-full text-lg md:text-xl font-helvetica")

(defn css
  [& classes]
  (apply str (interpose " " classes)))

(def cost-data
  [{:title "1. Location Cost"
    :description "Secures and operates the Venice exhibition venue: exclusive rental, public-facing staffing, required approvals, insurance coverage, minor architectural adjustments, lighting, and statutory taxes—ensuring the Pavilion is compliant, safe, and fully exhibition-ready."
    :details [{:title "Base rent" :amount 130000}
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

   {:title "2. Admin"
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

   {:title "3. Production"
    :description "Core fabrication of the work: various artist materials, gilding, casting infrastructure, studio overhead, and skilled labor—supporting precision, durability, and museum-level finish in the sculptural units."
    :details [{:title "Foam core" :amount 17500}
              {:title "Pigments" :amount 12500}
              {:title "Plaster" :amount 3750}
              {:title "Acrylic" :amount 3500}
              {:title "Gold leaf" :amount 35000}
              {:title "Gold sizing" :amount 3530}
              {:title "Expendables" :amount 2500}
              {:title "Glass" :amount 3000}
              {:title "Studio rent" :amount 15360}
              {:title "Utilities/ins." :amount 7200}
              {:title "Gilders" :amount 33600}
              {:title "Casters" :amount 72000}
              {:title "Assistants" :amount 24000}]}

   {:title "4. Logistics"
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

   {:title "5. Opening Week"
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

   {:title "6. Studio Optrs"
    :description "Seven-month operation of THE STUDIO on-site: staffing, ongoing materials and expendables, local equipment needs, lodging/per diem, and daily maintenance—supporting continuous execution during the Biennale."
    :details [{:title "Full-time assistants" :amount 30000}
              {:title "Part-time assistants" :amount 18000}
              {:title "Temp staff" :amount 25000}
              {:title "Local materials" :amount 5000}
              {:title "Expendables" :amount 7000}
              {:title "Local equip." :amount 7500}
              {:title "Lodging/per diem" :amount 40000}
              {:title "Rubbish" :amount 1400}]}

   {:title "7. Marketing"
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

   {:title "8. Publication"
    :description "Catalogue and printed collateral: commissioned writing, design, editing, printing, and limited-run branded materials—extending the Pavilion into libraries, archives, and institutional discourse."
    :details [{:title "Curatorial essay" :amount 2500}
              {:title "Commissioned essays" :amount 8000}
              {:title "Artist texts" :amount 1500}
              {:title "Wall texts" :amount 1500}
              {:title "Catalog design" :amount 10000}
              {:title "Edit & layout" :amount 7500}
              {:title "Catalog print" :amount 24000}
              {:title "Catalog misc" :amount 1000}
              {:title "Tote design" :amount 3500}
              {:title "Tote print" :amount 4500}
              {:title "Tote misc" :amount 500}
              {:title "Stationery design" :amount 2500}
              {:title "Stationery print" :amount 1500}
              {:title "Stationery misc" :amount 250}]}

   {:title "9. Documentation"
    :description "Permanent record of the Pavilion: professional cinematography, sound, photography, editing/color, social deliverables, and archival storage—supporting press, scholarship, donor stewardship, and legacy."
    :details [{:title "Film equip rentals" :amount 10000}
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

(defnc section-block
  [{:keys [idx eyebrow title children]}]
  (d/div {:id (str "section-" idx)}
         (d/div {:class "px-4 pt-12 text-slate-100"}
                (d/div {:class "mb-6 flex items-center gap-3"}
                       (d/div {:class "h-px w-10 bg-pink-500/70"})
                       (d/p {:class "text-sm tracking-[0.25em] uppercase text-slate-400"}
                            (str idx ". " eyebrow)))
                (d/h2
                 {:class "
               
               font-bold
               uppercase
               leading-none
               text-5xl
               md:text-7xl
               "}
                 title))
         (d/div {:class "text-xl text-white-100"}
                children)))


(defnc cost-breakdown
  []
  ($ section-block
     {:idx 3
      :eyebrow "FINANCIALS"
      :title "BUDGET"}
     (d/p {:class "text-xl text-slate-100 p-4"}

          ;; Opening + totals
          (d/span {}
                  "The Armenian Pavilion at the 61st Venice Biennale is a major international cultural undertaking—"
                  "structured to meet the standards of the most rigorous national presentations. ")
          (d/span {:class "text-slate-300"} "With a total budget of approximately ")
          (d/span {:class "font-bold text-white"} "€1.4M")
          (d/span {:class "text-slate-300"} " (")
          (d/span {:class "font-bold text-white"} "$1.6M USD")
          (d/span {:class "text-slate-300"} "), the financial framework covers the full scope of ")
          (d/span {:class "font-semibold text-pink-400"} "production, installation, operations, communications,")
          (d/span {:class "text-slate-300"} " and ")
          (d/span {:class "font-semibold text-pink-400"} "documentation")
          (d/span {:class "text-slate-300"} ". ")

          ;; Venue logic (non-permanent pavilion + cost comparison)
          (d/span {:class "block mt-6"}
                  "As Armenia does not maintain a permanent national pavilion in Venice, a venue must be secured through rental—"
                  "as is customary for many smaller and non-permanent participating nations. ")
          (d/span {:class "text-slate-300"}
                  "The selected site is located outside the Biennale’s primary zones, enabling a significantly lower base rent—approximately ")
          (d/span {:class "font-bold text-white"} "€130,000")
          (d/span {:class "text-slate-300"} "—while remaining fully accredited and visible within the official Biennale structure. ")
          (d/span {:class "text-slate-300"}
                  "By contrast, venues within the Giardini or Arsenale—when available—typically begin at ")
          (d/span {:class "font-bold text-white"} "€400,000")
          (d/span {:class "text-slate-300"}
                  " in base rent, before construction, staffing, utilities, logistics, and operating overhead. ")

          ;; Why this venue is essential to THE STUDIO
          (d/span {:class "block mt-6"}
                  "Crucially, the nature of ")
          (d/span {:class "font-semibold text-pink-400"} "THE STUDIO")
          (d/span {:class "text-slate-300"}
                  " makes this venue choice not only strategic but essential. ")
          (d/span {:class "text-slate-300"}
                  "The work is conceived to be produced, refined, and evolved ")
          (d/span {:class "font-semibold italic text-slate-100"} "on site")
          (d/span {:class "text-slate-300"}
                  ", allowing the Pavilion to function simultaneously as exhibition space and working studio. ")
          (d/span {:class "text-slate-300"}
                  "This approach meets extremely tight production and installation deadlines while maintaining full artistic and technical control—"
                  "conditions that would be far more difficult, costly, or even impossible under a traditional off-site fabrication and transport model. ")

          ;; Not a grand object (process over spectacle)
          (d/span {:class "block my-6"}
                  "Rather than directing the majority of resources toward a single, fixed monumental installation, the artist and team have deliberately taken another route. ")
          (d/span {:class "text-slate-300"} "By producing the work on site, the Pavilion avoids the need for a pre-fabricated ")
          (d/span {:class "font-semibold italic text-slate-100"} "“grand object”")
          (d/span {:class "text-slate-300"} " altogether. ")
          (d/span {:class "text-slate-300"}
                  "This decision reduces fabrication, crating, international shipping, and risk-related costs, while aligning more precisely with the broader conceptual goals: ")
          (d/span {:class "font-semibold text-pink-400"} "process over spectacle, presence over monumentality,")
          (d/span {:class "text-slate-300"} " and ")
          (d/span {:class "font-semibold text-pink-400"} "sustained making over static display")
          (d/span {:class "text-slate-300"} ". ")

          ;; Efficiency + rigor (mutually reinforcing)
          (d/span {:class "block mt-6"}
                  "In this sense, cost efficiency and artistic rigor are not in opposition but mutually reinforcing. ")
          (d/span {:class "text-slate-300"}
                  "The Pavilion’s structure distributes resources across time, labor, materials, and public engagement—rather than concentrating them into a single object whose expense would be driven largely by transport and scale rather than meaning. ")

          ;; Venice realities (why still expensive)
          (d/div {:class "block my-6"}
                 (d/span {:class ""}
                         "Despite these efficiencies, the overall cost of operating in Venice during the Biennale remains high. ")
                 (d/span {:class "text-slate-300"}
                         "Venice’s unique geography, limited infrastructure, and extraordinary demand elevate costs across all categories—logistics, storage, labor, accommodations, and technical services. ")
                 (d/span {:class "text-slate-300"}
                         "These conditions are shared by all national pavilions and reflect the Biennale’s position as the most visible international platform in contemporary art. "))

          ;; Seven-month commitment (keep from template, but integrated)
          (d/span {:class "mt-6"}
                  "Unlike projects that culminate at opening, this Pavilion is conceived as a")
          (d/span {:class "font-semibold italic text-slate-100"} "seven-month operational commitment")
          (d/span {:class "text-slate-300"}
                  ": a living environment that functions simultaneously as exhibition space, working studio, public forum, and diplomatic platform—requiring sustained staffing, materials, logistics, and institutional oversight throughout the duration of the Biennale. ")

          ;; What the investment covers
          (d/span {:class "block mt-6"}
                  "Significant investment secures venue readiness and regulatory compliance, supports curatorial and administrative leadership, funds museum-scale fabrication and specialized craft, and addresses Venice-specific transport, storage, installation, and reverse logistics. ")
          (d/span {:class "block mt-6"}
                  (d/span {:class "font-semibold text-pink-400"} "THE STUDIO")
                  (d/span {:class "text-slate-300"}
                          " is budgeted as an ongoing on-site operation, ensuring continuous execution, maintenance, and evolution of the work across the exhibition period—distinguishing the Pavilion from static presentations. "))

          ;; Visibility + legacy
          (d/span {:class "block mt-6"}
                  "Public visibility and long-term legacy are strengthened through opening week programs, marketing and public relations, publication, and comprehensive film and photographic documentation—ensuring that the Pavilion’s impact extends into international media, scholarship, and institutional archives. ")

          ;; Fundraising committee
          (d/span {:class "block mt-6"}
                  "To support the scale of this undertaking, a dedicated fundraising committee has been formed to advance the Pavilion’s financial and philanthropic efforts. ")
          (d/span {:class "block mt-4 text-slate-300"} "The committee is led by:")

          (d/ul {:class "mt-3 ml-6 list-disc text-slate-100"}
                (d/li {} "Archbishop Hovnan Derderian")
                (d/li {} "Tony Shafrazi")
                (d/li {} "Rafi Ourfalian")
                (d/li {} "Khachik Khudikyan")
                (d/li {} "Andranik Torosyan")
                (d/li {} "Aram Alajajian")
                (d/li {} "Vik Hovsepian"))

          (d/span {:class "block mt-4 text-slate-300"}
                  "The committee plays an active role in guiding outreach, stewarding donor relationships, and advancing the fundraising strategy necessary to realize a project of this ambition and international significance. ")

          ;; Contingency (final italic note)
          (d/span {:class "block italic mt-6 font-normal text-lg text-slate-100"}
                  "A responsible contingency is included to accommodate the realities of an extended international project operating across jurisdictions, timelines, and currencies—ensuring stability, accountability, and the successful delivery of Armenia’s national presentation on the world stage."))

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
                          {:title "1. Press Release"
                           :anchor "section-1"})
                       ($ section-link
                          {:title "2. Overview - THE STUDIO"
                           :anchor "section-2"})
                       ($ section-link
                          {:title "3. Budget"
                           :anchor "section-3"})
                       ($ section-link
                          {:title "4. Location Details"
                           :anchor "section-4"})
                       ($ section-link
                          {:title "5. Donation Info"
                           :anchor "section-5"})))))
(defnc about
  []

  ($ section-block
     {:idx 2
      :eyebrow "OVERVIEW"
      :title "THE STUDIO"}
     (d/div
      (d/div
       {:class "space-y-8
               p-4"}
       (d/p
        {}
        (d/span {:class "font-bold text-pink-400"} "THE STUDIO ")
        "is a sustained site of making: a working studio made visible, in full daylight, without theatrics. "
        "Over the duration of the Biennale, the Armenian Pavilion operates as a neutral armature in which objects are brought into being through repetition, calibration, and quiet labor—"
        "an environment where the work can be encountered as work, and where meaning is inseparable from existence.")

       (d/p
        {}
        "At its core is a simple form: "
        (d/span {:class "font-medium text-slate-100"} "the unit, the block, the brick")
        ". Perhaps the most basic object of the modern world—foundational, common, and easily overlooked. "
        "This reduction is intentional. The work begins by coming to terms with a "
        (d/span {:class "italic"} "Kantian")
        " limit: that we will never encounter the thing as it is in itself. "
        "For "
        (d/span {:class "italic"} "Immanuel Kant")
        ", the object always exceeds our grasp; it cannot be fully refined, fully labeled, or fully known. "
        "Here, the brick insists on that paradox: the more it is simplified, the more resistant it becomes to interpretation.")

       (d/p
        {}
        "The unit does not arrive as image or symbol. It arrives as a fact—built through internal necessity: "
        (d/span {:class "font-medium"} "measure, surface, weight, edge, join")
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
         ", in front of you—without becoming an announcement?")))
      (d/div {:class "space-y-4 mt-6"} ($ captioned-image
                                          {:img-src "https://atd-722658831.imgix.net/simple_blocks/FileName_001Beauty_ViewLayer_099-3.tif"
                                           :caption "BLUE YELLOW BLUE YELLOW"
                                           :credit "© Zadik Zadikian 2026"})

             ($ captioned-image
                {:img-src "https://atd-722658831.imgix.net/artwork/blue_unit_with_hand.tif"})))))

(defnc non-profit
  []
  ($ section-block
     {:idx 5
      :eyebrow "NON-PROFIT"
      :title "DONATION INFORMATION"}
     (d/div
      {:class "space-y-8
                   p-4"}
      (d/div {:class "mb-12 text-slate-300"}

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
           "If you would like a receipt letter for your records, please include your name and email address with the transfer memo."))))


(defnc press-release
  []
  (let [[expanded? set-expanded] (hooks/use-state false)]
    ($ section-block
       {:idx 1
        :eyebrow "NEWS"
        :title "PRESS RELEASE"}
       (d/div {:class "p-4"}
              (d/div {:class ""}

                     ;; Dateline - always visible
                     (d/p {:class "font-medium text-xl"}
                          (d/span {:class "italic"} "Yerevan / Los Angeles / Venice — ")
                          "The Ministry of Culture of the Republic of Armenia has selected "
                          (d/span {:class "font-semibold"} "Zadik Zadikian")
                          " to represent Armenia at the "
                          (d/span {:class "font-semibold"} "61st Venice Biennale Arte")
                          " in 2026. Led by legendary art dealer "
                          (d/span {:class "font-semibold"} "Tony Shafrazi")
                          " as Chief Curator, the Pavilion aligns with Armenia's broader commitment to elevating its cultural presence on the international stage..."))

              ;; Expandable full content
              (when expanded?
                (d/div {:class ""}

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
                            "turns toward repetition, exactitude, and touch. Drawing on childhood experiences working with Armenian tuff stone and a lifelong intimacy with plaster, Zadikian produces units that appear plain at first glance, yet reveal unexpected depth through surface, edge, and volume. Together, they form a precise yet open-ended vocabulary—a language of blocks, strata, and intervals that underwrites a larger meditation on resilience, renewal, and the rediscovery of origins."))))

       ;; Read more / Read less button
       (when (not expanded?)
         (d/div {:class "flex justify-center mt-6 px-4"}
                ($ main-button
                   {:on-click #(set-expanded (not expanded?))
                    :class "px-8 py-3"
                    :title "Read full release"})))

       (d/div {:class "p-4 italic text-lg my-6 mt-12"}
              (d/span {}
                      "*Note: As Armenia does not maintain a permanent national pavilion in Venice, the Pavilion must be realized through a rented venue—"
                      "a standard and widely accepted model for many non-permanent participating nations. ")

              (d/span {:class "block mt-4 text-slate-300"}
                      "The selected site operates at a base rental cost of approximately ")

              (d/span {:class "font-semibold text-white"} "€130,000")

              (d/span {:class "text-slate-300"}
                      ", representing a strategic and responsible choice when compared to venues in the Giardini or Arsenale, "
                      "where base rents—when space is available at all—typically begin at ")

              (d/span {:class "font-semibold text-white"} "€400,000")

              (d/span {:class "text-slate-300"}
                      ", excluding construction, staffing, and operational expenses. ")

              ;; Fundraising committee
              (d/span {:class "block mt-6"}
                      "To support the scale and international significance of this undertaking, "
                      "a dedicated fundraising committee has been formed to guide and advance the project’s philanthropic efforts. ")

              (d/span {:class "block mt-4 text-slate-200"}
                      "The committee is led by ")

              (d/span {:class "font-medium text-white"}
                      "Archbishop Hovnan Derderian, Tony Shafrazi, Rafi Ourfalian, Khachik Khudikyan, "
                      "Andranik Torosyan, Aram Alajajian, and Vik Hovsepian.")

              (d/span {:class "text-slate-300"}
                      ", ensuring the Pavilion’s successful realization through coordinated leadership, stewardship, and long-term commitment. ")))
    #_(d/div {:class section-classes :id "press-release"}
             ;; Header
             (d/div {:class "p-4"}
                    (d/p {:class "text-5xl font-helvetica font-bold"}
                         "1. PRESS RELEASE"))

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
  ($ section-block
     {:idx 4
      :eyebrow "VENUE"
      :title "LOCATION INFORMATION"}
     (d/div
      {:class "space-y-8
                 "}
      (d/div {:class "text-slate-100 font-medium text-xl"}
             (d/div {:class "p-4 mb-12"}
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

             (d/div {:class "text-xl font-medium"}

                    ;; --------------------------
                    ;; #1 — TESA 41
                    ;; --------------------------
                    (d/div {:class "p-4"}
                           (d/p {:class "text-3xl pb-4 font-bold uppercase"}
                                "#1 - TESA 41 (MAIN STUDIO)")

                           (d/div {:class "space-y-6"}
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
                                       ".")))

                    (d/div {:class "w-full h-full flex flex-col gap-4 mt-12"}
                           (let [outer-ctx (hooks/use-ref "outer-ctx")
                                 [visited? is-visible?] (use-intersection-observer outer-ctx)]
                             (d/div {:class ""
                                     :ref outer-ctx}
                                    ($ lazy-video-background {:playback-id "KaA1Jf2AusJZ966KPeZrdwJ5S53kboLO4E4fGLrgTLk"
                                                              :should-play? is-visible?
                                                              :allow-audio? false})))

                           ($ captioned-image
                              {:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif"})
                           ($ captioned-image
                              {:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.08.tif"})
                           ($ captioned-image
                              {:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.18.tif"}))


                    (d/div {:class "mt-12"}
                           (d/div {:class "p-4"}
                                  (d/p {:class "pb-4 text-3xl font-helvetica font-bold uppercase"}
                                       "#2 - GIARDINO 25 (CHURCH COURTYARD)")

                                  (d/div {:class "space-y-6"}
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
                                              " as by structure."))) (d/div {:class "w-full h-full flex flex-col gap-4 mt-12"}
                                                                            (let [is-desktop? (use-touch-enabled)
                                                                                  outer-ctx (hooks/use-ref "outer-ctx")
                                                                                  [visited? is-visible?] (use-intersection-observer outer-ctx)]
                                                                              (d/div {:class ""
                                                                                      :ref outer-ctx}
                                                                                     ($ lazy-video-background {:playback-id "00r6626C33zSItHxx4iRh1oJPgP1tsH01qR00bNkN7i4go"
                                                                                                               :should-play? is-visible?
                                                                                                               :allow-audio? false})))))




                    ;; --------------------------
                    ;; #3 — OUTPOST
                    ;; --------------------------
                    (d/div {:class "mt-12"}
                           (d/div {:class "p-4"}
                                  (d/p {:class "pb-4 text-3xl font-helvetica font-bold uppercase"}
                                       "#3 — OUTPOST (CANAL WALKWAY)")

                                  (d/div {:class "space-y-6"}
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
                                              "This location extends the Pavilion into the daily flow of the Biennale—establishing a continuous visual and conceptual presence along the canal.")))

                           (d/div {:class "w-full h-full flex flex-col gap-4 mt-12"}
                                  (let [is-desktop? (use-touch-enabled)
                                        outer-ctx (hooks/use-ref "outer-ctx")
                                        [visited? is-visible?] (use-intersection-observer outer-ctx)]
                                    (d/div {:class ""
                                            :ref outer-ctx}
                                           ($ lazy-video-background {:playback-id "A602Gnm6A7gpYTl2w4ZnC9xDEnOQQJWbS3dNxhE1O1FE"
                                                                     :should-play? is-visible?
                                                                     :allow-audio? false}))))))))))

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
