// Writes cloudflare/site/posts.json from src/amp/data/journal.cljs: what the
// site Worker needs to give each /blog/<slug> its own link preview
// (title, summary, cover). Run by `npm run release` before deploying.
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

const field = (block, k) => {
  const m = block.match(new RegExp(`:${k}\\s+"((?:[^"\\\\]|\\\\.)*)"`));
  return m ? m[1].replace(/\\"/g, '"') : null;
};

const posts = {};
for (const block of src.split(/\{:slug/).slice(1).map((b) => ":slug" + b)) {
  const slug = field(block, "slug");
  const cover = field(block, "cover-image");
  posts[slug] = { title: field(block, "title"), summary: field(block, "summary"),
                  image: cover && jpeg(cover) };
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
  films[field(block, "slug")] = { title: field(block, "title"), summary: field(block, "summary"),
    image: `https://image.mux.com/${pid}/thumbnail.jpg?width=1200&height=630&fit_mode=smartcrop&time=${poster}` };
}
if (!Object.keys(films).length) throw new Error("og-posts: no films found in films.cljs");
fs.writeFileSync(path.join(__dirname, "../cloudflare/site/films.json"), JSON.stringify(films, null, 1) + "\n");
console.log(`og-posts: ${Object.keys(films).length} films`);
