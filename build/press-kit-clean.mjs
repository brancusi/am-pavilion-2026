// What of the press-kit Markdown may be published. The writers mark open points in
// brackets: "[TO CONFIRM]" / "[DA CONFERMARE]" after a claim, or a whole note such as
// "[PLACEHOLDER, NOT CONFIRMED: …]". For the live site and the release PDFs:
//   - facts settled since are listed in CONFIRMED; their bare tag is dropped and the
//     line kept (the opening hours, confirmed by Aram on 31 Oct 2026);
//   - any other line carrying a bare tag is dropped, claim and all;
//   - bracketed notes are cut out, and a paragraph or "## " section left empty goes too.

const CONFIRMED = [/10:00\s*[–-]\s*17:30/];

const TAG = /\s*\[(?:TO CONFIRM|DA CONFERMARE)\]/;
const NOTE = /\s*\[(?:TO CONFIRM|PLACEHOLDER|DA CONFERMARE|SEGNAPOSTO)[^\]]*\]/g;

export function publishable(md) {
  const lines = md.split('\n').flatMap((line) => {
    if (TAG.test(line)) {
      if (!CONFIRMED.some((re) => re.test(line))) return [];
      line = line.replace(new RegExp(TAG.source, 'g'), '');
    }
    const cut = line.replace(NOTE, '');
    if (cut !== line && !cut.replace(/\*\*[^*]*\*\*/g, '').trim()) return [];   // nothing but a label left
    return [cut];
  });
  // Drop "## " headings whose section is now empty.
  const out = [];
  for (let i = 0; i < lines.length; i++) {
    if (/^##\s/.test(lines[i])) {
      let j = i + 1;
      while (j < lines.length && !lines[j].trim()) j++;
      if (j >= lines.length || /^#{1,2}\s/.test(lines[j])) continue;
    }
    out.push(lines[i]);
  }
  return out.join('\n').replace(/\n{3,}/g, '\n\n');
}
