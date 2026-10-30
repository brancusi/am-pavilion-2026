// Layout-shift sweep: loads every page at desktop and phone width, scrolls to
// the bottom, and prints the page's total layout shift (CLS) with the largest
// shifts and what moved. The site's bar is 0.0000 everywhere.
//
//   npm run qa:cls                              against the dev server (localhost:4200)
//   npm run qa:cls -- https://armenianpavilion.org
//   npm run qa:cls -- <base> /blog/some-post    only the paths given
//
// Prints one line per page and width; pipe through `grep -v 0.0000` to see
// only the pages that shift. Journal posts are read from src/amp/data/journal.cljs.
// Uses the installed Google Chrome (playwright-core downloads no browser).

import { readFileSync } from 'node:fs';
import { chromium } from 'playwright-core';

const [base = 'http://localhost:4200', ...only] = process.argv.slice(2);
const slugs = [...readFileSync('src/amp/data/journal.cljs', 'utf8').matchAll(/:slug\s+"([^"]+)"/g)].map((m) => m[1]);
const pages = only.length ? only : ['/', '/artist', '/armenian-as-well', '/portage', '/visit', '/blog',
  ...slugs.map((s) => `/blog/${s}`), '/press', '/route-from-hotel-gabrielli', '/delivery'];

const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required'],
});

for (const width of [1440, 390]) for (const path of pages) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 } });
  await ctx.addInitScript(() => {
    window.__ls = [];
    new PerformanceObserver((l) => {
      for (const e of l.getEntries()) window.__ls.push({
        v: e.value, t: Math.round(e.startTime), input: e.hadRecentInput,
        src: (e.sources || []).map((s) => String(s.node?.className?.baseVal ?? s.node?.className ?? s.node?.nodeName ?? '?').slice(0, 40)),
      });
    }).observe({ type: 'layout-shift', buffered: true });
  });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message.slice(0, 100)));
  await page.goto(base + path, { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  for (let y = 0; y < height; y += 600) { await page.mouse.wheel(0, 600); await page.waitForTimeout(250); }
  await page.waitForTimeout(800);
  const shifts = await page.evaluate(() => window.__ls);
  const total = shifts.reduce((a, e) => a + e.v, 0);
  const worst = shifts.filter((e) => e.v > 0.001).slice(0, 4)
    .map((e) => `${e.v.toFixed(3)}@${e.t}ms${e.input ? '(input)' : ''}[${e.src.join('|')}]`).join(' ');
  console.log(width, path, total.toFixed(4), worst, errors.join(' | '));
  await ctx.close();
}
await browser.close();
