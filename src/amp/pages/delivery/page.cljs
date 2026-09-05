(ns amp.pages.delivery.page
  "Istruzioni per le consegne — Italian-language delivery instructions for
   couriers and suppliers bringing materials to the Armenia Pavilion
   (Tesa 41, Arsenale Militare). Two options: via acqua (boat) and a piedi
   (on foot). Lives at /delivery; not linked from the main nav."
  (:require
   [amp.pages.venue.map-config :as mc]
   [amp.ui.map :refer [mapbox-map]]
   [amp.ui.page-shell :refer [page-shell]]
   [amp.ui.section-header :refer [section-eyebrow section-display]]
   [amp.ui.directions :refer [pavilion-address marine-office-phone water-taxi-map-src
                              phone-link map-button sub-heading mini-heading
                              address-block callout numbered-steps]]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.lib.defnc :refer [defnc]]
   [amp.styles :as s]
   [helix.core :refer [$]]
   [helix.dom :as d]))

;; ── Data ───────────────────────────────────────────────────────────────────

(def secondary-contact
  {:name "Aram" :display "+39 344 5697130" :tel "+393445697130"})

(def recipient-lines
  ["Padiglione Armenia"
   "Tesa 41 – Arsenale Militare"])

(def water-steps
  ["Arrivare dal lato della Laguna Nord."
   "Prima di entrare, chiamare l’Ufficio della Marina."
   "Entrare dall’unico ingresso consentito: Galeazze – Rio delle Galeazze."
   "Proseguire verso sud lungo il Rio delle Galeazze, seguendo il percorso indicato sulla mappa."
   "Raggiungere l’approdo del Padiglione Armenia e scaricare al punto indicato (“Drop-off point”)."])

(def foot-steps
  ["Raggiungere l’ingresso dell’Arsenale Militare alla Celestia, accanto alla Chiesa di Cristo Re alla Celestia (Fondamenta Case Nuove)."
   "All’ingresso, comunicare che si tratta di una consegna per il Padiglione Armenia – Tesa 41."
   "Seguire il percorso evidenziato sulla mappa all’interno dell’Arsenale."
   "La Tesa 41 si raggiunge in pochi minuti a piedi."])

(def checklist
  [["Etichettare ogni collo"
    "Indicare chiaramente su ogni collo: “Padiglione Armenia – Tesa 41”."]
   ["Concordare giorno e orario"
    "Avvisare in anticipo per fissare la consegna, così che qualcuno sia presente per ricevere il materiale."]
   ["Scegliere il percorso giusto"
    "A piedi per pacchi trasportabili a mano o con carrello; via acqua per carichi voluminosi o pesanti."]
   ["Via acqua: chiamare prima di entrare"
    "L’Ufficio della Marina deve essere avvisato prima dell’ingresso nel Rio delle Galeazze."]])

;; ── Small pieces ───────────────────────────────────────────────────────────

(defnc contacts-block
  "Marine Office (water access) + secondary contact (English only)."
  []
  (d/div {:class "grid grid-cols-1 sm:grid-cols-2 gap-6"}
         (d/div
          (d/p {:class (s/cx s/label-muted "mb-1")} "Ufficio della Marina · accesso via acqua")
          ($ phone-link {& marine-office-phone}))
         (d/div
          (d/p {:class (s/cx s/label-muted "mb-1")}
               (str "Contatto secondario · " (:name secondary-contact)))
          ($ phone-link {& secondary-contact})
          (d/p {:class (s/cx s/body-sm "mt-1 text-left")}
               "Parla solo inglese."))))

(defnc option-card
  "Compact summary card used in the “Quale opzione” comparison."
  [{:keys [number title tagline items]}]
  (d/div {:class (s/cx "flex flex-col gap-4 p-5 border" s/border-subtle s/bg-surface-alt)}
         (d/div
          (d/p {:class (s/cx s/label-muted "mb-1")} (str "Opzione " number))
          (d/h3 {:class (s/cx s/heading-section)} title)
          (d/p {:class (s/cx s/body-sm "mt-2 text-left")} tagline))
         (d/ul {:class "space-y-2"}
               (for [item items]
                 (d/li {:key item :class "flex gap-3"}
                       (d/span {:class (s/cx s/text-accent "shrink-0")} "•")
                       (d/span {:class (s/cx s/body-base "text-left")} item))))))

;; ── Hero ───────────────────────────────────────────────────────────────────

