(ns amp.styles
  "Centralized design-token system for the Armenia Pavilion 2026 site.

   Values follow the Armenia Pavilion design system: colours are the CSS
   custom properties declared in resources/css/tailwind.css (light on :root,
   dark on .dark), exposed to Tailwind as `paper`, `ink`, `red`, `blue`…;
   type is Jost (display), Newsreader (body) and IBM Plex Mono (labels).
   Components with their own markup live there as `ap-` classes.

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
(def text-primary    "text-ink")
(def text-secondary  "text-ink")
(def text-muted      "text-ink-muted")
(def text-faint      "text-ink-muted")
(def text-ghost      "text-ink-muted opacity-70")
(def text-inverse    "text-ink")

;; --- Accent palette – semantic roles --------------------------------------
(def text-accent     "text-red-text")
(def text-accent-50  "text-ink-muted")
(def text-value      "text-blue-text")
(def text-positive   "text-emerald-600 dark:text-emerald-300")
(def text-positive-50 "text-emerald-600/50 dark:text-emerald-300/50")
(def text-warning    "text-amber-600  dark:text-amber-300")
(def text-warning-80 "text-amber-600/80 dark:text-amber-300/80")
(def text-warning-50 "text-amber-600/50 dark:text-amber-300/50")
(def text-danger     "text-rose-600   dark:text-rose-400")
(def text-error      "text-red-600    dark:text-red-400")

;; --- Backgrounds ----------------------------------------------------------
(def bg-surface      "bg-paper-raised")
(def bg-surface-alt  "bg-paper-sunk")
(def bg-overlay      "bg-white/40     dark:bg-black/40")
(def bg-page         "bg-paper")
(def bg-chrome       "bg-paper")
(def bg-glass        "bg-paper")
(def bg-footer       "bg-night text-on-night")

;; --- Borders / dividers ---------------------------------------------------
(def border-subtle   "border-rule")
(def border-glass    "border-b border-rule-strong")
(def border-accent   "border-red")
(def divider-accent  "h-px bg-rule-strong")

;; ---------------------------------------------------------------------------
;; Typography scale — atomic building blocks
;; ---------------------------------------------------------------------------
;; These are *atoms*: combine them freely to build any text style.

;; --- Font families --------------------------------------------------------
;; Three families (Google Fonts, see tailwind.config.js):
;; Jost for display, Newsreader for reading, IBM Plex Mono for labels and data.
(def font-display "font-display")              ;; Jost — headings, titles, numerals
(def font-body    "font-body")                  ;; Newsreader — prose body copy
(def font-data    "font-mono")                  ;; IBM Plex Mono — labels, numbers, eyebrows
;; Aliases kept for semantic clarity
(def font-ui      font-data)
(def font-prose   font-body)

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
(def tracking-label   "tracking-[0.08em]")      ;; 0.08em  – labels/eyebrows

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
  (cx font-display weight-medium "leading-[0.95] tracking-[-0.015em]"
      "text-[40px] sm:text-5xl md:text-[64px]"
      text-primary))

(def heading-page
  "Page-level H1."
  (cx font-display weight-medium text-inverse "leading-[0.95] tracking-[-0.015em]"
      "text-[40px] sm:text-5xl lg:text-[64px]"))

(def heading-section
  "Sub-section headings (TESA 41, WIRE TRANSFER, etc.)."
  (cx font-display weight-medium "text-[22px] sm:text-[28px] leading-tight" text-primary))

(def heading-sm
  "Small heading used inside cards / tables."
  (cx font-display weight-medium "text-lg sm:text-xl leading-snug" text-secondary))

;; Eyebrows / labels --------------------------------------------------------
(def eyebrow
  "Tiny uppercase caption above headings (\"3. financials\")."
  (cx font-ui weight-medium uppercase- tracking-label "text-xs" text-muted))

(def eyebrow-midlight
  "Tiny uppercase caption above headings (\"3. financials\")."
  (cx font-ui weight-medium uppercase- tracking-label "text-xs" text-muted))


(def eyebrow-highlight
  "Tiny uppercase caption above headings (\"3. financials\")."
  (cx font-ui weight-medium uppercase- tracking-label "text-xs" text-accent))

(def label
  "Info-grid label, aside text, date stamps."
  (cx font-ui uppercase- tracking-label "text-[11px]"
      text-muted nowrap- select-none-))

(def label-sm
  "Even smaller meta-labels (sublabels, badges)."
  (cx font-ui uppercase- tracking-wider text-2xs weight-semibold))

(def label-muted
  "Quieter version of the eyebrow for secondary use."
  (cx font-ui uppercase- tracking-wider text-xs weight-semibold text-muted))

