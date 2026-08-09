import Link from "next/link";
import { Logo } from "./Logo";
import { site, footerNav, fullAddress } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rule bg-surface-2">
      <div className="container py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              Simplify your operations and maximize your profitability with
              professional back-office support built for property managers.
            </p>
          </div>

          {Object.entries(footerNav).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
                {heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-ink-soft transition-colors hover:text-ember"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
              Contact
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5 text-sm text-ink-soft">
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="transition-colors hover:text-ember"
                >
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-ember"
                >
                  {site.email}
                </a>
              </li>
              <li className="max-w-[15rem] leading-relaxed">{fullAddress}</li>
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 transition-colors hover:text-ember"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.65h.05c.53-1 1.83-2.05 3.76-2.05C20.6 8.6 22 10.3 22 13.7V21h-4v-6.4c0-1.53-.03-3.5-2.13-3.5-2.13 0-2.46 1.66-2.46 3.38V21H9V9Z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="ledger-rule my-9" />

        <div className="flex flex-col-reverse items-start justify-between gap-4 text-xs text-ink-faint sm:flex-row sm:items-center">
          <p>© {year} HostAllies. All rights reserved.</p>
          <p className="font-mono">
            Built by property managers, for property managers.
          </p>
        </div>
      </div>
    </footer>
  );
}
