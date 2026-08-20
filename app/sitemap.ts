import type { MetadataRoute } from "next";
import { absoluteUrl, isProductionSite } from "@/lib/seo";
import { getAllPosts } from "@/lib/blog";
import {
  serviceSlugs,
  solutionSlugs,
  processSlugs,
  resourcesNav,
} from "@/lib/navigation";

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isProductionSite()) {
    return [];
  }

  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), changeFrequency: "weekly", priority: 1, lastModified: now },
    { url: absoluteUrl("/pricing"), changeFrequency: "monthly", priority: 0.8, lastModified: now },
    { url: absoluteUrl("/consultation"), changeFrequency: "monthly", priority: 0.9, lastModified: now },
    { url: absoluteUrl("/contact"), changeFrequency: "yearly", priority: 0.8, lastModified: now },
    {
      url: absoluteUrl("/trust-accounting-assessment"),
      changeFrequency: "monthly",
      priority: 0.85,
      lastModified: now,
    },
    ...resourcesNav.items
      .filter((item) => item.href !== "/partnerships")
      .map((item) => ({
        url: absoluteUrl(item.href),
        changeFrequency: "monthly" as const,
        priority: item.href.includes("/blog") ? 0.7 : 0.6,
        lastModified: now,
      })),
  ];

  const serviceRoutes = serviceSlugs.map((slug) => ({
    url: absoluteUrl(`/services/${slug}`),
    changeFrequency: "monthly" as const,
    priority: slug === "trust-accounting" ? 0.95 : 0.8,
    lastModified: now,
  }));

  const solutionRoutes = solutionSlugs.map((slug) => ({
    url: absoluteUrl(`/solutions/${slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: now,
  }));

  const processRoutes = processSlugs.map((slug) => ({
    url: absoluteUrl(`/process/${slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
    lastModified: now,
  }));

  const postRoutes: MetadataRoute.Sitemap = getAllPosts(false).map((p) => ({
    url: absoluteUrl(`/resources/${p.slug}`),
    lastModified: p.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...solutionRoutes,
    ...processRoutes,
    ...postRoutes,
  ];
}
