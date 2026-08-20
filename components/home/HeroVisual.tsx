import Image from "next/image";
import { ReconciliationStatement } from "@/components/ledger/ReconciliationStatement";

/**
 * Overlap composition (xl and up): a 476x680 property photo with the owner
 * statement offset onto its lower-left — card left = photo left - 24px,
 * card top = photo top + 100px. That leaves ~70px of photo down the right
 * edge, ~60px below the card and the full top band, so the property reads as
 * context rather than a border.
 *
 * Below xl the two stack (photo above, card below, full width, no overlap).
 * The breakpoint is xl rather than lg because the composition needs 1200px of
 * content box; at lg it overflowed the viewport and pushed the photo off-screen.
 */
export function HeroVisual() {
  return (
    <div
      className="rise w-full min-w-0 xl:w-[476px] xl:overflow-visible"
      style={{ animationDelay: "0.1s" }}
    >
      <div className="relative w-full xl:h-[680px] xl:w-[476px] xl:overflow-visible">
        {/* Stacked below xl: cap the height so a full-width 4:3 photo doesn't
            run to 800px and push the statement below the fold. */}
        <div className="relative aspect-[4/3] max-h-[26rem] min-h-[16rem] w-full overflow-hidden rounded-panel sm:min-h-[18rem] xl:absolute xl:inset-0 xl:aspect-auto xl:max-h-none xl:min-h-0 xl:w-auto">
          <Image
            src="/images/home/cabin-room.jpg"
            alt="Short-term rental property interior shown alongside reconciled owner statement data"
            fill
            priority
            sizes="(min-width: 1280px) 476px, 100vw"
            className="object-cover object-[center_35%]"
          />
          <div className="absolute inset-0 bg-pine/35" aria-hidden="true" />
        </div>

        {/* max-h is the 78%-of-photo ceiling (0.78 * 680 = 530px). */}
        <div className="relative z-10 mt-6 w-full xl:absolute xl:left-[-24px] xl:top-[100px] xl:mt-0 xl:max-h-[530px] xl:w-[430px]">
          <ReconciliationStatement layout="hero" />
        </div>
      </div>

        {/* Caption to the statement card, not the photo: -ml-6 puts it on the
            card's left edge (the card is offset xl:left-[-24px]) and the 10px
            top gap keeps it visually attached rather than floating. */}
        <p className="mt-3 text-label text-pine xl:-ml-6 xl:mt-[10px]">
          Every debit and credit, reconciled to the cent
        </p>
    </div>
  );
}
