(ns amp.ui.directions
  "Shared wayfinding data (addresses, phone numbers) for /visit,
   /route-from-hotel-gabrielli and /delivery. The components that present
   it are in amp.ui.wayfinding.")

;; ── Data ───────────────────────────────────────────────────────────────────

(def pavilion-address
  "Postal address that couriers have found to work (2738/C did not).
   Shared by the Visit, delivery and water-taxi pages."
  ["Fondamenta Case Nuove, Castello 2737"
   "Arsenale Militare, Tesa 41"
   "30122 Venezia (VE)"])

(def marine-office-phone
  {:display "+39 041 244 1595" :tel "+390412441595"})

;; Water-taxi access to the Arsenale is coordinated by people, not by the
;; Marine Office (which cannot be contacted directly). Call in this order.
(def julda-contact
  "Primary contact for water access to the pavilion."
  {:name "Julda" :display "+39 342 0841435" :tel "+393420841435"})

(def luca-contact
  "Secondary contact for water access to the pavilion."
  {:name "Luca" :display "+39 329 342 4470" :tel "+393293424470"})

(def aram-contact
  "Third contact — English only."
  {:name "Aram" :display "+39 344 5697130" :tel "+393445697130"})

(def hotel-gabrielli-address
  ["Hotel Gabrielli"
   "Riva degli Schiavoni 4110"
   "Castello"
   "Venezia"])
