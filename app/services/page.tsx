"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Play, ExternalLink as ExternalLinkIcon } from "lucide-react";

const heroImages = [
  "/branding/branding4.jpeg",
  "/services/billboards1.jpeg",
  "/services/prevailmart3.jpeg",
];

// Define the service type
interface Service {
  title: string;
  desc: string;
  image: string;
  type: "image" | "video" | "external";
  link?: string;
}

export default function Services() {
  const [scrolled, setScrolled] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Auto-changing background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const blobs = document.querySelectorAll(".blob");

      blobs.forEach((blob, i) => {
        const speed = (i + 1) * 0.12;
        const x = (e.clientX / window.innerWidth - 0.5) * speed * 50;
        const y = (e.clientY / window.innerHeight - 0.5) * speed * 50;
        (blob as HTMLElement).style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Services with appropriate image mappings
  const enhancedServices: Service[] = [
    { 
      title: "Branding & Identity", 
      desc: "Complete brand strategy and visual identity systems that define your brand's personality and position you as a market leader.",
      image: "/services/prevailmart4.jpeg",
      type: "image"
    },
    { 
      title: "Graphic Design", 
      desc: "Stunning visual designs for all your business needs including logos, brochures, flyers, social media graphics, and more.",
      image: "/services/business cards2.jpeg",
      type: "image"
    },
    { 
      title: "Digital Marketing", 
      desc: "Data-driven marketing strategies across all digital channels to increase visibility, engagement, and conversions.",
      image: "/services/digitalmarketing.jpg",
      type: "image"
    },
    { 
      title: "Printing Solutions", 
      desc: "High quality printing services for business cards, banners, brochures, and all your marketing collateral needs.",
      image: "/services/printing video.mp4",
      type: "video"
    },
    { 
      title: "3D Signage", 
      desc: "Eye-catching indoor and outdoor signage solutions that attract attention and reinforce your brand presence.",
      image: "/services/3D-signage.png",
      type: "image"
    },
    { 
      title: "Web Design", 
      desc: "Modern, responsive websites designed to convert visitors into customers with seamless user experiences.",
      image: "/services/web-design.jpg",
      type: "image"
    },
  ];

  // Helper function to render media based on type
  const renderMedia = (service: Service, index: number) => {
    if (service.type === "video") {
      return (
        <div className="h-56 overflow-hidden relative bg-black">
          <video
            src={service.image}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            muted
            playsInline
            loop
          />
          {/* Video Play Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-all duration-300">
            <div className="w-16 h-16 bg-red-600/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg shadow-red-600/30">
              <Play className="w-8 h-8 text-white ml-1" />
            </div>
          </div>
          {/* Video Badge */}
          <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg">
            Video
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>
      );
    } else {
      return (
        <div className="h-56 overflow-hidden relative">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
          {/* Number Badge */}
          <div className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center bg-red-600 text-white text-xl font-black rounded-xl shadow-lg">
            {String(index + 1).padStart(2, '0')}
          </div>
          {/* Category Tag */}
          <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm text-white text-xs px-3 py-1.5 rounded-full border border-white/10">
            {service.title.split(' ')[0]}
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <Navbar scrolled={scrolled} />

      <section className="relative overflow-hidden bg-white">

        {/* ================= HERO WITH AUTO-CHANGING IMAGES ================= */}
        <div className="relative h-[70vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden pt-16 md:pt-20">

          {/* AUTO-CHANGING IMAGE BACKGROUND */}
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 w-full h-full transition-opacity duration-1000"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: index === currentImageIndex ? 1 : 0,
              }}
            />
          ))}

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/65" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          {/* SLIDE INDICATORS */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
            {heroImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentImageIndex 
                    ? 'bg-red-600 w-8' 
                    : 'bg-white/50 hover:bg-white/80'
                }`}
              />
            ))}
          </div>

          {/* CONTENT */}
          <div className="relative z-10 max-w-4xl px-6">

            <span className="inline-block px-5 py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs tracking-[0.3em] backdrop-blur-sm mb-6">
              OUR SERVICES
            </span>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight">
              We Don&apos;t Just Design
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                We Build Brands That Sell
              </span>
            </h1>

            <p className="mt-6 text-gray-200 text-lg md:text-xl leading-8 max-w-2xl mx-auto">
              Branding, graphic design, marketing, signage, printing & websites
              everything engineered to grow your business.
            </p>

          </div>
        </div>

        {/* ================= FLOATING BLOBS ================= */}
        <div className="blob absolute top-[-150px] left-[-150px] w-[500px] h-[500px] bg-red-200/20 blur-[160px] rounded-full" />
        <div className="blob absolute bottom-[-200px] right-[-150px] w-[600px] h-[600px] bg-blue-200/20 blur-[180px] rounded-full" />

        {/* ================= INTRO ================= */}
        <div className="max-w-5xl mx-auto text-center px-6 py-24">
          <span className="inline-block px-5 py-2 rounded-full bg-red-50 text-red-600 text-xs font-semibold tracking-widest uppercase mb-4">
            What We Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900">
            Full-Service Creative
            <span className="block text-red-600">Solutions</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4 rounded-full" />
          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
            We create full brand systems not just designs.
            Everything is built to attract customers and increase revenue.
          </p>
        </div>

        {/* ================= SERVICES GRID ================= */}
        <div className="max-w-7xl mx-auto px-6 pb-28">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enhancedServices.map((service, index) => {
              const isVideo = service.type === "video";
              
              return (
                <div key={service.title} className="group relative">
                  {/* glow */}
                  <div className="absolute inset-0 rounded-3xl bg-red-200/30 blur-2xl opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

                  <div className="relative bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Media */}
                    {renderMedia(service, index)}

                    {/* CONTENT */}
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                        {service.title}
                      </h3>

                      <p className="mt-3 text-gray-600 leading-relaxed">
                        {service.desc}
                      </p>

                      {isVideo && (
                        <div className="mt-4 inline-flex items-center gap-2 text-sm text-red-600 font-medium">
                          <Play className="w-4 h-4" />
                          Watch the process
                        </div>
                      )}

                      {/* Animated Line */}
                      <div className="mt-6 h-[2px] w-0 bg-gradient-to-r from-red-600 to-red-400 group-hover:w-full transition-all duration-700 rounded-full" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= CTA ================= */}
        <div className="px-6 pb-28">
          <div className="max-w-6xl mx-auto text-center bg-gradient-to-br from-gray-900 to-black text-white rounded-[40px] p-16 md:p-20 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-[url('/location/marvel1.jpeg')] opacity-10 bg-cover bg-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <span className="inline-block px-5 py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs tracking-[0.3em] backdrop-blur-sm mb-6">
                LET&apos;S WORK TOGETHER
              </span>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black">
                Ready To Build Something
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                  Powerful?
                </span>
              </h2>

              <p className="mt-6 text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
                Let&apos;s turn your business into a brand people remember.
              </p>

              <Link
                href="/contact"
                className="mt-10 inline-block px-10 py-4 bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/30"
              >
                Let&apos;s Talk
              </Link>
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </>
  );
}