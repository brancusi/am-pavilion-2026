# Changelog

<!-- Append new entries above this line -->

## 2026-11-13 — Film "Jasper Johns" and the journal post "This Fits This"

**Rationale:** The new film, posted on Instagram today, belongs with the other films, in the press kit and in the journal.
**Summary:** "Jasper Johns" (2:16, filmed in Tesa 41 on 25 October, edited by Bibiana Juritz) is on Mux at 2160p with generated English captions and MP4 downloads. It leads the home films reel and the press kit's films, and has its own journal post, "This Fits This", with stills from the camera originals. All in English, Italian and Armenian.

### Changes

- Mux asset `pDfjrIn83qZhz8VAQp4021I8bkmEV9NB63uCYX8ATo4c`, playback `C5R8t1rSof29dpHeXQ00TvXhkm5FMSvpKE1EEsnpqmw4`; `src/amp/data/films.cljs`, `films.json` catalogs, `docs/films.md`.
- Press kit: `jasper-johns` block in Dropbox `press_kit/video{,.it,.hy}.md`, regenerated with `npm run press:kit`.
- Post `src/amp/pages/blog/posts/this_fits_this.cljs`, catalogs `post-this-fits-this.json`; stills on R2 `journal/26-10-25/` (blackbox, neutral look). Quotes from the 25 October recorder (`DJI_09_20261025_170622.WAV`), lightly cleaned; the handshake line is Zadik's (the Instagram caption gives it to Aram).

## 2026-11-11 — The site in English, Italian and Armenian

**Rationale:** Venetian and Armenian visitors and press should be able to read the whole site in their own language.
**Summary:** Every page is now in English (`/`), Italian (`/it/…`) and Eastern Armenian (`/hy/…`), with a language switch in the header, menu and footer. All copy lives in FormatJS (ICU) catalogs; the Press page's partial Italian was replaced by the same system. Link previews, `hreflang` and `<html lang>` follow the language.

### Changes

- `src/amp/i18n.cljs` (lookups, dates, numbers, links in messages); catalogs in `resources/i18n/{en,it,hy}/` (30 per language); `npm run i18n:check`; browser check `scripts/qa/i18n-snap.mjs`. Rules and style guide in `docs/i18n.md`.
- Routes generated per locale in `amp.services.router`; `amp.ui.lang-switch`.
- Portage sheets and the "Armenian as well" story translated as whole HTML files per language (`resources/data/portage/<locale>/`, `resources/data/zz-story/<locale>/`).
- Press kit generated per language from the Dropbox Markdown (`build/press-kit.mjs` → `doc-press-kit.json`); `src/amp/data/press_kit.cljs` removed. Image titles and captions translated through `data-media.json`.
- Worker: localized titles and descriptions (`cloudflare/site/meta.json`, `media.json`), `og:locale`, `hreflang`.
- Armenian: Noto Sans Armenian, normal case for labels, word joiner after the hyphen of case endings (`Tesa 41-⁠ում`), smaller display sizes where long words overflowed.
- Fixes found on the way: /delivery heading overflow at 1024 (all languages), Portage walk odometer layout shift, home Play/Pause label, footer "Follow", trilingual noscript notice.
- Armenian awaits a native speaker's review.

## 2026-11-11 — Press: releases section and the flag-walk release

**Rationale:** Venetian press asked for a release they can use; Italian outlets get one link that opens the Italian page.
**Summary:** New release "The Italian flag walks through Venice / Il Tricolore cammina per Venezia" on /press/release/tricolore and /it/press/release/tricolore, with PDFs in both languages, images, films and walk clips. The press kit's "Press releases" section now lists every release with its own deep link. Walk on Saturday 14 November (11:00, Riva to San Marco) added to /walks.

### Changes

