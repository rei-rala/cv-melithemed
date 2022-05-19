/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // TEST Domains
    domains: ["http2.mlstatic.com",
      // OK Domains
      "img.icons8.com",
    ],
  },
};

module.exports = nextConfig;
