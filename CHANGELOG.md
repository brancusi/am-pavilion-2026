# Changelog

<!-- Append new entries above this line -->

## 2026-04-08 — Dedicated Donations Page

**Rationale:** Donation information was split between direct Stripe buttons and the budget page's bank-transfer section, leaving no single shareable page for patrons, institutions, or supporters.
**Summary:** Added a dedicated `/donate` page that combines the project's support narrative, Stripe giving flow, and domestic/international bank-transfer instructions. Centralized donation data so the new page, budget section, and existing donation CTAs stay in sync.

### Changes

- Added `src/amp/data/donations.cljs` as the single source of truth for the Stripe URL, nonprofit details, receipt note, and transfer instructions.
- Added `src/amp/pages/donations/page.cljs` with a new routed donations experience using the site's existing visual language and support messaging.
- Updated `src/amp/services/router.cljs` and `shadow-cljs.edn` to register the new `/donate` route and lazy-loaded `:donations-view` module.
- Updated `src/amp/nav/logo.cljs` and `src/amp/ui/footer.cljs` so existing Donate CTAs route through the new donations page, while the footer keeps direct Stripe checkout available on `/donate` itself.
- Updated `src/amp/pages/budget/non_profit.cljs` to reuse the centralized donation data instead of duplicating bank-transfer details.

### Migration Notes

- Share the donations page at `/donate` for supporters who need both Stripe and bank-transfer options.
- Run `npm run release` after changing donation details to propagate updates to the routed page and budget section.
- None — backward compatible.

## 2026-02-27 — Social Links & Blog Share Bar

**Rationale:** An art-event pavilion site needs social media presence and easy content sharing. The footer had no social links, and blog posts had no way for visitors to share them.
**Summary:** Added social media profile links (Instagram, Facebook, X, YouTube) to the global footer and a share bar to blog post pages (Facebook, X, LinkedIn, WhatsApp, email, copy link).

### Changes

| File                           | Change                                                                                                              |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `src/amp/ui/social_icons.cljs` | New: SVG icon components for Instagram, Facebook, X/Twitter, YouTube, LinkedIn, WhatsApp, Email, Link, Share, Check |
| `src/amp/ui/social_links.cljs` | New: footer social-links component rendering profile icons under a "Follow Us" heading                              |
| `src/amp/ui/share_bar.cljs`    | New: blog share bar with platform share buttons + copy-to-clipboard with "Copied!" feedback                         |
| `src/amp/ui/footer.cljs`       | Added social-links column; grid changed from 3-col to 4-col (`sm:grid-cols-2 md:grid-cols-4`)                       |
| `src/amp/pages/blog/post.cljs` | Added share-bar below author byline and above "All Posts" back link                                                 |

### Migration Notes

- Social profile URLs are placeholder handles (`armenianpavilion2026`). Update to real handles when accounts are created.
- None — backward compatible.

## 2026-02-25 — Hard-Coded Blog with Slug-Based Routing

**Rationale:** The site needed a blog/journal section for project updates. A hard-coded approach (posts as ClojureScript namespaces) is the simplest possible system — no CMS, no API calls, no async loading states for text. Adding a post means adding a namespace and a registry entry.
**Summary:** Implemented a full blog system with `/blog` index page and `/blog/:slug` individual post pages. Posts are hard-coded ClojureScript data + component functions. Added parameterized routing to reitit for the first time. Blog enabled in navigation.

### Changes

| File                                                         | Change                                                                                                     |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------- |
| `src/amp/services/router.cljs`                               | Added parameterized `/blog/:slug` route alongside `/blog` index, both resolving to the `:blog-view` module |
| `src/amp/pages/blog/page.cljs`                               | Rewrote from "coming soon" placeholder to route dispatcher (index vs post based on slug param)             |
| `src/amp/pages/blog/registry.cljs`                           | New: post slug → metadata+component registry                                                               |
| `src/amp/pages/blog/index.cljs`                              | New: blog index page with post cards (title, date, summary, cover thumbnail)                               |
| `src/amp/pages/blog/post.cljs`                               | New: individual post page wrapper with eyebrow, title, author, back link, 404 fallback                     |
| `src/amp/pages/blog/posts/pavilion_construction_begins.cljs` | New: starter post about construction at Tesa 41                                                            |
| `src/amp/pages/blog/posts/venice_arrival.cljs`               | New: starter post about team arriving in Venice                                                            |
| `src/amp/ui/skeleton.cljs`                                   | New: shimmer placeholder component (`skeleton-box`) with configurable aspect ratio                         |
| `src/amp/nav/menu.cljs`                                      | Uncommented blog from `nav-items` to enable it in navigation                                               |

