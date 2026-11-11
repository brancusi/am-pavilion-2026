// Gives journal posts, films (/films/<slug>, the home page with that film) and
// the press kit's films and images their own link
// previews (title, description, picture), so a link texted or posted shows
// what it points to rather than the site's card; and makes the press ZIPs.
// Sections listed in PAGES (/walks, …) get their own preview too.
// Every page has an Italian (/it/…) and an Armenian (/hy/…) version; their
// previews are in that language, and every page served through here gets
// <html lang>, og:locale and hreflang links to its other versions.
// Only /, /blog/*, /films/*, /press/*, the PAGES paths and everything under
// /it and /hy run through here (wrangler.jsonc run_worker_first); everything
// else is served straight from the assets.
// posts.json, films.json and meta.json (section texts per locale, from
// resources/i18n/<locale>/meta.json) are written by build/og-posts.js; the
// press images come from press.json, the list the page reads.
import posts from "./posts.json";
import films from "./films.json";
import meta from "./meta.json";
import mediaText from "./media.json";
import { plan, send } from "./zip.js";

const site = "https://armenianpavilion.org";
const media = "https://media.armenianpavilion.org/";

class Content {
  constructor(value) { this.value = value; }
  element(el) { el.setAttribute("content", this.value); }
}

const LOCALES = ["en", "it", "hy"];
const OG_LOCALE = { en: "en_GB", it: "it_IT", hy: "hy_AM" };
const at = (locale, bare) => (locale === "en" ? bare : `/${locale}${bare === "/" ? "" : bare}`);

// The page with its title, description and preview picture set.
function preview(res, { path, title, description, image, width, height, type = "article", locale = "en" }) {
  const url = site + path;
  const name = meta[locale]["site-name"];
  const tags = [
    ["title", title], ["description", description],
    ["og:type", type], ["og:url", url], ["og:title", title], ["og:description", description],
    ["twitter:url", url], ["twitter:title", title], ["twitter:description", description],
    ...(image ? [["og:image", image], ["twitter:image", image]] : []),
  ];
  let rw = new HTMLRewriter().on("title", { element(el) { el.setInnerContent(title.startsWith(name) ? title : `${title} · ${name}`); } });
  for (const [k, v] of tags) rw = rw.on(`meta[name="${k}"], meta[property="${k}"]`, new Content(v));
  if (image && width && height) {
    rw = rw.on("head", { element(el) {
      el.append(`<meta property="og:image:width" content="${width}"><meta property="og:image:height" content="${height}">`, { html: true });
    } });
  }
  return rw.transform(res);
}

// Sections with their own link preview instead of the site's card. Each image
// is a 1200×630 JPEG under ~150 KB on R2 at share/<section>.jpg (messaging
// apps skip bigger ones); upload a new key to change one. A path added here
// must also be in run_worker_first (wrangler.jsonc).
// Their title and description are <key>.title / <key>.description in meta.json.
const PAGES = {
  "/": { key: "home", image: `${media}share/home.jpg` },
  "/walks": { key: "walks", image: `${media}share/walks.jpg` },
  "/visit": { key: "visit", image: `${media}share/visit.jpg` },
  "/artist": { key: "artist", image: `${media}share/artist.jpg` },
  "/portage": { key: "portage", image: `${media}share/portage.jpg` },
  "/armenian-as-well": { key: "story", image: `${media}share/armenian-as-well.jpg` },
  "/route-from-hotel-gabrielli": { key: "taxi", image: `${media}share/visit.jpg` },
  "/delivery": { key: "delivery", image: `${media}share/visit.jpg` },
  "/subscribed": { key: "subscribed", image: `${media}share/home.jpg` },
  // The journal index shows its newest post's cover (posts.json is newest first).
  "/blog": { key: "blog", image: Object.values(posts)[0]?.image },
};

// Releases on /press/release/<name> and /it/press/release/<name>: their own preview, in
// the page's language (the Italian link is the one sent to Italian press).
// The picture is its share card (build/press-share-card.mjs): the photograph
// with La Biennale's National Participations logo, 1200 × 630, on R2 share/.
// Their texts are pitch.<name>.title / .description in meta.json.
const PITCHES = {
  tricolore: { image: `${media}share/tricolore.jpg`, width: 1200, height: 630 },
};

