// Walks from the pavilion (/walks): routes, base maps and the walk list.
//
//   npm run walks          route every walk in scripts/walks/plan.json
//
// Each walk leaves the Tesa 41 door on the Fondamenta Case Nuove, visits its
// stops in order and comes home. Routes run over the OpenStreetMap footpaths
// of the historic centre (downloaded once from Overpass into .cache/), with
// wide passages (rive, fondamente, salizade, rii terà, campi, or a tagged
// width) cheaper and narrow ones (rami, sotoporteghi, corti) dearer. A street
// one walk has used costs more for every later walk, and the way home avoids
// the way out, so each walk finds new streets where the city allows.
// Times assume 3 km/h carrying the works and 8 minutes at each stop, unless a
// stop gives its own "stay" in minutes (and an optional "detail" line, and
// "arrive", a confirmed arrival time shown instead of the estimate).
//
// Writes:
//   resources/data/walks/routes.json            the lines, in the base map's pixels
//   resources/data/walks/basemap{,-dark}.svg    the streets, drawn as the map
//   src/amp/data/walks.cljs                     the walk list (generated; don't edit)
//   resources/i18n/en/data-walks.json           the plan's text, for translation

import { existsSync, mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const PLAN = 'scripts/walks/plan.json';
const OSM = '.cache/walks-osm.json';
const OUT = 'resources/data/walks';
const CLJS = 'src/amp/data/walks.cljs';
const I18N = 'resources/i18n/en';

const GATE = [12.349929, 45.438023];     // the public door of Tesa 41
const PAVILION = [12.350369, 45.436882];
const KMH = 3, STOP_MIN = 8;

// The map frame: the historic centre, 1600 px wide.
const [LON0, LON1, LAT0, LAT1] = [12.3135, 12.3700, 45.4225, 45.4495];
const W = 1600;
const KX = Math.cos(((LAT0 + LAT1) / 2) * Math.PI / 180) * 111320, KY = 110540;
const SCALE = W / ((LON1 - LON0) * KX);
const H = Math.round((LAT1 - LAT0) * KY * SCALE);
const xy = ([lon, lat]) => [(lon - LON0) * KX * SCALE, (LAT1 - lat) * KY * SCALE];
const metres = (a, b) => {
  const la = ((a[1] + b[1]) / 2) * Math.PI / 180;
  return Math.hypot((a[0] - b[0]) * 111320 * Math.cos(la), (a[1] - b[1]) * 110540);
};

const WIDE = /^(riva|fondamenta|fondamente|salizada|salizzada|rio ter[aà]|strada nova|via |viale|lista|ruga|campo|piazza|piazzetta|molo|zattere)/i;
const WIDE_MAP = /^(riva|fondamenta|fondamente|salizada|salizzada|rio ter[aà]|strada nova|via |viale|lista|ruga|zattere)/i;
const NARROW = /^(ramo|sottoportego|sotoportego|corte|calletta|calesele)/i;

async function osm() {
  if (existsSync(OSM)) return JSON.parse(readFileSync(OSM, 'utf8'));
  const q = `[out:json][timeout:90];way["highway"~"footway|pedestrian|path|steps|living_street|residential|service|unclassified|corridor|platform"](${LAT0},12.305,${LAT1 - 0.001},12.372);out geom tags;`;
  for (let i = 0; i < 6; i++) {
    const r = await fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST', body: new URLSearchParams({ data: q }),
      headers: { 'User-Agent': 'armenianpavilion-walks/1.0', Accept: 'application/json' } });
    if (r.ok) { const t = await r.text(); mkdirSync('.cache', { recursive: true }); writeFileSync(OSM, t); return JSON.parse(t); }
    console.log(`Overpass answered ${r.status}; trying again`);
    await new Promise(go => setTimeout(go, 15000));
  }
  throw new Error('Overpass is unavailable');
}

// ── The network ──────────────────────────────────────────────────────────
const d = await osm();
const graph = new Map(), pos = new Map(), names = new Map();
const nodeKey = g => `${g.lon.toFixed(7)},${g.lat.toFixed(7)}`;
const edgeKey = (a, b) => (a < b ? `${a}|${b}` : `${b}|${a}`);
for (const w of d.elements) {
  const t = w.tags || {}, gs = w.geometry || [];
  if (['private', 'no'].includes(t.access) || ['private', 'no'].includes(t.foot)) continue;
  if (t.highway === 'corridor' || t.indoor === 'yes') continue;
  const name = t.name || '';
  let f = 1;
  if (WIDE.test(name) || t.highway === 'pedestrian' || t.area === 'yes') f = 0.6;
  if (NARROW.test(name)) f = 1.6;
  if (t.covered === 'yes' || ['yes', 'building_passage'].includes(t.tunnel)) f = Math.max(f, 1.6);
  const wd = parseFloat(String(t.width || '').replace(',', '.'));
  if (!isNaN(wd)) f = wd >= 4 ? 0.55 : wd >= 2.5 ? 0.8 : wd < 1.8 ? 1.8 : f;
  if (t.bridge === 'yes') f = 1;
  for (let i = 0; i < gs.length - 1; i++) {
    const a = nodeKey(gs[i]), b = nodeKey(gs[i + 1]);
    const pa = [gs[i].lon, gs[i].lat], pb = [gs[i + 1].lon, gs[i + 1].lat];
    pos.set(a, pa); pos.set(b, pb);
    const L = metres(pa, pb);
    if (!graph.has(a)) graph.set(a, []);
    if (!graph.has(b)) graph.set(b, []);
    graph.get(a).push([b, L, f]); graph.get(b).push([a, L, f]);
    names.set(edgeKey(a, b), name);
  }
}

