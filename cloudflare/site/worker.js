// Gives journal posts, films (/films/<slug>, the home page with that film) and
// the press kit's films and images their own link
// previews (title, description, picture), so a link texted or posted shows
// what it points to rather than the site's card; and makes the press ZIPs.
// Only /blog/*, /films/*, /press/* and /it/press/* run through here (wrangler.jsonc
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
    const res = await env.ASSETS.fetch(request);
    if (!(res.headers.get("content-type") || "").includes("text/html")) return res;

    const fm = path.match(/^\/films\/([a-z0-9-]+)\/?$/);
    if (fm && films[fm[1]]) {
      const f = films[fm[1]];
      return preview(res, { path: `/films/${fm[1]}`, title: f.title, description: f.summary, image: f.image, width: 1200, height: 630, type: "video.other" });
    }

    const pm = path.match(/^(\/it)?\/press(?:\/([a-z-]+)(?:\/([A-Za-z0-9-]+))?)?\/?$/);
    if (pm) return press(request, env, res, path, pm);

    const slug = path.match(/^\/blog\/([a-z0-9-]+)\/?$/)?.[1];
    const post = slug && posts[slug];
    if (!post) return res;
    return preview(res, { path: `/blog/${slug}`, title: post.title, description: post.summary, image: post.image });
  },
};

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