// Text of a post or film in the locale, English where it has none.
const inLocale = (entry, locale) => ({ ...entry, ...Object.fromEntries(Object.entries(entry[locale] || {}).filter(([, v]) => v)) });

async function press(request, env, res, path, m, locale) {
  const [, section, item] = m;
  const T = meta[locale];
  const pitch = section === "release" && item && PITCHES[item];
  if (pitch && T[`pitch.${item}.title`]) {
    return preview(res, { path: path.replace(/\/+$/, ""), title: T[`pitch.${item}.title`], description: T[`pitch.${item}.description`],
                          image: pitch.image, width: pitch.width, height: pitch.height, type: "article", locale });
  }
  if (section === "films" && item && films[item]) {
    const f = inLocale(films[item], locale);
    return preview(res, { path, title: f.title, description: `${T["press.film"]} · ${f.summary}`, image: f.image, width: 1200, height: 630, type: "video.other", locale });
  }
  if (section === "images" && item) {
    const data = await (await env.ASSETS.fetch(new URL("/data/press/press.json", request.url))).json();
    const im = data.images.find((i) => i.uid === item);
    if (im) {
      // The Small download (1200 px long edge, ~100 KB): messaging apps skip
      // preview pictures much bigger than that.
      const s = im.dl?.s;
      const tr = (s) => (s && mediaText[locale]?.[s]) || s;
      const title = [tr(im.title), tr(im.date)].filter(Boolean).join(", ");
      return preview(res, { path, title, description: tr(im.caption_short) || tr(im.caption) || T["press.description"],
                            image: s ? media + s.key : `${media}${im.key}.jpg`, width: s?.w, height: s?.h, locale });
    }
  }
  return preview(res, { path, title: T["press.kit"], description: T["press.description"], type: "website", locale });
}

// <html lang>, og:locale and the page's other languages (hreflang) on every
// page served through here.
function localize(res, locale, bare) {
  const links = LOCALES.map((l) => `<link rel="alternate" hreflang="${l}" href="${site}${at(l, bare)}">`).join("")
    + `<link rel="alternate" hreflang="x-default" href="${site}${bare}">`
    + `<meta property="og:locale" content="${OG_LOCALE[locale]}">`
    + LOCALES.filter((l) => l !== locale).map((l) => `<meta property="og:locale:alternate" content="${OG_LOCALE[l]}">`).join("");
  return new HTMLRewriter()
    .on("html", { element(el) { el.setAttribute("lang", locale); } })
    .on("head", { element(el) { el.append(links, { html: true }); } })
    .transform(res);
}

// The preview for a page: bare is the path without its locale prefix.
async function route(request, env, res, path, bare, locale) {
  const T = meta[locale];
  const fm = bare.match(/^\/films\/([a-z0-9-]+)\/?$/);
  if (fm && films[fm[1]]) {
    const f = inLocale(films[fm[1]], locale);
    return preview(res, { path: at(locale, `/films/${fm[1]}`), title: f.title, description: f.summary, image: f.image, width: 1200, height: 630, type: "video.other", locale });
  }

  const trimmed = bare.replace(/\/+$/, "") || "/";   // /walks/ previews like /walks
  const page = PAGES[trimmed];
  if (page) {
    // The home page keeps the site's own card in English (index.html); the others get their texts.
    if (trimmed === "/" && locale === "en") return res;
    const sized = page.image?.startsWith(`${media}share/`);   // the share cards are 1200×630
    return preview(res, { path: at(locale, trimmed), title: T[`${page.key}.title`], description: T[`${page.key}.description`],
                          image: page.image, ...(sized && { width: 1200, height: 630 }), type: "website", locale });
  }

  const pm = bare.match(/^\/press(?:\/([a-z-]+)(?:\/([A-Za-z0-9-]+))?)?\/?$/);
  if (pm) return press(request, env, res, path, pm, locale);

  const slug = bare.match(/^\/blog\/([a-z0-9-]+)\/?$/)?.[1];
  const post = slug && posts[slug] && inLocale(posts[slug], locale);
  if (!post) return res;
  return preview(res, { path: at(locale, `/blog/${slug}`), title: post.title, description: post.summary, image: post.image, locale });
}

