import Image from "next/image";
import { Section, SectionHeading } from "@/components/ui/Section";
import { platforms } from "@/src/content/home";

/**
 * TODO(logo-assets): replacement artwork needed from Corey's package.
 * Drop files at: /public/hostallies/platform-logos/
 *
 *   hostaway.svg   — BROKEN. viewBox is "0 0 250 250" but the path is anchored
 *                    at x≈812 and runs left to x≈260, so the artwork falls
 *                    entirely outside the viewport and renders blank. Needs a
 *                    re-exported SVG with a correct viewBox, or hostaway.png.
 *                    Until then Hostaway renders as a text wordmark tile.
 *   guestypay.png  — byte-identical to guesty.png (1032 bytes), so GuestyPay
 *                    currently shows the Guesty house mark. Needs the
 *                    GuestyPay-specific mark.
 *   stripe.png     — purple tile with a white parallelogram; not Stripe's "S"
 *                    mark or wordmark. Needs the official asset.
 *
 * Every other file in that directory is a correct brand mark and renders fine.
 * Add a filename to PENDING_LOGO_ASSETS to fall back to a text wordmark tile —
 * never substitute a generic icon for a brand we claim experience with.
 */
const PENDING_LOGO_ASSETS = new Set(["hostaway.svg"]);

const tileClassName =
  "group flex h-full min-h-[7.75rem] flex-col items-center justify-center gap-3 bg-white px-4 py-5 text-center transition-colors hover:bg-sand-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-dark";

const wordmarkClassName =
  "font-heading text-sm font-semibold text-pine-dark transition-colors group-hover:text-orange-dark";

export function HomePlatformsSection() {
  return (
    <Section tone="sand">
      <SectionHeading
        eyebrow={platforms.eyebrow}
        title={platforms.heading}
        intro={platforms.intro}
        align="center"
        className="mx-auto"
      />
      <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-card border border-moss bg-moss sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {platforms.items.map((platform) => {
          const assetPending = PENDING_LOGO_ASSETS.has(platform.logo);

          return (
            <li key={platform.name}>
              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className={tileClassName}
              >
                {assetPending ? (
                  <span className={wordmarkClassName}>{platform.name}</span>
                ) : (
                  <>
                    {/* Fixed square optical box — equal visual weight regardless
                        of source resolution or aspect ratio. */}
                    <Image
                      src={`/hostallies/platform-logos/${platform.logo}`}
                      alt={`${platform.name} logo`}
                      width={112}
                      height={112}
                      className="h-14 w-14 object-contain"
                    />
                    <span className={wordmarkClassName} aria-hidden="true">
                      {platform.name}
                    </span>
                  </>
                )}
              </a>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
