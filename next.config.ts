import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root (multiple lockfiles exist above this folder).
  turbopack: {
    root: import.meta.dirname,
  },
  async redirects() {
    // statusCode 301 (rather than Next's default 308) to match the migration brief.
    return [
      // Renamed pages from the old Wix site — preserve indexed equity.
      { source: "/about-us", destination: "/about", statusCode: 301 },
      {
        source: "/financial-management",
        destination: "/services/financial-management",
        statusCode: 301,
      },
      {
        source: "/revenuemanagement",
        destination: "/services/revenue-management",
        statusCode: 301,
      },
      {
        source: "/revenue-management",
        destination: "/services/revenue-management",
        statusCode: 301,
      },
      { source: "/contact-us", destination: "/contact", statusCode: 301 },
      // Blog posts kept their slugs; only the path segment changed.
      {
        source: "/post/:slug",
        destination: "/resources/:slug",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
