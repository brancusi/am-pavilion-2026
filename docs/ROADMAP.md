# Roadmap

## 2026-02-24 — Shared Page Shell & Artist Section Headers

**Goal:** Eliminate per-page nav clearance hacks by creating a universal `page-shell` component, and replace the budget-specific `section-block` headers on the artist page with the lighter venue-style eyebrow pattern.

**Current state:**

- Every page independently handles nav clearance for the fixed `h-14` top nav: budget uses `pt-14`, venue uses `pt-24`, artist has none, blog/press use vertical centering. Each new page must rediscover and reimplement this.
- Artist section headers use `section-block` from `pages/budget/` — a numbered eyebrow + massive `heading-display` (4xl→7xl) pattern that is budget-specific and visually too heavy for narrative prose pages.
- The venue page has a lighter eyebrow pattern (`venue-eyebrow`) that is inline in `venue/page.cljs` and not reusable.

**Target state:**

- A shared `amp.ui.page-shell` component that wraps any routed page with: `min-h-screen grey-grad`, `text-primary`, `pt-14` nav clearance, content-column centering, and optional `back-up-nav`. All page views use it.
- A shared `amp.ui.section-header` component extracted from the venue pattern: stacked pink accent lines around a muted label, plus a display heading. Available for any page to import.
- Artist sections use the new `section-header` instead of `section-block`.
- `s/page-shell` style token in `amp.styles` for pages that only need the class string without the component.

**Key decisions:**

- **Component vs token:** Both. `s/page-shell` is the class string for simple pages (blog, press). `amp.ui.page-shell` is the full component with content-column and back-up-nav for rich pages (artist, venue, budget).
- **Landing page excluded:** The landing page has full-bleed hero sections and snap-scroll behavior — it intentionally skips nav clearance. It will NOT use `page-shell`.
- **Budget page:** Will use `page-shell` for the outer wrapper but keeps its own `section-block` headers (numbered eyebrow is correct for its data-dense TOC-style layout).
- **Venue eyebrow extraction:** The `venue-eyebrow` component and `venue-display` heading def move to `amp.ui.section-header` so both venue and artist pages can share them.

### Tasks

- [x] **Step 1 — Add `page-shell` token to `styles.cljs`** (2026-02-24)
      Add `s/page-shell` class string: `"min-h-screen grey-grad pt-14"` + `text-primary`.

- [x] **Step 2 — Create `amp.ui.page-shell` component** (2026-02-24)
      Shared page wrapper: page-shell classes + content-column + optional back-up-nav.

- [x] **Step 3 — Create `amp.ui.section-header` component** (2026-02-24)
      Extract venue-eyebrow + venue-display into a reusable component.

- [x] **Step 4 — Migrate artist sections to `section-header`** (2026-02-24)
      Replace `section-block` imports with `section-header` in works, escape, video, return. Add `expandable-text-area-light` variant for biography. Remove `idx` props.

- [x] **Step 5 — Migrate all pages to `page-shell`** (2026-02-24)
      Update artist, venue, budget, blog, press pages to use the shared wrapper.

- [x] **Step 6 — Validate release build** (2026-02-24)
      Run `npm run release` — completed with only the expected medley warning.

## 2026-02-25 — Font Audit & Body Copy Unification

**Goal:** Remove dead font references, unify all body copy to a single consistent style (Source Sans Pro, normal weight, justified), centralize all inline font/weight/size/color into shared tokens, and enable removal of unused Adobe fonts.

**Current state:**

- Dead `futura-100` / `futura-100-book` @font-face declarations in CSS, unused `futura` Tailwind alias.
- Body copy tokens (`body-lg` vs `body-base`) use different weights (bold vs medium), creating jarring shifts between expandable-text preview and expanded content.
- ~52 inline font-family, ~45 inline font-weight, ~100+ inline text-size, and ~80+ inline text-color occurrences across components.
- Landing page sections (teaser, curators, artist, in-minor-keys) use all-inline typography.
- No shared tokens for person names, role labels, footer headings, or written-by patterns.

**Target state:**

- Dead font CSS and Tailwind config removed. Adobe font project can drop unused families.
- All body copy uses Source Sans Pro (`font-body`) at `font-normal` (400) weight, justified, with consistent leading.
- New semantic tokens: `person-name`, `person-name-lg`, `person-role`, `written-by-label`, `written-by-name`, `footer-heading`, `link-hover-accent`.
- Landing page sections, footer, written-by, press-release footer, and committee page migrated to tokens.

### Tasks

- [x] **Step 1 — Remove dead font references** (2026-02-25)
      Removed futura-100/futura-100-book @font-face from CSS, futura alias from Tailwind config.

- [x] **Step 2 — Unify body copy tokens** (2026-02-25)
      Standardized body-lg/body-base/body-sm/body-closing to font-normal weight with leading-relaxed.

- [x] **Step 3 — Add semantic tokens** (2026-02-25)
      Added person-name, person-name-lg, person-role, written-by-label/name, footer-heading, link-hover-accent to styles.cljs.

- [x] **Step 4 — Migrate landing sections** (2026-02-25)
      Migrated teaser, curators, artist, in-minor-keys to use centralized tokens.

- [x] **Step 5 — Migrate written-by, footer, press-release, committee** (2026-02-25)
      Replaced all inline font/color classes with shared tokens.

- [x] **Step 6 — Validate release build** (2026-02-25)
      Run `npm run release` — completed with only the expected medley warning.

## 2026-02-25 — Remove Neue Haas Grotesk Display, Unify to Source Sans Pro

**Goal:** Eliminate Neue Haas Grotesk Display from the font stack and unify all text — display headings, navigation, and body copy — to Source Sans Pro. Reduces the two Adobe Typekit fonts to one.

**Current state:**

- `font-display` Tailwind class resolves to `neue-haas-grotesk-display, neue-haas-grotesk-text, sans-serif`.
- `font-body` resolves to `source-sans-pro, Helvetica, Arial, sans-serif`.
- ~20 `s/font-display` token usages and 4 raw `"font-display"` strings across 12 source files.
- Adobe Typekit project serves both NHG Display + Source Sans Pro.

**Target state:**

- Both `font-display` and `font-body` resolve to `source-sans-pro, Helvetica, Arial, sans-serif`.
- Two-font system: Source Sans Pro (all text) + FiraCode (data/labels).
- Adobe Typekit project can drop NHG Display and NHG Text.
- No remaining `neue-haas-grotesk` references in source.

### Tasks

- [x] **Step 1 — Update Tailwind font config** (2026-02-25)
      Changed `display` font-family to Source Sans Pro stack in `tailwind.config.js`.

- [x] **Step 2 — Update styles.cljs comments** (2026-02-25)
      Updated font-family section from three-font to two-font documentation.

- [x] **Step 3 — Clean up raw font-display strings** (2026-02-25)
      Replaced 4 raw `"font-display"` strings in hero.cljs, portrait.cljs, button.cljs, footer.cljs with tokens.

- [x] **Step 4 — Update docs** (2026-02-25)
      Updated SKILL.md, ROADMAP.md, and CHANGELOG.md to reflect two-font system.

- [x] **Step 5 — Validate release build** (2026-02-25)
      Run `npm run release` — completed with only the expected medley warning.

<!-- Add new initiatives above this line -->
