import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Simone & Jovita Maps - Luxury Address Registration",
  description: "Luxury Google Maps Address Registration Platform. Interactive mapping and location services for premium properties.",
  keywords: ["maps", "address registration", "luxury properties", "geolocation"],
  authors: [{ name: "Simone & Jovita" }],
  viewport: "width=device-width, initial-scale=1.0",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://simone-jovita-maps.pages.dev",
    title: "Simone & Jovita Maps",
    description: "Luxury Google Maps Address Registration Platform",
    images: [
      {
        url: "https://simone-jovita-maps.pages.dev/og-image.png",
        width: 1200,
        height: 630,
        alt: "Simone & Jovita Maps",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simone & Jovita Maps",
    description: "Luxury Google Maps Address Registration Platform",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#1a1a2e" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  );
}