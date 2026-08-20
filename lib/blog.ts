import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

export type PostMeta = {
  title: string;
  /** Search-intent phrase for "{seoTitle} | HostAllies" — required for SEO limits. */
  seoTitle: string;
  slug: string;
  date: string;
  author: string;
  readTime: string;
  excerpt: string;
  heroImage: string;
  category: string;
  relatedVideo?: string;
  hidden: boolean;
};

export type Post = PostMeta & { html: string };

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

marked.setOptions({ gfm: true, breaks: false });

function readRaw(slug: string) {
  const file = path.join(BLOG_DIR, `${slug}.md`);
  return fs.readFileSync(file, "utf8");
}

function normalizeDate(raw: unknown): string {
  // YAML parses an unquoted `date: 2026-04-22` into a Date object, not a string.
  if (raw instanceof Date) return raw.toISOString().slice(0, 10);
  if (typeof raw === "string") return raw.slice(0, 10);
  return "";
}

function toMeta(data: Record<string, unknown>, slug: string): PostMeta {
  return {
    title: String(data.title ?? ""),
    seoTitle: String(data.seoTitle ?? data.title ?? ""),
    slug: String(data.slug ?? slug),
    date: normalizeDate(data.date),
    author: String(data.author ?? "Team HostAllies"),
    readTime: String(data.readTime ?? ""),
    excerpt: String(data.excerpt ?? ""),
    heroImage: String(data.heroImage ?? ""),
    category: String(data.category ?? "Guides"),
    relatedVideo: data.relatedVideo ? String(data.relatedVideo) : undefined,
    hidden: Boolean(data.hidden),
  };
}

export function getAllSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

/** All posts, newest first. `includeHidden` controls whether the hidden post is returned. */
export function getAllPosts(includeHidden = false): PostMeta[] {
  return getAllSlugs()
    .map((slug) => {
      const { data } = matter(readRaw(slug));
      return toMeta(data, slug);
    })
    .filter((p) => includeHidden || !p.hidden)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPost(slug: string): Post | null {
  try {
    const { data, content } = matter(readRaw(slug));
    const meta = toMeta(data, slug);
    const html = marked.parse(content) as string;
    return { ...meta, html };
  } catch {
    return null;
  }
}

/** Up to `n` other visible posts for a "read next" strip. */
export function getRelatedPosts(slug: string, n = 3): PostMeta[] {
  return getAllPosts(false)
    .filter((p) => p.slug !== slug)
    .slice(0, n);
}

export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
