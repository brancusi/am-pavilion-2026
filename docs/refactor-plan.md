# Namespace Refactoring Plan

> **Branch:** `refactor-02-24-26`
> **Created:** 2026-02-24
> **Status:** Phase 6 complete (all phases done)

---

## Goals

1. **Eliminate architectural artifacts** — dead views, unused CMS layer, commented-out sections, placeholder files.
2. **Reorganize namespaces by feature/page** instead of by component type. Colocate page-specific code; extract only truly shared UI.
3. **Prepare for a menu system** — the site will grow from a single-scroll landing page to multiple routed pages: venue directions, artist deep-dive, blog/vlog, press kit.
4. **Maximize lazy loading & code splitting** — each page = one shadow-cljs module. Keep the main bundle minimal (router, state, nav, shared UI).
5. **Simplify state management** — flatten `providers/` + `reducers/` into a single `state/` namespace.

## Context

- Single-page ClojureScript app (shadow-cljs + Helix + Tailwind).
- Three active routes: `/` (landing), `/budget` (internal, unlinked), `/mockups` (3D viewer).
- No CMS integration active — Sanity code is dead. Can be re-added later.
- No automated tests — validation = `npm run release` succeeds (1 expected medley redef warning).
- The landing page is a vertical scroll site composed of "sections." Other routes are independent page-level views.

## Current Directory Structure (relevant parts)

```
src/amp/
  core.cljs               # Entry point
  config.cljs             # goog-define (sanity-endpoint, git-hash)
  styles.cljs             # Tailwind design tokens
  api/cms.cljs            # Sanity CMS queries (DEAD)
  components/
    elements/             # Mixed: lazy-image, video-bg, budget sub-components
    fragments/            # about_me.cljs (DEAD)
    hero_header.cljs      # DEAD
    icons.cljs            # SVG icon components
    maps/                 # mapbox_map.cljs
    media/                # lazy_image_gallery, lazy_image_with_overlay
    navs/                 # logo, back-up, donation, progress-menu, side-nav
    sections/             # ~22 files — landing sections + budget sections
    section.cljs          # Scroll-snap wrapper
    section_transitioner  # View stack manager (route transitions)
    threejs/              # 3D mockup viewer (~12 files + renderers/)
    ui/                   # buttons, toggles, overlays
    writing_card.cljs     # DEAD
  hooks/                  # 14 custom React hooks
  lib/defnc.clj/cljs      # defnc macro
  providers/              # main_provider.cljs (React context)
  reducers/               # api.cljs (multimethod), main_methods/, requires.cljs
  services/               # router.cljs, firebase.cljs
  utils/                  # axios, debug, gsap, lazy-loading, math, window, for-indexed
  views/                  # 7 files — 3 active, 3 dead stubs, 1 misplaced component
```

## Target Directory Structure

```
src/amp/
  core.cljs
  config.cljs             # git-hash only (sanity-endpoint removed)
  styles.cljs
  dev.cljs

  lib/                    # Macros (unchanged)
  utils/                  # Pure helpers (axios deleted)
  hooks/                  # React hooks (unchanged)

  state/                  # Flattened from providers/ + reducers/ + hooks/use_main_reducer
    provider.cljs         # React context + MainProvider + use-main-state
    reducer.cljs          # Plain reducer function (case dispatch)

  services/
    router.cljs           # Reitit router (expanded with new routes)
    firebase.cljs         # Firebase RTDB (used by mockup viewer)

  ui/                     # Shared presentational components
    button.cljs           # From ui/main_button
    image.cljs            # From elements/lazy_image + captioned_image
    image_gallery.cljs    # From media/*
    video_background.cljs # From elements/video_background (code-split entry)
    expandable_text.cljs  # From elements/expandable_text_area
    theme_toggle.cljs     # From ui/theme_toggle
    overlays.cljs         # From ui/overlays
    icons.cljs            # From components/icons
    section.cljs          # From components/section (scroll-snap wrapper)
    hero_image.cljs       # From views/hero_image_view (reusable component)
    map.cljs              # From maps/mapbox_map

  nav/                    # Navigation
    logo.cljs             # From navs/logo_nav
    back_up.cljs          # From navs/back_up_nav
    menu.cljs             # NEW — menu system shell

  pages/                  # Routed pages (each = code-split module)
    landing/
      page.cljs           # Entry — the scroll container
      hero.cljs           # mobile_hero_section
      teaser.cljs         # teaser_section
      press_release.cljs  # press_release
      studio.cljs         # about_studio
      venue.cljs          # location_section
      in_minor_keys.cljs  # in_minor_keys
      artist.cljs         # artist_section
      curators.cljs       # curators_section
      footer.cljs         # site_footer

    budget/
      page.cljs           # Entry
      section.cljs        # budget_section
      table.cljs          # budget_table
      cost_breakdown.cljs
      cash_flow.cljs
      committee.cljs
      location.cljs
      non_profit.cljs
      sponsors.cljs
      why_support.cljs
      section_block.cljs
      footer.cljs         # budget_footer

    mockup/
      page.cljs           # Entry
      scene.cljs
      objects.cljs
      geometry.cljs
      hud.cljs
      utils.cljs
      stack.cljs
      parts_panel.cljs
      selection_info.cljs
      copy_link.cljs
      footer.cljs
      renderers/
        manual_formation.cljs
        simple_stack_formation.cljs

    # Future stubs (Phase 6):
    # venue/page.cljs       — visitor wayfinding
    # artist/page.cljs      — Sadik deep-dive
    # blog/page.cljs        — blog/vlog
    # press/page.cljs       — press kit, social links
```

