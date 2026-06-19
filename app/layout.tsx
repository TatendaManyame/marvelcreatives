import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//import AIChatbot from "./components/AIChatbot";
import WhatsAppButton from "./components/WhatsAppButton";

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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export const metadata: Metadata = {
  title: "Marvel Creatives - Branding & Creative Agency UAE",
  description:
    "We build brands that sell. Full-service creative agency in UAE offering branding, signage, digital marketing, printing, and web design services.",
  metadataBase: new URL("https://marvelcreatives.com"),
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
      <body className="bg-white text-black overflow-x-hidden">

        {/* GLOBAL PAGE CONTAINER */}
        <div className="min-h-screen flex flex-col">

          {/* MAIN WRAPPER (THIS FIXES ALIGNMENT) */}
          <main
            id="main-content"
            className="flex-1 w-full max-w-[100vw] overflow-x-hidden"
          >
            {/* INNER LAYOUT CONTAINER */}
            <div className="w-full">
              {children}
            </div>
          </main>

          {/* GLOBAL FLOATING UI */}
          <WhatsAppButton />
          

        </div>

        {/* ACCESSIBILITY */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-red-600 focus:text-white focus:px-4 focus:py-2 focus:rounded-lg"
        >
          Skip to content
        </a>
      </body>
    </html>
  );
}