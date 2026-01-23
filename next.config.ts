import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["mdx", "ts", "tsx"],
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://blog.apurvashah.org",
      },
      {
        source: "/photography",
        destination: "https://photography.apurvashah.org/",
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        port: "",
        hostname: "**.literal.club",
      },
      {
        protocol: "https",
        port: "",
        hostname: "**.digitaloceanspaces.com",
      },
    ],
  },
};

export default nextConfig;
