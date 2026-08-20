/** WCAG 2.1 relative luminance and contrast helpers for design-token audits. */

export const WCAG_AA_NORMAL_TEXT = 4.5;
export const WCAG_AA_LARGE_TEXT = 3;

/** Minimum absolute relative-luminance delta between adjacent section backgrounds. */
export const MIN_SECTION_LUMINANCE_DELTA = 0.15;

type Rgb = [number, number, number];

function hexToRgb(hex: string): Rgb {
  const normalized = hex.replace("#", "");
  return [
    Number.parseInt(normalized.slice(0, 2), 16),
    Number.parseInt(normalized.slice(2, 4), 16),
    Number.parseInt(normalized.slice(4, 6), 16),
  ];
}

function channelLuminance(value: number): number {
  const channel = value / 255;
  return channel <= 0.03928
    ? channel / 12.92
    : ((channel + 0.055) / 1.055) ** 2.4;
}

export function relativeLuminance(hex: string): number {
  const [r, g, b] = hexToRgb(hex);
  return (
    0.2126 * channelLuminance(r) +
    0.7152 * channelLuminance(g) +
    0.0722 * channelLuminance(b)
  );
}

export function luminanceDelta(backgroundA: string, backgroundB: string): number {
  return Math.abs(
    relativeLuminance(backgroundA) - relativeLuminance(backgroundB),
  );
}

export function sectionBackgroundsAreDistinct(
  backgroundA: string,
  backgroundB: string,
): boolean {
  return luminanceDelta(backgroundA, backgroundB) >= MIN_SECTION_LUMINANCE_DELTA;
}

export function contrastRatio(foreground: string, background: string): number {
  const fg = relativeLuminance(foreground);
  const bg = relativeLuminance(background);
  const lighter = Math.max(fg, bg);
  const darker = Math.min(fg, bg);
  return (lighter + 0.05) / (darker + 0.05);
}

export function meetsWcagAaNormalText(
  foreground: string,
  background: string,
): boolean {
  return contrastRatio(foreground, background) >= WCAG_AA_NORMAL_TEXT;
}

export function meetsWcagAaLargeText(
  foreground: string,
  background: string,
): boolean {
  return contrastRatio(foreground, background) >= WCAG_AA_LARGE_TEXT;
}
