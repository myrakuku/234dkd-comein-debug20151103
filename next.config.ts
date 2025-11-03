// import type { NextConfig } from "next";

const nextConfig = {
    headers: async () => [
      {
        source: '/_next/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
        ],
      },
    ],
  };
  module.exports = nextConfig;
