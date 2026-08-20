/**
 * HOMEPAGE CONTENT — SOURCE OF TRUTH
 *
 * Extracted word-for-word from Corey Reid's approved build:
 * https://hostallies-private-review-0812.hello-8be2.chatgpt.site/
 *
 * RULES (agreed on the call of 20 Aug 2026):
 *  1. Do NOT shorten, rewrite or "tighten" any string in this file.
 *     The prose carries the SEO and GEO keywords. Corey: "SEO and GEO still
 *     runs on text at the end of the day."
 *  2. Presentation may change freely (accordions, expand/collapse, graphics).
 *     Content may not. All text must remain in the rendered HTML at all times
 *     so it stays indexable, even when visually collapsed.
 *  3. Any copy change requires founder approval before it ships.
 */

export const meta = {
  title: "HostAllies | Reliable numbers. Clear control.",
  ogTitle: "HostAllies | STR Accounting & Financial Management",
  description:
    "HostAllies trust accounting and financial management services for short-term rental property managers.",
  ogDescription:
    "Trust accounting, bookkeeping, owner statements, reporting, and financial management for professional short-term rental property managers.",
  twitterDescription:
    "Trust accounting and financial management services for professional short-term rental property managers.",
  ogImageAlt:
    "HostAllies short-term rental accounting and financial management",
  canonical: "https://www.hostallies.com/",
};

export const hero = {
  eyebrow:
    "Trust accounting & financial management for STR property managers",
  // "Ally" renders in the brand accent treatment — it is the brand essence.
  headline: "Reliable numbers. Clear control. An accountable financial Ally for profitable STR growth.",
  headlineAccentWord: "Ally",
  body:
    "HostAllies runs trust accounting, bookkeeping, owner statements, and financial reporting for professional STR property managers.",
  primaryCta: { label: "Book a 30-minute consultation", href: "/consultation" },
  secondaryCta: {
    label: "Request a trust accounting assessment",
    href: "/trust-accounting-assessment",
  },
};

export const experiencedWithStrip = {
  leadIn: "Experienced with",
  rest: "all major short-term rental tools and accounting platforms.",
};

/** Client logos sit directly below the hero. Publish ONLY confirmed permissions. */
export const trustedBy = {
  heading:
    "Trusted by leading professional short-term rental property management companies",
  // status: "confirmed" logos render. "pending" are held back until Vishaal confirms.
  clients: [
    { name: "Homestead Martin", status: "confirmed" },
    { name: "Ministe", status: "pending" },
    { name: "Moose Management", status: "pending" },
    { name: "Stellar Dweller", status: "pending" },
    { name: "Cohova", status: "pending" },
    { name: "Stay Boobo", status: "pending" },
    { name: "Dreamline Suites", status: "pending" },
    { name: "Lux Maui", status: "pending" },
    { name: "PMI Metrolinks", status: "pending" },
  ],
};

export const painSection = {
  eyebrow: "The back-office burden",
  heading: "Running an STR business shouldn't mean running a finance department.",
  intro:
    "The operational and financial complexity of short-term rentals grows faster than your team can keep up. Here's what we hear from professional STR property managers every day.",
  items: [
    {
      title: "Trust account reconciliation takes far too long",
      body:
        "Manual reconciliation across spreadsheets, PMS exports, and bank statements consumes valuable time that should be spent improving operations, serving owners, and growing the portfolio.",
    },
    {
      title: "Owner statements owners don't trust",
      body:
        "Unclear statements lead to owner disputes, churn, and hours spent explaining numbers instead of growing your portfolio.",
    },
    {
      title: "Bookkeeping falls behind in peak season",
      body:
        "Transactions pile up during high-volume months. By the time you catch up, the data is too old to act on.",
    },
    {
      title: "No clear view of profitability by property",
      body:
        "You know your total revenue, but not which properties are actually profitable after costs, fees, and owner splits. This is the silent killer of STR profitability and scalable margins.",
    },
    {
      title:
        "Inconsistent lodging tax filing rules & trust accounting regulations",
      body:
        "Cities, counties, and states can have different deadlines and rules. Missing one means penalties and compliance risk exposure.",
    },
    {
      title: "Spent time on books means lost time on growth",
      body:
        "Every hour spent on back-office work is an hour not spent on what truly matters: property acquisition, revenue strategy, guest experiences, and owner relationships.",
    },
  ],
  itemExpandLabel: "Read more",
  itemCollapseLabel: "Show less",
};

