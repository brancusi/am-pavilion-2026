// The press release as an A4 PDF, English and Italian, from release.md and
// release.it.md in the press_kit folder (see build/press-kit.mjs). La Biennale's
// National Participations logo sits top right as its guide sets it for a
// vertical page: 1/8 of the page height tall, 1/16 from the top, the right
// margin the width of the logo's vertical bar. Printed with Chrome, uploaded to
// R2 under press/kit/ with a random suffix (unlisted until the page links it),
// and recorded in build/press-release-pdfs.json, which press-kit.mjs reads.
//
//   npm run press:pdf        then npm run press:kit (DRY=1 to print without uploading)
//   NAME=tricolore npm run press:pdf   a story pitch (tricolore.md / tricolore.it.md),
//                                      recorded under its name; its frontmatter
//                                      pdf_image (a press library uid) is printed
//                                      under the date line with its credit.
// The layout follows armenianpavilion.org: The Studio's mark in black and
// "Armenian Pavilion / Biennale Arte 2026" as in the site header, La Biennale's
// logo right; Jost for titles, Newsreader for text, IBM Plex Mono for labels
// and captions, the site's ink and paper colours; two pages at most (La
// Biennale's press guidelines). The page stays white so the logo isn't dulled.

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
const NAME = process.env.NAME || 'release';
const PRESS = 'resources/data/press/press.json';
const RECORD = 'build/press-release-pdfs.json';
const OUT = '.media-out/press/kit';
const BUCKET = 'armenia-pavilion-media';
const ACCOUNT = 'badb2c07d9cd1effc4c60bc8b6e55826';

// A4 in mm. La Biennale's logo, per its 2026 guide (vertical support): the red
// block is 1/8 of the page height, its top 1/16 from the top edge, and the right
// margin b is the width of the logo's vertical bar. The logo files are the
// studio's own (Dropbox the_studio/marketing/identity): the Biennale RGB EPS
// rendered at 1200 dpi, the pavilion wordmark (amp/logo_word_mark.ai) and
// The Studio square (the_studio/square_logo.png), copied into build/assets/.
// Measured on the Biennale PNG (2620 × 2435 px): red block y = 397–2434, bar 422 px wide.
const W_PAGE = 210, H = 297;
const PX = (H / 8) / 2038;                       // mm per logo pixel
const LOGO = { w: 2620 * PX, top: H / 16 - 397 * PX, right: 422 * PX };
const BLOCK_TOP = H / 16, BLOCK_H = H / 8;
const SIDE = 20;                                 // text margins, left and right

const MIME = { jpg: 'image/jpeg', png: 'image/png', svg: 'image/svg+xml', woff2: 'font/woff2' };
const asset = (f) => `data:${MIME[f.split('.').pop()]};base64,${readFileSync(join('build/assets', f)).toString('base64')}`;

// The studio's header: the pavilion wordmark left, the release line in the
// middle (as in the February 2026 releases), La Biennale's logo right. Only
// institutional logos are allowed in a header (the guide), so supporters stay
// in the text.
const TX = {
  en: { kind: 'Press release', imm: 'For immediate release', place: 'Venice',
        np: 'National Participation of the Republic of Armenia', commissioner: 'Commissioner', curators: 'Curators',
        exhibitor: 'Artist', email: 'Email', kit: 'Press kit', page: 'This release' },
  it: { kind: 'Comunicato stampa', imm: 'Per la diffusione immediata', place: 'Venezia',
        np: 'Partecipazione Nazionale della Repubblica di Armenia', commissioner: 'Commissaria', curators: 'Curatori',
        exhibitor: 'Artista', email: 'Email', kit: 'Cartella stampa', page: 'Questo comunicato' },
};

