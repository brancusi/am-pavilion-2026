(ns amp.pages.delivery.page
  "Istruzioni per le consegne — Italian-language delivery instructions for
   couriers and suppliers bringing materials to the Armenia Pavilion
   (Tesa 41, Arsenale Militare). Two options: via acqua (boat) and a piedi
   (on foot). Lives at /delivery; not linked from the main nav."
  (:require
   [amp.pages.venue.map-config :as mc]
   [amp.ui.directions :refer [marine-office-phone]]
   [amp.ui.wayfinding :as wf]
   [amp.hooks.use-media-query :refer [use-touch-enabled]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$ <>]]
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
   "Raggiungere l’approdo del Padiglione Armenia (punto rosso sulla mappa) e scaricare lì."])

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

;; ── Sections ───────────────────────────────────────────────────────────────

(def ^:private contact-items
  [["Ufficio della Marina · accesso via acqua" marine-office-phone]
   [(str "Contatto secondario · " (:name secondary-contact)) secondary-contact "Parla solo inglese."]])

(defnc essentials []
  (d/section {:class "ap-sec"}
             (d/div {:class "ap-wrap grid gap-8 lg:grid-cols-[1.2fr_1fr] items-start"}
                    (d/div {:class "flex flex-col gap-8"}
                           (d/div {:class "grid sm:grid-cols-2 gap-8"}
                                  ($ wf/address {:title "Destinatario" :lines recipient-lines})
                                  ($ wf/address {:title "Indirizzo"}))
                           ;; Which way
                           (d/div {:class "ap-options"}
                                  (d/a {:class "ap-option" :href "#a-piedi"}
                                       (d/span {:class "ap-label"} "Opzione 1")
                                       (d/h3 {:class "ap-h2"} "A piedi")
                                       (d/p {:class "ap-body-s m-0"} "Il modo più comune: per pacchi e materiali trasportabili a mano o con carrello.")
                                       (d/ul (d/li "Ingresso dell’Arsenale Militare alla Celestia")
                                             (d/li "Pochi minuti a piedi fino alla Tesa 41")))
                                  (d/a {:class "ap-option ap-option--water" :href "#via-acqua"}
                                       (d/span {:class "ap-label"} "Opzione 2")
                                       (d/h3 {:class "ap-h2"} "Via acqua")
                                       (d/p {:class "ap-body-s m-0"} "Per carichi voluminosi, pesanti o su pallet: si scarica all’approdo del padiglione.")
                                       (d/ul (d/li "Accesso dalla Laguna Nord")
                                             (d/li "Unico ingresso: Rio delle Galeazze")))))
                    ($ wf/contacts {:title "Contatti"
                                    :intro "Per concordare giorno e orario, o in caso di difficoltà:"
                                    :items contact-items}))))

(defnc foot-section []
  (let [interactive? (use-touch-enabled)]
    (d/section {:class "ap-sec !pt-0" :id "a-piedi"}
               (d/div {:class "ap-wrap"}
                      ($ wf/section-head {:label "Opzione 1 · A piedi" :title "Consegna a piedi"
                                          :lede "Per pacchi e materiali trasportabili a mano o con carrello. Il padiglione è a pochi minuti a piedi dall’ingresso dell’Arsenale Militare alla Celestia, accanto alla Chiesa di Cristo Re alla Celestia."})
                      (d/div {:class "ap-guide lg:!grid-cols-[1.4fr_1fr]"}
                             ($ wf/route-map
                                {:map {:interactive? interactive? :lang :it
                                       :initial-view mc/delivery-initial-view
                                       :bounds mc/delivery-bounds
                                       :bounds-padding 56
                                       :ant-paths mc/delivery-ant-paths
                                       :layers mc/delivery-layers
                                       :labels-url mc/delivery-data-url}
                                 :legend [[:walk "Percorso a piedi"] [:pav "Padiglione Armenia"]]
                                 :caption "Dall’ingresso alla Celestia (punto giallo) fino al padiglione: pochi minuti a piedi."
                                 :actions (<> (d/a {:class "ap-btn" :href mc/maps-url :target "_blank" :rel "noopener"}
                                                   "Apri in Maps"))})
                             (d/div {:class "flex flex-col gap-6"}
                                    (d/p {:class "ap-label ap-muted m-0"} "Percorso")
                                    ($ wf/steps {:items foot-steps}))))))) 

(defnc water-section []
  (d/section {:class "ap-sec bg-paper-sunk" :id "via-acqua"}
             (d/div {:class "ap-wrap flex flex-col gap-6 !max-w-[880px]"}
                    ($ wf/section-head {:label "Opzione 2 · Via acqua" :title "Consegna in barca"
                                        :lede "Le imbarcazioni che trasportano materiali destinati al Padiglione Armenia possono entrare nell’area dell’Arsenale Militare. L’Ufficio della Marina è informato: è però obbligatorio seguire la procedura qui sotto."})
                    ($ wf/driver-card
                       {:lang :it
                        :c {:subtitle "Accesso via acqua · Padiglione Armenia – Tesa 41"
                            :before-title "Prima di entrare"
                            :before-body "Chiamare l’Ufficio della Marina e comunicare:"
                            :before-quote "«Sto arrivando con una consegna per il Padiglione Armenia.»"
                            :contacts [["Ufficio della Marina" marine-office-phone]]
                            :entrance-title "Unico ingresso consentito"
                            :entrance-name "Galeazze – lato Laguna Nord – Rio delle Galeazze"
                            :entrance-body "L’imbarcazione deve obbligatoriamente arrivare dalla Laguna Nord ed entrare attraverso il Rio delle Galeazze."
                            :entrance-warn "NON è consentito utilizzare nessun altro ingresso dell’Arsenale."
                            :steps-title "Percorso"
                            :steps water-steps
                            :map-caption "Punto di scarico: l’approdo del Padiglione Armenia sul Rio delle Galeazze, accanto alla Tesa 41."}}))))

(defnc checklist-section []
  (d/section {:class "ap-sec"}
             (d/div {:class "ap-wrap"}
                    ($ wf/section-head {:label "Prima di partire" :title "Checklist"})
                    (d/ol {:class "ap-checks"}
                          (for [[title body] checklist]
                            (d/li {:key title}
                                  (d/h3 {:class "ap-h3"} title)
                                  (d/p {:class "ap-body-s m-0"} body))))
                    (d/p {:class "ap-lede !mt-12 mb-0 max-w-[48ch]"}
                         "Grazie per la collaborazione: una consegna ben preparata arriva in studio senza intoppi."))))

;; ── Page ───────────────────────────────────────────────────────────────────

(defnc delivery-view
  [_props]
  (wf/use-doc-lang :it)
  (d/div {:lang "it" :class "bg-paper text-ink"}
         ($ wf/page-head
            {:eyebrow "Venezia · Arsenale Militare"
             :title "Consegne al Padiglione"
             :lede "Istruzioni per corrieri, fornitori e trasportatori. Il Padiglione Armenia è nella Tesa 41, all’interno dell’Arsenale Militare: le consegne arrivano a piedi oppure via acqua."
             :facts [["Destinatario" "Padiglione Armenia – Tesa 41"]
                     ["Orari" "mar – dom, 11:00–18:30"]
                     ["A piedi" "Ingresso alla Celestia"]
                     ["Via acqua" "Rio delle Galeazze"]]})
         ($ essentials)
         ($ foot-section)
         ($ water-section)
         ($ checklist-section)))
