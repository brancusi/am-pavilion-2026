// Image hosting on Cloudflare R2 (bucket `armenia-pavilion-media`, served at
// https://media.armenianpavilion.org).
//
// Every image is stored as ready-made WebP widths so the site never resizes on
// the fly: `<key>-<width>.webp` for each width in WIDTHS, plus `<key>.jpg` (a
// 2400px JPEG for sharing and downloads). `key` is the image's path, lowercased
// with runs of other characters turned into "-" — the same rule as
// `amp.ui.picture/image-key`, so the site can find a file from its path.
//
//   npm run media -- add <file> <path>      e.g. add ~/Desktop/hall.jpg tesa_41/hall.jpg
//   npm run media -- add-dir <dir>          every image under <dir>, path = relative path
//
// Then reference it in code as "https://media.armenianpavilion.org/<path>".
// Set DRY=1 to write the files to ./.media-out without uploading.

import { execFile, execFileSync } from 'node:child_process';
import { promisify } from 'node:util';
import { mkdirSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname, extname } from 'node:path';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';

export const WIDTHS = [480, 800, 1200, 1600, 2400];
const BUCKET = 'armenia-pavilion-media';
const ACCOUNT = 'badb2c07d9cd1effc4c60bc8b6e55826'; // owns the armenianpavilion.org zone
const OUT = '.media-out';
const IMAGE = /\.(jpe?g|png|tiff?|webp|heic)$/i;
const run = promisify(execFile);

export function imageKey(path) {
  return decodeURIComponent(path)
    .replace(/\.[^./]+$/, '')
    .toLowerCase()
    .split('/')
    .map((seg) => seg.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''))
    .join('/');
}

// `saveAs`: serve the file as a download under that name. Uploads run as
// child processes, so several can go at once, but only two big ones (the API
// answers 502 to a crowd of 200 MB bodies); a failed one is tried again.
const BIG = 50e6;
let bigGoing = 0;
const bigWaiting = [];
async function put(file, key, contentType, saveAs) {
  if (process.env.DRY) return;
  const big = statSync(file).size > BIG;
  if (big) {
    if (bigGoing >= 2) await new Promise((go) => bigWaiting.push(go));
    bigGoing++;
  }
  try {
    for (let tries = 1; ; tries++) {
      try {
        await run('npx', ['wrangler', 'r2', 'object', 'put', `${BUCKET}/${key}`, '--file', file,
          '--content-type', contentType, '--cache-control', 'public, max-age=31536000, immutable',
          ...(saveAs ? ['--content-disposition', `attachment; filename="${saveAs}"`] : []), '--remote'],
          { env: { ...process.env, CLOUDFLARE_ACCOUNT_ID: ACCOUNT }, maxBuffer: 1 << 24 });
        return;
      } catch (e) {
        if (tries >= 4) throw new Error(`${key}: upload failed ${tries} times: ${String(e.stderr || e).split('\n').find((l) => /ERROR/.test(l)) || e}`);
        console.log(`${key}: upload failed, trying again (${tries})`);
        await new Promise((r) => setTimeout(r, 5000 * tries));
      }
    }
  } finally {
    if (big) { bigGoing--; bigWaiting.shift()?.(); }
  }
}

// The image, upright, and its size after rotation.
async function open(file, key) {
  // unlimited: our own files; Photoshop TIFFs carry layer data over libtiff's 50 MB tag limit.
  let src = sharp(file, { failOn: 'none', limitInputPixels: false, unlimited: true }).rotate();
  let meta;
  try {
    meta = await src.metadata();
  } catch {
    // Formats sharp can't read (Photoshop files): let macOS flatten it first.
    const tmp = join(OUT, `${key}.sips.tif`);
    mkdirSync(dirname(tmp), { recursive: true });
    execFileSync('sips', ['-s', 'format', 'tiff', file, '--out', tmp], { stdio: 'ignore' });
    src = sharp(tmp, { failOn: 'none', limitInputPixels: false, unlimited: true }).rotate();
    meta = await src.metadata();
  }
  const swap = (meta.orientation || 1) >= 5;
  return { src, width: swap ? meta.height : meta.width, height: swap ? meta.width : meta.height };
}

