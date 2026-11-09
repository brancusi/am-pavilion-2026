// Gives journal posts, films (/films/<slug>, the home page with that film) and
// the press kit's films and images their own link
// previews (title, description, picture), so a link texted or posted shows
// what it points to rather than the site's card; and makes the press ZIPs.
// Sections listed in PAGES (/walks, …) get their own preview too.
// Only /blog/*, /films/*, /press/*, /it/press/* and the PAGES paths run through here (wrangler.jsonc
// run_worker_first); everything else is served straight from the assets.
// posts.json and films.json are written by build/og-posts.js; the press
// images come from press.json, the list the page reads.
import posts from "./posts.json";
import films from "./films.json";
import { plan, send } from "./zip.js";

const site = "https://armenianpavilion.org";
const media = "https://media.armenianpavilion.org/";

class Content {
  constructor(value) { this.value = value; }
  element(el) { el.setAttribute("content", this.value); }
}

// The page with its title, description and preview picture set.
function preview(res, { path, title, description, image, width, height, type = "article" }) {
  const url = site + path;
  const meta = [
    ["title", title], ["description", description],
    ["og:type", type], ["og:url", url], ["og:title", title], ["og:description", description],
    ["twitter:url", url], ["twitter:title", title], ["twitter:description", description],
    ...(image ? [["og:image", image], ["twitter:image", image]] : []),
  ];
  let rw = new HTMLRewriter().on("title", { element(el) { el.setInnerContent(`${title} · Armenian Pavilion`); } });
  for (const [k, v] of meta) rw = rw.on(`meta[name="${k}"], meta[property="${k}"]`, new Content(v));
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
const PAGES = {
  "/walks": {
    title: "Walks",
    description: "The studio carries the works out of Tesa 41 and through Venice, sets them down in a campo, on a fondamenta or before a church, and carries them home another way. The schedule, the routes and every walk so far.",
    image: `${media}share/walks.jpg`,
  },
  "/visit": {
    title: "Getting to the pavilion",
    description: "The pavilion sits inside the Arsenale, about an eight-minute walk from the crossing at the Piraeus Lion. Guests by water taxi enter from the North Lagoon. Tuesday to Sunday, 10:00–17:30, 9 May – 22 November 2026.",
    image: `${media}share/visit.jpg`,
  },
  "/artist": {
    title: "Zadik Zadikian",
    description: "Sculptor. Representing Armenia at the 61st International Art Exhibition — La Biennale di Venezia.",
    image: `${media}share/artist.jpg`,
  },
  "/portage": {
    title: "Portage",
    description: "In Venice everything arrives by water and leaves the quay on someone’s back. From Piazzale Roma on, whatever moves goes by boat or by hand; the studio goes one step further back, to a frame on the shoulders.",
    image: `${media}share/portage.jpg`,
  },
  "/armenian-as-well": {
    title: "Armenian as well: Zadikian and Shafrazi",
    description: "Two Armenians met in Richard Serra’s studio in 1973. Serra introduced one to the other as “Armenian as well.” Fifty-three years later they are working side by side again, inside the Venice Arsenale.",
    image: `${media}share/armenian-as-well.jpg`,
  },
  "/route-from-hotel-gabrielli": {
    title: "By water taxi: Hotel Gabrielli to the pavilion",
    description: "From the Hotel Gabrielli landing on Riva degli Schiavoni straight to the pavilion’s own landing inside the Arsenale Militare: through the canals of Castello, out into the North Lagoon and back in through Rio delle Galeazze, 15 to 20 minutes on the water.",
    image: `${media}share/visit.jpg`,
  },
  "/delivery": {
    title: "Consegne al Padiglione Armenia",
    description: "Come consegnare materiali al Padiglione Armenia, Tesa 41, Arsenale Militare di Venezia: a piedi dalla Celestia o in barca.",
    image: `${media}share/visit.jpg`,
  },
  // The journal index shows its newest post's cover (posts.json is newest first).
  "/blog": {
    title: "Journal: notes from the studio",
    description: "Process, travel and the making of The Studio, from Los Angeles to Tesa 41.",
    image: Object.values(posts)[0]?.image,
  },
};

const PRESS_TEXT = {
  en: { kit: "Press kit", desc: "Press kit for Zadik Zadikian: The Studio, Armenian Pavilion, Biennale Arte 2026: release, fact sheet, images, films and logos.", film: "Film" },
  it: { kit: "Cartella stampa", desc: "Cartella stampa di Zadik Zadikian: The Studio, Padiglione della Repubblica di Armenia, Biennale Arte 2026: comunicato, scheda, immagini, video e loghi.", film: "Video" },
};

async function press(request, env, res, path, m) {
  const [, it, section, item] = m;
  const tx = PRESS_TEXT[it ? "it" : "en"];
  if (section === "films" && item && films[item]) {
    const f = films[item];
    return preview(res, { path, title: f.title, description: `${tx.film} · ${f.summary}`, image: f.image, width: 1200, height: 630, type: "video.other" });
  }
  if (section === "images" && item) {
    const data = await (await env.ASSETS.fetch(new URL("/data/press/press.json", request.url))).json();
    const im = data.images.find((i) => i.uid === item);
    if (im) {
      // The Small download (1200 px long edge, ~100 KB): messaging apps skip
      // preview pictures much bigger than that.
      const s = im.dl?.s;
      const title = [im.title, im.date].filter(Boolean).join(", ");
      return preview(res, { path, title, description: im.caption_short || im.caption || tx.desc,
                            image: s ? media + s.key : `${media}${im.key}.jpg`, width: s?.w, height: s?.h });
    }
  }
  return preview(res, { path, title: tx.kit, description: tx.desc, type: "website" });
}

export default {
  async fetch(request, env, ctx) {
    const path = new URL(request.url).pathname;
    if (path.startsWith("/press/zip/")) return zip(request, env, ctx);
    if (path === "/api/subscribe") return subscribe(request, env);
    const res = await env.ASSETS.fetch(request);
    if (!(res.headers.get("content-type") || "").includes("text/html")) return res;

    const fm = path.match(/^\/films\/([a-z0-9-]+)\/?$/);
    if (fm && films[fm[1]]) {
      const f = films[fm[1]];
      return preview(res, { path: `/films/${fm[1]}`, title: f.title, description: f.summary, image: f.image, width: 1200, height: 630, type: "video.other" });
    }

    const bare = path.replace(/\/+$/, "") || "/";   // /walks/ previews like /walks
    const page = PAGES[bare];
    if (page) {
      const sized = page.image?.startsWith(`${media}share/`);   // the share cards are 1200×630
      return preview(res, { path: bare, ...page, ...(sized && { width: 1200, height: 630 }), type: "website" });
    }

    const pm = path.match(/^(\/it)?\/press(?:\/([a-z-]+)(?:\/([A-Za-z0-9-]+))?)?\/?$/);
    if (pm) return press(request, env, res, path, pm);

    const slug = path.match(/^\/blog\/([a-z0-9-]+)\/?$/)?.[1];
    const post = slug && posts[slug];
    if (!post) return res;
    return preview(res, { path: `/blog/${slug}`, title: post.title, description: post.summary, image: post.image });
  },
};

// POST /api/subscribe {email, website, page}: the footer's News & events form.
// Adds the address to Buttondown as unconfirmed; Buttondown sends the
// confirmation email (double opt-in) and handles unsubscribes. The key is the
// BUTTONDOWN_API_KEY secret (npx wrangler secret put BUTTONDOWN_API_KEY).
// `website` is a honeypot: a filled one is answered as a success and dropped.
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
