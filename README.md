# HostAllies

Marketing site for HostAllies — back-office financial and revenue management for
short-term rental property managers. A full rebuild of the previous Wix site.

Built with **Next.js 16 (App Router) + Tailwind CSS v4**, statically generated,
deployable to Vercel with zero config.

## Getting started

```bash
npm install
cp .env.example .env.local   # optional; sensible defaults are baked in
npm run dev                  # http://localhost:3000
npm run build && npm start   # production build
```

## Design system

Anchored on the logo's exact orange (`#F96D28`), paired with warm-biased neutrals
and a deep ledger green. The signature element is the **reconciliation statement**
(`components/ledger/ReconciliationStatement.tsx`) — an owner statement whose debits
and credits animate into balance. Tokens live in `app/globals.css`; theme is
system-aware with a manual toggle (`data-theme` on `<html>`).

- Display type: **Fraunces** · Body: **Inter** · Numerals/labels: **IBM Plex Mono**
- Fully responsive, keyboard-focus visible, `prefers-reduced-motion` respected, WCAG-AA contrast.

## Content

| Where | What |
|---|---|
| `lib/site.ts` | Company facts, contact details, nav, proof stats |
| `lib/team.ts` | Leadership bios (Anmol = Financial Accounting Lead) |
| `content/blog/*.md` | 7 blog posts (front matter + markdown), incl. one `hidden: true` |
| `lib/blog.ts` | Markdown loader (gray-matter + marked) |

Blog front matter: `title, slug, date, author, readTime, excerpt, heroImage, category, relatedVideo?, hidden`.
Add a post by dropping a new `.md` file in `content/blog/`.

## Structure & routes

```
/                                   Home (conversion)
/about                              Story, mission, team, MYND partnership
/services/financial-management      8 offerings, capabilities, FAQ, request-a-quote packages
/services/revenue-management        4 services, how-it-works
/partnerships                       Tool ecosystem + preferred partners
/resources                          Blog index (hidden post excluded)
/resources/[slug]                   Blog post (SSG)
/contact                            Lead form + details
/api/contact                        Form handler (POST)
```

301 redirects (in `next.config.ts`) preserve old Wix URLs:
`/about-us`, `/financial-management`, `/revenuemanagement`, `/contact-us`, and `/post/:slug → /resources/:slug`.

## Contact form

The form (`components/contact/ContactForm.tsx`) posts to `/api/contact`, which
validates input and applies honeypot spam protection. **Delivery is intentionally
un-wired** pending a chosen destination — set `CONTACT_WEBHOOK_URL`, or implement
Resend/CRM inside `deliver()` in `app/api/contact/route.ts`. Until then submissions
are logged server-side so nothing is lost.

## SEO

Per-page metadata + OpenGraph, `sitemap.xml`, `robots.txt`, canonical tags, and
JSON-LD (`Organization` + `ProfessionalService`, `BlogPosting`, `BreadcrumbList`).
Google site-verification is set in `app/layout.tsx`. Set `NEXT_PUBLIC_SITE_URL`
in production so absolute URLs are correct.

## Open items (for HostAllies)

- Contact-form destination (email vs CRM) + optional scheduling embed (slot ready on `/contact`).
- Real headshots for Robin Anderson & Anmol Singh (monogram fallback in place).
- Real packages/pricing (currently a request-a-quote block).
- Testimonials / client logos (design slots ready, none fabricated).
- Confirm the "1,800+ / 12M+ / $7B+" wording (MYND delivery network).
