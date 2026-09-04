(ns amp.pages.venue.page
  "Visitor Guide — wayfinding, venue history, and space details.
   Full dedicated page for the Armenia Pavilion location at the
   Venice Biennale 2026."
  (:require
   [amp.pages.venue.map-config :as mc]
   [amp.ui.map :refer [mapbox-map]]
   [amp.ui.image-gallery :refer [lazy-image-gallery]]
   [amp.ui.button :refer [main-button]]
   [amp.ui.page-shell :refer [page-shell]]
   [amp.ui.section-header :refer [section-eyebrow]]
   [amp.ui.icons :refer [MapPinIcon]]
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def lazy-video (lazy-component amp.ui.video-background/video-background))

;; Venue-specific display heading — same treatment as s/heading-display but
;; with a smaller mobile base so multi-word titles ("The Outdoor Piece",
;; "Arsenale Militare") don't overflow narrow viewports.
(def venue-display
  (s/cx s/font-display s/weight-semibold s/uppercase-
        "leading-none text-3xl sm:text-5xl md:text-7xl"
        s/text-primary))

;; ── Shared eyebrow component ──────────────────────────────────────────────
;; Stacked layout: pink accent line → small uppercase text → pink accent line.
;; Compact enough to never wrap, even on narrow mobile screens.

;; Re-export from shared component for backward compat within this file
(def venue-eyebrow section-eyebrow)

;; ── Gallery slides ─────────────────────────────────────────────────────────

(def tesa-41-slides
  [{:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif"
    :aspect-ratio 1.34
    :active? true}
   {:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.08.tif"
    :aspect-ratio 1.34
    :active? true}
   {:img-src "https://atd-722658831.imgix.net/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.18.tif"
    :aspect-ratio 1.34
    :active? true}])

(def crossing-slides
  [{:img-src "https://atd-722658831.imgix.net/big_red_walkway/5.jpg"
    :aspect-ratio 1.82
    :caption "Crossing at the Arsenale"
    :credit "Render 2026"}
   {:img-src "https://atd-722658831.imgix.net/big_red_walkway/1.jpg"
    :aspect-ratio 1.82
    :caption "Crossing at the Arsenale"
    :credit "Render 2026"}])

(defnc map-button
  []
  (d/div {:class "mb-10 flex justify-center sm:justify-start"}
         (d/a {:href mc/maps-url
               :target "_blank"
               :rel "noopener noreferrer"}
              ($ main-button
                 {:children (d/span {:class "flex items-center gap-3"}
                                    ($ MapPinIcon {:class "w-5 h-5"})
                                    "Navigate to the Pavilion")}))))

;; ── Directions — shared data ───────────────────────────────────────────────

(def pavilion-address
  ["Armenian Pavilion"
   "Rio delle Galeazze"
   "Fondamenta Case Nuove"
   "Castello 2738/C"
   "Venezia"])

(def marine-office-phone
  {:display "+39 041 244 1595" :tel "+390412441595"})

(def water-taxi-map-src "/images/graphics/water_taxi_route.jpg")

;; Bilingual copy for the water-taxi instructions. Italian is the default
;; since it is meant to be shown directly to the driver; English is opt-in.
(def water-taxi-copy
  {:en {:title        "Water Taxi Instructions"
        :subtitle     "Authorized access to the Arsenale – Armenian Pavilion"
        :authorized   ["This water taxi is authorized to enter the military Arsenale area because it is carrying guests visiting the Armenian Pavilion."
                       "The Marine Office is aware and has approved access for water taxis transporting visitors to the Armenian Pavilion."]
        :before-title "Before entering"
        :before-body  "Call the Marine Office and say:"
        :before-quote "“I am arriving with a visitor for the Armenian Pavilion.”"
        :marine-label "Marine Office"
        :entrance-title "Only permitted entrance"
        :entrance-lead  "There is only one entrance for water taxis:"
        :entrance-name  "Galeazze – North Lagoon side – Rio delle Galeazze"
        :entrance-body  "The taxi must approach from the north side of the lagoon and enter through Rio delle Galeazze."
        :entrance-warn  "Do not use any other entrance to the Arsenale."
        :route-title  "Route"
        :route-steps  ["Approach from the north side of the lagoon."
                       "Enter through the only permitted taxi entrance: Galeazze – Rio delle Galeazze."
                       "Continue south along Rio delle Galeazze, following the route shown on the map."
                       "Proceed to the Armenian Pavilion landing."]
        :map-caption  "Water taxi route — enter from the North Lagoon via Rio delle Galeazze and continue south to the pavilion drop-off point"
        :address-title "Address"}
   :it {:title        "Istruzioni per il taxi acqueo"
        :subtitle     "Accesso autorizzato all’Arsenale – Padiglione Armenia"
        :authorized   ["Questo taxi è autorizzato a entrare nell’area dell’Arsenale Militare perché trasporta ospiti diretti al Padiglione Armenia."
                       "L’Ufficio della Marina è informato e ha dato il permesso di accesso ai taxi acquei che accompagnano visitatori al Padiglione Armenia."]
        :before-title "Prima di entrare"
        :before-body  "Chiamare l’Ufficio della Marina e comunicare:"
        :before-quote "«Sto arrivando con un visitatore diretto al Padiglione Armenia.»"
        :marine-label "Ufficio della Marina"
        :entrance-title "Unico ingresso consentito"
        :entrance-lead  "Esiste un solo ingresso per i taxi acquei:"
        :entrance-name  "Galeazze – lato Laguna Nord – Rio delle Galeazze"
        :entrance-body  "Il taxi deve obbligatoriamente arrivare dalla Laguna Nord ed entrare attraverso il Rio delle Galeazze."
        :entrance-warn  "NON è consentito utilizzare nessun altro ingresso dell’Arsenale."
        :route-title  "Percorso"
        :route-steps  ["Arrivare dal lato della Laguna Nord."
                       "Entrare dall’unico ingresso consentito ai taxi: Galeazze – Rio delle Galeazze."
                       "Proseguire verso sud lungo il Rio delle Galeazze, seguendo il percorso indicato sulla mappa."
                       "Raggiungere l’approdo del Padiglione Armenia."]
        :map-caption  "Percorso del taxi acqueo — entrare dalla Laguna Nord tramite il Rio delle Galeazze e proseguire verso sud fino all’approdo del padiglione"
        :address-title "Indirizzo"}})

;; ── Directions — small building blocks ─────────────────────────────────────

(defnc phone-link
  "Tap-to-call phone number."
  [{:keys [display tel]}]
  (d/a {:href (str "tel:" tel)
        :class (s/cx s/font-ui s/weight-semibold s/text-lg s/text-accent s/link-subtle s/nowrap-)}
       display))

(defnc sub-heading
  "Secondary heading inside the directions section (ON FOOT / BY WATER TAXI)."
  [{:keys [text]}]
  (d/div {:class "flex items-center gap-4 mb-6"}
         (d/div {:class (s/cx s/divider-accent "w-8 shrink-0")})
         (d/h3 {:class s/heading-section} text)))

(defnc mini-heading
  "Tertiary heading for blocks inside a subsection."
  [{:keys [text warn?]}]
  (d/h4 {:class (s/cx s/heading-sm "mb-2" (when warn? s/text-danger))}
        (when warn? (d/span {:class "mr-2"} "⚠"))
        text))

(defnc address-block
  [{:keys [title]}]
  (d/div
   (when title ($ mini-heading {:text title}))
   (d/address {:class (s/cx s/font-display "not-italic leading-snug" s/text-secondary
                            "text-xl sm:text-2xl")}
              (map-indexed (fn [i line]
                             (d/span {:key i
                                      :class (when (< i 2) (s/cx s/weight-semibold s/text-inverse))}
                                     line
                                     (d/br)))
                           pavilion-address))))

(defnc callout
  "Bordered box for must-follow instructions."
  [{:keys [children]}]
  (d/div {:class (s/cx "border-l-2 pl-4 py-1" s/border-accent)}
         children))

(defnc numbered-steps
  [{:keys [steps]}]
  (d/ol {:class "space-y-3"}
        (map-indexed (fn [i step]
                       (d/li {:key i :class "flex gap-4"}
                             (d/span {:class (s/cx s/font-ui s/weight-semibold s/text-accent "shrink-0 w-5 text-right")}
                                     (inc i))
                             (d/span {:class (s/cx s/body-base "text-left")} step)))
                     steps)))

(defnc lang-toggle
  [{:keys [lang on-change]}]
  (d/div {:class "flex items-center gap-4 mb-6"}
         (for [[k label] [[:it "Italiano"] [:en "English"]]]
           (d/button {:key (name k)
                      :type "button"
                      :on-click #(on-change k)
                      :aria-pressed (= k lang)
                      :class (s/cx s/font-ui s/weight-semibold s/uppercase- s/tracking-label s/text-sm
                                   "py-2 pr-2" s/link-hover-accent
                                   (if (= k lang)
                                     (s/cx s/text-accent "underline underline-offset-4 decoration-2")
                                     s/text-faint))}
                     label))))

;; ── Directions — On Foot ───────────────────────────────────────────────────

(defnc walking-directions [{:keys []}]
  (let [is-desktop? (use-touch-enabled)]
    (d/div {:class "mb-16"}
           (d/div {:class "px-4"}
                  ($ sub-heading {:text "On Foot"})
                  (d/p {:class (s/cx s/body-base "mb-6")}
                       "The pavilion sits inside the Arsenale, roughly an "
                       (d/span {:class s/em-strong} "eight-minute walk")
                       " from the crossing at the "
                       (d/span {:class s/em-strong} "Piraeus Lion")
                       ". Follow the highlighted route on the map to "
                       (d/span {:class s/em-strong} "Tesa 41")
                       ".")

                  (d/div {:class "mb-8"}
                         ($ address-block {:title "Address"})))

           ($ map-button)

           (d/div {:class "mb-6"}
                  ($ mapbox-map
                     {:dev false
                      :interactive? is-desktop?
                      :initial-view mc/initial-view
                      :ant-paths    mc/ant-paths
                      :layers       mc/layers})
                  (d/p {:class (s/cx s/font-ui s/text-sm s/em-italic s/text-muted "mt-4 px-4")}
                       "Walking path from the crossing to the pavilion — approximately 8 minutes")))))

;; ── Directions — By Water Taxi ─────────────────────────────────────────────

(defnc water-taxi-directions [{:keys []}]
  (let [[lang set-lang] (hooks/use-state :it)
        c (get water-taxi-copy lang)]
    (d/div {:class "mb-8"}
           (d/div {:class "px-4"}
                  ($ sub-heading {:text "By Water Taxi"})

                  (d/p {:class (s/cx s/body-base "mb-6")}
                       "Water taxis can bring guests directly to the pavilion’s landing inside the "
                       (d/span {:class s/em-strong} "Arsenale Militare")
                       ". Access is approved by the Marine Office, but the driver must follow the procedure below. "
                       (d/span {:class s/em-italic} "Show these instructions to your driver — they are in Italian by default, with English available."))

                  ($ lang-toggle {:lang lang :on-change set-lang})

                  ;; Header
                  (d/h4 {:class (s/cx s/heading-section "mb-1")} (:title c))
                  (d/p {:class (s/cx s/label-muted "mb-6")} (:subtitle c))

                  ;; Authorization statement
                  (d/div {:class "space-y-3 mb-8"}
                         (d/p {:class (s/cx s/body-base s/em-strong)} (first (:authorized c)))
                         (d/p {:class s/body-base} (second (:authorized c))))

                  ;; Before entering — call the Marine Office
                  (d/div {:class "mb-8"}
                         ($ callout
                            ($ mini-heading {:text (:before-title c) :warn? true})
                            (d/p {:class (s/cx s/body-base "mb-2")} (:before-body c))
                            (d/p {:class (s/cx s/body-closing "mb-4")} (:before-quote c))
                            (d/p {:class (s/cx s/label-muted "mb-1")} (:marine-label c))
                            ($ phone-link {& marine-office-phone})))

                  ;; Only permitted entrance
                  (d/div {:class "mb-8"}
                         ($ callout
                            ($ mini-heading {:text (:entrance-title c) :warn? true})
                            (d/p {:class (s/cx s/body-base "mb-2")} (:entrance-lead c))
                            (d/p {:class (s/cx s/font-display s/weight-semibold s/text-lg s/text-primary "mb-3")}
                                 (:entrance-name c))
                            (d/p {:class (s/cx s/body-base "mb-2")} (:entrance-body c))
                            (d/p {:class (s/cx s/font-body s/text-base s/weight-medium s/text-danger "leading-relaxed")} (:entrance-warn c))))

                  ;; Route
                  (d/div {:class "mb-8"}
                         ($ mini-heading {:text (:route-title c)})
                         ($ numbered-steps {:steps (:route-steps c)}))

                  ;; Address
                  (d/div {:class "mb-8"}
                         ($ address-block {:title (:address-title c)})))

           ;; Route map
           (d/div {:class "mb-8"}
                  (d/img {:src water-taxi-map-src
                          :alt "Map of the Arsenale showing the only permitted water taxi entrance at Rio delle Galeazze and the route south to the Armenian Pavilion drop-off point"
                          :loading "lazy"
                          :class "w-full h-auto"})
                  (d/p {:class (s/cx s/font-ui s/text-sm s/em-italic s/text-muted "mt-4 px-4")}
                       (:map-caption c))))))

;; ── Getting There (walking + water taxi) ──────────────────────────────────

(defnc getting-there-section [{:keys []}]
  (d/div {:class s/section-pb}
         (d/div {:class "px-4"}
                ($ venue-eyebrow {:text "Directions"})
                (d/h2 {:class (s/cx venue-display "mb-8")}
                      "Getting There"))
         ($ walking-directions)
         ($ water-taxi-directions)))

;; ── Hero ───────────────────────────────────────────────────────────────────

(defnc hero-section
  [{:keys []}]
  (d/div {:class "pt-10 pb-4 px-4"}
         ($ venue-eyebrow {:text "Venice · Arsenale Militare"})

         ;; Display title
         (d/h1 {:class (s/cx venue-display "mb-8")}
               "Visit the pavilion")

         ;; Lead copy — enticing, sets the two-site narrative
         (d/p {:class (s/cx s/body-lg "mb-4")}
              "The Armenia Pavilion unfolds across "
              (d/span {:class s/em-strong} "two sites")
              " within the historic Arsenale of Venice. Reach it "
              (d/span {:class s/em-strong} "on foot")
              " through the Biennale grounds, or arrive by "
              (d/span {:class s/em-strong} "water taxi")
              " directly at the pavilion’s landing.")))

;; ── About ──────────────────────────────────────────────────────────────────

(defnc about-section
  [{:keys []}]
  (d/div {:class (s/cx s/section-pb "px-4")}
         ;; Display title
         (d/h2 {:class (s/cx venue-display "mb-8")}
               "About")

         ;; Lead copy — enticing, sets the two-site narrative
         (d/div {:class "space-y-6"}
                  (d/p {:class s/body-lg}
                       "The Armenia Pavilion unfolds across "
                       (d/span {:class s/em-strong} "two sites")
                       " within the historic Arsenale of Venice\u2014a "
                       (d/span {:class s/em-strong} "5,000-square-foot interior studio")
                       " and a monumental "
                       (d/span {:class s/em-strong} "outdoor sculpture")
                       " at the gates of the complex.")

                  (d/p {:class s/body-base}
                       "Together they form a single constellation: "
                       (d/span {:class s/em-italic} "a place for study, for work, to create, share, and exhibit")
                       ". Over six months the Pavilion operates not as a static exhibition "
                       "but as a living workshop\u2014open, evolving, and built in real time."))))

;; ── The Studio (Tesa 41) ──────────────────────────────────────────────────

(defnc studio-section [{:keys []}]
  (let [ref (hooks/use-ref "studio-ref")
        [_visited? is-visible?] (use-intersection-observer ref)]
    (d/div {:class s/section-pb}
           ;; Eyebrow + display heading
           (d/div {:class "px-4"}
                  ($ venue-eyebrow {:text "Interior \u00B7 Tesa 41"})
                  (d/h2 {:class (s/cx venue-display "mb-8")}
                        "The Studio"))

           ;; Prose
           (d/div {:class "px-4 space-y-6"}
                  (d/p {:class s/body-lg}
                       (d/span {:class s/em-strong} "Tesa 41")
                       " is the primary studio and exhibition space for the Armenia Pavilion\u2014"
                       (d/span {:class s/em-strong} "5,000 square feet")
                       " of expansive industrial volume within the Arsenale that functions as the "
                       (d/span {:class s/em-italic} "operational and conceptual heart")
                       " of the project.")

                  (d/p {:class s/body-base}
                       "Here, the Pavilion operates as a "
                       (d/span {:class s/em-strong} "working studio")
                       " rather than a static exhibition\u2014a place of continuous "
                       (d/span {:class s/em-strong} "making")
                       ", "
                       (d/span {:class s/em-strong} "stacking")
                       ", "
                       (d/span {:class s/em-strong} "dismantling")
                       ", and "
                       (d/span {:class s/em-strong} "rebuilding")
                       ". The interior volume allows the work to expand "
                       (d/span {:class s/em-strong} "horizontally")
                       " and "
                       (d/span {:class s/em-strong} "vertically")
                       ", accommodating both monumental arrangements and intimate moments of material attention.")

                  (d/p {:class s/body-base}
                       "Defined by scale, clarity, and architectural restraint, the space is built for sustained "
                       (d/span {:class s/em-strong} "fabrication")
                       ", "
                       (d/span {:class s/em-strong} "assembly")
                       ", and "
                       (d/span {:class s/em-strong} "reconfiguration")
                       " across the full duration of the Biennale.")

                  (d/p {:class (s/cx s/body-closing)}
                       "Tesa 41 anchors the Pavilion physically and philosophically\u2014establishing "
                       (d/span {:class s/em-italic} "the studio as the artwork itself")
                       "."))

           ;; Media \u2014 video + gallery
           (d/div {:class "w-full flex flex-col gap-4 mt-8" :ref ref}
                  (d/div {:class "w-full aspect-[16/9]"}
                         ($ lazy-video {:playback-id "KaA1Jf2AusJZ966KPeZrdwJ5S53kboLO4E4fGLrgTLk"
                                        :aspect-ratio 1.77
                                        :should-play? is-visible?
                                        :allow-audio? false}))

                  ($ lazy-image-gallery {:enabled? is-visible?
                                         :slides tesa-41-slides})))))

;; ── The Outdoor Piece ─────────────────────────────────────────────────────

(defnc outdoor-section [{:keys []}]
  (let [ref (hooks/use-ref "outdoor-ref")
        [_visited? is-visible?] (use-intersection-observer ref)]
    (d/div {:class s/section-pb}
           ;; Eyebrow + display heading
           (d/div {:class "px-4"}
                  ($ venue-eyebrow {:text "Exterior \u00B7 Arsenale Crossing"})
                  (d/h2 {:class (s/cx venue-display "mb-8")}
                        "The Outdoor Piece"))

           ;; Prose
           (d/div {:class "px-4 space-y-6"}
                  (d/p {:class s/body-lg}
                       "The outdoor artwork will be installed at the historic crossing grounds near the "
                       (d/span {:class s/em-strong} "Piraeus Lion")
                       ", one of the most recognized landmarks marking the approach to the Arsenale. "
                       "Positioned at a critical pedestrian junction, this site receives "
                       (d/span {:class s/em-strong} "exceptionally high foot traffic")
                       " throughout the six-month exhibition period.")

                  (d/p {:class s/body-base}
                       "Visitors moving between venues, crossing the bridge into the Arsenale, and navigating the surrounding waterfront naturally converge here. "
                       "The Armenian Pavilion lies less than a ten-minute walk from this point, making the installation both a "
                       (d/span {:class s/em-strong} "threshold")
                       " and a "
                       (d/span {:class s/em-strong} "directional marker")
                       "\u2014an early encounter that orients audiences toward the Pavilion.")

                  (d/p {:class (s/cx s/body-closing)}
                       "A freestanding, architecturally scaled form\u2014functioning simultaneously as "
                       (d/span {:class s/em-italic} "sculpture, signal, and prelude")
                       "."))

           ;; Media \u2014 image gallery
           (d/div {:class "w-full flex flex-col gap-4 mt-8" :ref ref}
                  ($ lazy-image-gallery {:enabled? is-visible?
                                         :slides crossing-slides})))))

;; ── About the Arsenale Militare ───────────────────────────────────────────

(defnc arsenale-section [{:keys []}]
  (d/div {:class s/section-pb}
         ;; Eyebrow + display heading
         (d/div {:class "px-4"}
                ($ venue-eyebrow {:text "History"})
                (d/h2 {:class (s/cx venue-display "mb-8")}
                      "Arsenale Militare"))

         ;; Prose
         (d/div {:class "px-4 space-y-6"}
                (d/p {:class s/body-lg}
                     "The "
                     (d/span {:class s/em-strong} "Arsenale di Venezia")
                     " is one of the largest and oldest shipbuilding complexes in the world. "
                     "Founded in the "
                     (d/span {:class s/em-strong} "12th century")
                     ", it served as the engine of Venetian naval power for over "
                     (d/span {:class s/em-strong} "seven centuries")
                     "\u2014at its peak employing 16,000 workers and capable of producing a fully outfitted warship in a single day.")

                (d/p {:class s/body-base}
                     "Spanning roughly "
                     (d/span {:class s/em-strong} "45 hectares")
                     " of covered halls, dry docks, and open yards, the Arsenale is a monumental index of "
                     (d/span {:class s/em-italic} "industrial ingenuity")
                     ". Its massive brick walls, timber-roofed warehouses ("
                     (d/span {:class s/em-italic} "tese")
                     "), and water-accessed basins represent a proto-industrial system that anticipated modern assembly-line production by centuries.")

                (d/p {:class s/body-base}
                     "Since "
                     (d/span {:class s/em-strong} "1980")
                     ", the Arsenale has served as a primary exhibition site for the "
                     (d/span {:class s/em-strong} "Venice Biennale")
                     "\u2014its raw, monumental spaces providing a counterpoint to the refined galleries of the Giardini. "
                     "National pavilions, large-scale installations, and the central International Exhibition share this vast industrial landscape, "
                     "transforming shipbuilding halls into some of the most powerful exhibition spaces in the world.")

                (d/p {:class (s/cx s/body-closing)}
                     "Tesa 41 sits within this historic matrix\u2014one of the original covered warehouses now given over to artistic production. "
                     "The Armenia Pavilion's presence continues a tradition of nations "
                     (d/span {:class s/em-italic} "working within")
                     " the Arsenale's industrial grain, not against it."))))

;; ── Page ───────────────────────────────────────────────────────────────────

(defnc venue-view
  [_props]
  ($ page-shell
     ($ hero-section)
     ($ getting-there-section)
     ($ about-section)
     ($ studio-section)
     ($ outdoor-section)
     ($ arsenale-section)))
