"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPreview() {
  const sectionRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const frameRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ===== Soft section reveal =====
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power2.out",
      });

      // ===== Image entrance =====
      gsap.from(frameRef.current, {
        opacity: 0,
        x: -80,
        scale: 0.95,
        duration: 1.4,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // ===== Image slow zoom (luxury feel) =====
      gsap.to(imageRef.current, {
        scale: 1.08,
        duration: 6,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // ===== Text reveal =====
      gsap.from(textRef.current, {
        opacity: 0,
        x: 60,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      // ===== Accent line animation =====
      gsap.fromTo(
        lineRef.current,
        { width: "0%" },
        {
          width: "120px",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
          },
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-36 bg-white overflow-hidden"
    >

      {/* ===== Premium soft background ===== */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,80,0.06),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(0,120,255,0.06),transparent_50%)]" />

      {/* floating glow */}
      <div className="absolute top-[-180px] left-[-180px] w-[500px] h-[500px] bg-red-200/30 blur-[160px] rounded-full" />
      <div className="absolute bottom-[-200px] right-[-200px] w-[550px] h-[550px] bg-blue-200/20 blur-[180px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-24 items-center relative z-10">

        {/* ===== IMAGE ===== */}
        <div ref={frameRef} className="relative">

          {/* floating frame */}
          <div className="absolute inset-0 translate-x-5 translate-y-5 border border-gray-200 rounded-[32px]" />

          <div className="relative rounded-[32px] overflow-hidden border border-gray-200 shadow-2xl">

            <img
              ref={imageRef}
              src="/location/marvel1.jpeg"
              alt="Marvel Creatives Office"
              className="w-full h-[520px] object-cover"
            />

            {/* soft overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />

          </div>

          {/* label */}
          <div className="absolute -bottom-5 left-6 bg-black text-white text-xs px-4 py-2 rounded-full tracking-widest">
            EST. 4+ YEARS • ZIMBABWE BASED
          </div>

        </div>

        {/* ===== TEXT ===== */}
        <div ref={textRef}>

          {/* small intro */}
          <span className="uppercase tracking-[0.35em] text-xs text-gray-500">
            Who We Are
          </span>

          {/* animated line */}
          <div
            ref={lineRef}
            className="h-[2px] bg-red-600 mt-4 mb-8"
          />

          {/* headline */}
          <h2 className="text-4xl md:text-6xl font-black leading-tight text-black">
            We Build Brands That
            <span className="block text-red-600">
              People Remember
            </span>
          </h2>

          {/* description */}
          <p className="mt-8 text-gray-600 text-lg leading-8 border-l-2 border-red-500 pl-6">
            We are a creative studio based in Harare delivering branding,
            graphic design, signage, printing, digital marketing, and web 
            solutions that help businesses grow with clarity and impact.
          </p>

          {/* highlights */}
          <div className="mt-10 space-y-4 text-gray-700 text-sm">

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-red-600 rounded-full" />
              Strategic Brand Identity & Positioning
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-black rounded-full" />
              High-End Digital & Web Experiences
            </div>

            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
              Graphic Design & Visual Communication
            </div>

          </div>

          {/* CTA */}
          <Link href="/portfolio">
            <button className="mt-12 px-10 py-4 bg-black text-white rounded-full hover:bg-red-600 transition-all duration-300 shadow-xl hover:scale-105 transform">
              Explore Our Work
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}