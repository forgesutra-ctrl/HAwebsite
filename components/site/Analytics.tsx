import Script from "next/script";

/**
 * Analytics placeholder — renders nothing unless an env var is set, so no
 * trackers load in development or before a provider is chosen.
 *
 *   • GA4:       set NEXT_PUBLIC_GA_ID (e.g. G-XXXXXXX)
 *   • Plausible: set NEXT_PUBLIC_PLAUSIBLE_DOMAIN (e.g. hostallies.com)
 */
export function Analytics() {
  const ga = process.env.NEXT_PUBLIC_GA_ID;
  const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  if (ga) {
    return (
      <>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${ga}');`}
        </Script>
      </>
    );
  }

  if (plausible) {
    return (
      <Script
        src="https://plausible.io/js/script.js"
        data-domain={plausible}
        strategy="afterInteractive"
      />
    );
  }

  return null;
}
