import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Resources — Financial Clarity for STR Property Managers",
  description:
    "Guides, tax deep-dives, and profitability playbooks for short-term rental operators — from trust accounting to lodging tax to the ratios that reveal your real margin.",
  alternates: { canonical: "/resources" },
  openGraph: {
    title: "Resources — Financial Clarity for STR Property Managers | HostAllies",
    description:
      "Guides, tax deep-dives, and profitability playbooks for short-term rental operators.",
    url: "/resources",
  },
};

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
    <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
      <span className="text-ember">{category}</span>
      <span aria-hidden="true">·</span>
      <span>{readTime}</span>
      <span aria-hidden="true">·</span>
      <span>{formatDate(date)}</span>
    </div>
  );
}

export default function ResourcesPage() {
  const posts = getAllPosts(); // visible only, newest first
  const [feature, ...rest] = posts;

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Resources", url: "/resources" },
        ]}
      />

      {/* Header */}
      <section className="border-b border-rule">
        <div className="container py-16 sm:py-20">
          <div className="max-w-3xl">
            <Eyebrow>Resources</Eyebrow>
            <h1 className="mt-6 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
              Financial clarity for STR property managers.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft sm:text-xl">
              Practical guides on trust accounting, lodging tax, and the
              profitability metrics that reveal what your numbers are really
              saying.
            </p>
          </div>
        </div>
      </section>

      <div className="container py-16 sm:py-20">
        {/* Feature */}
        {feature && (
          <Link
            href={`/resources/${feature.slug}`}
            className="group grid overflow-hidden rounded-3xl border border-rule bg-surface transition-shadow hover:shadow-[var(--shadow-md)] lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2 lg:aspect-auto">
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
              <h2 className="mt-4 text-3xl leading-tight group-hover:text-ember sm:text-[2.1rem]">
                {feature.title}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                {feature.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ember group-hover:gap-2.5">
                Read the article <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        )}

        {/* Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/${post.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl border border-rule bg-surface transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-surface-2">
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
                <h3 className="mt-3 text-lg leading-snug text-ink group-hover:text-ember">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-ink-soft">
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
        body="Book a free consultation and we'll help you build the reporting that makes property-level profitability visible."
      />
    </>
  );
}

/** Ledger-styled placeholder for posts without a hero image. */
function LedgerPlaceholder({ small = false }: { small?: boolean }) {
  return (
    <div className="absolute inset-0 grid place-items-center bg-brand-tint">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0, transparent 23px, var(--rule) 23px, var(--rule) 24px)",
        }}
        aria-hidden="true"
      />
      <span
        className={`relative font-serif italic text-brand ${
          small ? "text-2xl" : "text-4xl"
        }`}
      >
        HostAllies
      </span>
    </div>
  );
}
