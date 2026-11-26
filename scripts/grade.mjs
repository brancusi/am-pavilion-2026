#!/usr/bin/env node
// Grade stills to match a set of graded reference photographs.
//
//   node scripts/grade.mjs fit <photo or folder…> --name <look>
//     Measures the references and writes scripts/grade/looks/<look>.json.
//
//   node scripts/grade.mjs apply --look <look> <still…> --out <folder>
//        [--strength 1] [--sheet <file.jpg>]
//     Grades each still toward the look and writes <folder>/<name>.jpg (sRGB,
//     full size, quality 92). --sheet writes a before | after contact sheet.
//
// Stills should come from Black Box in its neutral look, ideally as 16-bit
// TIFF (`blackbox still new … --look neutral --tiff`). Nothing is assumed
// about the source's curve: tone and colour are measured on both sides.
//
// What a look holds, all in OKLab (L lightness, C chroma, h hue):
//   L, C      the average quantile curves of lightness and chroma;
//   tint      the colour of the neutrals (stone, pavement, sky, clothes) in
//             five lightness bands: a split tone;
//   families  the strong colours (red, green, blue): hue, lightness and chroma
//             of their most saturated pixels, which in this work is the flag;
//   vignette  edge minus centre lightness.
// Apply measures the same things on the still and moves each toward the look:
// tone by histogram matching (slope-limited, so fog and noise don't tear),
// the split tone, chroma by matching at a lower share, then each colour
// family onto the look's (a camera's teal flag green onto the photographs'
// green), and the vignette if the look has more.
//
// The look file is plain JSON: after a fit it can be tuned by hand, and the
// values under "trim" (multipliers, 1 = as fitted) are there for that.
//
// Looks: mina-2026-11-18, Mina Biasutti's graded photographs of 18 November
// 2026 (Dropbox the_studio/media/photo/2026/11/18).

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const LOOKS = path.join(HERE, "grade", "looks");
const NQ = 101;                                   // quantiles kept per distribution
const BANDS = [0.1, 0.3, 0.5, 0.7, 0.9];          // lightness band centres for the split tone
const NEUTRAL = 0.07;                             // chroma below which a pixel counts as a neutral
const FAMILIES = {                                // hue windows (degrees, OKLab)
  red: [340, 45],
  green: [105, 215],
  blue: [215, 290],
};
const FAMILY_MIN = 0.003;                         // share of the frame a family needs to count
// Hand trims a look starts with (multipliers, 1 = as measured; toneShift is
// the most the tone curve may move any level of lightness).
const TRIM = { tone: 1, toneShift: 0.12, tint: 0.75, chroma: 0.6, families: 1, vignette: 0.6 };

// ── colour ──────────────────────────────────────────────────────────────
const DEC = new Float32Array(65536);
for (let i = 0; i < 65536; i++) { const c = i / 65535; DEC[i] = c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }
const ENC = new Uint8Array(65536);
for (let i = 0; i < 65536; i++) { const c = i / 65535; ENC[i] = Math.round(255 * (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055)); }

function toLab(lin) {                             // linear RGB (interleaved) → OKLab planes
  const n = lin.length / 3, L = new Float32Array(n), A = new Float32Array(n), B = new Float32Array(n);
  for (let i = 0, j = 0; i < n; i++, j += 3) {
    const r = lin[j], g = lin[j + 1], b = lin[j + 2];
    const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
    const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
    const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
    L[i] = 0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s;
    A[i] = 1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s;
    B[i] = 0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s;
  }
  return { L, A, B, n };
}

function rgbOf(l0, a, b) {
  const l_ = l0 + 0.3963377774 * a + 0.2158037573 * b, m_ = l0 - 0.1055613458 * a - 0.0638541728 * b, s_ = l0 - 0.0894841775 * a - 1.291485548 * b;
  const l = l_ * l_ * l_, m = m_ * m_ * m_, s = s_ * s_ * s_;
  return [4.0767416621 * l - 3.3077115913 * m + 0.2309699292 * s, -1.2684380046 * l + 2.6097574011 * m - 0.3413193965 * s, -0.0041960863 * l - 0.7034186147 * m + 1.707614701 * s];
}
const inGamut = (c) => c[0] >= -1e-3 && c[1] >= -1e-3 && c[2] >= -1e-3 && c[0] <= 1.001 && c[1] <= 1.001 && c[2] <= 1.001;