;; Body / prose -------------------------------------------------------------
;; All body copy uses Newsreader (font-body), left-aligned, with a consistent
;; normal (400) weight. The only differentiator is size. Use s/em-strong or
;; s/em-bold for inline emphasis in prose — never change the base weight.
(def body-lg
  "Lead paragraph (press release, about, why-support). Slightly larger."
  (cx font-body "text-[21px] sm:text-[24px]" weight-normal text-secondary "leading-[1.4]"))

(def body-base
  "Standard reading text."
  (cx font-body "text-lg sm:text-xl" weight-normal text-secondary "leading-[1.6]"))

(def body-sm
  "Smaller detail text (descriptions, footnotes)."
  (cx font-body text-base weight-normal text-muted "leading-normal"))

(def body-closing
  "Closing italic aphorism."
  (cx font-body italic- weight-normal "text-2xl sm:text-[28px]" text-primary "leading-snug"))

;; Emphasis -----------------------------------------------------------------
(def em-strong
  "Brightness emphasis for names/terms in prose — no color, just weight + white."
  (cx weight-semibold text-inverse))

(def em-bold
  "Medium-weight emphasis in primary color."
  (cx weight-medium text-primary))

(def em-italic
  "Italic emphasis."
  italic-)

;; Values / numbers ---------------------------------------------------------
(def value-hero
  "Big hero number (target total)."
  (cx font-ui weight-bold "tracking-tight" text-3xl text-primary))

(def value-lg
  "Large numeric values (grand totals)."
  (cx font-ui weight-semibold text-lg text-accent))

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
  "underline underline-offset-4 decoration-2 decoration-red-text hover:text-red-text transition-colors")

(def link-hover-accent
  "Hover color transition for interactive links."
  "hover:text-red-text transition-colors")

(def btn-text
  "Text-style button / toggle."
  (cx font-ui weight-semibold uppercase- tracking-label text-xs
      text-faint link-hover-accent))

;; Person / credit blocks ---------------------------------------------------
(def person-name
  "Display name in curator/artist cards. Uppercase blocky treatment."
  (cx font-display weight-medium
      "text-xl sm:text-2xl leading-tight" text-inverse))

(def person-name-lg
  "Larger display name (artist section, curator section headings)."
  (cx font-display weight-medium
      "text-3xl sm:text-[40px] leading-[1.05]" text-inverse))

(def person-role
  "Role / title label beneath a person's name."
  (cx font-ui weight-medium "text-xs" uppercase- tracking-label text-muted))

(def written-by-label
  "The 'BY' prefix in written-by attribution."
  (cx font-ui weight-medium "text-xs" uppercase- tracking-label text-faint))

(def written-by-name
  "Author name in written-by attribution."
  (cx font-display weight-medium text-xl text-muted))

;; Footer micro-headings ----------------------------------------------------
(def footer-heading
  "Small uppercase label above footer columns (Quick Links, Get in Touch, etc.)."
  (cx font-ui "text-xs" weight-medium uppercase- tracking-label "opacity-80"))

;; Navigation ---------------------------------------------------------------
(def nav-link
  "Section navigation links."
  (cx font-ui "text-xs" weight-medium uppercase- tracking-label
      "hover:text-red-text transition-colors"))

;; ---------------------------------------------------------------------------
;; Layout helpers — responsive containers
;; ---------------------------------------------------------------------------

(def content-column
  "Centered column that caps width on large screens."
  "w-full lg:w-8/12 max-w-[1100px] min-w-0")

(def content-column-container
  "Flex wrapper that centers the content-column."
  "w-full max-w-full overflow-x-hidden flex justify-center")

(def container-prose
  "Readable width + horizontal padding."
  "px-4 max-w-prose")

(def section-pt
  "Standard top padding entering a content section."
  "pt-12 sm:pt-14")

(def section-pb
  "Standard bottom padding leaving a content section."
  "pb-10 sm:pb-12")

;; ---------------------------------------------------------------------------
;; Page shell — universal page wrapper
;; ---------------------------------------------------------------------------

(def page-shell
  "Universal page wrapper: min-height, page background, nav clearance, default text color.
   Every routed page (except landing) should apply this to its outermost div."
  (cx "min-h-screen" bg-page text-primary))

;; ---------------------------------------------------------------------------
;; Info-grid (press release header, general info, etc.)
;; ---------------------------------------------------------------------------

(def info-grid
  "Two-column label→value grid. Stacks on mobile."
  (cx "flex flex-col gap-0 border-t border-rule-strong"))

(def info-row
  "Single row in the info-grid. Grid on sm+ so values align flush-left."
  "flex flex-col py-3 border-b border-rule sm:grid sm:grid-cols-[8rem_1fr] sm:gap-4 sm:items-baseline")
