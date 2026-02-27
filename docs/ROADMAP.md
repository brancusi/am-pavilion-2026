# Roadmap

## 2026-02-25 — Hard-Coded Blog with Slug-Based Routing

**Goal:** Ship a minimal, hard-coded blog system with slug-based URLs (`/blog/:slug`) that loads instantly, uses the standard nav/page-shell chrome, and supports rich content (text, images, video) with skeleton placeholders for media.

**Current state:**

- Blog module (`amp.pages.blog.page`) exists as a "coming soon" placeholder inside a `page-shell`. It's already wired into shadow-cljs module splitting (`:blog-view` module) and the router's `site-map`.
- The router uses flat paths only — no path parameters. All routes are simple strings like `"blog"`, `"artist"`, etc.
- `lazy-image` already has a two-phase loading pattern (preload → decode → GSAP reveal) with pulsing dots as a loading indicator, but there's no generic skeleton/shimmer placeholder for arbitrary content blocks.
- Blog is commented out of the nav menu (`nav-items` in `menu.cljs`).

**Target state:**

- `/blog` shows an index page listing all posts with title, date, summary, and optional cover thumbnail.
- `/blog/:slug` renders an individual post as a full page within `page-shell`, using the standard section-header eyebrow pattern.
- Posts are hard-coded ClojureScript data + component functions — no CMS, no API calls, no build-time processing. Adding a new post means adding a namespace and a registry entry.
- Media (images, video) uses skeleton placeholders that shimmer until loaded, then cross-fade in. Text is visible immediately since it's bundled in the JS module.
- Blog is enabled in the nav menu.
- All blog code lives in the existing `:blog-view` module — no new module-splitting entries needed.

**Key decisions:**

- **Hard-coded vs CMS:** Hard-coded. Posts are ClojureScript namespaces with a data map (metadata) and a render function (content). This is the simplest possible approach — no async data fetching, no loading states for text, instant rendering once the module loads.
- **Routing approach:** Add a parameterized route `/blog/:slug` to reitit alongside the existing `/blog` index route. The blog page component reads the slug from route match params and dispatches to the correct post. Both routes resolve to the same lazy-loaded `:blog-view` module, so no additional module-splitting config is needed.
- **Post registry pattern:** A single `amp.pages.blog.registry` namespace that maps slug strings to `{:title :date :summary :cover-image :component}` maps. The component value is the post's render function. The index page iterates this registry to build the listing.
- **Media placeholders:** Add a `skeleton-box` component (`amp.ui.skeleton`) — a shimmering animated div with configurable aspect ratio. Wrap `lazy-image` usages in blog posts with this skeleton as the fallback. Since blog text is bundled JS, it renders instantly; only images/video show the skeleton.
- **Navigation:** Uncomment blog from `nav-items` in `menu.cljs`. The existing menu system handles the rest.
- **No pagination:** With a small number of hard-coded posts, the index page shows all posts. No pagination, filtering, or search needed.
- **URL structure:** `/blog` = index, `/blog/some-post-title` = individual post. Slugs are kebab-case, URL-safe strings defined by the author.

### Implementation Strategy

The work divides into three phases: routing infrastructure, blog components, and polish.

**Phase 1 — Routing.** The router needs to support path parameters for the first time. In `site-map`, change the blog entry's `:path` to `"blog"` (it likely already is). Add a second route entry in the `routes` function for `["/blog/:slug" {...}]` that points to the same blog-view lazy component. The blog page component then checks `(-> match :parameters :path :slug)` — if present, render the post; if nil, render the index. This keeps both views in the single `:blog-view` module.

**Phase 2 — Blog components.** Create the registry namespace with 1–2 starter posts. Build the index page (list of cards linking to `/blog/:slug`). Build the post page (reads slug → looks up registry → renders the component inside page-shell with section-header). Each post is a `defnc` component that uses standard body-copy tokens and `lazy-image` for media.

**Phase 3 — Skeleton placeholders.** Create `amp.ui.skeleton` with a `skeleton-box` component: a div with a CSS shimmer animation (Tailwind `animate-pulse` or a custom keyframe), configurable `aspect-ratio` or `h-*` classes. Use it as the wrapper/fallback around `lazy-image` in blog posts. This is the "instant feel" — text appears immediately, image slots show the shimmer, then images cross-fade in via the existing `lazy-image` GSAP transition.

**Touch points:**

- `src/amp/services/router.cljs` — add parameterized `/blog/:slug` route
- `src/amp/pages/blog/page.cljs` — rewrite from placeholder to index/post dispatcher
- `src/amp/pages/blog/registry.cljs` — new: post slug → metadata+component map
- `src/amp/pages/blog/index.cljs` — new: index page listing component
- `src/amp/pages/blog/post.cljs` — new: individual post page wrapper
- `src/amp/pages/blog/posts/` — new directory: one namespace per post
- `src/amp/ui/skeleton.cljs` — new: shimmer placeholder component
- `src/amp/nav/menu.cljs` — uncomment blog from nav-items

**Risks:**

- Reitit route ordering — the parameterized `/blog/:slug` must not shadow the `/blog` index. Reitit handles this correctly if the static route is listed first (or use `:conflicting true`).
- Module boundaries — all blog content (including post namespaces) must be required from within the `:blog-view` module entry point (`amp.pages.blog.page`) so shadow-cljs bundles them together. If a post namespace is accidentally required from `main`, it defeats code splitting.

### Tasks

- [x] **Step 1 — Add parameterized blog route** (2026-02-25)
      Modify `router.cljs` to add `/blog/:slug` alongside the existing `/blog` route, both pointing to the blog-view lazy component.

- [x] **Step 2 — Create skeleton placeholder component** (2026-02-25)
      Add `amp.ui.skeleton` with a `skeleton-box` component (shimmer animation, configurable aspect ratio).

- [x] **Step 3 — Create post registry** (2026-02-25)
      Add `amp.pages.blog.registry` mapping slugs to `{:title :date :summary :cover-image :component}`.

- [x] **Step 4 — Build blog index page** (2026-02-25)
      Create `amp.pages.blog.index` — lists all posts from the registry as linked cards with title, date, summary.

- [x] **Step 5 — Build post page wrapper** (2026-02-25)
      Create `amp.pages.blog.post` — reads slug from route params, looks up registry, renders the post component inside page-shell with section-header.

- [x] **Step 6 — Rewrite blog page entry point** (2026-02-25)
      Update `amp.pages.blog.page` to dispatch: no slug → index, slug present → post page.

- [x] **Step 7 — Write 1–2 starter posts** (2026-02-25)
      Add example post namespaces in `src/amp/pages/blog/posts/` using body-copy tokens, lazy-image with skeleton fallbacks.

- [x] **Step 8 — Enable blog in navigation** (2026-02-25)
      Uncomment blog from `nav-items` in `menu.cljs`.

- [x] **Step 9 — Validate release build** (2026-02-25)
      Run `npm run release` — must complete without errors (medley warning expected).

<!-- Add new initiatives above this line -->
