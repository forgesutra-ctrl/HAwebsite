"use client";

import { Disclosure } from "@/components/ui/Disclosure";
import {
  PainLineIcon,
  type PainIconId,
} from "@/components/icons/LineIcons";

export function PainDisclosureItem({
  id,
  title,
  body,
  icon,
  expandLabel,
  collapseLabel,
}: {
  id: string;
  title: string;
  body: string;
  icon: PainIconId;
  expandLabel: string;
  collapseLabel: string;
}) {
  return (
    <Disclosure
      id={id}
      expandLabel={expandLabel}
      collapseLabel={collapseLabel}
      summary={
        <div className="flex items-start gap-3">
          <span
            className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-control border border-moss bg-white"
            aria-hidden="true"
          >
            <PainLineIcon id={icon} />
          </span>
          <h3 className="min-w-0 flex-1 text-body font-semibold text-pine-dark">
            {title}
          </h3>
        </div>
      }
    >
      <p className="pl-[3.25rem] text-body text-pine">{body}</p>
    </Disclosure>
  );
}
