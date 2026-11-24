// The Funniest Sick-Day Excuse — make.fun entry.
//
// One line, under 200 characters, that someone could send to call in sick:
// a back that quits on the spot, with no notice period and no handover.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Calling in sick — I woke up, stood up, and my lower back quit on the spot. No notice period, no handover, just gone.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });

// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters,
// a single line, not only white space.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry is ${LINE.length} characters, gate is 1-200`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("entry must be a single non-blank line");
}
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote entry.txt (${LINE.length} chars)`);
