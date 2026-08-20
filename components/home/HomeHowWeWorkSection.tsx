import Link from "next/link";
import { Section, SectionHeading } from "@/components/ui/Section";
import { howWeWork } from "@/src/content/home";

export function HomeHowWeWorkSection() {
  return (
    <Section tone="dark" divider>
      <SectionHeading
        eyebrow={howWeWork.eyebrow}
        title={howWeWork.heading}
        intro={howWeWork.intro}
      />

      <ol className="relative mt-12 lg:mt-14">
        <div
          className="absolute bottom-0 left-5 top-0 w-px bg-moss lg:bottom-auto lg:left-[12.5%] lg:right-[12.5%] lg:top-5 lg:h-px lg:w-auto"
          aria-hidden="true"
        />

        <div className="grid gap-10 lg:grid-cols-4 lg:gap-8">
          {howWeWork.steps.map((step) => (
            <li key={step.number} className="relative flex gap-5 lg:flex-col lg:gap-0">
              <div className="relative z-10 shrink-0 lg:mx-auto">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange bg-pine-dark font-heading text-label font-semibold text-orange">
                  {step.number}
                </span>
              </div>
              <div className="min-w-0 pt-0.5 lg:mt-5 lg:text-center">
                <h3 className="text-h3">{step.title}</h3>
                <p className="mt-2 text-body text-sand-light">{step.body}</p>
              </div>
            </li>
          ))}
        </div>
      </ol>

      <div className="mt-10 text-center">
        <Link
          href={howWeWork.cta.href}
          className="inline-flex text-body font-medium text-orange transition-colors hover:text-sand-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange"
        >
          {howWeWork.cta.label}
        </Link>
      </div>
    </Section>
  );
}
