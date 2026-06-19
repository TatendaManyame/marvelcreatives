"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const projects = [
  "/services/business cards1.jpeg",
  "/services/business cards2.jpeg",
  "/services/prevailmart4.jpeg",
  "/services/elephant branding.jpeg",
  "/services/banner1.jpeg",
  "/services/billboards1.jpeg",
];

export default function Portfolio() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let x = 0;
    const speed = 0.5; // 👈 adjust speed (0.3 = slow luxury, 1 = fast)

    const animate = () => {
      x -= speed;

      // reset for infinite loop
      if (Math.abs(x) >= el.scrollWidth / 2) {
        x = 0;
      }

      el.style.transform = `translateX(${x}px)`;
    };

    gsap.ticker.add(animate);

    return () => {
      gsap.ticker.remove(animate);
    };
  }, []);

  return (
    <>
      <Navbar />

      <section className="relative bg-white overflow-hidden">

        {/* ===== HERO ===== */}
        <div className="relative pt-40 pb-20 text-center px-6">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,80,0.08),transparent_45%)]" />

          <div className="relative z-10 max-w-4xl mx-auto hero-text">

            <span className="inline-block mb-6 px-5 py-2 rounded-full border border-red-200 bg-red-50 text-red-600 text-sm tracking-[0.25em]">
              MARVEL CREATIVES • PORTFOLIO
            </span>

            <h1 className="text-5xl md:text-7xl font-black text-black leading-tight">
              Our Work Speaks
              <span className="block text-red-600">
                For Itself
              </span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
              A collection of branding, signage, marketing, printing and digital
              design projects crafted for real businesses.
            </p>

          </div>
        </div>

        {/* ===== AUTO SCROLL TRACK ===== */}
        <div className="relative pb-32 overflow-hidden">

          <div
            ref={trackRef}
            className="flex gap-8 w-max px-10 will-change-transform"
          >

            {projects.concat(projects).map((img, i) => (
              <div
                key={i}
                className="project-card relative w-[280px] md:w-[360px] h-[420px] rounded-3xl overflow-hidden shadow-2xl group flex-shrink-0"
              >

                <img
                  src={img}
                  alt={`Branding Project ${(i % projects.length) + 1}`}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  loading="lazy"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-red-500/10" />

                {/* label */}
                <div className="absolute bottom-0 p-6">
                
                  <div className="text-gray-300 text-sm">
                    Branding • Design • Creative Work
                  </div>
                </div>

              </div>
            ))}

          </div>
        </div>

      </section>

      
    </>
  );
}