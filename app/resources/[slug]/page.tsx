import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/Button";
import { ArticleJsonLd, BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { buildPageMetadata } from "@/lib/seo";
import {
  getAllPosts,
  getPost,
  getRelatedPosts,
  formatDate,
} from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts(false).map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return buildPageMetadata({
    title: post.seoTitle,
    description: post.excerpt,
    path: `/resources/${post.slug}`,
    ogType: "article",
    ogImage: post.heroImage,
    publishedTime: post.date,
    noindex: post.hidden,
  });
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
  if (!post || post.hidden) notFound();

  const related = getRelatedPosts(slug, 3);
  const videoId = post.relatedVideo ? youtubeId(post.relatedVideo) : null;

  return (
    <>
      <ArticleJsonLd
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        date={post.date}
        image={post.heroImage || undefined}
      />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources/blog" },
          { name: post.title, url: `/resources/${post.slug}` },
        ]}
      />

      <article className="pb-8">
        {/* Header */}
        <header className="border-b border-moss bg-white">
          <div className="container py-14 sm:py-16">
            <div className="mx-auto max-w-prose">
              <div className="flex flex-wrap items-center gap-3 text-label text-moss-dark">
                <Link href="/resources/blog" className="text-orange-dark hover:underline">
                  Resources
                </Link>
                <span aria-hidden="true">·</span>
                <span className="text-orange-dark">{post.category}</span>
                <span aria-hidden="true">·</span>
                <span>{post.readTime}</span>
              </div>
              <h1 className="mt-5">{post.title}</h1>
              <div className="mt-5 flex items-center gap-3 text-body text-pine">
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
            <div className="mx-auto max-w-4xl overflow-hidden rounded-card border border-moss">
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
            className="article mx-auto max-w-prose"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {videoId && (
            <div className="mx-auto mt-12 max-w-prose">
              <div className="overflow-hidden rounded-card border border-moss">
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
          <div className="mx-auto mt-14 max-w-prose rounded-card border border-moss bg-white p-8 text-center">
            <h2 className="font-heading text-h2">
              Ready to make your numbers work for you?
            </h2>
            <p className="mx-auto mt-3 max-w-prose text-body text-pine">
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
        <section className="border-t border-moss bg-white">
          <div className="container py-16">
            <h2 className="text-h2">Read next</h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/resources/${p.slug}`}
                  className="group flex flex-col rounded-card border border-moss bg-white p-6 transition-colors hover:border-orange-dark"
                >
                  <div className="text-label text-orange-dark">
                    {p.category}
                  </div>
                  <h3 className="mt-3 text-h3 group-hover:text-orange-dark">
                    {p.title}
                  </h3>
                  <span className="mt-4 text-xs text-moss-dark">
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
