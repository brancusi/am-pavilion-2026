# Mockup viewer (archived)

The `/mockups?piece=<id>` 3D viewer was removed from the site on 2026-10-29. It was never linked
publicly; it was used to study stacked-block formations (Big Red, Blue/Yellow, V Shape, walls and
stairs) with orbit controls, a wireframe toggle and a parts list.

## Where it lives now

Git tag **`archive/mockup-viewer`** is the last commit with the full viewer:

- `src/amp/pages/mockup/` — page, HUD, parts list, selection bar, share link, renderers
  (`simple-stack-formation`, `manual-formation`)
- `src/amp/services/firebase.cljs` — Firebase Realtime Database client
- `dev/mockups/*.cljs` — REPL scripts that pushed each piece to Firebase with `set-edn`

```bash
git checkout archive/mockup-viewer   # or: git worktree add ../amp-mockups archive/mockup-viewer
npm ci && npm run dev                # then http://localhost:4200/mockups?piece=big-red-004
```

Each piece is one EDN string in `https://armenian-pavilion-default-rtdb.firebaseio.com/<piece-id>`.
The confirmed designs are `big-red-004` and `blue-yellow-blue-yellow-003`. The database still holds
all 26 pieces; it is publicly readable and was written without authentication, so lock its write rules
(or export and delete it) if it is no longer needed.

## What stayed in the site

The blog gallery's interactive 3D slides reuse the scene code, now under `src/amp/three/`
(`objects`, `scene`, `geometry`, `simple-stack-formation`) and loaded via `amp.ui.threejs-slide`.
Slide data is inline in the post (e.g. `blue_yellow_maquette.cljs`), with no Firebase involved.

## Bringing it back

To make it a standalone tool, start from the tag and keep only the viewer, `src/amp/three/` and
`firebase.cljs` in a new repo (or a separate shadow-cljs build), so the site never ships Firebase again.
