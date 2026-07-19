import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  compress: true,

  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 Year
  },

  experimental: {
    optimizePackageImports: [
      "react-icons",
      "framer-motion",
    ],
  },
};

export default nextConfig;