function toSRGB8(L, A, B) {                       // OKLab → sRGB 8-bit; out-of-gamut colours lose chroma, keep hue and lightness
  const n = L.length, out = Buffer.alloc(n * 3);
  for (let i = 0, j = 0; i < n; i++, j += 3) {
    const l0 = Math.min(1, Math.max(0, L[i]));
    let a = A[i], b = B[i], c = rgbOf(l0, a, b);
    if (!inGamut(c)) {                            // bisect the chroma scale
      let lo = 0, hi = 1;
      for (let k = 0; k < 10; k++) { const mid = (lo + hi) / 2; if (inGamut(rgbOf(l0, a * mid, b * mid))) lo = mid; else hi = mid; }
      a *= lo; b *= lo; c = rgbOf(l0, a, b);
    }
    for (let k = 0; k < 3; k++) out[j + k] = ENC[Math.round(65535 * Math.min(1, Math.max(0, c[k])))];
  }
  return out;
}

// ── reading ─────────────────────────────────────────────────────────────
async function read(file, maxEdge) {
  let img = sharp(file, { limitInputPixels: false }).rotate().removeAlpha();
  if (maxEdge) img = img.resize(maxEdge, maxEdge, { fit: "inside" });
  const { data, info } = await img.toColourspace("rgb16").raw({ depth: "ushort" }).toBuffer({ resolveWithObject: true });
  const u16 = new Uint16Array(data.buffer, data.byteOffset, data.length / 2);
  const lin = new Float32Array(u16.length);
  for (let i = 0; i < u16.length; i++) lin[i] = DEC[u16[i]];
  return { ...toLab(lin), w: info.width, h: info.height };
}

// ── measuring ───────────────────────────────────────────────────────────
const hueOf = (a, b) => (Math.atan2(b, a) * 180 / Math.PI + 360) % 360;
const hueDiff = (x, y) => ((x - y + 540) % 360) - 180;
const inWin = (h, [lo, hi]) => lo <= hi ? h >= lo && h < hi : h >= lo || h < hi;
const bandW = (l, c) => Math.max(0, 1 - Math.abs(l - c) / 0.2);

const median = (xs) => Float32Array.from(xs).sort()[xs.length >> 1];
function quantiles(sorted) {
  return Array.from({ length: NQ }, (_, q) => sorted[Math.min(sorted.length - 1, Math.round((q / (NQ - 1)) * (sorted.length - 1)))]);
}

function measure(im) {
  const { L, A, B, n, w, h } = im, step = Math.max(1, Math.floor(n / 500000));
  const Ls = [], Cs = [], tint = BANDS.map(() => [[], []]), fam = {};
  for (const k in FAMILIES) fam[k] = [];
  const sky = [[], []];
  let inner = 0, ni = 0, outer = 0, no = 0, m = 0;
  for (let i = 0; i < n; i += step, m++) {
    const l = L[i], a = A[i], b = B[i], c = Math.hypot(a, b), hh = hueOf(a, b);
    Ls.push(l); Cs.push(c);
    let family = null;
    for (const k in FAMILIES) if (c > 0.03 && inWin(hh, FAMILIES[k])) family = k;
    if (family && c > 0.04) fam[family].push([c, l, hh]);
    if (c < NEUTRAL && !family) for (let k = 0; k < BANDS.length; k++) if (Math.abs(l - BANDS[k]) < 0.1) { tint[k][0].push(a); tint[k][1].push(b); }
    const x = (i % w) / w - 0.5, y = Math.floor(i / w) / h - 0.5, r = Math.hypot(x, y) / Math.SQRT1_2;
    if (y < -0.35 && l > 0.75 && c < NEUTRAL) { sky[0].push(a); sky[1].push(b); }
    if (r < 0.35) { inner += l; ni++; } else if (r > 0.85) { outer += l; no++; }
  }
  const families = {};
  for (const k in fam) {
    const px = fam[k];
    if (px.length / m < FAMILY_MIN) continue;
    // The family's own colour: its most saturated 8% (the paint, not brick or skin near it).
    px.sort((p, q) => q[0] - p[0]);
    const top = px.slice(0, Math.max(1, Math.floor(px.length * 0.08)));
    let sc = 0, sl = 0, sx = 0, sy = 0;
    for (const [c, l, hh] of top) { sc += c; sl += l; sx += Math.cos(hh * Math.PI / 180); sy += Math.sin(hh * Math.PI / 180); }
    families[k] = { h: hueOf(sx, sy), L: sl / top.length, C: sc / top.length, share: px.length / m };
  }
  return {
    L: quantiles(Float32Array.from(Ls).sort()), C: quantiles(Float32Array.from(Cs).sort()),
    // The median, not the mean: a few navy coats or white panels don't make the tint.
    tint: tint.map(([a, b]) => a.length > 200 ? [median(a), median(b)] : null),
    sky: sky[0].length > 200 ? [median(sky[0]), median(sky[1])] : null,
    families,
    vignette: ni && no ? outer / no - inner / ni : 0,
  };
}