- `/press/release` lists releases newest first (`release-slugs` in `src/amp/pages/press/page.cljs`); the general release moved to `/press/release/final-weeks`. `/press/tricolore` redirects; short links `/tricolore` (Italian) and `/flag-walk`.
- PDF template (`build/press-release-pdf.mjs`) restyled to the site: Jost / Newsreader / IBM Plex Mono, The Studio's mark in black, La Biennale's official RGB logo placed by its 2026 guide, two pages. Share card builder `build/press-share-card.mjs`; Worker previews with `og:locale` for the release pages.
- Press contact is pressoffice@armenianpavilion.org everywhere.


## 2026-11-09 — Press: the 6 November walk photographs

**Rationale:** The walk with the Italian flag should be in the press set, captioned, for anyone writing about it.
**Summary:** Twelve photographs of the 6 November walk (Arsenale gate to the Museo Storico Navale and the lagoon) were added to Caption Genius "Pavilion — Press" and synced to /press, at the top of the process section.

### Changes

- Caption Genius: source folder `media/photo/2026/11/06` (label `walk_2026-11-06`); title, caption ("Walking the Work Through Venice, Armenian Pavilion, Biennale Arte 2026: …, Castello, Venice, 6 November 2026."), short caption, alt, section `process`, home `none`, all included. Photographs by Mina Biasutti (credit and "Photo: Mina Biasutti." added 9 Nov).
- `cloudflare/site/films.json`: "The Weight of the Flag" link preview, generated with the last release and now committed.

## 2026-11-06 — Walks: "The Weight of the Flag" film, stills full screen

**Rationale:** The first finished film from the walks should lead the Walks page and the home films, and the walk photographs deserve to be seen large.
**Summary:** "The Weight of the Flag" (2:52, walk 1, 5 November) is on Mux at 2160p with generated English captions. It heads the home films reel, sits under the /walks hero and in walk 1's detail, and plays with sound in the film lightbox. Walk photographs open full screen.

### Changes

- Mux asset `xb6isvfOkBrdefm4wUF9nxk2GdBtDm012UoCjRBkkTxI`, playback `MwHUHhUaOUvc97m01QmU6JBaf1ctSXWoz00s9dI302zEUo` (public, plus, 2160p), from `media/video/2026/11/italian_flag_3_edit_4k.mp4`; added first in `amp.data.films` (so also on /press).
- `walk_media/walk-films` maps a walk to its film; `walk-film` and `film-band` on /walks.
- `still-viewer`: the walk photographs in the Lightbox, with arrow keys, swipe, previous/next and Escape.

## 2026-11-06 — Walks: the Accademia walk on 18 November

**Rationale:** Julda's exchange with the Accademia di Belle Arti (scheda of 5 November, Prof. Mazzoni's approval of 6 November) set the 18 November walk; the site still had a proposed afternoon walk to the Misericordia that day.
**Summary:** 18 November is now "Walking the Work to the Accademia": leave Tesa 41 at 10:00, about an hour at the Academy from about 11:00 with Prof. Mazzoni, 3–6 works carried by students. The page and home teaser take the project's title, "Walking the Work Through Venice".

### Changes

