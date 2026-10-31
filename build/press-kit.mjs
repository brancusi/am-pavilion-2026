// The press kit on /press and /it/press, from the Markdown files written for it
// (Dropbox `the_studio/public_relations/press_kit/`, one file per section, named
// after its anchor; `<name>.it.md` is the Italian; files starting with "_" are
// notes and are skipped). Writes src/amp/data/press_kit.cljs, so the kit ships
// inside the press page's bundle and nothing on the page moves when it loads.
//
//   npm run press:kit                    the default folder
//   PRESS_KIT=<dir> npm run press:kit    another one
//
// Each section becomes HTML (marked). "[TO CONFIRM]" and "[PLACEHOLDER …]" notes
// are kept and marked, so they stand out on the review build; the page hides
// the whole kit on armenianpavilion.org until `live` below is true.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { homedir } from 'node:os';
import { join } from 'node:path';
import { marked } from 'marked';
import YAML from 'yaml';

const DIR = process.env.PRESS_KIT ||
  join(homedir(), 'Library/CloudStorage/Dropbox-AZStudios/Else Run/projects/the_studio/public_relations/press_kit');
const OUT = 'src/amp/data/press_kit.cljs';
const PDFS = 'build/press-release-pdfs.json';   // written by build/press-release-pdf.mjs

// Shown on armenianpavilion.org only once Aram has the press office's approval.
const LIVE = false;

// Films whose download is held back (streaming is unaffected).
const HELD = ['tesa-41-september'];

// Logo files on R2 (exported 31 Oct 2026 from Dropbox the_studio/marketing/identity;
// new files go under a new folder, keys are cached for a year).
const LOGO_HOST = 'https://media.armenianpavilion.org/press/kit/logos-261031/';
const LOGOS = [
  ['La Biennale di Venezia · National Participations · colour', 'biennale-61-national-participations-RGB', ['png', 'pdf', 'eps'], { cmyk: true }],
  ['La Biennale di Venezia · National Participations · black', 'biennale-61-national-participations-BLACK', ['png', 'pdf', 'eps']],
  ['La Biennale di Venezia · National Participations · negative', 'biennale-61-national-participations-NEG', ['png', 'pdf', 'eps'], { dark: true }],
  ['The Studio', 'the-studio-square', ['png', 'pdf', 'eps']],
  ['Pavilion of the Republic of Armenia · wordmark', 'armenian-pavilion-wordmark', ['png', 'pdf', 'eps']],
  ['Pavilion of the Republic of Armenia · wordmark, expanded', 'armenian-pavilion-wordmark-expanded', ['png', 'pdf', 'eps']],
].map(([name, base, kinds, o = {}]) => ({
  name, preview: `${LOGO_HOST}${base}.png`, dark: !!o.dark,
  files: [...kinds.map((k) => ({ label: k === 'png' ? 'PNG' : k === 'pdf' ? 'PDF (vector)' : 'EPS', url: `${LOGO_HOST}${base}.${k}` })),
          ...(o.cmyk ? [{ label: 'EPS CMYK', url: `${LOGO_HOST}biennale-61-national-participations-CMYK.eps` }] : [])],
}));

const NOTES = ['studio', 'serra', 'tehran', 'downtown', 'accademia', 'armenia'];
const PAGES = ['essentials', 'release', 'facts', 'visit', 'logos'];

marked.use({ gfm: true });

const flag = (html) => html.replace(/\[((?:TO CONFIRM|PLACEHOLDER|DA CONFERMARE|SEGNAPOSTO)[^\]]*)\]/g, '<mark class="ap-kit__flag">$1</mark>');
const md = (s) => flag(marked.parse(s.trim()));
const inline = (s) => flag(marked.parseInline(s.trim()));
// Plain text for copy buttons: Markdown emphasis and links dropped.
const plain = (s) => s.replace(/\*\*([^*]+)\*\*/g, '$1').replace(/\*([^*]+)\*/g, '$1')
  .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/^#+\s*/gm, '').replace(/\n{3,}/g, '\n\n').trim();

function read(name, lang) {
  const f = join(DIR, lang === 'it' ? `${name}.it.md` : `${name}.md`);
  if (!existsSync(f)) return null;
  let src = readFileSync(f, 'utf8').replace(/<!--[\s\S]*?-->/g, '');
  let fm = {};
  const m = src.match(/^---\n([\s\S]*?)\n---\n?/);
  if (m) { fm = YAML.parse(m[1]) || {}; src = src.slice(m[0].length); }
  // A leading "# Heading" is the section's title, unless the frontmatter
  // names one (the release's heading is the pavilion's official name).
  const h = !fm.title && src.match(/^\s*#\s+(.+)\n/);
  if (h) src = src.slice(h[0].length);
  return { fm, title: fm.title || (h && h[1].trim()), body: src.trim() };
}

// "## Heading" blocks: [{head, body}]
const blocks = (s) => s.split(/^##\s+/m).slice(1).map((b) => {
  const i = b.indexOf('\n');
  return { head: (i < 0 ? b : b.slice(0, i)).trim(), body: i < 0 ? '' : b.slice(i + 1).trim() };
});

const date = (d) => (d instanceof Date ? d.toISOString().slice(0, 10) : d ? String(d) : null);
const longDate = (d, l) => (/^\d{4}-\d{2}-\d{2}$/.test(d || '')
  ? new Intl.DateTimeFormat(l === 'it' ? 'it-IT' : 'en-GB', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(d))
  : d);

