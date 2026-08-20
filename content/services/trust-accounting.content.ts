/**
 * @cms-editable Service page content — trust-accounting
 * Edit copy here; do not change ServicePageView for text updates.
 */
import type { ServicePageContent } from "./types";

const content: ServicePageContent = {
  slug: "trust-accounting",
  searchIntent: "Trust accounting for vacation rental property managers",
  meta: {
    title: "Trust Accounting for STR Property Managers",
    description:
      "STR property managers: fund separation, 3-way reconciliation, owner balances, and audit-ready controls for guest and owner funds.",
  },
  hero: {
    category: "Trust Accounting",
    h1: "Trust accounting your owners, auditors, and regulators can follow",
    intro:
      "Guest funds, owner balances, and operating cash move through your business every day. HostAllies runs trust accounting for STR property managers — with separated ledgers, reconciled balances, and documented controls — so you can answer questions about client funds with confidence.",
  },
  audience: {
    heading: "Who this is for",
    intro:
      "Professional property managers who hold or pass through guest and owner funds and need books that stand up to owner scrutiny and outside review.",
    items: [
      "Property managers with dedicated trust or client funds accounts",
      "Operators managing owner disbursements across dozens or hundreds of units",
      "Teams outgrowing spreadsheet reconciliation and manual owner balance tracking",
      "Managers preparing for audits, owner reviews, or licensing examinations",
      "Portfolio leaders who need clear separation between trust and operating activity",
    ],
  },
  problem: {
    heading: "The problem in operator language",
    intro:
      "Trust accounting is not the same as company bookkeeping — and most generic bookkeepers treat it that way.",
    points: [
      "Trust reconciliation takes days each month because booking data, bank activity, and owner ledgers live in different places",
      "Owner balance reports do not tie to bank statements, so you spend hours chasing pennies and exceptions",
      "Guest deposits, refunds, and chargebacks sit in the wrong accounts until someone notices at month-end",
      "Disbursement batches go out with manual checks that are hard to reconstruct later",
      "When an owner or auditor asks for a balance as of a specific date, your team rebuilds it from scratch",
      "Peak season volume exposes gaps in controls — and one exception can undermine owner confidence",
    ],
  },
  deliverables: {
    heading: "What HostAllies does",
    intro:
      "Concrete trust accounting work — not abstract promises. We document what we reconcile, what we find, and what we fix.",
    items: [
      {
        title: "Fund separation and trust ledger",
        body: "Maintain a trust ledger distinct from operating accounts — tracking owner balances, guest deposits in transit, and amounts held for disbursement with clear classification on every transaction.",
      },
      {
        title: "3-way trust reconciliation",
        body: "Reconcile trust bank balances to your PMS or channel payout records and the trust ledger each period — identifying timing differences, unapplied payments, and items requiring operator review.",
      },
      {
        title: "Owner balance tracking",
        body: "Keep running owner balances by property and owner entity — updated as bookings, fees, charges, and disbursements post — so you know what is owed before you cut a check or initiate a transfer.",
      },
      {
        title: "Exception identification and resolution",
        body: "Flag unreconciled items, duplicate postings, misclassified transactions, and stale balances — with documented research and recommended corrections for your approval.",
      },
      {
        title: "Disbursement support",
        body: "Prepare disbursement batches tied to reconciled owner balances — with supporting detail your team can review before funds leave the trust account.",
      },
      {
        title: "Controls and reporting",
        body: "Deliver reconciliation reports, exception logs, and trust account summaries designed for internal review — giving your leadership a clear picture of fund status each period.",
      },
    ],
  },
  howItWorks: {
    heading: "How it works",
    intro:
      "We embed in your existing stack and align to your disbursement rhythm — not the other way around.",
    steps: [
      {
        title: "Map your fund flows",
        body: "We document how guest payments enter your accounts, how owner shares are calculated, and where trust and operating funds should separate in your chart of accounts.",
      },
      {
        title: "Establish the trust ledger",
        body: "We set up owner balance tracking aligned to your PMS, payment processors, and bank accounts — with clear rules for deposits, fees, charges, and disbursements.",
      },
      {
        title: "Run monthly reconciliation",
        body: "Each period, we perform 3-way reconciliation, research exceptions, and deliver a trust package your team can review before owner statements and disbursements go out.",
      },
      {
        title: "Improve over time",
        body: "We tighten processes as your portfolio grows — reducing manual work, shortening close, and surfacing control gaps before they become owner-facing problems.",
      },
    ],
  },
  whatYouGet: {
    heading: "What you get",
    intro: "Deliverables you can point to when an owner, partner, or reviewer asks how client funds are handled.",
    items: [
      "Trust ledger with owner balances by property and entity",
      "Monthly 3-way reconciliation (bank, PMS/payouts, ledger)",
      "Exception log with research notes and resolution status",
      "Disbursement batch detail tied to reconciled balances",
      "Trust account summary for internal review",
      "Named Ally accountable for the work each period",
    ],
  },
  faq: [
    {
      q: "Do you guarantee our trust accounting meets every state requirement?",
      a: "No. Trust accounting rules vary by jurisdiction and license type. We apply rigorous reconciliation and documentation practices built for STR operations, but we do not provide legal advice or guarantee compliance with any specific statute. Your legal and licensing advisors should confirm requirements for your markets.",
    },
    {
      q: "What is a 3-way trust reconciliation?",
      a: "We reconcile three sources: your trust bank statement balance, payout and booking records from your PMS or payment tools, and the trust ledger showing owner balances and held funds. When all three align — or differences are explained — you have a defensible picture of client funds.",
    },
    {
      q: "Do you work inside our existing tools?",
      a: "Yes. We work within Guesty, Hostfully, Track, QuickBooks, Clearing, and other platforms you already run — mapping trust activity without forcing a migration.",
    },
    {
      q: "How is this different from regular bookkeeping?",
      a: "Operating bookkeeping tracks your company's income and expenses. Trust accounting tracks funds you hold on behalf of owners and guests — with separate ledgers, reconciliation standards, and controls. Both matter; they are not interchangeable.",
    },
    {
      q: "Can we start with trust accounting only?",
      a: "Yes. Trust accounting is the foundation of our offer ladder. Many clients begin here and add bookkeeping, owner statements, or financial management as the relationship grows.",
    },
  ],
  relatedServices: ["owner-statements", "bookkeeping", "operations-accounting"],
  cta: {
    eyebrow: "Trust accounting",
    title: "See how your trust accounts reconcile today",
    body: "Start with a consultation or request a focused trust accounting assessment of your current setup.",
    secondaryLabel: "Request a trust accounting assessment",
    secondaryHref: "/trust-accounting-assessment",
  },
};

export default content;
