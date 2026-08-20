"use client";

import { Disclosure } from "@/components/ui/Disclosure";

export function CaseStudyNarrative({
  id,
  body,
}: {
  id: string;
  body: string;
}) {
  return (
    <Disclosure
      id={id}
      expandLabel="Read the full story"
      collapseLabel="Show less"
      buttonClassName="mt-0"
    >
      <p className="text-body text-pine">{body}</p>
    </Disclosure>
  );
}
