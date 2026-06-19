"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import gsap from "gsap";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";

interface NavbarProps {
  scrolled?: boolean;
}

// Hero images for background
const heroImages = [
  "/location/marvel1.jpeg",
  "/location/marvel2.jpeg",
  "/location/marvel3.jpeg",
  "/location/marel4.jpeg",
];

export default function Navbar({
  scrolled: externalScrolled,
}: NavbarProps) {
  const pathname = usePathname();
  const [scrollState, setScrollState] = useState(false);
  const [open, setOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);

  // Scroll detection
  useEffect(() => {
    if (externalScrolled !== undefined) return;

    const handleScroll = () => {
      setScrollState(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [externalScrolled]);

  const scrolled = externalScrolled !== undefined ? externalScrolled : scrollState;

  // Auto-changing background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // GSAP animations for hero background
  useEffect(() => {
    if (heroRef.current) {
      // Animate background images with smooth transitions
      const images = heroRef.current.querySelectorAll('.hero-bg-image');
      
      images.forEach((img, index) => {
        gsap.to(img, {
          opacity: index === currentImageIndex ? 1 : 0,
          duration: 1.5,
          ease: "power2.inOut",
        });
      });

      // Subtle zoom animation on current image
      const currentImg = images[currentImageIndex];
      if (currentImg) {
        gsap.fromTo(
          currentImg,
          { scale: 1 },
          { 
            scale: 1.08, 
            duration: 8, 
            ease: "sine.inOut",
            repeat: -1,
            yoyo: true,
          }
        );
      }
    }
  }, [currentImageIndex]);

  // GSAP text animation
  useEffect(() => {
    if (textRef.current) {
      gsap.fromTo(
        textRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Hero Background - Only on home page */}
      {pathname === "/" && (
        <div ref={heroRef} className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="hero-bg-image absolute inset-0 w-full h-full"
              style={{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: index === 0 ? 1 : 0,
              }}
            />
          ))}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />
        </div>
      )}

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100"
            : pathname === "/"
            ? "bg-black/30 backdrop-blur-sm border-b border-white/10"
            : "bg-black/40 backdrop-blur-sm border-b border-white/10"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
          <div className="h-16 md:h-20 flex items-center justify-between">
            {/* LOGO */}
            <Link href="/" className="relative flex-shrink-0">
              <div className="relative w-32 h-12 md:w-40 md:h-14">
                <Image
                  src={scrolled ? "/logo/logo 2.png" : "/logo/logo.png"}
                  alt="Marvel Creatives"
                  fill
                  priority
                  className="object-contain"
                />
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-full px-1 py-1 border border-white/10">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      active
                        ? scrolled
                          ? "bg-red-600 text-white shadow-lg shadow-red-600/30"
                          : "bg-red-600 text-white shadow-lg shadow-red-600/30"
                        : scrolled
                        ? "text-gray-700 hover:text-red-600 hover:bg-red-50"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.name}
                    {active && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-red-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* RIGHT SIDE */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="flex gap-2">
                <a
                  href="#"
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:text-white ${
                    scrolled
                      ? "text-gray-600 border-gray-200 hover:text-white"
                      : "text-white/80 border-white/20 hover:text-white"
                  }`}
                >
                  <FaInstagram size={15} />
                </a>
                <a
                  href="#"
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:text-white ${
                    scrolled
                      ? "text-gray-600 border-gray-200 hover:text-white"
                      : "text-white/80 border-white/20 hover:text-white"
                  }`}
                >
                  <FaLinkedinIn size={15} />
                </a>
                <a
                  href="#"
                  className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 hover:bg-red-600 hover:border-red-600 hover:text-white ${
                    scrolled
                      ? "text-gray-600 border-gray-200 hover:text-white"
                      : "text-white/80 border-white/20 hover:text-white"
                  }`}
                >
                  <FaFacebookF size={15} />
                </a>
              </div>

              <a
                href="https://wa.me/263788991893"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/30"
              >
                <FaWhatsapp size={16} />
                Start Project
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
            >
              {open ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden bg-white/95 backdrop-blur-xl shadow-2xl border-t border-gray-100">
            <div className="px-6 py-6 flex flex-col gap-4">
              {links.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-semibold px-4 py-3 rounded-xl transition-colors ${
                      active
                        ? "bg-red-600 text-white"
                        : "text-gray-800 hover:bg-red-50 hover:text-red-600"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <a
                href="https://wa.me/263788991893"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 text-white text-center py-3.5 rounded-xl font-semibold transition-colors mt-2"
              >
                <span className="flex items-center justify-center gap-2">
                  <FaWhatsapp size={18} />
                  Contact WhatsApp
                </span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}