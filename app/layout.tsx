import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { Phone, Instagram, Tiktok, Shop, Clock } from "iconoir-react";
import "@/app/globals.css";

import BrandLogo from "@/components/icons/BrandLogo";
import Navbar from "@/components/ui/Navbar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nujumcafe.com"),
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
  authors: [{ name: "Nujum Cafe", url: "https://www.nujumcafe.com" }],
  creator: "Nujum Cafe",
  publisher: "Nujum Cafe",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "https://www.nujumcafe.com",
    siteName: "Nujum Cafe",
    title: "Nujum Cafe • Melaka",
    description:
      "NUJUM Cafe in Melaka — serving pastas, steaks, pizzas & more. Experience magical taste in a cozy, stylish ambiance. Open daily 4PM–11PM.",
    images: [
      {
        url: "https://www.nujumcafe.com/Images/banner.png",
        width: 1200,
        height: 630,
        alt: "Nujum Cafe Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@nujumcafe",
    creator: "@nujumcafe",
    title: "Nujum Cafe • Melaka",
    description:
      "NUJUM Cafe in Melaka — serving pastas, steaks, pizzas & more. Experience magical taste in a cozy, stylish ambiance. Open daily 4PM–11PM.",
    images: ["https://www.nujumcafe.com/Images/banner.png"],
  },
  alternates: {
    canonical: "https://www.nujumcafe.com",
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
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-KFM2K7B5L6"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-KFM2K7B5L6');
        `}
        </Script>
        <Script
          id="ldjson-cafe"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CafeOrCoffeeShop",
            name: "Nujum Cafe",
            image: "https://www.nujumcafe.com/Images/banner.png",
            url: "https://www.nujumcafe.com/",
            telephone: "+601116174226",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Lot 450/451, Bandar Bukit Baru Seksyen 5",
              addressLocality: "Melaka",
              postalCode: "75460",
              addressCountry: {
                "@type": "Country",
                name: "MY",
              },
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 2.218737453300185,
              longitude: 102.2537536714369,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "16:00",
                closes: "23:00",
              },
            ],
            servesCuisine: [
              "Western",
              "Pasta",
              "Pizza",
              "Steak",
              "Cafe Beverages",
            ],
            priceRange: "RM",
            sameAs: [
              "https://www.instagram.com/nujum.cafe/",
              "https://www.tiktok.com/@nujum.cafe",
            ],
          })}
        </Script>
      </head>
      <body className="relative antialiased overflow-x-hidden overflow-y-auto bg-custom">
        <Navbar />
        <main className="w-full">{children}</main>
        <footer className="flex flex-col items-start justify-start px-4 py-8 sm:px-64 sm:py-24 gap-8 sm:gap-16 text-[#FFF5E8] bg-footer">
          <div className="flex flex-col sm:flex-row gap-8 w-full justify-between">
            <div className="flex flex-col gap-8">
              <Link href="/">
                <BrandLogo className="w-24 h-12 text-white" />
              </Link>
              <p>NUJUM CAFE</p>
              <div className="flex flex-col gap-2 items-start">
                <span className="flex gap-2 items-center text-secondary-50">
                  <Clock className="w-5 h-5" strokeWidth={2} />
                  Waktu Operasi
                </span>
                <p>
                  Selasa - Ahad <br />
                  4–11 pm
                </p>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <span className="flex gap-2 items-center text-secondary-50">
                  <Shop className="w-5 h-5" strokeWidth={2} /> Alamat
                </span>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://maps.app.goo.gl/RxrynyY47KomLvfp7"
                >
                  <span className="hover:underline">
                    Lot 450/451 <br /> Bandar Bukit Baru Seksyen 5 <br />
                    75460 Melaka
                  </span>
                </Link>
              </div>
              <div className="flex flex-col gap-2 items-start">
                <span className="flex gap-2 items-center text-secondary-50">
                  <Phone className="w-5 h-5" strokeWidth={2} /> Telefon
                </span>
                <Link
                  href="tel:+601116174226"
                  className="flex items-center gap-2"
                >
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
