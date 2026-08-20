import { IconCheck } from "@/components/icons/LineIcons";
import { offerLadder } from "@/src/content/home";

/**
 * Introduces no new copy. Each proof point is a reference into the Trust
 * Accounting tier's already-approved inclusion list in home.ts, so the strip
 * cannot drift from the signed-off wording — if those items change, this
 * changes with them.
 */
const PROOF_POINT_INDEXES = [0, 2, 4];

export function HomeHeroProofStrip() {
  const items = offerLadder.tiers[0]?.items ?? [];
  const points = PROOF_POINT_INDEXES.map((index) => items[index]).filter(
    (point): point is string => Boolean(point),
  );

  if (points.length === 0) return null;

  // Stacked rather than a single row: on one row the strip is only 21px tall,
  // which leaves 144px of dead space beside the 680px photo. Stacked it fills
  // ~80px and brings the column bottom in line with the photo.
  return (
    <ul className="mt-10 flex flex-col gap-2">
      {points.map((point) => (
        <li key={point} className="flex items-center gap-2 text-sm text-pine">
          <IconCheck
            width={16}
            height={16}
            className="shrink-0 text-moss-dark"
          />
          {point}
        </li>
      ))}
    </ul>
  );
}
