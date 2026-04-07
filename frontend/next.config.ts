import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.brunel.ac.uk",
      },
    ],
  },
};

export default nextConfig;