// ── fit ─────────────────────────────────────────────────────────────────
const round = (_, v) => typeof v === "number" ? Math.round(v * 1e4) / 1e4 : v;

async function fit(inputs, name) {
  const files = inputs.flatMap((p) => fs.statSync(p).isDirectory()
    ? fs.readdirSync(p).filter((f) => /\.(jpe?g|png|tiff?)$/i.test(f)).sort().map((f) => path.join(p, f)) : [p]);
  if (!files.length) throw new Error("fit: no images");
  const all = [];
  for (const f of files) { all.push(measure(await read(f, 1200))); process.stdout.write("."); }
  const avg = (get) => get(all[0]).map((_, k) => all.reduce((s, st) => s + get(st)[k], 0) / all.length);
  const tint = BANDS.map((_, k) => {
    const have = all.map((s) => s.tint[k]).filter(Boolean);
    return have.length ? [0, 1].map((j) => have.reduce((s, t) => s + t[j], 0) / have.length) : [0, 0];
  });
  // The brightest band takes the colour of the references' skies (the top of
  // the frame), not of everything bright: white panels and paper are cream in
  // a warm grade, and a still's sky would turn sepia.
  const skies = all.map((s) => s.sky).filter(Boolean);
  if (skies.length >= 3) tint[BANDS.length - 1] = [0, 1].map((j) => skies.reduce((s, t) => s + t[j], 0) / skies.length);
  const families = {};
  for (const k in FAMILIES) {
    const have = all.map((s) => s.families[k]).filter(Boolean);
    if (have.length < Math.max(2, all.length / 10)) continue;
    const wsum = have.reduce((s, f) => s + f.share, 0);
    const sx = have.reduce((s, f) => s + f.share * Math.cos(f.h * Math.PI / 180), 0), sy = have.reduce((s, f) => s + f.share * Math.sin(f.h * Math.PI / 180), 0);
    families[k] = { h: hueOf(sx, sy), L: have.reduce((s, f) => s + f.share * f.L, 0) / wsum, C: have.reduce((s, f) => s + f.share * f.C, 0) / wsum, in: have.length };
  }
  const out = path.join(LOOKS, name + ".json");
  const previous = fs.existsSync(out) ? JSON.parse(fs.readFileSync(out, "utf8")) : null;   // a refit keeps the hand-set trim
  const look = {
    name, made: new Date().toISOString().slice(0, 10),
    from: `${files.length} photographs in …/${path.dirname(files[0]).split(path.sep).slice(-5).join("/")}`,
    trim: { ...TRIM, ...previous?.trim },
    L: avg((s) => s.L), C: avg((s) => s.C), tint, families,
    vignette: all.reduce((s, st) => s + st.vignette, 0) / all.length,
  };
  fs.mkdirSync(LOOKS, { recursive: true });
  fs.writeFileSync(out, JSON.stringify(look, round, 1).replace(/\n\s+(?=[-\d\]])/g, " ") + "\n");
  console.log(`\nlook ${name}: ${files.length} photographs → ${path.relative(process.cwd(), out)}`);
  report(look);
}

