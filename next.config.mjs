/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "placehold.co",
        protocol: "https",
        pathname: "/*",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["@ant-design/icons"],
  },
};

export default nextConfig;
