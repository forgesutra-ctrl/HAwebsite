import type { ReactNode } from "react";
import { hero } from "@/src/content/home";

/**
 * Two visual tiers inside a single h1: a bold display line, then the supporting
 * line at roughly 60% size in regular weight.
 *
 * Sizes must sit on the inner spans, not on the h1. globals.css styles `h1`
 * unlayered, and unlayered rules beat Tailwind's layered utilities — putting
 * `text-[3rem]` on the h1 itself is silently ignored, which is how the two
 * tiers previously collapsed to a uniform 48px.
 */
const TWO_TIER = /^(.*?\.\s+.*?\.)\s+([\s\S]+)$/;

function withAccent(text: string, accent: string): ReactNode {
  const index = accent ? text.indexOf(accent) : -1;
  if (index === -1) return text;
  return (
    <>
      {text.slice(0, index)}
      <em className="brand-ally">{accent}</em>
      {text.slice(index + accent.length)}
    </>
  );
}

const displayClass =
  "block text-[2.25rem] font-bold leading-[1.1] text-pine-dark lg:text-[3rem]";
const supportingClass =
  "mt-3 block text-[1.25rem] font-normal leading-[1.35] text-pine lg:text-[1.75rem]";

export function HomeHeroHeadline() {
  const accent = hero.headlineAccentWord;
  const match = TWO_TIER.exec(hero.headline);

  if (!match) {
    return (
      <h1 className="mt-4">
        <span className={displayClass}>
          {withAccent(hero.headline, accent)}
        </span>
      </h1>
    );
  }

  const [, display, supporting] = match;

  return (
    <h1 className="mt-4">
      <span className={displayClass}>{withAccent(display, accent)}</span>
      <span className={supportingClass}>
        {withAccent(supporting, accent)}
      </span>
    </h1>
  );
}
