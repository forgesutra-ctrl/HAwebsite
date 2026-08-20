import { getAllPosts } from "@/lib/blog";
import { getAllProcessSlugs, processMetadata } from "@/lib/content/process";
import { getAllServiceSlugs, serviceMetadata } from "@/lib/content/services";
import {
  getAllSolutionSlugs,
  solutionMetadata,
} from "@/lib/content/solutions";
import {
  assertSeoLimits,
  buildPageTitle,
  SEO_DESCRIPTION_MAX,
  SEO_TITLE_MAX,
} from "@/lib/seo";
import type { Metadata } from "next";
import { staticPageSeo } from "@/lib/seo/pages";

type SeoEntry = {
  path: string;
  title: string;
  description: string;
};

function readMetadata(meta: Metadata, fallbackPath: string): SeoEntry {
  const canonical = meta.alternates?.canonical;
  const path =
    typeof canonical === "string"
      ? canonical
      : typeof canonical === "object" && canonical && "url" in canonical
        ? String(canonical.url)
        : fallbackPath;
  const title = typeof meta.title === "string" ? meta.title : "";
  const description =
    typeof meta.description === "string" ? meta.description : "";
  return { path, title, description };
}

/** Collect every route's title and description for audit checks. */
export function collectAllSeoEntries(): SeoEntry[] {
  const entries: SeoEntry[] = [];

  for (const meta of Object.values(staticPageSeo)) {
    entries.push(readMetadata(meta, "/"));
  }

  for (const slug of getAllServiceSlugs()) {
    entries.push(readMetadata(serviceMetadata(slug), `/services/${slug}`));
  }

  for (const slug of getAllSolutionSlugs()) {
    entries.push(readMetadata(solutionMetadata(slug), `/solutions/${slug}`));
  }

  for (const slug of getAllProcessSlugs()) {
    entries.push(readMetadata(processMetadata(slug), `/process/${slug}`));
  }

  for (const post of getAllPosts(true)) {
    const title = buildPageTitle(post.seoTitle);
    entries.push({
      path: `/resources/${post.slug}`,
      title,
      description: post.excerpt,
    });
  }

  return entries;
}

/** Fail the build when any title or description exceeds SEO limits. */
export function validateAllSeo(): void {
  const errors: string[] = [];

  for (const entry of collectAllSeoEntries()) {
    try {
      assertSeoLimits(entry.path, entry.title, entry.description);
    } catch (error) {
      if (error instanceof Error) errors.push(error.message);
    }
  }

  if (errors.length > 0) {
    throw new Error(
      `SEO validation failed (${errors.length} issue${
        errors.length === 1 ? "" : "s"
      }):\n${errors.join("\n")}`,
    );
  }
}

export const seoLimits = {
  titleMax: SEO_TITLE_MAX,
  descriptionMax: SEO_DESCRIPTION_MAX,
} as const;