---

## Phase 1 — Dead Code Removal

**Goal:** Delete all confirmed dead files and clean up unused imports. Zero functional change.

**Validation:** `npm run release` succeeds.

### Files to delete

| Category       | Files                                                                                                                                                                   |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Dead views     | `views/contact_view.cljs`, `views/screening_view.cljs`, `views/services_view.cljs`                                                                                      |
| Dead sections  | `sections/artwork_carousel.cljs`, `sections/artwork_section.cljs`, `sections/committee.clj`, `sections/what_section.cljs`, `sections/quote_section.cljs`                |
| Dead elements  | `elements/aspect_box.cljs`, `elements/section_background.cljs`, `elements/rotating_lazy_image_gallery.cljs`, `elements/video_player.cljs`, `elements/budget/about.cljs` |
| Dead UI        | `ui/audio_toggle.cljs`, `ui/icon_button.cljs`                                                                                                                           |
| Dead navs      | `navs/side_nav.cljs`                                                                                                                                                    |
| Dead fragments | `fragments/about_me.cljs`                                                                                                                                               |
| Dead top-level | `components/hero_header.cljs`, `components/writing_card.cljs`                                                                                                           |
| Dead infra     | `api/cms.cljs`, `utils/axios.cljs`                                                                                                                                      |

### Edits

- **`landing_view.cljs`** — Remove unused requires (`donation-nav`, `progress-menu`, `playful-titles`, `main-button`, and all commented-out section imports). Remove all `#_` commented-out render blocks.
- **`config.cljs`** — Remove `sanity-endpoint` goog-define.
- **`shadow-cljs.edn`** — Remove `sanity-endpoint` from `:closure-defines` in both `:dev` and `:release` builds.
- **`core.cljs`** — Remove `amp.services.firebase` require if it's unused at top level (it's imported `:as firebase` but check if any calls exist in `core.cljs`).

### Pre-delete verification

Before deleting, confirm these are still dead (search for any new references):

- `ui/playable_text.cljs` — verify no consumers
- `ui/lower_panel_cta.cljs` — verify no consumers
- `navs/donation_nav.cljs` — verify only imported in `landing_view` (unused)
- `navs/progress_menu.cljs` — verify only imported in `landing_view` (unused)
- `components/playful_titles.cljs` — verify only imported in `landing_view` (unused)
- `elements/lazy_image_gallery.cljs` — verify only used by dead sections
- `elements/budget/budget_table.cljs` vs `elements/budget_table.cljs` — clarify which is active (there appear to be two)

---

## Phase 2 — Flatten State Management ✅

**Goal:** Replace the over-engineered multimethod reducer pattern with a simple plain function. Merge `providers/` + `reducers/` + `hooks/use_main_reducer` into `state/`.

**Approach taken:** Replaced the `defmulti`/`defmethod` pattern with a plain `case`-based reducer function. Eliminated the side-effect `requires.cljs` hack. Folded `use-main-reducer` hook directly into the provider. Removed dead `:navigate!` action and its unused default state keys (`:current-section`, `:current-subsection`).

### New files

