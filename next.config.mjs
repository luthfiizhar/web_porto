/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/web_porto",
  assetPrefix: "/web_porto/",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
