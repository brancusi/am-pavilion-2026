(ns amp.components.elements.budget.cash-flow
  (:require
   ["gsap" :refer [gsap]]
   [amp.lib.defnc :refer [defnc]]
   [helix.core :refer [$]]
   [helix.dom :as d]
   [helix.hooks :as hooks]))

(def cashflow-data {:debt-raised 150000
                    :funds-raised 125000
                    :target-total 1600000

                    :cash-flow-model
                    [;; ============================================================
                     ;; PHASE 0 — PRE-PRODUCTION (Oct 2025 – Jan 2026)
                     ;; Target: ~75k (already spent)
                     ;; ============================================================
                     {:id :preprod-oct
                      :title "Pre-Production — Admin, Travel, Scouting (Oct)"
                      :due "2025-10-15"
                      :amount 20000
                      :priority :normal
                      :status :paid}

                     {:id :preprod-nov
                      :title "Pre-Production — LA Fabrication Setup (Nov)"
                      :due "2025-11-15"
                      :amount 18000
                      :priority :normal
                      :status :paid}

                     {:id :preprod-dec
                      :title "Pre-Production — Materials + Dev Travel (Dec)"
                      :due "2025-12-15"
                      :amount 22000
                      :priority :normal
                      :status :paid}

                     {:id :preprod-jan
                      :title "Pre-Production — Engineering + Early Casting (Jan)"
                      :due "2026-01-15"
                      :amount 15000
                      :priority :normal
                      :status :paid}


                     ;; ============================================================
                     ;; FEBRUARY 2026 — VENUE LOCK + PRODUCTION ACCELERATION
                     ;; ============================================================

                     {:id :venue-tranche-1
                      :title "Venue Rent — Tranche 1 (Tesa 41)"
                      :due "2026-02-01"
                      :amount 96000
                      :priority :critical
                      :status :paid}

                     {:id :press-and-website
                      :title "Press Release + Press Kit + Website Finalization"
                      :due "2026-02-15"
                      :amount 20000
                      :priority :high
                      :status :pending}

                     {:id :admin-feb
                      :title "Admin + Legal + Accounting + Travel (Feb)"
                      :due "2026-02-15"
                      :amount 45000
                      :priority :high
                      :status :pending}

                     {:id :la-production-feb
                      :title "LA Production — Materials + Labor (Phase 1)"
                      :due "2026-02-20"
                      :amount 50000
                      :priority :critical
                      :status :pending}

                     {:id :venue-tranche-2
                      :title "Venue Rent — Tranche 2 (Tesa 41)"
                      :due "2026-02-20"
                      :amount 151000
                      :priority :critical
                      :status :pending}

                     {:id :la-studio-feb
                      :title "LA Studio — Rent + Utilities/Insurance (Feb)"
                      :due "2026-02-28"
                      :amount 12000
                      :priority :high
                      :status :pending}


                     ;; ============================================================
                     ;; MARCH 2026 — FINAL VENUE LOCK + SHIPPING LOCK
                     ;; ============================================================

                     {:id :la-production-mar
                      :title "LA Production — Materials + Labor (Phase 2)"
                      :due "2026-03-20"
                      :amount 50000
                      :priority :critical
                      :status :pending}

                     {:id :venue-tranche-3
                      :title "Venue Rent — Tranche 3 (Tesa 41)"
                      :due "2026-03-20"
                      :amount 97000
                      :priority :critical
                      :status :pending}

                     {:id :buildouts-lighting-permits
                      :title "Venue Compliance — Build-outs + Lighting + Permits + Fire Certification"
                      :due "2026-03-20"
                      :amount 45000
                      :priority :high
                      :status :pending}

                     {:id :crates-and-packing
                      :title "Crating + Packing Crew (LA)"
                      :due "2026-03-25"
                      :amount 27500
                      :priority :high
                      :status :pending}

                     {:id :shipping-la-venice
                      :title "International Freight — LA → Venice (Peak Season)"
                      :due "2026-03-31"
                      :amount 35000
                      :priority :critical
                      :status :pending}

                     {:id :transit-insurance
                      :title "Fine Art Transit Insurance (International + Local Moves)"
                      :due "2026-03-31"
                      :amount 12500
                      :priority :high
                      :status :pending}

                     {:id :housing-venice-deposit
                      :title "Venice Housing — Deposit + First Month (Team)"
                      :due "2026-03-31"
                      :amount 55000
                      :priority :high
                      :status :pending}

                     {:id :marketing-preopen
                      :title "Marketing/PR — Pre-Opening Push (Phase 1)"
                      :due "2026-03-31"
                      :amount 25000
                      :priority :high
                      :status :pending}


                     ;; ============================================================
                     ;; APRIL 2026 — ARRIVAL + INSTALLATION WINDOW
                     ;; ============================================================

                     {:id :port-barge-local-transport
                      :title "Venice Arrival — Port Handling + Barge + Local Transport + Forklift"
                      :due "2026-04-05"
                      :amount 15000
                      :priority :high
                      :status :pending}

                     {:id :installation-crew
                      :title "Installation Crew + Handling (Venice)"
                      :due "2026-04-10"
                      :amount 20000
                      :priority :high
                      :status :pending}

                     {:id :studio-month-1
                      :title "THE STUDIO — On-Site Operations (Month 1)"
                      :due "2026-04-15"
                      :amount 70000
                      :priority :high
                      :status :pending}

                     {:id :security-mediators-month-1
                      :title "Venue Operations — Security + Mediators + Cleaning + Utilities (Month 1)"
                      :due "2026-04-30"
                      :amount 18000
                      :priority :high
                      :status :pending}

                     {:id :documentation-install
                      :title "Documentation — Installation Film + Photo (Phase 1)"
                      :due "2026-04-30"
                      :amount 25000
                      :priority :normal
                      :status :pending}


                     ;; ============================================================
                     ;; MAY 2026 — OPENING + PEAK VISIBILITY
                     ;; ============================================================

                     {:id :opening-week
                      :title "Opening Week + Public Programs (Hospitality, Staff, A/V, Protocol)"
                      :due "2026-05-01"
                      :amount 60000
                      :priority :high
                      :status :pending}

                     {:id :studio-month-2
                      :title "THE STUDIO — On-Site Operations (Month 2)"
                      :due "2026-05-31"
                      :amount 65000
                      :priority :normal
                      :status :pending}

                     {:id :security-mediators-month-2
                      :title "Venue Operations — Security + Mediators + Cleaning + Utilities (Month 2)"
                      :due "2026-05-31"
                      :amount 18000
                      :priority :normal
                      :status :pending}

                     {:id :marketing-ongoing-1
                      :title "Marketing/PR — Ongoing Campaign (Month 1)"
                      :due "2026-05-31"
                      :amount 20000
                      :priority :normal
                      :status :pending}

                     {:id :documentation-opening
                      :title "Documentation — Opening Week Film + Photo + Sound (Phase 2)"
                      :due "2026-05-31"
                      :amount 25000
                      :priority :normal
                      :status :pending}


                     ;; ============================================================
                     ;; JUNE 2026 — STABILIZATION (Ongoing Operations)
                     ;; ============================================================

                     {:id :studio-month-3
                      :title "THE STUDIO — On-Site Operations (Month 3)"
                      :due "2026-06-30"
                      :amount 65000
                      :priority :normal
                      :status :pending}

                     {:id :security-mediators-month-3
                      :title "Venue Operations — Security + Mediators + Cleaning + Utilities (Month 3)"
                      :due "2026-06-30"
                      :amount 18000
                      :priority :normal
                      :status :pending}

                     {:id :marketing-ongoing-2
                      :title "Marketing/PR — Ongoing Campaign (Month 2)"
                      :due "2026-06-30"
                      :amount 20000
                      :priority :normal
                      :status :pending}

                     {:id :catalog-edit-design
                      :title "Catalogue — Editing + Design + Layout (Lock)"
                      :due "2026-06-30"
                      :amount 25000
                      :priority :normal
                      :status :pending}


                     ;; ============================================================
                     ;; JULY 2026 — CATALOG RELEASE
                     ;; ============================================================

                     {:id :catalog-print
                      :title "Pavilion Catalogue — Printing + Delivery"
                      :due "2026-07-01"
                      :amount 45000
                      :priority :normal
                      :status :pending}

                     {:id :studio-month-4
                      :title "THE STUDIO — On-Site Operations (Month 4)"
                      :due "2026-07-31"
                      :amount 65000
                      :priority :normal
                      :status :pending}

                     {:id :security-mediators-month-4
                      :title "Venue Operations — Security + Mediators + Cleaning + Utilities (Month 4)"
                      :due "2026-07-31"
                      :amount 18000
                      :priority :normal
                      :status :pending}

                     {:id :marketing-ongoing-3
                      :title "Marketing/PR — Ongoing Campaign (Month 3)"
                      :due "2026-07-31"
                      :amount 20000
                      :priority :normal
                      :status :pending}


                     ;; ============================================================
                     ;; AUGUST 2026 — Ongoing Operations
                     ;; ============================================================

                     {:id :studio-month-5
                      :title "THE STUDIO — On-Site Operations (Month 5)"
                      :due "2026-08-31"
                      :amount 65000
                      :priority :normal
                      :status :pending}

                     {:id :security-mediators-month-5
                      :title "Venue Operations — Security + Mediators + Cleaning + Utilities (Month 5)"
                      :due "2026-08-31"
                      :amount 18000
                      :priority :normal
                      :status :pending}

                     {:id :marketing-ongoing-4
                      :title "Marketing/PR — Ongoing Campaign (Month 4)"
                      :due "2026-08-31"
                      :amount 20000
                      :priority :normal
                      :status :pending}


                     ;; ============================================================
                     ;; SEPTEMBER 2026 — Ongoing Operations
                     ;; ============================================================

                     {:id :studio-month-6
                      :title "THE STUDIO — On-Site Operations (Month 6)"
                      :due "2026-09-30"
                      :amount 65000
                      :priority :normal
                      :status :pending}

                     {:id :security-mediators-month-6
                      :title "Venue Operations — Security + Mediators + Cleaning + Utilities (Month 6)"
                      :due "2026-09-30"
                      :amount 18000
                      :priority :normal
                      :status :pending}

                     {:id :marketing-ongoing-5
                      :title "Marketing/PR — Ongoing Campaign (Month 5)"
                      :due "2026-09-30"
                      :amount 20000
                      :priority :normal
                      :status :pending}


                     ;; ============================================================
                     ;; OCTOBER 2026 — Ongoing Operations (Final Push)
                     ;; ============================================================

                     {:id :studio-month-7
                      :title "THE STUDIO — On-Site Operations (Month 7)"
                      :due "2026-10-31"
                      :amount 65000
                      :priority :normal
                      :status :pending}

                     {:id :security-mediators-month-7
                      :title "Venue Operations — Security + Mediators + Cleaning + Utilities (Month 7)"
                      :due "2026-10-31"
                      :amount 18000
                      :priority :normal
                      :status :pending}

                     {:id :marketing-ongoing-6
                      :title "Marketing/PR — Ongoing Campaign (Month 6)"
                      :due "2026-10-31"
                      :amount 20000
                      :priority :normal
                      :status :pending}


                     ;; ============================================================
                     ;; NOVEMBER 2026 — DEINSTALL + RETURN LOGISTICS
                     ;; ============================================================

                     {:id :deinstall-crew
                      :title "Deinstallation Crew + Handling (Venice)"
                      :due "2026-11-15"
                      :amount 12500
                      :priority :high
                      :status :pending}

                     {:id :return-transport-local
                      :title "Return Logistics — Local Transport (Barge/Port/Truck)"
                      :due "2026-11-20"
                      :amount 12000
                      :priority :high
                      :status :pending}

                     {:id :shipping-venice-la
                      :title "International Freight — Venice → LA (Return)"
                      :due "2026-11-25"
                      :amount 35000
                      :priority :high
                      :status :pending}

                     ;; ============================================================
                     ;; CONTINGENCY / RESERVE (keeps model aligned to 1.6M)
                     ;; ============================================================
                     ]})

