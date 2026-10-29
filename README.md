### Dev

Prep dev

```bash
npm i
```

Start dev

```bash
npm run dev
```

Jack in via calva, shadow-cljs -> :app

Fire up http://localhost:4200/

### Deployment

The site is hosted on Cloudflare Workers (static assets) at https://armenianpavilion.org.
`wrangler.jsonc` serves `release/` and attaches the `armenianpavilion.org` custom domain.
`cloudflare/redirect/` is a tiny Worker that 301-redirects `armenianpavilion2026.org`,
`www.armenianpavilion2026.org` and `www.armenianpavilion.org` to the primary domain,
keeping the path.

Log into the Cloudflare account that owns both zones and check it is the right one:

```bash
npx wrangler whoami
```

Build and deploy the site:

```bash
npm run release
npx wrangler deploy
```

The redirect Worker only needs redeploying if `cloudflare/redirect/` changes:

```bash
npx wrangler deploy --config cloudflare/redirect/wrangler.jsonc
```

Cache rules live in `resources/misc/_headers` (copied into `release/` by the build).
