/**
 * @cms-editable Service page content — expense-management
 */
import type { ServicePageContent } from "./types";

const content: ServicePageContent = {
  slug: "expense-management",
  searchIntent: "STR expense management and accounts payable",
  meta: {
    title: "STR Expense Management & AP",
    description:
      "Property managers: expense workflows, accounts payable, vendor payments, and owner-chargeable tracking with clear categorization.",
  },
  hero: {
    category: "Expense Management",
    h1: "Expense workflows that keep spending visible across your portfolio",
    intro:
      "Maintenance invoices, supply orders, utility bills, and vendor payments move through a property management business constantly — often across dozens of properties and multiple payment methods. HostAllies manages expense workflows, accounts payable, and vendor payments so costs are coded, approved, and tracked before they hit your P&L or an owner's statement.",
  },
  audience: {
    heading: "Who this is for",
    intro:
      "Operators who need controlled spending without adding AP headcount.",
    items: [
      "Managers processing vendor invoices across a growing property portfolio",
      "Teams where expenses are paid by multiple people with inconsistent coding",
      "Operators who need to distinguish company costs from owner-chargeable items",
      "Managers struggling to track open payables and payment timing",
      "Leaders who want expense visibility before month-end close, not after",
    ],
  },
  problem: {
    heading: "The problem in operator language",
    points: [
      "Invoices sit in inboxes or Slack threads until someone has time to pay them — or they get paid twice",
      "Maintenance and supply costs are coded differently depending on who enters them",
      "Owner-chargeable expenses get lost in company accounts — or company expenses hit owner statements",
      "Nobody has a clear view of open payables or what is due this week",
      "Vendor payments go out without consistent approval or documentation",
      "Expense volume spikes in peak season and the process breaks down",
    ],
  },
  deliverables: {
    heading: "What HostAllies does",
    intro: "Structured expense handling — from receipt to payment to reporting.",
    items: [
      {
        title: "Expense intake and coding",
        body: "Receive invoices and receipts through your preferred workflow — coding each expense to the correct property, account, and cost category with owner-chargeable flags where applicable.",
      },
      {
        title: "Accounts payable management",
        body: "Track open payables, due dates, and payment status — maintaining a current AP aging your leadership can review at any time.",
      },
      {
        title: "Vendor payment processing",
        body: "Process approved vendor payments on schedule — via check, ACH, or integrated payment tools — with documentation tied to each transaction.",
      },
      {
        title: "Approval workflows",
        body: "Route expenses above defined thresholds for operator approval before payment — with clear audit trails for who approved what.",
      },
      {
        title: "Owner-chargeable tracking",
        body: "Separate company expenses from owner-chargeable costs — ensuring chargeable items flow to owner statements with supporting detail.",
      },
      {
        title: "Expense reporting",
        body: "Deliver expense summaries by property, category, and vendor — giving visibility into spending trends before they affect margins.",
      },
    ],
  },
  howItWorks: {
    heading: "How it works",
    steps: [
      {
        title: "Define expense rules",
        body: "We document your chart of accounts, approval thresholds, owner-chargeable policies, and preferred payment methods.",
      },
      {
        title: "Set up intake",
        body: "We connect to your invoice inbox, bill-pay tools, or expense platform — establishing a consistent path from receipt to coded transaction.",
      },
      {
        title: "Process and pay",
        body: "Our team codes, routes for approval, and processes payments on your schedule — with open payable tracking throughout.",
      },
      {
        title: "Report and reconcile",
        body: "Expenses reconcile to bank activity and flow into your monthly close and owner statements with proper classification.",
      },
    ],
  },
  whatYouGet: {
    heading: "What you get",
    items: [
      "Coded and categorized expenses by property and account",
      "Current AP aging and open payable tracking",
      "Vendor payments processed on an agreed schedule",
      "Approval documentation for expenses above threshold",
      "Owner-chargeable expense flagging and statement routing",
      "Expense summaries for management review",
    ],
  },
  faq: [
    {
      q: "Do you pay vendors directly?",
      a: "We can process payments through your bank or bill-pay platform with your approval, or prepare payment batches for your team to release. The model depends on your controls and preferences.",
    },
    {
      q: "How do you handle owner-chargeable expenses?",
      a: "We flag expenses that should pass through to owner statements, attach supporting documentation, and ensure they post to the correct owner entity — separate from company operating costs.",
    },
    {
      q: "Can expense management stand alone?",
      a: "Yes, though it works best paired with bookkeeping so expenses flow cleanly into your monthly close. We scope based on your current setup.",
    },
    {
      q: "Which tools do you integrate with?",
      a: "We work with QuickBooks, bill-pay platforms, and PMS expense modules — adapting to the tools your operation already uses.",
    },
  ],
  relatedServices: ["bookkeeping", "operations-accounting", "owner-statements"],
  cta: {
    eyebrow: "Expense management",
    title: "Bring order to portfolio spending",
    body: "Book a consultation to review your current expense and AP workflow.",
  },
};

export default content;
