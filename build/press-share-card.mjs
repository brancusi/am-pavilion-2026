// The link-preview card of a press release or story pitch: 1200 × 630 JPEG,
// the release's photograph on the left, La Biennale's National Participations
// logo top right and The Studio's mark with the pavilion's name (as in the
// site header) below it, on white, so the card
// shows at once that the mail comes from a national pavilion.
//
// The card is a horizontal support with base < 2 × height, so by the logo guide
// (marketing/identity/biennale_logo/logo-61EIA-GUIDELINES.pdf) the red block is
// h/5 tall, its top h/10 from the top, and the right margin is the width of the
// logo's vertical bar. Measured on build/assets/biennale-61-PartNaz-RGB.png
// (2620 × 2435 px): red block y 397–2434 (2038 px), bar 422 px.
//
//   NAME=tricolore node build/press-share-card.mjs   writes .media-out/share/<name>.jpg
//   then: wrangler r2 object put armenia-pavilion-media/share/<name>.jpg … --remote
//   (a new key for a new card: R2 media is cached for a year)

import { readFileSync, mkdirSync, existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { homedir } from 'node:os';
import { join } from 'node:path';
import YAML from 'yaml';
import { createRequire } from 'node:module';
const { chromium } = createRequire(import.meta.url)('playwright-core');

const NAME = process.env.NAME;
if (!NAME) throw new Error('NAME=<pitch or release name> is required');
const DIR = process.env.PRESS_KIT ||
  join(homedir(), 'Library/CloudStorage/Dropbox-AZStudios/Else Run/projects/the_studio/public_relations/press_kit');
const fm = YAML.parse(readFileSync(join(DIR, `${NAME}.md`), 'utf8').match(/^---\n([\s\S]*?)\n---/)[1]);
const uid = String(fm.pdf_image);
const im = JSON.parse(readFileSync('resources/data/press/press.json', 'utf8')).images.find((i) => i.uid === uid);
if (!im) throw new Error(`pdf_image ${uid} is not in the press library`);

const W = 1200, H = 630, blk = H / 5, s = blk / 2038;
const lw = Math.round(2620 * s), lh = Math.round(2435 * s), top = Math.round(H / 10 - 397 * s), right = Math.round(422 * s);
mkdirSync('.media-out/share', { recursive: true });
const photo = `.media-out/share/${NAME}-photo.jpg`;
if (!existsSync(photo)) execFileSync('curl', ['-sfo', photo, `https://media.armenianpavilion.org/${im.dl.m.key}`]);
const out = `.media-out/share/${NAME}.jpg`;
// The lockup: the black mark and "Armenian Pavilion / Biennale Arte 2026" in IBM Plex Mono.
const lockup = '.media-out/share/lockup.png';
const mark = `data:image/svg+xml;base64,${readFileSync('build/assets/the-studio-mark-ink.svg').toString('base64')}`;
const font = `data:font/woff2;base64,${readFileSync('build/assets/ibm-plex-mono-400-latin.woff2').toString('base64')}`;
const browser = await chromium.launch({ executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
const pg = await browser.newPage({ deviceScaleFactor: 2 });
await pg.setContent(`<style>@font-face{font-family:P;src:url(${font})}body{margin:0}
  #l{display:inline-flex;align-items:center;gap:14px;padding:2px;font:15px/1.3 P,monospace;letter-spacing:.08em;text-transform:uppercase;color:#1b1a17}
  #l img{width:62px;height:62px}#l i{font-style:normal;color:#5a544a}</style>
  <div id="l"><img src="${mark}"><span>Armenian Pavilion<br><i>Biennale Arte 2026</i></span></div>`);
await pg.evaluate(() => document.fonts.ready);
await pg.locator('#l').screenshot({ path: lockup, omitBackground: true });
await browser.close();
execFileSync('magick', ['-size', `${W}x${H}`, 'xc:white',
  '(', photo, '-resize', '790x630^', '-gravity', 'center', '-extent', '790x630', ')', '-gravity', 'northwest', '-geometry', '+0+0', '-composite',
  '(', 'build/assets/biennale-61-PartNaz-RGB.png', '-resize', `${lw}x${lh}`, ')', '-gravity', 'northeast', '-geometry', `+${right}+${top}`, '-composite',
  '(', lockup, '-resize', '50%', ')', '-gravity', 'southwest', '-geometry', '+830+52', '-composite',
  '-quality', '82', '-strip', out]);
console.log(out);
