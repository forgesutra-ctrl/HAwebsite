import assert from "node:assert/strict";
import { describe, it } from "node:test";
import {
  contrastRatio,
  meetsWcagAaLargeText,
  meetsWcagAaNormalText,
  sectionBackgroundsAreDistinct,
  WCAG_AA_LARGE_TEXT,
  WCAG_AA_NORMAL_TEXT,
} from "@/lib/a11y/contrast";
import {
  getAdjacentSectionPairs,
  pageSectionSequences,
  sectionBackgroundTokens,
} from "@/lib/a11y/section-backgrounds";
import {
  REJECTED_SMALL_TEXT_TOKEN_PAIRINGS,
  SMALL_TEXT_TOKEN_PAIRINGS,
} from "@/lib/a11y/small-text-pairings";
import {
  REJECTED_TEXT_PAIRINGS,
  TEXT_PAIRINGS,
} from "@/lib/a11y/text-pairings";
import { colors } from "@/src/styles/tokens";
import { buildRobotsMetadata, shouldAllowSearchIndexing } from "@/lib/seo";

describe("text pairings — WCAG contrast", () => {
  for (const pairing of TEXT_PAIRINGS) {
    const threshold =
      pairing.size === "large" ? WCAG_AA_LARGE_TEXT : WCAG_AA_NORMAL_TEXT;
    const passes =
      pairing.size === "large"
        ? meetsWcagAaLargeText(pairing.foreground, pairing.background)
        : meetsWcagAaNormalText(pairing.foreground, pairing.background);

    it(`${pairing.name} meets WCAG AA (${threshold}:1)`, () => {
      const ratio = contrastRatio(pairing.foreground, pairing.background);
      assert.ok(
        passes,
        `${pairing.name} is ${ratio.toFixed(2)}:1 — below ${threshold}:1`,
      );
    });
  }

  for (const pairing of REJECTED_TEXT_PAIRINGS) {
    it(`${pairing.name} stays below WCAG AA (regression guard)`, () => {
      const passes =
        pairing.size === "large"
          ? meetsWcagAaLargeText(pairing.foreground, pairing.background)
          : meetsWcagAaNormalText(pairing.foreground, pairing.background);
      assert.ok(!passes, `${pairing.name} unexpectedly passes`);
    });
  }
});

describe("small text token contrast (legacy list)", () => {
  for (const pairing of SMALL_TEXT_TOKEN_PAIRINGS) {
    it(`${pairing.name} meets WCAG AA (${WCAG_AA_NORMAL_TEXT}:1)`, () => {
      const ratio = contrastRatio(pairing.foreground, pairing.background);
      assert.ok(
        meetsWcagAaNormalText(pairing.foreground, pairing.background),
        `${pairing.name} is ${ratio.toFixed(2)}:1`,
      );
    });
  }

  for (const pairing of REJECTED_SMALL_TEXT_TOKEN_PAIRINGS) {
    it(`${pairing.name} stays below WCAG AA (regression guard)`, () => {
      assert.ok(
        !meetsWcagAaNormalText(pairing.foreground, pairing.background),
      );
    });
  }
});

describe("section background separation", () => {
  for (const [pageName, sequence] of Object.entries(pageSectionSequences)) {
    for (const { a, b } of getAdjacentSectionPairs(sequence)) {
      const bgA = sectionBackgroundTokens[a.background];
      const bgB = sectionBackgroundTokens[b.background];

      if (bgA === bgB) {
        it(`${pageName}: ${a.id} → ${b.id} same white sections use divider, not luminance`, () => {
          assert.equal(bgA, colors.white);
        });
        continue;
      }

      it(`${pageName}: ${a.id} → ${b.id} backgrounds are ≥15% luminance apart`, () => {
        assert.ok(
          sectionBackgroundsAreDistinct(bgA, bgB),
          `${a.background} → ${b.background} is too close in luminance`,
        );
      });
    }
  }
});

