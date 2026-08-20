import Image from "next/image";
import { partnerLogos, partnerRelationshipLabels } from "@/lib/partners";

type PartnerLogosProps = {
  /** Show relationship classification in the accessible name (always) and visually when true. */
  showRelationship?: boolean;
  /** Tighter grid for homepage systems band. */
  dense?: boolean;
};

export function PartnerLogos({
  showRelationship = false,
  dense = false,
}: PartnerLogosProps) {
  return (
    <ul
      className={`m-0 list-none p-0 ${
        dense
          ? "grid grid-cols-3 gap-x-4 gap-y-5 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-3 lg:grid-cols-9"
          : "flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14"
      }`}
    >
      {partnerLogos.map((logo) => {
        const relationshipLabel = partnerRelationshipLabels[logo.relationship];
        const accessibleName = showRelationship
          ? `${logo.name} — ${relationshipLabel}`
          : logo.name;

        return (
          <li
            key={logo.name}
            className={dense ? "flex items-center justify-center" : undefined}
            title={accessibleName}
          >
            {logo.src ? (
              <div
                className={
                  dense
                    ? "relative h-7 w-full max-w-[5.5rem] opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-8 sm:max-w-[6.5rem]"
                    : "relative h-7 w-24 opacity-70 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0 sm:h-8 sm:w-28"
                }
              >
                <Image
                  src={logo.src}
                  alt={accessibleName}
                  fill
                  sizes="120px"
                  className="object-contain"
                />
                {showRelationship && (
                  <span className="sr-only">{relationshipLabel}</span>
                )}
              </div>
            ) : (
              <span className="rounded-control border border-sand bg-white px-3 py-1.5 text-center text-sm font-medium text-pine-dark">
                {logo.name}
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