(defnc hero-section []
  (d/div {:class "pt-10 pb-6 px-4"}
         ($ section-eyebrow {:text "Venezia · Arsenale Militare"})
         (d/h1 {:class (s/cx section-display "mb-8")}
               "Consegne al Padiglione")
         (d/p {:class (s/cx s/body-lg "mb-4")}
              "Istruzioni per "
              (d/span {:class s/em-strong} "corrieri, fornitori e trasportatori")
              ". Il Padiglione Armenia si trova all’interno dell’"
              (d/span {:class s/em-strong} "Arsenale Militare di Venezia")
              ", nella "
              (d/span {:class s/em-strong} "Tesa 41")
              ". Le consegne possono arrivare "
              (d/span {:class s/em-strong} "via acqua")
              " oppure "
              (d/span {:class s/em-strong} "a piedi")
              ": in questa pagina trovate il percorso, la procedura e i recapiti utili.")))

;; ── Key facts ──────────────────────────────────────────────────────────────

(defnc facts-section []
  (d/div {:class (s/cx s/section-pb "px-4")}
         (d/div {:class "grid grid-cols-1 sm:grid-cols-2 gap-8"}
                ($ address-block {:title "Destinatario" :lines recipient-lines})
                ($ address-block {:title "Indirizzo"}))
         (d/div {:class "mt-8"}
                ($ mini-heading {:text "Contatti"})
                (d/p {:class (s/cx s/body-base "mb-4 text-left")}
                     "Per concordare giorno e orario, o in caso di difficoltà:")
                ($ contacts-block))))

;; ── Which option ───────────────────────────────────────────────────────────

(defnc options-section []
  (d/div {:class s/section-pb}
         (d/div {:class "px-4"}
                ($ section-eyebrow {:text "Quale percorso"})
                (d/h2 {:class (s/cx section-display "mb-8")}
                      "Due modi per arrivare"))
         (d/div {:class "px-4 grid grid-cols-1 sm:grid-cols-2 gap-4"}
                ($ option-card {:number 1
                                :title "A piedi"
                                :tagline "Il modo più comune: per pacchi e materiali trasportabili a mano o con carrello."
                                :items ["Ingresso dell’Arsenale Militare alla Celestia"
                                        "Pochi minuti a piedi fino alla Tesa 41"
                                        "Percorso segnato sulla mappa"]})
                ($ option-card {:number 2
                                :title "Via acqua"
                                :tagline "Consigliata per carichi voluminosi, pesanti o su pallet. Si scarica direttamente all’approdo del padiglione."
                                :items ["Accesso dalla Laguna Nord"
                                        "Unico ingresso: Rio delle Galeazze"
                                        "Chiamata obbligatoria all’Ufficio della Marina"]}))))

;; ── Option 2 — via acqua ───────────────────────────────────────────────────

(defnc water-section []
  (d/div {:class s/section-pb}
         (d/div {:class "px-4"}
                ($ section-eyebrow {:text "Opzione 2 · Via acqua"})
                (d/h2 {:class (s/cx section-display "mb-8")}
                      "Consegna in barca")

                (d/p {:class (s/cx s/body-lg "mb-8")}
                     "Le imbarcazioni che trasportano materiali destinati al Padiglione Armenia possono entrare nell’area dell’"
                     (d/span {:class s/em-strong} "Arsenale Militare")
                     ". L’Ufficio della Marina è informato: è però "
                     (d/span {:class s/em-strong} "obbligatorio")
                     " seguire la procedura qui sotto.")

                ;; Prima di entrare
                (d/div {:class "mb-8"}
                       ($ callout
                          ($ mini-heading {:text "Prima di entrare" :warn? true})
                          (d/p {:class (s/cx s/body-base "mb-2 text-left")}
                               "Chiamare l’Ufficio della Marina e comunicare:")
                          (d/p {:class (s/cx s/body-closing "mb-4 text-left")}
                               "«Sto arrivando con una consegna per il Padiglione Armenia.»")
                          (d/p {:class (s/cx s/label-muted "mb-1")} "Ufficio della Marina")
                          ($ phone-link {& marine-office-phone})))

                ;; Unico ingresso
                (d/div {:class "mb-8"}
                       ($ callout
                          ($ mini-heading {:text "Unico ingresso consentito" :warn? true})
                          (d/p {:class (s/cx s/body-base "mb-2 text-left")}
                               "Esiste un solo ingresso per le imbarcazioni:")
                          (d/p {:class (s/cx s/font-display s/weight-semibold s/text-lg s/text-primary "mb-3")}
                               "Galeazze – lato Laguna Nord – Rio delle Galeazze")
                          (d/p {:class (s/cx s/body-base "mb-2 text-left")}
                               "L’imbarcazione deve obbligatoriamente arrivare dalla Laguna Nord ed entrare attraverso il Rio delle Galeazze.")
                          (d/p {:class (s/cx s/font-body s/text-base s/weight-medium s/text-danger "leading-relaxed")}
                               "NON è consentito utilizzare nessun altro ingresso dell’Arsenale.")))

                ;; Percorso
                (d/div {:class "mb-8"}
                       ($ mini-heading {:text "Percorso"})
                       ($ numbered-steps {:steps water-steps}))

                ;; Punto di scarico
                (d/div {:class "mb-8"}
                       ($ mini-heading {:text "Punto di scarico"})
                       (d/p {:class (s/cx s/body-base "text-left")}
                            "Approdo del Padiglione Armenia sul "
                            (d/span {:class s/em-strong} "Rio delle Galeazze")
                            ", indicato sulla mappa come "
                            (d/span {:class s/em-italic} "“Drop-off point”")
                            ".")))

         ;; Mappa
         (d/div
          (d/img {:src water-taxi-map-src
                  :alt "Mappa dell’Arsenale con l’unico ingresso consentito dal Rio delle Galeazze e il percorso verso sud fino all’approdo del Padiglione Armenia"
                  :loading "lazy"
                  :class "w-full h-auto"})
          (d/p {:class (s/cx s/font-ui s/text-sm s/em-italic s/text-muted "mt-4 px-4")}
               "Percorso via acqua — ingresso dalla Laguna Nord tramite il Rio delle Galeazze, poi verso sud fino all’approdo del padiglione"))))

