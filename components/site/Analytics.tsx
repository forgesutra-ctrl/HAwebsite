import Script from "next/script";
import { CTA_CONVERSION_BY_HREF } from "@/lib/analytics";

/**
 * GA4 analytics — loads when NEXT_PUBLIC_GA_ID is set.
 * Search Console verification is handled via metadata in app/layout.tsx.
 *
 * Conversion events (GA4 recommended events):
 *   • cta_consultation — click to /consultation
 *   • cta_trust_assessment — click to /trust-accounting-assessment
 *   • form_contact_submit — successful /contact form submission
 *   • form_consultation_submit — successful /consultation form submission
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
          {`
            window.dataLayer=window.dataLayer||[];
            function gtag(){dataLayer.push(arguments);}
            gtag('js',new Date());
            gtag('config','${ga}',{ send_page_view: true });

            document.addEventListener('click',function(e){
              var el=e.target.closest('a[data-conversion],button[data-conversion]');
              if(!el||!window.gtag)return;
              var event=el.getAttribute('data-conversion');
              if(event)gtag('event',event,{event_category:'conversion'});
            },true);
          `}
        </Script>
        <Script id="ga4-cta-map" strategy="afterInteractive">
          {`
            (function(){
              var map=${JSON.stringify(CTA_CONVERSION_BY_HREF)};
              function mark(el){
                if(!el||el.getAttribute('data-conversion'))return;
                var href=el.getAttribute('href');
                if(!href)return;
                var path=href.split('?')[0].split('#')[0];
                if(map[path])el.setAttribute('data-conversion',map[path]);
              }
              function scan(){
                document.querySelectorAll('a[href]').forEach(mark);
              }
              if(document.readyState==='loading'){
                document.addEventListener('DOMContentLoaded',scan);
              }else{scan();}
              new MutationObserver(scan).observe(document.body,{childList:true,subtree:true});
            })();
          `}
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
