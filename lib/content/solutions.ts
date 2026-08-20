import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export type SolutionContent = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  heroIntro: string;
  highlights: { title: string; body: string }[];
  seo: {
    title: string;
  };
};

function solution(
  slug: string,
  eyebrow: string,
  title: string,
  heroIntro: string,
  highlights: { title: string; body: string }[],
  seo: { title: string },
  description: string,
): SolutionContent {
  return {
    slug,
    eyebrow,
    title,
    description,
    heroIntro,
    highlights,
    seo,
  };
}

export const solutions: Record<string, SolutionContent> = {
  "short-term-rentals": solution(
    "short-term-rentals",
    "Short-Term Rentals",
    "Back office built for STR property managers.",
    "Trust accounting, owner statements, reconciliation, and tax — handled by operators who speak your language.",
    [
      {
        title: "Portfolio-scale delivery",
        body: "Processes that hold from a handful of units to hundreds — without losing precision.",
      },
      {
        title: "Owner-ready reporting",
        body: "Statements and reporting that keep owners confident as you grow.",
      },
      {
        title: "Tool-native execution",
        body: "We work inside Guesty, Hostfully, Track, QuickBooks, and the rest of your stack.",
      },
    ],
    { title: "STR Back Office for Property Managers" },
    "Property managers: trust accounting, owner statements, reconciliation, and reporting at portfolio scale — handled by STR finance operators.",
  ),
  cohosting: solution(
    "cohosting",
    "Cohosting",
    "Financial clarity for cohosting operators.",
    "Clean books and owner communication for cohosting models where trust and transparency matter most.",
    [
      {
        title: "Clear fund flows",
        body: "Trust accounting and payouts structured for cohosting arrangements.",
      },
      {
        title: "Owner communication",
        body: "Reporting that makes cohosting relationships easier to manage.",
      },
      {
        title: "Scalable support",
        body: "Back office that grows as you add owners and properties.",
      },
    ],
    { title: "Cohosting Financial Management" },
    "Cohosting operators: clean books, clear fund flows, and owner reporting built for arrangements where trust and transparency matter most.",
  ),
  arbitrage: solution(
    "arbitrage",
    "Arbitrage",
    "Books that keep pace with arbitrage portfolios.",
    "Fast-moving portfolios need fast, accurate close — we handle the financial complexity so you can focus on deals.",
    [
      {
        title: "Unit-level visibility",
        body: "Reporting that shows what's working property by property.",
      },
      {
        title: "Expense discipline",
        body: "Clean categorization and controls across a growing portfolio.",
      },
      {
        title: "Tax-ready records",
        body: "Documentation structured for lodging tax and income tax compliance.",
      },
    ],
    { title: "STR Arbitrage Portfolio Accounting" },
    "Arbitrage operators: fast monthly close, unit-level visibility, expense discipline, and tax-ready records across a growing portfolio.",
  ),
  "owner-operator": solution(
    "owner-operator",
    "Owner Operator",
    "Support for owner-operators scaling their rentals.",
    "Turn-key back-office support for operators who own and manage — without building an in-house finance team.",
    [
      {
        title: "Operator empathy",
        body: "Built by STR operators who know where the back office breaks.",
      },
      {
        title: "Right-sized packages",
        body: "Support scoped to your portfolio, not a one-size-fits-all outsource.",
      },
      {
        title: "Growth-ready foundation",
        body: "Financial infrastructure that holds as you add doors.",
      },
    ],
    { title: "Owner-Operator STR Back Office" },
    "Owner-operators: turn-key trust accounting and financial support without building an in-house finance team as you add doors.",
  ),
};

export function getSolution(slug: string): SolutionContent | undefined {
  return solutions[slug];
}

export function getAllSolutionSlugs(): string[] {
  return Object.keys(solutions);
}

export function solutionMetadata(slug: string): Metadata {
  const item = getSolution(slug);
  if (!item) return {};
  return buildPageMetadata({
    title: item.seo.title,
    description: item.description,
    path: `/solutions/${slug}`,
  });
}