;; ── Option 1 — a piedi ─────────────────────────────────────────────────────

(defnc foot-section []
  (let [is-desktop? (use-touch-enabled)]
    (d/div {:class s/section-pb}
           (d/div {:class "px-4"}
                  ($ section-eyebrow {:text "Opzione 1 · A piedi"})
                  (d/h2 {:class (s/cx section-display "mb-8")}
                        "Consegna a piedi")

                  (d/p {:class (s/cx s/body-lg "mb-8")}
                       "Per pacchi e materiali trasportabili "
                       (d/span {:class s/em-strong} "a mano o con carrello")
                       ". Il padiglione si trova a "
                       (d/span {:class s/em-strong} "pochi minuti a piedi")
                       " dall’ingresso dell’Arsenale Militare alla "
                       (d/span {:class s/em-strong} "Celestia")
                       ", accanto alla Chiesa di Cristo Re alla Celestia: il punto di partenza è segnato sulla mappa.")

                  (d/div {:class "mb-8"}
                         ($ mini-heading {:text "Percorso"})
                         ($ numbered-steps {:steps foot-steps}))

                  (d/div {:class "mb-8"}
                         ($ address-block {:title "Indirizzo"})))

           ($ map-button {:label "Apri in Google Maps"})

           (d/div
            ($ mapbox-map
               {:dev false
                :interactive? is-desktop?
                :initial-view mc/delivery-initial-view
                :ant-paths    mc/delivery-ant-paths
                :layers       mc/delivery-layers})
            (d/p {:class (s/cx s/font-ui s/text-sm s/em-italic s/text-muted "mt-4 px-4")}
                 "Percorso a piedi dall’ingresso alla Celestia (punto blu) fino al padiglione — pochi minuti")))))

;; ── Checklist ──────────────────────────────────────────────────────────────

(defnc checklist-section []
  (d/div {:class s/section-pb}
         (d/div {:class "px-4"}
                ($ section-eyebrow {:text "Prima di partire"})
                (d/h2 {:class (s/cx section-display "mb-8")}
                      "Checklist"))
         (d/div {:class "px-4 grid grid-cols-1 sm:grid-cols-2 gap-6"}
                (for [[title body] checklist]
                  (d/div {:key title
                          :class (s/cx "p-5 border" s/border-subtle)}
                         (d/h3 {:class (s/cx s/heading-sm "mb-2")} title)
                         (d/p {:class (s/cx s/body-base "text-left")} body))))

         (d/div {:class "px-4 mt-12"}
                (d/p {:class (s/cx s/body-closing "text-left mb-4")}
                     "Grazie per la collaborazione: una consegna ben preparata arriva in studio senza intoppi.")
                (d/p {:class (s/cx s/body-base "text-left mb-4")}
                     "Per qualsiasi domanda:")
                ($ contacts-block))))

;; ── Page ───────────────────────────────────────────────────────────────────

(defnc delivery-view
  [_props]
  ($ page-shell
     ($ hero-section)
     ($ facts-section)
     ($ options-section)
     ($ foot-section)
     ($ water-section)
     ($ checklist-section)))
