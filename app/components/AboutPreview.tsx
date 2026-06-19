"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Target } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPreview() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const frameRef = useRef(null);
  const lineRef = useRef(null);
  const floatingElementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ===== Section Reveal with Parallax =====
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
      });

      // ===== Floating Elements Animation =====
      floatingElementsRef.current.forEach((el, i) => {
        if (el) {
          gsap.to(el, {
            y: i % 2 === 0 ? -20 : 20,
            x: i % 3 === 0 ? 15 : -15,
            duration: 4 + i,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: i * 0.5,
          });
        }
      });

      // ===== Image with Cinematic Reveal =====
      gsap.from(frameRef.current, {
        opacity: 0,
        scale: 0.85,
        rotation: -3,
        duration: 1.6,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // ===== Image Slow Zoom =====
      gsap.to(imageRef.current, {
        scale: 1.12,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ===== Text Reveal =====
      gsap.from(textRef.current, {
        opacity: 0,
        y: 60,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // ===== Animated Line =====
      gsap.fromTo(
        lineRef.current,
        { width: "0%", opacity: 0 },
        {
          width: "120px",
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

      // ===== Highlight Items with Stagger =====
      const highlights = document.querySelectorAll(".highlight-item");
      gsap.from(highlights, {
        opacity: 0,
        x: -30,
        scale: 0.9,
        duration: 0.7,
        stagger: 0.15,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

      // ===== CTA with Bounce =====
      const cta = document.querySelector(".cta-button");
      gsap.from(cta, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        delay: 0.6,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-32 bg-gradient-to-b from-white via-gray-50/30 to-white overflow-hidden"
    >
      {/* ===== Premium Animated Background ===== */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-gradient-to-br from-red-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-gradient-to-tl from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-red-100/10 rounded-full blur-2xl" />
      </div>

      {/* ===== Floating Decorative Elements ===== */}
      <div
        ref={(el) => { floatingElementsRef.current[0] = el; }}
        className="absolute top-20 right-20 w-12 h-12 bg-red-500/10 rounded-full border border-red-500/20 hidden md:block"
      />
      <div
        ref={(el) => { floatingElementsRef.current[1] = el; }}
        className="absolute bottom-32 left-20 w-8 h-8 bg-blue-500/10 rounded-full border border-blue-500/20 hidden md:block"
      />
      <div
        ref={(el) => { floatingElementsRef.current[2] = el; }}
        className="absolute top-1/3 left-10 w-16 h-16 bg-purple-500/5 rounded-full border border-purple-500/10 hidden md:block"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* ===== Single Layout: Image Left, Text Right ===== */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 lg:gap-24 items-center">
          
          {/* Image Column - Left */}
          <div ref={frameRef} className="relative order-1 md:order-1">
            <div className="absolute -inset-2 md:-inset-4 bg-gradient-to-r from-red-600/10 via-transparent to-red-600/10 rounded-[32px] blur-xl" />
            
            <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden border-2 border-white shadow-2xl">
              <img
                ref={imageRef}
                src="/location/marvel1.jpeg"
                alt="Marvel Creatives Office"
                className="w-full h-[280px] md:h-[520px] object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              
              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-white/30 rounded-tl-2xl" />
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/30 rounded-tr-2xl" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-white/30 rounded-bl-2xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-white/30 rounded-br-2xl" />

              </div>
            {/* Desktop Label Badge */}
            <div className="absolute -bottom-4 left-6 hidden md:flex bg-gradient-to-r from-black to-gray-900 text-white text-xs px-4 py-2 rounded-full tracking-widest items-center gap-2 shadow-xl">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
              EST. 4+ YEARS • ZIMBABWE BASED
            </div>
          </div>

          {/* ===== Text Column - Right (Single Version) ===== */}
          <div ref={textRef} className="order-2 md:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-50 to-red-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-red-600" />
              <span className="uppercase tracking-[0.3em] text-xs font-semibold text-red-600">
                Who We Are
              </span>
            </div>

            <div ref={lineRef} className="h-[3px] bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-6" />

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
              We Build Brands
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-400">
                People Remember
              </span>
            </h2>

            <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mt-4 rounded-full" />

            <p className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed bg-white/50 p-4 md:p-6 rounded-2xl border border-gray-100/50 shadow-sm backdrop-blur-sm">
              We are a creative studio based in Harare delivering branding,
              graphic design, signage, printing, digital marketing, and web 
              solutions that help businesses grow with clarity and impact.
            </p>

            {/* Highlights */}
            <div className="mt-6 md:mt-8 space-y-3 md:space-y-4">
              <div className="highlight-item flex items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-xl shadow-sm md:shadow-md border border-gray-100/50 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-red-500 to-red-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-red-600/30">
                  <Target className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700">Strategic Brand Identity & Positioning</span>
              </div>
              <div className="highlight-item flex items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-xl shadow-sm md:shadow-md border border-gray-100/50 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-gray-900/30">
                  <Zap className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700">High-End Digital & Web Experiences</span>
              </div>
              <div className="highlight-item flex items-center gap-3 md:gap-4 bg-white p-3 md:p-4 rounded-xl shadow-sm md:shadow-md border border-gray-100/50 hover:shadow-lg transition-shadow">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-600/30">
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-white" />
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700">Graphic Design & Visual Communication</span>
              </div>
            </div>

            {/* CTA */}
            <div className="cta-button mt-8 md:mt-10">
              <Link href="/portfolio">
                <button className="group w-full md:w-auto px-6 md:px-10 py-3.5 md:py-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl font-semibold transition-all duration-300 hover:scale-[1.02] md:hover:scale-105 shadow-lg shadow-red-600/30 flex items-center justify-center md:justify-start gap-2 text-sm md:text-base">
                  Explore Our Work
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}