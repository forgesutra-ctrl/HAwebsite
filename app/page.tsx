import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ButtonLink } from "@/components/ui/Button";
import { Section, SectionHeading, LedgerHead } from "@/components/ui/Section";
import { StatBand } from "@/components/ui/StatBand";
import { CtaBand } from "@/components/ui/CtaBand";
import { ReconciliationStatement } from "@/components/ledger/ReconciliationStatement";
import { PartnerLogos } from "@/components/site/PartnerLogos";
import { TeamMemberCard } from "@/components/site/TeamMemberCard";
import { team } from "@/lib/team";
import { getAllPosts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Financial Management for Property Managers | HostAllies",
  description:
    "Stop wrestling with complex financials. HostAllies delivers trust accounting, owner statements, reconciliation, and revenue management for STR property managers — clarity and insights for profitable growth.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Financial Management for Property Managers | HostAllies",
    description:
      "Back-office financial and revenue management for short-term rental property managers, built by operators who speak your language.",
    url: "/",
  },
};

const difference = [
  {
    title: "Financial expertise you can count on",
    body: "We bring the scale, structure, and processing power of an enterprise-grade financial team — fast, consistent, high-quality execution from day one.",
    means:
      "No hand-holding, no missed deadlines. Just smooth, reliable work you don't have to double-check.",
  },
  {
    title: "First-hand property management know-how",
    body: "Built by STR operators, for STR operators. We already speak your language: trust accounting, OTA payouts, management commissions, owner statements.",
    means:
      "Less ramp-up. Fewer errors. And reports your owners will actually understand.",
  },
  {
    title: "More than bookkeeping: real intelligence",
    body: "A dedicated account manager who doesn't just close your books — from cost controls to revenue mapping, your Ally spots profit leaks and helps you plug them.",
    means:
      "A proactive partner who improves your margins, not just one who reconciles them.",
  },
];

const services = [
  {
    account: "Account 01 — Financial Management",
    title: "Books your owners trust",
    body: "Trust accounting, owner statements, reconciliation, reporting, and tax — audit-ready precision.",
    href: "/services/financial-management",
    items: ["Trust accounting", "Owner statements", "Reconciliation", "Income & lodging tax"],
  },
  {
    account: "Account 02 — Revenue Management",
    title: "Pricing that captures more",
    body: "Dynamic pricing, market analysis, and forecasting to keep every property competitively priced through every season.",
    href: "/services/revenue-management",
    items: ["Dynamic pricing", "Market trend analysis", "Revenue forecasting", "Owner reporting"],
  },
];

const process = [
  {
    step: "01",
    title: "Inquiry",
    body: "Tell us about your business and goals. We listen and learn about your needs to shape a personalized approach.",
  },
  {
    step: "02",
    title: "Plan",
    body: "We design a tailored action plan that aligns with your goals and delivers immediate value.",
  },
  {
    step: "03",
    title: "Execution",
    body: "Our experts handle implementation with ongoing support, so you can concentrate on scaling.",
  },
];

