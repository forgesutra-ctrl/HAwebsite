/** Pricing comparison — feature rows with tier coverage and SEO detail copy. */
export const pricingTiers = [
  { id: "trust", label: "Trust Accounting" },
  { id: "managed", label: "Managed Accounting" },
  { id: "proactive", label: "Proactive Financial Management" },
  { id: "addons", label: "Add-ons" },
] as const;

export type PricingTierId = (typeof pricingTiers)[number]["id"];

export type PricingComparisonRow = {
  id: string;
  feature: string;
  /** Short line visible when the row disclosure is collapsed. */
  summary: string;
  /** Full detail — always rendered in HTML for SEO/GEO. */
  detail: string;
  coverage: Record<PricingTierId, boolean>;
};

export const pricingComparisonRows: readonly PricingComparisonRow[] = [
  {
    id: "trust-reconciliation",
    feature: "3-way trust reconciliation",
    summary:
      "Bank, PMS or payout records, and trust ledger reconciled each period.",
    detail:
      "We reconcile trust bank balances to booking and payout activity from your PMS or payment tools and the trust ledger each period — identifying timing differences, unapplied payments, and items requiring operator review before disbursements go out.",
    coverage: {
      trust: true,
      managed: true,
      proactive: true,
      addons: false,
    },
  },
  {
    id: "owner-statements",
    feature: "Owner statements & balances",
    summary:
      "Running owner balances and reconciled statement detail owners can follow.",
    detail:
      "Owner balances update as bookings, fees, charges, and disbursements post. Statements tie to reconciled trust activity so owners see how each line item was calculated — not a black-box summary at month-end.",
    coverage: {
      trust: true,
      managed: true,
      proactive: true,
      addons: false,
    },
  },
  {
    id: "bookkeeping",
    feature: "Daily bookkeeping & company books",
    summary:
      "Operating books kept current — not just trust activity.",
    detail:
      "Daily transaction coding, balance sheet maintenance, company P&L, and financial reporting for your management entity — built on the trust accounting foundation so operating and fiduciary records stay aligned.",
    coverage: {
      trust: false,
      managed: true,
      proactive: true,
      addons: false,
    },
  },
  {
    id: "forecasting",
    feature: "Budgeting & cash-flow forecasting",
    summary:
      "Forward-looking plans tied to actual STR booking and expense patterns.",
    detail:
      "Budgets, cash-flow forecasts, and profitability analysis using your real portfolio data — so leadership can model hiring, owner acquisition, and pricing decisions against numbers that reflect how your operation actually runs.",
    coverage: {
      trust: false,
      managed: false,
      proactive: true,
      addons: false,
    },
  },
  {
    id: "lodging-tax",
    feature: "Lodging tax filing & remittance",
    summary:
      "Jurisdiction-specific lodging tax preparation as an add-on to any tier.",
    detail:
      "Lodging or occupancy tax filing scoped to your markets and license structure — with clear boundaries on what HostAllies prepares versus what stays with your CPA or legal advisors for entity-level tax work.",
    coverage: {
      trust: false,
      managed: false,
      proactive: false,
      addons: true,
    },
  },
  {
    id: "reporting-advisory",
    feature: "Reporting & financial review meetings",
    summary:
      "Management reporting and regular review cadence with your named Ally.",
    detail:
      "Baseline and management reporting, property-level visibility, and scheduled financial review meetings — an accountable finance partner in the room for operational and strategic conversations, not just a monthly PDF.",
    coverage: {
      trust: false,
      managed: true,
      proactive: true,
      addons: false,
    },
  },
];
