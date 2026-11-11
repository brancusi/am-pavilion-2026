// Screenshots and layout checks for every locale.
//   node scripts/qa/i18n-snap.mjs <base-url> <out-dir> <path> [path…] [--locales en,it,hy] [--widths 1440,390] [--full]
// For each path × locale × width: a screenshot (first two screens, or the
// full page with --full), console i18n warnings and errors, horizontal page
// overflow, and text that overflows its box (headings, buttons, labels).
// Prints one JSON line per page; problems are listed under "issues".
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const { chromium } = require("playwright-core");

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); if (i < 0) return d; const v = args[i + 1]; args.splice(i, 2); return v; };
const flag = (k) => { const i = args.indexOf(k); if (i < 0) return false; args.splice(i, 1); return true; };
const locales = opt("--locales", "en,it,hy").split(",");
const widths = opt("--widths", "1440,390").split(",").map(Number);
const full = flag("--full");
const [base, out, ...paths] = args;
fs.mkdirSync(out, { recursive: true });

const prefixed = (p, l) => (l === "en" ? p : `/${l}${p === "/" ? "" : p}`);
const b = await chromium.launch({ executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" });

for (const p of paths) {
  for (const l of locales) {
    for (const w of widths) {
      const page = await b.newPage({ viewport: { width: w, height: 900 }, colorScheme: w < 700 ? "light" : "dark" });
      const logs = [];
      page.on("console", (m) => { const t = m.text(); if (m.type() === "error" || /i18n/.test(t)) logs.push(`${m.type()}: ${t}`.slice(0, 300)); });
      page.on("pageerror", (e) => logs.push(`pageerror: ${e.message}`.slice(0, 300)));
      const url = base + prefixed(p, l);
      try {
        await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
      } catch (e) { logs.push(`goto: ${e.message.slice(0, 120)}`); }
      await page.waitForTimeout(1800);
      // Scroll through so lazy parts render, then back.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 120)); }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(600);
      const issues = await page.evaluate(() => {
        const out = [];
        const doc = document.documentElement;
        if (doc.scrollWidth > window.innerWidth + 1) out.push(`page overflows horizontally: ${doc.scrollWidth} > ${window.innerWidth}`);
        const sel = "h1,h2,h3,h4,p,a,button,span,li,dt,dd,figcaption,label,td,th";
        for (const el of document.querySelectorAll(sel)) {
          const cs = getComputedStyle(el);
          if (cs.display === "none" || cs.visibility === "hidden" || el.closest("[aria-hidden=true], .sr-only")) continue;
          const r = el.getBoundingClientRect();
          if (!r.width || !r.height) continue;
          // Text wider than its own box (no wrapping room), or sticking out of the viewport.
          if (el.scrollWidth > el.clientWidth + 2 && cs.overflowX !== "auto" && cs.overflowX !== "scroll" && cs.textOverflow !== "ellipsis" && el.clientWidth > 0 && el.children.length === 0)
            out.push(`text overflows ${el.tagName.toLowerCase()}.${(el.className || "").toString().split(" ")[0]}: "${el.textContent.trim().slice(0, 50)}" (${el.scrollWidth}>${el.clientWidth})`);
          if (r.right > window.innerWidth + 1 && !el.closest("[data-scroll-x], .ap-reel, .overflow-x-auto, .ap-strip, [class*=carousel], [class*=embla]") && el.children.length === 0 && cs.position !== "fixed")
            out.push(`past right edge ${el.tagName.toLowerCase()}.${(el.className || "").toString().split(" ")[0]}: "${el.textContent.trim().slice(0, 50)}" (${Math.round(r.right)})`);
        }
        return [...new Set(out)].slice(0, 25);
      });
      const shot = path.join(out, `${(p.replace(/[^a-z0-9]+/gi, "_") || "home").replace(/^_|_$/g, "") || "home"}-${l}-${w}.png`);
      await page.screenshot({ path: shot, fullPage: full });
      console.log(JSON.stringify({ url: prefixed(p, l), w, issues, logs: [...new Set(logs)].slice(0, 15) }));
      await page.close();
    }
  }
}
await b.close();