export const offerLadder = {
  eyebrow: "What HostAllies handles",
  heading: "An offering that scales with your business",
  intro:
    "Start with the foundation you need and add capability as you grow. Each tier builds on the one before it.",
  tiers: [
    {
      number: "01",
      title: "Trust Accounting",
      kicker: "The compliance foundation.",
      body:
        "Trust account management, 3-way reconciliation, owner statements, disbursements, and compliance reporting keep owner funds separated and clearly documented.",
      items: [
        "3-way trust reconciliation",
        "Trust ledger maintenance",
        "Owner statements",
        "Owner disbursements",
        "Compliance reporting",
      ],
      href: "/services/trust-accounting",
    },
    {
      number: "02",
      title: "Managed Accounting",
      kicker: "Everything in Trust Accounting, plus:",
      body:
        "Day-to-day bookkeeping, operations accounting, and financial reporting keep your company books current and decision-ready.",
      items: [
        "Daily bookkeeping",
        "Operations accounting",
        "Balance sheet",
        "Company P&L",
        "Financial reporting",
      ],
      href: "/services/bookkeeping",
    },
    {
      number: "03",
      title: "Proactive Financial Management",
      kicker: "Everything in Managed Accounting, plus:",
      body:
        "Forward-looking planning, analysis, and advisory turn reliable financials into clearer decisions and more profitable growth.",
      items: [
        "Budgeting",
        "Financial planning",
        "Cash-flow forecasting",
        "Profitability analysis",
        "Advisory & coaching",
      ],
      href: "/services/financial-management",
    },
    {
      number: "04",
      title: "Add-ons",
      kicker: "Everything in Proactive Financial Management, plus:",
      body:
        "Specialized tax, expense, and accounts-payable support expands the finance function when your business needs it.",
      items: [
        "Lodging tax filing",
        "Income tax prep support",
        "1099 preparation",
        "Expense management",
        "AP / vendor management",
      ],
      href: "/services/expense-management",
    },
  ],
  ctaLabel: "Learn more →",
  tierExpandLabel: "See inclusions",
  tierCollapseLabel: "Show less",
};

export const whyHostAllies = {
  eyebrow: "Why HostAllies",
  heading: "An accountable Ally, not just an outsourced bookkeeper.",
  intro:
    "HostAllies combines deep STR expertise, technology-enabled delivery, and clear human accountability. We take ownership of your financial operations so you can focus on growth.",
  pillars: [
    {
      number: "01",
      title: "Trustworthy financial operations",
      body:
        "Trust accounting, operations accounting, bookkeeping, and financial reporting built on disciplined processes and documented controls, not guesswork.",
    },
    {
      number: "02",
      title: "The finance function, handled",
      body:
        "From trust reconciliation through management financial reporting and owner statements, HostAllies takes responsibility for your recurring vacation rental financial operation.",
    },
    {
      number: "03",
      title: "Insight and improvement for profitable growth",
      body:
        "Beyond the books: coaching, actionable insight, and process improvement that help you protect margins and scale.",
    },
    {
      number: "04",
      title: "A financial Ally accountable to you",
      body:
        "A dedicated team that owns results, communicates clearly, and is accountable for the numbers, not just a vendor.",
    },
  ],
  callout: {
    title: "Your dedicated Ally",
    body:
      "A named account manager and delivery team accountable for your numbers, not a rotating cast of contractors.",
  },
};

