import {
  resolveStatDisplays,
  type RegisteredClaimId,
} from "@/src/content/claims-register";

type StatBandProps = {
  claimIds: readonly RegisteredClaimId[];
  note?: string;
};

export function StatBand({ claimIds, note }: StatBandProps) {
  const stats = resolveStatDisplays(claimIds);
  if (stats.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-card bg-pine-dark text-white">
      <div className="px-6 py-7 sm:px-9 sm:py-9">
        <p className="text-label text-sand-light">Verified metrics</p>
        <dl className="mt-4">
          {stats.map((s) => (
            <div
              key={s.claimId}
              className="flex items-baseline justify-between gap-6 border-t border-pine py-4 first:border-t-0"
            >
              <dt className="text-body text-white sm:text-base">{s.label}</dt>
              <dd className="tnum text-h3-lg font-medium text-sand-light">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
        {note && <p className="mt-4 text-sm text-sand-light">{note}</p>}
      </div>
    </div>
  );
}
