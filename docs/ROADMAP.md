# Roadmap

<!-- Add new initiatives above this line -->

## 2026-02-24 — Namespace Refactoring

**Goal:** Reorganize the codebase from a component-type directory structure to a feature/page-based structure, eliminate dead code, and prepare for a multi-page menu system.

**Current state:**

- Components are organized by type (`elements/`, `ui/`, `media/`, `maps/`, `navs/`) rather than by feature, making it hard to reason about page boundaries.
- Dead code accumulated from earlier iterations (unused views, sections, CMS layer, placeholder files).
- State management uses an over-engineered multimethod reducer pattern with a side-effect `requires.cljs` hack.
- Shared/reusable UI is scattered across `components/elements/`, `components/ui/`, `components/media/`, `components/maps/`, and `views/`.
- Navigation components sit in `navs/` with no menu system.
- The site has only three routes but needs to grow to support venue directions, artist deep-dive, blog/vlog, and press kit pages.

**Target state:**

- Dead code fully removed.
- State management simplified into `state/provider.cljs` + `state/reducer.cljs`.
- All shared UI consolidated under `amp.ui.*`.
- Navigation components in `nav/` with a menu system shell.
- Page-specific code colocated under `pages/{landing,budget,mockup}/`.
- Router expanded with stub routes for future pages.
- Each page is a code-split shadow-cljs module.

### Tasks

- [x] **Phase 1 — Dead Code Removal** (2026-02-24)
      Delete confirmed dead files (views, sections, elements, CMS, unused utils) and clean up unused imports.

- [x] **Phase 2 — Flatten State Management** (2026-02-24)
      Replace multimethod reducer with plain `case` function. Merge `providers/` + `reducers/` + `hooks/use_main_reducer` into `state/`.

- [x] **Phase 3 — Consolidate UI Components** (2026-02-24)
      Move 13 shared/reusable components from scattered locations into `amp.ui.*`. Update shadow-cljs module entry for `video-background`.

- [x] **Phase 4 — Reorganize Navigation** (2026-02-24)
      Move `navs/logo_nav` and `navs/back_up_nav` into `nav/`. Create `nav/menu.cljs` shell.

- [x] **Phase 5 — Restructure Pages** (2026-02-24)
      Move views and tightly-coupled sections into colocated `pages/{landing,budget,mockup}/` directories.
      5D cleanup: relocated 3 surviving `components/` files to `amp.ui.*`, deleted 37 dead files, removed entire `components/` and `views/` trees.

- [ ] **Phase 6 — Router & Menu System Prep** (2026-02-24)
      Add stub routes for future pages. Build out `nav/menu.cljs`. Wire menu into layout.
