/**
 * Leadership team — the canonical, de-duplicated version.
 * Anmol Singh is "Financial Accounting Lead" (the live site mislabels him on /about-us).
 */

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  /** One-line credential for public proof sections — sourced from bio, not invented. */
  credentialHighlight: string;
  image?: string; // real photo; omit for monogram treatment
  initials: string;
};

export const team: TeamMember[] = [
  {
    name: "Vishaal Jayaswal",
    role: "Founder & CEO",
    initials: "VJ",
    image: "/images/team/vishaal-jayaswal.jpg",
    bio: "Vishaal has spent the last 25 years as a revenue management and growth strategy expert, helping companies across the consumer, digital, retail, auto, and banking sectors. He also has 11 years of short-term rental property management experience, acquiring and building his STR portfolio across multiple US markets. He has mentored many STR start-ups, and created HostAllies to give property managers the turn-key back office he wished he'd had.",
    credentialHighlight:
      "25 years in revenue management and growth strategy · 11 years operating STR portfolios across US markets",
  },
  {
    name: "Yina Mitchell",
    role: "Business Development Lead",
    initials: "YM",
    image: "/images/team/yina-mitchell.jpg",
    bio: "Yina is a strategic growth advisor with 20 years of experience helping startups and Fortune 500s scale smarter. Her background spans consulting, corporate strategy, and innovation, with deep expertise in strategic planning, go-to-market, and operational optimization. She has worked across industries, including consumer services, media, and tech.",
    credentialHighlight:
      "20 years in strategic planning, go-to-market, and operational optimization",
  },
  {
    name: "Robin Anderson",
    role: "Trust Accounting Lead",
    initials: "RA",
    // Interim scraped headshot until the client supplies a final photo.
    image: "/images/team/robin-anderson-avatar.png",
    bio: "Robin has 14 years of experience in accounting, specializing in trust accounting for vacation rental property management companies. She has worked with 4 different property management companies, her last role being with Gather Vacations, which manages 400 short-term rentals. Robin holds an MBA in Accounting from the University of Phoenix.",
    credentialHighlight:
      "14 years in trust accounting for vacation rental PM companies · MBA in Accounting, University of Phoenix",
  },
  {
    name: "Anmol Singh",
    role: "Financial Accounting Lead",
    initials: "AS",
    // Interim scraped headshot until the client supplies a final photo.
    image: "/images/team/anmol-singh-avatar.png",
    bio: "Anmol is a Financial Accounting Expert with a Postgraduate Degree in Accounting and experience as a Senior Financial Accountant at a US-based CPA firm. His expertise spans year-end accounting, financial review and analysis, fixed assets, payroll, and client onboarding. Anmol is QuickBooks certified and known for delivering accurate, efficient accounting tailored to each client's needs.",
    credentialHighlight:
      "QuickBooks certified · Senior Financial Accountant, US-based CPA firm · Postgraduate Degree in Accounting",
  },
];
