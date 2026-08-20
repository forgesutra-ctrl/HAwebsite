import { DeliveryWorkflowDiagram } from "@/components/home/DeliveryWorkflowDiagram";
import { AccentPanel, Section, SectionHeading } from "@/components/ui/Section";
import { whyHostAllies } from "@/src/content/home";

export function HomeWhySection() {
  return (
    <Section divider>
      <SectionHeading
        eyebrow={whyHostAllies.eyebrow}
        title={whyHostAllies.heading}
        intro={whyHostAllies.intro}
        layout="split"
      />
      <div className="mt-10">
        <DeliveryWorkflowDiagram />
      </div>
      {/* Subgrid: the parent owns three rows (number, title, body) and each card
          spans them, so a 2-line title and a 3-line title still hand off to the
          body at the same y. pt-5 lives on the number rather than the li because
          padding on a subgrid item offsets its tracks. */}
      <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:grid-rows-[auto_auto_auto] lg:gap-x-6 lg:gap-y-0">
        {whyHostAllies.pillars.map((pillar) => (
          <li
            key={pillar.number}
            className="border-t-2 border-pine-dark lg:row-span-3 lg:grid lg:grid-rows-subgrid"
          >
            <p className="pt-5 text-label text-orange-dark">{pillar.number}</p>
            <h3 className="mt-2 text-h3">{pillar.title}</h3>
            <p className="mt-3 text-body text-pine">{pillar.body}</p>
          </li>
        ))}
      </ul>
      {/* Negative margin equal to the container's own gutter: the sand panel
          bleeds to the container edge while its text keeps the section's left
          spine. Padding is gutter minus --border-width (the same token
          AccentPanel uses for its border), so the text lands on the spine. */}
      <AccentPanel className="-mx-4 mt-10 px-[calc(theme(spacing.4)-var(--border-width))] py-8 md:-mx-8 md:px-[calc(theme(spacing.8)-var(--border-width))]">
        <h3 className="text-h3 text-pine-dark">{whyHostAllies.callout.title}</h3>
        <p className="mt-3 text-body text-pine">{whyHostAllies.callout.body}</p>
      </AccentPanel>
    </Section>
  );
}
