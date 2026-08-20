import type { Metadata } from "next";
import {
  getServicePage,
  getAllServicePageSlugs,
  type ServicePageContent,
} from "@/content/services";
import { buildPageMetadata } from "@/lib/seo";

export type { ServicePageContent };

export function getService(slug: string): ServicePageContent | undefined {
  return getServicePage(slug);
}

export function getAllServiceSlugs(): string[] {
  return getAllServicePageSlugs();
}

export function serviceMetadata(slug: string): Metadata {
  const service = getService(slug);
  if (!service) return {};
  return buildPageMetadata({
    title: service.meta.title,
    description: service.meta.description,
    path: `/services/${slug}`,
  });
}

/** Resolve related service cards from slug list — skips unknown slugs. */
export function getRelatedServices(
  slugs: readonly string[],
  currentSlug: string,
): ServicePageContent[] {
  return slugs
    .filter((s) => s !== currentSlug)
    .map((s) => getService(s))
    .filter((s): s is ServicePageContent => s !== undefined);
}
