import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francesco Valentinuzzi | Cinematic Destination Photographer & Film Director",
  description: "Award-winning destination wedding photographer and commercial film director based in Northern Italy. Crafting authentic narratives in the Dolomites, Tuscany, Lake Como, and worldwide.",
  keywords: ["Destination Wedding Photographer", "Dolomites Elopement Photographer", "Italy Wedding Photographer", "Commercial Film Director Italy", "Francesco Valentinuzzi", "Studio 3 Cime"],
  openGraph: {
    title: "Francesco Valentinuzzi | Cinematic Destination Photographer",
    description: "Crafting authentic narratives for destination weddings, intimate elopements, and commercial brand campaigns.",
    url: "https://www.francescovalentinuzzi.com",
    siteName: "Francesco Valentinuzzi",
    images: [
      {
        url: "https://www.francescovalentinuzzi.com/hero.jpeg", // Ensure this matches your live URL and hero image
        width: 1200,
        height: 630,
        alt: "Cinematic destination wedding in the Dolomites",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francesco Valentinuzzi | Cinematic Destination Photographer",
    description: "Award-winning destination wedding photographer and commercial film director based in Northern Italy.",
    images: ["https://www.francescovalentinuzzi.com/hero.jpeg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}