import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getAllPosts, formatDate } from "@/lib/blog";

function Meta({
  category,
  readTime,
  date,
}: {
  category: string;
  readTime: string;
  date: string;
}) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-label text-moss-dark">
      <span className="text-orange-dark">{category}</span>
      <span aria-hidden="true">·</span>
      <span>{readTime}</span>
      <span aria-hidden="true">·</span>
      <span>{formatDate(date)}</span>
    </div>
  );
}

function LedgerPlaceholder({ small = false }: { small?: boolean }) {
  return (
    <div className="absolute inset-0 grid place-items-center bg-white">
      <div className="absolute inset-0 opacity-60 ruled" aria-hidden="true" />
      <span
        className={`relative font-heading italic text-orange-dark ${
          small ? "text-h3" : "text-h1"
        }`}
      >
        HostAllies
      </span>
    </div>
  );
}

export function BlogIndex() {
  const posts = getAllPosts();
  const [feature, ...rest] = posts;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources/blog" },
          { name: "Blog", url: "/resources/blog" },
        ]}
      />

      <section className="border-b border-moss bg-white">
        <div className="container py-16 sm:py-20">
          <div className="max-w-prose">
            <Eyebrow>Blog</Eyebrow>
            <h1 className="mt-6">Financial clarity for STR property managers.</h1>
            <p className="mt-6 text-body text-pine lg:text-h3">
              Practical guides on trust accounting, lodging tax, and the
              profitability metrics that reveal what your numbers are really
              saying.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16 sm:py-20">
        {feature && (
          <Link
            href={`/resources/${feature.slug}`}
            className="group grid overflow-hidden rounded-panel border border-moss bg-white transition-colors hover:border-orange-dark lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-sand lg:aspect-auto">
              {feature.heroImage ? (
                <Image
                  src={feature.heroImage}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  priority
                />
              ) : (
                <LedgerPlaceholder />
              )}
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <Meta
                category={feature.category}
                readTime={feature.readTime}
                date={feature.date}
              />
              <h2 className="mt-4 group-hover:text-orange-dark">{feature.title}</h2>
              <p className="mt-4 text-body text-pine">{feature.excerpt}</p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-orange-dark transition-all group-hover:gap-2.5">
                Read the article <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        )}

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-card border border-moss bg-white transition-colors hover:border-orange-dark"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-sand">
                {post.heroImage ? (
                  <Image
                    src={post.heroImage}
                    alt=""
                    fill
                    sizes="(max-width: 640px) 100vw, 360px"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                ) : (
                  <LedgerPlaceholder small />
                )}
              </div>
              <div className="flex flex-1 flex-col p-6">
                <Meta
                  category={post.category}
                  readTime={post.readTime}
                  date={post.date}
                />
                <h3 className="mt-3 text-h3 group-hover:text-orange-dark">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-pine">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <CtaBand
        eyebrow="Put it into practice"
        title="Ready to understand what your numbers are really saying?"
        body="Book a consultation and we'll help you build the reporting that makes property-level profitability visible."
        ctaHref="/consultation"
      />
    </>
  );
}
