import { PainDisclosureItem } from "@/components/home/PainDisclosureItem";
import { Section, SectionHeading } from "@/components/ui/Section";
import type { PainIconId } from "@/components/icons/LineIcons";
import { painSection } from "@/src/content/home";

const painItemIcons: PainIconId[] = [
  "reconciliation",
  "statements",
  "calendar",
  "chart",
  "tax",
  "clock",
];

export function HomePainSection() {
  return (
    <Section divider>
      <SectionHeading
        eyebrow={painSection.eyebrow}
        title={painSection.heading}
        intro={painSection.intro}
      />
      <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {painSection.items.map((item, index) => (
          <li key={item.title} className="card-elevated px-5 py-5">
            <PainDisclosureItem
              id={`pain-item-${index}`}
              title={item.title}
              body={item.body}
              icon={painItemIcons[index]}
              expandLabel={painSection.itemExpandLabel}
              collapseLabel={painSection.itemCollapseLabel}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
