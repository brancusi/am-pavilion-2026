// The Press page's images, from the Caption Genius project "Pavilion — Press"
// (a copy of the media handoff for Silvia). Every row marked Include is
// uploaded to R2 under press/<uid> (WebP widths, a 2400px JPEG and a
// full-size JPEG for download, see media.mjs) and listed, in the project's
// order, in resources/data/press/press.json, which the page reads, with
// captions.csv beside it.
//
//   npm run press                     the default project below
//   npm run press -- <project.json>   another one, or a Sync job.json
//
// The project's Sync button runs scripts/press-sync.sh, which runs this and
// publishes the list.
//
// Images already uploaded and unchanged (same size and mtime) are skipped.
// Images left out are only dropped from the list; nothing is deleted from R2.
// Set DRY=1 to build without uploading (media.mjs).

import { readFileSync, writeFileSync, mkdirSync, statSync, existsSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { homedir } from 'node:os';
import { add } from './media.mjs';

// A Sync job names the project as it was frozen when Sync was pressed.
const arg = process.argv[2] || `${homedir()}/Documents/Caption Genius/Pavilion — Press.json`;
const job = JSON.parse(readFileSync(arg, 'utf8'));
const PROJECT = job.frozen || arg;
const OUT = 'resources/data/press/press.json';
const CSV = 'resources/data/press/captions.csv';
const SEEN = 'scripts/press-uploads.json';  // what's been uploaded, so a Sync skips it
const JOBS = 6;

// The site's naming, whatever the captions say.
const name = (s) => (s || '')
  .replace(/Armenia Pavilion/g, 'Armenian Pavilion')
  .replace(/(61st )?Venice Biennale(, 2026)?/g, 'Biennale Arte 2026')
  .replace(/Biennale Arte 2026, 2026/g, 'Biennale Arte 2026')
  .trim();

const slug = (s) => name(s).normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
  .replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '').slice(0, 48).replace(/-+$/, '');

// The name a download is saved under (no extension).
const saveAs = (r) => `armenian-pavilion-${slug(r.title || r.file.replace(/\.[^.]+$/, ''))}-${r.uid}`;

const project = JSON.parse(readFileSync(PROJECT, 'utf8'));
const base = dirname(PROJECT);
const where = (p) => resolve(base, p.replace(/^~/, homedir()));
// Never published, whatever the project says: 9461eefa9b's handwriting is
// private (pulled from /press on 31 Oct 2026).
const WITHHELD = new Set(['9461eefa9b']);
const rows = project.images.filter((r) => r.include && !WITHHELD.has(r.uid));
const seen = existsSync(SEEN) ? JSON.parse(readFileSync(SEEN, 'utf8')) : {};
mkdirSync(dirname(OUT), { recursive: true });

let done = 0;
async function upload(r) {
  const file = where(r.path);
  const st = statSync(file);
  const stamp = `${st.size}:${Math.round(st.mtimeMs)}`;
  if (seen[r.uid]?.stamp !== stamp || process.env.FORCE) {
    const { key, width, height } = await add(file, `press/${r.uid}`, { full: true, saveAs: saveAs(r) });
    seen[r.uid] = { key, w: width, h: height, stamp };
    if (!process.env.DRY) writeFileSync(SEEN, JSON.stringify(seen, null, 1) + '\n');
  }
  console.log(`${++done}/${rows.length} ${r.file}`);
}

// The size and CRC-32 of each download as stored in R2, for the Worker's ZIPs
// (cloudflare/site/zip.js writes every header before streaming a byte). Read
// from the local copy media.mjs made when it matches the stored size, else
// fetched once; kept in SEEN with the upload's stamp.
const CRC_TABLE = Array.from({ length: 256 }, (_, n) => {
  let c = n;
  for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
  return c >>> 0;
});
const crc32 = (b) => {
  let c = 0xffffffff;
  for (let i = 0; i < b.length; i++) c = CRC_TABLE[(c ^ b[i]) & 0xff] ^ (c >>> 8);
  return (c ^ 0xffffffff) >>> 0;
};
const HOST = 'https://media.armenianpavilion.org/';
async function measure(key) {
  const head = await fetch(HOST + key, { method: 'HEAD' });
  if (!head.ok) throw new Error(`${key}: ${head.status}`);
  const bytes = Number(head.headers.get('content-length'));
  const local = `.media-out/${key}`;
  const data = existsSync(local) && statSync(local).size === bytes
    ? readFileSync(local)
    : new Uint8Array(await (await fetch(HOST + key)).arrayBuffer());
  if (data.length !== bytes) throw new Error(`${key}: read ${data.length} bytes, stored ${bytes}`);
  return { bytes, crc: crc32(data) };
}
async function downloads(r) {
  const s = seen[r.uid];
  if (s.dl?.stamp === s.stamp) return;
  s.dl = { stamp: s.stamp, jpg: await measure(`${s.key}.jpg`), full: await measure(`${s.key}-full.jpg`) };
  writeFileSync(SEEN, JSON.stringify(seen, null, 1) + '\n');
}

const queue = [...rows];
await Promise.all(Array.from({ length: JOBS }, async () => {
  for (let r; (r = queue.shift());) await upload(r);
}));
if (!process.env.DRY) {
  const q = [...rows];
  await Promise.all(Array.from({ length: JOBS }, async () => {
    for (let r; (r = q.shift());) await downloads(r);
  }));
}

const images = rows.map((r) => ({
  uid: r.uid,
  file: saveAs(r),
  key: seen[r.uid].key,
  w: seen[r.uid].w,
  h: seen[r.uid].h,
  section: r.section || '',
  title: name(r.title),
  artist: name(r.artist),
  date: name(r.date),
  materials: name(r.materials),
  caption: name(r.caption),
  caption_short: name(r.caption_short),
  credit: name(r.credit),
  ...(seen[r.uid].dl ? { dl: { jpg: seen[r.uid].dl.jpg, full: seen[r.uid].dl.full } } : {}),
}));
writeFileSync(OUT, JSON.stringify({ project: project.name, images }, null, 1) + '\n');
const cell = (v) => `"${String(v ?? '').replace(/"/g, '""')}"`;
const cols = ['title', 'date', 'artist', 'materials', 'caption', 'credit', 'section'];
writeFileSync(CSV, [['file', ...cols].join(','),
  ...images.map((i) => [`${i.file}.jpg`, ...cols.map((c) => i[c])].map(cell).join(','))].join('\n') + '\n');
console.log(`Listed ${images.length} images`);
