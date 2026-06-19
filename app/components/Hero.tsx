"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import Link from "next/link";

const backgrounds = [
  "/location/marvel1.jpeg",
  "/location/marvel2.jpeg",
  "/location/marvel3.jpeg",
  "/location/marel4.jpeg",
  //"/services/prevailmart4.jpeg",
  //"/services/business cards2.jpeg",
];

// Preload images for faster loading
const preloadImages = (images: string[]) => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
};

export default function Hero() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const textRef = useRef<HTMLParagraphElement | null>(null);
  const glow1 = useRef<HTMLDivElement | null>(null);
  const glow2 = useRef<HTMLDivElement | null>(null);
  const [currentBg, setCurrentBg] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload images on mount
  useEffect(() => {
    const loadImages = async () => {
      await Promise.all(
        backgrounds.map(
          (src) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = src;
              img.onload = resolve;
              img.onerror = resolve; // Resolve even if an image fails to load
            })
        )
      );
      setImagesLoaded(true);
    };

    loadImages();
  }, []);

  // Background rotation with optimized timing
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 6000); // Slower rotation for better performance

    return () => clearInterval(interval);
  }, []);

  // GSAP animations with cleanup
  useEffect(() => {
    if (!imagesLoaded) return;

    const ctx = gsap.context(() => {
      // Initial animations
      gsap.fromTo(
        titleRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.3,
          ease: "power2.out",
        }
      );

      // Subtle glow animations (reduced for performance)
      if (glow1.current && glow2.current) {
        gsap.to(glow1.current, {
          x: 20,
          y: 15,
          repeat: -1,
          yoyo: true,
          duration: 8,
          ease: "sine.inOut",
        });

        gsap.to(glow2.current, {
          x: -20,
          y: -15,
          repeat: -1,
          yoyo: true,
          duration: 9,
          ease: "sine.inOut",
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, [imagesLoaded]);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
    >
      {/* Background Images with lazy loading */}
      {backgrounds.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-[2500ms] ease-in-out ${
            currentBg === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt=""
            loading={index === 0 ? "eager" : "lazy"}
            className="absolute inset-0 h-full w-full object-cover"
            decoding="async"
          />
        </div>
      ))}

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Premium Gradient - Reduced layers for performance */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/40" />

      {/* Animated Glows - Optimized */}
      <div
        ref={glow1}
        className="absolute top-10 left-10 w-[300px] h-[300px] md:w-[450px] md:h-[450px] rounded-full bg-red-600/10 blur-[100px] md:blur-[120px] pointer-events-none"
      />
      <div
        ref={glow2}
        className="absolute bottom-10 right-10 w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full bg-red-500/8 blur-[100px] md:blur-[120px] pointer-events-none"
      />

      {/* Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 w-full py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block mb-4 sm:mb-6 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white text-xs sm:text-sm tracking-widest">
              MARVEL CREATIVES • ZIMBABWE
            </span>

            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white"
            >
              We Create
              <span className="block text-red-500">
                Brands That Stand Out
              </span>
            </h1>

            <p
              ref={textRef}
              className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              From branding and signage to digital marketing, graphic design, printing and web
              design, we help businesses build powerful identities that attract
              customers and drive growth.
            </p>

            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link
                href="/contact"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-red-600 text-white font-semibold hover:bg-red-700 transition-all duration-300 text-sm sm:text-base text-center hover:scale-105 transform"
              >
                Get Free Quote
              </Link>

              <Link
                href="/portfolio"
                className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white hover:bg-white hover:text-black transition-all duration-300 text-sm sm:text-base text-center"
              >
                View Portfolio
              </Link>
            </div>
          </div>

          {/* Right Side - Creative Ecosystem (Hidden on mobile for performance) */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative w-[500px] h-[500px] xl:w-[600px] xl:h-[600px]">
              
              {/* Center Orb */}
              <div className="absolute left-1/2 top-1/2 h-32 w-32 xl:h-44 xl:w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-red-500/30 bg-black/40 backdrop-blur-3xl flex items-center justify-center shadow-[0_0_60px_rgba(220,38,38,0.25)] xl:shadow-[0_0_80px_rgba(220,38,38,0.35)]">
                <div className="text-center">
                  <h3 className="text-2xl xl:text-3xl font-black text-white">
                    MARVEL
                  </h3>
                  <p className="text-[10px] xl:text-xs uppercase tracking-[0.4em] text-red-400 mt-1 xl:mt-2">
                    Creatives
                  </p>
                </div>
              </div>

              {/* Service Cards - Compact versions */}
              {[
                { title: "Branding", desc: "Identity & Strategy", pos: "top-8 left-16 xl:top-10 xl:left-20" },
                { title: "Marketing", desc: "SEO & Campaigns", pos: "top-12 right-2 xl:top-16 xl:right-0" },
                { title: "Signage", desc: "Indoor & Outdoor", pos: "left-0 top-[260px] xl:top-[280px]" },
                { title: "Printing", desc: "Premium Production", pos: "bottom-10 left-16 xl:bottom-12 xl:left-20" },
                { title: "Graphic Design", desc: "Visual Excellence", pos: "bottom-8 right-12 xl:bottom-10 xl:right-16" },
              ].map((service, index) => (
                <div
                  key={index}
                  className={`absolute ${service.pos} rounded-2xl xl:rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl px-5 xl:px-8 py-4 xl:py-6 transition-all duration-300 hover:bg-white/10 cursor-pointer`}
                >
                  <h4 className="text-white font-bold text-base xl:text-xl">
                    {service.title}
                  </h4>
                  <p className="text-gray-400 text-xs xl:text-sm mt-1 xl:mt-2">
                    {service.desc}
                  </p>
                </div>
              ))}

              {/* Featured Service Card - Changed to Graphic Design */}
              <div className="absolute right-0 top-[260px] xl:top-[280px] rounded-2xl xl:rounded-3xl border border-white/10 bg-red-600 px-5 xl:px-8 py-4 xl:py-6 shadow-[0_0_40px_rgba(220,38,38,0.35)] xl:shadow-[0_0_60px_rgba(220,38,38,0.45)]">
                <h4 className="text-white font-bold text-base xl:text-xl">
                  Billboards
                </h4>
              
              </div>

              {/* Connection Lines - SVG */}
              <svg
                className="absolute inset-0 h-full w-full pointer-events-none"
                viewBox="0 0 600 600"
                preserveAspectRatio="xMidYMid meet"
              >
                <line x1="300" y1="300" x2="160" y2="90" stroke="rgba(239,68,68,.25)" strokeWidth="1" />
                <line x1="300" y1="300" x2="470" y2="90" stroke="rgba(239,68,68,.25)" strokeWidth="1" />
                <line x1="300" y1="300" x2="90" y2="300" stroke="rgba(239,68,68,.25)" strokeWidth="1" />
                <line x1="300" y1="300" x2="510" y2="300" stroke="rgba(239,68,68,.25)" strokeWidth="1" />
                <line x1="300" y1="300" x2="180" y2="500" stroke="rgba(239,68,68,.25)" strokeWidth="1" />
                <line x1="300" y1="300" x2="450" y2="500" stroke="rgba(239,68,68,.25)" strokeWidth="1" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Fixed positioning */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
        <div className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1.5 h-2.5 sm:h-3 bg-white rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
}