import { colors } from "@/src/styles/tokens";

/**
 * @deprecated Import TEXT_PAIRINGS from @/lib/a11y/text-pairings instead.
 * Kept for backward compatibility with existing contrast tests.
 */
export const SMALL_TEXT_TOKEN_PAIRINGS = [
  {
    name: "footer labels on pine-dark",
    foreground: colors.sandLight,
    background: colors.pineDark,
  },
  {
    name: "footer links on pine-dark",
    foreground: colors.sandLight,
    background: colors.pineDark,
  },
  {
    name: "footer copyright on pine-dark",
    foreground: colors.sandLight,
    background: colors.pineDark,
  },
  {
    name: "labels on white",
    foreground: colors.pine,
    background: colors.white,
  },
  {
    name: "labels on cards",
    foreground: colors.pine,
    background: colors.white,
  },
  {
    name: "muted labels on cards",
    foreground: colors.mossDark,
    background: colors.white,
  },
  {
    name: "small body on cards",
    foreground: colors.pineDark,
    background: colors.white,
  },
  {
    name: "eyebrow on white",
    foreground: colors.orangeDark,
    background: colors.white,
  },
  {
    name: "eyebrow on cards",
    foreground: colors.orangeDark,
    background: colors.white,
  },
  {
    name: "labels on sand accent panel",
    foreground: colors.pine,
    background: colors.sand,
  },
  {
    name: "form hint text on white",
    foreground: colors.mossDark,
    background: colors.white,
  },
] as const;

export const REJECTED_SMALL_TEXT_TOKEN_PAIRINGS = [
  {
    name: "mossDark labels on sand (footer failure)",
    foreground: colors.mossDark,
    background: colors.sand,
  },
  {
    name: "moss labels on sand-light (deprecated page bg)",
    foreground: colors.moss,
    background: colors.sandLight,
  },
] as const;
