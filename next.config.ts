/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export", // You can remove this if you're not doing static export
  images: {
    unoptimized: true, // Only if you're not using next/image optimization (can remove if not needed)
  },
};

module.exports = nextConfig;
