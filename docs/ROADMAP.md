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

<!-- Add new initiatives above this line -->
