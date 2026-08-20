"use client";

import { Disclosure } from "@/components/ui/Disclosure";

export function ServiceWhatYouGetList({
  serviceSlug,
  items,
}: {
  serviceSlug: string;
  items: readonly string[];
}) {
  return (
    <Disclosure id={`service-included-${serviceSlug}`}>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-body text-pine-dark"
          >
            <span className="mt-0.5 text-moss-dark" aria-hidden="true">
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    </Disclosure>
  );
}
