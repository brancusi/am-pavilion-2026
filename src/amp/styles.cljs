(ns amp.styles
  "Centralized design-token system for the Armenian Pavilion 2026 site.

   Philosophy
   ----------
   • Atomic — each token is a single Tailwind class string you can
     compose with `str`, `clojure.string/join`, or Tailwind's own
     class merging.  No deep nesting; combine atoms to build molecules.
   • Dark-first — the site is dark by default.  Every color atom comes
     in a {:dark … :light …} pair via `mode`.  Flip between palettes
     site-wide by toggling the `dark` class on <html>.
   • Responsive — breakpoint-aware atoms (sm: / md: / lg:) are baked
     into the tokens that need them so components don't re-invent them.

   Usage
   -----
       (:require [amp.styles :as s])
       (d/p {:class (s/cx s/body-lg s/text-muted)} \"…\")
       (d/h2 {:class s/heading-display} title)

   Customization
   -------------
   Extend by adding new `def`s in this file.  Prefer composition:
       (def my-card-title (cx heading-sm text-accent))
   over creating a one-off class string in the component.")

;; ---------------------------------------------------------------------------
;; Helpers
;; ---------------------------------------------------------------------------

(defn cx
  "Concatenate class strings, filtering nils.  Like clsx / twMerge lite."
  [& classes]
  (->> classes
       (remove nil?)
       (interpose " ")
       (apply str)))

;; ---------------------------------------------------------------------------
;; Color mode – dark-first design tokens
;; ---------------------------------------------------------------------------
;; With `darkMode: "class"` in tailwind.config.js:
;;   bare class  = light mode  (when <html> has NO "dark" class)
;;   dark:class  = dark mode   (when <html class="dark">)
;;
;; The site ships with <html class="dark"> so dark is the default.
;; Remove "dark" from <html> to flip the whole site to light mode.
;; Tweak the light (bare) values below to taste.

;; --- Text colors ----------------------------------------------------------
(def text-primary    "text-slate-900  dark:text-slate-100")
(def text-secondary  "text-slate-600  dark:text-slate-300")
(def text-muted      "text-slate-500  dark:text-slate-400")
(def text-faint      "text-slate-400  dark:text-slate-500")
(def text-ghost      "text-slate-300  dark:text-slate-600")
(def text-inverse    "text-slate-950  dark:text-white")

;; --- Accent palette – semantic roles --------------------------------------
(def text-accent     "text-pink-600   dark:text-pink-300")
(def text-accent-50  "text-pink-600/50 dark:text-pink-300/50")
(def text-value      "text-indigo-600 dark:text-indigo-300")
(def text-positive   "text-emerald-600 dark:text-emerald-300")
(def text-positive-50 "text-emerald-600/50 dark:text-emerald-300/50")
(def text-warning    "text-amber-600  dark:text-amber-300")
(def text-warning-80 "text-amber-600/80 dark:text-amber-300/80")
(def text-warning-50 "text-amber-600/50 dark:text-amber-300/50")
(def text-danger     "text-rose-600   dark:text-rose-400")
(def text-error      "text-red-600    dark:text-red-400")

;; --- Backgrounds ----------------------------------------------------------
(def bg-surface      "bg-white        dark:bg-slate-900")
(def bg-surface-alt  "bg-slate-100/60 dark:bg-slate-800/60")
(def bg-overlay      "bg-white/40     dark:bg-black/40")

;; --- Borders / dividers ---------------------------------------------------
(def border-subtle   "border-slate-200 dark:border-white/15")
(def border-accent   "border-pink-500/70 dark:border-pink-500/70")
(def divider-accent  "h-px bg-pink-500/70")

;; ---------------------------------------------------------------------------
;; Typography scale — atomic building blocks
;; ---------------------------------------------------------------------------
;; These are *atoms*: combine them freely to build any text style.

;; --- Font families --------------------------------------------------------
(def font-ui    "font-mono")
(def font-prose "font-sans")

;; --- Weights --------------------------------------------------------------
(def weight-normal    "font-normal")
(def weight-medium    "font-medium")
(def weight-semibold  "font-semibold")
(def weight-bold      "font-bold")
(def weight-extrabold "font-extrabold")

;; --- Tracking (letter-spacing) – three tiers only --------------------------
;; Consolidates the 6 inconsistent values found in the audit down to 3.
(def tracking-wide    "tracking-wide")          ;; 0.025em – modest
(def tracking-wider   "tracking-wider")         ;; 0.05em  – comfortable
(def tracking-label   "tracking-[0.15em]")      ;; 0.15em  – labels/eyebrows

;; --- Sizes ----------------------------------------------------------------
(def text-2xs  "text-[9px]")
(def text-xs   "text-[10px]")
(def text-xs+  "text-[11px]")
(def text-sm   "text-sm")                       ;; 14px
(def text-base "text-base")                     ;; 16px
(def text-lg   "text-lg")                       ;; 18px
(def text-xl   "text-xl")                       ;; 20px
(def text-2xl  "text-2xl")                      ;; 24px
(def text-3xl  "text-3xl")                      ;; 30px
(def text-4xl  "text-4xl")                      ;; 36px
(def text-5xl  "text-5xl")                      ;; 48px

;; --- Modifiers ------------------------------------------------------------
(def uppercase-    "uppercase")
(def italic-       "italic")
(def line-through- "line-through")
(def select-none-  "select-none")
(def nowrap-       "whitespace-nowrap")

;; ---------------------------------------------------------------------------
;; Composed text styles – the ready-to-use molecules
;; ---------------------------------------------------------------------------
;; Named after their *semantic role*, not their visual size.
;; Components should use these instead of ad-hoc class strings.

;; Headings -----------------------------------------------------------------
(def heading-display
  "The big section title (BUDGET, LOCATION, etc.)."
  (cx font-ui weight-bold uppercase- "leading-none"
      "text-4xl sm:text-5xl md:text-7xl"
      text-primary))

(def heading-page
  "Page-level H1."
  (cx font-ui weight-bold uppercase- text-inverse
      "text-3xl sm:text-4xl lg:text-6xl"))

(def heading-section
  "Sub-section headings (TESA 41, WIRE TRANSFER, etc.)."
  (cx font-ui weight-bold uppercase- tracking-wider text-xl text-primary))

(def heading-sm
  "Small heading used inside cards / tables."
  (cx font-ui weight-bold uppercase- tracking-wide text-sm
      "sm:text-base" text-secondary))

;; Eyebrows / labels --------------------------------------------------------
(def eyebrow
  "Tiny uppercase caption above headings (\"3. financials\")."
  (cx font-ui weight-bold uppercase- tracking-label text-xs text-faint))

(def label
  "Info-grid label, aside text, date stamps."
  (cx font-ui uppercase- tracking-label "text-[0.6rem]"
      "opacity-40" nowrap- select-none-))

(def label-sm
  "Even smaller meta-labels (sublabels, badges)."
  (cx font-ui uppercase- tracking-wider text-2xs weight-bold))

(def label-muted
  "Quieter version of the eyebrow for secondary use."
  (cx font-ui uppercase- tracking-wider text-xs weight-bold text-muted))

;; Body / prose -------------------------------------------------------------
(def body-lg
  "Primary body text (press release, about, why-support)."
  (cx text-xl text-secondary))

(def body-base
  "Standard reading text."
  (cx text-base text-secondary))

(def body-sm
  "Smaller detail text (descriptions, footnotes)."
  (cx text-sm text-muted))

(def body-closing
  "Closing italic aphorism."
  (cx font-ui italic- weight-normal text-lg text-primary))

;; Emphasis -----------------------------------------------------------------
(def em-strong
  "Bold + accent for highlighted names/terms in prose."
  (cx weight-semibold text-accent))

(def em-bold
  "Bold emphasis in primary color."
  (cx weight-semibold text-primary))

(def em-italic
  "Italic emphasis."
  italic-)

;; Values / numbers ---------------------------------------------------------
(def value-hero
  "Big hero number (target total)."
  (cx font-ui weight-extrabold "tracking-tight" text-3xl text-primary))

(def value-lg
  "Large numeric values (grand totals)."
  (cx font-ui weight-bold text-lg text-accent))

(def value-base
  "Standard numeric values."
  (cx font-ui weight-semibold text-base))

(def value-sm
  "Small numeric values in tables."
  (cx font-ui weight-semibold text-sm text-value))

(def value-currency
  "Inline currency figures in prose."
  (cx font-ui weight-bold text-inverse))

;; Interactive elements -----------------------------------------------------
(def link-subtle
  "Underlined link with soft decoration."
  "underline underline-offset-2 decoration-slate-400/30 dark:decoration-white/30 hover:decoration-slate-800/80 dark:hover:decoration-white/80 transition-all")

(def btn-text
  "Text-style button / toggle."
  (cx font-ui weight-bold uppercase- tracking-label text-xs
      text-faint "hover:text-pink-300 transition-colors"))

;; Navigation ---------------------------------------------------------------
(def nav-link
  "Section navigation links."
  (cx font-ui text-sm uppercase- tracking-wider
      "hover:text-pink-300 transition-colors"))

;; ---------------------------------------------------------------------------
;; Layout helpers — responsive containers
;; ---------------------------------------------------------------------------

(def container-prose
  "Readable width + horizontal padding."
  "px-4 max-w-prose")

(def section-spacing
  "Standard vertical rhythm between sections."
  "mb-6")

(def section-spacing-lg
  "Larger vertical rhythm."
  "mb-8 mt-8")

;; ---------------------------------------------------------------------------
;; Info-grid (press release header, general info, etc.)
;; ---------------------------------------------------------------------------

(def info-grid
  "Two-column label→value grid. Stacks on mobile."
  (cx "flex flex-col gap-4 border-l-2 pl-5" border-subtle))

(def info-row
  "Single row in the info-grid."
  "flex flex-col sm:flex-row sm:gap-8 sm:items-baseline")
