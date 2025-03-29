import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.pexels.com"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'another-example.com',
      },
    ],
  },  
};

export default nextConfig;

export const config = {
  api: {
    bodyParser: true,
  },
};
