import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // SEO: Consistent URL format — prevents duplicate content from trailing slashes
  trailingSlash: false,

  // SEO: Allow optimized images from external CDN domains
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
    ],
  },

  // SEO: Security & caching headers that help crawling without blocking bots
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
        ],
      },
      {
        // SEO: Cache static assets aggressively for better Core Web Vitals
        source: "/assets/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
