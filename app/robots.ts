import type { MetadataRoute } from "next";
import { absoluteUrl, isProductionSite, getSiteHost } from "@/lib/seo";

export default function robots(): MetadataRoute.Robots {
  const sitemap = absoluteUrl("/sitemap.xml");

  if (!isProductionSite()) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      sitemap,
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/partnerships", "/trustkeeping"],
    },
    sitemap,
    host: getSiteHost(),
  };
}