const parsers = {
  page: (r) => ({ title: r.title, html: md(r.body), text: plain(r.body), date: date(r.fm.date),
                  pdf_title: r.fm.pdf_title || null,
                  earlier: (r.fm.earlier || []).map((e) => ({ title: e.title, date: date(e.date), url: e.url || null })) }),
  note: (r) => ({ title: r.title, images: (r.fm.images || []).map(String), html: md(r.body) }),
  people: (r) => ({ title: r.title, people: blocks(r.body).map(({ head, body }) => {
    const [name, ...role] = head.split(',');
    const [long, short] = body.split(/^\*\*Short:\*\*\s*/m);
    return { name: name.trim(), role: role.join(',').trim(), html: md(long), text: plain(long),
             short: short ? plain(short).replace(/\n/g, ' ') : null };
  }) }),
  chronology: (r) => ({ title: r.title, items: r.body.split('\n').filter((l) => /^-\s/.test(l)).map((l) => {
    const [when, ...rest] = l.slice(2).split(' — ');
    return { when: when.trim(), html: inline(rest.join(' — ')) };
  }) }),
  quotes: (r) => ({ title: r.title, quotes: blocks(r.body).map(({ head, body }) => {
    const text = body.split('\n').filter((l) => l.startsWith('>')).map((l) => l.replace(/^>\s?/, '')).join(' ').trim();
    const source = (body.match(/^Source:\s*(.+)$/m) || [])[1];
    return { speaker: head, text: plain(text), source: source ? inline(source) : null };
  }) }),
  coverage: (r) => ({ title: r.title, items: r.body.split('\n').filter((l) => /^-\s/.test(l)).map((l) => {
    const m = l.slice(2).match(/^(.*?) — "(.*)", (.*?) — (https?:\S+)\s*$/);
    return m ? { outlet: m[1].trim(), title: m[2], date: m[3].trim(), url: m[4] } : { outlet: plain(l.slice(2)) };
  }) }),
  video: (r) => ({ title: r.title, films: blocks(r.body).map(({ head, body }) => {
    const f = { slug: head, held: HELD.includes(head) };
    const rest = [];
    for (const l of body.split('\n')) {
      const kv = !rest.length && l.match(/^(title|date|credit|download):\s*(.*)$/);
      if (kv) f[kv[1]] = kv[2].trim(); else rest.push(l);
    }
    if (f.download === 'hold') f.held = true;
    delete f.download;
    const [line, ...more] = rest.join('\n').trim().split(/\n\s*\n/);
    return { ...f, line: line ? plain(line) : null, html: more.length ? md(more.join('\n\n')) : null };
  }) }),
};

function lang(l) {
  const out = {};
  const put = (name, kind) => { const r = read(name, l); if (r) out[name] = parsers[kind](r); };
  for (const p of PAGES) put(p, 'page');
  for (const n of NOTES) put(n, 'note');
  put('people', 'people'); put('chronology', 'chronology'); put('quotes', 'quotes');
  put('coverage', 'coverage'); put('video', 'video');
  if (out.logos) out.logos.files = LOGOS;
  const pdfs = existsSync(PDFS) ? JSON.parse(readFileSync(PDFS, 'utf8')) : {};
  // The release in both languages, whichever page shows it.
  if (out.release) {
    out.release.date_text = longDate(out.release.date, l);
    out.release.earlier = out.release.earlier.map((e) => ({ ...e, date: longDate(e.date, l) }));
  }
  if (out.release) out.release.pdfs = Object.fromEntries(Object.entries(pdfs)
    .filter(([, v]) => v.date === out.release.date).map(([k, v]) => [k, v.url]));
  return out;
}

// ── EDN out ──
const str = (s) => JSON.stringify(s);   // JSON string escapes are valid in ClojureScript strings
const kw = (k) => ':' + k.replace(/_/g, '-').replace(/[^A-Za-z0-9?-]/g, '-');
function edn(v, ind = '') {
  if (v === null || v === undefined) return 'nil';
  if (typeof v === 'string') return str(v);
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  const next = ind + ' ';
  if (Array.isArray(v)) return v.length ? '[' + v.map((x) => edn(x, next)).join('\n' + next) + ']' : '[]';
  const ks = Object.keys(v);
  return '{' + ks.map((k) => `${kw(k)} ${edn(v[k], next + ' '.repeat(kw(k).length + 1))}`).join('\n' + next) + '}';
}

// The press images as last built (npm run press), so the page lays them out
// before its fresh copy of the list arrives.
const press = JSON.parse(readFileSync('resources/data/press/press.json', 'utf8')).images
  .map(({ uid, file, key, w, h, section, title, date, materials, caption, caption_short, credit, artist }) =>
    ({ uid, file, key, w, h, section, title, date, materials, caption, caption_short, credit, artist }));

const kit = { live: LIVE, en: lang('en'), it: lang('it'), images: press };
writeFileSync(OUT, `(ns amp.data.press-kit
  "The press kit, generated by build/press-kit.mjs from the press_kit Markdown
   files. Don't edit by hand: change the Markdown and run npm run press:kit.")

(def kit
 ${edn(kit, ' ')})
`);
const count = (o) => Object.keys(o).length;
console.log(`Wrote ${OUT}: ${count(kit.en)} English sections, ${count(kit.it)} Italian`);
