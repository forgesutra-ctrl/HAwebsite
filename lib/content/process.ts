import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export type ProcessContent = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  heroIntro: string;
  variant: "about" | "team" | "process";
  seo: {
    title: string;
  };
};

export const processPages: Record<string, ProcessContent> = {
  "how-we-work": {
    slug: "how-we-work",
    eyebrow: "How We Work",
    title: "Onboarding without the overwhelm.",
    description:
      "Property managers: discover, align, execute, and improve — structured onboarding for trust accounting, bookkeeping, and reporting without overwhelm.",
    heroIntro:
      "We listen first, design a tailored plan, then handle implementation with the support you need to scale — without disrupting your operation.",
    variant: "process",
    seo: {
      title: "How HostAllies Works With STR Teams",
    },
  },
  "about-hostallies": {
    slug: "about-hostallies",
    eyebrow: "About HostAllies",
    title: "We built the back office we wished we'd had.",
    description:
      "Built by STR operators: HostAllies gives property managers the turn-key back office we wished we had managing vacation rental portfolios.",
    heroIntro:
      "HostAllies started inside a short-term rental business, not a spreadsheet. After a decade acquiring and managing STR portfolios across US markets, our founder knew exactly where the back office breaks — and built the turn-key solution to fix it.",
    variant: "about",
    seo: {
      title: "About HostAllies STR Finance Team",
    },
  },
  "meet-the-team": {
    slug: "meet-the-team",
    eyebrow: "Meet the Team",
    title: "The leadership team behind HostAllies.",
    description:
      "STR property managers: meet the leadership team behind trust accounting, bookkeeping, and financial management at HostAllies.",
    heroIntro:
      "Dedicated to helping you scale profitably — with the operational and financial depth STR portfolios demand.",
    variant: "team",
    seo: {
      title: "Meet the HostAllies Leadership Team",
    },
  },
};

export const onboardingSteps = [
  {
    step: "01",
    title: "Inquiry",
    body: "Tell us about your business and goals. We listen and learn about your needs to shape a personalized approach.",
  },
  {
    step: "02",
    title: "Plan",
    body: "We design a tailored action plan that aligns with your goals and delivers immediate value.",
  },
  {
    step: "03",
    title: "Execution",
    body: "Our experts handle implementation with ongoing support, so you can concentrate on scaling.",
  },
];

export function getProcess(slug: string): ProcessContent | undefined {
  return processPages[slug];
}

export function getAllProcessSlugs(): string[] {
  return Object.keys(processPages);
}

export function processMetadata(slug: string): Metadata {
  const item = getProcess(slug);
  if (!item) return {};
  return buildPageMetadata({
    title: item.seo.title,
    description: item.description,
    path: `/process/${slug}`,
  });
}
