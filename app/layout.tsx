import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import "./globals.css";
import { cn } from "@/lib/utils";

const monument = localFont({
  src: [
    {
      path: "../public/font/ABCMonumentGrotesk-Medium-Trial.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/font/ABCMonumentGrotesk-Regular-Trial.otf",
      weight: "400",
      style: "regular",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Apurva Shah",
    default: "Apurva Shah",
  },
  description:
    "Software Engineer & Videographer, based in San Francisco, California.",
  keywords: ["Apurva Shah", "Apurva", "San Francisco", "UCLA", "Fremont"],
  openGraph: {
    title: "Apurva Shah",
    description:
      "Software Engineer & Videographer, based in San Francisco, California.",
    images: "/og.png",
    url: "https://apurvashah.org",
  },
  alternates: {
    canonical: "https://apurvashah.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(monument.className)}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}