### Migration Notes

- To add a new blog post: create a namespace in `src/amp/pages/blog/posts/`, export `post-meta` and `post-content`, then require it in `registry.cljs` and add the meta to the `posts` vector.
- No new shadow-cljs module entries needed — all blog code loads via the existing `:blog-view` module.
- None — backward compatible.

## 2026-02-25 — Unify Expandable Text to body-base (16 px)

**Rationale:** Expandable text sections used `body-lg` (18 px) for preview/lead paragraphs and `body-base` (16 px) for continuation paragraphs, creating a visible size jump on expand.
**Summary:** Changed all preview and details lead paragraphs from `s/body-lg` to `s/body-base` so text stays at a uniform 16 px throughout expand/collapse. Fixed `location.cljs` preview which had no body token at all.

### Changes

| File                                       | Change                                                                          |
| ------------------------------------------ | ------------------------------------------------------------------------------- |
| `src/amp/pages/landing/studio.cljs`        | Preview + details lead ¶ `s/body-lg` → `s/body-base`                            |
| `src/amp/pages/landing/in_minor_keys.cljs` | Preview + details lead ¶ `s/body-lg` → `s/body-base`                            |
| `src/amp/pages/artist/biography.cljs`      | Preview + details lead ¶ `s/body-lg` → `s/body-base`                            |
| `src/amp/pages/landing/press_release.cljs` | Details paragraph 1 `s/body-lg` → `s/body-base`                                 |
| `src/amp/pages/budget/location.cljs`       | Preview `class ""` → `s/body-base`; details wrapper `s/body-lg` → `s/body-base` |
| `.github/skills/styles/SKILL.md`           | Corrected body token table to match actual `styles.cljs` definitions            |

## 2026-02-25 — Remove Neue Haas Grotesk Display, Unify to Source Sans Pro

**Rationale:** Simplify the font stack from three typefaces to two. Neue Haas Grotesk Display was the sole other Adobe Typekit font besides Source Sans Pro. Removing it reduces external font dependencies, download weight, and visual complexity — the site now uses Source Sans Pro for all text (headings, nav, body) and FiraCode for data/labels.
**Summary:** Changed `font-display` Tailwind class to resolve to Source Sans Pro instead of Neue Haas Grotesk Display. Cleaned up raw `"font-display"` strings in 4 component files. Updated all documentation to reflect the two-font system.

### Changes

| File                                 | Change                                                                             |
| ------------------------------------ | ---------------------------------------------------------------------------------- |
| `tailwind.config.js`                 | `display` font-family changed from NHG Display to Source Sans Pro stack            |
| `src/amp/styles.cljs`                | Updated font-family comments from three-font to two-font system                    |
| `src/amp/pages/landing/hero.cljs`    | Replaced 2 raw `"font-display"` strings with `s/font-display` token via `s/cx`     |
| `src/amp/pages/artist/portrait.cljs` | Replaced inline `"font-display font-medium text-xs..."` with `s/person-role` token |
| `src/amp/ui/button.cljs`             | Changed raw `font-display` to `font-body` in class string                          |
| `src/amp/ui/footer.cljs`             | Replaced raw `"font-display"` with `s/font-display` token                          |
| `.github/skills/styles/SKILL.md`     | Updated to two-font system documentation, added NHG to anti-patterns               |

### Migration Notes

- You can now remove **Neue Haas Grotesk Display** and **Neue Haas Grotesk Text** from your Adobe Fonts web project. Only **Source Sans Pro** is needed from Typekit.
- The `font-display` Tailwind class still works — it now resolves to Source Sans Pro instead of NHG.
- All `s/font-display` tokens remain valid; they simply render in Source Sans Pro.

## 2026-02-25 — Font Audit & Body Copy Unification

**Rationale:** Body copy was inconsistent across sections — `body-lg` used `font-bold` while `body-base` used `font-medium`, creating jarring weight shifts between expandable-text previews and expanded content. Dead font references (`futura-100`, `futura-100-book`) cluttered the CSS. Over 250 inline font/weight/size/color classes across components made global style changes impossible from a single location.
**Summary:** Removed all dead font declarations. Unified body copy to Source Sans Pro (`font-body`) at normal (400) weight, justified, with consistent leading. Added 7 new semantic tokens for person names, role labels, footer headings, and written-by patterns. Migrated 8 component files from inline classes to shared tokens.