describe("section background policy", () => {
  it("sand section backgrounds are limited to approved homepage bands", () => {
    for (const [pageName, sequence] of Object.entries(pageSectionSequences)) {
      for (const entry of sequence) {
        if (entry.background === "sandAccent") {
          assert.ok(
            pageName === "home" &&
              (entry.id === "offer-ladder" || entry.id === "platforms"),
            `${pageName}/${entry.id} must not use sand as a section background unless approved`,
          );
        }
      }
    }
  });

  it("home page has at most two consecutive sections with the same background", () => {
    const sequence = pageSectionSequences.home;
    let run = 1;
    for (let i = 1; i < sequence.length; i += 1) {
      if (sequence[i].background === sequence[i - 1].background) {
        run += 1;
        assert.ok(
          run <= 2,
          `home: ${sequence[i - 1].id} → ${sequence[i].id} exceeds two consecutive ${sequence[i].background} sections`,
        );
      } else {
        run = 1;
      }
    }
  });

  it("deprecated sand ↔ sand-light section alternation fails separation", () => {
    assert.ok(
      !sectionBackgroundsAreDistinct(colors.sand, colors.sandLight),
      "sand/sandLight must not be used as adjacent section backgrounds",
    );
  });

  it("white ↔ pine-dark passes separation", () => {
    assert.ok(sectionBackgroundsAreDistinct(colors.white, colors.pineDark));
  });
});

describe("token matrix audit", () => {
  const FOREGROUNDS = [
    ["pineDark", colors.pineDark],
    ["pine", colors.pine],
    ["mossDark", colors.mossDark],
    ["moss", colors.moss],
    ["orangeDark", colors.orangeDark],
    ["orange", colors.orange],
    ["white", colors.white],
    ["sandLight", colors.sandLight],
    ["black", colors.black],
  ] as const;

  const BACKGROUNDS = [
    ["white", colors.white],
    ["pineDark", colors.pineDark],
    ["sand", colors.sand],
    ["sandLight", colors.sandLight],
    ["orange", colors.orange],
  ] as const;

  it("documents every token pairing under 4.5:1 (informational)", () => {
    const underAa: string[] = [];
    for (const [fgName, fg] of FOREGROUNDS) {
      for (const [bgName, bg] of BACKGROUNDS) {
        const ratio = contrastRatio(fg, bg);
        if (ratio < WCAG_AA_NORMAL_TEXT) {
          underAa.push(`${ratio.toFixed(2)}:1 — ${fgName} on ${bgName}`);
        }
      }
    }
    // Approved pairings must not appear in this list — enforced by TEXT_PAIRINGS tests above.
    assert.ok(underAa.length > 0, "matrix should list failing combos for audit trail");
  });
});

describe("robots indexing gate", () => {
  const env = { ...process.env };

  function restoreEnv() {
    process.env = { ...env };
  }

  it("preview emits noindex,nofollow", () => {
    process.env.VERCEL_ENV = "preview";
    process.env.NODE_ENV = "production";
    assert.deepEqual(buildRobotsMetadata(false), {
      index: false,
      follow: false,
    });
    restoreEnv();
  });

  it("development emits noindex,nofollow", () => {
    delete process.env.VERCEL_ENV;
    process.env.NODE_ENV = "development";
    assert.deepEqual(buildRobotsMetadata(false), {
      index: false,
      follow: false,
    });
    assert.equal(shouldAllowSearchIndexing(), false);
    restoreEnv();
  });

  it("production emits index,follow", () => {
    process.env.VERCEL_ENV = "production";
    process.env.NODE_ENV = "production";
    assert.deepEqual(buildRobotsMetadata(false), {
      index: true,
      follow: true,
    });
    assert.equal(shouldAllowSearchIndexing(), true);
    restoreEnv();
  });

  it("trustkeeping stays noindex in production", () => {
    process.env.VERCEL_ENV = "production";
    process.env.NODE_ENV = "production";
    assert.deepEqual(buildRobotsMetadata(true), {
      index: false,
      follow: false,
    });
    restoreEnv();
  });
});
