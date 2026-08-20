/**
 * @cms-editable Service page content — owner-statements
 */
import type { ServicePageContent } from "./types";

const content: ServicePageContent = {
  slug: "owner-statements",
  searchIntent: "Owner statements for vacation rental property managers",
  meta: {
    title: "Owner Statements for STR Managers",
    description:
      "STR managers: timely owner statements with reconciled revenue, fees, charges, and disbursement detail owners can trust.",
  },
  hero: {
    category: "Owner Statements",
    h1: "Owner statements backed by reconciled numbers",
    intro:
      "Owners judge your management by the statement they receive each month. HostAllies prepares owner statements from reconciled booking, fee, and disbursement data — with clear line items, consistent timing, and exception review before anything reaches an owner's inbox.",
  },
  audience: {
    heading: "Who this is for",
    intro:
      "Property managers who need owner reporting that builds confidence — not confusion and follow-up calls.",
    items: [
      "Managers sending statements to individual owners, LLCs, and investor groups",
      "Teams where owners question fees, charges, or revenue totals regularly",
      "Operators scaling owner count faster than their statement process can support",
      "Managers who want statements tied to trust accounting and reconciled books",
      "Leaders preparing for owner renewals, portfolio acquisitions, or investor diligence",
    ],
  },
  problem: {
    heading: "The problem in operator language",
    points: [
      "Statements go out late because reconciliation and fee calculations are still manual",
      "Owners call asking why revenue on the statement does not match what they see on the OTA",
      "Management fees, cleaning pass-throughs, and maintenance charges appear inconsistently month to month",
      "Exception items — refunds, chargebacks, adjustments — show up without explanation",
      "Your team rebuilds statement detail from exports every month instead of pulling from a single source",
      "One confusing statement erodes trust — and gives owners a reason to shop for a new manager",
    ],
  },
  deliverables: {
    heading: "What HostAllies does",
    intro:
      "Statement preparation grounded in reconciled data — with review before delivery.",
    items: [
      {
        title: "Data inputs and validation",
        body: "Pull reservation revenue, channel fees, management fees, and pass-through charges from reconciled PMS and accounting sources — validating totals before statement assembly.",
      },
      {
        title: "Fee and charge application",
        body: "Apply your fee schedules, commission rules, and owner-chargeable expense policies consistently — with line-item detail owners can follow.",
      },
      {
        title: "Owner charge processing",
        body: "Post maintenance, supply, and approved owner-chargeable costs with supporting detail — so charges on the statement tie to work performed.",
      },
      {
        title: "Exception review",
        body: "Review refunds, chargebacks, adjustments, and out-of-period items before statements release — flagging items that need operator approval or owner communication.",
      },
      {
        title: "Disbursement alignment",
        body: "Tie statement totals to disbursement amounts — so what the owner sees owed matches what leaves the trust account.",
      },
      {
        title: "Predictable delivery timing",
        body: "Deliver statements on a schedule your owners can expect — with status visibility so your team is not fielding 'where is my statement?' calls.",
      },
    ],
  },
  howItWorks: {
    heading: "How it works",
    steps: [
      {
        title: "Define statement rules",
        body: "We document your fee structures, charge policies, statement format preferences, and delivery timing — aligned to how each owner entity should be reported.",
      },
      {
        title: "Connect to reconciled data",
        body: "Statements pull from reconciled booking, trust, and accounting records — not ad hoc exports. If trust accounting or bookkeeping is in scope, those feeds are already validated.",
      },
      {
        title: "Review and release",
        body: "Each period, we assemble statements, review exceptions, and deliver a batch for your team's approval before owners receive them.",
      },
      {
        title: "Handle owner questions",
        body: "When owners ask about a line item, we provide supporting detail from the underlying reconciliation — reducing back-and-forth for your account managers.",
      },
    ],
  },
  whatYouGet: {
    heading: "What you get",
    items: [
      "Owner statements with revenue, fees, charges, and net disbursement detail",
      "Exception review log before each release cycle",
      "Consistent fee and charge application across owner entities",
      "Disbursement totals tied to statement balances",
      "Delivery on an agreed monthly schedule",
      "Supporting detail available for owner inquiries",
    ],
  },
  faq: [
    {
      q: "Do you send statements directly to owners?",
      a: "We prepare and review statements for your approval. Delivery to owners — via your PMS, email, or owner portal — follows your preferred workflow. We can support either model.",
    },
    {
      q: "What data do you need to produce statements?",
      a: "Access to your PMS reservation and fee data, trust or operating accounting records, and your fee and charge policies. The cleaner the upstream reconciliation, the faster and more accurate statements become.",
    },
    {
      q: "Can you match our existing statement format?",
      a: "We align to your current layout and line-item structure where possible — or recommend improvements when the existing format creates owner confusion.",
    },
    {
      q: "How do statements relate to trust accounting?",
      a: "Owner statements show what an owner earned and was charged. Trust accounting confirms those amounts tie to actual funds held and disbursed. When both are in scope, they are reconciled to each other each period.",
    },
  ],
  relatedServices: ["trust-accounting", "bookkeeping", "reporting-advisory"],
  cta: {
    eyebrow: "Owner statements",
    title: "Give owners statements they do not have to question",
    body: "Book a consultation to review your current statement process and timing.",
  },
};

export default content;