// the largest connected piece (the islands joined by bridges)
let main = new Set();
const seen = new Set();
for (const s of graph.keys()) {
  if (seen.has(s)) continue;
  const comp = new Set([s]), st = [s];
  while (st.length) for (const [v] of graph.get(st.pop())) if (!comp.has(v)) { comp.add(v); st.push(v); }
  comp.forEach(n => seen.add(n));
  if (comp.size > main.size) main = comp;
}
const snap = p => { let best, bd = Infinity; for (const n of main) { const m = metres(pos.get(n), p); if (m < bd) { bd = m; best = n; } } return best; };

function route(a, b, used, local) {
  const cost = new Map([[a, 0]]), prev = new Map(), heap = [[0, a]];
  const push = x => { heap.push(x); let i = heap.length - 1; while (i) { const p = (i - 1) >> 1; if (heap[p][0] <= heap[i][0]) break; [heap[p], heap[i]] = [heap[i], heap[p]]; i = p; } };
  const pop = () => { const top = heap[0], last = heap.pop(); if (heap.length) { heap[0] = last; let i = 0; for (;;) { const l = 2 * i + 1, r = l + 1; let m = i; if (l < heap.length && heap[l][0] < heap[m][0]) m = l; if (r < heap.length && heap[r][0] < heap[m][0]) m = r; if (m === i) break; [heap[m], heap[i]] = [heap[i], heap[m]]; i = m; } } return top; };
  while (heap.length) {
    const [c, u] = pop();
    if (u === b) break;
    if (c > cost.get(u)) continue;
    for (const [v, L, f] of graph.get(u)) {
      const k = edgeKey(u, v);
      const nc = c + L * f * (local.has(k) ? 4 : used.has(k) ? 2.6 : 1);
      if (nc < (cost.get(v) ?? Infinity)) { cost.set(v, nc); prev.set(v, u); push([nc, v]); }
    }
  }
  const path = [b];
  while (path[path.length - 1] !== a) path.push(prev.get(path[path.length - 1]));
  return path.reverse();
}

// ── The walks ────────────────────────────────────────────────────────────
const plan = JSON.parse(readFileSync(PLAN, 'utf8'));
const used = new Set(), list = [], lines = [];
const r1 = x => Math.round(x * 10) / 10;
plan.forEach((w, wi) => {
  const stops = w.stops.map(s => snap(s.at)), gate = snap(GATE);
  const seq = [gate, ...stops, gate], local = new Set();
  let path = [];
  const stopAt = []; // index in path where each stop is reached, in order
  for (let i = 0; i < seq.length - 1; i++) {
    const p = route(seq[i], seq[i + 1], used, local);
    for (let j = 0; j < p.length - 1; j++) local.add(edgeKey(p[j], p[j + 1]));
    path = path.concat(i ? p.slice(1) : p);
    if (i < stops.length) stopAt.push(path.length - 1);
  }
  const coords = [PAVILION, ...path.map(n => pos.get(n)), PAVILION];
  const cum = [0];
  for (let i = 1; i < coords.length; i++) cum.push(cum[i - 1] + metres(coords[i - 1], coords[i]));
  const L = cum[cum.length - 1];
  let reused = 0, wide = 0;
  const via = [];
  for (let i = 0; i < path.length - 1; i++) {
    const k = edgeKey(path[i], path[i + 1]), m = metres(pos.get(path[i]), pos.get(path[i + 1])), n = names.get(k) || '';
    if (used.has(k)) reused += m;
    if (WIDE.test(n)) wide += m;
    if (n && via[via.length - 1] !== n) via.push(n);
  }
  path.forEach((n, i) => i && used.add(edgeKey(path[i - 1], n)));
  const at = i => cum[stopAt[i] + 1] / L; // +1: coords starts with the pavilion
  const stay = s => s.stay ?? STOP_MIN;
  const minutes = Math.round((L / 1000 / KMH * 60 + w.stops.reduce((a, s) => a + stay(s), 0)) / 5) * 5;
  const px = coords.map(xy);
  lines.push({ id: w.id, d: 'M' + px.map(([x, y]) => `${r1(x)} ${r1(y)}`).join('L'),
    pts: px.map(([x, y]) => [r1(x), r1(y)]),
    stops: stops.map((s, i) => { const [x, y] = xy(pos.get(s)); return [r1(x), r1(y), Math.round(at(i) * 1e4) / 1e4]; }) });
  list.push({ id: w.id, n: wi + 1, date: w.date, works: w.works, depart: w.depart, title: w.title, note: w.note || null,
    km: Math.round(L / 10) / 100, minutes, wide: Math.round(wide / L * 100), fresh: Math.round((1 - reused / L) * 100),
    via, stops: w.stops.map((s, i) => ({ name: s.name, t: lines[wi].stops[i][2], stay: stay(s), detail: s.detail || null, arrive: s.arrive || null })) });
  console.log(`${w.date}  ${w.title.padEnd(38)} ${(L / 1000).toFixed(1)} km  ${minutes} min  wide ${Math.round(wide / L * 100)}%  new ${Math.round((1 - reused / L) * 100)}%`);
});

