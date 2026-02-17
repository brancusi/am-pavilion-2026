# Style Guide — Armenian Pavilion 2026

Reference for visual styling across the Armenian Pavilion website.
Covers the design system: typography, color palette, component patterns, spacing, and anti-patterns.

---

## Philosophy

Modern, minimalist, tech/art. The aesthetic is **mathematical structure meets fine art** — geometric precision, clean grids, pattern and repetition. Two typefaces only: one Swiss grotesk (Neue Haas Grotesk Display) for display/prose, one monospaced (FiraCode) for data/labels. Weight is kept **light to medium** — the typeface does the work, not the boldness. Prose emphasis is through **brightness, not color** — white against slate-300 body text. Color accents (pink) are reserved for interactive elements only (buttons, hover states, CTAs). Information density over decoration. Data-forward, quietly confident.

---

## Typography

### Two-Font System

The site uses exactly two typefaces with clear, non-overlapping roles:

| Token / Class  | Typeface                  | Source        | Role                                                      |
| -------------- | ------------------------- | ------------- | --------------------------------------------------------- |
| `font-display` | Neue Haas Grotesk Display | Adobe Typekit | Headings, titles, names, navigation, prose body text      |
| `font-mono`    | FiraCode Variable         | Local woff2   | Labels, eyebrows, numbers, dates, financial figures, code |

**Style tokens** (in `amp.styles`):

- `s/font-display` → `"font-display"` → Neue Haas Grotesk Display
- `s/font-data` → `"font-mono"` → FiraCode
- `s/font-ui` → alias for `s/font-data` (legacy, prefer `font-data`)

**Rules:**

- Headings and titles: **always** `font-display`
- Prose body text: **always** `font-display`
- Numbers, financial figures, dates: **always** `font-mono`
- Labels, eyebrows, badges, tags: **always** `font-mono`
- Navigation links: `font-display`
- Never use `font-sans`, `font-helvetica`, `font-futura-book` — these are dead config

### Scale

| Role              | Style Token         | Resolves To                                                                          |
| ----------------- | ------------------- | ------------------------------------------------------------------------------------ |
| **Page title**    | `s/heading-page`    | `font-display font-semibold uppercase text-3xl sm:text-4xl lg:text-6xl`              |
| **Section title** | `s/heading-display` | `font-display font-semibold uppercase leading-none text-4xl sm:text-5xl md:text-7xl` |
| **Section head**  | `s/heading-section` | `font-display font-medium uppercase tracking-wider text-xl`                          |
| **Small heading** | `s/heading-sm`      | `font-display font-medium uppercase tracking-wide text-sm sm:text-base`              |
| **Eyebrow**       | `s/eyebrow`         | `font-mono font-semibold uppercase tracking-[0.15em] text-[10px]`                    |
| **Label**         | `s/label`           | `font-mono uppercase tracking-[0.15em] text-[0.6rem]`                                |
| **Lead body**     | `s/body-lg`         | `font-display text-lg`                                                               |
| **Body base**     | `s/body-base`       | `font-display text-base`                                                             |
| **Body small**    | `s/body-sm`         | `font-display text-sm`                                                               |
| **Financial fig** | `s/value-base`      | `font-mono font-semibold text-base`                                                  |
| **Tag / badge**   | `s/label-sm`        | `font-mono font-semibold uppercase tracking-wider text-[9px]`                        |

### Key Rules

- All numbers and financial figures: **always** `font-mono` (`s/font-data`)
- Headings: **always** `font-display` via style tokens (`s/heading-*`)
- Prose body text: `font-display` via `s/body-*` tokens
- Highlighted terms in prose: **brightness only** — `font-medium text-white` (via `s/em-strong`). No colored accents in prose.
- Dollar amounts in prose: `font-mono font-medium text-white` (via `s/value-currency`)
- Inline in components: prefer `s/font-display` or `s/font-data` over raw class strings
- Weight ceiling: `font-bold` (700) for hero titles only. All other headings: `font-semibold` (600) or `font-medium` (500). No `font-extrabold`.

---

## Color Palette

### Background

| Token             | Usage                              |
| ----------------- | ---------------------------------- |
| `bg-black`        | Primary background (timeline, etc) |
| `bg-slate-900`    | Card / row background              |
| `bg-slate-900/60` | Alternating row                    |
| `bg-slate-950`    | Deep emphasis (totals footer)      |
| `bg-slate-800/50` | Hover state                        |
| `bg-slate-800/40` | Expanded description background    |

