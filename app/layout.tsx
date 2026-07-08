// app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import WhatsAppButton from "./components/WhatsAppButton";
import ClientLayout from "./components/ClientLayout";

export const dynamic = "force-static";
export const revalidate = 0;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#1a1a1a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.marvelcreatives.co"),

  title: {
    default: "Marvel Creatives | Branding, Signage, Graphic Design & Printing Zimbabwe",
    template: "%s | Marvel Creatives",
  },

  description:
    "Marvel Creatives is a creative agency in Harare, Zimbabwe offering branding, signage, web design, graphic design, digital marketing, printing and creative solutions.",

  keywords: [
    "branding Zimbabwe",
    "branding Harare",
    "signage Harare",
    "web design Zimbabwe",
    "graphic design Harare",
    "digital marketing Zimbabwe",
    "printing services Harare",
    "creative agency Zimbabwe",
    "Marvel Creatives",
  ],

  authors: [
    {
      name: "Marvel Creatives",
    },
  ],

  creator: "Marvel Creatives",
  publisher: "Marvel Creatives",

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/icon0.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon.ico",
        type: "image/x-icon",
      },
    ],
    apple: "/apple-icon.png",
  },

  manifest: "/manifest.json",

  openGraph: {
    title: "Marvel Creatives | Branding & Creative Agency Zimbabwe",
    description: "Branding, signage, web design, graphic design, digital marketing and printing services in Harare Zimbabwe.",
    url: "https://www.marvelcreatives.co",
    siteName: "Marvel Creatives",
    locale: "en_ZW",
    type: "website",
    images: [
      {
        // Use logo 2.png (black text) for Open Graph - works on white background
        url: "/logo/logo 2.png",
        width: 1200,
        height: 630,
        alt: "Marvel Creatives Logo",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Marvel Creatives",
    description: "Branding, signage, web design, digital marketing and printing services in Zimbabwe.",
    images: ["/logo/logo 2.png"],
  },

  other: {
    "apple-mobile-web-app-title": "marvelcreatives",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body
        className="
          bg-white 
          text-black 
          overflow-x-hidden
        "
      >
        <ClientLayout>
          <div
            className="
              min-h-screen 
              flex 
              flex-col
              relative
            "
          >
            <main
              id="main-content"
              className="
                flex-1 
                w-full 
                max-w-[100vw]
                overflow-x-hidden
              "
            >
              <div className="w-full">
                {children}
              </div>
            </main>

            {/* WhatsApp Button Container - Fixed positioning wrapper */}
            <div className="fixed bottom-40 right-6 z-50">
              <WhatsAppButton />
            </div>
          </div>

          <a
            href="#main-content"
            className="
              sr-only
              focus:not-sr-only
              focus:absolute
              focus:top-4
              focus:left-4
              focus:z-[100]
              focus:bg-red-600
              focus:text-white
              focus:px-4
              focus:py-2
              focus:rounded-lg
            "
          >
            Skip to content
          </a>

          {/* Organization Structured Data - Use logo 2.png for better visibility */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Marvel Creatives",
                "url": "https://www.marvelcreatives.co",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.marvelcreatives.co/logo/logo 2.png",
                  "width": 1200,
                  "height": 630,
                  "caption": "Marvel Creatives Logo"
                },
                "image": "https://www.marvelcreatives.co/logo/logo 2.png",
                "description": "Creative agency in Harare Zimbabwe offering branding, signage, web design, graphic design, digital marketing and printing.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Harare",
                  "addressCountry": "ZW"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "customer service",
                  "availableLanguage": ["English"]
                },
                "sameAs": [
                  "https://www.instagram.com/marvel.crea",
                  "https://www.facebook.com/MarvelCreatives"
                ]
              }),
            }}
          />

          {/* Local Business Structured Data - Use logo 2.png */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Marvel Creatives",
                "url": "https://www.marvelcreatives.co",
                "logo": "https://www.marvelcreatives.co/logo/logo 2.png",
                "image": "https://www.marvelcreatives.co/logo/logo 2.png",
                "description": "Branding, signage, web design, graphic design, digital marketing and printing services in Harare Zimbabwe.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Harare",
                  "addressCountry": "ZW"
                },
                "priceRange": "$$",
                "openingHours": "Mo-Fr 08:00-17:00"
              }),
            }}
          />
        </ClientLayout>
      </body>
    </html>
  );
}