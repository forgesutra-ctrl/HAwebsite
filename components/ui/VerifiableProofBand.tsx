import { team } from "@/lib/team";

const SYSTEMS = [
  "Guesty",
  "QuickBooks",
  "Clearing",
  "Ramp",
  "Hostfully",
  "Track",
] as const;

export function VerifiableProofBand() {
  return (
    <div className="overflow-hidden rounded-card border border-moss bg-white">
      <div className="border-b border-moss bg-pine-dark px-6 py-4 sm:px-7">
        <p className="text-label text-sand-light">Leadership · credentials</p>
      </div>
      <dl className="divide-y divide-sand">
        {team.map((member) => (
          <div key={member.name} className="px-6 py-5 sm:px-7">
            <dt className="font-heading text-h3 font-semibold text-pine-dark">
              {member.name}
            </dt>
            <dd className="mt-0.5 text-label text-orange-dark">{member.role}</dd>
            <dd className="mt-2 text-body text-pine">{member.credentialHighlight}</dd>
          </div>
        ))}
      </dl>
      <div className="border-t border-moss bg-white px-6 py-5 sm:px-7">
        <p className="text-label text-moss-dark">Systems we work across</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {SYSTEMS.map((name) => (
            <li
              key={name}
              className="rounded-control border border-sand bg-white px-3 py-1.5 text-sm text-pine-dark"
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
