/**
 * @cms-editable Service page content — bookkeeping
 */
import type { ServicePageContent } from "./types";

const content: ServicePageContent = {
  slug: "bookkeeping",
  searchIntent: "Short-term rental bookkeeping",
  meta: {
    title: "Short-Term Rental Bookkeeping",
    description:
      "Property managers: booking-to-bank reconciliation, revenue logic, chart of accounts, and monthly close for STR portfolios.",
  },
  hero: {
    category: "Bookkeeping",
    h1: "Short-term rental bookkeeping that keeps pace with your bookings",
    intro:
      "OTAs, direct bookings, channel payouts, cleaning fees, and owner commissions create more transaction volume than a typical small business — and more ways for the books to drift. HostAllies runs daily STR bookkeeping so your accounts reflect what actually happened, not what you hope happened at month-end.",
  },
  audience: {
    heading: "Who this is for",
    intro:
      "Property managers who need accurate company books without building an in-house accounting department.",
    items: [
      "Managers posting hundreds or thousands of transactions monthly across channels",
      "Teams where bookkeeping falls behind during peak season",
      "Operators who have outgrown a generalist bookkeeper unfamiliar with STR revenue logic",
      "Leaders who need a reliable monthly close before owner statements go out",
      "Growing portfolios adding units faster than their back office can absorb",
    ],
  },
  problem: {
    heading: "The problem in operator language",
    points: [
      "Booking revenue hits the bank in lump-sum payouts that do not match reservation detail without manual matching",
      "Commission, management fees, and pass-through charges are coded inconsistently property to property",
      "The chart of accounts was set up for a generic business — not how STR money actually moves",
      "Bank feeds create duplicate or misclassified entries that nobody catches until the close is late",
      "Month-end close depends on one person who also handles guest messaging and owner calls",
      "You cannot answer a simple question — what did we earn last month? — without exporting three reports",
    ],
  },
  deliverables: {
    heading: "What HostAllies does",
    intro: "Day-to-day bookkeeping with STR-specific logic — not generic data entry.",
    items: [
      {
        title: "Booking-to-bank reconciliation",
        body: "Match channel payouts, processor deposits, and direct payments to reservation and fee detail — resolving timing differences and identifying missing or duplicate postings.",
      },
      {
        title: "STR chart of accounts",
        body: "Maintain a chart of accounts structured for property management — separating rental income, fees, pass-throughs, owner liabilities, and operating expenses in ways that support reporting and owner statements.",
      },
      {
        title: "Revenue and commission logic",
        body: "Apply your fee structures, commission rules, and revenue-sharing agreements consistently — so management fees, owner shares, and pass-through charges post correctly every period.",
      },
      {
        title: "Expense categorization",
        body: "Code operating expenses, property-level costs, and owner-chargeable items to the right accounts — with clear rules your team can follow.",
      },
      {
        title: "Monthly close",
        body: "Close each period with reconciled bank accounts, reviewed balance sheet accounts, and a company P&L that reflects your operation — delivered on a predictable schedule.",
      },
      {
        title: "Exception handling",
        body: "Research and resolve unreconciled items, miscoded transactions, and open questions — documenting findings so your team is not rebuilding context next month.",
      },
    ],
  },
  howItWorks: {
    heading: "How it works",
    steps: [
      {
        title: "Align your books to STR reality",
        body: "We review your chart of accounts, fee structures, and bank/PMS connections — correcting the foundation before we take over daily posting.",
      },
      {
        title: "Take over daily posting",
        body: "Our team handles transaction coding, payout matching, and account maintenance inside your accounting platform — on a schedule that matches your operation.",
      },
      {
        title: "Close each month",
        body: "We reconcile accounts, resolve exceptions, and deliver closed-period financials your leadership can rely on for decisions and owner communication.",
      },
      {
        title: "Tighten as you scale",
        body: "As unit count and transaction volume grow, we refine processes — reducing manual steps and keeping close timelines predictable.",
      },
    ],
  },
  whatYouGet: {
    heading: "What you get",
    items: [
      "Reconciled bank and credit card accounts each period",
      "Company P&L and balance sheet on a monthly close schedule",
      "Booking-to-bank reconciliation with exception notes",
      "Consistent revenue, fee, and commission posting",
      "Documented chart of accounts aligned to STR operations",
      "Named Ally accountable for your books",
    ],
  },
  faq: [
    {
      q: "Do you replace our accountant or CPA?",
      a: "We handle operational bookkeeping and monthly close — the day-to-day recording and reconciliation of transactions. Year-end tax preparation, audit representation, and formal attest work remain with your CPA. We coordinate so your books are clean when tax season arrives.",
    },
    {
      q: "Which accounting platforms do you support?",
      a: "We work primarily in QuickBooks Online and platforms integrated with your PMS stack. We operate inside your existing tools rather than requiring a migration.",
    },
    {
      q: "How do you handle OTA payout timing?",
      a: "Channel payouts often arrive days or weeks after checkout. We match deposits to reservation detail, accrue revenue where your method requires it, and document timing differences so your P&L and bank activity tell a consistent story.",
    },
    {
      q: "Can bookkeeping include trust accounting?",
      a: "Trust accounting is a separate discipline with its own reconciliation standards. Many clients pair bookkeeping with our trust accounting service — they complement each other but are scoped and delivered separately.",
    },
  ],
  relatedServices: ["trust-accounting", "operations-accounting", "owner-statements"],
  cta: {
    eyebrow: "Bookkeeping",
    title: "Get your STR books off the back burner",
    body: "Book a consultation to review your current close process and see where HostAllies can take over.",
  },
};

export default content;
