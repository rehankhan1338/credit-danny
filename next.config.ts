import type { NextConfig } from "next";

const WP_ORIGIN = process.env.WP_ORIGIN || "https://creditdanny.com";

const nextConfig: NextConfig = {
  trailingSlash: true,

  reactStrictMode: true,

  poweredByHeader: false,

  async headers() {
    const IMMUTABLE_ASSET_PATHS = [
      "/assets/img/:path*",
      "/assets/fonts/:path*",
      "/assets/video/:path*",
      "/assets/js/:path*",
      "/wp-content/uploads/:path*",
    ];
    return [
      ...IMMUTABLE_ASSET_PATHS.map((source) => ({
        source,
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      })),
    ];
  },

  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },

      { source: "/5kgiveaway-entry.html", destination: "/5kgiveaway-entry/", permanent: true },
      { source: "/about.html", destination: "/about/", permanent: true },
      { source: "/accelerator.html", destination: "/accelerator/", permanent: true },
      { source: "/accelerator-application.html", destination: "/accelerator-application/", permanent: true },
      { source: "/blueprint.html", destination: "/blueprint/", permanent: true },
      { source: "/blueprint-application.html", destination: "/blueprint-application/", permanent: true },
      { source: "/blueprint-strategy.html", destination: "/blueprint-strategy/", permanent: true },
      { source: "/consult-calendar.html", destination: "/consult-calendar/", permanent: true },
      { source: "/get-started.html", destination: "/get-started/", permanent: true },
      { source: "/home-buying-blueprint.html", destination: "/home-buying-blueprint/", permanent: true },
      { source: "/mentorship.html", destination: "/mentorship/", permanent: true },
      { source: "/plans.html", destination: "/plans/", permanent: true },
      { source: "/privacy-policy.html", destination: "/privacy-policy/", permanent: true },
      { source: "/sponsorship.html", destination: "/sponsorship/", permanent: true },
      { source: "/sponsorship-apply.html", destination: "/sponsorship-apply/", permanent: true },
      { source: "/team.html", destination: "/team/", permanent: true },
      { source: "/terms-and-conditions.html", destination: "/terms-and-conditions/", permanent: true },
      { source: "/transformations.html", destination: "/transformations/", permanent: true },

      { source: "/mentorship/apply.html", destination: "/mentorship-apply/", permanent: true },
      { source: "/mentorship/apply/", destination: "/mentorship-apply/", permanent: true },
      { source: "/mentorship/index.html", destination: "/mentorship/", permanent: true },
    ];
  },

  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [],
      fallback: [
        { source: "/:path*/", destination: `${WP_ORIGIN}/:path*/` },
        { source: "/:path*", destination: `${WP_ORIGIN}/:path*` },
      ],
    };
  },
};

export default nextConfig;
