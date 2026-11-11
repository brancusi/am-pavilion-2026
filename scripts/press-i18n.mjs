// The English source of the press images' text, for translation: every title,
// date, materials line, caption, credit and alt text in the press list, and the
// home page's two lines and alt text per image, written to
// resources/i18n/en/data-media.json as a source-keyed catalog (each string
// mapped to itself; see docs/i18n.md). The Italian and Armenian files beside
// it (resources/i18n/{it,hy}/data-media.json) are translations kept by hand:
// `npm run i18n:check` lists the strings they lack after a Sync, and the page
// shows the English for those until they're added.
//
// Run by press.mjs after every press list, or on its own:
//
//   node scripts/press-i18n.mjs

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const OUT = 'resources/i18n/en/data-media.json';
const IMAGE_FIELDS = ['title', 'date', 'materials', 'caption', 'caption_short', 'credit', 'alt'];
const HOME_FIELDS = ['title', 'line', 'alt'];

export function writeMediaCatalog(images, home) {
  const out = {};
  const put = (s) => { if (typeof s === 'string' && s.trim()) out[s] = s; };
  for (const i of images) for (const f of IMAGE_FIELDS) put(i[f]);
  for (const i of home) for (const f of HOME_FIELDS) put(i[f]);
  writeFileSync(OUT, JSON.stringify(out, null, 1) + '\n');
  console.log(`Media text: ${Object.keys(out).length} strings in ${OUT}`);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  writeMediaCatalog(JSON.parse(readFileSync('resources/data/press/press.json', 'utf8')).images,
    JSON.parse(readFileSync('resources/data/press/home.json', 'utf8')));
}
