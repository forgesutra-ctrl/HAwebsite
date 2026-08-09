import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { BlogPostingJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import {
  getAllSlugs,
  getPost,
  getRelatedPosts,
  formatDate,
} from "@/lib/blog";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/resources/${post.slug}` },
    robots: post.hidden ? { index: false, follow: true } : undefined,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      url: `/resources/${post.slug}`,
      publishedTime: post.date,
      images: post.heroImage ? [post.heroImage] : undefined,
    },
  };
}

function youtubeId(url: string): string | null {
  const m = url.match(/(?:youtu\.be\/|v=)([\w-]{11})/);
  return m ? m[1] : null;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 3);
  const videoId = post.relatedVideo ? youtubeId(post.relatedVideo) : null;

  return (
    <>
      <BlogPostingJsonLd
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        date={post.date}
        image={post.heroImage || undefined}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
          { name: post.title, url: `/resources/${post.slug}` },
        ]}
      />

      <article className="pb-8">
        {/* Header */}
        <header className="border-b border-rule">
          <div className="container py-14 sm:py-16">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
                <Link href="/resources" className="text-ember hover:underline">
                  Resources
                </Link>
                <span aria-hidden="true">·</span>
                <span className="text-ember">{post.category}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="mt-5 text-3xl leading-[1.1] sm:text-4xl lg:text-[3rem]">
                {post.title}
              </h1>
              <div className="mt-5 flex items-center gap-3 text-sm text-ink-soft">
                <span>{post.author}</span>
                <span aria-hidden="true">·</span>
                <time dateTime={post.date}>{formatDate(post.date)}</time>
              </div>
            </div>
          </div>
        </header>

        {/* Hero image */}
        {post.heroImage && (
          <div className="container pt-10">
            <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-rule">
              <Image
                src={post.heroImage}
                alt=""
                width={1200}
                height={675}
                priority
                className="h-auto w-full"
              />
            </div>
          </div>
        )}

        {/* Body */}
        <div className="container pt-12">
          <div
            className="article mx-auto max-w-3xl"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {videoId && (
            <div className="mx-auto mt-12 max-w-3xl">
              <div className="overflow-hidden rounded-2xl border border-rule">
                <div className="relative aspect-video">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${videoId}`}
                    title="Related webinar"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Inline CTA */}
          <div className="mx-auto mt-14 max-w-3xl rounded-2xl border border-rule bg-surface-2 p-8 text-center">
            <h2 className="font-serif text-2xl">
              Ready to make your numbers work for you?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              HostAllies builds the financial reporting and operational
              accounting systems that make property-level profitability visible.
            </p>
            <div className="mt-6">
              <ButtonLink href="/contact" arrow>
                Book a free consultation
              </ButtonLink>
            </div>
          </div>
        </div>
      </article>

      {/* Read next */}
      {related.length > 0 && (
        <section className="border-t border-rule bg-surface-2">
          <div className="container py-16">
            <h2 className="text-2xl sm:text-3xl">Read next</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/resources/${p.slug}`}
                  className="group flex flex-col rounded-2xl border border-rule bg-surface p-6 transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
                >
                  <div className="font-mono text-[11px] uppercase tracking-[0.1em] text-ember">
                    {p.category}
                  </div>
                  <h3 className="mt-3 text-lg leading-snug text-ink group-hover:text-ember">
                    {p.title}
                  </h3>
                  <span className="mt-4 font-mono text-xs text-ink-faint">
                    {formatDate(p.date)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
