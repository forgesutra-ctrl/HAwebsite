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
    <article className="flex flex-col overflow-hidden rounded-card border border-moss bg-white transition-colors hover:border-orange-dark">
      <div className="relative aspect-[4/5] w-full overflow-hidden border-b border-moss bg-white">
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
      <div className="flex flex-1 flex-col border-t border-sand p-5">
        <h3 className="font-heading text-h3 font-bold text-pine-dark">
          {member.name}
        </h3>
        <p className="mt-1 text-label text-orange-dark">{member.role}</p>
        {full && (
          <p className="mt-3 text-sm leading-relaxed text-pine">{member.bio}</p>
        )}
      </div>
    </article>
  );
}

function Monogram({ initials }: { initials: string }) {
  return (
    <div className="absolute inset-0 grid place-items-center bg-white">
      <div
        className="absolute inset-0 opacity-50 ruled"
        aria-hidden="true"
      />
      <span className="relative font-heading text-5xl font-bold text-orange-dark">
        {initials}
      </span>
    </div>
  );
}