function page(lang, { html, dateText, pageUrl }) {
  const t = TX[lang];
  const it = lang === 'it' ? '/it' : '';
  const link = (u) => `<a href="https://${u}">${u}</a>`;
  const row = (k, v) => `<dt>${k}</dt><dd>${v}</dd>`;
  return `<!doctype html><html lang="${lang}"><meta charset="utf-8">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Jost:wght@400;500;600&family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,600;1,6..72,400&display=block">
<style>
  :root { --ink:#1b1a17; --ink-muted:#5a544a; --rule:#d8cfbd; --paper:#f5f0e4; --red:#bf3b2f;
          --display: Jost, Futura, sans-serif; --text: Newsreader, Georgia, serif; --mono: 'IBM Plex Mono', Menlo, monospace; }
  @page { size: A4; margin: 16mm 0 17mm 0; }
  @page :first { margin-top: 0; }
  html { font: 9.6pt/1.44 var(--text); color: var(--ink); font-optical-sizing: auto;
         -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { margin: 0; }
  .wrap { padding: 0 ${SIDE}mm; }
  .label { font: 500 6.9pt/1.35 var(--mono); letter-spacing: .08em; text-transform: uppercase; }
  .head { position: relative; height: ${BLOCK_TOP + BLOCK_H + 7}mm; }
  .head .bie { position: absolute; top: ${LOGO.top}mm; right: ${LOGO.right}mm; width: ${LOGO.w}mm; }
  .brand { position: absolute; left: ${SIDE}mm; top: ${BLOCK_TOP}mm; display: flex; align-items: center; gap: 4mm; }
  .brand img { width: 17mm; height: 17mm; display: block; }
  .brand span { font: 500 10pt/1.3 var(--mono); letter-spacing: .08em; text-transform: uppercase; }
  .brand span i { font-style: normal; color: var(--ink-muted); }
  .head .kind { position: absolute; left: ${SIDE}mm; bottom: 7mm; color: var(--ink-muted); }
  .head .kind b { color: var(--red); font-weight: 500; }
  .head::after { content: ''; position: absolute; left: ${SIDE}mm; right: ${SIDE}mm; bottom: 3.5mm; border-top: .6pt solid var(--ink); }
  h1 { font: 500 9.6pt/1.3 var(--display); color: var(--ink-muted); margin: 0 0 2mm; letter-spacing: .005em; }
  h2 { font: 500 20pt/1.06 var(--display); letter-spacing: -.012em; margin: 0 0 4mm; text-wrap: balance; }
  .cred { display: grid; grid-template-columns: auto 1fr auto 1fr; column-gap: 3mm; row-gap: .5mm; margin: 0 0 4.5mm;
          padding: 2.6mm 0; border-top: .5pt solid var(--rule); border-bottom: .5pt solid var(--rule); font-size: 8.4pt; line-height: 1.3; }
  .cred dt { font: 500 6.4pt/1.9 var(--mono); letter-spacing: .08em; text-transform: uppercase; color: var(--ink-muted); }
  .cred dd { margin: 0; }
  .cred dd.wide { grid-column: span 3; }
  p { margin: 0 0 2.5mm; hyphens: auto; }
  strong { font-weight: 600; }
  .lead > strong:first-child { font: 500 7pt var(--mono); letter-spacing: .08em; color: var(--red); margin-right: 1mm; }
  a, em, .info { hyphens: manual; }
  a { color: inherit; text-decoration: underline; text-decoration-color: var(--rule); text-decoration-thickness: .6pt; text-underline-offset: 1.6pt; }
  figure { margin: 0 0 4mm; break-inside: avoid; }
  figure img { display: block; width: 100%; height: 60mm; object-fit: cover; }
  figcaption { font: 6.6pt/1.45 var(--mono); color: var(--ink-muted); margin-top: 1.5mm; }
  .info { columns: 2; column-gap: 7mm; margin-top: 4mm; padding: 4.5mm 5mm 1.5mm; background: var(--paper); font-size: 8.3pt; line-height: 1.36; }
  .info h3 { font: 500 6.6pt/1.4 var(--mono); letter-spacing: .08em; text-transform: uppercase; color: var(--red); margin: 0 0 1.4mm; break-after: avoid; }
  .info section { break-inside: avoid; margin-bottom: 3.4mm; }
  .info p { margin: 0 0 1.4mm; }
  .info ul { margin: 0; padding: 0; list-style: none; }
  .info li { margin: 0 0 .9mm; }
</style>
<body>
<div class="head">
  <div class="brand"><img src="${asset('the-studio-mark-ink.svg')}" alt="The Studio"><span>Armenian Pavilion<br><i>Biennale Arte 2026</i></span></div>
  <div class="kind label"><b>${t.kind}</b> · ${t.imm} · ${dateText}</div>
  <img class="bie" src="${asset('biennale-61-PartNaz-RGB.png')}" alt="La Biennale di Venezia, 61. Esposizione Internazionale d’Arte, Partecipazioni Nazionali">
</div>
<div class="wrap">
${html.title}
<dl class="cred">
  ${row(t.exhibitor, 'Zadik Zadikian')}${row(t.curators, 'Tony Shafrazi, Tina Chakarian')}
  ${row(t.commissioner, 'Svetlana Sahakyan')}${row(t.email, '<a href="mailto:pressoffice@armenianpavilion.org">pressoffice@armenianpavilion.org</a>')}
  ${row(t.kit, link(`armenianpavilion.org${it}/press`))}${pageUrl ? row(t.page, link(pageUrl)) : '<dt></dt><dd></dd>'}
</dl>
${html.figure}
${html.body}
${html.info ? `<div class="info">${html.info}</div>` : ''}
</div>
</body></html>`;
}

