import Image from "next/image";
import type { TeamMember } from "@/lib/team";

export function TeamMemberCard({
  member,
  full = false,
}: {
  member: TeamMember;
  full?: boolean;
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg border border-rule-strong bg-surface shadow-[var(--shadow-sm)] transition-shadow hover:shadow-[var(--shadow-md)]">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface-2">
        {member.image ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            sizes="(max-width: 640px) 100vw, 320px"
            className="object-cover object-top"
          />
        ) : (
          <Monogram initials={member.initials} />
        )}
      </div>
      <div className="flex flex-1 flex-col border-t border-rule p-5">
        <h3 className="font-display text-xl font-bold">{member.name}</h3>
        <p className="mt-1 font-mono text-xs uppercase tracking-[0.1em] text-ember">
          {member.role}
        </p>
        {full && (
          <p className="mt-3 text-sm leading-relaxed text-ink-soft">
            {member.bio}
          </p>
        )}
      </div>
    </article>
  );
}

/** Ledger-card monogram treatment for members without a headshot yet. */
function Monogram({ initials }: { initials: string }) {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <div
        className="absolute inset-0 opacity-[0.5]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to bottom, transparent 0, transparent 27px, var(--rule) 27px, var(--rule) 28px)",
        }}
        aria-hidden="true"
      />
      <span className="relative font-display text-5xl font-bold text-brand">
        {initials}
      </span>
    </div>
  );
}
