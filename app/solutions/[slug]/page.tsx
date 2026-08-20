import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, Eyebrow } from "@/components/ui/Section";
import { CtaBand } from "@/components/ui/CtaBand";
import { ButtonLink } from "@/components/ui/Button";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import {
  getSolution,
  getAllSolutionSlugs,
  solutionMetadata,
} from "@/lib/content/solutions";

export function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return solutionMetadata(slug);
}

export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Solutions", url: "/solutions/short-term-rentals" },
          { name: solution.eyebrow, url: `/solutions/${slug}` },
        ]}
      />

      <section className="border-b border-moss bg-white">
        <div className="container py-16 sm:py-24">
          <div className="max-w-prose">
            <Eyebrow>{solution.eyebrow}</Eyebrow>
            <h1 className="mt-6">{solution.title}</h1>
            <p className="mt-6 text-body text-pine lg:text-h3">{solution.heroIntro}</p>
            <div className="mt-8">
              <ButtonLink href="/consultation" size="lg" arrow>
                Book a 30-minute consultation
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <h2 className="sr-only">How HostAllies supports {solution.eyebrow.toLowerCase()} operators</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {solution.highlights.map((h) => (
            <div
              key={h.title}
              className="rounded-card border border-moss bg-white p-7"
            >
              <h3 className="text-h3">{h.title}</h3>
              <p className="mt-3 text-body text-pine">{h.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Ready when you are"
        title="Let's build the back office your portfolio deserves."
        ctaHref="/consultation"
      />
    </>
  );
}
