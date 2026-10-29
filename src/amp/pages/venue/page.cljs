(ns amp.pages.venue.page
  "Visitor Guide — wayfinding, venue history, and space details.
   Full dedicated page for the Armenia Pavilion location at the
   Biennale Arte 2026."
  (:require
   [amp.pages.venue.map-config :as mc]
   [amp.ui.lazy-map :refer [mapbox-map]]
   [amp.ui.image-gallery :refer [lazy-image-gallery]]
   [amp.ui.section-header :refer [section-eyebrow]]
   [amp.ui.directions :refer [address-block
                              julda-contact luca-contact]]
   [amp.ui.temporary-closure :refer [closure-notice]]
   [amp.hooks.use-intersection-observer :refer [use-intersection-observer]]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.utils.lazy-loading :refer-macros [lazy-component]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$ <>]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def lazy-video (lazy-component amp.ui.video-background/video-background))

;; Section headings on this page (design system: display L).
(def venue-display "ap-display-l")

;; Eyebrow above section headings (amp.ui.section-header).
(def venue-eyebrow section-eyebrow)

;; ── Gallery slides ─────────────────────────────────────────────────────────

(def tesa-41-slides
  [{:img-src "https://media.armenianpavilion.org/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2011.12.05.tif"
    :aspect-ratio 1.34
    :active? true}
   {:img-src "https://media.armenianpavilion.org/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.08.tif"
    :aspect-ratio 1.34
    :active? true}
   {:img-src "https://media.armenianpavilion.org/tesa_41/weavy-Gemini%203%20(Nano%20Banana%20Pro)-2025-12-22%20at%2010.59.18.tif"
    :aspect-ratio 1.34
    :active? true}])

(def crossing-slides
  [{:img-src "https://media.armenianpavilion.org/big_red_walkway/5.jpg"
    :aspect-ratio 1.82
    :caption "Crossing at the Arsenale"
    :credit "Render 2026"}
   {:img-src "https://media.armenianpavilion.org/big_red_walkway/1.jpg"
    :aspect-ratio 1.82
    :caption "Crossing at the Arsenale"
    :credit "Render 2026"}])

;; ── Directions — shared data ───────────────────────────────────────────────