### Pastel Accent Colors

These are the **core** accent colors. Pink is **interactive-only** (buttons, hover states, CTAs, dividers) — never for inline prose emphasis.

| Color           | Tailwind           | Hex       | Meaning                                 |
| --------------- | ------------------ | --------- | --------------------------------------- |
| **Pink-300**    | `text-pink-300`    | `#f9a8d4` | Interactive: buttons, hover, CTA        |
| **Amber-300**   | `text-amber-300`   | `#fcd34d` | High priority / secondary data          |
| **Indigo-300**  | `text-indigo-300`  | `#a5b4fc` | Normal / financial figures              |
| **Emerald-400** | `text-emerald-400` | `#34d399` | Paid / success / "now"                  |
| **White**       | `text-white`       | `#ffffff` | Prose emphasis (names, terms via em-\*) |

### Text Hierarchy

| Level     | Class            | Usage                       |
| --------- | ---------------- | --------------------------- |
| Primary   | `text-slate-100` | Headings, important labels  |
| Secondary | `text-slate-200` | Sub-headings, values        |
| Body      | `text-slate-300` | Prose, descriptions         |
| Muted     | `text-slate-400` | Field labels, metadata      |
| Dim       | `text-slate-500` | Eyebrows, timestamps, hints |
| Ghost     | `text-slate-600` | Line numbers, separators    |

### Accent Lines & Borders

| Pattern                          | Usage                        |
| -------------------------------- | ---------------------------- |
| `bg-pink-500/70` (1px high)      | Section eyebrow accent line  |
| `border-pink-500/30`             | Expanded content left border |
| `border-pink-500/40`             | Totals separator             |
| `border-slate-800`               | Subtle horizontal dividers   |
| `border-dashed border-slate-700` | Timeline spine / connectors  |

---

## Component Patterns

### Section Block

The canonical section wrapper. Pink accent line + eyebrow + large title.

```clojure
(d/div {:class "mb-6 flex items-center gap-3"}
       (d/div {:class "h-px w-10 bg-pink-500/70"})
       (d/p {:class "font-mono text-[10px] font-bold tracking-[0.25em] uppercase text-slate-500"}
            "1. eyebrow"))
(d/h2 {:class "font-mono font-bold uppercase leading-none text-5xl md:text-7xl"}
      "Title")
```

Lives in: `amp.components.elements.budget.section-block`

### Written By

Reusable author attribution. Inline eyebrow pattern.

```clojure
($ written-by {:author "Name" :class "mb-4"})
```

Renders as: `WRITTEN BY  Name` — both in `font-mono text-[10px]`, label in `text-slate-500`, name in `text-slate-400`.

Lives in: `amp.components.elements.written-by`

### Expandable Text Area

Section with preview/expanded toggle. Wraps `section-block` + preview component + full-text component + optional footer.

```clojure
($ expandable-text-area-2
   {:section-hint "financials"
    :title "budget"
    :expand-button-label "Read more"
    :preview-text preview        ;; component
    :full-text details           ;; component
    :footer-text footer})        ;; optional component
```

Lives in: `amp.components.elements.expandable-text-area`

### Data Table Row (Expandable)

Budget table sections use this pattern:

- **Collapsed**: `font-mono`, title left (`uppercase tracking-wide text-slate-200`), amount right (`text-indigo-300`), chevron icon
- **Expanded**: `border-l-2 border-pink-500/30` left accent, description in `text-sm bg-slate-800/40 text-slate-400`, detail items as numbered list
- **Section totals**: `bg-slate-950`, total in `text-pink-300`, tax in `text-amber-300/80`
- **Close button**: `text-[10px] uppercase tracking-[0.25em] text-slate-500 hover:text-pink-300`

### Timeline Node (Cash Flow)

- Left gutter: circle marker (colored border, filled if pending, hollow if paid) + dashed vertical spine
- Horizontal dashed connector
- Content: date + priority badge + status badge, title, amount
- Paid items: `opacity-50`, `text-slate-500 line-through`, hollow circle

### Priority Tags

```clojure
;; Background
:critical "bg-pink-500/15"
:high     "bg-amber-400/15"
:normal   "bg-indigo-400/15"

;; Text
:critical "text-pink-300"
:high     "text-amber-300"
:normal   "text-indigo-300"
```

### Status Tags

```clojure
:paid    {:dot "bg-emerald-400/20" :text "text-emerald-400" :label "PAID"}
:pending {:dot "bg-slate-500/15"   :text "text-slate-500"   :label "DUE"}
```

