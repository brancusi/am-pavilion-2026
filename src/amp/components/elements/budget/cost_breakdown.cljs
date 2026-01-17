(ns amp.components.elements.budget.cost-breakdown
  (:require
   [amp.components.elements.budget.budget-table :refer [budget-table]]
   [amp.components.elements.expandable-text-area :refer [expandable-text-area-2]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]))

(def cost-data
  [{:id :location,
    :title "1. Location Cost",
    :description
    "Secures and operates the Venice exhibition venue: exclusive rental, public-facing staffing, required approvals, insurance coverage, minor architectural adjustments, lighting, and statutory taxes—ensuring the Pavilion is compliant, safe, and fully exhibition-ready during peak Biennale demand.",
    :details
    [{:title "Base rent",
      :amount 195000,
      :description
      "Base rental fee for Tesa 41, Giardino 25, and the Outpost for the full Biennale period. This reflects Biennale-season demand, limited availability of compliant venues, and excludes all staffing, permits, utilities, and operational services."}
     {:title "Security staff",
      :amount 30000,
      :description
      "Licensed security personnel required during public hours and special events, with increased staffing during opening week and peak visitor periods mandated by venue and municipal regulations."}
     {:title "Mediator staff",
      :amount 30000,
      :description
      "Trained gallery mediators providing visitor guidance, crowd flow management, and artwork oversight throughout the exhibition’s daily operations."}
     {:title "Cleaning",
      :amount 8500,
      :description
      "Weekly professional cleaning and periodic deep cleans required for a high-traffic international exhibition, with elevated frequency during opening week."}
     {:title "Utilities",
      :amount 6000,
      :description
      "Electricity, water, and climate control costs for continuous public operation during the Biennale season."}
     {:title "Permits",
      :amount 12000,
      :description
      "Municipal and Biennale permits required for exhibition use, public access, and operational compliance in Venice."}
     {:title "Fire cert",
      :amount 4250,
      :description
      "Mandatory fire-safety certification, inspections, and documentation required by Venetian authorities."}
     {:title "Liability ins.",
      :amount 3000,
      :description
      "Public liability insurance covering visitors, staff, and third parties for the duration of the exhibition."}
     {:title "Build-outs",
      :amount 15000,
      :description
      "Minor architectural adjustments and protective build-outs necessary to adapt the venue to exhibition and safety standards."}
     {:title "Lighting",
      :amount 9500,
      :description
      "Supplemental exhibition lighting equipment and installation tailored to the work and existing architectural conditions."}
     {:title "Signage tax",
      :amount 2000,
      :description "Municipal tax associated with exterior and wayfinding signage during the Biennale."}],
    :tax {:rate 0.22, :label "VAT 22%"}}
   {:id :admin,
    :title "2. Admin",
    :description
    "Leadership and project management supporting curatorial direction, artist oversight, coordination, compliance, and travel—ensuring continuity across pre-production, opening, and the full Biennale cycle.",
    :details
    [{:title "Admin LA",
      :amount 12500,
      :description
      "Los Angeles–based administrative support for production, contracting, scheduling, and financial coordination."}
     {:title "Admin Venice",
      :amount 25000,
      :description
      "On-the-ground administrative coordination in Venice during installation, opening, and peak Biennale periods."}
     {:title "Curatorial/Artist",
      :amount 15000,
      :description
      "Curatorial and artist"}
     {:title "Engineer",
      :amount 6500,
      :description "Structural and technical consultation related to installation safety and load considerations."}
     {:title "Legal",
      :amount 7500,
      :description "Contract review, compliance, and legal oversight related to international exhibition operations."}

     {:title "Accounting",
      :amount 7500,
      :description "Professional accounting services ensuring transparent financial reporting and compliance."}
     {:title "Bookkeeping", :amount 2950, :description "Ongoing transaction tracking and financial record maintenance."}
     {:title "HR/Payroll",
      :amount 3000,
      :description "Payroll processing and HR compliance for international and local staff."}
     {:title "Software/tools",
      :amount 1500,
      :description "Specialized software subscriptions and tools required for project management and coordination."}
     {:title "Flights/local",
      :amount 17500,
      :description
      "International and regional travel for core team during installation, opening week, and critical milestones."}
     {:title "Lodging/per diem",
      :amount 32000,
      :description "Accommodation and daily expenses during high-demand Biennale periods when rates are elevated."}
     {:title "Dev & scouting",
      :amount 15000,
      :description
      "Early-stage site visits, venue scouting, and development travel necessary prior to final commitments."}]}
   {:id :la-prod,
    :title "3. LA Production",
    :description
    "Initial Los Angeles production: materials, casting infrastructure, gilding, studio overhead, and skilled labor—ensuring museum-grade fabrication prior to shipment.",
    :details
    [{:title "Foam core",
      :amount 15000,
      :description "Lightweight internal cores used to achieve structural integrity while minimizing shipping weight."}
     {:title "Pigments",
      :amount 17500,
      :description "High-quality pigments integrated into plaster at casting, ensuring color saturation and longevity."}
     {:title "Plaster", :amount 12500, :description "Primary casting material for all sculptural units."}
     {:title "Acrylic", :amount 2500, :description "Binders and surface materials used in finishing and protection."}
     {:title "Gold leaf",
      :amount 28000,
      :description "Genuine 24-karat gold leaf for select units, sourced for consistency and archival quality. 20 packs of 500 leaf gold."}
     {:title "Gold sizing",
      :amount 3000,
      :description "Adhesives and preparation materials required for professional gilding."}
     {:title "Equipment",
      :amount 18500,
      :description "3D printer, casting tables, studio tools, and studio equipment required for production."}
     {:title "Mold & Fab", :amount 6500, :description "Custom molds and fabrication aids for repeatable precision. CNC mother units."}
     {:title "Expendables", :amount 2950, :description "Consumable supplies used during casting and finishing."}
     {:title "Glass", :amount 2500, :description "Flat glass surfaces used to achieve smooth casting planes."}
     {:title "Studio rent (LA)",
      :amount 17500,
      :description "LA studio rent for fabrication LA portion of fabrication prior to shipment. 4 months."}
     {:title "Utilities/ins.",
      :amount 7500,
      :description "Utilities and insurance coverage for the LA production facility."}
     {:title "Gilder", :amount 7500, :description "1 part-time gilding professional for gilding several units."}
     {:title "Casters", :amount 40000, :description "2 full-time casting professionals for casting and finishing of initial units."}
     {:title "Assistants",
      :amount 21500,
      :description "2 studio assistants supporting daily production and quality control."}]}
   {:id :logistics,
    :title "4. Logistics",
    :description
    "International and local transport under Biennale conditions: crating, freight, port handling, lagoon transport, installation labor, storage, and reverse logistics.",
    :details
    [{:title "Crates", :amount 15000, :description "15 - 20 pre-fab collapsible crates designed for international fine-art transport."}
     {:title "Supplies", :amount 11800, :description "Packing materials, peanuts, void fill, required to protect works during shipment."}
     {:title "Packers", :amount 7500, :description "5 professional art handlers for packing at origin. 5 days of packing."}
     {:title "Ship LA–Venice",
      :amount 35000,
      :description "International freight from Los Angeles to Venice during peak shipping season."}
     {:title "Ship Venice–LA", :amount 35000, :description "Return shipment following deinstallation."}
     {:title "Insurance",
      :amount 12500,
      :description "Fine-art transit insurance covering international and local movement."}
     {:title "Installers", :amount 8500, :description "Skilled installation labor in Venice."}
     {:title "Uninstallers", :amount 12500, :description "Deinstallation labor at exhibition close."}
     {:title "Port handling", :amount 3000, :description "Port fees and handling charges upon arrival."}
     {:title "Barge (inbound)", :amount 3500, :description "Lagoon barge transport from port to Venice."}
     {:title "Truck (inbound)", :amount 1500, :description "Short-distance trucking where canal access is limited."}
     {:title "Barge (to site)", :amount 3500, :description "Final barge transport to exhibition site."}
     {:title "Forklift", :amount 1500, :description "Mechanical handling for heavy crates."}
     {:title "Handling crew", :amount 1000, :description "Additional labor for on-site maneuvering."}
     {:title "Short storage", :amount 1500, :description "Temporary holding during installation scheduling."}
     {:title "Crate storage", :amount 2500, :description "Secure storage of empty crates during exhibition."}
     {:title "Waste removal", :amount 1000, :description "Removal of packing debris under Venetian regulations."}
     {:title "Barge (return)", :amount 3500, :description "Lagoon transport for return shipment."}
     {:title "Truck (return)", :amount 1500, :description "Return trucking as required."}
     {:title "Port (return)", :amount 3000, :description "Port handling fees for outbound shipment."}]}
   {:id :opening,
    :title "5. Opening Week",
    :description
    "Opening reception and first public visibility of the Pavilion: hospitality, staffing, security, rentals, technical support, press and VIP coordination—executed during the Biennale’s most compressed and expensive period.",
    :details
    [{:title "Catering food",
      :amount 8500,
      :description "Food service for opening events, 150-200 headcount, scaled for international attendance and peak Biennale demand."}
     {:title "Catering drinks", :amount 2500, :description "Beverage service for receptions and VIP previews. 150-200 headcount."}
     {:title "Catering staff",
      :amount 3000,
      :description "Professional service staff required for licensed event catering. Cost for catering staff is increased during Biennale opening week."}
     {:title "Event coord.",
      :amount 3500,
      :description "On-site event coordination managing vendors, schedules, and protocol."}
     {:title "Security", :amount 1500, :description "Supplemental security during high-density opening events."}
     {:title "Rentals", :amount 3000, :description "Furniture, tables, and other event equipment rentals."}
     {:title "A/V & tech", :amount 2000, :description "Temporary audio-visual support for speeches and presentations."}
     {:title "Invitations", :amount 1500, :description "Design and printing of formal invitations for VIP and press."}
     {:title "VIP/press staff",
      :amount 3000,
      :description "Dedicated personnel supporting accredited guests and journalists during the first several weeks."}
     {:title "VIP hospitality",
      :amount 3500,
      :description "Hospitality expenses aligned with diplomatic and institutional expectations."}
     {:title "VIP liaison", :amount 2500, :description "Protocol-aware liaison coordinating VIP schedules and access."}
     {:title "Press packets", :amount 1000, :description "Printed materials distributed to press during previews."}
     {:title "Press A/V", :amount 1000, :description "Playback and display equipment for press briefings."}
     {:title "Interpreter", :amount 1500, :description "Professional interpretation for multilingual audiences."}
     {:title "Water taxis",
      :amount 3500,
      :description "Water taxi transport during peak congestion when rates are elevated."}
     {:title "Public talks",
      :amount 3000,
      :description "Honoraria and costs associated with scheduled public discussions."}
     {:title "Talk staff", :amount 1500, :description "Support staff for audience management during talks."}]}
   {:id :the-studio,
    :title "6. THE STUDIO",
    :description
    "Seven-month operation of THE STUDIO on-site: staffing, materials, equipment, lodging, and daily maintenance—supporting continuous making throughout the Biennale.",
    :details
    [{:title "Full-time asst.",
      :amount 85000,
      :description "3 full-time core studio staff maintaining daily fabrication and reconfiguration. 7 months."}
     {:title "Part-time asst.",
      :amount 45000,
      :description "3 part-time supplemental labor scaled to visitor volume and programming peaks. 7 months."}
     {:title "Temp staff", :amount 18500, :description "Short-term staffing during opening week and special events."}
     {:title "Gilders", :amount 15000, :description "Specialist gilder engaged on an as-needed basis on site."}
     {:title "Local materials",
      :amount 9500,
      :description "Venice-sourced materials to avoid repeated international shipping."}
     {:title "Expendables", :amount 2500, :description "Consumables required for ongoing studio activity."}
     {:title "Local equip.",
      :amount 9500,
      :description "Rental or purchase of equipment impractical to ship internationally."}
     {:title "Lodging/per diem",
      :amount 55000,
      :description "Accommodation and expenses over seven months. Zadik, Aram. Roughly 3750 per person per month."}
     {:title "Rubbish", :amount 3500, :description "Regular waste removal under municipal regulations."}]}
   {:id :marketing,
    :title "7. Marketing",
    :description
    "Visibility and communications: branding, website, PR, advertising, and outdoor placements—positioning the Pavilion within the global Biennale discourse.",
    :details
    [{:title "Visual Identity", :amount 15000, :description "Design of a cohesive visual system across all platforms."}
     {:title "Press kit",
      :amount 8500,
      :description "Production of comprehensive press materials for international media."}
     {:title "Website", :amount 7500, :description "Design, development, and hosting of the Pavilion website. The website will be a key aspect of the project."}
     {:title "OOH design", :amount 4500, :description "Design for outdoor advertising formats."}
     {:title "Copywriting", :amount 1500, :description "Editorial copy supporting marketing and donor outreach."}
     {:title "PR writing", :amount 4500, :description "Press releases and feature pitching."}
     {:title "Totem OOH", :amount 10000, :description "High-visibility outdoor placements during Biennale peak."}
     {:title "Poster print", :amount 7500, :description "Printing of large-format posters."}
     {:title "City posters", :amount 3500, :description "Smaller-scale poster distribution across Venice."}
     {:title "Social ad spend", :amount 6500, :description "Targeted social media promotion."}
     {:title "Campaign mgmt", :amount 15000, :description "Ongoing campaign coordination and optimization."}
     {:title "Digital ads", :amount 8500, :description "Online advertising placements."}
     {:title "Print ads", :amount 12500, :description "Print placements in international art publications."}
     {:title "PR pre-open", :amount 12500, :description "Intensive PR outreach leading into opening week."}
     {:title "PR ongoing", :amount 12500, :description "Sustained PR activity throughout the Biennale run."}
     {:title "Social clips", :amount 7500, :description "Short-form video deliverables for social platforms."}]}
   {:id :publication,
    :title "8. Publication",
    :description
    "Catalogue and printed materials: commissioned texts, design, editing, and printing—ensuring long-term scholarly presence.",
    :details
    [{:title "Curatorial essay", :amount 2500, :description "Primary curatorial text anchoring the publication."}
     {:title "Commissioned essays", :amount 7500, :description "Texts by invited writers and scholars."}

     {:title "Wall texts", :amount 1500, :description "Exhibition texts adapted for print."}
     {:title "Catalog design", :amount 14500, :description "Graphic design and layout of the catalogue."}
     {:title "Edit & layout", :amount 5000, :description "Professional editing and final layout preparation."}
     {:title "Catalog print", :amount 25000, :description "Printing of a limited-run, museum-quality catalogue. 250 Copies."}
     {:title "Tote design", :amount 3500, :description "Design of branded tote bags."}
     {:title "Tote print", :amount 2500, :description "Production of tote bags."}
     {:title "Stationery design", :amount 3500, :description "Design of printed stationery materials for handouts and press."}
     {:title "Stationery print", :amount 2500, :description "Printing of stationery materials for handouts and press."}]}
   {:id :documentation,
    :title "9. Documentation",
    :description
    "Permanent visual record: film, sound, photography, editing, and social deliverables—supporting press, scholarship, and legacy.",
    :details
    [{:title "Film equip rentals", :amount 12500, :description "Rental of cinema-grade cameras, lenses, and lighting."}
     {:title "Film crew",
      :amount 18500,
      :description "Professional crew covering installation, opening, and walkthroughs."}
     {:title "Sound crew", :amount 4500, :description "Location sound recording for film documentation."}
     {:title "Install photos", :amount 2500, :description "High-resolution photography during installation."}
     {:title "Final photos", :amount 3500, :description "Completed exhibition photography."}
     {:title "Event photos", :amount 1500, :description "Coverage of opening and public events."}
     {:title "Edit (assembly)", :amount 13500, :description "Initial film assembly and rough cut."}
     {:title "Edit (final)", :amount 5000, :description "Final edit and color correction."}
     {:title "Sound mix", :amount 3500, :description "Final audio mixing and mastering."}]}])


