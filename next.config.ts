import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old Squarespace URLs
      { source: "/home", destination: "/", permanent: true },
      { source: "/blog", destination: "/writing", permanent: true },
      { source: "/blog/:path*", destination: "/writing", permanent: true },
      { source: "/projects-1", destination: "/projects", permanent: true },
      { source: "/contact", destination: "/about", permanent: true },
    ];
  },
};

export default nextConfig;
