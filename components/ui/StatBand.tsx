import { site } from "@/lib/site";

/**
 * Proof stats as a statement excerpt: left-aligned, ruled, tabular numerals,
 * on the deep green surface. Orange is reserved for the values.
 */
export function StatBand({ note = true }: { note?: boolean }) {
  return (
    <div className="overflow-hidden rounded-lg bg-green text-[color:var(--on-green)]">
      <div className="px-6 py-7 sm:px-9 sm:py-9">
        <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[color:var(--on-green-soft)]">
          Delivery network · summary
        </p>
        <dl className="mt-4">
          {site.stats.map((s) => (
            <div
              key={s.label}
              className="flex items-baseline justify-between gap-6 border-t border-[color:var(--on-green-rule)] py-4 first:border-t-0"
            >
              <dt className="text-[15px] text-[color:var(--on-green)] sm:text-base">
                {s.label}
              </dt>
              <dd className="tnum font-mono text-2xl font-medium text-brand sm:text-[1.7rem]">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
        {note && (
          <p className="mt-4 text-xs text-[color:var(--on-green-soft)]">
            Delivered through our global network with MYND Integrated Solutions.
          </p>
        )}
      </div>
    </div>
  );
}
