import { Disclosure } from "@/components/ui/Disclosure";
import {
  pricingComparisonRows,
  pricingTiers,
  type PricingTierId,
} from "@/lib/content/pricing";

function TierMark({ included }: { included: boolean }) {
  return (
    <span
      className={
        included
          ? "font-medium text-pine-dark"
          : "text-moss-dark"
      }
      aria-label={included ? "Included" : "Not included"}
    >
      {included ? "✓" : "—"}
    </span>
  );
}

function PricingRowDisclosure({
  row,
}: {
  row: (typeof pricingComparisonRows)[number];
}) {
  return (
    <tr className="border-t border-sand">
      <th
        scope="row"
        className="py-4 pr-4 text-left align-top font-body text-body font-medium text-pine-dark"
      >
        {row.feature}
      </th>
      {pricingTiers.map((tier) => (
        <td
          key={tier.id}
          className="px-3 py-4 text-center align-top"
        >
          <TierMark included={row.coverage[tier.id as PricingTierId]} />
        </td>
      ))}
      <td className="py-4 pl-4 align-top">
        <Disclosure id={`pricing-row-${row.id}`} summary={row.summary}>
          <p className="text-body text-pine">{row.detail}</p>
        </Disclosure>
      </td>
    </tr>
  );
}

export function PricingComparisonTable() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[720px] border-collapse text-left">
        <caption className="sr-only">
          HostAllies service tier comparison by capability
        </caption>
        <thead>
          <tr className="border-b-2 border-pine-dark">
            <th scope="col" className="pb-3 pr-4 text-label text-pine">
              Capability
            </th>
            {pricingTiers.map((tier) => (
              <th
                key={tier.id}
                scope="col"
                className="px-3 pb-3 text-center text-label text-pine"
              >
                {tier.label}
              </th>
            ))}
            <th scope="col" className="pb-3 pl-4 text-label text-pine">
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          {pricingComparisonRows.map((row) => (
            <PricingRowDisclosure key={row.id} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
