/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/resume",
  output: "export",
  reactStrictMode: true,
  images: [
    {
      unoptimized: true,
    },
    {
      protocol: "https",
      hostname: "luthfiizhar.github.io/resume/",
      port: "",
      pathname: "/images/**",
    },
  ],
};

export default nextConfig;