function report(st) {
  console.log(`  median L ${st.L[50].toFixed(2)}, 5–95% ${st.L[5].toFixed(2)}–${st.L[95].toFixed(2)}; median C ${st.C[50].toFixed(3)}`);
  console.log(`  neutrals a,b: ${st.tint.map((t) => t ? t.map((v) => v.toFixed(3)).join(",") : "–").join("  ")}`);
  console.log(`  colours: ${Object.entries(st.families).map(([k, f]) => `${k} h${f.h.toFixed(0)} L${f.L.toFixed(2)} C${f.C.toFixed(3)}`).join(", ") || "–"}`);
}

// ── apply ───────────────────────────────────────────────────────────────
function curve(from, to, strength, maxSlope, maxShift = Infinity) {
  // Quantile map from→to, blended by strength, monotone and slope-limited.
  // No level is lifted more than maxShift, nor darkened more than maxShift in
  // the highlights and 2.5× that in the shadows and mids: a bright, foggy
  // scene gets its blacks without its sky going grey.
  const lo = from[0], hi = Math.max(from[NQ - 1], lo + 1e-3), N = 1024, T = new Float32Array(N), dx = (hi - lo) / (N - 1);
  for (let i = 0, k = 0; i < N; i++) {
    const x = lo + dx * i;
    while (k < NQ - 2 && from[k + 1] < x) k++;
    const span = from[k + 1] - from[k], t = span > 1e-6 ? Math.min(1, Math.max(0, (x - from[k]) / span)) : 0;
    const down = maxShift * (1 + 1.5 * smooth((0.85 - x) / 0.35));
    T[i] = x + clamp(strength * (to[k] + t * (to[k + 1] - to[k]) - x), -down, maxShift);
  }
  for (let i = 1; i < N; i++) T[i] = Math.min(T[i - 1] + maxSlope * dx, Math.max(T[i - 1], T[i]));
  return (x) => {
    if (x <= lo) return T[0] + (x - lo); if (x >= hi) return T[N - 1] + (x - hi);
    const f = (x - lo) / dx, i = Math.floor(f); return T[i] + (f - i) * (T[Math.min(N - 1, i + 1)] - T[i]);
  };
}
function tintAt(tint, l) {
  let a = 0, b = 0, w = 0;
  BANDS.forEach((c, k) => { const t = tint[k]; if (!t) return; const x = bandW(l, c) + 1e-4; a += x * t[0]; b += x * t[1]; w += x; });
  return w ? [a / w, b / w] : [0, 0];
}
const clamp = (x, lo, hi) => Math.min(hi, Math.max(lo, x));
const smooth = (x) => { x = clamp(x, 0, 1); return x * x * (3 - 2 * x); };

function plan(st, look, strength) {
  const trim = { ...TRIM, ...look.trim };
  const tone = curve(st.L, look.L, strength * trim.tone, 2.2, trim.toneShift);
  const chroma = curve(st.C, look.C, strength * trim.chroma, 1.6);
  const s = strength * trim.families;
  const moves = Object.entries(st.families).filter(([k]) => look.families[k]).map(([k, f]) => {
    const q = look.families[k], cOut = Math.max(1e-3, chroma(f.C));
    return { k, h: f.h, c: f.C,
      dh: clamp(hueDiff(q.h, f.h), -45, 45) * s,
      dL: clamp(q.L - tone(f.L), -0.12, 0.12) * s,
      cr: 1 + (clamp(q.C / cOut, 0.7, 2) - 1) * s };
  });
  return { trim, tone, chroma, moves };
}

