// Site Worker: static assets from ./release, plus a link preview of its own
// for each journal post, and the press images as ZIPs made on request.
// Only /blog/* and /press/zip/* run through here (wrangler.jsonc
// run_worker_first); everything else is served straight from the assets.
// posts.json is written from the journal listing by build/og-posts.js.
import posts from "./posts.json";
import { plan, send } from "./zip.js";

const site = "https://armenianpavilion.org";

class Content {
  constructor(value) { this.value = value; }
  element(el) { el.setAttribute("content", this.value); }
}

export default {
  async fetch(request, env, ctx) {
    if (new URL(request.url).pathname.startsWith("/press/zip/")) return zip(request, env, ctx);
    const res = await env.ASSETS.fetch(request);
    const slug = new URL(request.url).pathname.match(/^\/blog\/([a-z0-9-]+)\/?$/)?.[1];
    const post = slug && posts[slug];
    if (!post || !(res.headers.get("content-type") || "").includes("text/html")) return res;

    const url = `${site}/blog/${slug}`;
    const title = `${post.title} · Armenian Pavilion`;
    const meta = [
      ["title", title], ["description", post.summary],
      ["og:type", "article"], ["og:url", url], ["og:title", post.title], ["og:description", post.summary],
      ["twitter:url", url], ["twitter:title", post.title], ["twitter:description", post.summary],
      ...(post.image ? [["og:image", post.image], ["twitter:image", post.image]] : []),
    ];
    let rw = new HTMLRewriter().on("title", { element(el) { el.setInnerContent(title); } });
    for (const [k, v] of meta) {
      rw = rw.on(`meta[name="${k}"], meta[property="${k}"]`, new Content(v));
    }
    return rw.transform(res);
  },
};

// /press/zip/<name>.zip?i=<uid>,<uid>&s=jpg|full: the press images with those
// uids (all of them without i), as 2400px JPEGs or at full size, with their
// captions as captions.csv. Images come from press.json, the list the page reads.
async function zip(req, env, ctx) {
  if (req.method !== "GET" && req.method !== "HEAD") return new Response("Method not allowed", { status: 405 });
  const url = new URL(req.url);
  const file = decodeURIComponent(url.pathname.slice("/press/zip/".length));
  const size = url.searchParams.get("s") || "jpg";
  if (!/^[A-Za-z0-9._-]+\.zip$/.test(file) || !["jpg", "full"].includes(size)) return new Response("Not found", { status: 404 });
  const data = await (await env.ASSETS.fetch(new URL("/data/press/press.json", url))).json();
  const ids = url.searchParams.get("i") ? new Set(url.searchParams.get("i").split(",")) : null;
  const images = data.images.filter((im) => im.dl && (!ids || ids.has(im.uid)));
  if (!images.length) return new Response("Not found: no such images", { status: 404 });
  if (ids && images.length !== ids.size)   // the page was loaded before a Sync changed the list
    return new Response(`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width">
<title>Please reload</title><body style="font:16px/1.5 system-ui;max-width:32em;margin:15vh auto;padding:0 16px">
<p>The press images were updated after this page was opened, so this download link is out of date.</p>
<p><a href="/press#images">Reload the press page</a> and download again.</p>`,
      { status: 409, headers: { "content-type": "text/html; charset=utf-8", "cache-control": "no-store" } });

  const root = file.slice(0, -4);
  const entries = images.map((im) => ({
    name: `${root}/${im.file}${size === "full" ? "-full" : ""}.jpg`,
    key: `${im.key}${size === "full" ? "-full" : ""}.jpg`, size: im.dl[size].bytes, crc: im.dl[size].crc,
  }));
  const cols = ["title", "date", "artist", "materials", "caption", "credit", "section"];
  const cell = (v) => `"${String(v ?? "").replace(/"/g, '""')}"`;
  const csv = [["file", ...cols], ...images.map((im) => [`${im.file}${size === "full" ? "-full" : ""}.jpg`, ...cols.map((c) => im[c])])]
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
