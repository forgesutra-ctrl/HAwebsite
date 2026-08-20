import { CaseStudyNarrative } from "@/components/home/CaseStudyNarrative";
import type { HomeCaseStudy } from "@/src/content/home";
import { getConfirmedHomeCaseStudies } from "@/src/content/home";

/**
 * Stat area is a fixed 2x2 grid so a card with one stat occupies the same
 * vertical space as a card with three. Unused cells stay empty rather than
 * stretching the remaining blocks.
 */
const STAT_ROWS = 2;
const STAT_COLUMNS = 2;
const STAT_CELLS = STAT_ROWS * STAT_COLUMNS;

function StatBlock({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex h-full flex-col justify-center rounded-card border border-moss bg-sand-light px-4 py-3">
      <p className="tnum text-[1.75rem] font-bold leading-none tracking-tight text-pine-dark">
        {value}
      </p>
      <p className="mt-2 text-label leading-tight text-moss-dark">{label}</p>
    </div>
  );
}

function CaseStudyCard({ study }: { study: HomeCaseStudy }) {
  const emptyCells = Math.max(0, STAT_CELLS - study.stats.length);

  return (
    <article className="card-elevated flex flex-col p-7">
      <p className="text-label text-moss-dark">{study.descriptor}</p>
      <h3 className="mt-2 text-h3 text-pine-dark">{study.title}</h3>
      <div className="mt-4 flex-1">
        <CaseStudyNarrative
          id={`case-study-${study.internalRef.toLowerCase()}`}
          body={study.body}
        />
      </div>

      <div className="mt-6 grid grid-cols-2 grid-rows-[repeat(2,5.5rem)] gap-3 border-t border-sand pt-5">
        {study.stats.map((stat) => (
          <StatBlock key={stat.label} value={stat.value} label={stat.label} />
        ))}
        {Array.from({ length: emptyCells }, (_, index) => (
          <div key={`empty-${index}`} aria-hidden="true" />
        ))}
      </div>

      <figure className="mt-6 border-t border-sand pt-5">
        <blockquote className="text-body italic text-pine-dark">
          <p>{study.quote}</p>
        </blockquote>
        {study.attribution && (
          <figcaption className="mt-3 text-label text-moss-dark">
            {study.attribution}
          </figcaption>
        )}
      </figure>
    </article>
  );
}

/** Homepage results grid — confirmed case studies from home content only. */
export function CaseStudyResults() {
  const studies = getConfirmedHomeCaseStudies();
  if (studies.length === 0) return null;

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {studies.map((study) => (
        <CaseStudyCard key={study.internalRef} study={study} />
      ))}
    </div>
  );
}
