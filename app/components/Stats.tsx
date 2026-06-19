"use client";

import { useEffect, useRef } from "react";
import CountUp from "react-countup";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    // ===== Section Reveal =====
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      }
    );

    // ===== Column Build Animation =====
    gsap.fromTo(
      cardsRef.current,
      {
        y: 120,
        opacity: 0,
        scaleY: 0.8,
      },
      {
        y: 0,
        opacity: 1,
        scaleY: 1,
        duration: 1.2,
        stagger: 0.12,
        ease: "power4.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      }
    );
  }, []);

  const stats = [
    { value: 4, label: "Years Operating", suffix: "+" },
    { value: 50, label: "Happy Clients", suffix: "+" },
    { value: 120, label: "Projects Completed", suffix: "+" },
    { value: 100, label: "Client Satisfaction", suffix: "%" },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-36 bg-white overflow-hidden"
    >
      {/* ===== Background Pattern ===== */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* ===== Animated Light Beam ===== */}
      <div className="absolute top-0 left-[-50%] w-[60%] h-full bg-gradient-to-r from-transparent via-red-200/30 to-transparent rotate-12 animate-beam" />

      <style jsx>{`
        @keyframes beam {
          0% { transform: translateX(0) rotate(12deg); }
          100% { transform: translateX(200%) rotate(12deg); }
        }
        .animate-beam {
          animation: beam 6s linear infinite;
        }
      `}</style>

      {/* ===== Background Glows ===== */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-red-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        {/* ===== Header ===== */}
        <div className="text-center mb-20">
          <span className="inline-block px-5 py-2 rounded-full bg-red-50 text-red-600 text-xs font-semibold tracking-widest uppercase mb-4">
            Our Impact
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-gray-900">
            Building Brands That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
              Deliver Results
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4 rounded-full" />
          <p className="text-gray-500 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
            Committed to excellence, innovation, and client success here&apos;s what we&apos;ve achieved.
          </p>
        </div>

        {/* ===== Stats Grid ===== */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {stats.map((item, i) => (
            <div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="group relative"
            >
              {/* Top Accent Line */}
              <div className="h-1 w-full bg-gradient-to-r from-red-500 to-red-600 mb-4 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Card */}
              <div className="relative bg-white border border-gray-100 rounded-2xl p-8 text-center shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-b from-red-50/50 to-transparent rounded-2xl" />

                {/* Pulse Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-1.5 h-8 bg-red-500 opacity-30 group-hover:opacity-60 transition-opacity duration-300 rounded-full" />

                {/* Number */}
                <h3 className="text-5xl lg:text-6xl font-black text-gray-900 relative z-10">
                  <CountUp end={item.value} duration={2.5} />
                  {item.suffix}
                </h3>

                {/* Label */}
                <p className="mt-3 text-gray-500 text-sm font-medium uppercase tracking-[0.15em] relative z-10">
                  {item.label}
                </p>

                {/* Decorative Icon */}
                <div className="mt-4 flex justify-center gap-1 relative z-10">
                  {[...Array(3)].map((_, idx) => (
                    <div
                      key={idx}
                      className="w-1.5 h-1.5 rounded-full bg-red-400/20 group-hover:bg-red-400/60 transition-all duration-300"
                      style={{ transitionDelay: `${idx * 100}ms` }}
                    />
                  ))}
                </div>
              </div>

              {/* Bottom Shadow */}
              <div className="h-2 w-3/4 mx-auto mt-4 bg-black/5 blur-md rounded-full group-hover:bg-black/10 transition-all duration-300" />
            </div>
          ))}

        </div>

        {/* ===== Bottom Decorative Line ===== */}
        <div className="mt-20 flex justify-center">
          <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-red-400 to-transparent rounded-full" />
        </div>
      </div>
    </section>
  );
}