(ns amp.pages.water-taxi.page
  "Water-taxi directions from Hotel Gabrielli to the Armenian Pavilion.
   A single-purpose cut of the Visit page's directions: one departure
   point, one mode of transport, one route — with an animated Mapbox
   route and instructions to hand to the driver.

   The whole page is bilingual. Italian is the default because the page is
   meant to be handed to the (Italian-speaking) driver as-is; a toggle at
   the top switches everything to English for the guest.
   Lives at /route-from-hotel-gabrielli; not linked from the main nav."
  (:require
   [amp.pages.venue.map-config :as mc]
   [amp.ui.map :refer [mapbox-map]]
   [amp.ui.page-shell :refer [page-shell]]
   [amp.ui.section-header :refer [section-eyebrow section-display]]
   [amp.ui.directions :refer [hotel-gabrielli-address julda-contact luca-contact
                              aram-contact phone-link mini-heading address-block
                              callout numbered-steps opening-hours lang-toggle]]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

;; ── Copy ───────────────────────────────────────────────────────────────────
;; Prose values are vectors of plain strings and [:em "text"] segments; see
;; `rich` below.

(def copy
  {:it {;; Hero
        :eyebrow          "Hotel Gabrielli → Arsenale Militare"
        :title            "In taxi acqueo"
        :lead             ["Dall’approdo dell’" [:em "Hotel Gabrielli"]
                           " in Riva degli Schiavoni direttamente all’approdo del padiglione, all’interno dell’"
                           [:em "Arsenale Militare"]
                           ". Il tragitto risale i canali di Castello verso nord, esce nella Laguna Nord e rientra dal "
                           [:em "Rio delle Galeazze"] ": circa " [:em "15–20 minuti"] " di navigazione."]
        :intro            ["Chiedete all’hotel di prenotare il taxi e mostrate questa pagina al conducente. L’accesso all’Arsenale è coordinato da "
                           [:em "Julda"] ": il conducente deve chiamare prima di entrare."]
        ;; Essentials
        :from-title       "Partenza"
        :to-title         "Arrivo"
        :contacts-title   "Contatti"
        :contacts-intro   "L’accesso via acqua al padiglione è coordinato da Julda. In caso di difficoltà, chiamare in quest’ordine:"
        :contact-primary  "Contatto principale · Julda"
        :contact-secondary "Contatto secondario · Luca"
        :contact-third    "Terzo contatto · Aram"
        :contact-third-note "Parla solo inglese."
        ;; Route map
        :route-eyebrow    "Hotel Gabrielli → Padiglione Armenia"
        :route-title      "Il percorso"
        :route-body       ["Verso ovest lungo il Bacino, poi verso nord lungo "
                           [:em "Rio della Pietà"] ", " [:em "Rio di Sant’Antonin"] " e " [:em "Rio di Santa Giustina"]
                           ". Nella Laguna Nord il taxi svolta a est, supera la fermata Celestia e rientra nell’Arsenale dal "
                           [:em "Rio delle Galeazze"] " — l’unico ingresso consentito — fino all’approdo accanto alla "
                           [:em "Tesa 41"] "."]
        :map-caption      "Punto blu: approdo dell’Hotel Gabrielli · Punto rosso: approdo del padiglione · Linea animata: il percorso del taxi acqueo"
        ;; Driver instructions
        :driver-eyebrow   "Per il conducente"
        :driver-title     "Istruzioni per il conducente"
        :driver-intro     "Mostrate questa sezione al conducente del taxi."
        :driver-heading   "Istruzioni per il taxi acqueo"
        :driver-subtitle  "Hotel Gabrielli → Padiglione Armenia · Arsenale Militare"
        :authorized       ["Questo taxi è autorizzato a entrare nell’Arsenale Militare perché trasporta ospiti diretti al Padiglione Armenia."
                           "L’Ufficio della Marina ha autorizzato l’accesso dei taxi acquei che accompagnano visitatori al Padiglione Armenia. L’accesso è coordinato da Julda: non contattare direttamente l’Ufficio della Marina."]
        :before-title     "Prima di entrare nell’Arsenale"
        :before-body      "Chiamare Julda e comunicare:"
        :before-quote     "«Sto arrivando con un visitatore diretto al Padiglione Armenia.»"
        :before-primary   "Julda · contatto principale"
        :before-secondary "Luca · contatto secondario"
        :before-note      "Se Julda non risponde, chiamare Luca."
        :entrance-title   "Unico ingresso consentito"
        :entrance-lead    "Esiste un solo ingresso per i taxi acquei:"
        :entrance-name    "Galeazze – lato Laguna Nord – Rio delle Galeazze"
        :entrance-body    "Arrivare dalla Laguna Nord ed entrare attraverso il Rio delle Galeazze."
        :entrance-warn    "NON è consentito utilizzare nessun altro ingresso dell’Arsenale."
        :steps-title      "Percorso"
        :steps            ["Partire dall’approdo dell’Hotel Gabrielli in Riva degli Schiavoni e dirigersi verso ovest lungo il Bacino."
                           "Imboccare il Rio della Pietà, accanto alla Chiesa della Pietà, e risalirlo verso nord fino al Rio di Sant’Antonin."
                           "Proseguire verso nord lungo il Rio di Santa Giustina fino a uscire nella Laguna Nord."
                           "Svoltare a est e costeggiare la riva oltre la fermata Celestia fino all’Arsenale."
                           "Entrare dall’unico ingresso consentito: Galeazze – Rio delle Galeazze."
                           "Proseguire verso sud lungo il Rio delle Galeazze fino all’approdo del Padiglione Armenia, accanto alla Tesa 41."]}

   :en {;; Hero
        :eyebrow          "Hotel Gabrielli → Arsenale Militare"
        :title            "By Water Taxi"
        :lead             ["From the " [:em "Hotel Gabrielli"]
                           " landing on Riva degli Schiavoni straight to the pavilion’s own landing inside the "
                           [:em "Arsenale Militare"]
                           ". The ride threads north through the canals of Castello, out into the North Lagoon and back in through "
                           [:em "Rio delle Galeazze"] " — roughly " [:em "15 to 20 minutes"] " on the water."]
        :intro            ["Ask the hotel to book the taxi, then show this page to the driver. Access to the Arsenale is coordinated by "
                           [:em "Julda"] ": the driver must call before entering."]
        ;; Essentials
        :from-title       "From"
        :to-title         "To"
        :contacts-title   "Contacts"
        :contacts-intro   "All water access to the pavilion is coordinated by Julda. If you run into any trouble, call in this order:"
        :contact-primary  "Primary contact · Julda"
        :contact-secondary "Secondary contact · Luca"
        :contact-third    "Third contact · Aram"
        :contact-third-note "English only."
        ;; Route map
        :route-eyebrow    "Hotel Gabrielli → Armenian Pavilion"
        :route-title      "The Route"
        :route-body       ["West along the Bacino, then north through "
                           [:em "Rio della Pietà"] ", " [:em "Rio di Sant’Antonin"] " and " [:em "Rio di Santa Giustina"]
                           ". Out in the North Lagoon the taxi turns east past the Celestia stop, then south into the Arsenale through "
                           [:em "Rio delle Galeazze"] " — the only permitted entrance — to the landing beside "
                           [:em "Tesa 41"] "."]
        :map-caption      "Blue dot: Hotel Gabrielli landing · Red dot: pavilion landing · Animated line: the water taxi route"
        ;; Driver instructions
        :driver-eyebrow   "For the driver"
        :driver-title     "Driver Instructions"
        :driver-intro     "Show this section to your driver."
        :driver-heading   "Water Taxi Instructions"
        :driver-subtitle  "Hotel Gabrielli → Armenian Pavilion · Arsenale Militare"
        :authorized       ["This water taxi is authorized to enter the military Arsenale because it is carrying guests visiting the Armenian Pavilion."
                           "The Marine Office has approved access for water taxis bringing visitors to the Armenian Pavilion. Access is coordinated by Julda: do not contact the Marine Office directly."]
        :before-title     "Before entering the Arsenale"
        :before-body      "Call Julda and say:"
        :before-quote     "“I am arriving with a visitor for the Armenian Pavilion.”"
        :before-primary   "Julda · primary contact"
        :before-secondary "Luca · secondary contact"
        :before-note      "If Julda does not answer, call Luca."
        :entrance-title   "Only permitted entrance"
        :entrance-lead    "There is only one entrance for water taxis:"
        :entrance-name    "Galeazze – North Lagoon side – Rio delle Galeazze"
        :entrance-body    "Approach from the north side of the lagoon and enter through Rio delle Galeazze."
        :entrance-warn    "Do not use any other entrance to the Arsenale."
        :steps-title      "Route"
        :steps            ["Depart from the Hotel Gabrielli landing on Riva degli Schiavoni and head west along the Bacino."
                           "Enter Rio della Pietà, beside the Chiesa della Pietà, and follow it north into Rio di Sant’Antonin."
                           "Continue north along Rio di Santa Giustina and exit into the North Lagoon."
                           "Turn east and follow the shore past the Celestia stop to the Arsenale."
                           "Enter through the only permitted entrance: Galeazze – Rio delle Galeazze."
                           "Continue south along Rio delle Galeazze to the Armenian Pavilion landing, beside Tesa 41."]}})

;; ── Small pieces ───────────────────────────────────────────────────────────

(defn rich
  "Render a vector of plain strings and [:em \"text\"] segments as inline
   prose; :em segments get the site's strong-emphasis treatment."
  [segments]
  (map-indexed (fn [i seg]
                 (if (vector? seg)
                   (d/span {:key i :class s/em-strong} (second seg))
                   seg))
               segments))

(defnc contact-card
  [{:keys [label note contact]}]
  (d/div
   (d/p {:class (s/cx s/label-muted "mb-1")} label)
   ($ phone-link {& contact})
   (when note
     (d/p {:class (s/cx s/body-sm "mt-1 text-left")} note))))

;; ── Hero (with the page-wide language toggle) ──────────────────────────────

(defnc hero-section [{:keys [c lang on-lang]}]
  (d/div {:class "pt-10 pb-6 px-4"}
         ($ lang-toggle {:lang lang :on-change on-lang})
         ($ section-eyebrow {:text (:eyebrow c)})
         (d/h1 {:class (s/cx section-display "mb-8")} (:title c))
         (d/p {:class (s/cx s/body-lg "mb-4")} (rich (:lead c)))
         (d/p {:class s/body-base} (rich (:intro c)))))

;; ── Essentials — from / to / contacts ──────────────────────────────────────

(defnc essentials-section [{:keys [c]}]
  (d/div {:class (s/cx s/section-pb "px-4")}
         (d/div {:class "grid grid-cols-1 sm:grid-cols-2 gap-8"}
                ($ address-block {:title (:from-title c) :lines hotel-gabrielli-address})
                ($ address-block {:title (:to-title c)}))
         (d/div {:class "mt-8"}
                ($ mini-heading {:text (:contacts-title c)})
                (d/p {:class (s/cx s/body-base "mb-4 text-left")} (:contacts-intro c))
                (d/div {:class "grid grid-cols-1 sm:grid-cols-3 gap-6"}
                       ($ contact-card {:label (:contact-primary c) :contact julda-contact})
                       ($ contact-card {:label (:contact-secondary c) :contact luca-contact})
                       ($ contact-card {:label   (:contact-third c)
                                        :contact aram-contact
                                        :note    (:contact-third-note c)})))))

;; ── Route map ──────────────────────────────────────────────────────────────

(defnc route-section [{:keys [c]}]
  (let [is-desktop? (use-touch-enabled)]
    (d/div {:class s/section-pb}
           (d/div {:class "px-4"}
                  ($ section-eyebrow {:text (:route-eyebrow c)})
                  (d/h2 {:class (s/cx section-display "mb-8")} (:route-title c))
                  (d/p {:class (s/cx s/body-base "mb-8")} (rich (:route-body c))))

           ($ mapbox-map
              {:dev false
               :interactive? is-desktop?
               :initial-view mc/water-taxi-initial-view
               :bounds       mc/water-taxi-bounds
               :bounds-padding {:top 36 :bottom 36 :left 24 :right 24}
               :ant-paths    mc/water-taxi-ant-paths
               :layers       mc/water-taxi-layers})
           (d/p {:class (s/cx s/font-ui s/text-sm s/em-italic s/text-muted "mt-4 px-4")}
                (:map-caption c)))))

;; ── Driver instructions ────────────────────────────────────────────────────

(defnc driver-section [{:keys [c]}]
  (d/div {:class (s/cx s/section-pb "px-4")}
         ($ section-eyebrow {:text (:driver-eyebrow c)})
         (d/h2 {:class (s/cx section-display "mb-8")} (:driver-title c))
         (d/p {:class (s/cx s/body-base "mb-8")} (:driver-intro c))

         ;; Header
         (d/h3 {:class (s/cx s/heading-section "mb-1")} (:driver-heading c))
         (d/p {:class (s/cx s/label-muted "mb-6")} (:driver-subtitle c))

         ;; Authorization statement
         (d/div {:class "space-y-3 mb-8"}
                (d/p {:class (s/cx s/body-base s/em-strong)} (first (:authorized c)))
                (d/p {:class s/body-base} (second (:authorized c))))

         ;; Before entering — call Julda, then Luca
         (d/div {:class "mb-8"}
                ($ callout
                   ($ mini-heading {:text (:before-title c) :warn? true})
                   (d/p {:class (s/cx s/body-base "mb-2")} (:before-body c))
                   (d/p {:class (s/cx s/body-closing "mb-4")} (:before-quote c))
                   (d/div {:class "grid grid-cols-1 sm:grid-cols-2 gap-4"}
                          (d/div
                           (d/p {:class (s/cx s/label-muted "mb-1")} (:before-primary c))
                           ($ phone-link {& julda-contact}))
                          (d/div
                           (d/p {:class (s/cx s/label-muted "mb-1")} (:before-secondary c))
                           ($ phone-link {& luca-contact})))
                   (d/p {:class (s/cx s/body-sm "mt-3 text-left")} (:before-note c))))

         ;; Only permitted entrance
         (d/div {:class "mb-8"}
                ($ callout
                   ($ mini-heading {:text (:entrance-title c) :warn? true})
                   (d/p {:class (s/cx s/body-base "mb-2")} (:entrance-lead c))
                   (d/p {:class (s/cx s/font-display s/weight-semibold s/text-lg s/text-primary "mb-3")}
                        (:entrance-name c))
                   (d/p {:class (s/cx s/body-base "mb-2")} (:entrance-body c))
                   (d/p {:class (s/cx s/font-body s/text-base s/weight-medium s/text-danger "leading-relaxed")}
                        (:entrance-warn c))))

         ;; Route, step by step
         (d/div {:class "mb-8"}
                ($ mini-heading {:text (:steps-title c)})
                ($ numbered-steps {:steps (:steps c)}))

         ;; From / to
         (d/div {:class "grid grid-cols-1 sm:grid-cols-2 gap-8"}
                ($ address-block {:title (:from-title c) :lines hotel-gabrielli-address})
                ($ address-block {:title (:to-title c)}))))

;; ── Page ───────────────────────────────────────────────────────────────────

(defnc water-taxi-view
  [_props]
  (let [[lang set-lang] (hooks/use-state :it)
        c (get copy lang)]
    ($ page-shell
       (d/div {:lang (name lang)}
              ($ hero-section {:c c :lang lang :on-lang set-lang})
              ($ opening-hours {:lang lang})
              ($ essentials-section {:c c})
              ($ route-section {:c c})
              ($ driver-section {:c c})))))
