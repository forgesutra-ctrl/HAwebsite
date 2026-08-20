import { Section, SectionHeading } from "@/components/ui/Section";
import { yourAllies } from "@/src/content/home";

/**
 * TODO(team-photo): section intentionally ships without an image.
 *
 * `yourAllies.image` in src/content/home.ts points at
 * /public/hostallies/team-photo.jpg with alt text "Team members collaborating
 * around a table". That file exists but its contents are wrong: it is a single
 * male headshot at 229x235px, so it was both contradicting the alt text and
 * being upscaled into a 4:3 box.
 *
 * A lone portrait actively undercuts this section's claim — a dedicated account
 * manager *and* a delivery team, not a rotating cast of contractors — so no
 * image is better than that one.
 *
 * Needed from Corey's package: a landscape photograph of multiple HostAllies
 * team members collaborating around a table, ideally 1600px wide or more.
 * Replace the file at:
 *
 *   /public/hostallies/team-photo.jpg
 *
 * Then restore the <Image> in the right-hand column and revert this grid to
 * `lg:grid-cols-2` with the copy in one column and the photo in the other.
 *
 * Do NOT source a stand-in from the individual headshots on the Meet the Team
 * page — those belong to that page and are single portraits besides.
 */
export function HomeYourAlliesSection() {
  return (
    <Section divider>
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            eyebrow={yourAllies.eyebrow}
            title={yourAllies.heading}
            className="mb-0"
          />
          <p className="mt-6 text-body text-pine">{yourAllies.body}</p>
        </div>
        <ul className="space-y-4 lg:mt-2">
          {yourAllies.points.map((point) => (
            <li
              key={point}
              className="flex items-start gap-3 border-l-2 border-moss py-1 pl-4 text-body text-pine-dark"
            >
              <span className="mt-0.5 text-moss-dark" aria-hidden="true">
                ✓
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