---

## Hover & Interaction

| Element          | Hover                                          |
| ---------------- | ---------------------------------------------- |
| Nav links        | `hover:text-pink-300 transition-colors`        |
| Table rows       | `hover:bg-slate-800/50 transition-colors`      |
| Toggle buttons   | `hover:text-pink-300 transition-colors`        |
| Chevron rotation | `transition-transform rotate-90` when expanded |

---

## Spacing Conventions

- Section top padding: `pt-12`
- Content padding: `px-4`
- Between sections: handled by section-block's `pt-12`
- Between items in a list: `pb-4` or `pb-5` per item (flow layout, not absolute)
- Eyebrow to title gap: `mb-6`
- Summary stat blocks: `gap-4 flex-wrap` with `border-l-2 pl-3` per stat

---

## Animation (GSAP)

All animations use GSAP (registered in `amp.core/start`). Common patterns:

| Element        | Animation                                          |
| -------------- | -------------------------------------------------- |
| Timeline nodes | `.fromTo` opacity 0→1, x -20→0, staggered by index |
| Month headers  | `.fromTo` opacity 0→1, y 8→0                       |
| Summary rows   | `.fromTo` opacity 0→1, x -16→0                     |
| Now marker     | `.fromTo` opacity 0→1, scaleX 0→1, origin-left     |
| Summary header | `.fromTo` opacity 0→1, y -12→0                     |
| Spine          | `.fromTo` scaleY 0→1, origin-top                   |

Standard easing: `"power2.out"` or `"power3.out"`. Delays stagger at `0.05`–`0.06` per index.

Elements start with `opacity-0` in CSS and are revealed by GSAP.

---

## Anti-Patterns (Do NOT Use)

| Avoid                              | Use Instead                                       |
| ---------------------------------- | ------------------------------------------------- |
| `font-helvetica`                   | `font-display` (NHG) or `font-mono` (Fira)        |
| `font-sans`                        | `font-display` for prose, `font-mono` for data    |
| `font-futura-book`                 | `font-display`                                    |
| Raw `"font-mono"` in components    | `s/font-data` token from `amp.styles`             |
| Raw `"font-futura"` in components  | `s/font-display` token from `amp.styles`          |
| Inline `:style {:font-family ...}` | Tailwind class via token                          |
| `font-extrabold` on headings       | `font-bold` max (hero only), else `font-semibold` |
| `font-bold` on section heads       | `font-medium` (`s/heading-section`)               |
| `font-semibold` + pink on names    | `font-medium` + `text-white` (`s/em-strong`)      |
| Pink/color in prose emphasis       | Brightness only: `s/em-strong` = white            |
| `text-xl` for all body text        | `text-lg` for lead, `text-base` for running prose |
| `bg-blue-*`                        | `bg-slate-900` / `bg-slate-950`                   |
| `border-blue-*`                    | `border-pink-500/*` or `border-slate-*`           |
| `text-blue-*`                      | Pastel palette (pink/amber/indigo/emerald)        |
| `text-pink-400`                    | `text-pink-300` (softer pastel)                   |
| `rounded-*`                        | No border radius                                  |
| `backdrop-blur-*`                  | Flat solid backgrounds                            |
| `bg-gradient-*`                    | Flat colors only                                  |
| `italic` for headings              | `uppercase tracking-wide`                         |
| Large `border-l-8`                 | `border-l-2`                                      |
| `text-2xl` for totals              | `text-lg` or `text-base` with `font-semibold`     |

---

## File Map

| File                                    | Purpose                         |
| --------------------------------------- | ------------------------------- |
| `elements/budget/section_block.cljs`    | Section wrapper (eyebrow+title) |
| `elements/written_by.cljs`              | Author attribution              |
| `elements/expandable_text_area.cljs`    | Preview/expand toggle wrapper   |
| `elements/budget/budget_table.cljs`     | Expandable cost table           |
| `elements/budget/cost_breakdown.cljs`   | Budget prose + table            |
| `elements/budget/cash_flow.cljs`        | Timeline component              |
| `elements/budget/non_profit.cljs`       | Donation / bank details         |
| `elements/budget/about.cljs`            | About section with gallery      |
| `elements/budget/committe.cljs`         | Committee members + gallery     |
| `elements/budget/location_section.cljs` | Venue details + map             |
| `sections/budget_section.cljs`          | Budget page aggregator          |
| `sections/press_release.cljs`           | Press release section           |
