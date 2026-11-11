// Writes cloudflare/site/posts.json from src/amp/data/journal.cljs and the
// journal catalogs (resources/i18n/<locale>/journal.json): what the site
// Worker needs to give each /blog/<slug> its own link preview (title,
// summary, cover; the Italian and Armenian text under "it" and "hy").
// Also films.json (from films.cljs + films.json catalogs) and meta.json
// (the section previews, resources/i18n/<locale>/meta.json).
// Run by `npm run release` before deploying.
const fs = require("fs");
const path = require("path");

const src = fs.readFileSync(path.join(__dirname, "../src/amp/data/journal.cljs"), "utf8");
const media = "https://media.armenianpavilion.org/";

// Mirrors image-key in amp.ui.picture: every stored image has a JPEG at <key>.jpg.
const jpeg = (url) => {
  if (!url.startsWith(media)) return url;
  const key = decodeURIComponent(url.slice(media.length))
    .replace(/\.[^./]+$/, "").toLowerCase().split("/")
    .map((s) => s.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")).join("/");
  return `${media}${key}.jpg`;
};

const locales = ["en", "it", "hy"];
const catalog = (l, name) => {
  const f = path.join(__dirname, "../resources/i18n", l, name + ".json");
  return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, "utf8")) : {};
};
// { title, summary, it: { title, summary }, hy: … } for a catalog entry.
const texts = (name, slug, keys) => {
  const by = Object.fromEntries(locales.map((l) => [l, catalog(l, name)]));
  const pick = (l) => Object.fromEntries(keys.map((k) => [k, by[l][`${slug}.${k}`] || by.en[`${slug}.${k}`] || null]));
  return { ...pick("en"), it: pick("it"), hy: pick("hy") };
};

const field = (block, k) => {
  const m = block.match(new RegExp(`:${k}\\s+"((?:[^"\\\\]|\\\\.)*)"`));
  return m ? m[1].replace(/\\"/g, '"') : null;
};

const posts = {};
for (const block of src.split(/\{:slug/).slice(1).map((b) => ":slug" + b)) {
  const slug = field(block, "slug");
  const cover = field(block, "cover-image");
  posts[slug] = { ...texts("journal", slug, ["title", "summary"]), image: cover && jpeg(cover) };
  if (!posts[slug].title) throw new Error(`og-posts: no title for ${slug} in en/journal.json`);
}
if (!Object.keys(posts).length) throw new Error("og-posts: no posts found in journal.cljs");
fs.writeFileSync(path.join(__dirname, "../cloudflare/site/posts.json"), JSON.stringify(posts, null, 1) + "\n");
console.log(`og-posts: ${Object.keys(posts).length} posts`);

// And cloudflare/site/films.json from src/amp/data/films.cljs, for the press
// kit's film links (/press/films/<slug>): title, summary and Mux poster.
const filmSrc = fs.readFileSync(path.join(__dirname, "../src/amp/data/films.cljs"), "utf8");
const films = {};
for (const block of filmSrc.split(/\{:slug/).slice(1).map((b) => ":slug" + b)) {
  const pid = field(block, "playback-id");
  const poster = (block.match(/:poster\s+(\d+)/) || [])[1] || 0;
  films[field(block, "slug")] = { ...texts("films", field(block, "slug"), ["title", "summary"]),
    image: `https://image.mux.com/${pid}/thumbnail.jpg?width=1200&height=630&fit_mode=smartcrop&time=${poster}` };
}
if (!Object.keys(films).length) throw new Error("og-posts: no films found in films.cljs");
fs.writeFileSync(path.join(__dirname, "../cloudflare/site/films.json"), JSON.stringify(films, null, 1) + "\n");
console.log(`og-posts: ${Object.keys(films).length} films`);

// cloudflare/site/meta.json: the section previews and press texts per locale.
const meta = Object.fromEntries(locales.map((l) => [l, { ...catalog("en", "meta"), ...catalog(l, "meta") }]));
fs.writeFileSync(path.join(__dirname, "../cloudflare/site/meta.json"), JSON.stringify(meta, null, 1) + "\n");
console.log("og-posts: meta for", locales.join(", "));

// cloudflare/site/media.json: press image titles and captions in it/hy
// (source-keyed, as resources/i18n/<locale>/data-media.json), for /it|hy/press/images/<uid>.
const mediaText = Object.fromEntries(locales.filter((l) => l !== "en").map((l) => [l, catalog(l, "data-media")]));
fs.writeFileSync(path.join(__dirname, "../cloudflare/site/media.json"), JSON.stringify(mediaText) + "\n");
console.log("og-posts: media text for", Object.keys(mediaText).join(", "));
