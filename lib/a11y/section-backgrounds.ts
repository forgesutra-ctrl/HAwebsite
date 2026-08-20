import { colors } from "@/src/styles/tokens";

/** Section-level backgrounds — sand is accent-only, never alternated with sandLight. */
export const sectionBackgroundTokens = {
  white: colors.white,
  pineDark: colors.pineDark,
  /** Occasional inset / band accent — not for adjacent section alternation. */
  sandAccent: colors.sand,
} as const;

export type SectionBackgroundToken = keyof typeof sectionBackgroundTokens;

export type SectionSequenceEntry = {
  id: string;
  background: SectionBackgroundToken;
};

/** Adjacent section backgrounds per route — used to guard luminance separation. */
export const pageSectionSequences: Record<string, readonly SectionSequenceEntry[]> =
  {
    home: [
      { id: "hero", background: "white" },
      { id: "trusted-by", background: "pineDark" },
      { id: "pain", background: "white" },
      { id: "offer-ladder", background: "sandAccent" },
      { id: "why", background: "white" },
      { id: "how-we-work", background: "pineDark" },
      { id: "results", background: "white" },
      { id: "platforms", background: "sandAccent" },
      { id: "your-allies", background: "white" },
      { id: "final-cta", background: "pineDark" },
    ],
    "service-page": [
      { id: "hero", background: "white" },
      { id: "body", background: "white" },
      { id: "proof", background: "white" },
      { id: "faq", background: "white" },
      { id: "cta", background: "pineDark" },
    ],
    "global-chrome": [
      { id: "header", background: "white" },
      { id: "main", background: "white" },
      { id: "footer", background: "pineDark" },
    ],
  } as const;

export function getAdjacentSectionPairs(
  sequence: readonly SectionSequenceEntry[],
): Array<{ a: SectionSequenceEntry; b: SectionSequenceEntry }> {
  const pairs: Array<{ a: SectionSequenceEntry; b: SectionSequenceEntry }> = [];
  for (let i = 0; i < sequence.length - 1; i += 1) {
    pairs.push({ a: sequence[i], b: sequence[i + 1] });
  }
  return pairs;
}
