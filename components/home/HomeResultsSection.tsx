import { Section, SectionHeading } from "@/components/ui/Section";
import { CaseStudyResults } from "@/components/home/CaseStudyResults";
import { getConfirmedHomeCaseStudies, results } from "@/src/content/home";

export function HomeResultsSection() {
  if (getConfirmedHomeCaseStudies().length === 0) return null;

  return (
    <Section divider>
      <SectionHeading
        eyebrow={results.eyebrow}
        title={results.heading}
        intro={results.intro}
      />
      <div className="mt-10">
        <CaseStudyResults />
      </div>
    </Section>
  );
}
