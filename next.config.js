/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: "/api/data",
        destination: "http://localhost:4000/", // Proxy to Backend
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["publish-p24773-e1010008.adobeaemcloud.com"],
  },
};

module.exports = nextConfig;
