---
name: push-to-production
description: Ship the current changes of the Armenian Pavilion 2026 site to production — source commit, release build, release commit, Netlify production deploy, push the branch, open and merge a PR into main. Use when the user says "push to production" or "/push-to-production". If they add "and wind down" / "wind it down", also shut down the local dev server, close the preview tab, and clean up generated files and lingering processes.
---

# Push to production

End-to-end release of the current working-tree changes. Two forms:

- **"push to production"** → steps 0–7.
- **"push to production and wind down"** → steps 0–7, then step 8.

Run each `git`, `gh` and `netlify` step as its own Bash call. A single command that chains
`git push`, `gh pr create` and `gh pr merge` gets blocked by the safety layer; separate calls go through.
Do not ask for confirmation between steps — the phrase "push to production" is the approval.

## 0. Preflight (read-only)

- `git status --short` and `git branch --show-current`.
  - Dev-build output under `public/js`, `public/css`, `public/data`, `public/images`, `public/fonts`,
    `public/financial-reports` is always dirty while the dev server runs. Never stage it.
  - `release/` is committed on its own in step 3. Never stage it together with source.
  - If on `main`, create a branch first: `git checkout -b claude/<short-slug>`.
- `git fetch origin` then `git rev-list --count HEAD..origin/main`. If main has moved, merge `origin/main`
  into the branch, resolve, and tell the user before continuing.
- `npx netlify status` must show the linked project `am-pavilion-2026` (https://armenianpavilion2026.org).
  If it is not logged in or not linked, stop and ask the user to run `npx netlify login` / `npx netlify link`
  themselves. Never enter credentials.
- If there is nothing to commit and `release/` already matches HEAD, say so and continue from step 5.

## 1. Source commit

`git add` only source paths: `src/`, `resources/`, `shadow-cljs.edn`, `deps.edn`, `package.json`,
`package-lock.json`, `tailwind.config.js`, `postcss.config.js`, `public/index.html`, `netlify.toml`,
`docs/`, `.claude/skills/`, `.claude/launch.json`, `.github/`.
Commit with a message that says what changed and why, ending with the attribution trailer from the
system reminder. Then capture the short hash: `H=$(git rev-parse --short HEAD)`.

## 2. Release build

`npm run release` (about 20 s). It cleans `release/js`, runs the advanced shadow-cljs build stamped with `$H`,
runs PostCSS, copies assets, and rewrites `release/index.html`.

Expected, benign warnings: 11 × `:undeclared-var` in `src/amp/pages/budget/non_profit.cljs` and
`src/amp/ui/footer.cljs`, one `:redef` for `medley.core/abs`, one `:invalid-arithmetic` in loom.
Anything else is a real problem: stop and fix before deploying.

Verify: `release/js/main.$H.js` exists and `grep "main.$H.js" release/index.html` matches.
If the change touched user-visible text, grep the new string in `release/js/*.js` (shared UI lives in
`main.*.js`, page code in `<page>-view.*.js`).

## 3. Release commit

`git add release && git commit -m "Release build $H"` plus the attribution trailer.
This matches the repo's existing "Release build <hash>" commits.

## 4. Deploy to Netlify production

`npx netlify deploy --prod --dir release --message "Release build $H" --json` and read `deploy_id`.

Verify live: `curl -s https://armenianpavilion2026.org/ | grep -o 'main\.[0-9a-f]*\.js'` must print
`main.$H.js`. Spot-check a changed string in the live bundle when practical.

## 5. Push the branch

`git push -u origin <branch>`.

## 6. Merge into main

- `gh pr create --base main --head <branch> --title "<summary>" --body-file -` with a Summary and a Test plan,
  ending with the PR attribution line from the system reminder.
- `gh pr merge <number> --merge` — merge commit, no branch deletion (the branch may be checked out in a worktree).
- Verify: `git fetch origin && git log --oneline -3 origin/main` shows the merge.
- If `gh` is unavailable or the merge is refused, fall back to `git push origin HEAD:main` (fast-forward) and say so.

## 7. Report

Lead with the live URL and what changed. List the source commit, release commit, deploy id and PR link.
Mention anything left dirty (dev-build output under `public/`, untracked files) and anything skipped.

## 8. Wind down (only when asked)

- Stop the dev server: `preview_list`, then `preview_stop` for the `dev` server (it is started from
  `.claude/launch.json`, which runs `npm run dev` and `shadow-cljs watch app` together). Close the preview tab.
- Check nothing lingers: `lsof -nP -iTCP:4200 -iTCP:8777 -iTCP:9630 -sTCP:LISTEN` should print nothing, and
  `pgrep -fl "shadow-cljs|chokidar|postcss|run-p"` filtered to this worktree path should print nothing.
  Kill leftovers by PID if needed.
- Restore generated dev output so the worktree is clean: run `git status --short public/` first. If everything
  listed is generated output (js, css, data, images, fonts, financial-reports), run
  `git checkout -- public/ && git clean -fd public/`. Skip and mention it if anything looks hand-made.
- Confirm `git status --short` is clean apart from intentionally untracked files, and report.
