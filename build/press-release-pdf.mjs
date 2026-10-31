// The press release as an A4 PDF, English and Italian, from release.md and
// release.it.md in the press_kit folder (see build/press-kit.mjs). La Biennale's
// National Participations logo sits top right as its guide sets it for a
// vertical page: 1/8 of the page height tall, 1/16 from the top, the right
// margin the width of the logo's vertical bar. Printed with Chrome, uploaded to
// R2 under press/kit/ with a random suffix (unlisted until the page links it),
// and recorded in build/press-release-pdfs.json, which press-kit.mjs reads.
//
//   npm run press:pdf        then npm run press:kit (DRY=1 to print without uploading)

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { randomBytes } from 'node:crypto';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { createRequire } from 'node:module';
import { marked } from 'marked';
import YAML from 'yaml';
import { publishable } from './press-kit-clean.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright-core');

const DIR = process.env.PRESS_KIT ||
  join(homedir(), 'Library/CloudStorage/Dropbox-AZStudios/Else Run/projects/the_studio/public_relations/press_kit');
const CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const LOGO = 'https://media.armenianpavilion.org/press/kit/logos-261031/biennale-61-national-participations-RGB.png';
// Chrome's page header can't fetch, so the logo goes in as data.
const logoData = async () => `data:image/png;base64,${Buffer.from(await (await fetch(LOGO)).arrayBuffer()).toString('base64')}`;
const RECORD = 'build/press-release-pdfs.json';
const OUT = '.media-out/press/kit';
const BUCKET = 'armenia-pavilion-media';
const ACCOUNT = 'badb2c07d9cd1effc4c60bc8b6e55826';

// A4 in mm; the logo PNG is 2639 × 2437 and its vertical bar about 0.165 of its width.
const H = 297, LOGO_H = H / 8, LOGO_W = LOGO_H * 2639 / 2437, TOP = H / 16, RIGHT = LOGO_W * 0.165;

function page(lang, body) {
  return `<!doctype html><html lang="${lang}"><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Jost:wght@400;500&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&display=swap">
<style>
  @page { size: A4; margin: ${TOP + LOGO_H + 10}mm 22mm 20mm 22mm; }
  html { font: 10.5pt/1.5 Newsreader, Georgia, serif; color: #1b1a17; }
  body { margin: 0; }
  h1 { font: 500 15pt/1.2 Jost, sans-serif; margin: 0 0 3mm; }
  h2 { font: 500 13pt/1.25 Jost, sans-serif; margin: 0 0 6mm; }
  h3 { font: 500 11pt/1.3 Jost, sans-serif; margin: 7mm 0 2mm; }
  p, ul { margin: 0 0 3.2mm; }
  ul { padding-left: 5mm; }
  em { font-style: italic; }
</style>
<body>
${body}
</body></html>`;
}

function read(lang) {
  const f = join(DIR, lang === 'it' ? 'release.it.md' : 'release.md');
  if (!existsSync(f)) return null;
  let src = publishable(readFileSync(f, 'utf8').replace(/<!--[\s\S]*?-->/g, ''));
  let fm = {};
  const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
  if (m) { fm = YAML.parse(m[1]) || {}; src = src.slice(m[0].length); }
  return { fm, html: marked.parse(src.trim()) };
}

const record = existsSync(RECORD) ? JSON.parse(readFileSync(RECORD, 'utf8')) : {};
mkdirSync(OUT, { recursive: true });
const logo = await logoData();
const header = `<div style="width:100%;height:${TOP + LOGO_H}mm;position:relative;margin:0;-webkit-print-color-adjust:exact">
  <img src="${logo}" style="position:absolute;top:${TOP}mm;right:${RIGHT}mm;height:${LOGO_H}mm"></div>`;
const footer = `<div style="width:100%;padding:0 22mm;font:7pt 'IBM Plex Mono',monospace;color:#5a544a;display:flex;justify-content:space-between">
  <span>armenianpavilion.org/press · pressoffice@armenianpavilion2026.org</span><span><span class="pageNumber"></span> / <span class="totalPages"></span></span></div>`;
const browser = await chromium.launch({ executablePath: CHROME });
for (const lang of ['en', 'it']) {
  const r = read(lang);
  if (!r) continue;
  const date = r.fm.date instanceof Date ? r.fm.date.toISOString().slice(0, 10) : String(r.fm.date || 'undated');
  const name = `armenian-pavilion-press-release-${date}-${lang}`;
  const file = join(OUT, `${name}.pdf`);
  const p = await browser.newPage();
  await p.setContent(page(lang, r.html), { waitUntil: 'networkidle' });
  await p.pdf({ path: file, format: 'A4', printBackground: true, preferCSSPageSize: true,
    displayHeaderFooter: true, headerTemplate: header, footerTemplate: footer });
  await p.close();
  if (process.env.DRY) { console.log(`${lang}: ${file}`); continue; }
  const key = `press/kit/${name}-${randomBytes(4).toString('hex')}.pdf`;
  execFileSync('npx', ['wrangler', 'r2', 'object', 'put', `${BUCKET}/${key}`, '--file', file,
    '--content-type', 'application/pdf', '--cache-control', 'public, max-age=31536000, immutable',
    '--content-disposition', `attachment; filename="${name}.pdf"`, '--remote'],
    { stdio: ['ignore', 'ignore', 'inherit'], env: { ...process.env, CLOUDFLARE_ACCOUNT_ID: ACCOUNT } });
  record[lang] = { date, url: `https://media.armenianpavilion.org/${key}`, file };
  console.log(`${lang}: ${file} → ${record[lang].url}`);
}
await browser.close();
writeFileSync(RECORD, JSON.stringify(record, null, 1) + '\n');