(defn convert-amount
  [data rate]
  (mapv (fn [section]
          (assoc section :details (mapv (fn [detail]
                                          (assoc detail :amount (* (:amount detail) rate)))
                                        (:details section))))

        data))

(comment

  (convert-amount cost-data 1.18)

  ;;Keep from folding
  )





(defnc preview
  [{:keys []}]
  (d/div {:class "text-xl text-slate-100 p-4"}
         (d/span {}
                 "The Armenian Pavilion at the 61st Venice Biennale is a major international cultural undertaking—"
                 "structured to meet the standards of the most rigorous national presentations. ")
         (d/span {:class "text-slate-300"} "With a total budget of approximately ")

         (d/span {:class "text-slate-300"} " (")
         (d/span {:class "font-bold text-white"} "$1.6M USD")
         (d/span {:class "text-slate-300"} "), the financial framework covers the full scope of ")
         (d/span {:class "font-semibold text-pink-400"} "production, installation, operations, communications,")
         (d/span {:class "text-slate-300"} " and ")
         (d/span {:class "font-semibold text-pink-400"} "documentation")
         (d/span {:class "text-slate-300"} ". ")))

(defnc details
  [{:keys []}]
  (d/div {:class "text-xl text-slate-100 p-4"}
         (d/span {}
                 "The Armenian Pavilion at the 61st Venice Biennale is a major international cultural undertaking—"
                 "structured to meet the standards of the most rigorous national presentations. ")
         (d/span {:class "text-slate-300"} "With a total budget of approximately ")

         (d/span {:class "text-slate-300"} " (")
         (d/span {:class "font-bold text-white"} "$1.6M USD")
         (d/span {:class "text-slate-300"} "), the financial framework covers the full scope of ")
         (d/span {:class "font-semibold text-pink-400"} "production, installation, operations, communications,")
         (d/span {:class "text-slate-300"} " and ")
         (d/span {:class "font-semibold text-pink-400"} "documentation")
         (d/span {:class "text-slate-300"} ". ")

         ;; Venue logic (non-permanent pavilion + cost comparison)
         (d/span {:class "block my-6"}
                 "As Armenia does not maintain a permanent national pavilion in Venice, a venue must be secured through rental—"
                 "as is customary for many smaller and non-permanent participating nations. ")
         (d/span {:class "text-slate-300"}
                 "The selected site is located outside the Biennale’s primary zones, enabling a significantly lower base rent—approximately ")
         (d/span {:class "font-bold text-white"} "$195,000")
         (d/span {:class "text-slate-300"} "—while remaining fully accredited and visible within the official Biennale structure. ")
         (d/span {:class "text-slate-300"}
                 "By contrast, venues within the Giardini or Arsenale—when available—typically begin at ")
         (d/span {:class "font-bold text-white"} "$450,000")
         (d/span {:class "text-slate-300"}
                 " in base rent, before construction, staffing, utilities, logistics, and operating overhead. ")

         ;; Why this venue is essential to THE STUDIO
         (d/div {:class "mt-6"}
                (d/span {:class "mt-6"}
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
                        "conditions that would be far more difficult, costly, or even impossible under a traditional off-site fabrication and transport model. "))

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
         (d/div {:class "my-6"} (d/span {:class ""}
                                        "In this sense, cost efficiency and artistic rigor are not in opposition but mutually reinforcing. ")
                (d/span {:class "text-slate-300"}
                        "The Pavilion’s structure distributes resources across time, labor, materials, and public engagement—rather than concentrating them into a single object whose expense would be driven largely by transport and scale rather than meaning. "))

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
         (d/span {:class "font-semibold italic text-slate-100"} " seven-month operational commitment")
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

         (d/span {:class "block italic mt-6 font-normal text-lg text-slate-100"}
                 "A responsible contingency is included to accommodate the realities of an extended international project operating across jurisdictions, timelines, and currencies—ensuring stability, accountability, and the successful delivery of Armenia’s national presentation on the world stage.")))

(defnc footer
  [{:keys []}]
  (d/div {:class "mt-12"}
         ($ budget-table
            {:cost-data cost-data})))

(defnc cost-breakdown
  [{:keys [id subtitle title]}]
  (d/div {:id id}
         ($ expandable-text-area-2 {:section-hint subtitle
                                    :title title
                                    :expand-button-label "Read more"
                                    :preview-text preview
                                    :full-text details
                                    :footer-text footer})))