| File                  | Contents                                                                                                 |
| --------------------- | -------------------------------------------------------------------------------------------------------- |
| `state/reducer.cljs`  | Plain `main-reducer` function with `case` dispatch — currently handles `:enter-route!` only              |
| `state/provider.cljs` | React Context, `use-main-state` hook, `MainProvider` component (inlines the old `use-main-reducer` hook) |

### Deleted files

| File                              | Reason                                                             |
| --------------------------------- | ------------------------------------------------------------------ |
| `providers/main_provider.cljs`    | Replaced by `state/provider.cljs`                                  |
| `reducers/api.cljs`               | Replaced by `state/reducer.cljs` (plain function, no multimethod)  |
| `reducers/main_methods/core.cljs` | Inlined into `state/reducer.cljs`                                  |
| `reducers/requires.cljs`          | No longer needed — multimethod side-effect loading hack eliminated |
| `hooks/use_main_reducer.cljs`     | Inlined into `state/provider.cljs`                                 |

### Updated consumers

| File                                            | Change                                                                               |
| ----------------------------------------------- | ------------------------------------------------------------------------------------ | --- |
| `core.cljs`                                     | `amp.state.provider`, removed `amp.reducers.requires`, cleaned default-state to `{}` |
| `services/router.cljs`                          | `amp.state.provider`                                                                 |
| `components/section_transitioner.cljs`          | `amp.state.provider`                                                                 |
| `views/mockup_view.cljs`                        | `amp.state.provider`, removed `amp.reducers.requires`                                |
| `components/sections/video_section.cljs`        | `amp.state.provider`                                                                 |
| `views/budget_view.cljs`                        | Removed `amp.reducers.requires`                                                      |
| `views/hero_image_view.cljs`                    | Removed `amp.reducers.requires`                                                      |
| `components/ui/overlays.cljs`                   | Removed `amp.reducers.requires`                                                      |
| `components/media/lazy_image_with_overlay.cljs` | Removed `amp.reducers.requires`                                                      |     |

---

## Phase 3 — Consolidate UI Components

**Goal:** Move truly shared/reusable components from `components/elements/`, `components/ui/`, `components/media/`, `components/maps/`, and miscellaneous top-level files into `amp.ui.*`.

| Step | From                                             | To                                      |
| ---- | ------------------------------------------------ | --------------------------------------- |
| 3.1  | `components/icons.cljs`                          | `ui/icons.cljs`                         |
| 3.2  | `components/section.cljs`                        | `ui/section.cljs`                       |
| 3.3  | `elements/lazy_image.cljs`                       | `ui/image.cljs`                         |
| 3.4  | `elements/captioned_image.cljs`                  | `ui/captioned_image.cljs`               |
| 3.5  | `elements/video_background.cljs`                 | `ui/video_background.cljs`              |
| 3.6  | `elements/expandable_text_area.cljs`             | `ui/expandable_text.cljs`               |
| 3.7  | `ui/theme_toggle.cljs`                           | `ui/theme_toggle.cljs` (ns rename only) |
| 3.8  | `ui/overlays.cljs`                               | `ui/overlays.cljs` (ns rename only)     |
| 3.9  | `ui/main_button.cljs`                            | `ui/button.cljs`                        |
| 3.10 | `maps/mapbox_map.cljs`                           | `ui/map.cljs`                           |
| 3.11 | `media/lazy_image_gallery.cljs`                  | `ui/image_gallery.cljs`                 |
| 3.12 | `media/lazy_image_with_overlay.cljs`             | `ui/image_overlay.cljs`                 |
| 3.13 | `views/hero_image_view.cljs`                     | `ui/hero_image.cljs`                    |
| 3.14 | Update all require paths, delete old directories |
| 3.15 | Validate: `npm run release`                      |

### Note on `video_background.cljs`

This is a **code-split entry point** in `shadow-cljs.edn`. When moving it, update the module entry path in both `:app` and `:release` builds.

---

## Phase 4 — Reorganize Navigation

| Step | From                                                                                | To                 |
| ---- | ----------------------------------------------------------------------------------- | ------------------ |
| 4.1  | `navs/logo_nav.cljs`                                                                | `nav/logo.cljs`    |
| 4.2  | `navs/back_up_nav.cljs`                                                             | `nav/back_up.cljs` |
| 4.3  | Create `nav/menu.cljs` — minimal shell component (renders nothing or a placeholder) |
| 4.4  | Update consumers, delete `navs/`                                                    |
| 4.5  | Validate: `npm run release`                                                         |

