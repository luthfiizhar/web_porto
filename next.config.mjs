/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/web_porto",
  trailingSlash: true,
  assetPrefix: "/web_porto/",
  output: "export",
  reactStrictMode: true,
  images: {
    unoptimized: true,
    // loader: "custom",
    // loaderFile: "./loader.js",
    // remotePatterns: {
    //   protocol: "https",
    //   hostname: "luthfiizhar.github.io/web_porto/",
    //   port: "",
    //   pathname: "/images/**",
    // },
  },
};

export default nextConfig;
