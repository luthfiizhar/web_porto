/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/web_porto",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
