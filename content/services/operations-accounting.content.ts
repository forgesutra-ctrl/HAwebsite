/**
 * @cms-editable Service page content — operations-accounting
 */
import type { ServicePageContent } from "./types";

const content: ServicePageContent = {
  slug: "operations-accounting",
  searchIntent: "STR operations accounting",
  meta: {
    title: "STR Operations Accounting",
    description:
      "STR property managers: PMS-to-ledger mapping, payout processing, and finance-operations sync aligned to how you actually run.",
  },
  hero: {
    category: "Operations Accounting",
    h1: "Operational accounting aligned to how your STR business actually runs",
    intro:
      "Your PMS, payment processors, channel managers, and accounting platform each tell part of the story — but none of them alone reflects how money moves through your operation. HostAllies runs operational accounting workflows that connect booking activity to your ledger — keeping finance and operations in sync as reservations, payouts, fees, and owner disbursements flow through.",
  },
  audience: {
    heading: "Who this is for",
    intro:
      "Managers whose financial records need to reflect operational reality — not just month-end summaries.",
    items: [
      "Operators running multiple booking channels with different payout schedules",
      "Teams where PMS data and accounting records drift apart regularly",
      "Managers processing owner disbursements, guest refunds, and fee adjustments daily",
      "Leaders who need operational accounting that supports trust accounting and owner statements",
      "Growing portfolios where manual handoffs between ops and finance create errors",
    ],
  },
  problem: {
    heading: "The problem in operator language",
    points: [
      "Booking changes in the PMS do not flow to accounting until someone remembers to update both",
      "Channel payouts arrive as lump sums with no consistent mapping to reservation detail",
      "Guest refunds, damage claims, and adjustments are handled in operations but posted late — or not at all — in the books",
      "Owner disbursement timing depends on manual exports and spreadsheet checks",
      "Your operations team and finance team work from different numbers",
      "Peak season volume exposes every gap in the handoff between PMS and ledger",
    ],
  },
  deliverables: {
    heading: "What HostAllies does",
    intro:
      "Operational accounting workflows that bridge your PMS and your books.",
    items: [
      {
        title: "PMS-to-ledger mapping",
        body: "Map reservation events — bookings, modifications, cancellations, refunds — to accounting entries with consistent rules across channels and properties.",
      },
      {
        title: "Payout processing and matching",
        body: "Process channel and processor payouts — matching deposits to reservation detail and identifying unapplied or delayed funds.",
      },
      {
        title: "Fee and adjustment posting",
        body: "Post management fees, cleaning fees, channel commissions, and operational adjustments on schedule — aligned to your fee structures and owner agreements.",
      },
      {
        title: "Refund and chargeback handling",
        body: "Process guest refunds and chargebacks with correct accounting treatment — linking each to the originating reservation and owner impact.",
      },
      {
        title: "Disbursement workflow support",
        body: "Support owner disbursement preparation by ensuring operational accounting is current — so disbursement batches reflect reconciled activity.",
      },
      {
        title: "Operations-finance reconciliation",
        body: "Reconcile PMS reporting to ledger balances regularly — surfacing drift between what operations sees and what finance records.",
      },
    ],
  },
  howItWorks: {
    heading: "How it works",
    steps: [
      {
        title: "Map your operational flows",
        body: "We document how bookings, payouts, fees, refunds, and disbursements move through your PMS, processors, and accounting platform.",
      },
      {
        title: "Establish posting rules",
        body: "We define consistent rules for how each event type posts — reducing ad hoc entries and manual corrections.",
      },
      {
        title: "Run daily operational accounting",
        body: "Our team processes payouts, posts adjustments, and maintains the operational ledger on a schedule aligned to your transaction volume.",
      },
      {
        title: "Reconcile and report",
        body: "We reconcile operational activity to your books each period — feeding trust accounting, owner statements, and management reporting with current data.",
      },
    ],
  },
  whatYouGet: {
    heading: "What you get",
    items: [
      "PMS-to-ledger mapping with documented posting rules",
      "Payout matching and unapplied fund tracking",
      "Timely posting of fees, adjustments, refunds, and chargebacks",
      "Operations-finance reconciliation each period",
      "Disbursement-ready operational data",
      "Named Ally coordinating ops and finance workflows",
    ],
  },
  faq: [
    {
      q: "How is operations accounting different from bookkeeping?",
      a: "Bookkeeping is the broader discipline of recording and closing your accounts. Operations accounting focuses on the workflows connecting your PMS and payment activity to the ledger — the daily bridge between how you run properties and how your books reflect it.",
    },
    {
      q: "Do you work inside our PMS?",
      a: "Yes. We operate within Guesty, Hostfully, Track, and other platforms you use — mapping activity to your accounting system without requiring you to change tools.",
    },
    {
      q: "Does operations accounting include trust accounting?",
      a: "Operations accounting feeds trust accounting with current transaction data. Trust accounting adds fund separation, 3-way reconciliation, and owner balance tracking. They work together and are often scoped as complementary services.",
    },
    {
      q: "Can you help if our PMS and QuickBooks have never been properly connected?",
      a: "Yes. Many engagements start with mapping and correcting the connection — establishing posting rules before we take over ongoing operational accounting.",
    },
  ],
  relatedServices: ["bookkeeping", "trust-accounting", "expense-management"],
  cta: {
    eyebrow: "Operations accounting",
    title: "Sync your operations and your books",
    body: "Book a consultation to review how booking activity flows to your ledger today.",
  },
};

export default content;
