/**
 * HostAllies design tokens — single source of truth.
 * Import into tailwind.config.ts; components use Tailwind utilities only.
 */

export const colors = {
  white: "#FFFFFF",
  black: "#000000",
  orange: "#F96D28",
  orangeDark: "#A04715",
  sand: "#EDE4CC",
  sandLight: "#F9F2E4",
  moss: "#91AA94",
  mossDark: "#607364",
  pine: "#475451",
  pineDark: "#1F2A28",
} as const;

/** Semantic aliases — accessibility rules encoded in naming. */
export const semanticColors = {
  page: colors.white,
  surface: colors.white,
  surfaceMuted: colors.sand,
  textPrimary: colors.pineDark,
  textSecondary: colors.pine,
  textMuted: colors.mossDark,
  /** Accessible accent text on white — never use `orange` for body copy. */
  textAccent: colors.orangeDark,
  /** CTA fill only — pair with `ctaText` (black), never white. */
  ctaFill: colors.orange,
  ctaText: colors.black,
  /** White on pine / pineDark surfaces. */
  onPine: colors.white,
  onPineMuted: colors.sandLight,
  /** On moss — white fails contrast; use black or pineDark. */
  onMoss: colors.pineDark,
  border: colors.sand,
  borderStrong: colors.moss,
} as const;

export const fontFamily = {
  heading: [
    "var(--font-lexend)",
    "Inter",
    "Arial",
    "sans-serif",
  ],
  body: [
    "var(--font-roboto)",
    "Inter",
    "Arial",
    "sans-serif",
  ],
} as const;

export const fontWeight = {
  body: "400",
  bodyMedium: "500",
  heading: "600",
  headingBold: "700",
} as const;

export const fontSize = {
  display: ["2.625rem", { lineHeight: "1.14", fontWeight: "700" }], // 42/48 mobile
  "display-lg": ["4rem", { lineHeight: "1.06", fontWeight: "700" }], // 64/68 desktop
  h1: ["2.25rem", { lineHeight: "1.17", fontWeight: "700" }], // 36/42 mobile
  "h1-lg": ["3rem", { lineHeight: "1.125", fontWeight: "700" }], // 48/54 desktop
  h2: ["1.875rem", { lineHeight: "1.2", fontWeight: "600" }], // 30/36 mobile
  "h2-lg": ["2.25rem", { lineHeight: "1.22", fontWeight: "600" }], // 36/44 desktop
  h3: ["1.5rem", { lineHeight: "1.25", fontWeight: "600" }], // 24/30 mobile
  "h3-lg": ["1.75rem", { lineHeight: "1.29", fontWeight: "600" }], // 28/36 desktop
  body: ["1rem", { lineHeight: "1.625", fontWeight: "400" }], // 16/26
  label: ["0.6875rem", { lineHeight: "1.4", fontWeight: "500", letterSpacing: "0.14em" }], // 11px caps
  sm: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }],
} as const;

export const spacing = {
  1: "4px",
  2: "8px",
  3: "12px",
  4: "16px",
  6: "24px",
  8: "32px",
  12: "48px",
  16: "64px",
  24: "96px",
  32: "128px",
} as const;

export const borderRadius = {
  control: "8px",
  card: "12px",
  panel: "20px",
} as const;

/** Default hairline used by AccentPanel, panel-elevated, and card-elevated. */
export const borderWidth = {
  DEFAULT: "1px",
} as const;

export const layout = {
  contentMaxWidth: "1200px",
  bodyMaxWidth: "70ch", // ~65–75 characters at 16px
  gridColumns: { desktop: 12, tablet: 8, mobile: 4 },
} as const;

/** Flat color map for Tailwind utilities (bg-orange, text-pine-dark, …). */
export const tailwindColors = {
  ...colors,
  ...semanticColors,
} as const;

/** Theme extension consumed by tailwind.config.ts */
export const tailwindTheme = {
  colors: tailwindColors,
  fontFamily,
  fontSize,
  spacing,
  borderRadius,
  borderWidth,
  maxWidth: {
    content: layout.contentMaxWidth,
    prose: layout.bodyMaxWidth,
  },
} as const;

/** CSS custom properties for non-Tailwind contexts (inline styles, animations). */
export const cssVariables = {
  "--color-white": colors.white,
  "--color-black": colors.black,
  "--color-orange": colors.orange,
  "--color-orange-dark": colors.orangeDark,
  "--color-sand": colors.sand,
  "--color-sand-light": colors.sandLight,
  "--color-moss": colors.moss,
  "--color-moss-dark": colors.mossDark,
  "--color-pine": colors.pine,
  "--color-pine-dark": colors.pineDark,
  "--radius-control": borderRadius.control,
  "--radius-card": borderRadius.card,
  "--radius-panel": borderRadius.panel,
  "--border-width": borderWidth.DEFAULT,
} as const;

export type DesignColor = keyof typeof colors;
export type SemanticColor = keyof typeof semanticColors;
