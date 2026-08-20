/**
 * Claims register — single source of truth for publishable statistics.
 *
 * Every public stat must be listed here with full provenance. Claims flagged
 * NEEDS VALIDATION in HostAllies Brand Strategy v1.1 Appendix B must NOT appear.
 *
 * Stat UI components import from this module only; raw value/label props are
 * intentionally unsupported.
 */

/** ISO 8601 calendar date (YYYY-MM-DD). */
export type ReviewDate = `${number}-${number}-${number}`;

/**
 * A statistic approved for public publication.
 * All provenance fields are required — partial records cannot compile.
 */
export type VerifiedClaim = {
  readonly id: string;
  readonly statement: string;
  readonly entity: string;
  readonly period: string;
  readonly method: string;
  readonly evidenceLocation: string;
  readonly approver: string;
  readonly reviewDate: ReviewDate;
  /** Short value rendered in stat UI. Must align with `statement`. */
  readonly displayValue: string;
  /** Label rendered beside the value in stat UI. */
  readonly displayLabel: string;
};

/** Compile-time gate — only fully-specified claims enter the register. */
function registerClaim(claim: VerifiedClaim): VerifiedClaim {
  return claim;
}

/**
 * Master register of publishable statistics.
 * Add entries only after validation and approver sign-off.
 */
export const claimsRegister = {
  // Intentionally empty. Previously flagged figures (1,800+, 12M+, $7B+) are excluded.
} as const satisfies Record<string, VerifiedClaim>;

export type RegisteredClaimId = keyof typeof claimsRegister;

export function getVerifiedClaim(id: RegisteredClaimId): VerifiedClaim {
  return claimsRegister[id];
}

export function getVerifiedClaims(
  ids: readonly RegisteredClaimId[],
): VerifiedClaim[] {
  return ids.map((id) => getVerifiedClaim(id));
}

/**
 * Branded display value — only constructible from a VerifiedClaim.
 * Prevents stat components from accepting arbitrary numeric strings.
 */
declare const VerifiedStatValueBrand: unique symbol;
export type VerifiedStatValue = string & {
  readonly [VerifiedStatValueBrand]: true;
};

export type StatDisplay = {
  readonly value: VerifiedStatValue;
  readonly label: string;
  readonly claimId: RegisteredClaimId;
};

export function claimToStatDisplay(claim: VerifiedClaim): StatDisplay {
  return {
    value: claim.displayValue as VerifiedStatValue,
    label: claim.displayLabel,
    claimId: claim.id as RegisteredClaimId,
  };
}

/** Resolve registered claims to render-safe stat rows. Skips unknown IDs. */
export function resolveStatDisplays(
  ids: readonly RegisteredClaimId[],
): StatDisplay[] {
  if (ids.length === 0) return [];
  return getVerifiedClaims(ids).map(claimToStatDisplay);
}

/** Re-export for adding future claims with compile-time validation. */
export { registerClaim };

/** ISO 8601 calendar date (YYYY-MM-DD). */
export type CaseStudyReviewDate = ReviewDate;

/**
 * A client result approved for public publication on the homepage.
 * All provenance fields are required — partial records cannot compile.
 */
export type VerifiedCaseStudy = {
  readonly id: string;
  readonly title: string;
  readonly summary: string;
  /** Public descriptor attribution — no client names or personal names. */
  readonly attribution: string;
  readonly entity: string;
  readonly period: string;
  readonly method: string;
  readonly evidenceLocation: string;
  readonly approver: string;
  readonly reviewDate: CaseStudyReviewDate;
};

function registerCaseStudy(study: VerifiedCaseStudy): VerifiedCaseStudy {
  return study;
}

/** Case studies approved for the homepage results section. */
export const caseStudiesRegister = {
  accountingTimeReduction: registerCaseStudy({
    id: "accounting-time-reduction",
    title: "75% less time on accounting",
    summary:
      "HostAllies took over daily bookkeeping and reconciliation so the operations team could redirect most of their former accounting hours to portfolio growth and owner service.",
    attribution: "60-unit operator on Guesty",
    entity: "SuperStay (client name not approved for publication)",
    period: "Measured after onboarding vs. prior quarterly average",
    method:
      "Client-reported accounting hours; validated by Vishaal Jayaswal on 2026-08-20 verification call",
    evidenceLocation:
      "Internal client outcome record — SuperStay; verbal confirmation Vishaal Jayaswal 2026-08-20",
    approver: "Vishaal Jayaswal",
    reviewDate: "2026-08-20",
  }),
  trustCorrection: registerCaseStudy({
    id: "trust-correction",
    title: "$50K trust correction identified",
    summary:
      "During onboarding reconciliation, HostAllies surfaced a material trust balance discrepancy — researched, documented, and corrected before it affected owner disbursements.",
    attribution: "51-unit operator on Hostaway",
    entity: "Aggieland (client name not approved for publication)",
    period: "Identified during trust accounting onboarding",
    method:
      "3-way trust reconciliation review; validated by Vishaal Jayaswal on 2026-08-20 verification call",
    evidenceLocation:
      "Internal client outcome record — Aggieland; verbal confirmation Vishaal Jayaswal 2026-08-20",
    approver: "Vishaal Jayaswal",
    reviewDate: "2026-08-20",
  }),
  propertyLevelVisibility: registerCaseStudy({
    id: "property-level-visibility",
    title: "Property-level visibility across 186 units",
    summary:
      "Management reporting now breaks down revenue, fees, and margin by property — giving leadership a clear portfolio view instead of a single consolidated P&L.",
    attribution: "186-unit operator on Guesty",
    entity: "Cohova (client name not approved for publication)",
    period: "After management reporting rollout",
    method:
      "Portfolio reporting scope review; validated by Vishaal Jayaswal on 2026-08-20 verification call",
    evidenceLocation:
      "Internal client outcome record — Cohova; verbal confirmation Vishaal Jayaswal 2026-08-20",
    approver: "Vishaal Jayaswal",
    reviewDate: "2026-08-20",
  }),
} as const satisfies Record<string, VerifiedCaseStudy>;

export type RegisteredCaseStudyId = keyof typeof caseStudiesRegister;

export function getVerifiedCaseStudies(): VerifiedCaseStudy[] {
  return Object.values(caseStudiesRegister);
}

export { registerCaseStudy };

/**
 * Service-page proof slot — validated client results tied to a service slug.
 */
export type VerifiedServiceProof = {
  readonly id: string;
  readonly serviceSlug: string;
  readonly title: string;
  readonly summary: string;
  readonly outcome: string;
  readonly entity: string;
  readonly period: string;
  readonly method: string;
  readonly evidenceLocation: string;
  readonly approver: string;
  readonly reviewDate: CaseStudyReviewDate;
};

function registerServiceProof(proof: VerifiedServiceProof): VerifiedServiceProof {
  return proof;
}

/** Proofs approved for service page proof slots. */
export const serviceProofRegister = {
  // Intentionally empty until each result is validated and approved.
} as const satisfies Record<string, VerifiedServiceProof>;

export type RegisteredServiceProofId = keyof typeof serviceProofRegister;

export function getVerifiedServiceProofs(
  serviceSlug: string,
  ids?: readonly string[],
): VerifiedServiceProof[] {
  const all = (
    Object.values(serviceProofRegister) as VerifiedServiceProof[]
  ).filter((p) => p.serviceSlug === serviceSlug);
  if (!ids || ids.length === 0) return all;
  const idSet = new Set(ids);
  return all.filter((p) => idSet.has(p.id));
}

export { registerServiceProof };
