/**
 * @cms-editable Service page content — tax-preparation
 */
import type { ServicePageContent } from "./types";

const content: ServicePageContent = {
  slug: "tax-preparation",
  searchIntent: "STR tax preparation — income, lodging, and occupancy",
  meta: {
    title: "STR Tax Preparation & Lodging Tax",
    description:
      "Property managers: income tax, lodging tax, and occupancy tax prep scoped by jurisdiction — dependencies and limits documented upfront.",
  },
  hero: {
    category: "Tax Preparation",
    h1: "STR tax preparation with income, lodging, and occupancy kept separate",
    intro:
      "Short-term rental operators face multiple tax layers — company income tax, lodging or occupancy taxes by jurisdiction, and owner-level reporting — each with different rules, deadlines, and filing requirements. HostAllies prepares STR tax filings with clear scope boundaries so you know exactly what is included, what depends on your jurisdiction, and what stays with your CPA.",
  },
  audience: {
    heading: "Who this is for",
    intro:
      "Property managers who need tax preparation from specialists who understand STR — not a generalist who treats you like a retail shop.",
    items: [
      "Managers filing lodging or occupancy taxes across multiple cities, counties, or states",
      "Operators who need clean books before income tax preparation begins",
      "Teams where lodging tax collections sit in trust accounts and must reconcile to filings",
      "Managers issuing 1099s to owners, vendors, or contractors",
      "Leaders who want tax prep coordinated with their bookkeeping and trust accounting",
    ],
  },
  problem: {
    heading: "The problem in operator language",
    points: [
      "Lodging tax rules differ by jurisdiction — and your team is not sure which filings apply to which properties",
      "Collected lodging taxes sit in trust or operating accounts without clear reconciliation to amounts owed",
      "Income tax prep starts with messy books — so your CPA spends hours cleaning up instead of advising",
      "1099 preparation is an afterthought that creates year-end scrambles",
      "Nobody clearly owns the boundary between lodging tax, occupancy tax, and income tax in your operation",
      "You have been surprised by penalties because a local filing deadline was missed",
    ],
  },
  deliverables: {
    heading: "What HostAllies does",
    intro:
      "Three tax categories, scoped separately — with jurisdiction limits documented before work begins.",
    items: [
      {
        title: "Income tax preparation support",
        body: "Prepare company-level income tax workpapers from reconciled books — organizing revenue, expenses, and supporting schedules for your CPA or filing on agreed scope. We coordinate with your tax advisor; we do not replace attest or audit services.",
      },
      {
        title: "Lodging tax filing",
        body: "Prepare and file lodging taxes for jurisdictions within our supported scope — reconciling collected amounts to filings and documenting remittance. Supported jurisdictions and filing calendars are confirmed during onboarding.",
      },
      {
        title: "Occupancy tax filing",
        body: "Handle occupancy tax filings where they apply separately from lodging tax — with clear mapping of which properties fall under which authority. Rules and rates vary; we confirm applicability before filing.",
      },
      {
        title: "Tax reconciliation",
        body: "Reconcile tax collected in trust or operating accounts to amounts filed and remitted — identifying discrepancies before they become penalty notices.",
      },
      {
        title: "1099 preparation",
        body: "Prepare 1099-NEC and 1099-MISC forms for qualifying vendors, contractors, and owner payments — from documented payment records in your accounting system.",
      },
      {
        title: "Scope documentation",
        body: "Document which jurisdictions, filing types, and tax years are in scope — including known limits, dependencies on your licensing status, and items that require your CPA or legal counsel.",
      },
    ],
  },
  howItWorks: {
    heading: "How it works",
    steps: [
      {
        title: "Confirm scope and jurisdictions",
        body: "We map your property locations to applicable lodging, occupancy, and income tax obligations — documenting what we can file, what requires additional licensing, and what stays with your CPA.",
      },
      {
        title: "Reconcile tax collections",
        body: "We reconcile tax collected on bookings to amounts owed — ensuring trust and operating accounts reflect tax liabilities accurately before filings.",
      },
      {
        title: "Prepare and file",
        body: "We prepare returns on the agreed calendar — lodging and occupancy on their schedules, income tax workpapers aligned to your CPA's timeline.",
      },
      {
        title: "Document and hand off",
        body: "Each filing includes supporting reconciliation and scope notes — so you and your advisors can trace amounts from booking to return.",
      },
    ],
  },
  whatYouGet: {
    heading: "What you get",
    items: [
      "Documented tax scope by jurisdiction and filing type",
      "Lodging and occupancy tax filings within supported scope",
      "Income tax workpapers from reconciled books",
      "Tax collection reconciliation (collected vs. filed vs. remitted)",
      "1099 preparation for qualifying payments",
      "Clear handoff documentation for your CPA on items outside our scope",
    ],
  },
  faq: [
    {
      q: "Do you file taxes in every state and municipality?",
      a: "No. Supported jurisdictions depend on licensing, registration requirements, and our current filing capabilities. We document scope during onboarding and flag jurisdictions that require your direct action or a local specialist.",
    },
    {
      q: "What is the difference between lodging tax and occupancy tax?",
      a: "The terms overlap in common usage, but jurisdictions define them differently. Some impose a lodging tax on short-term stays; others use occupancy, transient, or hotel taxes with separate rules and rates. We map your properties to the specific obligations in each authority — not generic labels.",
    },
    {
      q: "Do you provide tax advice?",
      a: "We prepare filings and reconciliation within agreed scope. Entity structure, multi-state nexus, and complex tax planning decisions belong with your CPA or tax attorney. We coordinate so your books and filings are consistent.",
    },
    {
      q: "Can tax preparation be added to existing bookkeeping?",
      a: "Yes. Tax preparation works best when paired with current bookkeeping and trust accounting — so collections, remittances, and filings tie to the same underlying data.",
    },
    {
      q: "What happens if we operate in a jurisdiction outside your scope?",
      a: "We flag it during onboarding, document the gap, and provide reconciliation data your local advisor or your team can use to file directly. We do not file in jurisdictions we have not confirmed support for.",
    },
  ],
  relatedServices: ["trust-accounting", "bookkeeping", "financial-management"],
  cta: {
    eyebrow: "Tax preparation",
    title: "Clarify your STR tax scope before the next deadline",
    body: "Book a consultation to map your jurisdictions and filing requirements.",
  },
};

export default content;
