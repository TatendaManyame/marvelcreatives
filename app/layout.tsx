import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import WhatsAppButton from "./components/WhatsAppButton";

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
  themeColor: "#ffffff",
};


export const metadata: Metadata = {

  metadataBase: new URL(
    "https://marvelcreatives.vercel.app"
  ),

  title: {
    default:
      "Marvel Creatives | Branding, Signage, Graphic Design & Printing Zimbabwe",
    template:
      "%s | Marvel Creatives",
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

    apple:
      "/apple-icon.png",

  },


  manifest:
    "/manifest.json",


  openGraph: {

    title:
      "Marvel Creatives | Branding & Creative Agency Zimbabwe",

    description:
      "Branding, signage, web design, graphic design, digital marketing and printing services in Harare Zimbabwe.",

    url:
      "https://marvelcreatives.vercel.app",

    siteName:
      "Marvel Creatives",

    locale:
      "en_ZW",

    type:
      "website",


    images: [
      {
        url:
          "/icon1.png",

        width:
          1200,

        height:
          630,

        alt:
          "Marvel Creatives Logo",
      },
    ],
  },


  twitter: {

    card:
      "summary_large_image",

    title:
      "Marvel Creatives",

    description:
      "Branding, signage, web design, digital marketing and printing services in Zimbabwe.",

    images:
      [
        "/icon1.png"
      ],
  },


  other: {

    "apple-mobile-web-app-title":
      "marvelcreatives",

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


        <div
          className="
            min-h-screen 
            flex 
            flex-col
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


            <div
              className="w-full"
            >

              {children}

            </div>


          </main>



          <WhatsAppButton />


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



        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({

              "@context":
                "https://schema.org",

              "@type":
                "LocalBusiness",

              name:
                "Marvel Creatives",

              image:
                "https://marvelcreatives.vercel.app/icon1.png",

              logo:
                "https://marvelcreatives.vercel.app/icon1.png",

              url:
                "https://marvelcreatives.vercel.app",

              description:
                "Creative agency in Harare Zimbabwe offering branding, signage, web design, graphic design, digital marketing and printing.",


              address: {

                "@type":
                  "PostalAddress",

                addressLocality:
                  "Harare",

                addressCountry:
                  "ZW",

              },

            }),
          }}
        />


      </body>

    </html>

  );
}