import { colors } from "@/src/styles/tokens";

/** Foreground/background pairings used across the site — guarded by contrast tests. */
export type TextPairing = {
  name: string;
  foreground: string;
  background: string;
  /** normal = 4.5:1, large = 3:1 (headings / ≥24px / bold ≥18.66px) */
  size: "normal" | "large";
};

export const TEXT_PAIRINGS: readonly TextPairing[] = [
  // —— White sections (dominant) ——
  {
    name: "body on white",
    foreground: colors.pineDark,
    background: colors.white,
    size: "normal",
  },
  {
    name: "secondary body on white",
    foreground: colors.pine,
    background: colors.white,
    size: "normal",
  },
  {
    name: "muted small on white",
    foreground: colors.mossDark,
    background: colors.white,
    size: "normal",
  },
  {
    name: "eyebrow on white",
    foreground: colors.orangeDark,
    background: colors.white,
    size: "normal",
  },
  {
    name: "brand Ally accent on white",
    foreground: colors.orangeDark,
    background: colors.white,
    size: "large",
  },
  {
    name: "h1 display on white",
    foreground: colors.pineDark,
    background: colors.white,
    size: "large",
  },
  {
    name: "h2 on white",
    foreground: colors.pineDark,
    background: colors.white,
    size: "large",
  },
  {
    name: "link hover target on white",
    foreground: colors.orangeDark,
    background: colors.white,
    size: "normal",
  },
  {
    name: "secondary button text on white",
    foreground: colors.pineDark,
    background: colors.white,
    size: "normal",
  },

  // —— Pine-dark sections (tonal anchors) ——
  {
    name: "heading on pine-dark",
    foreground: colors.white,
    background: colors.pineDark,
    size: "large",
  },
  {
    name: "body on pine-dark",
    foreground: colors.sandLight,
    background: colors.pineDark,
    size: "normal",
  },
  {
    name: "eyebrow on pine-dark",
    foreground: colors.sandLight,
    background: colors.pineDark,
    size: "normal",
  },
  {
    name: "timeline node on pine-dark",
    foreground: colors.orange,
    background: colors.pineDark,
    size: "normal",
  },
  {
    name: "secondary button on pine-dark",
    foreground: colors.white,
    background: colors.pineDark,
    size: "normal",
  },

  // —— Sand accent panels (inset on white — never section-on-section) ——
  {
    name: "body on sand accent panel",
    foreground: colors.pineDark,
    background: colors.sand,
    size: "normal",
  },
  {
    name: "secondary on sand accent panel",
    foreground: colors.pine,
    background: colors.sand,
    size: "normal",
  },
  {
    name: "eyebrow on sand accent panel",
    foreground: colors.orangeDark,
    background: colors.sand,
    size: "normal",
  },
  {
    name: "h2 on sand section",
    foreground: colors.pineDark,
    background: colors.sand,
    size: "large",
  },

  // —— Footer (pine-dark chrome) ——
  {
    name: "footer label on pine-dark",
    foreground: colors.sandLight,
    background: colors.pineDark,
    size: "normal",
  },
  {
    name: "footer link on pine-dark",
    foreground: colors.sandLight,
    background: colors.pineDark,
    size: "normal",
  },
  {
    name: "footer copyright on pine-dark",
    foreground: colors.sandLight,
    background: colors.pineDark,
    size: "normal",
  },

  // —— CTA / controls ——
  {
    name: "primary button label on orange",
    foreground: colors.black,
    background: colors.orange,
    size: "normal",
  },
  {
    name: "reconciling badge on sand inset",
    foreground: colors.orangeDark,
    background: colors.sand,
    size: "normal",
  },
  {
    name: "balanced badge on sand inset",
    foreground: colors.pineDark,
    background: colors.sand,
    size: "normal",
  },
] as const;

/** Pairings that must stay below AA — regression guards. */
export const REJECTED_TEXT_PAIRINGS: readonly TextPairing[] = [
  {
    name: "mossDark on sand (mid-on-mid failure)",
    foreground: colors.mossDark,
    background: colors.sand,
    size: "normal",
  },
  {
    name: "moss on sand-light (deprecated page background)",
    foreground: colors.moss,
    background: colors.sandLight,
    size: "normal",
  },
  {
    name: "white on orange (deprecated CTA label)",
    foreground: colors.white,
    background: colors.orange,
    size: "normal",
  },
] as const;
