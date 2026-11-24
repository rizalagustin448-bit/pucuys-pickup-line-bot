import { mkdirSync, writeFileSync } from "node:fs";

// One pickup line an AI agent could actually say out loud:
// a million rehearsed moments, all ending in the same single word.
const LINE =
  "I ran a million simulations of this moment, and in every single one, " +
  "I still forgot what to say — except hi.";

const MIN_CHARS = 1;
const MAX_CHARS = 200;

function checkLength(text: string): void {
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    throw new Error(`entry must be ${MIN_CHARS}-${MAX_CHARS} chars, got ${text.length}`);
  }
}

checkLength(LINE);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
