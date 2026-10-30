---
name: journal-post
description: Write and publish a Journal (blog) post on the Armenian Pavilion 2026 site — research the story, gather images (press set, Folio renders, blackbox film stills, Mux films), write the post namespace, register it, check zero layout shift and ship. Use when the user asks for a new blog/journal post, a post about a work or event, or to add images, stills or a film to an existing post.
---

# Journal post

A post is a ClojureScript namespace with a hand-written body, plus a listing entry. Text ships in the
`:blog-view` bundle; every image is on R2 and every film on Mux. Read the two newest posts first
(`making_a_flag.cljs`, `carried_by_hand.cljs`): they are the reference for voice, structure and code.

## 1. Find the story and its sources

- Ask nothing you can find out. Pull from what the user names (sites, essays, folders) and from:
  - **Films** `src/amp/data/films.cljs` and `docs/films.md` (what's in each). Mux captions are a source
    for quotes: `mux assets get <asset_id> --agent` lists the text track; its file is
    `https://stream.mux.com/<playback_id>/text/<track_id>.vtt`.
  - **Footage archive** via the `blackbox` skill: `search` (what was said), `look` (what's in the
    picture), `whose` (who speaks), `line` (a transcript line in context).
  - **Press set** `resources/data/press/press.json`: each image has `key` (`press/<uid>`), `w`/`h`,
    `title` and a full `caption` with photo credit. Reusing these keeps captions consistent with /press.
  - **Folio** `~/Library/CloudStorage/Dropbox-AZStudios/Else Run/artwork_library/works/<work>/`
    (`hires/`, `shots/`, `presentations/`, `v1`–`v3`, `sources/`). Renders live here.
- Editorial rules:
  - Only claims a source documents. Draft or review sites: use what they cite, not their speculation.
  - Never imply a personal relationship (e.g. with Jasper Johns) that a source doesn't state.
  - A render is captioned "Rendering" and the text says it is not built.
  - Quotes from auto-captions are lightly cleaned; tell the user so they can check them. If the
    speaker can't be identified, quote without a name.
  - Don't mention Portage, and skip `carry_rig` / `ai_renders` folders that show it, until the user
    says it is announced.
  - Never use anything from `staffing/`, contracts or receipts (personal data).

## 2. Images

### Film stills (blackbox)

1. Find candidates on the proxies: `blackbox look <words>`, `blackbox search <words>`, then
   `blackbox frame <frame-id>` (or `<file>@<seconds>`) to get a proxy JPEG path, and `Read` it to judge
   it. Sweep a shot with `blackbox frame FILE.MOV --at <t>` at several times.
2. Order full-resolution stills from the originals (rendered on the Mac mini, minutes):
   `blackbox still new <id>=<name> <id>=<name> --look filmic --out <scratchpad>/stills`
   (`--look neutral` for documentary, `filmic` for the post's lead images; `~white=x,y` fixes a colour
   cast). `blackbox still show <request-id> --wait` reports the paths when they are back.
3. Upload as below. Proxy frames are only for choosing, never for publishing.

### Upload to R2

`npm run media -- add <file> journal/<yy-mm-dd>/<name>.jpg` (or `add-dir <dir>` with the folder laid
out as the paths you want). It makes WebP widths 480–2400 plus a JPEG. Objects are cached immutable
for a year: **to replace an image, upload under a new key** (e.g. `journal/26-09-03-filmic/`), never
over the old one. Reference it as `(str media-host "journal/<yy-mm-dd>/<name>.jpg")`; press images
as `(str media-host "press/<uid>")`.

Record each image's aspect ratio (`w/h`, 4 decimals) — `sips -g pixelWidth -g pixelHeight <file>`.

## 3. Write the post

1. `src/amp/pages/blog/posts/<slug_with_underscores>.cljs`, ns `amp.pages.blog.posts.<slug>`,
   exporting `(defnc post-content …)`. Copy the helpers from `making_a_flag.cljs`:
   `figure` (one captioned image, `:key`/`:src`, `:ar`, `:caption`, `:credit`) and `film` (Mux poster
   with a play button that lazy-loads `film-player`; pick a poster `:time` that isn't a title card).
2. Body is a `<>` fragment (a wrapping div loses the body spacing). Open with `(d/p {:class
   "ap-dropcap"} …)`, section heads as `d/h2`, quotes as `d/blockquote`, close with an italic line.
3. Galleries: `($ fit-gallery {:slides [...]})`, each slide `{:img-src :aspect-ratio :caption :credit}`.
   **One orientation per gallery** — mixing portrait and landscape leaves white space; split them.
   Don't repeat the cover as the first figure.
4. Every image carries its aspect ratio so its space is held before it loads (zero layout shift).
5. Listing: add the entry first in `src/amp/data/journal.cljs` (`:slug :title :date :author :kind
   :tone :summary :cover-image :cover-ar`). `:kind` is the filter tag (Studio, Venice, Process,
   Maquette…). `:tone` (`:red`, `:blue`, `:turquoise`) is kept for consistency; no UI reads it yet.
6. Register in `src/amp/pages/blog/registry.cljs`: require the ns and add the slug to `components`.

## 4. Check

- Dev server (`.claude/launch.json`, http://localhost:4200/blog/<slug>): read it at 1440 and 390 wide,
  light and dark; play the film; open a gallery.
- `npm run qa:cls -- http://localhost:4200 /blog /blog/<slug> /` must print `0.0000` on every line.
- For a big change, also sweep a release build (serve `release/` with an SPA fallback) and, after
  deploying, `npm run qa:cls -- https://armenianpavilion.org | grep -v 0.0000` (prints nothing).

## 5. Ship and report

Use `push-to-production`. In the report give the live URL, what sources and images were used, which
quotes came from captions, anything left out on purpose, and anything the user should check.