;; ---------------------------------------------------------------------------
;; Helpers
;; ---------------------------------------------------------------------------

(defn parse-date [s] (js/Date. s))
(defn date->ms  [d] (.getTime d))

(defn format-date
  "e.g. 'Feb 20'"
  [date-str]
  (let [d (parse-date date-str)]
    (str (.toLocaleString d "en-US" #js {:month "short"})
         " " (.getDate d))))

(defn format-currency [n]
  (.toLocaleString n "en-US" #js {:style "currency"
                                  :currency "USD"
                                  :maximumFractionDigits 0}))

(defn past? [date-str]
  (< (date->ms (parse-date date-str))
     (date->ms (js/Date.))))

(defn priority-color
  "Pastel palette matching the site."
  [p]
  (case p
    :critical "#f9a8d4"   ;; pink-300
    :high     "#fcd34d"   ;; amber-300
    :normal   "#a5b4fc"   ;; indigo-300
    "#a5b4fc"))

(defn priority-tag-bg [p]
  (case p
    :critical "bg-pink-500/15"
    :high     "bg-amber-400/15"
    :normal   "bg-indigo-400/15"
    "bg-indigo-400/15"))

(defn priority-tag-text [p]
  (case p
    :critical "text-pink-300"
    :high     "text-amber-300"
    :normal   "text-indigo-300"
    "text-indigo-300"))

