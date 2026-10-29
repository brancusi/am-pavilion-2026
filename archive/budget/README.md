# Archived: budget page

The `/budget` page (budget table, cost breakdown, cash flow, sponsors,
committee, location, why-support) was removed from the site in October 2026.
It is kept here for reference only and is not compiled: shadow-cljs only reads
`src/`.

- `pages/budget/` was `src/amp/pages/budget/`
- `pages/press_release.cljs` was `src/amp/pages/landing/press_release.cljs` (used only by the budget page)
- `ui/captioned_image.cljs`, `ui/overlays.cljs` were in `src/amp/ui/` (used only by the budget page)

The numbered section head it shared with other pages now lives in
`src/amp/ui/section_block.cljs`.
