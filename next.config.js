/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      // TEST Domains
      "http2.mlstatic.com",
      // OK Domains
      "img.icons8.com",
      "media-exp1.licdn.com",
      "via.placeholder.com"
    ],
  },
};

module.exports = nextConfig;
