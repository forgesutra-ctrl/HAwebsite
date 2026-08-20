# HostAllies brand system

Canonical token values live in `/design-tokens.json` and `/src/styles/tokens.ts`. Do not infer or substitute hex values elsewhere.

## Section backgrounds

1. **Dominant:** `#FFFFFF` (white) — default for most page sections.
2. **Tonal anchors:** `#1F2A28` (pine-dark) — credibility strips, process bands, final CTAs, footer.
3. **Warm section bands:** `#EDE4CC` (sand) — approved only for homepage **Offer ladder** and **Platforms** (commercial core + logo grid). Elsewhere, sand remains an inset panel via `AccentPanel`, not a full-width section.

### Separation rules

- No more than **two consecutive sections** may share the same background token.
- Adjacent section **backgrounds** must differ by ≥ 15% relative luminance, **or** both must be white with a visible divider (`border-moss`).
- Do **not** alternate sand ↔ sand-light as section backgrounds (luminance delta ≈ 6%).
- Do **not** place mid-tone text on mid-tone backgrounds (e.g. moss on sand, mossDark on sand).

## Typography contrast

| Text size | Minimum ratio |
|-----------|---------------|
| Body / labels (normal) | 4.5:1 |
| Headings / display (large) | 3:1 |

Approved pairings are listed in `lib/a11y/text-pairings.ts` and enforced by `tests/contrast.test.ts`.

## Brand Ally accent

“Ally” is the brand essence in the hero headline. It must use the `.brand-ally` class — not generic italic.

| Property | Token / value |
|----------|---------------|
| Font | Lexend (heading family) |
| Style | Italic |
| Weight | 600 |
| Color | `#A04715` (orangeDark / textAccent) |
| Decoration | 2px underline, orangeDark, 0.12em offset |

Minimum contrast on white: 3:1 (large text).

## Deprecated patterns

- Sand-light (`#F9F2E4`) as a page or section background
- Sand / sand-light section alternation
- White text on orange CTA fill (use black on orange)
- Moss or moss-dark as body text on sand panels
