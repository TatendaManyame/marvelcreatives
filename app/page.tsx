// app/page.tsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutPreview from "./components/AboutPreview";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hidden logo for SEO and social sharing */}
      <div className="sr-only" aria-hidden="true">
        <Image
          src="/logo/logo 2.png"
          alt="Marvel Creatives Logo"
          width={1200}
          height={630}
          priority
        />
      </div>
      
      <Navbar />
      <Hero />
      <AboutPreview />
      <Services />
      <Stats />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}