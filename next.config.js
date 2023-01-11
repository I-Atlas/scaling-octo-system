/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: false,
});
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback.fs = false;
    }

    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        // test: /\.(js|ts)x?$/,
        // for webpack 5 use
        and: [/\.(js|ts)x?$/],
      },

      use: ["@svgr/webpack"],
    });

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
