"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function CTA() {

  useEffect(() => {
    const el = document.querySelector(".cta-box");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
        }
      });
    }, { threshold: 0.3 });

    if (el) observer.observe(el);
  }, []);

  return (
    <section className="relative py-28 overflow-hidden">

      {/* ===== Soft Gradient Background ===== */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500" />

      {/* Glow blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[300px] h-[300px] bg-white/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[300px] h-[300px] bg-black/10 blur-[120px] rounded-full" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

        <div
          className="
            cta-box
            opacity-0 translate-y-6
            transition-all duration-700
          "
        >

          {/* Heading */}
          <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
            Ready to grow your brand?
          </h2>

          {/* Sub text */}
          <p className="mt-5 text-white/80 text-lg">
            Let&apos;s build something meaningful, creative, and impactful together.
          </p>

          {/* Button */}
          <Link href="/contact">
            <button className="
              mt-10
              bg-white
              text-red-600
              px-8 py-4
              rounded-full
              font-semibold
              shadow-lg
              hover:scale-105
              hover:shadow-xl
              transition-all duration-300
            ">
              Get a Free Quote
            </button>
          </Link>

        </div>

      </div>
    </section>
  );
}