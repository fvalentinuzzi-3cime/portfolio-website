import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from '@next/third-parties/google';
import Script from 'next/script';
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Francesco Valentinuzzi | Photographer & Film Director",
  description: "Award-winning photographer and commercial film director based in Northern Italy. Crafting authentic narratives in the Dolomites, Tuscany, and US.",
  keywords: ["Destination Wedding Photographer", "Dolomites Elopement Photographer", "Italy Wedding Photographer", "Commercial Film Director Italy", "Francesco Valentinuzzi", "Studio 3 Cime"],
  
  icons: {
    icon: "/portfolio_logo.png", 
    shortcut: "/portfolio_logo.png",
    apple: "/portfolio_logo.png",
  },

  openGraph: {
    title: "Francesco Valentinuzzi | Photographer & Film Director",
    description: "Crafting authentic narratives for destination weddings, intimate elopements, and commercial brand campaigns.",
    url: "https://www.francescovalentinuzzi.com",
    siteName: "Francesco Valentinuzzi",
    images: [
      {
        url: "https://www.francescovalentinuzzi.com/hero.jpeg",
        width: 1200,
        height: 630,
        alt: "Photographer and Film Director Francesco Valentinuzzi based in Northern Italy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Francesco Valentinuzzi | Photographer & Film Director",
    description: "Award-winning photographer and commercial film director based in Northern Italy.",
    images: ["https://www.francescovalentinuzzi.com/hero.jpeg"],
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const resolvedParams = await params;
  
  return (
    <html
      lang={resolvedParams.lang}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">
        
        {/* CHANGED: analytics_storage is now 'granted' so you can track events! */}
        <Script id="google-consent" strategy="beforeInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            gtag('consent', 'default', {
              'ad_storage': 'denied',
              'ad_user_data': 'denied',
              'ad_personalization': 'denied',
              'analytics_storage': 'granted' 
            });
          `}
        </Script>

        {children}
        
        <GoogleAnalytics gaId="G-640HRVTKP5" />
      </body>
    </html>
  );
}