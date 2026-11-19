import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    optimizePackageImports: ["@ant-design/icons"],
  },
};

export default nextConfig;
