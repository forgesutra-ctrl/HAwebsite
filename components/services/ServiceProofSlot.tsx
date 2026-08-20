import { getVerifiedServiceProofs } from "@/src/content/claims-register";

function ProofCard({
  title,
  summary,
  outcome,
}: {
  title: string;
  summary: string;
  outcome: string;
}) {
  return (
    <article className="rounded-card border border-moss bg-white p-7">
      <h3 className="text-h3 text-pine-dark">{title}</h3>
      <p className="mt-3 text-body text-pine">{summary}</p>
      <p className="mt-4 border-t border-sand pt-4 text-sm font-medium text-pine-dark">
        {outcome}
      </p>
    </article>
  );
}

/** Service page proof slot — renders validated client results only. */
export function ServiceProofSlot({
  serviceSlug,
  proofIds,
}: {
  serviceSlug: string;
  proofIds?: readonly string[];
}) {
  const proofs = getVerifiedServiceProofs(serviceSlug, proofIds);
  if (proofs.length === 0) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {proofs.map((proof) => (
        <ProofCard
          key={proof.id}
          title={proof.title}
          summary={proof.summary}
          outcome={proof.outcome}
        />
      ))}
    </div>
  );
}
