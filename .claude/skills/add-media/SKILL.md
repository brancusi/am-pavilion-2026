---
name: add-media
description: Upload a new video to Mux with the Mux CLI (and look things up with the Mux MCP server), then place it on the Armenian Pavilion 2026 site (hero, teaser, venue, artist, blog posts). Use when the user wants to add, upload, replace or swap a video, find a Mux playback ID, or list what is in the Mux account.
---

# Add media (Mux → site)

Videos on the site are Mux assets played by Mux Player through `amp.ui.video-background`. Pages
reference them by **public playback ID**. Adding a video is: get it into Mux, wait until it is
ready, then put the playback ID into the page.

Two tools, one job each:

- **Mux CLI (`mux`)** for uploads. It runs on this machine, so it reads local files, and one command
  uploads, waits and returns the playback ID.
- **Mux MCP server** (`mux` in `.mcp.json`) for everything else: finding assets, captions and other
  tracks, Robots jobs (chapters, summaries), Mux Data stats.

Both act on the Mux **Production** environment and neither treats anything as destructive. Never
delete or modify an existing asset unless the user names that asset.

## The Mux CLI

Installed with `brew install muxinc/tap/mux`. Check sign-in with `mux auth status`. If it isn't
signed in, `! mux login` fails (no TTY), so run `mux login --agent --oauth --name production` in the
background, take the `https://api.mux.com/...` authorization URL it prints as JSON on stderr, `open` it,
and have the user pick **ATD / Production** in the browser. Never enter credentials yourself. Always
pass `--agent` to other commands (JSON output, no prompts).

## The Mux MCP server

`https://mcp.mux.com`, OAuth. If its tools are missing, ask the user to run `/mcp`, pick `mux`,
sign in and choose **Production**. It exposes:

- `search_docs`: Mux API / SDK documentation.
- `execute`: runs TypeScript against the `@mux/ts` SDK in a Mux-hosted sandbox. The code must define
  `async function run(client) { … }`; `client` is already authenticated. Whatever it returns or
  prints comes back as the result. Variables don't persist between calls.

The sandbox only reaches Mux API hosts: it **cannot read local files**, which is why uploads use the CLI.

## 1. Upload to Mux

**4K and captions:** the CLI can't combine `--upload` with a settings file, and Mux caps new assets at
1080p unless `max_resolution_tier` is set. For studio films, create a direct upload through the MCP
`execute` tool with `new_asset_settings: {playback_policies: ["public"], video_quality: "plus",
max_resolution_tier: "2160p", passthrough, inputs: [{generated_subtitles: [{language_code: "en",
name: "English (generated)"}]}]}`, then send the file from this machine with
`curl -X PUT --upload-file <file> "<upload url>"`. The transcript is then at
`https://stream.mux.com/<playback_id>/text/<text_track_id>.txt`. Players hide captions by default
(several edits have them burned in).

For a quick 1080p upload without captions, the CLI is enough:

Local file(s); each file becomes its own asset, and globs work:

```bash
mux assets create --agent --upload "<path/to/clip.mp4>" \
  --playback-policy public --video-quality plus \
  --passthrough "<short label, e.g. venue-walkthrough-2026-10>" --wait
```

From a public URL (Dropbox `?dl=1`, S3, a Drive direct-download link), use `--url "<url>"` in place of
`--upload`. Run large uploads in the background.

`--wait` polls up to 5 minutes. If it returns before `status` is `ready`, check again with
`mux assets get <asset_id> --agent`. `errored` means report the asset's `errors` to the user.

## 2. Get the playback ID and check it

Take the playback ID whose policy is `public` from the output. Check it plays:
`https://stream.mux.com/<playback_id>.m3u8` should return 200, and the poster is
`https://image.mux.com/<playback_id>/thumbnail.jpg?time=<seconds>`.

Optional, via the MCP server: generate captions or Robots metadata for the new asset.

## 3. Put it on the site

Every page loads the player lazily and passes the ID:

```clojure
(def lazy-video (lazy-component amp.ui.video-background/video-background))

(d/div {:ref ref :class "my-8"}
       (d/div {:class "w-full aspect-[16/9]"}
              ($ lazy-video {:playback-id  "<playback_id>"
                             :aspect-ratio 1.77
                             :should-play? visible?      ; from use-intersection-observer on ref
                             :allow-audio? false})))     ; true shows the mute toggle
```

Current placements (grep `:playback-id` under `src/` to refresh this list):

| Where | File |
|---|---|
| Home hero (background loop) | `hero-playback-id` in `src/amp/pages/landing/page.cljs` |
| Home films reel (pick and play, with sound) | `src/amp/data/films.cljs`: add an entry, newest first |
| Home "The Studio" | `src/amp/pages/landing/studio.cljs` |
| Visit page | `src/amp/pages/venue/page.cljs` |
| Artist page | `src/amp/pages/artist/video.cljs` |
| Blog posts | `src/amp/pages/blog/posts/*.cljs` |

To **replace** a video, swap the ID at its placement. To **add** one, copy the block above into the
page; if the page has no `lazy-video` yet, add the `def` and require
`[amp.utils.lazy-loading :refer-macros [lazy-component]]` and the intersection-observer hook.
Keep the aspect-ratio wrapper so the page doesn't jump while the player loads.

Images are not on Mux: they are on Cloudflare R2 at `https://media.armenianpavilion.org/<path>`,
uploaded with `npm run media -- add <file> <path>` (see `scripts/media.mjs`) and shown with
`amp.ui.picture/picture` or `fit-gallery` `:img-src` entries. Keys are cached immutable for a year, so a
replacement goes under a new key. For posts, stills and galleries see the `journal-post` skill.

## 4. Check and ship

Run the dev server (`.claude/launch.json`) and confirm the video plays on the page, then use the
`push-to-production` skill. Tell the user the asset id, playback id and where it was placed.
