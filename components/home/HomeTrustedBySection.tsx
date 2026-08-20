import { getConfirmedTrustedClients, trustedBy } from "@/src/content/home";

export function HomeTrustedBySection() {
  const clients = getConfirmedTrustedClients();
  if (clients.length === 0) return null;

  return (
    <section
      data-tone="dark"
      className="border-b border-pine-dark bg-pine-dark py-8"
    >
      <div className="container">
        <p className="text-center text-label text-sand">{trustedBy.heading}</p>
        <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((client) => (
            <li
              key={client.name}
              className="rounded-control border border-sand-light/30 px-5 py-3 text-body font-medium text-sand-light"
            >
              {client.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