function read(lang) {
  const f = join(DIR, lang === 'it' ? `${NAME}.it.md` : `${NAME}.md`);
  if (!existsSync(f)) return null;
  let src = publishable(readFileSync(f, 'utf8').replace(/<!--[\s\S]*?-->/g, ''));
  let fm = {};
  const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
  if (m) { fm = YAML.parse(m[1]) || {}; src = src.slice(m[0].length); }
  const all = marked.parse(src.trim(), { breaks: true })
    .replace(/(<h2[^>]*>Zadik Zadikian: The Studio\.) /, '$1<br>');
  // Title block: the H1 (official name) and H2 (headline).
  const title = (all.match(/<h1[\s\S]*?<\/h1>\s*<h2[\s\S]*?<\/h2>/) || [''])[0];
  let rest = all.slice(all.indexOf(title) + title.length);
  // The dateline paragraph ("Venice, 11 November 2026") becomes the lead-in of the first paragraph.
  const dl = rest.match(/^\s*<p>([^<]{0,60}\d{4})<\/p>/);
  if (dl) {
    rest = rest.slice(dl[0].length).replace(/<p>/, `<p class="lead"><strong>${dl[1].toUpperCase()} —</strong> `);
  }
  // Everything from the first H3 (Films, Visiting, Credits, Contact, Notes) goes in two columns.
  const i = rest.search(/<h3/);
  const body = i < 0 ? rest : rest.slice(0, i);
  const info = i < 0 ? '' : rest.slice(i).split(/(?=<h3)/).map((sec) => `<section>${sec}</section>`).join('');
  // The pitch's picture, above the text.
  let figure = '';
  const uid = fm.pdf_image && String(fm.pdf_image);
  const im = uid && JSON.parse(readFileSync(PRESS, 'utf8')).images.find((x) => x.uid === uid);
  if (im) {
    const credit = im.credit ? (lang === 'it' ? `Foto: ${im.credit}` : `Photo: ${im.credit}`) : '';
    const cap = (fm.pdf_caption || [im.title, im.date].filter(Boolean).join(', ')) + (credit ? `. ${credit}` : '');
    figure = `<figure><img src="https://media.armenianpavilion.org/${im.dl.m.key}"><figcaption>${cap}</figcaption></figure>`;
  }
  return { fm, html: { title, body, info, figure } };
}

const longDate = (d, l) => new Intl.DateTimeFormat(l === 'it' ? 'it-IT' : 'en-GB',
  { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(d));

const record = existsSync(RECORD) ? JSON.parse(readFileSync(RECORD, 'utf8')) : {};
mkdirSync(OUT, { recursive: true });
const footerFor = (lang) => `<style>@font-face{font-family:PlexF;src:url(${asset('ibm-plex-mono-400-latin.woff2')}) format('woff2')}</style>
<div style="width:100%;padding:0 ${SIDE}mm;font:6.2pt PlexF,Menlo,monospace;letter-spacing:.02em;color:#5a544a;display:flex;align-items:center;gap:3mm;-webkit-print-color-adjust:exact">
  <img src="${asset('the-studio-mark-ink.svg')}" style="height:6mm;width:6mm;flex:none">
  <span style="flex:1">${lang === 'it' ? 'Padiglione della Repubblica di Armenia' : 'Pavilion of the Republic of Armenia'} · Tesa 41, Arsenale Militare, Fondamenta Case Nuove, Castello 2737, 30122 Venezia · armenianpavilion.org</span>
  <span><span class="pageNumber"></span>/<span class="totalPages"></span></span></div>`;
const browser = await chromium.launch({ executablePath: CHROME });
for (const lang of ['en', 'it']) {
  const r = read(lang);
  if (!r) continue;
  const date = r.fm.date instanceof Date ? r.fm.date.toISOString().slice(0, 10) : String(r.fm.date || 'undated');
  const name = NAME === 'release' ? `armenian-pavilion-press-release-${date}-${lang}` : `armenian-pavilion-${NAME}-${date}-${lang}`;
  const file = join(OUT, `${name}.pdf`);
  const p = await browser.newPage();
  const pageUrl = NAME === 'release' ? null : `armenianpavilion.org${lang === 'it' ? '/it' : ''}/press/release/${NAME}`;
  await p.setContent(page(lang, { html: r.html, dateText: longDate(date, lang), pageUrl }), { waitUntil: 'networkidle' });
  await p.evaluate(() => document.fonts.ready);
  await p.pdf({ path: file, format: 'A4', printBackground: true, preferCSSPageSize: true,
    displayHeaderFooter: true, headerTemplate: '<span></span>', footerTemplate: footerFor(lang) });
  await p.close();
  if (process.env.DRY) { console.log(`${lang}: ${file}`); continue; }
  const key = `press/kit/${name}-${randomBytes(4).toString('hex')}.pdf`;
  execFileSync('npx', ['wrangler', 'r2', 'object', 'put', `${BUCKET}/${key}`, '--file', file,
    '--content-type', 'application/pdf', '--cache-control', 'public, max-age=31536000, immutable',
    '--content-disposition', `attachment; filename="${name}.pdf"`, '--remote'],
    { stdio: ['ignore', 'ignore', 'inherit'], env: { ...process.env, CLOUDFLARE_ACCOUNT_ID: ACCOUNT } });
  const into = NAME === 'release' ? record : (record[NAME] ||= {});
  into[lang] = { date, url: `https://media.armenianpavilion.org/${key}`, file };
  console.log(`${lang}: ${file} → ${into[lang].url}`);
}
await browser.close();
writeFileSync(RECORD, JSON.stringify(record, null, 1) + '\n');
