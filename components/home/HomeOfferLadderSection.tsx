import Link from "next/link";
import { Disclosure } from "@/components/ui/Disclosure";
import { TierLineIcon, type TierIconId } from "@/components/icons/LineIcons";
import { Section, SectionHeading } from "@/components/ui/Section";
import { offerLadder } from "@/src/content/home";

const tierIcons: TierIconId[] = ["trust", "bookkeeping", "finance", "addons"];

/**
 * Spine weight ramps 30% -> 100% orange as the ladder descends, so the
 * "everything in the previous tier, plus:" relationship is carried by the
 * connector itself. Indexed by the segment below each tier, so the last tier
 * has no entry.
 */
const spineWeightClass = [
  "bg-orange-dark/30",
  "bg-orange-dark/65",
  "bg-orange-dark",
] as const;

export function HomeOfferLadderSection() {
  const lastIndex = offerLadder.tiers.length - 1;

  return (
    <Section tone="sand">
      <SectionHeading
        eyebrow={offerLadder.eyebrow}
        title={offerLadder.heading}
        intro={offerLadder.intro}
      />

      <ol className="mt-10 space-y-5">
        {offerLadder.tiers.map((tier, index) => (
          <li key={tier.number} className="relative pl-12 lg:pl-20">
            {/* Connector runs from this marker's centre to the next marker's
                centre, so consecutive segments meet and read as one spine. */}
            {index < lastIndex && (
              <span
                className={`absolute left-[21px] top-[2.375rem] bottom-[-3.625rem] w-0.5 ${spineWeightClass[index]}`}
                aria-hidden="true"
              />
            )}

            <span className="absolute left-0 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-orange-dark bg-white font-heading text-label font-semibold text-orange-dark">
              {tier.number}
            </span>

            <div className="card-elevated bg-white p-5 transition-colors hover:border-pine-dark focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-orange-dark sm:p-6">
              <div className="lg:grid lg:grid-cols-[21rem_minmax(0,1fr)] lg:gap-8">
                <div className="flex items-start gap-3">
                  <span
                    className="mt-0.5 hidden h-10 w-10 shrink-0 items-center justify-center rounded-control border border-moss bg-sand-light sm:flex"
                    aria-hidden="true"
                  >
                    <TierLineIcon id={tierIcons[index]} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-h3">{tier.title}</h3>
                    <p className="mt-1.5 text-body font-medium text-pine">
                      {tier.kicker}
                    </p>
                  </div>
                </div>

                <div className="mt-3 lg:mt-0">
                  <p className="text-body text-pine">{tier.body}</p>

                  <Disclosure
                    id={`offer-tier-${tier.number}`}
                    expandLabel={offerLadder.tierExpandLabel}
                    collapseLabel={offerLadder.tierCollapseLabel}
                    className="mt-3 border-t border-moss pt-3"
                    buttonClassName="mt-0"
                  >
                    <ul className="space-y-2">
                      {tier.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-body text-pine-dark"
                        >
                          <span className="text-moss-dark" aria-hidden="true">
                            ✓
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={tier.href}
                      className="relative z-10 mt-5 inline-flex w-fit text-body font-medium text-orange-dark transition-colors hover:text-pine-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-dark"
                    >
                      {offerLadder.ctaLabel}
                    </Link>
                  </Disclosure>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