(defn priority-label [p]
  (case p
    :critical "CRIT"
    :high     "HIGH"
    :normal   "NORM"
    "—"))

;; Group entries by month
(defn group-by-month [entries]
  (let [month-key (fn [e]
                    (let [d (parse-date (:due e))]
                      (.toLocaleString d "en-US" #js {:month "long" :year "numeric"})))]
    (partition-by month-key (sort-by (comp date->ms parse-date :due) entries))))

;; Month rollup for summary view
(defn month-rollups [entries]
  (let [sorted (sort-by (comp date->ms parse-date :due) entries)
        groups (group-by-month sorted)]
    (mapv (fn [group]
            (let [d        (parse-date (:due (first group)))
                  label    (.toLocaleString d "en-US" #js {:month "short" :year "numeric"})
                  total    (reduce + 0 (map :amount group))
                  paid     (->> group (filter #(= :paid (:status %))) (map :amount) (reduce + 0))
                  pending  (- total paid)
                  n-items  (count group)
                  n-paid   (count (filter #(= :paid (:status %)) group))
                  n-crit   (count (filter #(= :critical (:priority %)) group))
                  all-paid (= n-paid n-items)
                  has-now  (let [month   (.getMonth d)
                                 year    (.getFullYear d)
                                 now     (js/Date.)
                                 n-month (.getMonth now)
                                 n-year  (.getFullYear now)]
                             (and (= month n-month) (= year n-year)))]
              {:label    label
               :total    total
               :paid     paid
               :pending  pending
               :n-items  n-items
               :n-paid   n-paid
               :n-crit   n-crit
               :all-paid all-paid
               :has-now  has-now
               :entries  group}))
          groups)))

;; ---------------------------------------------------------------------------
;; Sub-components
;; ---------------------------------------------------------------------------

(defn status-classes [status]
  (case status
    :paid    {:dot "bg-emerald-400/20" :text "text-emerald-400" :label "PAID"}
    :pending {:dot "bg-slate-500/15"   :text "text-slate-500"   :label "DUE"}
    {:dot "bg-slate-500/15" :text "text-slate-500" :label "—"}))

(defnc timeline-node
  "A single cash-flow row on the timeline."
  [{:keys [entry idx]}]
  (let [{:keys [title due amount priority status]} entry
        node-ref  (hooks/use-ref nil)
        color     (priority-color (keyword priority))
        paid?     (= (keyword status) :paid)
        st        (status-classes (keyword status))]

    (hooks/use-effect
     :once
     (when @node-ref
       (.fromTo gsap @node-ref
                #js {:opacity 0 :x -20}
                #js {:opacity 1 :x 0
                     :duration 0.4
                     :delay (* idx 0.06)
                     :ease "power2.out"})))

    (d/div
     {:ref node-ref
      :class (str "relative flex items-stretch opacity-0 "
                  (when paid? "opacity-50"))}

     ;; left gutter — circle marker + dashed connector
     (d/div {:class "relative flex flex-col items-center"
             :style {:width "28px" :minWidth "28px"}}
            ;; circle
            (d/div {:class "mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0"
                    :style {:borderColor color
                            :background (if paid? "transparent" color)}})
            ;; dashed line continuing down
            (d/div {:class "flex-1 border-l border-dashed border-slate-700"}))

     ;; dashed horizontal connector
     (d/div {:class "flex items-start pt-[18px]"}
            (d/div {:class "w-4 border-t border-dashed border-slate-600"
                    :style {:marginTop "1px"}}))

     ;; content
     (d/div {:class "flex-1 pb-5 pt-1 pl-1"}

            ;; top line: date + priority + status
            (d/div {:class "flex items-center gap-2 mb-1"}
                   (d/span {:class "font-mono text-[11px] text-slate-500"}
                           (format-date due))
                   (d/span {:class (str "px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono "
                                        (priority-tag-bg (keyword priority)) " "
                                        (priority-tag-text (keyword priority)))}
                           (priority-label (keyword priority)))
                   ;; status badge
                   (d/span {:class (str "px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono "
                                        (:dot st) " " (:text st))}
                           (:label st)))

            ;; title
            (d/p {:class (str "text-sm leading-snug "
                              (if paid? "text-slate-500 line-through" "text-slate-200"))}
                 title)

            ;; amount
            (d/p {:class "mt-0.5 font-mono text-base font-semibold tracking-tight"
                  :style {:color (if paid? "#64748b" color)}}
                 (format-currency amount))))))


(defnc now-marker
  "TODAY — horizontal line across the timeline."
  []
  (let [ref (hooks/use-ref nil)]
    (hooks/use-effect
     :once
     (when @ref
       (.fromTo gsap @ref
                #js {:opacity 0 :scaleX 0}
                #js {:opacity 1 :scaleX 1
                     :duration 0.6
                     :delay 0.2
                     :ease "power3.out"})))

    (d/div {:ref ref
            :class "flex items-center gap-2 py-3 origin-left opacity-0"}
           ;; pulsing dot on the spine
           (d/div {:class "relative flex items-center justify-center"
                   :style {:width "28px" :minWidth "28px"}}
                  (d/div {:class "absolute h-5 w-5 animate-ping rounded-full bg-rose-400/30"})
                  (d/div {:class "h-2.5 w-2.5 rounded-full bg-rose-400"}))
           ;; line
           (d/div {:class "flex-1 h-px bg-rose-400/50"})
           ;; label
           (d/span {:class "font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-rose-400 pr-1"}
                   "now"))))


(defnc month-header
  "Section header for a month group."
  [{:keys [label idx]}]
  (let [ref (hooks/use-ref nil)]
    (hooks/use-effect
     :once
     (when @ref
       (.fromTo gsap @ref
                #js {:opacity 0 :y 8}
                #js {:opacity 1 :y 0
                     :duration 0.35
                     :delay (+ 0.1 (* idx 0.05))
                     :ease "power2.out"})))
    (d/div {:ref ref
            :class "flex items-center gap-3 pt-8 pb-2 opacity-0"}
           ;; pink accent line — matches site section-block
           (d/div {:class "h-px w-8 bg-pink-500/70"})
           (d/span {:class "font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500"}
                   label))))


;; ---------------------------------------------------------------------------
;; Month summary row (collapsed view)
;; ---------------------------------------------------------------------------

(defnc month-summary-row
  [{:keys [rollup idx]}]
  (let [{:keys [label total paid pending n-items n-crit all-paid has-now]} rollup
        ref   (hooks/use-ref nil)
        color (cond
                all-paid            "#34d399"   ;; emerald-400
                (pos? n-crit)       "#f9a8d4"   ;; pink-300
                :else               "#a5b4fc")]  ;; indigo-300

    (hooks/use-effect
     :once
     (when @ref
       (.fromTo gsap @ref
                #js {:opacity 0 :x -16}
                #js {:opacity 1 :x 0
                     :duration 0.35
                     :delay (* idx 0.05)
                     :ease "power2.out"})))

    (d/div
     {:ref ref
      :class "relative flex items-stretch opacity-0"}

     ;; left gutter — circle + dashed spine
     (d/div {:class "relative flex flex-col items-center"
             :style {:width "28px" :minWidth "28px"}}
            (d/div {:class "mt-4 h-2.5 w-2.5 rounded-full border-2 flex-shrink-0"
                    :style {:borderColor color
                            :background (if all-paid "transparent" color)}})
            (d/div {:class "flex-1 border-l border-dashed border-slate-700"}))

     ;; dashed connector
     (d/div {:class "flex items-start pt-[18px]"}
            (d/div {:class "w-4 border-t border-dashed border-slate-600"
                    :style {:marginTop "1px"}}))

     ;; content
     (d/div {:class "flex-1 pb-4 pt-1 pl-1"}

            ;; row 1: month label + item count + now badge
            (d/div {:class "flex items-center gap-2 mb-1"}
                   (d/span {:class "font-mono text-xs font-bold uppercase tracking-wider text-slate-300"}
                           label)
                   (d/span {:class "font-mono text-[10px] text-slate-600"}
                           (str n-items " items"))
                   (when has-now
                     (d/span {:class "px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-emerald-400/15 text-emerald-400"}
                             "NOW"))
                   (when (pos? n-crit)
                     (d/span {:class "px-1.5 py-px text-[9px] font-bold uppercase tracking-widest font-mono bg-pink-500/15 text-pink-300"}
                             (str n-crit " crit"))))

            ;; row 2: total + paid/pending breakdown
            (d/div {:class "flex items-baseline gap-3"}
                   (d/span {:class "font-mono text-lg font-bold tracking-tight"
                            :style {:color color}}
                           (format-currency total))
                   (when (pos? paid)
                     (d/span {:class "font-mono text-[11px] text-emerald-400/60"}
                             (str (format-currency paid) " paid")))
                   (when (pos? pending)
                     (d/span {:class "font-mono text-[11px] text-slate-500"}
                             (str (format-currency pending) " due"))))

            ;; progress bar
            (d/div {:class "mt-1.5 h-px w-full bg-slate-800 relative"}
                   (d/div {:class "absolute left-0 top-0 h-px bg-emerald-400/50"
                           :style {:width (str (if (pos? total)
                                                 (Math/round (* 100 (/ paid total)))
                                                 0) "%")}}))))))


;; ---------------------------------------------------------------------------
;; View toggle
;; ---------------------------------------------------------------------------

(defnc view-toggle
  [{:keys [expanded? on-toggle]}]
  (d/button
   {:class "mb-4 flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500 transition-colors hover:text-pink-300"
    :on-click on-toggle}
   (d/div {:class "h-px w-4 bg-pink-500/50"})
   (if expanded? "Summary" "Expand")
   (d/span {:class "text-slate-700"} (if expanded? "▲" "▼"))))


;; ---------------------------------------------------------------------------
;; Summary header
;; ---------------------------------------------------------------------------

(defnc summary-header
  [{:keys [entries target-total funds-raised debt-raised]}]
  (let [paid-sum     (->> entries
                          (filter #(= :paid (keyword (:status %))))
                          (map :amount)
                          (reduce + 0))
        pending-sum  (->> entries
                          (filter #(= :pending (keyword (:status %))))
                          (map :amount)
                          (reduce + 0))
        critical-sum (->> entries
                          (filter #(= :critical (keyword (:priority %))))
                          (map :amount)
                          (reduce + 0))
        gap          (- target-total funds-raised debt-raised)
        next-entry   (->> entries
                          (filter #(= :pending (keyword (:status %))))
                          (sort-by (comp date->ms parse-date :due))
                          first)
        ref          (hooks/use-ref nil)]

    (hooks/use-effect
     :once
     (when @ref
       (.fromTo gsap @ref
                #js {:opacity 0 :y -12}
                #js {:opacity 1 :y 0
                     :duration 0.5
                     :ease "power2.out"})))

    (d/div {:ref ref
            :class "mb-4 border-b border-slate-800 pb-5 opacity-0"}

           ;; eyebrow
           (d/div {:class "flex items-center gap-2 mb-3"}
                  (d/div {:class "h-px w-6 bg-pink-500/70"})
                  (d/span {:class "font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-slate-500"}
                          "Cash Flow"))

           ;; target total
           (d/p {:class "font-mono text-3xl font-extrabold tracking-tight text-slate-100"}
                (format-currency target-total))
           (d/p {:class "font-mono text-[11px] text-slate-600 mt-0.5"} "target total")

           ;; funding bar
           (d/div {:class "mt-4 flex gap-4 flex-wrap"}
                  (d/div {:class "border-l-2 border-emerald-400/40 pl-3"}
                         (d/p {:class "font-mono text-lg font-bold text-emerald-400"} (format-currency funds-raised))
                         (d/p {:class "font-mono text-[9px] uppercase tracking-widest text-emerald-400/50"} "funds raised"))
                  (d/div {:class "border-l-2 border-amber-300/40 pl-3"}
                         (d/p {:class "font-mono text-lg font-bold text-amber-300"} (format-currency debt-raised))
                         (d/p {:class "font-mono text-[9px] uppercase tracking-widest text-amber-300/50"} "debt raised"))
                  (d/div {:class "border-l-2 border-pink-400/40 pl-3"}
                         (d/p {:class "font-mono text-lg font-bold text-pink-300"} (format-currency gap))
                         (d/p {:class "font-mono text-[9px] uppercase tracking-widest text-pink-400/50"} "remaining gap")))

           ;; second row: paid / pending / critical / next
           (d/div {:class "mt-3 flex gap-4 flex-wrap"}
                  (d/div {:class "border-l-2 border-emerald-400/20 pl-3"}
                         (d/p {:class "font-mono text-base font-bold text-emerald-400/70"} (format-currency paid-sum))
                         (d/p {:class "font-mono text-[9px] uppercase tracking-widest text-slate-600"} "paid"))
                  (d/div {:class "border-l-2 border-slate-600 pl-3"}
                         (d/p {:class "font-mono text-base font-bold text-slate-400"} (format-currency pending-sum))
                         (d/p {:class "font-mono text-[9px] uppercase tracking-widest text-slate-600"} "pending"))
                  (d/div {:class "border-l-2 border-pink-500/30 pl-3"}
                         (d/p {:class "font-mono text-base font-bold text-pink-300/70"} (format-currency critical-sum))
                         (d/p {:class "font-mono text-[9px] uppercase tracking-widest text-slate-600"} "critical"))
                  (when next-entry
                    (d/div {:class "border-l-2 border-indigo-400/30 pl-3"}
                           (d/p {:class "font-mono text-base font-bold text-indigo-300"} (format-date (:due next-entry)))
                           (d/p {:class "font-mono text-[9px] uppercase tracking-widest text-slate-600"} "next due")))))))


;; ---------------------------------------------------------------------------
;; Main component
;; ---------------------------------------------------------------------------

(defnc cash-flow []
  (let [entries cashflow-data
        [error set-error!]       (hooks/use-state nil)
        [expanded? set-expanded!] (hooks/use-state false)
        container-ref            (hooks/use-ref nil)]

    ;; spine entrance
    (hooks/use-effect
     [entries]
     (when (and entries @container-ref)
       (let [spine (.querySelector @container-ref ".cf-spine")]
         (when spine
           (.fromTo gsap spine
                    #js {:scaleY 0}
                    #js {:scaleY 1 :duration 0.8 :delay 0.05 :ease "power3.out"})))))

    (d/div
     {:ref container-ref
      :class "min-h-screen bg-black px-4 pb-8 pt-6 text-white antialiased selection:bg-pink-500/30"}

     (cond
       error
       (d/p {:class "font-mono text-sm text-red-400 p-4"} (str "err: " error))

       (nil? entries)
       (d/div {:class "flex items-center justify-center py-20"}
              (d/div {:class "h-5 w-5 animate-spin border-2 border-slate-700 border-t-pink-400"}))

       :else
       (let [{:keys [cash-flow-model target-total funds-raised debt-raised]} entries
             entries-kw (map #(-> %
                                  (update :priority keyword)
                                  (update :status keyword))
                             cash-flow-model)
             sorted     (sort-by (comp date->ms parse-date :due) entries-kw)
             groups     (group-by-month sorted)
             now-ms     (date->ms (js/Date.))

             ;; Build flat list interleaving month headers + now marker
             all-items
             (let [items    (atom [])
                   now-done (atom false)
                   counter  (atom 0)]
               (doseq [group groups]
                 (let [month-label (let [d (parse-date (:due (first group)))]
                                     (.toLocaleString d "en-US" #js {:month "long" :year "numeric"}))]
                   (swap! items conj {:type :month :label month-label :idx @counter})
                   (swap! counter inc)
                   (doseq [entry group]
                     (let [entry-ms (date->ms (parse-date (:due entry)))]
                       ;; insert now marker right before first future entry
                       (when (and (not @now-done) (> entry-ms now-ms))
                         (swap! items conj {:type :now})
                         (reset! now-done true))
                       (swap! items conj {:type  :entry
                                          :entry entry
                                          :idx   @counter
                                          :past? (= :paid (:status entry))})
                       (swap! counter inc)))))
               ;; if all entries are in the past, append now at end
               (when (not @now-done)
                 (swap! items conj {:type :now}))
               @items)]

         (d/div
          ;; summary header
          ($ summary-header {:entries entries-kw
                             :target-total target-total
                             :funds-raised funds-raised
                             :debt-raised debt-raised})

          ;; toggle
          ($ view-toggle {:expanded? expanded?
                          :on-toggle #(set-expanded! not)})

          ;; timeline area
          (d/div {:class "relative"}

                 ;; vertical dashed spine
                 (d/div {:class "cf-spine absolute left-[13px] top-0 h-full origin-top border-l border-dashed border-slate-800"})

                 (if expanded?
                   ;; ── EXPANDED: full timeline ──
                   (map-indexed
                    (fn [i item]
                      (case (:type item)
                        :month ($ month-header {:key (str "m-" i) :label (:label item) :idx (:idx item)})
                        :now   ($ now-marker   {:key "now"})
                        :entry ($ timeline-node {:key  (str "e-" i)
                                                 :entry (:entry item)
                                                 :idx   (:idx item)
                                                 :is-past (= :paid (:status (:entry item)))})))
                    all-items)

                   ;; ── SUMMARY: month rollups ──
                   (let [rollups  (month-rollups entries-kw)
                         now-done (atom false)
                         out      (atom [])]
                     (doseq [[i r] (map-indexed vector rollups)]
                       (when (and (not @now-done) (:has-now r))
                         (swap! out conj ($ now-marker {:key "now-s"}))
                         (reset! now-done true))
                       (swap! out conj ($ month-summary-row {:key (str "sr-" i) :rollup r :idx i})))
                     (when (not @now-done)
                       (swap! out conj ($ now-marker {:key "now-s"})))
                     @out)))))))))