export default {
  async fetch(request, env, ctx) {
    const path = new URL(request.url).pathname;
    if (path.startsWith("/press/zip/")) return zip(request, env, ctx);
    if (path === "/api/subscribe") return subscribe(request, env);
    const res = await env.ASSETS.fetch(request);
    if (!(res.headers.get("content-type") || "").includes("text/html")) return res;

    const lm = path.match(/^\/(it|hy)(?=\/|$)/);
    const locale = lm ? lm[1] : "en";
    const bare = lm ? path.slice(3) || "/" : path;
    const out = await route(request, env, res, path, bare, locale);
    return localize(out, locale, bare.replace(/\/+$/, "") || "/");
  },
};

// POST /api/subscribe {email, website, page, tags}: the footer's News & events
// form and the Walks page's walk alerts (tags ["walks"], so walk emails can go
// to that tag alone). Adds the address to Buttondown as unconfirmed; Buttondown sends the
// confirmation email (double opt-in) and handles unsubscribes. The key is the
// BUTTONDOWN_API_KEY secret (npx wrangler secret put BUTTONDOWN_API_KEY).
// `website` is a honeypot: a filled one is answered as a success and dropped.
const SUBSCRIBE_TAGS = ["walks"];   // the only tags a form may set
async function subscribe(req, env) {
  const json = (body, status = 200) => new Response(JSON.stringify(body), {
    status, headers: { "content-type": "application/json", "cache-control": "no-store" } });
  if (req.method !== "POST") return json({ error: "method" }, 405);
  if (!env.BUTTONDOWN_API_KEY) return json({ error: "unavailable" }, 503);
  let body;
  try { body = await req.json(); } catch { return json({ error: "invalid" }, 400); }
  const email = String(body?.email || "").trim();
  if (body?.website) return json({ ok: true });
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return json({ error: "invalid" }, 400);
  const tags = Array.isArray(body.tags) ? body.tags.filter((t) => SUBSCRIBE_TAGS.includes(t)) : [];
  const page = typeof body.page === "string" && body.page.startsWith("/") ? body.page.slice(0, 200) : "/";
  const res = await fetch("https://api.buttondown.com/v1/subscribers", {
    method: "POST",
    headers: {
      authorization: `Token ${env.BUTTONDOWN_API_KEY}`,
      "content-type": "application/json",
      // Signing up again re-sends the confirmation (or resubscribes) instead of failing.
      "x-buttondown-collision-behavior": "add",
    },
    body: JSON.stringify({
      email_address: email,
      type: "unactivated",
      ip_address: req.headers.get("cf-connecting-ip") || undefined,
      referrer_url: `https://armenianpavilion.org${page}`,
      ...(tags.length && { tags }),
    }),
  });
  if (res.ok) return json({ ok: true });
  const detail = await res.text();
  console.log("buttondown", res.status, detail.slice(0, 300));
  if (res.status === 400 || res.status === 422) {
    // Already confirmed or suppressed: nothing to do, and no need to tell anyone who is on the list.
    if (/already|suppressed|exists/i.test(detail)) return json({ ok: true });
    if (/email/i.test(detail)) return json({ error: "invalid" }, 400);
  }
  return json({ error: "upstream" }, 502);
}