---

## Phase 5 — Restructure Pages

**Goal:** Move views and their tightly-coupled sections into colocated page directories.

### 5A — Landing page

| Step | Action                                                                                                |
| ---- | ----------------------------------------------------------------------------------------------------- |
| 5A.1 | Create `pages/landing/page.cljs` from `views/landing_view.cljs` (ns: `amp.pages.landing.page`)        |
| 5A.2 | Move each active section into `pages/landing/` with simplified names                                  |
| 5A.3 | Move `section_transitioner.cljs` → `pages/layout.cljs` or keep at top level (it's used by all routes) |
| 5A.4 | Update `shadow-cljs.edn` `:landing-view` module entry → `amp.pages.landing.page`                      |
| 5A.5 | Update `router.cljs` lazy-component path                                                              |

### 5B — Budget page

| Step | Action                                                            |
| ---- | ----------------------------------------------------------------- |
| 5B.1 | Create `pages/budget/page.cljs` from `views/budget_view.cljs`     |
| 5B.2 | Move `sections/budget_section.cljs` → `pages/budget/section.cljs` |
| 5B.3 | Move all `elements/budget/*` → `pages/budget/`                    |
| 5B.4 | Move `sections/budget_footer.cljs` → `pages/budget/footer.cljs`   |
| 5B.5 | Update `shadow-cljs.edn` and `router.cljs`                        |

### 5C — Mockup page

| Step | Action                                                        |
| ---- | ------------------------------------------------------------- |
| 5C.1 | Create `pages/mockup/page.cljs` from `views/mockup_view.cljs` |
| 5C.2 | Move entire `components/threejs/` → `pages/mockup/`           |
| 5C.3 | Update `shadow-cljs.edn` and `router.cljs`                    |

### 5D — Cleanup

| Step | Action                                                                                              |
| ---- | --------------------------------------------------------------------------------------------------- |
| 5D.1 | Delete empty `views/`, `components/sections/`, `components/threejs/`, `components/elements/budget/` |
| 5D.2 | Delete `components/` directory if fully emptied                                                     |
| 5D.3 | Validate: `npm run release`                                                                         |

---

## Phase 6 — Router & Menu System Prep

| Step | Action                                                                                                                     |
| ---- | -------------------------------------------------------------------------------------------------------------------------- |
| 6.1  | Add routes to `router.cljs`: `/venue`, `/artist`, `/blog`, `/press`                                                        |
| 6.2  | Create stub page files: `pages/venue/page.cljs`, `pages/artist/page.cljs`, `pages/blog/page.cljs`, `pages/press/page.cljs` |
| 6.3  | Add module entries in `shadow-cljs.edn` for each new page (both `:app` and `:release`)                                     |
| 6.4  | Add entries to `site-map` in `router.cljs`                                                                                 |
| 6.5  | Build out `nav/menu.cljs` — render route links, mobile-responsive                                                          |
| 6.6  | Wire menu into `core.cljs` or `section_transitioner` (the layout wrapper)                                                  |
| 6.7  | Validate: `npm run release`                                                                                                |

---

## Implementation Notes

- **File naming:** ClojureScript uses underscores in filenames, hyphens in namespace names (`page.cljs` → `amp.pages.landing.page`).
- **Moving a file:** Update the `ns` form, update all `:require` references across the project (grep for old ns), then delete the old file.
- **shadow-cljs module entries** must match namespace paths exactly. After any move under `pages/`, update both `:app` and `:release` in `shadow-cljs.edn`.
- **`lazy-component` macro** references namespaces by symbol — these must also be updated when moving files.
- **Always run `npm run release`** after each phase. The single `medley.core/abs` redef warning is expected and benign.
- **No test suite** — manual verification only.

## Dependencies Between Phases

```
Phase 1 (delete dead code)
  ↓
Phase 2 (flatten state)  ←  can run independently after Phase 1
  ↓
Phase 3 (consolidate UI) ←  can run independently after Phase 1
  ↓
Phase 4 (reorganize nav)  ←  can run independently after Phase 1
  ↓
Phase 5 (restructure pages) ←  depends on Phases 2, 3, 4 being complete
  ↓
Phase 6 (router + menu)   ←  depends on Phase 5
```

Phases 2, 3, and 4 are independent of each other and can be done in any order after Phase 1. Phase 5 should come after all three since it moves files that Phases 2–4 may have already relocated.
