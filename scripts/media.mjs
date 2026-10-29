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

import { execFileSync } from 'node:child_process';
import { mkdirSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname, extname } from 'node:path';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';

export const WIDTHS = [480, 800, 1200, 1600, 2400];
const BUCKET = 'armenia-pavilion-media';
const ACCOUNT = 'badb2c07d9cd1effc4c60bc8b6e55826'; // owns the armenianpavilion.org zone
const OUT = '.media-out';
const IMAGE = /\.(jpe?g|png|tiff?|webp|heic)$/i;

export function imageKey(path) {
  return decodeURIComponent(path)
    .replace(/\.[^./]+$/, '')
    .toLowerCase()
    .split('/')
    .map((seg) => seg.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''))
    .join('/');
}

// `saveAs`: serve the file as a download under that name.
function put(file, key, contentType, saveAs) {
  if (process.env.DRY) return;
  execFileSync('npx', ['wrangler', 'r2', 'object', 'put', `${BUCKET}/${key}`, '--file', file,
    '--content-type', contentType, '--cache-control', 'public, max-age=31536000, immutable',
    ...(saveAs ? ['--content-disposition', `attachment; filename="${saveAs}"`] : []), '--remote'],
    { stdio: ['ignore', 'ignore', 'inherit'], env: { ...process.env, CLOUDFLARE_ACCOUNT_ID: ACCOUNT } });
}

// `full`: also store `<key>-full.jpg` at up to 6000px, for press downloads.
// `saveAs`: a file name (no extension); the JPEGs then download under it.
// Returns the key and the image's size after rotation.
export async function add(file, path, { full = false, saveAs } = {}) {
  const key = imageKey(path);
  let src = sharp(file, { failOn: 'none' }).rotate();
  let meta;
  try {
    meta = await src.metadata();
  } catch {
    // Formats sharp can't read (Photoshop files): let macOS flatten it first.
    const tmp = join(OUT, `${key}.sips.tif`);
    mkdirSync(dirname(tmp), { recursive: true });
    execFileSync('sips', ['-s', 'format', 'tiff', file, '--out', tmp], { stdio: 'ignore' });
    src = sharp(tmp, { failOn: 'none' }).rotate();
    meta = await src.metadata();
  }
  const swap = (meta.orientation || 1) >= 5;
  const width = swap ? meta.height : meta.width;
  const height = swap ? meta.width : meta.height;
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
  if (full) {
    const big = join(OUT, `${key}-full.jpg`);
    await src.clone().resize({ width: 6000, height: 6000, fit: 'inside', withoutEnlargement: true })
      .flatten({ background: '#ffffff' }).toColourspace('srgb').jpeg({ quality: 90, mozjpeg: true }).toFile(big);
    outs.push([big, `${key}-full.jpg`, 'image/jpeg', saveAs && `${saveAs}-full.jpg`]);
  }
  for (const [f, k, t, d] of outs) put(f, k, t, d);
  console.log(`${process.env.DRY ? 'built' : 'uploaded'} ${key} (${outs.length} files, original ${width}px)`);
  return { key, width, height };
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
