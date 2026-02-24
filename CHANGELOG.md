# Changelog

<!-- Append new entries above this line -->

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