### Changes

| File                                       | Change                                                                                                                                                                                 |
| ------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `resources/css/tailwind.css`               | Removed all `futura-100` and `futura-100-book` @font-face declarations                                                                                                                 |
| `tailwind.config.js`                       | Removed `futura` legacy font alias                                                                                                                                                     |
| `src/amp/styles.cljs`                      | Unified body tokens to `font-normal` weight; added `person-name`, `person-name-lg`, `person-role`, `written-by-label`, `written-by-name`, `footer-heading`, `link-hover-accent` tokens |
| `src/amp/pages/landing/teaser.cljs`        | Migrated title/subtitle/body/info-grid from inline to `s/` tokens                                                                                                                      |
| `src/amp/pages/landing/curators.cljs`      | Migrated name/role/bio/heading from inline to `s/person-name`, `s/person-role`, `s/body-base`                                                                                          |
| `src/amp/pages/landing/artist.cljs`        | Migrated name/role/heading from inline to `s/person-name-lg`, `s/person-role`                                                                                                          |
| `src/amp/pages/landing/in_minor_keys.cljs` | Migrated curator card name/role from inline to tokens                                                                                                                                  |
| `src/amp/pages/landing/press_release.cljs` | Migrated header font classes to tokens; replaced inline `text-red-*` with `s/text-warning`/`s/text-danger`                                                                             |
| `src/amp/pages/budget/committee.cljs`      | Replaced inline `text-red-*` with `s/text-warning`/`s/text-danger`                                                                                                                     |
| `src/amp/ui/written_by.cljs`               | Replaced inline font/color with `s/written-by-label`/`s/written-by-name`                                                                                                               |
| `src/amp/ui/footer.cljs`                   | Migrated heading/link/CTA classes to `s/footer-heading`, `s/link-hover-accent`, `s/body-sm`                                                                                            |
| `.github/skills/styles/SKILL.md`           | Updated to three-font system doc, justified body copy, new token references                                                                                                            |

### Migration Notes

- You can now remove **Futura PT** from your Adobe Fonts web project — it is no longer referenced anywhere.
- The `font-futura` Tailwind class no longer resolves. Any remaining ad-hoc uses will show the browser’s default sans-serif.
- Body copy weight changed from bold/medium mix to uniform normal (400). Emphasis should use `s/em-strong` or `s/em-bold` inline spans.
- None — backward compatible for all other components.

## 2026-02-24 — Shared Page Shell & Section Headers

**Rationale:** Every page independently handled fixed nav clearance (budget `pt-14`, venue `pt-24`, artist none, blog/press none). The artist page reused budget-specific `section-block` headers (numbered eyebrows + massive display headings) that were visually too heavy for narrative prose. The venue page had a lighter eyebrow pattern but it was inline and not reusable.
**Summary:** Created a universal `page-shell` component and `section-header` component. Migrated all pages (artist, venue, budget, blog, press) to use `page-shell` for consistent nav clearance and background. Replaced artist section headers with the lighter venue-style eyebrow pattern. Added an `expandable-text-area-light` variant for the biography section.

### Changes

| File                           | Change                                                                                       |
| ------------------------------ | -------------------------------------------------------------------------------------------- |
| `styles.cljs`                  | Added `s/page-shell` token (`min-h-screen pt-14 grey-grad text-primary`)                     |
| `ui/page_shell.cljs` (new)     | Shared page wrapper: page-shell classes + content-column + back-up-nav                       |
| `ui/section_header.cljs` (new) | Extracted venue-style eyebrow (`section-eyebrow`) + display heading (`section-header`)       |
| `ui/expandable_text.cljs`      | Added `expandable-text-area-light` variant using `section-header` instead of `section-block` |
| `pages/artist/page.cljs`       | Replaced inline wrapper with `page-shell`; removed `:idx` props from section calls           |
| `pages/artist/biography.cljs`  | Switched from `expandable-text-area-2` to `expandable-text-area-light`                       |
| `pages/artist/works.cljs`      | Replaced `section-block` with `section-header`                                               |
| `pages/artist/escape.cljs`     | Replaced `section-block` with `section-header`                                               |
| `pages/artist/video.cljs`      | Replaced `section-block` with `section-header`                                               |
| `pages/artist/return.cljs`     | Replaced `section-block` with `section-header`                                               |
| `pages/venue/page.cljs`        | Migrated to `page-shell`; replaced inline `venue-eyebrow` with shared `section-eyebrow`      |
| `pages/budget/section.cljs`    | Migrated to `page-shell`; kept budget-specific `section-block` headers                       |
| `pages/blog/page.cljs`         | Migrated to `page-shell`                                                                     |
| `pages/press/page.cljs`        | Migrated to `page-shell`                                                                     |

