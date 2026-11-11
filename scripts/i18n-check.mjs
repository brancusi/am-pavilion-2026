// npm run i18n:check [-- --fix]
// Checks the catalogs in resources/i18n/<locale>/<domain>.json against English:
//   - every locale has every domain file (--fix creates missing ones as {})
//   - keys missing from a translation, or left over in one
//   - ICU messages that don't parse, and translations whose {arguments} or
//     <tags> differ from the English
//   - (t :domain/key) / (ts :domain/key) in src/ naming a key English lacks
//   - long strings left identical to the English (probably untranslated)
// Catalog kinds, by file name: data-*.json is source-keyed (keys are the
// English text, values the translation, see amp.i18n/tx); doc-*.json is a
// structured document (amp.i18n/doc), checked for parity of shape only.
// Exits 1 when anything is wrong, so it can gate a release.
import fs from "node:fs";
import path from "node:path";
import { parse, TYPE } from "@formatjs/icu-messageformat-parser";

const root = path.resolve(path.dirname(new URL(import.meta.url).pathname), "..");
const dir = path.join(root, "resources/i18n");
const locales = ["en", "it", "hy"];
const fix = process.argv.includes("--fix");
const problems = [];
const notes = [];

const read = (l, f) => JSON.parse(fs.readFileSync(path.join(dir, l, f), "utf8"));

function shape(node, at = "") {
  // For doc- catalogs: the paths of every leaf, so arrays and keys line up.
  if (Array.isArray(node)) return node.flatMap((n, i) => shape(n, `${at}[${i}]`));
  if (node && typeof node === "object") return Object.entries(node).flatMap(([k, v]) => shape(v, `${at}.${k}`));
  return [at];
}

function signature(msg) {
  const args = new Set(), tags = new Set();
  const walk = (els) => {
    for (const el of els) {
      if (el.type === TYPE.argument || el.type === TYPE.number || el.type === TYPE.date || el.type === TYPE.time) args.add(el.value);
      if (el.type === TYPE.select || el.type === TYPE.plural) { args.add(el.value); for (const o of Object.values(el.options)) walk(o.value); }
      if (el.type === TYPE.tag) { tags.add(el.value); walk(el.children); }
    }
  };
  walk(parse(msg));
  return { args: [...args].sort().join(","), tags: [...tags].sort().join(",") };
}

const domains = fs.readdirSync(path.join(dir, "en")).filter((f) => f.endsWith(".json")).sort();
const enAll = {};

for (const f of domains) {
  const domain = f.replace(/\.json$/, "");
  let en;
  try { en = read("en", f); } catch (e) { problems.push(`en/${f}: bad JSON: ${e.message}`); continue; }
  enAll[domain] = en;
  const kind = domain.startsWith("doc-") ? "doc" : domain.startsWith("data-") ? "data" : "msg";
  if (kind === "msg") {
    for (const [k, v] of Object.entries(en)) {
      if (typeof v !== "string") { problems.push(`en/${f} ${k}: not a string`); continue; }
      try { signature(v); } catch (e) { problems.push(`en/${f} ${k}: ICU parse error: ${e.message}`); }
    }
  }
  for (const l of locales.slice(1)) {
    const p = path.join(dir, l, f);
    if (!fs.existsSync(p)) {
      if (fix) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, "{}\n"); notes.push(`created ${l}/${f}`); }
      else problems.push(`${l}/${f}: missing file (run with --fix to create it)`);
      continue;
    }
    let tr;
    try { tr = read(l, f); } catch (e) { problems.push(`${l}/${f}: bad JSON: ${e.message}`); continue; }
    if (kind === "doc") {
      const a = new Set(shape(en)), b = new Set(shape(tr));
      const missing = [...a].filter((x) => !b.has(x)), extra = [...b].filter((x) => !a.has(x));
      if (missing.length) problems.push(`${l}/${f}: ${missing.length} fields missing, e.g. ${missing.slice(0, 3).join(" ")}`);
      if (extra.length) notes.push(`${l}/${f}: ${extra.length} fields English lacks, e.g. ${extra.slice(0, 3).join(" ")}`);
      continue;
    }
    if (kind === "data") {
      const missing = Object.keys(en).filter((k) => !(k in tr));
      if (missing.length) problems.push(`${l}/${f}: ${missing.length} untranslated, e.g. "${missing.slice(0, 2).join('", "')}"`);
      continue;
    }
    const missing = Object.keys(en).filter((k) => !(k in tr));
    const extra = Object.keys(tr).filter((k) => !(k in en));
    if (missing.length) problems.push(`${l}/${f}: missing ${missing.length}: ${missing.slice(0, 8).join(", ")}${missing.length > 8 ? " …" : ""}`);
    if (extra.length) problems.push(`${l}/${f}: keys English lacks: ${extra.slice(0, 8).join(", ")}`);
    let same = 0;
    for (const [k, v] of Object.entries(tr)) {
      if (!(k in en)) continue;
      if (typeof v !== "string") { problems.push(`${l}/${f} ${k}: not a string`); continue; }
      let a, b;
      try { b = signature(v); } catch (e) { problems.push(`${l}/${f} ${k}: ICU parse error: ${e.message}`); continue; }
      try { a = signature(en[k]); } catch { continue; }
      if (a.args !== b.args) problems.push(`${l}/${f} ${k}: arguments {${b.args}} differ from English {${a.args}}`);
      if (a.tags !== b.tags) problems.push(`${l}/${f} ${k}: tags <${b.tags}> differ from English <${a.tags}>`);
      if (v === en[k] && v.length > 24 && /[a-z]{4,}\s+[a-z]{3,}\s+[a-z]{3,}/.test(v)) same++;
    }
    if (same) notes.push(`${l}/${f}: ${same} long strings identical to English (check they need no translation)`);
  }
}

// Keys used in the code.
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : [path.join(d, e.name)]);
for (const file of walk(path.join(root, "src")).filter((f) => /\.clj[sc]?$/.test(f) && !f.endsWith("amp/i18n.cljs"))) {
  const src = fs.readFileSync(file, "utf8");
  for (const m of src.matchAll(/\((?:t|ts|i18n\/t|i18n\/ts|i18n\/has\?)\s+:([a-z0-9.-]+)\/([A-Za-z0-9._-]+)/g)) {
    const [, domain, key] = m;
    if (!enAll[domain]) problems.push(`${path.relative(root, file)}: catalog "${domain}" doesn't exist (key ${key})`);
    else if (!(key in enAll[domain])) problems.push(`${path.relative(root, file)}: key ${domain}/${key} not in en/${domain}.json`);
  }
}

for (const n of notes) console.log("note:", n);
for (const p of problems) console.log("PROBLEM:", p);
console.log(`i18n: ${domains.length} catalogs, ${problems.length} problems`);
process.exit(problems.length ? 1 : 0);
