import { site, fullAddress } from "@/lib/site";
import { absoluteUrl } from "@/lib/seo";

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Organization schema — home page only. Matches visible company facts in footer. */
export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        email: site.email,
        telephone: site.phone,
        description: site.description,
        logo: absoluteUrl("/brand/hostallies-logo-orange.png"),
        image: absoluteUrl("/brand/hostallies-logo-orange.png"),
        address: {
          "@type": "PostalAddress",
          streetAddress: site.address.street,
          addressLocality: site.address.city,
          addressRegion: site.address.region,
          postalCode: site.address.postalCode,
          addressCountry: site.address.country,
        },
        sameAs: [site.linkedin],
      }}
    />
  );
}

/** Article schema for blog posts — matches visible headline, excerpt, and dates. */
export function ArticleJsonLd({
  title,
  description,
  slug,
  date,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  date: string;
  image?: string;
}) {
  const url = absoluteUrl(`/resources/${slug}`);
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Article",
        headline: title,
        description,
        datePublished: date,
        dateModified: date,
        url,
        mainEntityOfPage: url,
        image: image ? absoluteUrl(image) : absoluteUrl("/brand/hostallies-logo-orange.png"),
        author: { "@type": "Organization", name: site.name, url: site.url },
        publisher: {
          "@type": "Organization",
          name: site.name,
          logo: {
            "@type": "ImageObject",
            url: absoluteUrl("/brand/hostallies-logo-orange.png"),
          },
        },
      }}
    />
  );
}

/** @deprecated Use ArticleJsonLd */
export const BlogPostingJsonLd = ArticleJsonLd;

/** Service + AccountingService — matches visible service page hero and description. */
export function ServiceJsonLd({
  name,
  description,
  slug,
  serviceType,
}: {
  name: string;
  description: string;
  slug: string;
  serviceType: string;
}) {
  const url = absoluteUrl(`/services/${slug}`);
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": ["Service", "AccountingService"],
        name,
        description,
        url,
        serviceType,
        provider: {
          "@type": "Organization",
          name: site.name,
          url: site.url,
        },
        areaServed: {
          "@type": "Country",
          name: "United States",
        },
      }}
    />
  );
}

export function BreadcrumbJsonLd({
  items,
}: {
  items: { name: string; url: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((it, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: it.name,
          item: absoluteUrl(it.url),
        })),
      }}
    />
  );
}

export { fullAddress };
