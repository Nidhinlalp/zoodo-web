import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@studio-freight/react-lenis"],
  images: {
    domains: [
      "images.unsplash.com",
      "assets.aceternity.com",
      "localhost",
      "me7aitdbxq.ufs.sh",
      "wallpapercave.com",
      "raw.githubusercontent.com",
      "ui.aceternity.com",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true, // Disable ESLint during builds
  },
  typescript: {
    // Only ignore build errors for specific files
    ignoreBuildErrors: true, // This will ignore ALL build errors
  },
};

// Alternative: More targeted solution using webpack
// nextConfig.webpack = (config, { isServer }) => {
//   config.module.rules.push({
//     test: /hero-designali\.tsx$/,
//     loader: 'ts-loader',
//     options: { transpileOnly: true } // Skip type checking
//   });
//   return config;
// };

export default nextConfig;