// /press/zip/<name>.zip?i=<uid>,<uid>&s=<sizes>: the press images with those
// uids (all of them without i) in the sizes asked for (s, m, l, raw, comma
// separated; Large without s), with their captions as captions.csv. Images and
// their downloads come from press.json, the list the page reads.
const TIERS = ["s", "m", "l", "raw"];
async function zip(req, env, ctx) {
  if (req.method !== "GET" && req.method !== "HEAD") return new Response("Method not allowed", { status: 405 });
  const url = new URL(req.url);
  const file = decodeURIComponent(url.pathname.slice("/press/zip/".length));
  const OLD = { jpg: "m", full: "l" };   // links from pages opened before the sizes changed (1 Nov 2026)
  const sizes = (url.searchParams.get("s") || "l").split(",").map((s) => OLD[s] || s);
  if (!/^[A-Za-z0-9._-]+\.zip$/.test(file) || !sizes.every((s) => TIERS.includes(s))) return new Response("Not found", { status: 404 });
  const data = await (await env.ASSETS.fetch(new URL("/data/press/press.json", url))).json();
  const ids = url.searchParams.get("i") ? new Set(url.searchParams.get("i").split(",")) : null;
  const images = data.images.filter((im) => im.dl && (!ids || ids.has(im.uid)));
  if (!images.length) return new Response("Not found: no such images", { status: 404 });
  if (ids && images.length !== ids.size)   // the page was loaded before a Sync changed the list
    return new Response(`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<title>Please reload</title><body style="font:16px/1.5 system-ui;max-width:32em;margin:15vh auto;padding:0 16px">
<p>The press images were updated after this page was opened, so this download link is out of date.</p>
<p><a href="/press/images">Reload the press page</a> and download again.</p>`,
      { status: 409, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });

  const root = file.slice(0, -4);
  const picked = TIERS.filter((s) => sizes.includes(s));
  const entries = images.flatMap((im) => picked.filter((s) => im.dl[s]).map((s) => {
    const d = im.dl[s];
    return { name: `${root}/${d.name}`, key: d.key, size: d.bytes, crc: d.crc };
  }));
  const cols = ["title", "date", "artist", "materials", "caption", "credit", "section"];
  const cell = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const csv = [["files", ...cols], ...images.map((im) => [picked.filter((s) => im.dl[s]).map((s) => im.dl[s].name).join(" "), ...cols.map((c) => im[c])])]
    .map((r) => r.map(cell).join(",") + "\r\n").join("");
  const enc = new TextEncoder();
  entries.push({ name: `${root}/captions.csv`, data: enc.encode("\ufeff" + csv) });   // BOM so Excel reads the accents

  const z = plan(entries);
  const sum = await crypto.subtle.digest("SHA-1", enc.encode(JSON.stringify(entries.map((e) => [e.name, e.crc, e.size, e.data && e.data.length]))));
  const etag = '"z' + [...new Uint8Array(sum)].slice(0, 10).map((b) => b.toString(16).padStart(2, "0")).join("") + '"';
  const h = new Headers({
    "content-type": "application/zip", "content-disposition": `attachment; filename="${file}"`, "accept-ranges": "bytes",
    etag, "cache-control": "no-cache", "x-robots-tag": "noindex",
  });
  let range = parseRange(req.headers.get("range"));
  const ifRange = req.headers.get("if-range");
  if (ifRange && ifRange !== etag) range = null;   // the archive changed since: start again
  let start = 0, end = z.length - 1, status = 200;
  if (range) {
    if (range.suffix !== undefined) start = Math.max(0, z.length - range.suffix);
    else { start = range.offset; if (range.length !== undefined) end = Math.min(end, start + range.length - 1); }
    if (start > end || start >= z.length) {
      h.set("content-range", `bytes */${z.length}`);
      return new Response(null, { status: 416, headers: h });
    }
    status = 206;
    h.set("content-range", `bytes ${start}-${end}/${z.length}`);
  }
  h.set("content-length", String(end - start + 1));
  if (req.method === "HEAD") return new Response(null, { status, headers: h });
  const { readable, writable } = new FixedLengthStream(end - start + 1);
  ctx.waitUntil(send(env.MEDIA, z, start, end, writable));
  return new Response(readable, { status, headers: h });
}

function parseRange(v) {
  const m = v && v.match(/^bytes=(\d*)-(\d*)$/);
  if (!m || (m[1] === "" && m[2] === "")) return null;
  if (m[1] === "") return { suffix: Number(m[2]) };
  const offset = Number(m[1]);
  return m[2] === "" ? { offset } : { offset, length: Number(m[2]) - offset + 1 };
}
