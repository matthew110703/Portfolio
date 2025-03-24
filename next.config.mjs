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
};

export default nextConfig;
