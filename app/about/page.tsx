"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Testimonials from "../components/Testimonials";

import {
  FaMapMarkerAlt,
  FaBullseye,
  FaEye,
  FaLightbulb,
  FaHandshake,
  FaShieldAlt,
  FaAward,
} from "react-icons/fa";

export default function AboutPage() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));
  }, []);

  const reasons = [
    {
      icon: FaLightbulb,
      title: "Creative Excellence",
      description:
        "We push creative boundaries to deliver designs that are not just beautiful, but strategically impactful.",
    },
    {
      icon: FaHandshake,
      title: "Client-First Approach",
      description:
        "Your success is our success. We collaborate closely to ensure every solution aligns with your goals.",
    },
    {
      icon: FaShieldAlt,
      title: "Quality Assurance",
      description:
        "From concept to delivery, we maintain the highest standards of quality and attention to detail.",
    },
    {
      icon: FaAward,
      title: "Proven Results",
      description:
        "Our track record speaks for itself we've helped countless brands achieve measurable growth.",
    },
  ];

  return (
    <>
      <Navbar />

      <section className="relative pt-40 pb-24 bg-white overflow-hidden">

        {/* ===== BACKGROUND GLOWS ===== */}
        <div className="absolute top-[-150px] left-[-120px] w-[400px] h-[400px] bg-pink-300/30 blur-[120px] rounded-full" />
        <div className="absolute top-[200px] right-[-150px] w-[450px] h-[450px] bg-blue-300/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-180px] left-[30%] w-[500px] h-[500px] bg-red-200/20 blur-[160px] rounded-full" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">

          {/* ===== HERO TEXT ===== */}
          <div className="text-center mb-20 reveal opacity-0 translate-y-6 transition-all duration-700">
            <span className="inline-block px-5 py-2 rounded-full bg-red-50 text-red-600 text-xs font-semibold tracking-widest uppercase mb-4">
              About Marvel Creatives
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight">
              Where Creativity
              <span className="block text-red-600">Meets Strategy</span>
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4 rounded-full" />
            <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              We are a Harare-based creative studio dedicated to building brands
              that make a lasting impact through innovative design and strategic thinking.
            </p>
          </div>

          {/* ===== WHO WE ARE ===== */}
          <div className="mb-28 grid lg:grid-cols-2 gap-16 items-center reveal opacity-0 translate-y-6 transition-all duration-700">
            {/* Left Content */}
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-semibold tracking-widest uppercase mb-4">
                Who We Are
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
                We Are Marvel
                <span className="block text-red-600">Creatives</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mt-4 rounded-full" />
              <p className="mt-6 text-gray-600 text-lg leading-relaxed">
                Marvel Creatives is a creative company based in Harare, Zimbabwe. 
                We are passionate about crafting compelling brand identities and visual 
                experiences that resonate with audiences and drive business growth.
              </p>
              <p className="mt-4 text-gray-600 text-lg leading-relaxed">
                Our team combines strategic thinking with artistic excellence to deliver 
                solutions that not only look exceptional but also achieve tangible results 
                for our clients across various industries.
              </p>
            </div>

            {/* Right - Location & Stats */}
            <div className="space-y-6">
              {/* Location Card */}
              <div className="bg-gradient-to-br from-red-50 to-white p-8 rounded-3xl border border-red-100 shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <FaMapMarkerAlt className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg">Our Location</h3>
                    <p className="text-gray-600 mt-1 leading-relaxed">
                      88 Central Avenue, Harare
                      <br />
                      Cnr 8th & Central Avenue
                      <br />
                      @The Waves Plaza Complex
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl font-black text-red-600">4+</div>
                  <div className="text-sm text-gray-500 mt-1">Years Experience</div>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="text-3xl font-black text-red-600">50+</div>
                  <div className="text-sm text-gray-500 mt-1">Happy Clients</div>
                </div>
              </div>
            </div>
          </div>

          {/* ===== MISSION & VISION ===== */}
          <div className="mb-28">
            <div className="text-center mb-16 reveal opacity-0 translate-y-6 transition-all duration-700">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-semibold tracking-widest uppercase mb-4">
                Our Purpose
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Mission & Vision
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Mission */}
              <div className="group p-10 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 reveal opacity-0 translate-y-6 transition-all duration-700">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaBullseye className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with innovative creative solutions that 
                  combine strategy, design, and technology helping them stand 
                  out, connect with their audience, and achieve sustainable growth 
                  in an ever-evolving marketplace.
                </p>
              </div>

              {/* Vision */}
              <div className="group p-10 rounded-3xl bg-white border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 reveal opacity-0 translate-y-6 transition-all duration-700">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FaEye className="text-white text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become Zimbabwe&apos;s most trusted creative agency, recognized 
                  for transforming ideas into powerful visual experiences that 
                  inspire, influence, and drive real business results for our 
                  clients across all industries.
                </p>
              </div>
            </div>
          </div>

          {/* ===== WHY CHOOSE US ===== */}
          <div className="mb-16">
            <div className="text-center mb-16 reveal opacity-0 translate-y-6 transition-all duration-700">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-semibold tracking-widest uppercase mb-4">
                Why Choose Us
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                What Sets Us Apart
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4 rounded-full" />
              <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg">
                We combine creativity, strategy, and dedication to deliver 
                exceptional results for every client.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={index}
                    className="group p-8 bg-white rounded-3xl border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 reveal opacity-0 translate-y-6 transition-all duration-700"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-red-600 text-2xl" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <Testimonials />

      <Footer />
    </>
  );
}