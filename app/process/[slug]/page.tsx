import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section, SectionHeading, Eyebrow } from "@/components/ui/Section";
import { VerifiableProofBand } from "@/components/ui/VerifiableProofBand";
import { CtaBand } from "@/components/ui/CtaBand";
import { TeamMemberCard } from "@/components/site/TeamMemberCard";
import { BreadcrumbJsonLd } from "@/components/seo/JsonLd";
import {
  getProcess,
  getAllProcessSlugs,
  processMetadata,
  onboardingSteps,
} from "@/lib/content/process";
import { team } from "@/lib/team";

export function generateStaticParams() {
  return getAllProcessSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return processMetadata(slug);
}

export default async function ProcessPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = getProcess(slug);
  if (!page) notFound();

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "/" },
          { name: "Process", url: "/process/how-we-work" },
          { name: page.eyebrow, url: `/process/${slug}` },
        ]}
      />

      <section className="border-b border-moss bg-white">
        <div className="container py-16 sm:py-24">
          <div className="max-w-prose">
            <Eyebrow>{page.eyebrow}</Eyebrow>
            <h1 className="mt-6">{page.title}</h1>
            <p className="mt-6 text-body text-pine lg:text-h3">{page.heroIntro}</p>
          </div>
        </div>
      </section>

      {page.variant === "about" && (
        <>
          <Section>
            <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
              <SectionHeading
                eyebrow="Our mission"
                title="You are at the center of everything we do."
              />
              <div className="space-y-5 text-body text-pine">
                <p>
                  Managing finances across STRs — while keeping your own business on
                  track — is too complex and too important to handle solo. Generalist
                  bookkeepers lack the industry DNA; building an in-house finance team
                  is prohibitively expensive.
                </p>
                <p>
                  We give you something better than outsourced help: a reliable
                  partner who knows your business, speaks your language, and helps you
                  grow profitably. Trust accounting, OTA payouts, owner statements,
                  lodging tax — handled with the precision your owners can feel.
                </p>
                <p className="font-heading text-h3 font-medium italic text-pine-dark">
                  This isn&apos;t outsourcing. It&apos;s scalable peace of mind.
                </p>
              </div>
            </div>
          </Section>

          <Section divider>
            <div className="mx-auto max-w-prose text-center">
              <Eyebrow>Who we are</Eyebrow>
              <h2 className="mt-4">
                Named leadership. Real credentials. Your stack.
              </h2>
            </div>
            <div className="mt-10">
              <VerifiableProofBand />
            </div>
          </Section>
        </>
      )}

      {page.variant === "team" && (
        <Section>
          <div className="grid gap-6 sm:grid-cols-2">
            {team.map((m) => (
              <TeamMemberCard key={m.name} member={m} full />
            ))}
          </div>
        </Section>
      )}

      {page.variant === "process" && (
        <Section>
          <h2 className="sr-only">How we onboard new clients</h2>
          <ol className="overflow-hidden rounded-card border border-moss bg-white">
            {onboardingSteps.map((p) => (
              <li
                key={p.step}
                className="grid gap-3 border-b border-sand px-6 py-6 last:border-b-0 sm:grid-cols-[auto_1fr] sm:gap-8 sm:px-7"
              >
                <div className="text-label text-moss-dark">{p.step}</div>
                <div>
                  <h3 className="text-h3">{p.title}</h3>
                  <p className="mt-1.5 max-w-prose text-body text-pine">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>
      )}

      <CtaBand
        eyebrow="Gain an ally"
        title="Why settle for outsourcing when you can gain an Ally?"
        body="Tell us about your portfolio and goals. We'll show you exactly how we'd take the back office off your plate."
        ctaHref="/consultation"
      />
    </>
  );
}