export const howWeWork = {
  eyebrow: "How we work",
  heading: "A clear process from day one to ongoing cadence.",
  intro:
    "No vague onboarding. No \u201Ctrust the process.\u201D Here's exactly what happens when you work with HostAllies as your partner in short-term rental financial management.",
  steps: [
    {
      number: "01",
      title: "Discover",
      body:
        "We review your trust accounts, bank accounts, books, property management software, and homeowner reporting to understand where you stand and what needs fixing.",
    },
    {
      number: "02",
      title: "Align",
      body:
        "We set up reconciliation cadences, chart of accounts, statement templates, and reporting tailored to your business.",
    },
    {
      number: "03",
      title: "Execute",
      body:
        "Your Ally team takes over recurring financial operations, including bookkeeping, trust accounting, homeowner statements, and financial reporting.",
    },
    {
      number: "04",
      title: "Improve",
      body:
        "Monthly reporting and advisory sessions identify process improvements and opportunities to protect margins.",
    },
  ],
  cta: { label: "See the full process →", href: "/process/how-we-work" },
};

/**
 * RESULTS — attribution corrected per Vishaal on the call of 20 Aug 2026.
 *
 *  - Fabricated names ("Jordan L.", "Taylor B.", "Alex M.") REMOVED.
 *  - $50K case is Aggieland, which runs HOSTAWAY — Corey's build had it as
 *    Guesty. That was wrong and is corrected here.
 *  - SuperStay (75%) and Cohova (186 units) are both Guesty — correct as-is.
 *  - Client company names must NOT be published until written permission
 *    is confirmed. Descriptors only.
 */
export const results = {
  eyebrow: "Results",
  heading: "Work we're proud of.",
  intro:
    "Representative case studies from our work with leading STR property management companies.",
  caseStudies: [
    {
      descriptor: "60 units · Guesty PMS",
      title: "75% less time spent on accounting",
      body:
        "A 60-property operator replaced manual reconciliations, out-of-sync trust and operating books, and a three-week close with one financial source of truth and a month-end close under one week.",
      stats: [
        { value: "75%", label: "Less accounting time" },
        { value: "25\u201330%", label: "Lower accounting costs" },
        { value: "10\u201315%", label: "Profitability boost" },
      ],
      quote:
        "HostAllies gave us our time back. The books finally make sense, and our owners can feel the difference.",
      attribution: null, // name removed — fabricated
      internalRef: "SuperStay",
      evidenceStatus: "confirmed-by-founder",
    },
    {
      descriptor: "51 units · Hostaway PMS", // CORRECTED from Guesty
      title: "$50K trust-account correction uncovered",
      body:
        "A growing operator had inconsistent owner statements, incomplete expense tracking, and no dependable monthly close. HostAllies reconciled the trust accounts, corrected system rules, and surfaced the funds requiring a trust-to-operating transfer.",
      stats: [{ value: "$50K", label: "Identified for the correct transfer" }],
      quote:
        "We finally understood what the trust balances meant, where margin was leaking, and what to fix next.",
      attribution: null,
      internalRef: "Aggieland",
      evidenceStatus: "confirmed-by-founder",
    },
    {
      descriptor: "186 units · Guesty PMS",
      title: "Property-level P&L visibility across 186 units",
      body:
        "An enterprise PMS was surrounded by manual spreadsheets, disconnected processes, and limited performance insight. HostAllies rebuilt the chart of accounts and integrated the technology stack around one dependable financial source of truth.",
      stats: [
        { value: "186", label: "Units with property-level P&L visibility" },
      ],
      quote:
        "For the first time, our leadership team can see which properties perform, where costs move, and where to act.",
      attribution: null,
      internalRef: "Cohova",
      evidenceStatus: "confirmed-by-founder",
    },
  ],
};

