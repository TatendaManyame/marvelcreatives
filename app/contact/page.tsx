"use client";

import { useEffect, useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const heroImages = [
  //"/services/business cards1.jpeg",
  //"/services/business cards2.jpeg",
  "/location/marvel1.jpeg",
  "/location/marvel2.jpeg",
];

const faqs = [
  {
    question: "How long does a branding project take?",
    answer:
      "Most branding projects take between 7-14 working days depending on scope and revisions.",
  },
  {
    question: "Do you provide printing services?",
    answer:
      "Yes. We provide business cards, brochures, flyers, banners, signage and large format printing.",
  },
  {
    question: "Can you manage our social media?",
    answer:
      "Absolutely. We provide content creation, social media management and paid advertising services.",
  },
  {
    question: "Do you work outside Harare?",
    answer:
      "Yes. We work with businesses across Zimbabwe and internationally.",
  },
];

export default function ContactPage() {
  const [active, setActive] = useState<number | null>(0);
  const [slide, setSlide] = useState(0);

  // HERO AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setSlide((prev) => (prev + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      <section className="relative min-h-screen bg-white overflow-hidden">

        {/* ================= HERO BANNER ================= */}
        <div className="relative h-[60vh] min-h-[500px] w-full flex items-center justify-center overflow-hidden" style={{ marginTop: 0 }}>

          {/* IMAGE SLIDES - Fixed z-index and positioning */}
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                slide === index ? "opacity-100" : "opacity-0"
              }`}
              style={{ zIndex: 1 }}
            >
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img})` }}
              />
            </div>
          ))}

          {/* OVERLAY - Fixed z-index */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/80" style={{ zIndex: 2 }} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" style={{ zIndex: 2 }} />

          {/* Decorative Elements */}
          <div className="absolute top-20 right-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl" style={{ zIndex: 2 }} />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" style={{ zIndex: 2 }} />

          {/* CONTENT - Fixed z-index */}
           <div className="relative z-10 max-w-4xl px-6 mt-8">

            <span className="inline-block px-5 py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-xs tracking-[0.3em] backdrop-blur-sm mb-6">
              Contact Us
            </span>

            <h1 className="text-4xl md:text-6xl font-black text-white mt-6 leading-tight">
              Build Something
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                Extraordinary Together
              </span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-400 mx-auto mt-4 rounded-full" />

            <p className="mt-5 text-gray-200 text-lg">
              We are based in Harare and work with brands across Zimbabwe and globally.
            </p>
          </div>

        </div>

        {/* BACKGROUND GLOWS */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-red-100/30 blur-[160px] rounded-full" />
        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-pink-100/20 blur-[160px] rounded-full" />

        <div className="relative z-10">

          {/* CONTACT CARDS */}
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-10 relative z-20">
            <div className="bg-white/95 backdrop-blur-md border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaPhoneAlt className="text-red-600 text-2xl" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Call Us</h3>
              <p className="text-gray-600 mt-1">+263 788 991 893</p>
              <p className="text-gray-400 text-xs mt-2">Mon-Fri 8am-5pm</p>
            </div>

            <div className="bg-white/95 backdrop-blur-md border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaEnvelope className="text-red-600 text-2xl" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Email</h3>
              <p className="text-gray-600 mt-1">info@marvelcreatives.ae</p>
              <p className="text-gray-400 text-xs mt-2">We reply within 24hrs</p>
            </div>

            <div className="bg-white/95 backdrop-blur-md border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaMapMarkerAlt className="text-red-600 text-2xl" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">Location</h3>
              <p className="text-gray-600 mt-1">88 Central Avenue, Harare</p>
              <p className="text-gray-500 text-sm mt-1">Cnr 8th & Central Avenue</p>
              <p className="text-gray-500 text-sm">@The Waves Plaza Complex</p>
            </div>

            <div className="bg-white/95 backdrop-blur-md border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaWhatsapp className="text-red-600 text-2xl" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg">WhatsApp</h3>
              <p className="text-gray-600 mt-1">+263 788 991 893</p>
              <p className="text-gray-400 text-xs mt-2">Quick response available</p>
            </div>
          </div>

          {/* FORM + MAP */}
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 mt-20 mb-24">

            {/* FORM */}
            <div className="bg-white/90 backdrop-blur-xl border border-gray-100 rounded-[32px] p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-1 h-8 bg-gradient-to-b from-red-600 to-red-400 rounded-full" />
                <h2 className="text-3xl font-black text-gray-900">
                  Send a Message
                </h2>
              </div>

              <form className="space-y-5">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Phone Number</label>
                  <input
                    type="text"
                    placeholder="+263 78 123 4567"
                    className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">Your Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/20 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-4 rounded-2xl font-semibold transition-all hover:scale-[1.02] shadow-lg shadow-red-600/30"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* MAP */}
            <div className="rounded-[32px] overflow-hidden border border-gray-100 shadow-xl min-h-[600px] relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3795.733817374982!2d31.052715!3d-17.825166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a4ab6f1d63bf%3A0x8db131c2321cc6e4!2s88%20Central%20Ave%2C%20Harare%2C%20Zimbabwe!5e0!3m2!1sen!2s!4v1700000000000"
                width="100%"
                height="100%"
                loading="lazy"
                className="min-h-[600px]"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Map Overlay Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-lg border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center">
                    <FaMapMarkerAlt className="text-white text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Visit Us</p>
                    <p className="text-sm font-semibold text-gray-900">88 Central Ave, Harare</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* FAQ */}
          <div className="max-w-5xl mx-auto px-6 mb-24">

            <div className="text-center mb-14">
              <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-semibold tracking-widest uppercase mb-4">
                Got Questions?
              </span>
              <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                Frequently Asked Questions
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4 rounded-full" />
            </div>

            <div className="space-y-4">

              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-100 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      setActive(active === index ? null : index)
                    }
                    className="w-full flex justify-between items-center p-6 text-left font-semibold text-gray-900 hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-sm font-bold flex-shrink-0">
                        {index + 1}
                      </span>
                      {faq.question}
                    </span>
                    <span className={`text-red-600 text-2xl transition-transform duration-300 ${active === index ? 'rotate-180' : ''}`}>
                      {active === index ? "−" : "+"}
                    </span>
                  </button>

                  {active === index && (
                    <div className="px-6 pb-6 text-gray-600 leading-8 border-t border-gray-100 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}

            </div>
          </div>

          {/* SOCIAL */}
          <div className="text-center pb-24 px-6">
            <span className="inline-block px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-semibold tracking-widest uppercase mb-4">
              Connect With Us
            </span>
            <h2 className="text-4xl font-black text-gray-900 mb-10">
              Follow Marvel Creatives
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mb-10 rounded-full" />

            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/marvel.creatives"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center text-xl hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg shadow-red-600/30"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com/marvelcreatives96"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center text-xl hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg shadow-red-600/30"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center text-xl hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg shadow-red-600/30"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://wa.me/263788991893"
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 rounded-full bg-gradient-to-br from-red-600 to-red-700 text-white flex items-center justify-center text-xl hover:scale-110 hover:shadow-xl transition-all duration-300 shadow-lg shadow-red-600/30"
                aria-label="Chat on WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>

            <p className="mt-6 text-gray-500 text-sm">
              Stay connected for updates, insights, and creative inspiration.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}