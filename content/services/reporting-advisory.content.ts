/**
 * @cms-editable Service page content — reporting-advisory
 */
import type { ServicePageContent } from "./types";

const content: ServicePageContent = {
  slug: "reporting-advisory",
  searchIntent: "STR financial reporting and advisory",
  meta: {
    title: "STR Financial Reporting & Advisory",
    description:
      "STR operators: baseline and management reporting, property-level visibility, and regular financial review meetings with your Ally.",
  },
  hero: {
    category: "Reporting & Advisory",
    h1: "Reporting that helps you manage the business — not just record it",
    intro:
      "A closed P&L tells you what happened. Management reporting tells you what to do next. HostAllies delivers baseline and management reporting with property-level visibility — plus advisory conversations on a regular cadence — so your leadership team runs on financial insight, not instinct.",
  },
  audience: {
    heading: "Who this is for",
    intro:
      "Operators who have books but lack the reporting and guidance to act on them.",
    items: [
      "Managers receiving monthly financials but struggling to translate them into decisions",
      "Teams without property-level profitability visibility",
      "Leaders who want structured financial review meetings, not ad hoc spreadsheet sessions",
      "Operators preparing for growth who need reporting that scales with unit count",
      "Founders who want an experienced financial Ally in the room for strategic conversations",
    ],
  },
  problem: {
    heading: "The problem in operator language",
    points: [
      "Your bookkeeper delivers a P&L but cannot tell you which properties lost money last month",
      "Reporting is historical only — nobody is looking forward at cash, seasonality, or budget variance",
      "Financial review meetings happen inconsistently, if at all",
      "Different reports from your PMS, accounting tool, and spreadsheets tell different stories",
      "You spot margin problems after the season ends, not while you can still adjust",
      "Advisory support means calling your CPA once a year — not having someone who knows your operation",
    ],
  },
  deliverables: {
    heading: "What HostAllies does",
    intro: "Reporting packages and advisory conversations grounded in reconciled data.",
    items: [
      {
        title: "Baseline financial reporting",
        body: "Deliver monthly P&L, balance sheet, and cash flow statements — closed, reconciled, and formatted for operator review.",
      },
      {
        title: "Management reporting",
        body: "Go beyond baseline with property-level P&L, channel mix analysis, fee yield tracking, and cost ratio trends — the views your leadership actually needs.",
      },
      {
        title: "Property-level visibility",
        body: "Show revenue, direct costs, and contribution margin by property — so you can identify underperformers, pricing gaps, and expense drift at the unit level.",
      },
      {
        title: "Variance and trend analysis",
        body: "Compare actuals to budget and prior periods — with commentary on what moved and why.",
      },
      {
        title: "Structured review meetings",
        body: "Hold regular financial review meetings on an agreed cadence — monthly or quarterly — with agenda, reporting package, and documented action items.",
      },
      {
        title: "Advisory guidance",
        body: "Translate reporting into recommendations — on pricing, cost control, hiring, owner acquisition, and portfolio strategy — from an Ally who knows your books.",
      },
    ],
  },
  howItWorks: {
    heading: "How it works",
    steps: [
      {
        title: "Design your reporting package",
        body: "We identify the questions your leadership asks most — then build reports that answer them consistently each period.",
      },
      {
        title: "Deliver on cadence",
        body: "Reports arrive on a predictable schedule after close — with property-level detail, variance commentary, and trend notes.",
      },
      {
        title: "Review together",
        body: "We walk through the numbers in structured review meetings — focusing on decisions, not just data recitation.",
      },
      {
        title: "Act and track",
        body: "Action items from each review carry forward — so financial conversations lead to operational changes, not just nodding heads.",
      },
    ],
  },
  whatYouGet: {
    heading: "What you get",
    items: [
      "Monthly baseline financial statements (P&L, balance sheet, cash flow)",
      "Management reporting with property-level detail",
      "Variance analysis against budget and prior periods",
      "Regular financial review meetings on agreed cadence",
      "Written commentary on trends and exceptions",
      "Advisory support from your named financial Ally",
    ],
  },
  faq: [
    {
      q: "What is the difference between baseline and management reporting?",
      a: "Baseline reporting is your standard financial statements — P&L, balance sheet, cash flow. Management reporting adds operator-focused views: property-level profitability, channel analysis, cost ratios, and variance commentary designed for decision-making.",
    },
    {
      q: "How often are review meetings held?",
      a: "Most clients meet monthly after close. Some prefer quarterly deep-dives with monthly reporting in between. We align to your leadership rhythm.",
    },
    {
      q: "Do you need to handle our bookkeeping too?",
      a: "Reporting quality depends on underlying data. We can report on books maintained by your team if they meet our review standards, or include bookkeeping in scope for a single accountable partner.",
    },
    {
      q: "Can reporting and advisory be added without full financial management?",
      a: "Yes. Reporting and advisory can be scoped as a distinct tier — especially for operators with solid bookkeeping who need better visibility and guidance.",
    },
  ],
  relatedServices: ["financial-management", "owner-statements", "bookkeeping"],
  cta: {
    eyebrow: "Reporting & advisory",
    title: "Turn your financials into decisions",
    body: "Book a consultation to discuss the reporting your leadership team needs.",
  },
};

export default content;
