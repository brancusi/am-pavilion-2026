// Site Worker: static assets from ./release, plus a link preview of its own
// for each journal post. Only /blog/* runs through here (wrangler.jsonc
// run_worker_first); everything else is served straight from the assets.
// posts.json is written from the journal listing by build/og-posts.js.
import posts from "./posts.json";

const site = "https://armenianpavilion.org";

class Content {
  constructor(value) { this.value = value; }
  element(el) { el.setAttribute("content", this.value); }
}

export default {
  async fetch(request, env) {
    const res = await env.ASSETS.fetch(request);
    const slug = new URL(request.url).pathname.match(/^\/blog\/([a-z0-9-]+)\/?$/)?.[1];
    const post = slug && posts[slug];
    if (!post || !(res.headers.get("content-type") || "").includes("text/html")) return res;

    const url = `${site}/blog/${slug}`;
    const title = `${post.title} · Armenia Pavilion`;
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
