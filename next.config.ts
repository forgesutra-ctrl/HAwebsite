import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  async redirects() {
    return [
      { source: "/about-us", destination: "/process/about-hostallies", statusCode: 301 },
      { source: "/about", destination: "/process/about-hostallies", statusCode: 301 },
      {
        source: "/financial-management",
        destination: "/services/financial-management",
        statusCode: 301,
      },
      {
        source: "/revenuemanagement",
        destination: "/services/financial-management",
        statusCode: 301,
      },
      {
        source: "/revenue-management",
        destination: "/services/financial-management",
        statusCode: 301,
      },
      {
        source: "/services/revenue-management",
        destination: "/services/financial-management",
        statusCode: 301,
      },
      { source: "/contact-us", destination: "/contact", statusCode: 301 },
      { source: "/resources", destination: "/resources/blog", statusCode: 301 },
      {
        source: "/post/:slug",
        destination: "/resources/:slug",
        statusCode: 301,
      },
    ];
  },
};

export default nextConfig;
