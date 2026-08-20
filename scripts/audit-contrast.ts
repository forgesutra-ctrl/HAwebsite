import {
  contrastRatio,
  meetsWcagAaNormalText,
  WCAG_AA_NORMAL_TEXT,
} from "@/lib/a11y/contrast";
import { TEXT_PAIRINGS } from "@/lib/a11y/text-pairings";
import { colors } from "@/src/styles/tokens";

/** Exhaustive token-on-background matrix for audit reporting. */
const AUDIT_FOREGROUNDS = [
  { name: "pineDark", hex: colors.pineDark },
  { name: "pine", hex: colors.pine },
  { name: "mossDark", hex: colors.mossDark },
  { name: "moss", hex: colors.moss },
  { name: "orangeDark", hex: colors.orangeDark },
  { name: "orange", hex: colors.orange },
  { name: "white", hex: colors.white },
  { name: "sandLight", hex: colors.sandLight },
  { name: "black", hex: colors.black },
] as const;

const AUDIT_BACKGROUNDS = [
  { name: "white", hex: colors.white },
  { name: "pineDark", hex: colors.pineDark },
  { name: "sand", hex: colors.sand },
  { name: "sandLight", hex: colors.sandLight },
  { name: "orange", hex: colors.orange },
] as const;

console.log("=== HostAllies contrast audit ===\n");

console.log("Approved normal-text pairings under 4.5:1:");
let approvedFailures = 0;
for (const pairing of TEXT_PAIRINGS) {
  if (pairing.size !== "normal") continue;
  const ratio = contrastRatio(pairing.foreground, pairing.background);
  if (!meetsWcagAaNormalText(pairing.foreground, pairing.background)) {
    approvedFailures += 1;
    console.log(`  FAIL ${ratio.toFixed(2)}:1 — ${pairing.name}`);
  }
}
if (approvedFailures === 0) {
  console.log("  (none — all approved normal-text pairings pass)\n");
} else {
  console.log("");
}

console.log("Full token matrix — normal text pairings under 4.5:1:");
const matrixFailures: Array<{ ratio: number; label: string }> = [];
for (const fg of AUDIT_FOREGROUNDS) {
  for (const bg of AUDIT_BACKGROUNDS) {
    const ratio = contrastRatio(fg.hex, bg.hex);
    if (ratio < WCAG_AA_NORMAL_TEXT) {
      matrixFailures.push({
        ratio,
        label: `${fg.name} on ${bg.name}`,
      });
    }
  }
}
matrixFailures.sort((a, b) => a.ratio - b.ratio);
for (const { ratio, label } of matrixFailures) {
  console.log(`  ${ratio.toFixed(2)}:1 — ${label}`);
}
if (matrixFailures.length === 0) {
  console.log("  (none in matrix)");
}

console.log("\nAudit complete.");
