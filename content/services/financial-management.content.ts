/**
 * @cms-editable Service page content — financial-management
 */
import type { ServicePageContent } from "./types";

const content: ServicePageContent = {
  slug: "financial-management",
  searchIntent: "Outsourced financial management for STR",
  meta: {
    title: "Outsourced STR Financial Management",
    description:
      "STR operators: management reporting, financial planning, margin analysis, and fractional controller support without in-house headcount.",
  },
  hero: {
    category: "Financial Management",
    h1: "Outsourced financial management for operators ready to run on numbers",
    intro:
      "Closing the books is the baseline. Growing profitably requires management reporting, planning, and someone who reads the P&L the way you read occupancy — spotting margin leaks before they compound. HostAllies provides outsourced financial management for STR property managers who want a finance function, not just a bookkeeper.",
  },
  audience: {
    heading: "Who this is for",
    intro:
      "Operators who have outgrown reactive bookkeeping and need proactive financial leadership.",
    items: [
      "Property managers making hiring, pricing, and portfolio decisions without reliable management reports",
      "Founders acting as their own CFO while also running sales, operations, and owner relations",
      "Teams preparing for growth, acquisition, or investor conversations that require financial rigor",
      "Managers who want budgeting, forecasting, and margin analysis — not just historical statements",
      "Leaders ready to delegate the full back office to an accountable financial partner",
    ],
  },
  problem: {
    heading: "The problem in operator language",
    points: [
      "You get a P&L each month but no insight into which properties, channels, or cost lines are dragging margin",
      "Budgeting means updating a spreadsheet once a year — then ignoring it by February",
      "Cash flow surprises hit because nobody is forecasting deposits, disbursements, and operating expenses together",
      "You make hiring and growth decisions on gut feel because property-level profitability is not visible",
      "Your bookkeeper closes the period but cannot answer strategic questions about the business",
      "The finance function lives in your head — and that does not scale",
    ],
  },
  deliverables: {
    heading: "What HostAllies does",
    intro:
      "Financial management built on reconciled books — with reporting and advisory that drives decisions.",
    items: [
      {
        title: "Management reporting",
        body: "Deliver P&L, balance sheet, and cash flow reporting formatted for operators — with property-level, channel-level, and portfolio-level views that show where profit is made and lost.",
      },
      {
        title: "Financial planning and budgeting",
        body: "Build annual and rolling budgets aligned to your growth plan — with assumptions documented so you can track actuals against intent throughout the year.",
      },
      {
        title: "Cash-flow forecasting",
        body: "Forecast operating cash, trust disbursements, and seasonal swings — so you see pressure points weeks ahead, not days after.",
      },
      {
        title: "Margin and profitability analysis",
        body: "Analyze property-level margins, fee yield, and cost ratios — surfacing underperforming units, pricing gaps, and expense drift before they erode portfolio returns.",
      },
      {
        title: "Fractional controller support",
        body: "Provide a named financial Ally who owns the close, reviews exceptions, answers leadership questions, and participates in regular financial review meetings.",
      },
      {
        title: "Advisory and coaching",
        body: "Translate numbers into decisions — helping your leadership team understand what the data means for hiring, pricing, owner acquisition, and portfolio strategy.",
      },
    ],
  },
  howItWorks: {
    heading: "How it works",
    steps: [
      {
        title: "Establish the foundation",
        body: "We confirm trust accounting, bookkeeping, and owner statements are current — or scope them as part of onboarding. Financial management requires clean underlying data.",
      },
      {
        title: "Build your reporting package",
        body: "We design management reports around the questions you actually ask — property profitability, channel mix, cost trends, and cash position.",
      },
      {
        title: "Run a regular cadence",
        body: "Monthly close, management reporting, and a structured review meeting — with action items tied to what the numbers show.",
      },
      {
        title: "Plan and adjust",
        body: "We update forecasts and budgets as your portfolio changes — coaching your team on the financial implications of growth decisions.",
      },
    ],
  },
  whatYouGet: {
    heading: "What you get",
    items: [
      "Monthly management reporting with property-level visibility",
      "Annual budget and rolling cash-flow forecast",
      "Margin analysis and profitability commentary",
      "Regular financial review meetings with your named Ally",
      "Full back-office scope: trust accounting, bookkeeping, statements, and reporting",
      "Advisory support for strategic financial decisions",
    ],
  },
  faq: [
    {
      q: "How is financial management different from bookkeeping?",
      a: "Bookkeeping records and reconciles transactions. Financial management adds reporting, planning, analysis, and advisory — helping you run the business on numbers, not just close the period.",
    },
    {
      q: "Do I need to have bookkeeping handled elsewhere first?",
      a: "Clean books are the foundation. We can take over bookkeeping as part of financial management, or begin advisory once your existing books meet our review standards.",
    },
    {
      q: "What does fractional controller support look like?",
      a: "A named Ally owns your financial close, reviews reporting with your leadership, answers operational finance questions, and participates in regular review meetings — controller-level accountability without a full-time hire.",
    },
    {
      q: "Can we start smaller and expand scope?",
      a: "Yes. Our offer ladder starts with trust accounting and builds through bookkeeping and reporting to proactive financial management. Many clients grow into this tier as their portfolio and needs mature.",
    },
  ],
  relatedServices: ["reporting-advisory", "trust-accounting", "bookkeeping"],
  cta: {
    eyebrow: "Financial management",
    title: "Build a finance function that scales with your portfolio",
    body: "Book a consultation to discuss your reporting, planning, and back-office needs.",
  },
};

export default content;
