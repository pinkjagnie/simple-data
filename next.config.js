/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_APP_PB_URL: process.env.NEXT_APP_PB_URL,
  },
  images: {
    domains: ["images.pexels.com", "daisyui.com"],
  },
};

module.exports = nextConfig;