// the passages each walk is known by: wide ones the other walks mostly don't use
const common = new Map();
list.forEach(w => new Set(w.via).forEach(n => common.set(n, (common.get(n) || 0) + 1)));
list.forEach(w => { w.via = [...new Set(w.via)].filter(n => WIDE.test(n) && !/^Ponte/.test(n) && common.get(n) < 4).slice(0, 6); });

// ── Base maps ────────────────────────────────────────────────────────────
const thin = [], wide = [];
for (const w of d.elements) {
  const g = w.geometry; if (!g) continue;
  const p = g.map(q => xy([q.lon, q.lat]));
  if (p.every(([x, y]) => x < -20 || x > W + 20 || y < -20 || y > H + 20)) continue;
  (WIDE_MAP.test((w.tags || {}).name || '') ? wide : thin).push('M' + p.map(([x, y]) => `${Math.round(x * 2) / 2} ${Math.round(y * 2) / 2}`).join('L'));
}
const basemap = ({ water, land, street, main }) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}">` +
  `<rect width="${W}" height="${H}" fill="${water}"/>` +
  `<path d="${thin.join('') + wide.join('')}" fill="none" stroke="${land}" stroke-width="11" stroke-linecap="round" stroke-linejoin="round"/>` +
  `<path d="${thin.join('')}" fill="none" stroke="${street}" stroke-width=".9" stroke-linecap="round" stroke-linejoin="round"/>` +
  `<path d="${wide.join('')}" fill="none" stroke="${main}" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
mkdirSync(OUT, { recursive: true });
writeFileSync(`${OUT}/basemap.svg`, basemap({ water: '#d9dedb', land: '#f5f0e4', street: '#c3baa8', main: '#9e9484' }));
writeFileSync(`${OUT}/basemap-dark.svg`, basemap({ water: '#0b0d0e', land: '#1f1c18', street: '#3d372f', main: '#5d554a' }));

const [px, py] = xy(PAVILION);
writeFileSync(`${OUT}/routes.json`, JSON.stringify({ w: W, h: H, pavilion: [r1(px), r1(py)], mPerPx: Math.round(1 / SCALE * 1000) / 1000, walks: lines }));

// ── The walk list, for the page and the home teaser ──────────────────────
const edn = v => v === null ? 'nil' : Array.isArray(v) ? `[${v.map(edn).join(' ')}]`
  : typeof v === 'object' ? `{${Object.entries(v).map(([k, x]) => `:${k} ${edn(x)}`).join(' ')}}` : JSON.stringify(v);
writeFileSync(CLJS, `(ns amp.data.walks
  "The walks from the pavilion, in order. Generated by scripts/walks.mjs from
   scripts/walks/plan.json: change the plan and run \`npm run walks\`, never
   this file. :km and :minutes are for the whole loop; :wide and :fresh are
   the % of it on wide passages and on streets no earlier walk used; each
   stop's :t is how far along the loop it falls (0–1) and :stay its minutes
   there. :works is a number, or a range such as 3–6 (a string) while it is unsettled.")

(def walks
  [${list.map(edn).join('\n   ')}])
`);

// ── The plan's text, for translation ─────────────────────────────────────
// A source-keyed catalog (amp.i18n/tx): each English string mapped to itself.
// The Italian and Armenian files (resources/i18n/{it,hy}/data-walks.json) are
// written by hand; `npm run i18n:check` lists any string they lack. The "via"
// passages are Italian street names and stay as they are.
const texts = new Set();
for (const w of plan) {
  [w.title, w.note].forEach(s => s && texts.add(s));
  for (const s of w.stops) [s.name, s.detail].forEach(x => x && texts.add(x));
}
mkdirSync(I18N, { recursive: true });
writeFileSync(`${I18N}/data-walks.json`,
  JSON.stringify(Object.fromEntries([...texts].map(s => [s, s])), null, 2) + '\n');
console.log(`Wrote ${OUT}/routes.json, ${OUT}/basemap.svg, ${OUT}/basemap-dark.svg, ${CLJS} and ${I18N}/data-walks.json`);
