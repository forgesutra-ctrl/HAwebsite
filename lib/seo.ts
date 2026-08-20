import type { Metadata } from "next";

const PRODUCTION_URL = "https://www.hostallies.com";

export const SEO_TITLE_MAX = 60;
export const SEO_DESCRIPTION_MAX = 155;
export const SEO_BRAND_SUFFIX = " | HostAllies";

export const DEFAULT_OG_IMAGE = "/brand/hostallies-logo-orange.png";

/**
 * Resolve the public site URL for the current deployment.
 * Preview and local builds must not canonicalise to production.
 */
export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return PRODUCTION_URL;
}

/** True on production deployments that should be indexed. */
export function isProductionSite(): boolean {
  return shouldAllowSearchIndexing();
}

/**
 * Robots indexing gate — keep non-production builds out of search indexes.
 *
 * - `VERCEL_ENV=preview` or local `NODE_ENV=development` → never index or follow
 * - `VERCEL_ENV=production` (and self-hosted `NODE_ENV=production`) → index and follow
 * - Per-page `noindex` (e.g. `/trustkeeping` until launch) applies in every environment
 */
export function shouldAllowSearchIndexing(): boolean {
  if (process.env.VERCEL_ENV === "preview") return false;
  if (process.env.NODE_ENV === "development") return false;
  if (process.env.VERCEL_ENV === "production") return true;
  // Self-hosted production without Vercel env vars
  return process.env.NODE_ENV === "production";
}

export function buildRobotsMetadata(pageNoindex = false): Metadata["robots"] {
  if (pageNoindex || !shouldAllowSearchIndexing()) {
    return { index: false, follow: false };
  }
  return { index: true, follow: true };
}

/** Pattern: "Primary search intent | HostAllies" */
export function buildPageTitle(titlePhrase: string): string {
  return `${titlePhrase}${SEO_BRAND_SUFFIX}`;
}

export type PageSeoInput = {
  /** Search phrase before " | HostAllies" — full title must be ≤ {@link SEO_TITLE_MAX} chars. */
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  noindex?: boolean;
  publishedTime?: string;
};

function normalizePath(path: string): string {
  if (!path.startsWith("/")) return `/${path}`;
  return path;
}

export function assertSeoLimits(
  path: string,
  title: string,
  description: string,
): void {
  if (title.length > SEO_TITLE_MAX) {
    throw new Error(
      `SEO title too long (${title.length}/${SEO_TITLE_MAX}) for ${path}: "${title}"`,
    );
  }
  if (description.length > SEO_DESCRIPTION_MAX) {
    throw new Error(
      `SEO description too long (${description.length}/${SEO_DESCRIPTION_MAX}) for ${path}: "${description}"`,
    );
  }
}

/** Build complete Metadata with canonical, Open Graph, and Twitter cards. */
export function buildPageMetadata(input: PageSeoInput): Metadata {
  const title = buildPageTitle(input.title);
  assertSeoLimits(input.path, title, input.description);
  const path = normalizePath(input.path);
  const ogImage = input.ogImage ?? DEFAULT_OG_IMAGE;

  return {
    title,
    description: input.description,
    alternates: { canonical: path },
    openGraph: {
      type: input.ogType ?? "website",
      title,
      description: input.description,
      url: path,
      siteName: "HostAllies",
      locale: "en_US",
      images: [{ url: ogImage, alt: "HostAllies" }],
      ...(input.publishedTime ? { publishedTime: input.publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: input.description,
      images: [ogImage],
    },
    robots: buildRobotsMetadata(Boolean(input.noindex)),
  };
}

/** Hostname for robots.txt — derived from the deployment URL. */
export function getSiteHost(): string {
  try {
    return new URL(getSiteUrl()).host;
  } catch {
    return "www.hostallies.com";
  }
}

/** Absolute URL helper for JSON-LD and sitemap entries. */
export function absoluteUrl(path: string): string {
  const base = getSiteUrl();
  const normalized = normalizePath(path);
  return `${base}${normalized}`;
}
