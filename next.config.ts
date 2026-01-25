import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.resolve.alias['@Components'] = path.join(__dirname, 'src/app/Components');
    return config;
  },
  turbopack: {}, // Silence Turbopack error
  /* other config options here */
};

export default nextConfig;