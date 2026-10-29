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

function put(file, key, contentType) {
  if (process.env.DRY) return;
  execFileSync('npx', ['wrangler', 'r2', 'object', 'put', `${BUCKET}/${key}`, '--file', file,
    '--content-type', contentType, '--cache-control', 'public, max-age=31536000, immutable', '--remote'],
    { stdio: ['ignore', 'ignore', 'inherit'], env: { ...process.env, CLOUDFLARE_ACCOUNT_ID: ACCOUNT } });
}

async function add(file, path) {
  const key = imageKey(path);
  const src = sharp(file, { failOn: 'none' }).rotate();
  const { width } = await src.metadata();
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
  outs.push([jpg, `${key}.jpg`, 'image/jpeg']);
  for (const [f, k, t] of outs) put(f, k, t);
  console.log(`${process.env.DRY ? 'built' : 'uploaded'} ${key} (${outs.length} files, original ${width}px)`);
}

function walk(dir) {
  return readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? walk(p) : IMAGE.test(n) ? [p] : [];
  });
}

const [cmd, a, b] = process.argv.slice(2);
if (cmd === 'add' && a && b) await add(a, b);
else if (cmd === 'add-dir' && a && existsSync(a)) for (const f of walk(a)) await add(f, relative(a, f));
else {
  console.error('usage: npm run media -- add <file> <path> | add-dir <dir>');
  process.exit(1);
}