- `plan.json`: walk 6 goes to the Accademia di Belle Arti (Zattere), 10:00, works "3–6", one 60-minute stop; Misericordia/Orto/Ghetto moves to 19 November; 21 November becomes Santa Margherita, the Salute and the Dogana (the Zattere is now the Accademia walk's).
- `walks.mjs`: stops can carry their own `stay` (minutes) and `detail`; stops are placed in route order (an ETA could come out before the one ahead of it); `:works` may be a range.
- Stop times, the player clock and the back time are walking time at 3 km/h plus the stays already behind, not a share of the total.
- Copy: hero and teaser titled "Walking the Work Through Venice", with the Academy students in the final week; the schedule notes that the hour inside the Accademia is for its students and staff.

## 2026-11-06 — Walks: the works go out into the city

**Rationale:** The studio has started carrying the works out of Tesa 41 on foot, ten walks through 22 November. They need a home on the site with the schedule, the route map, and what came back from each walk.
**Summary:** New `/walks` page (top menu, footer) with an interactive map of all ten routes, a schedule, and graded films and photographs from the first two walks; a teaser just below the fold on the home page.

### Changes

- `scripts/walks.mjs` (`npm run walks`): routes each walk from the Pavilion over OSM footpaths, preferring wide passages (rive, fondamente, salizade, rii terà, campi) and streets no earlier walk used, out one way and back another. Times assume 3 km/h plus 8 min a stop. Writes `resources/data/walks/routes.json`, light and dark base maps, and the generated `src/amp/data/walks.cljs`. The plan (dates, stops, works, departures) is `scripts/walks/plan.json`.
- `src/amp/data/walk_media.cljs`: each walk's films and photographs, and the date and status helpers shared by the page and the home teaser.
- `pages/walks/page.cljs` (`:walks-view` module): hero, counts, the map with a Play the walk player (pauses at each stop with its photograph), the walk list and filters, the walk's detail and itinerary with ETAs, films and photographs, the schedule, and the walks so far.
- Films: 15 eight-second silent loops from the FX3 and Osmo Pocket 3 originals, graded (Sony LC-709 LUT for S-Log3, white balance from the shot's neutrals, gentle S-curve), as mp4s on R2 at `walks/films/`, with posters as media images. They play only while on screen and start paused under reduced motion.
- Home: `walks-teaser` just below the hero; router, menu, footer and the CLS sweep know `/walks`.

## 2026-11-01 — Home gallery and On the bench follow Caption Genius

**Rationale:** Images added to the press set should reach the home page without a code change or a build.
**Summary:** The works gallery and On the bench now read the press set: Caption Genius decides what goes where, Sync publishes it.

### Changes

- Caption Genius "Pavilion — Press": new fields `home` (works / bench / none; blank goes by section) and `alt` (filled for the 30 installation views, drawings and renderings; the bench's 7 marked bench, the guest shots and a duplicate marked none).
- `scripts/press-home.mjs` (run by `press.mjs`): the home list with each image's gallery lines and alt text → `resources/data/press/home.json` and the generated `src/amp/data/press_home.cljs`.
- `hooks/use-press-home`: the page lays out from the build's copy, then fetches the live `home.json` once, as the bench or gallery comes near. `landing/works.cljs` keeps only the slides not in the press set.
- `press-sync.sh` publishes `home.json` with the press list.
- Bench captions stay on one line.

## 2026-11-01 — Works gallery: the whole press set of the making

**Rationale:** The home works gallery showed 12 early renders; the press set holds the installed works, drawings, renderings and the studio at work.
**Summary:** The gallery now has 61 slides, and images are put in only as the track nears them.

### Changes

- `landing/works.cljs` (new): the gallery data, moved out of `page.cljs`, with the press set's installation views, drawings and renderings and studio process shots added (alt text written per image; On the bench's shots and a duplicate left out).
- `ui/fit-gallery`: an IntersectionObserver on the track puts each slide's image in only once the track is within two widths of it; frames keep their size from the start, so nothing shifts.
- On the bench: journal titles stay on one line with an ellipsis; "Making a Flag" dated 28 Oct so the two making-of posts no longer share a date.

## 2026-11-01 — Home: the story, Portage, On the bench, getting to the pavilion

**Rationale:** The two long reads (the story and Portage) had no way in from the home page; the Hall chapter said little now the studio is working; "Tesa 41" means nothing to most visitors; the October closure is over.
**Summary:** Two visual teasers on the home page, a work-in-progress section in place of the Hall, a new blue "Getting to the pavilion" block, and the closure notice code removed.

### Changes

- `landing/teasers.cljs`: "Armenian as well." (1978 / 2025 photo pair, gold and red rails drawing the nine crossings to scale, the five movements linking to their chapters) and Portage (the Barbari woodcut with its rings, the 13 bridges of Route A rising as the walk is drawn, the walk's numbers, the six sheets). Both drawings play once in view; static under reduced motion.
- `landing/bench.cljs`: On the bench replaces "41 · The Hall": the day of the run counted in Venice time (day 177 of 198 today), seven process photos from the press set, the making-of posts.
- The visit block is its own blue plate, "Getting to the pavilion", with the two ways in as map toggles and the practical facts; `/visit` is titled "Getting to the pavilion" too.
- Home order now alternates grounds: Unit → On the bench → works → story → Portage → films → visit → journal.
- Removed `ui/temporary_closure.cljs` and its two call sites.

## 2026-11-01 — Pages fill before they show; supporters by tier; living grounds

**Rationale:** On a slow first load the footer sat right at the fold under an empty page, and late font swaps nudged text on /artist and /visit. The supporters list needed an order that reflects what was given. The home Unit chapter wanted a living, generative ground in place of the 3D mark.
**Summary:** Pages are held at their expected height and blur-fade in once filled, with the footer last. Supporters are shown by tier, with links. The Unit chapter has 20 generative "grounds", lazy-loaded, with Pause / Next / a picker. Notes rewritten for a fresh start (`CLAUDE.md`).

### Changes

- `section_transitioner.cljs`: remembers each page's height per path and width (localStorage `ap:h:*`), holds the page invisible at that height, reveals it after content and fonts are in (0.24 s blur-fade), then shows the footer once the height settles. Throttled /artist and /visit go from 0.0096 / 0.0178 CLS to 0.0000.
- `supporters.cljs`: Diamond → Bronze tiers; the ministry's name split onto two lines; Armenia Fund and the ministry link to their official sites.
- Footer Follow links to @zadikzadikian.
- `resources/data/grounds/`: engine, player and 20 pieces drawn on a canvas under the Unit chapter; `?ground=<id>` locks one piece. The signatures and ideas in the manifest are placeholders.
- The Unit chapter's mark is now flat (`studio-mark-flat`) with drafting-guide hover; the footer and menu keep the 3D mark.
- Fit galleries: every slide the same height, images contained and centred.
- Added `CLAUDE.md`; README routes and map brought up to date; `.github/copilot-instructions.md` now points to them; removed the unused `scripts/release.clj` and the stale `yarn.lock` (npm is the package manager).

## 2026-10-31 — Press kit, film links, "Armenian Pavilion"

**Rationale:** Journalists needed one place for the release, facts, images, logos and films, in English and Italian, with links that preview properly when shared.
**Summary:** `/press` and `/it/press` carry the press kit (sections, fact table, logos, release PDFs, image downloads in four sizes). Films and press images have shareable URLs with their own link previews (site Worker). Running text says "Armenian Pavilion".

### Changes

- `build/press-kit.mjs` generates `src/amp/data/press_kit.cljs` from the press-kit Markdown in Dropbox; `build/press-release-pdf.mjs` makes the release PDFs.
- `scripts/press.mjs` builds the image list from Caption Genius "Pavilion — Press", with Small / Medium / Large / Full downloads; one private image is always withheld.
- `cloudflare/site/worker.js`: link previews for `/blog/*`, `/films/*`, `/press*`, and press ZIPs.
- Home films: `/films/<slug>` opens the home page on that film.
- Journal: "The Making of Seven Steps to Heaven"; "With the support of" section on the home page.


## 2026-10-30 — Repo tidy, journal-post skill, layout-shift check

**Rationale:** Keep what was learnt writing the autumn journal posts, and make the repo easy to pick up from scratch.
**Summary:** New `journal-post` skill (sources, blackbox film stills, R2 uploads, galleries, zero-shift check), `npm run qa:cls` layout-shift sweep, README rewritten as a map of the repo, dead code removed.

### Changes

- Added `.claude/skills/journal-post/SKILL.md` and `scripts/qa/cls.mjs` (`npm run qa:cls`, `playwright-core` dev dependency, uses the installed Chrome).
- `add-media` skill: images are on R2 (was imgix). `push-to-production` skill: stages `scripts/`, live layout-shift check, no `netlify.toml`.
- Removed the unpublished drafts `venice_arrival.cljs` and `pavilion_construction_begins.cljs` (required but never listed) and `netlify.toml` (the site is on Cloudflare).
- Moved the finished February plans to `docs/history/`.

### Migration Notes

- The two drafts are in git history (`git show 55ee8be:src/amp/pages/blog/posts/venice_arrival.cljs`).

## 2026-10-29 — Remove Mockup Viewer and Firebase

**Rationale:** The unlinked `/mockups` 3D viewer was the only user of Firebase and is no longer needed on the site.
**Summary:** Removed the viewer, its authoring scripts and Firebase. The full viewer is preserved at git tag `archive/mockup-viewer`; the 3D gallery slides keep working from the shared scene code.

### Changes

- Removed `src/amp/pages/mockup/` (page, HUD, parts panel, selection bar, share link, manual-formation renderer), `src/amp/services/firebase.cljs`, `dev/mockups/`, the `/mockups` route and the `:mockup-view` modules.
- Moved the code the gallery slides still use to `src/amp/three/` (`objects`, `scene`, `geometry`, `simple-stack-formation`).
- Removed the `firebase` npm dependency and the now-unused `:hide-footer?` route flag.
- Added `docs/mockup-viewer.md` describing the archive and the Firebase data that remains.

### Migration Notes

- `/mockups` links no longer work. Check out `archive/mockup-viewer` to run the viewer locally.

## 2026-10-29 — Faster Loads, Capped Image Sizes, Cloudflare Hosting

**Rationale:** Every visitor downloaded a 5.8 MB main bundle (1.09 MB compressed) that included Mapbox GL and Three.js before anything rendered, and large or high-DPR screens requested images up to ~4800–7200 px wide, each fetched twice. Hosting moves to Cloudflare with armenianpavilion.org as the primary domain.
**Summary:** Main bundle down to 909 KB (246 KB compressed). Mapbox and Three.js load only when a map or 3D slide is about to be shown. Images are capped at 2400 px on the long edge and fetched once. Site config for Cloudflare Workers with a redirect Worker for the old domain.

### Changes

- `shadow-cljs.edn`: new `:map` and `:threejs` modules; `:mockup-view` depends on `:threejs`; release build no longer uses `:pretty-print`/`:pseudo-names`.
- Added `src/amp/ui/lazy_map.cljs`, a drop-in `mapbox-map` that fetches the `:map` module when within a screen of the viewport. Map pages now require it instead of `amp.ui.map`.
- `src/amp/ui/map.cljs` injects the Mapbox stylesheet itself (now matching the installed v3.18.1) instead of render-blocking every page from `index.html`.
- `src/amp/ui/image_gallery.cljs`: 3D slides are lazy-loaded and only mount once the gallery has been in view.
- `src/amp/ui/image.cljs`: srcset candidates are 1x/1.5x/2x, each capped at 2400 px and deduplicated; 2x uses q=50. The preload uses the same srcset, so the browser downloads one image instead of a 1x copy plus a dense copy.
- `public/index.html`: Typekit linked from the head (was a CSS `@import`), preconnects for Typekit and imgix, OG/Twitter URLs on armenianpavilion.org.
- `build/update-html.js`: stamps `main.css?v=<hash>` and fails if a replacement does not match.
- Added `resources/misc/_headers` (immutable caching for hashed JS/CSS), `wrangler.jsonc`, and `cloudflare/redirect/`. Removed the Netlify `_redirects` file.
- Site links in the press release and mockup share link point to armenianpavilion.org. Email addresses stay on armenianpavilion2026.org.

### Migration Notes

- Deploy with `npm run release && npx wrangler deploy` (see README). `netlify.toml` stays until the Cloudflare cutover is verified.

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