/** All 20 platforms. Each links out to the vendor — credible outbound links. */
export const platforms = {
  eyebrow: "Experienced with",
  heading: "The systems your STR business already runs on.",
  intro:
    "We've worked across the major STR property-management systems and accounting platforms. We integrate with your existing stack. We don't ask you to switch.",
  items: [
    {
      name: "Guesty",
      url: "https://www.guesty.com/",
      logo: "guesty.png",
    },
    {
      name: "Track",
      url: "https://trackhospitality.com/",
      logo: "track.png",
    },
    {
      name: "Hostaway",
      url: "https://www.hostaway.com/",
      logo: "hostaway.svg",
    },
    {
      name: "Hospitable",
      url: "https://hospitable.com/",
      logo: "hospitable.png",
    },
    {
      name: "OwnerRez",
      url: "https://www.ownerrez.com/",
      logo: "ownerrez.png",
    },
    {
      name: "Lodgify",
      url: "https://www.lodgify.com/",
      logo: "lodgify.jpeg",
    },
    {
      name: "Avantio",
      url: "https://www.avantio.com/",
      logo: "avantio.png",
    },
    {
      name: "Hostfully",
      url: "https://www.hostfully.com/",
      logo: "hostfully.png",
    },
    {
      name: "Breezeway",
      url: "https://www.breezeway.io/",
      logo: "breezeway.png",
    },
    {
      name: "QuickBooks",
      url: "https://quickbooks.intuit.com/",
      logo: "quickbooks.png",
    },
    { name: "Xero", url: "https://www.xero.com/", logo: "xero.png" },
    {
      name: "Sage Intacct",
      url: "https://www.sage.com/en-us/sage-business-cloud/intacct/",
      logo: "sage-intacct.png",
    },
    { name: "Topkey", url: "https://www.topkey.io/", logo: "topkey.png" },
    {
      name: "VRPlatform",
      url: "https://www.vrplatform.app/",
      logo: "vrplatform-transparent.png",
    },
    {
      name: "Clearing",
      url: "https://www.getclearing.co/",
      logo: "clearing.png",
    },
    {
      name: "TurboTax",
      url: "https://turbotax.intuit.com/",
      logo: "turbotax-transparent.png",
    },
    {
      name: "Lynnbrook Group",
      url: "https://www.lynnbrookgroup.com/",
      logo: "lynnbrook-group-transparent.png",
    },
    { name: "Stripe", url: "https://stripe.com/", logo: "stripe.png" },
    {
      name: "GuestyPay",
      url: "https://www.guesty.com/features/guestypay/",
      logo: "guestypay.png",
    },
    { name: "Ramp", url: "https://ramp.com/", logo: "ramp.png" },
  ],
};

export const yourAllies = {
  eyebrow: "Your Allies",
  heading: "A named team accountable for your numbers.",
  body:
    "When you work with HostAllies, you get a dedicated account manager and a delivery team, not a rotating cast of contractors or a faceless service. Your Ally knows your business, owns your results, and is accountable to you.",
  points: [
    "Dedicated account manager who knows your portfolio",
    "Delivery team with deep STR accounting expertise",
    "Clear communication and regular updates without surprises",
  ],
  image: {
    src: "/hostallies/team-photo.jpg",
    alt: "Team members collaborating around a table",
  },
};

export const finalCta = {
  eyebrow: "Get started",
  heading: "Book a 30-minute consultation with an Ally.",
  body:
    "Tell us about your portfolio and your back-office challenges. We'll show you exactly how HostAllies can take ownership of your financial operations.",
  primaryCta: { label: "Book a 30-minute consultation", href: "/consultation" },
  secondaryCta: {
    label: "Request a trust accounting assessment",
    href: "/trust-accounting-assessment",
  },
};

export const footer = {
  tagline:
    "Reliable numbers, clear control. An accountable financial Ally for profitable growth.",
  copyright: "© 2026 HostAllies. All rights reserved.",
};

export type HomeCaseStudy = (typeof results.caseStudies)[number];

/** Case studies approved for the homepage Results section. */
export function getConfirmedHomeCaseStudies(): HomeCaseStudy[] {
  return results.caseStudies.filter(
    (study) => study.evidenceStatus === "confirmed-by-founder",
  );
}

/** Client logos cleared for public publication. */
export function getConfirmedTrustedClients() {
  return trustedBy.clients.filter((client) => client.status === "confirmed");
}