async function apply(files, lookName, outDir, strength, sheet) {
  const lookFile = fs.existsSync(lookName) ? lookName : path.join(LOOKS, lookName + ".json");
  const look = JSON.parse(fs.readFileSync(lookFile, "utf8"));
  fs.mkdirSync(outDir, { recursive: true });
  const pairs = [];
  for (const f of files) {
    const im = await read(f), st = measure(im);
    const { trim, tone, chroma, moves } = plan(st, look, strength);
    const ts = strength * trim.tint;
    const { L, A, B, n, w, h } = im;
    const vig = Math.min(0, look.vignette - st.vignette) * strength * trim.vignette;   // only ever darken the edges
    for (let i = 0; i < n; i++) {
      const l0 = L[i];
      let l = tone(l0);
      const [ia, ib] = tintAt(st.tint, l0), [ra, rb] = tintAt(look.tint, l);
      const c0 = Math.hypot(A[i], B[i]), h0 = hueOf(A[i], B[i]);
      const nt = ts * (1 - smooth((c0 - 0.02) / 0.08));          // the split tone is for the neutrals; strong colours are moved below
      let a = A[i] + (ra - ia) * nt, b = B[i] + (rb - ib) * nt;
      let c = Math.hypot(a, b), hh = hueOf(a, b);
      if (c > 1e-5) {
        let cs = 1;
        for (const m of moves) {
          const d = hueDiff(h0, m.h);
          const g = Math.exp(-(d * d) / (2 * 25 * 25)) * smooth((c0 - 0.35 * m.c) / (0.5 * m.c));   // the colour itself, not greys near it
          if (g < 1e-3) continue;
          hh += m.dh * g; l += m.dL * g; cs *= 1 + (m.cr - 1) * g;
        }
        c = Math.max(0, chroma(c)) * cs;
        a = c * Math.cos(hh * Math.PI / 180); b = c * Math.sin(hh * Math.PI / 180);
      }
      if (vig) { const x = (i % w) / w - 0.5, y = Math.floor(i / w) / h - 0.5, r = Math.hypot(x, y) / Math.SQRT1_2; l += vig * smooth((r - 0.35) / 0.65); }
      L[i] = l; A[i] = a; B[i] = b;
    }
    const base = path.basename(f).replace(/\.[^.]+$/, "");
    const out = path.join(outDir, base + ".jpg");
    await sharp(toSRGB8(L, A, B), { raw: { width: w, height: h, channels: 3 } }).withIccProfile("srgb").jpeg({ quality: 92, mozjpeg: true }).toFile(out);
    console.log(`${base}: median L ${st.L[50].toFixed(2)}→${tone(st.L[50]).toFixed(2)}; ${moves.map((m) => `${m.k} ${m.h.toFixed(0)}°${m.dh >= 0 ? "+" : ""}${m.dh.toFixed(0)} L${m.dL >= 0 ? "+" : ""}${m.dL.toFixed(2)} C×${m.cr.toFixed(2)}`).join(", ") || "no strong colours"}`);
    pairs.push([f, out]);
  }
  if (sheet) {
    const W = 960, tiles = [];
    for (const pair of pairs) for (const f of pair) tiles.push(await sharp(f).resize(W).toColourspace("srgb").jpeg().toBuffer());
    const hs = await Promise.all(tiles.map(async (t) => (await sharp(t).metadata()).height));
    const tops = []; let y = 0;
    for (let i = 0; i < tiles.length; i += 2) { tops.push(y); y += Math.max(hs[i], hs[i + 1]); }
    await sharp({ create: { width: W * 2, height: y, channels: 3, background: "#fff" } })
      .composite(tiles.map((input, i) => ({ input, left: (i % 2) * W, top: tops[i >> 1] }))).jpeg({ quality: 85 }).toFile(sheet);
    console.log(`before | after → ${sheet}`);
  }
}

// ── cli ─────────────────────────────────────────────────────────────────
const [cmd, ...rest] = process.argv.slice(2);
const opt = (k, d) => { const i = rest.indexOf("--" + k); if (i < 0) return d; const v = rest[i + 1]; rest.splice(i, 2); return v; };
if (cmd === "fit") {
  const name = opt("name"); if (!name) throw new Error("fit: --name <look> is required");
  await fit(rest, name);
} else if (cmd === "apply") {
  const look = opt("look"), out = opt("out"), strength = Number(opt("strength", "1")), sheet = opt("sheet");
  if (!look || !out || !rest.length) throw new Error("apply: --look <look> --out <folder> <still…>");
  await apply(rest, look, out, strength, sheet);
} else if (cmd === "measure") {
  for (const f of rest) { console.log(path.basename(f)); report(measure(await read(f, 1600))); }
} else {
  console.log("node scripts/grade.mjs fit <photo or folder…> --name <look>\nnode scripts/grade.mjs apply --look <look> <still…> --out <folder> [--strength 1] [--sheet <file.jpg>]\nnode scripts/grade.mjs measure <image…>");
}
