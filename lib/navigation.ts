/**
 * Approved information architecture — single source for header, footer, and sitemap.
 */

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavDropdown = {
  label: string;
  items: NavLink[];
};

export const primaryCta = {
  label: "Book a 30-minute consultation",
  href: "/consultation",
} as const;

export const servicesNav: NavDropdown = {
  label: "Services",
  items: [
    {
      label: "Trust Accounting",
      href: "/services/trust-accounting",
      description: "Audit-ready fund separation and reconciliation.",
    },
    {
      label: "Bookkeeping",
      href: "/services/bookkeeping",
      description: "Day-to-day books managed with STR precision.",
    },
    {
      label: "Owner Statements",
      href: "/services/owner-statements",
      description: "Timely statements your owners understand.",
    },
    {
      label: "Financial Management",
      href: "/services/financial-management",
      description: "End-to-end back-office financial operations.",
    },
    {
      label: "Expense Management",
      href: "/services/expense-management",
      description: "Controlled spending across your portfolio.",
    },
    {
      label: "Reporting & Advisory",
      href: "/services/reporting-advisory",
      description: "Insights and guidance for profitable growth.",
    },
    {
      label: "Tax Preparation",
      href: "/services/tax-preparation",
      description: "Income and lodging tax handled by STR specialists.",
    },
    {
      label: "Operations Accounting",
      href: "/services/operations-accounting",
      description: "Operational accounting aligned to how you run.",
    },
  ],
};

export const solutionsNav: NavDropdown = {
  label: "Solutions",
  items: [
    {
      label: "Short-Term Rentals",
      href: "/solutions/short-term-rentals",
      description: "Back office built for STR property managers.",
    },
    {
      label: "Cohosting",
      href: "/solutions/cohosting",
      description: "Financial clarity for cohosting operators.",
    },
    {
      label: "Arbitrage",
      href: "/solutions/arbitrage",
      description: "Books that keep pace with arbitrage portfolios.",
    },
    {
      label: "Owner Operator",
      href: "/solutions/owner-operator",
      description: "Support for owner-operators scaling their rentals.",
    },
  ],
};

export const processNav: NavDropdown = {
  label: "Process",
  items: [
    {
      label: "How We Work",
      href: "/process/how-we-work",
      description: "Our onboarding and delivery approach.",
    },
    {
      label: "About HostAllies",
      href: "/process/about-hostallies",
      description: "Our story, mission, and credentials.",
    },
    {
      label: "Meet the Team",
      href: "/process/meet-the-team",
      description: "The leadership behind your back office.",
    },
  ],
};

export const resourcesNav: NavDropdown = {
  label: "Resources",
  items: [
    { label: "Blog", href: "/resources/blog", description: "Guides for STR operators." },
    {
      label: "Case Studies",
      href: "/resources/case-studies",
      description: "How clients scale with HostAllies.",
    },
    { label: "FAQs", href: "/resources/faqs", description: "Common questions answered." },
    { label: "Careers", href: "/resources/careers", description: "Join the HostAllies team." },
    { label: "Contact", href: "/contact", description: "Reach us directly." },
  ],
};

export const topLevelLinks: NavLink[] = [
  { label: "Pricing", href: "/pricing" },
  { label: "Trustkeeping", href: "/trustkeeping" },
];

/** Desktop + mobile primary navigation (dropdowns + top-level links). */
export const mainNavigation = {
  dropdowns: [servicesNav, solutionsNav, processNav, resourcesNav],
  links: topLevelLinks,
  cta: primaryCta,
} as const;

export const serviceSlugs = servicesNav.items.map((item) =>
  item.href.replace("/services/", "")
);

export const solutionSlugs = solutionsNav.items.map((item) =>
  item.href.replace("/solutions/", "")
);

export const processSlugs = processNav.items.map((item) =>
  item.href.replace("/process/", "")
);

export function getServiceBySlug(slug: string): NavLink | undefined {
  return servicesNav.items.find((item) => item.href === `/services/${slug}`);
}

export function getSolutionBySlug(slug: string): NavLink | undefined {
  return solutionsNav.items.find((item) => item.href === `/solutions/${slug}`);
}

export function getProcessBySlug(slug: string): NavLink | undefined {
  return processNav.items.find((item) => item.href === `/process/${slug}`);
}
