import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Instagram, Tiktok } from "iconoir-react";
import "@/app/globals.css";

import BrandLogo from "@/components/icons/BrandLogo";
import Navbar from "@/components/ui/Navbar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://nujum-cafe-website.vercel.app"),
  title: {
    default: "Nujum Cafe • Melaka",
    template: "%s | Nujum Cafe",
  },
  description:
    "NUJUM Cafe in Melaka — serving pastas, steaks, pizzas & more. Experience magical taste in a cozy, stylish ambiance. Open daily 4PM–11PM.",
  keywords: [
    "Nujum Cafe",
    "Cafe Melaka",
    "Best cafe in Melaka",
    "Nujum Cafe menu",
    "Pasta Melaka",
    "Pizza Melaka",
    "Steak Melaka",
    "Cafe with ambience Melaka",
  ],
  authors: [
    { name: "Nujum Cafe", url: "https://nujum-cafe-website.vercel.app" },
  ],
  creator: "Nujum Cafe",
  publisher: "Nujum Cafe",
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://nujum-cafe-website.vercel.app",
    siteName: "Nujum Cafe",
    title: "Nujum Cafe • Melaka",
    description:
      "NUJUM Cafe in Melaka — serving pastas, steaks, pizzas & more. Experience magical taste in a cozy, stylish ambiance. Open daily 4PM–11PM.",
    images: [
      {
        url: "https://nujum-cafe-website.vercel.app/Images/banner.png",
        width: 1200,
        height: 630,
        alt: "Nujum Cafe Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nujum Cafe • Melaka",
    description:
      "NUJUM Cafe in Melaka — serving pastas, steaks, pizzas & more. Experience magical taste in a cozy, stylish ambiance. Open daily 4PM–11PM.",
    images: ["https://nujum-cafe-website.vercel.app/Images/banner.png"],
    creator: "@nujum.cafe",
  },
  alternates: {
    canonical: "https://nujum-cafe-website.vercel.app",
  },
  category: "Cafe",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative antialiased overflow-x-hidden overflow-y-auto bg-custom">
        <Navbar />
        <main className="w-full">{children}</main>
        <footer className="flex flex-col items-start justify-start px-4 py-8 sm:px-64 sm:py-24 gap-8 sm:gap-16 text-[#FFF5E8] bg-footer">
          <div className="flex flex-col sm:flex-row gap-8 w-full justify-between">
            <div className="flex flex-col gap-4 sm:gap-8">
              <Link href="/">
                <BrandLogo className="w-16 sm:w-24 h-8 sm:h-12 text-white" />
              </Link>
              <p>Nujum Cafe</p>
              <p>
                Lot 450/451 <br /> Bandar Bukit Baru Seksyen 5 <br />
                75460 Melaka
              </p>
              <div className="flex flex-col gap-4">
                <Link
                  href="tel:+601116174226"
                  className="flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" strokeWidth={2} />
                  <span className="hover:underline">+60 11-16174226</span>
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-8 sm:justify-between h-fit sm:h-64">
              <div className="flex flex-col gap-4">
                <span className="font-semibold">Informasi</span>
                {siteConfig.footerItems
                  .filter(
                    (item) =>
                      item.category === "informasi" && !item.status?.isHidden
                  )
                  .map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className="hover:text-amber-500"
                    >
                      {item.name}
                    </Link>
                  ))}
              </div>
              <div className="flex gap-4">
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.instagram.com/nujum.cafe/"
                >
                  <Instagram className="w-8 h-8 hover:text-amber-500" />
                </Link>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.tiktok.com/@nujum.cafe"
                >
                  <Tiktok className="w-8 h-8 hover:text-amber-500" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row pt-4 gap-4 w-full justify-between">
            <div className="flex gap-8">
              {siteConfig.footerItems
                .filter(
                  (item) => item.category === "sah" && !item.status?.isHidden
                )
                .map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="text-white/30 hover:text-amber-500"
                  >
                    {item.name}
                  </Link>
                ))}
            </div>
            <span className="text-white/30">
              © 2025 Nujum Cafe. All rights reserved.
            </span>
          </div>
        </footer>
      </body>
    </html>
  );
}