;; Bilingual copy for the water-taxi instructions. Italian is the default
;; since it is meant to be shown directly to the driver; English is opt-in.
(def water-taxi-copy
  {:en {:title        "Water Taxi Instructions"
        :subtitle     "Authorized access to the Arsenale – Armenia Pavilion"
        :authorized   ["This water taxi is authorized to enter the military Arsenale area because it is carrying guests visiting the Armenia Pavilion."
                       "The Marine Office has approved access for water taxis bringing visitors to the Armenia Pavilion. Access is coordinated by Julda: do not contact the Marine Office directly."]
        :before-title "Before entering the Arsenale"
        :before-body  "Call Julda and say:"
        :before-quote "“I am arriving with a visitor for the Armenia Pavilion.”"
        :contacts     [["Julda · primary contact" :julda] ["Luca · secondary contact" :luca]]
        :before-note  "If Julda does not answer, call Luca."
        :entrance-title "Only permitted entrance"
        :entrance-lead  "There is only one entrance for water taxis:"
        :entrance-name  "Galeazze – North Lagoon side – Rio delle Galeazze"
        :entrance-body  "The taxi must approach from the north side of the lagoon and enter through Rio delle Galeazze."
        :entrance-warn  "Do not use any other entrance to the Arsenale."
        :route-title  "Route"
        :route-steps  ["Approach from the north side of the lagoon."
                       "Enter through the only permitted taxi entrance: Galeazze – Rio delle Galeazze."
                       "Continue south along Rio delle Galeazze, following the route shown on the map."
                       "Proceed to the Armenia Pavilion landing."]
        :map-caption  "Water taxi route — enter from the North Lagoon via Rio delle Galeazze and continue south to the pavilion drop-off point"
        :address-title "Address"}
   :it {:title        "Istruzioni per il taxi acqueo"
        :subtitle     "Accesso autorizzato all’Arsenale – Padiglione Armenia"
        :authorized   ["Questo taxi è autorizzato a entrare nell’area dell’Arsenale Militare perché trasporta ospiti diretti al Padiglione Armenia."
                       "L’Ufficio della Marina ha autorizzato l’accesso dei taxi acquei che accompagnano visitatori al Padiglione Armenia. L’accesso è coordinato da Julda: non contattare direttamente l’Ufficio della Marina."]
        :before-title "Prima di entrare nell’Arsenale"
        :before-body  "Chiamare Julda e comunicare:"
        :before-quote "«Sto arrivando con un visitatore diretto al Padiglione Armenia.»"
        :contacts     [["Julda · contatto principale" :julda] ["Luca · contatto secondario" :luca]]
        :before-note  "Se Julda non risponde, chiamare Luca."
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

;; ── Header ─────────────────────────────────────────────────────────────────

(defnc visit-head []
  (<>
   (d/section {:class "ap-vhead"}
              (d/div {:class "ap-wrap ap-vhead__grid"}
                     (d/div {:class "flex flex-col gap-5"}
                            (d/p {:class "ap-label m-0 text-yellow"} "Visit · Venice · Arsenale Militare")
                            (d/h1 {:class "ap-display-xl"} "Getting to Tesa 41")
                            (d/p {:class "ap-lede max-w-[36ch]"}
                                 "The pavilion sits inside the Arsenale, about an eight-minute walk from the crossing at the Piraeus Lion. "
                                 "Guests by water taxi enter from the North Lagoon."))
                     (d/dl {:class "ap-keyfacts"}
                           (for [[k v] [["Dates" "9 May – 22 Nov 2026"]
                                        ["Hours" "Tue – Sun, 11:00–18:30"]
                                        ["Hall" "Tesa 41"]
                                        ["On foot" "≈ 8 min from the Lion"]]]
                             (d/div {:key k} (d/dt k) (d/dd v))))))
   (d/div {:class "ap-hero__strip" :aria-hidden true}
          (for [i (range 9)] (d/i {:key i})))))

;; ── Map guide ──────────────────────────────────────────────────────────────

(def ^:private modes
  {:walk  {:no "01" :title "On foot from the Piraeus Lion" :meta "About 8 minutes through the Arsenale"}
   :water {:no "02" :title "By water taxi" :meta "North Lagoon → Rio delle Galeazze → pavilion landing"}})

(defnc walk-steps []
  (<>
   (d/p {:class "ap-label ap-muted m-0"} "On foot · about 8 min")
   (d/ol {:class "ap-steps"}
         (d/li {:class "ap-step"}
               (d/span {:class "ap-step__dist"} "START")
               (d/h3 {:class "ap-step__title"} "The Piraeus Lion")
               (d/p {:class "ap-step__body"} "Begin at the crossing by the lion, the landmark at the Arsenale approach."))
         (d/li {:class "ap-step"}
               (d/span {:class "ap-step__dist"} "ROUTE")
               (d/h3 {:class "ap-step__title"} "Follow the yellow line")
               (d/p {:class "ap-step__body"} "The highlighted route on the map leads through the Arsenale to Tesa 41."))
         (d/li {:class "ap-step ap-step--end"}
               (d/span {:class "ap-step__dist"} "≈ 8 MIN")
               (d/h3 {:class "ap-step__title"} "Tesa 41")
               (d/p {:class "ap-step__body"} "Armenia Pavilion, Arsenale Militare.")))))

(defnc water-steps []
  (let [steps (get-in water-taxi-copy [:en :route-steps])
        heads ["North Lagoon" "Only entrance" "South" "Landing"]]
    (<>
     (d/p {:class "ap-label ap-muted m-0"} "Water taxi · authorised access")
     (d/ol {:class "ap-steps ap-steps--water"}
           (map-indexed
            (fn [i step]
              (d/li {:key i :class (str "ap-step" (when (= i (dec (count steps))) " ap-step--end"))}
                    (d/span {:class "ap-step__dist"} (.toUpperCase (nth heads i)))
                    (d/p {:class "ap-step__body"} step)))
            steps))
     (d/a {:class "ap-link ap-body-s self-start" :href "/route-from-hotel-gabrielli"}
          "Full route from Hotel Gabrielli"))))

(defnc map-guide []
  (let [[mode set-mode!] (hooks/use-state :walk)
        is-desktop? (use-touch-enabled)
        {:keys [no title meta]} (modes mode)]
    (d/section {:class "ap-sec"}
               (d/div {:class "ap-wrap ap-guide"}
                      (d/section {:class "ap-map ap-map--stack" :aria-labelledby "guide-title"}
                                 (d/div {:class "ap-map__head"}
                                        (d/p {:class "ap-label ap-muted m-0"} (str "Guide · " no))
                                        (d/h2 {:class "ap-h2" :id "guide-title"} title)
                                        (d/p {:class "ap-caption m-0"} meta))
                                 (d/div {:class "ap-map__modes" :role "group" :aria-label "Route"}
                                        (d/button {:aria-pressed (= mode :walk) :on-click #(set-mode! :walk)}
                                                  (d/i {:class "bg-yellow outline outline-1 outline-ink"}) "On foot")
                                        (d/button {:aria-pressed (= mode :water) :on-click #(set-mode! :water)}
                                                  (d/i {:class "bg-blue"}) "Water taxi"))
                                 (d/div {:class "ap-map__live"}
                                        (if (= mode :walk)
                                          ($ mapbox-map {:key "walk"
                                                         :class "!h-full !shadow-none"
                                                         :interactive? is-desktop?
                                                         :initial-view mc/initial-view
                                                         :ant-paths mc/ant-paths
                                                         :layers mc/layers})
                                          ($ mapbox-map {:key "water"
                                                         :class "!h-full !shadow-none"
                                                         :interactive? is-desktop?
                                                         :initial-view mc/water-taxi-initial-view
                                                         :bounds mc/water-taxi-bounds
                                                         :ant-paths mc/water-taxi-ant-paths
                                                         :layers mc/water-taxi-layers})))
                                 (d/div {:class "ap-legend"}
                                        (d/span (d/i {:class "walk"}) "Walking route")
                                        (d/span (d/i {:class "water"}) "Water taxi")
                                        (d/span (d/i {:class "pav"}) "Armenia Pavilion"))
                                 (d/div {:class "ap-map__actions"}
                                        (d/a {:class "ap-btn" :href mc/maps-url :target "_blank" :rel "noopener"}
                                             "Open in Maps")
                                        (d/a {:class "ap-btn ap-btn--ghost" :href "#taxi"} "Driver card")))
                      (d/div {:class "flex flex-col gap-6"}
                             (if (= mode :walk) ($ walk-steps) ($ water-steps))
                             ($ address-block {:title "Address"}))))))

;; ── Water taxi driver card ────────────────────────────────────────────────

(def ^:private water-contacts {:julda julda-contact :luca luca-contact})

(defnc taxi-card []
  (let [[lang set-lang!] (hooks/use-state :it)
        c (get water-taxi-copy lang)]
    (d/section {:class "ap-sec bg-paper-sunk" :id "taxi"}
               (d/div {:class "ap-wrap flex flex-col gap-6 !max-w-[880px]"}
                      (d/div {:class "ap-head-row !m-0"}
                             (d/div
                              (d/p {:class "ap-label ap-muted m-0 mb-1"}
                                   (if (= lang :it) "Mostrare al conducente" "Show this to your driver"))
                              (d/h2 {:class "ap-h1"} (:title c)))
                             (d/div {:class "ap-lang" :role "group" :aria-label "Language"}
                                    (for [[k label] [[:it "IT"] [:en "EN"]]]
                                      (d/button {:key label :aria-pressed (= k lang) :on-click #(set-lang! k)}
                                                label))))
                      (d/div {:class "ap-taxicard" :lang (name lang)}
                             (d/p {:class "ap-label m-0 text-blue-text"} (:subtitle c))
                             (for [para (:authorized c)]
                               (d/p {:key para :class "ap-body m-0"} para))
                             (d/div {:class "ap-callout ap-callout--blue"}
                                    (d/span {:class "ap-label"} (:before-title c))
                                    (d/span {:class "ap-body-s"} (:before-body c))
                                    (d/span (:before-quote c))
                                    (d/div {:class "grid sm:grid-cols-2 gap-x-6 gap-y-1 mt-1"}
                                           (for [[label who] (:contacts c)
                                                 :let [{:keys [tel display]} (water-contacts who)]]
                                             (d/a {:key label :class "ap-telrow" :href (str "tel:" tel)}
                                                  (d/span {:class "ap-label"} label)
                                                  (d/span {:class "ap-telrow__num"} display))))
                                    (d/span {:class "ap-caption !text-on-blue"} (:before-note c)))
                             (d/div {:class "flex flex-col gap-1.5"}
                                    (d/p {:class "ap-label ap-muted m-0"} (:entrance-title c))
                                    (d/p {:class "ap-h2 m-0"} (:entrance-name c))
                                    (d/p {:class "ap-body-s m-0"} (:entrance-body c)))
                             (d/p {:class "ap-taxicard__warn"} (:entrance-warn c))
                             (d/figure {:class "ap-figure"}
                                       (d/div {:class "ap-map__live" :role "img"
                                               :aria-label "Map of the Arsenale showing the only permitted water taxi entrance at Rio delle Galeazze and the route south to the Armenia Pavilion landing"}
                                              ($ mapbox-map {:class "!h-full"
                                                             :interactive? false
                                                             :initial-view mc/water-taxi-initial-view
                                                             :bounds mc/galeazze-bounds
                                                             :ant-paths mc/water-taxi-ant-paths
                                                             :layers mc/water-taxi-layers}))
                                       (d/figcaption {:class "ap-caption"} (:map-caption c))))))))

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
                       "The Armenia Pavilion lies less than a ten-minute walk from this point, making the installation both a "
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
                     (d/span {:class s/em-strong} "La Biennale di Venezia")
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
  (d/div
   ($ visit-head)
   (d/div {:class "ap-wrap pt-8"} ($ closure-notice))
   ($ map-guide)
   ($ taxi-card)
   (d/div {:class (s/cx s/content-column-container "pt-16 lg:pt-24")}
          (d/div {:class (s/cx "flex flex-col" s/content-column)}
                 ($ about-section)
                 ($ studio-section)
                 ($ outdoor-section)
                 ($ arsenale-section)))))
