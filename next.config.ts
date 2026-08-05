import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Canonical short routes are /dpa and /aup; redirect long-form URLs
      { source: "/data-processing-addendum", destination: "/dpa", permanent: true },
      { source: "/acceptable-use", destination: "/aup", permanent: true },
    ];
  },
};

export default nextConfig;