// `saveAs`: a file name (no extension); the JPEG then downloads under it.
// Returns the key and the image's size after rotation.
export async function add(file, path, { saveAs } = {}) {
  const key = imageKey(path);
  const { src, width, height } = await open(file, key);
  const outs = [];
  for (const w of WIDTHS) {
    const out = join(OUT, `${key}-${w}.webp`);
    mkdirSync(dirname(out), { recursive: true });
    // Never upscale: narrow originals repeat their own width for the larger names.
    await src.clone().resize({ width: Math.min(w, width), withoutEnlargement: true })
      .webp({ quality: w >= 1600 ? 64 : 72, effort: 5 }).toFile(out);
    outs.push([out, `${key}-${w}.webp`, 'image/webp']);
  }
  const jpg = join(OUT, `${key}.jpg`);
  await src.clone().resize({ width: 2400, withoutEnlargement: true }).flatten({ background: '#ffffff' })
    .jpeg({ quality: 78, mozjpeg: true }).toFile(jpg);
  outs.push([jpg, `${key}.jpg`, 'image/jpeg', saveAs && `${saveAs}.jpg`]);
  for (const [f, k, t, d] of outs) await put(f, k, t, d);
  console.log(`${process.env.DRY ? 'built' : 'uploaded'} ${key} (${outs.length} files, original ${width}px)`);
  return { key, width, height };
}

// Press downloads, as the media handoff had them: sRGB JPEGs by the long edge
// (never upscaled) and the original file exactly as delivered.
export const TIERS = [['s', 'small', 1200, 80], ['m', 'medium', 2400, 85], ['l', 'large', 4000, 90]];
const RAW_TYPES = { tif: 'image/tiff', tiff: 'image/tiff', psd: 'image/vnd.adobe.photoshop',
  png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg' };

// Stores `<key>-s.jpg`, `-m.jpg`, `-l.jpg` and `<key>-raw.<ext>`, downloading as
// `<saveAs>-small.jpg` … and `<saveAs>.<ext>`. Returns, per tier, its key, name,
// pixels and the local file it was made as.
export async function tiers(file, path, saveAs) {
  const key = imageKey(path);
  const { src, width, height } = await open(file, key);
  const out = {};
  for (const [t, word, edge, q] of TIERS) {
    const f = join(OUT, `${key}-${t}.jpg`);
    mkdirSync(dirname(f), { recursive: true });
    const info = await src.clone().resize({ width: edge, height: edge, fit: 'inside', withoutEnlargement: true })
      .flatten({ background: '#ffffff' }).toColourspace('srgb').jpeg({ quality: q, mozjpeg: true }).toFile(f);
    out[t] = { key: `${key}-${t}.jpg`, name: `${saveAs}-${word}.jpg`, w: info.width, h: info.height, local: f };
  }
  const ext = extname(file).slice(1).toLowerCase();
  out.raw = { key: `${key}-raw.${ext}`, name: `${saveAs}.${ext}`, w: width, h: height, ext, local: file };
  for (const [t, o] of Object.entries(out))
    await put(o.local, o.key, t === 'raw' ? RAW_TYPES[ext] || 'application/octet-stream' : 'image/jpeg', o.name);
  return out;
}

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : IMAGE.test(n) ? [p] : [];
  });
}

const [cmd, a, b] = process.argv.slice(2);
if (import.meta.url !== pathToFileURL(process.argv[1]).href) { /* imported */ }
else if (cmd === 'add' && a && b) await add(a, b);
else if (cmd === 'add-dir' && a && existsSync(a)) for (const f of walk(a)) await add(f, relative(a, f));
else {
  console.error('usage: npm run media -- add <file> <path> | add-dir <dir>');
  process.exit(1);
}
