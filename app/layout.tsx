import type { Metadata } from "next";
import { Lexend, Roboto } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { Analytics } from "@/components/site/Analytics";
import { site } from "@/lib/site";
import { getSiteUrl, DEFAULT_OG_IMAGE, buildPageTitle } from "@/lib/seo";

const lexend = Lexend({
  variable: "--font-lexend",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: buildPageTitle("STR Trust Accounting & Financial Management"),
  description:
    "STR property managers: trust accounting, bookkeeping, owner statements, and reporting — reliable numbers and an accountable financial Ally.",
  applicationName: site.name,
  verification: {
    google: site.googleSiteVerification,
  },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    images: [{ url: DEFAULT_OG_IMAGE, alt: "HostAllies" }],
  },
  twitter: {
    card: "summary_large_image",
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${lexend.variable} ${roboto.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-screen flex-col font-body">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
