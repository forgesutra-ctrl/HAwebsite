import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllPosts } from "@/lib/blog";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.8 },
    {
      url: `${base}/services/financial-management`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${base}/services/revenue-management`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${base}/partnerships`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/resources`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${base}/contact`, changeFrequency: "yearly", priority: 0.8 },
  ];

  // Only public posts belong in the sitemap (the hidden post stays out).
  const postRoutes: MetadataRoute.Sitemap = getAllPosts(false).map((p) => ({
    url: `${base}/resources/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...postRoutes];
}