### Migration Notes

- Landing page intentionally excluded — full-bleed hero sections skip nav clearance.
- Budget page keeps its own `section-block` headers (numbered eyebrow is correct for TOC/data layout).
- `section-block` remains in `pages/budget/` and `expandable-text-area`/`expandable-text-area-2` still reference it for backward compat.

## 2026-02-24 — Artist Deep-Dive Page

**Rationale:** The `/artist` route was a single-line "coming soon" placeholder. The site needed a full content page covering Zadikian's biography, artwork, escape story, video, and connection to Armenia/Venice.
**Summary:** Replaced the placeholder with a six-section deep-dive page: hero portrait, expandable biography, artwork gallery, escape narrative, embedded video, and the return-to-Armenia story. All sections use existing reusable components (`section-block`, `expandable-text-area-2`, `lazy-image-gallery`, `video-background`, `lazy-image-with-overlay`) and follow the site's dual-mode design token system. Content is stubbed with realistic placeholder text and existing imgix/Mux assets — marked with TODO comments for future replacement.

### Changes

| File                                | Change                                                                   |
| ----------------------------------- | ------------------------------------------------------------------------ |
| `pages/artist/page.cljs`            | Rewritten from placeholder to page aggregator importing all six sections |
| `pages/artist/portrait.cljs` (new)  | Hero portrait section with name/role overlay and pull-quote              |
| `pages/artist/biography.cljs` (new) | Expandable biography with preview/full-text pattern                      |
| `pages/artist/works.cljs` (new)     | Artwork gallery using `lazy-image-gallery` with stub slides              |
| `pages/artist/escape.cljs` (new)    | Escape-from-Soviet-Union narrative prose section                         |
| `pages/artist/video.cljs` (new)     | Embedded artist-speaking video via `video-background`                    |
| `pages/artist/return.cljs` (new)    | Return-to-Armenia narrative with closing aphorism                        |

### Migration Notes

- None — backward compatible. No routing, module-splitting, or dependency changes required.

## 2026-02-24 — Site-Wide Layout Shell (Shared Footer & Chrome)

**Rationale:** The footer only rendered on the landing page. All other pages (Visit, Budget, Artist, Blog, Press) ended abruptly with no footer, CTA, or contact info. Each page that wanted a footer had to import and render its own copy, leading to duplicate components (`pages/landing/footer.cljs`, `pages/budget/footer.cljs`) with slightly different content.
**Summary:** Created a unified `amp.ui.footer` component with route-aware Quick Links (scroll-to-id on the landing page, site navigation links on other pages). Integrated it into `section-transitioner.cljs` (the layout shell) so every page automatically gets the footer. Added a `:hide-footer?` route-data flag for opt-out — the Mockup page uses this since it's a full-screen 3D experience. Deleted the two old page-specific footer files.

### Changes

