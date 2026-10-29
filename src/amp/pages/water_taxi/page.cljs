(ns amp.pages.water-taxi.page
  "Water-taxi directions from Hotel Gabrielli to the Armenia Pavilion.
   A single-purpose cut of the Visit page's directions: one departure
   point, one mode of transport, one route — with an animated Mapbox
   route and instructions to hand to the driver.

   The whole page is bilingual. Italian is the default because the page is
   meant to be handed to the (Italian-speaking) driver as-is; a switch in
   the page head turns everything to English for the guest.
   Lives at /route-from-hotel-gabrielli; not linked from the main nav."
  (:require
   [amp.pages.venue.map-config :as mc]
   [amp.ui.directions :refer [hotel-gabrielli-address julda-contact luca-contact aram-contact]]
   [amp.ui.wayfinding :as wf :refer [rich]]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

;; ── Copy ───────────────────────────────────────────────────────────────────
;; Prose values are vectors of plain strings and [:em "text"] segments; see
;; `rich` below.

(def copy
  {:it {;; Hero
        :facts            [["Partenza" "Approdo Hotel Gabrielli"] ["Arrivo" "Approdo Tesa 41"]
                           ["Durata" "15–20 minuti"] ["Orari" "mar – dom, 11:00–18:30"]]
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
        :facts            [["From" "Hotel Gabrielli landing"] ["To" "Tesa 41 landing"]
                           ["Time" "15–20 minutes"] ["Hours" "Tue – Sun, 11:00–18:30"]]
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
        :route-eyebrow    "Hotel Gabrielli → Armenia Pavilion"
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
        :driver-subtitle  "Hotel Gabrielli → Armenia Pavilion · Arsenale Militare"
        :authorized       ["This water taxi is authorized to enter the military Arsenale because it is carrying guests visiting the Armenia Pavilion."
                           "The Marine Office has approved access for water taxis bringing visitors to the Armenia Pavilion. Access is coordinated by Julda: do not contact the Marine Office directly."]
        :before-title     "Before entering the Arsenale"
        :before-body      "Call Julda and say:"
        :before-quote     "“I am arriving with a visitor for the Armenia Pavilion.”"
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
                           "Continue south along Rio delle Galeazze to the Armenia Pavilion landing, beside Tesa 41."]}})

;; ── Sections ───────────────────────────────────────────────────────────────

(defnc essentials [{:keys [c]}]
  (d/section {:class "ap-sec"}
             (d/div {:class "ap-wrap grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start"}
                    (d/div {:class "flex flex-col gap-8"}
                           (d/p {:class "ap-lede m-0"} (rich (:intro c)))
                           (d/div {:class "grid sm:grid-cols-2 gap-8"}
                                  ($ wf/address {:title (:from-title c) :lines hotel-gabrielli-address})
                                  ($ wf/address {:title (:to-title c)})))
                    ($ wf/contacts {:title (:contacts-title c)
                                    :intro (:contacts-intro c)
                                    :items [[(:contact-primary c) julda-contact]
                                            [(:contact-secondary c) luca-contact]
                                            [(:contact-third c) aram-contact (:contact-third-note c)]]}))))

(defnc route [{:keys [c lang]}]
  (let [interactive? (use-touch-enabled)]
    (d/section {:class "ap-sec !pt-0"}
               (d/div {:class "ap-wrap"}
                      ($ wf/section-head {:label (:route-eyebrow c) :title (:route-title c)
                                          :lede (rich (:route-body c))})
                      ($ wf/route-map
                         {:tall? true
                          :map {:interactive? interactive? :lang lang
                                :initial-view mc/water-taxi-initial-view
                                :bounds mc/water-taxi-bounds
                                :bounds-padding {:top 48 :bottom 48 :left 32 :right 32}
                                :ant-paths mc/water-taxi-ant-paths
                                :layers mc/water-taxi-layers
                                :labels-url mc/water-taxi-data-url}
                          :legend [[:water (if (= lang :it) "Percorso del taxi" "Taxi route")]
                                   [:start "Hotel Gabrielli"]
                                   [:pav (if (= lang :it) "Padiglione Armenia" "Armenia Pavilion")]]
                          :caption (:map-caption c)})))))

(defnc driver [{:keys [c lang]}]
  (d/section {:class "ap-sec bg-paper-sunk" :id "driver"}
             (d/div {:class "ap-wrap flex flex-col gap-6 !max-w-[880px]"}
                    ($ wf/section-head {:label (:driver-eyebrow c) :title (:driver-title c)
                                        :lede (:driver-intro c)})
                    ($ wf/driver-card
                       {:lang lang
                        :c {:subtitle (:driver-subtitle c)
                            :authorized (:authorized c)
                            :before-title (:before-title c)
                            :before-body (:before-body c)
                            :before-quote (:before-quote c)
                            :contacts [[(:before-primary c) julda-contact]
                                       [(:before-secondary c) luca-contact]]
                            :before-note (:before-note c)
                            :entrance-title (:entrance-title c)
                            :entrance-name (:entrance-name c)
                            :entrance-body (:entrance-body c)
                            :entrance-warn (:entrance-warn c)
                            :steps-title (:steps-title c)
                            :steps (:steps c)}}))))

;; ── Page ───────────────────────────────────────────────────────────────────

(defnc water-taxi-view
  [_props]
  (let [[lang set-lang!] (hooks/use-state :it)
        c (get copy lang)]
    (wf/use-doc-lang lang)
    (d/div {:lang (name lang) :class "bg-paper text-ink"}
           ($ wf/page-head {:eyebrow (:eyebrow c)
                            :title (:title c)
                            :lede (rich (:lead c))
                            :facts (:facts c)
                            :aside ($ wf/lang-switch {:lang lang :on-change set-lang!})})
           ($ essentials {:c c})
           ($ route {:c c :lang lang})
           ($ driver {:c c :lang lang}))))
