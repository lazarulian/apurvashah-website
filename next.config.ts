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
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        port: "",
        hostname: "source.unsplash.com",
      },
      {
        protocol: "https",
        port: "",
        hostname: "assets.literal.club",
      },
    ],
  },
};

export default nextConfig;