| File                                  | Change                                                                                                                                                                |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ui/footer.cljs` (new)                | Unified site-wide footer with route-aware Quick Links, CTA, contact info, org info, and bottom bar                                                                    |
| `ui/section_transitioner.cljs`        | Added `site-footer` import; restructured DOM so footer renders after the view-stack (outside `relative` context); conditionally hidden via `:hide-footer?` route flag |
| `services/router.cljs`                | Added `:hide-footer? true` to the Mockup route; updated `routes` fn to pass `hide-footer?` through to route data                                                      |
| `pages/landing/page.cljs`             | Removed `site-footer` import and render                                                                                                                               |
| `pages/budget/section.cljs`           | Removed `budget-footer` import and render                                                                                                                             |
| `pages/landing/footer.cljs` (deleted) | Superseded by `ui/footer.cljs`                                                                                                                                        |
| `pages/budget/footer.cljs` (deleted)  | Superseded by `ui/footer.cljs`                                                                                                                                        |

### Migration Notes

- None — backward compatible. The footer now appears on all pages except Mockup automatically.

## 2026-02-24 — Nav Redesign & Theme Toggle Integration

**Rationale:** The navigation bar used hardcoded `bg-black/80 backdrop-blur-sm` backgrounds that violated the style guide (no blur, flat solid backgrounds) and broke in light mode. The theme toggle was rendered independently on each page (`landing/page.cljs`, `budget/section.cljs`) with fixed positioning, requiring every new page to remember to include it.
**Summary:** Replaced all hardcoded nav backgrounds with dual-mode solid tokens (`bg-white dark:bg-slate-950`), fixed text/hover classes to use `s/` design tokens with proper light/dark variants, and moved the theme toggle into the nav bar itself — inline on desktop (right side, after links, with a border separator), and inside the mobile slide-down panel (below links, with a top border separator). Removed standalone toggle renders from both pages.

### Changes

| File                        | Change                                                                                                                                                                                                                                                                                                                                                                                                                   |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `nav/menu.cljs`             | Added `theme-toggle` import; replaced `bg-black/80 backdrop-blur-sm` with `bg-white dark:bg-slate-950` on both top bar and mobile panel; replaced `border-white/10` with `s/border-subtle`; fixed hover states from `hover:text-pink-300 dark:hover:text-pink-300` to `hover:text-pink-600 dark:hover:text-pink-300`; added theme toggle to desktop nav (with border separator) and mobile panel (with border separator) |
| `pages/landing/page.cljs`   | Removed `amp.ui.theme-toggle` import and the `fixed top-8 right-8 z-50` toggle wrapper                                                                                                                                                                                                                                                                                                                                   |
| `pages/budget/section.cljs` | Removed `amp.ui.theme-toggle` import and the `absolute top-4 right-4 z-10` toggle wrapper from `header`                                                                                                                                                                                                                                                                                                                  |

### Migration Notes

- None — backward compatible. The theme toggle is now rendered once in the nav instead of per-page.

## 2026-02-24 — Phase 6: Router & Menu System Prep

**Rationale:** The site needed route infrastructure for upcoming pages (venue directions, artist deep-dive, blog/vlog, press kit) and a navigation menu so users can move between them.
**Summary:** Added 4 stub page modules with lazy-loaded code splitting, expanded the router with new routes and site-map entries, built a responsive navigation menu (hamburger on mobile, horizontal bar on desktop), and wired it into the layout wrapper.

### Changes

**New files:**

| File                     | Namespace               | Purpose                              |
| ------------------------ | ----------------------- | ------------------------------------ |
| `pages/venue/page.cljs`  | `amp.pages.venue.page`  | Venue stub page (code-split module)  |
| `pages/artist/page.cljs` | `amp.pages.artist.page` | Artist stub page (code-split module) |
| `pages/blog/page.cljs`   | `amp.pages.blog.page`   | Blog stub page (code-split module)   |
| `pages/press/page.cljs`  | `amp.pages.press.page`  | Press stub page (code-split module)  |

**Modified files:**

| File                           | Change                                                                                                                                            |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `shadow-cljs.edn`              | Added `:venue-view`, `:artist-view`, `:blog-view`, `:press-view` module entries in both `:app` and `:release` builds                              |
| `services/router.cljs`         | Added 4 route entries to `site-map` with `lazy-component` references                                                                              |
| `nav/menu.cljs`                | Replaced empty placeholder with full responsive menu component — hamburger toggle on mobile, horizontal nav on desktop, active-route highlighting |
| `ui/section_transitioner.cljs` | Added `($ menu)` render call to wire the navigation into the layout                                                                               |

### Migration Notes

- Run `npm run release` to verify — expect only the benign `medley.core/abs` redef warning.
- If you have a running dev server, restart it (`npm run dev`) to pick up the new shadow-cljs modules.
- The Netlify `_redirects` already has a `/* /index.html 200` SPA fallback — no deployment config changes needed.

## 2026-02-24 — Phase 5D: Final Cleanup — Unify Nav, Relocate Survivors, Delete Dead Code

**Rationale:** After Phases 4–5C, two nav directories existed (`nav/` and `components/navs/`), the `views/` directory still contained 4 dead view files, and `components/` held 34 dead files plus 3 surviving active files. This needed consolidation before Phase 6.
**Summary:** Moved the 3 remaining alive files out of `components/` into `amp.ui.*`, updated all consumers, then deleted the entire `components/` directory tree (34 dead files), the `views/` directory (4 dead files), and the duplicate `components/navs/` directory (3 dead nav files).

### Changes

| Old namespace                           | New namespace                 | File                                                                 |
| --------------------------------------- | ----------------------------- | -------------------------------------------------------------------- |
| `amp.components.section-transitioner`   | `amp.ui.section-transitioner` | [ui/section_transitioner.cljs](src/amp/ui/section_transitioner.cljs) |
| `amp.components.elements.written-by`    | `amp.ui.written-by`           | [ui/written_by.cljs](src/amp/ui/written_by.cljs)                     |
| `amp.components.elements.threejs-slide` | `amp.ui.threejs-slide`        | [ui/threejs_slide.cljs](src/amp/ui/threejs_slide.cljs)               |

**Consumers updated:** `core.cljs`, `pages/landing/press_release.cljs`, `pages/landing/studio.cljs`, `ui/image_gallery.cljs`.

**Dead code deleted (37 files total):**

- `views/` — 4 files: `contact_view`, `landing_view`, `screening_view`, `services_view`
- `components/navs/` — 3 files: `donation_nav`, `progress_menu`, `side_nav`
- `components/sections/` — 12 files (all remaining dead sections)
- `components/elements/` — 7 files (5 dead + 2 old copies of moved files)
- `components/fragments/` — 1 file: `about_me`
- `components/ui/` — 4 files: `audio_toggle`, `icon_button`, `lower_panel_cta`, `playable_text`
- `components/` loose — 5 files: `hero_header`, `hover_title`, `nav_link`, `playful_titles`, `writing_card` + old `section_transitioner`

**Directories removed:** `views/`, `components/` (entire tree including `elements/`, `fragments/`, `navs/`, `sections/`, `ui/`).

### Migration Notes

- Run `npm run release` to verify — expect only the benign `medley.core/abs` redef warning.
- The `src/amp/components/` directory no longer exists. All shared UI now lives under `amp.ui.*`.
- If you have a running dev server, restart it (`npm run dev`) to pick up changes.

---

## 2026-02-24 — Phases 4 & 5: Reorganize Navigation & Restructure Pages

**Rationale:** Navigation components sat in a flat `navs/` directory and page-specific code (views + sections + budget elements + threejs components) was scattered by type rather than colocated by page. This made it hard to reason about page boundaries and module splits.
**Summary:** Moved navigation into `nav/`, created a menu placeholder, and colocated all page-specific code under `pages/{landing,budget,mockup}/`. Updated shadow-cljs module entries, router lazy-component paths, and all cross-references. Deleted old source files.

### Changes

**Phase 4 — Navigation:**

| Old namespace                     | New namespace     | File                                         |
| --------------------------------- | ----------------- | -------------------------------------------- |
| `amp.components.navs.logo-nav`    | `amp.nav.logo`    | [nav/logo.cljs](src/amp/nav/logo.cljs)       |
| `amp.components.navs.back-up-nav` | `amp.nav.back-up` | [nav/back_up.cljs](src/amp/nav/back_up.cljs) |
| _(new)_                           | `amp.nav.menu`    | [nav/menu.cljs](src/amp/nav/menu.cljs)       |

**Phase 5A — Landing page (10 files):**

| Old namespace                                 | New namespace                     |
| --------------------------------------------- | --------------------------------- |
| `amp.views.landing-view`                      | `amp.pages.landing.page`          |
| `amp.components.sections.mobile-hero-section` | `amp.pages.landing.hero`          |
| `amp.components.sections.teaser-section`      | `amp.pages.landing.teaser`        |
| `amp.components.sections.press-release`       | `amp.pages.landing.press-release` |
| `amp.components.sections.about-studio`        | `amp.pages.landing.studio`        |
| `amp.components.sections.location-section`    | `amp.pages.landing.venue`         |
| `amp.components.sections.in-minor-keys`       | `amp.pages.landing.in-minor-keys` |
| `amp.components.sections.artist-section`      | `amp.pages.landing.artist`        |
| `amp.components.sections.curators-section`    | `amp.pages.landing.curators`      |
| `amp.components.sections.site-footer`         | `amp.pages.landing.footer`        |

**Phase 5B — Budget page (12 files):**

| Old namespace                                     | New namespace                     |
| ------------------------------------------------- | --------------------------------- |
| `amp.views.budget-view`                           | `amp.pages.budget.page`           |
| `amp.components.sections.budget-section`          | `amp.pages.budget.section`        |
| `amp.components.sections.budget-footer`           | `amp.pages.budget.footer`         |
| `amp.components.elements.budget.budget-table`     | `amp.pages.budget.table`          |
| `amp.components.elements.budget.cost-breakdown`   | `amp.pages.budget.cost-breakdown` |
| `amp.components.elements.budget.cash-flow`        | `amp.pages.budget.cash-flow`      |
| `amp.components.elements.budget.committe`         | `amp.pages.budget.committee`      |
| `amp.components.elements.budget.location-section` | `amp.pages.budget.location`       |
| `amp.components.elements.budget.non-profit`       | `amp.pages.budget.non-profit`     |
| `amp.components.elements.budget.sponsors`         | `amp.pages.budget.sponsors`       |
| `amp.components.elements.budget.why-support`      | `amp.pages.budget.why-support`    |
| `amp.components.elements.budget.section-block`    | `amp.pages.budget.section-block`  |

**Phase 5C — Mockup page (13 files):**

| Old namespace                                             | New namespace                                       |
| --------------------------------------------------------- | --------------------------------------------------- |
| `amp.views.mockup-view`                                   | `amp.pages.mockup.page`                             |
| `amp.components.threejs.scene`                            | `amp.pages.mockup.scene`                            |
| `amp.components.threejs.objects`                          | `amp.pages.mockup.objects`                          |
| `amp.components.threejs.geometry`                         | `amp.pages.mockup.geometry`                         |
| `amp.components.threejs.mockup-hud`                       | `amp.pages.mockup.hud`                              |
| `amp.components.threejs.utils`                            | `amp.pages.mockup.utils`                            |
| `amp.components.threejs.stack`                            | `amp.pages.mockup.stack`                            |
| `amp.components.threejs.parts-panel`                      | `amp.pages.mockup.parts-panel`                      |
| `amp.components.threejs.selection-info-bar`               | `amp.pages.mockup.selection-info`                   |
| `amp.components.threejs.copy-link-button`                 | `amp.pages.mockup.copy-link`                        |
| `amp.components.threejs.mockup-footer`                    | `amp.pages.mockup.footer`                           |
| `amp.components.threejs.renderers.manual-formation`       | `amp.pages.mockup.renderers.manual-formation`       |
| `amp.components.threejs.renderers.simple-stack-formation` | `amp.pages.mockup.renderers.simple-stack-formation` |

**Infrastructure updates:**

- `shadow-cljs.edn` — module entries updated in both `:app` and `:release` builds.
- `services/router.cljs` — `lazy-component` paths and `site-map` updated.
- `components/elements/threejs_slide.cljs` — imports updated to `amp.pages.mockup.*`.
- `ui/expandable_text.cljs` — import updated to `amp.pages.budget.section-block`.
- Deleted 36 old source files. Removed empty `components/elements/budget/`, `components/threejs/`, and `components/navs/` directories.

### Migration Notes

- Run `npm run release` to verify — expect only the benign `medley.core/abs` redef warning.
- If you have a running dev server, restart it (`npm run dev`) to pick up the namespace moves.
- Dead files in `components/sections/` (from Phase 1) remain — they are not in the build path and will be cleaned up separately.

---

## 2026-02-24 — Phase 3: Consolidate UI Components

**Rationale:** Shared/reusable UI components were scattered across `components/elements/`, `components/ui/`, `components/media/`, `components/maps/`, and `views/`. This made imports inconsistent and obscured which components are truly shared vs page-specific.
**Summary:** Moved 13 shared components into a unified `amp.ui.*` namespace. Updated all consumer `(:require ...)` forms, internal cross-references, `lazy-component` macro references, and shadow-cljs module entries. Removed empty `components/maps/` and `components/media/` directories.

### Changes

| Old namespace                                  | New namespace             | File                                                         |
| ---------------------------------------------- | ------------------------- | ------------------------------------------------------------ |
| `amp.components.icons`                         | `amp.ui.icons`            | [ui/icons.cljs](src/amp/ui/icons.cljs)                       |
| `amp.components.section`                       | `amp.ui.section`          | [ui/section.cljs](src/amp/ui/section.cljs)                   |
| `amp.components.elements.lazy-image`           | `amp.ui.image`            | [ui/image.cljs](src/amp/ui/image.cljs)                       |
| `amp.components.elements.captioned-image`      | `amp.ui.captioned-image`  | [ui/captioned_image.cljs](src/amp/ui/captioned_image.cljs)   |
| `amp.components.elements.video-background`     | `amp.ui.video-background` | [ui/video_background.cljs](src/amp/ui/video_background.cljs) |
| `amp.components.elements.expandable-text-area` | `amp.ui.expandable-text`  | [ui/expandable_text.cljs](src/amp/ui/expandable_text.cljs)   |
| `amp.components.ui.theme-toggle`               | `amp.ui.theme-toggle`     | [ui/theme_toggle.cljs](src/amp/ui/theme_toggle.cljs)         |
| `amp.components.ui.overlays`                   | `amp.ui.overlays`         | [ui/overlays.cljs](src/amp/ui/overlays.cljs)                 |
| `amp.components.ui.main-button`                | `amp.ui.button`           | [ui/button.cljs](src/amp/ui/button.cljs)                     |
| `amp.components.maps.mapbox-map`               | `amp.ui.map`              | [ui/map.cljs](src/amp/ui/map.cljs)                           |
| `amp.components.media.lazy-image-gallery`      | `amp.ui.image-gallery`    | [ui/image_gallery.cljs](src/amp/ui/image_gallery.cljs)       |
| `amp.components.media.lazy-image-with-overlay` | `amp.ui.image-overlay`    | [ui/image_overlay.cljs](src/amp/ui/image_overlay.cljs)       |
| `amp.views.hero-image-view`                    | `amp.ui.hero-image`       | [ui/hero_image.cljs](src/amp/ui/hero_image.cljs)             |

- Updated `shadow-cljs.edn` — `:video-background` module entry changed from `amp.components.elements.video-background` to `amp.ui.video-background` in both `:app` and `:release` builds.
- Deleted 13 old source files and removed empty `components/maps/` and `components/media/` directories.
- ~40 consumer files updated with new require paths.

### Migration Notes

- Run `npm run release` to verify — expect only the benign `medley.core/abs` redef warning.
- If you have a running dev server, restart it (`npm run dev`) to pick up the namespace moves.

---

## 2026-02-24 — Phase 2: Flatten State Management

**Rationale:** The state management layer used an over-engineered `defmulti`/`defmethod` reducer pattern with a side-effect `requires.cljs` hack to force method loading. This added complexity without benefit — the app has only one reducer action (`:enter-route!`).
**Summary:** Replaced the multimethod pattern with a plain `case`-based reducer function. Merged `providers/main_provider`, `reducers/api`, `reducers/main_methods/`, and `hooks/use_main_reducer` into two files under `state/`.

### Changes

- Created `state/reducer.cljs` — plain `main-reducer` function with `case` dispatch.
- Created `state/provider.cljs` — React Context, `use-main-state` hook, `MainProvider` component.
- Deleted `providers/main_provider.cljs`, `reducers/api.cljs`, `reducers/main_methods/core.cljs`, `reducers/requires.cljs`, `hooks/use_main_reducer.cljs`.
- Updated 9 consumer files to require from `amp.state.provider` instead of the old paths.
- Removed dead `:navigate!` action and unused default state keys (`:current-section`, `:current-subsection`).

### Migration Notes

- Run `npm run release` to verify — expect only the benign `medley.core/abs` redef warning.

---

## 2026-02-24 — Phase 1: Dead Code Removal

**Rationale:** The codebase accumulated dead files from earlier iterations — unused views, sections, CMS integration, placeholder components, and commented-out code. These files added noise and made it harder to understand the active codebase.
**Summary:** Identified and deleted confirmed dead files across views, sections, elements, UI components, navs, fragments, and infrastructure. Cleaned up unused imports in active files.

### Changes

- Deleted dead views: `contact_view.cljs`, `screening_view.cljs`, `services_view.cljs`.
- Deleted dead sections: `artwork_carousel.cljs`, `artwork_section.cljs`, `committee.cljs`, `what_section.cljs`, `quote_section.cljs`.
- Deleted dead elements: `aspect_box.cljs`, `section_background.cljs`, `rotating_lazy_image_gallery.cljs`, `video_player.cljs`, `elements/budget/about.cljs`.
- Deleted dead UI: `audio_toggle.cljs`, `icon_button.cljs`.
- Deleted dead nav: `navs/side_nav.cljs`.
- Deleted dead fragment: `fragments/about_me.cljs`.
- Deleted dead top-level: `hero_header.cljs`, `writing_card.cljs`.
- Deleted dead infra: `api/cms.cljs`, `utils/axios.cljs`.
- Cleaned up unused requires in `landing_view.cljs` and removed commented-out render blocks.
- Removed `sanity-endpoint` goog-define from `config.cljs`.

### Migration Notes

- Run `npm run release` to verify — expect only the benign `medley.core/abs` redef warning.