export default function HomePage() {
  const posts = getAllPosts().slice(0, 4);

  return (
    <>
      {/* ============ HERO ============ */}
      <section className="relative overflow-hidden">
        <div
          className="ruled pointer-events-none absolute inset-0 -z-10 opacity-60"
          aria-hidden="true"
          style={{
            maskImage:
              "radial-gradient(115% 80% at 72% 0%, black 18%, transparent 72%)",
          }}
        />
        <div className="container">
          <div className="flex items-center justify-between gap-4 border-t-2 border-ink py-3 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft">
            <span>HostAllies — Financial &amp; Revenue Management</span>
            <span className="hidden text-ink-faint sm:inline">
              Est. Dunwoody, GA
            </span>
          </div>
        </div>

        <div className="container grid items-center gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:pb-24">
          <div className="rise">
            <h1 className="text-[2.7rem] leading-[1.02] sm:text-6xl lg:text-[4.2rem]">
              Your ally in vacation rental success.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              We take the back office off your plate — trust accounting, owner
              statements, reconciliation, and tax — so your books stay flawless
              and your time goes to growth.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg" arrow>
                Book a free consultation
              </ButtonLink>
              <ButtonLink
                href="/services/financial-management"
                size="lg"
                variant="secondary"
              >
                Explore our solutions
              </ButtonLink>
            </div>
          </div>

          <div className="rise" style={{ animationDelay: "0.1s" }}>
            <ReconciliationStatement />
            <p className="mt-3 text-center font-mono text-[11px] uppercase tracking-[0.1em] text-ink-faint">
              Every debit and credit, reconciled to the cent
            </p>
          </div>
        </div>
      </section>

      {/* ============ HOSPITALITY BAND ============ */}
      <section className="border-t border-rule">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-[460px]">
            <Image
              src="/images/home/cabin-room.jpg"
              alt="A warm, made-up guest room in a short-term rental cabin"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center bg-green px-7 py-14 text-[color:var(--on-green)] sm:px-12 lg:py-20">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-[color:var(--on-green-soft)]">
              Two sides, one back office
            </p>
            <h2 className="mt-5 max-w-md text-3xl text-[color:var(--on-green)] sm:text-4xl">
              Hospitality earns the stay. Precision keeps the owner.
            </h2>
            <p className="mt-5 max-w-md text-lg leading-relaxed text-[color:var(--on-green-soft)]">
              Your guests remember the home. Your owners remember the statement.
              We handle the numbers behind every stay so both sides of the
              business stay strong — and profitable.
            </p>
          </div>
        </div>
      </section>

      {/* ============ OPERATOR'S DILEMMA ============ */}
      <Section divider>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <SectionHeading
            eyebrow="The operator's dilemma"
            reference="03 lines"
            title="You didn't get into this to become an accountant."
            className="mb-0"
          />
          <div className="overflow-hidden rounded-lg border border-rule-strong bg-surface">
            {[
              {
                h: "Overwhelmed by daily operations?",
                p: "Stuck in a cycle of constant task-switching that keeps you from strategic growth.",
                tag: "time lost",
              },
              {
                h: "Wish you had time to scale?",
                p: "Operational details shouldn't steal the time that could be driving profit and expansion.",
                tag: "growth capped",
              },
            ].map((c) => (
              <div
                key={c.h}
                className="flex items-start justify-between gap-6 border-b border-rule px-6 py-5"
              >
                <div>
                  <h3 className="text-lg">{c.h}</h3>
                  <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">
                    {c.p}
                  </p>
                </div>
                <span className="shrink-0 pt-1 font-mono text-[11px] uppercase tracking-[0.08em] text-ember">
                  {c.tag}
                </span>
              </div>
            ))}
            <div className="bg-green px-6 py-6 text-[color:var(--on-green)]">
              <h3 className="text-lg text-[color:var(--on-green)]">
                That's where HostAllies comes in.
              </h3>
              <p className="mt-1.5 text-[15px] leading-relaxed text-[color:var(--on-green-soft)]">
                We take back-office work off your plate so you can focus on
                high-value activities — streamlining your processes, reducing
                stress, and freeing your time for what matters most.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ============ THE ALLY DIFFERENCE ============ */}
      <Section divider>
        <SectionHeading
          eyebrow="The Ally difference"
          reference="Statement of value"
          title="More than outsourced help. An Ally who knows your business."
          intro="Managing finances across STRs while running your own business is too complex to handle solo. We give you a partner who speaks your language and helps you grow profitably."
        />
        <div className="mt-10 overflow-hidden rounded-lg border border-rule-strong bg-surface">
          {difference.map((c) => (
            <div
              key={c.title}
              className="grid gap-5 border-b border-rule px-6 py-6 last:border-b-0 sm:px-7 md:grid-cols-[1.1fr_0.9fr] md:gap-8"
            >
              <div>
                <h3 className="text-xl">{c.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                  {c.body}
                </p>
              </div>
              <div className="flex flex-col gap-1.5 md:border-l md:border-rule md:pl-8">
                <span className="font-mono text-[11px] uppercase tracking-[0.1em] text-ledger">
                  What it means for you
                </span>
                <p className="text-[15px] leading-relaxed text-ink">{c.means}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-8 max-w-2xl font-display text-xl font-medium italic tracking-tight text-ink sm:text-2xl">
          This isn't outsourcing. It's scalable peace of mind — an Ally built to
          grow your profit, one rental at a time.
        </p>
      </Section>

      {/* ============ PROOF — STATEMENT EXCERPT (green) ============ */}
      <Section divider>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16">
          <SectionHeading
            eyebrow="Proof"
            reference="Delivery network"
            title="Enterprise capacity, on your side of the table."
            className="mb-0"
          />
          <StatBand />
        </div>
      </Section>

      {/* ============ SERVICES ============ */}
      <Section divider>
        <SectionHeading
          eyebrow="What we handle"
          reference="02 accounts"
          title="Two disciplines. One back office."
          intro="The financial precision that keeps owners confident, and the revenue strategy that keeps portfolios growing."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex flex-col rounded-lg border border-rule-strong bg-surface transition-all hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)]"
            >
              <div className="border-b border-rule px-7 py-4 font-mono text-[11px] uppercase tracking-[0.12em] text-ember">
                {s.account}
              </div>
              <div className="flex flex-1 flex-col p-7">
                <h3 className="text-2xl">{s.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
                <ul className="mt-5 grid grid-cols-2 gap-x-4">
                  {s.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-center gap-2 border-t border-rule py-2 text-sm text-ink"
                    >
                      <span className="text-ledger">✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ember transition-all group-hover:gap-2.5">
                  Explore this account <span aria-hidden="true">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* ============ PARTNER STRIP ============ */}
      <section className="border-y border-rule bg-surface-2 py-12">
        <div className="container">
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.14em] text-ink-faint">
            We work inside the tools you already run · in partnership with MYND
          </p>
          <div className="mt-8">
            <PartnerLogos />
          </div>
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <Section divider>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Your Allies"
            reference="Leadership"
            title="The people behind your back office."
            className="mb-0"
          />
          <ButtonLink href="/about" variant="secondary">
            Meet the team
          </ButtonLink>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m) => (
            <TeamMemberCard key={m.name} member={m} />
          ))}
        </div>
      </Section>

      {/* ============ PROCESS ============ */}
      <Section divider>
        <SectionHeading
          eyebrow="How we support you"
          reference="03 steps"
          title="Onboarding without the overwhelm."
        />
        <ol className="mt-10 overflow-hidden rounded-lg border border-rule-strong bg-surface">
          {process.map((p) => (
            <li
              key={p.step}
              className="grid gap-3 border-b border-rule px-6 py-6 last:border-b-0 sm:grid-cols-[auto_1fr] sm:gap-8 sm:px-7"
            >
              <div className="font-mono text-sm text-brand">{p.step}</div>
              <div>
                <h3 className="text-xl">{p.title}</h3>
                <p className="mt-1.5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* ============ RESOURCES ============ */}
      <Section divider>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Resources"
            reference="Latest"
            title="Financial clarity for STR operators."
            className="mb-0"
          />
          <ButtonLink href="/resources" variant="secondary">
            All resources
          </ButtonLink>
        </div>
        <div className="mt-10 overflow-hidden rounded-lg border border-rule-strong bg-surface">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/resources/${post.slug}`}
              className="group grid items-baseline gap-2 border-b border-rule px-6 py-5 last:border-b-0 transition-colors hover:bg-surface-2 sm:grid-cols-[110px_1fr_auto] sm:gap-6 sm:px-7"
            >
              <span className="font-mono text-xs text-ink-faint">
                {formatDate(post.date)}
              </span>
              <span className="text-[15px] font-medium text-ink group-hover:text-ember">
                {post.title}
              </span>
              <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-ember">
                {post.category}
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* ============ CLOSE ============ */}
      <CtaBand
        eyebrow="Ready when you are"
        title="Ready to grow without the grind?"
        body="Let HostAllies handle the back office so you can double down on what drives revenue."
        secondaryLabel="See our services"
        secondaryHref="/services/financial-management"
      />
    </>
  );
}
