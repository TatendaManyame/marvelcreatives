"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  ExternalLink, 
  Play,
  Palette,
  Briefcase,
  Printer,
  Sparkles,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function PortfolioPage() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const heroRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const descRef = useRef<HTMLParagraphElement | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState("");
  const [lightboxTitle, setLightboxTitle] = useState("");
  const [isVideo, setIsVideo] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // ===== Hero Animations =====
      gsap.from(titleRef.current, {
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
      });

      gsap.from(descRef.current, {
        y: 40,
        opacity: 0,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
        },
      });

      // Only animate on desktop to reduce mobile lag
      if (window.innerWidth > 768) {
        const items = gsap.utils.toArray(".portfolio-card");
        gsap.from(items, {
          y: 80,
          opacity: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        });
      }

      const headers = gsap.utils.toArray(".category-header");
      gsap.from(headers, {
        x: -40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      const indicators = document.querySelectorAll(".indicator-dot");
      indicators.forEach((dot, i) => {
        gsap.to(dot, {
          scale: 1.5,
          opacity: 0.5,
          duration: 1,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.2,
        });
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const openLightbox = (image: string, title: string, isVideoFile = false) => {
    setLightboxImage(image);
    setLightboxTitle(title);
    setIsVideo(isVideoFile);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setIsVideo(false);
  };

  useEffect(() => {
    document.body.style.overflow = lightboxOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [lightboxOpen]);

  const scrollGallery = (
    galleryRef: HTMLDivElement | null,
    direction: "left" | "right"
  ) => {
    if (galleryRef) {
      const scrollAmount = 350;
      galleryRef.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const portfolio = [
    {
      category: "Branding & Identity",
      icon: Palette,
      items: [
        {
          title: "Prevail Mart Branding",
          image: "/portfolio/prevailmart2.jpeg",
          description: "Complete brand identity for Prevail Mart retail chain"
        },
        {
          title: "Prevail Mart Identity",
          image: "/portfolio/prevailmart2.jpeg",
          description: "Brand identity system and visual guidelines"
        },
        {
          title: "Prevail Mart Collateral",
          image: "/portfolio/prevailmart4.jpeg",
          description: "Marketing collateral and brand materials"
        },
        {
          title: "Elephant Branding",
          image: "/portfolio/elephant-branding.jpeg",
          description: "Complete brand identity and visual system for Elephant brand"
        },
        {
          title: "Elephant Identity",
          image: "/portfolio/elephant-branding2.jpeg",
          description: "Extended brand identity and collateral design"
        },
      ],
    },
    {
      category: "Corporate Branding",
      icon: Briefcase,
      items: [
        {
          title: "Corporate Branding 1",
          image: "/branding/branding1.jpeg",
          description: "Professional corporate brand identity design"
        },
        {
          title: "Corporate Branding 2",
          image: "/branding/branding2.jpeg",
          description: "Complete brand identity system for businesses"
        },
        {
          title: "Corporate Branding 3",
          image: "/branding/branding3.jpeg",
          description: "Modern brand identity and visual guidelines"
        },
        {
          title: "Corporate Branding 4",
          image: "/branding/branding4.jpeg",
          description: "Creative brand identity solutions"
        },
        {
          title: "Corporate Branding 5",
          image: "/branding/branding5.jpeg",
          description: "Innovative brand design and strategy"
        },
        {
          title: "Corporate Branding 6",
          image: "/branding/branding6.jpeg",
          description: "Complete brand identity and visual systems"
        },
      ],
    },
    {
      category: "Print & Business Materials",
      icon: Printer,
      items: [
        {
          title: "Business Cards Design",
          image: "/portfolio/business-cards1.jpeg",
          description: "Premium business card designs for professional brands"
        },
        {
          title: "Business Cards Collection",
          image: "/portfolio/business-cards2.jpeg",
          description: "Variety of business card styles and finishes"
        },
        {
          title: "Billboard Advertising",
          image: "/portfolio/billboards1.jpeg",
          description: "High-impact billboard advertising solutions"
        },
        {
          title: "Outdoor Billboards",
          image: "/portfolio/billboards2.jpeg",
          description: "Strategic outdoor advertising campaigns"
        },
      ],
    },
  ];


  return (
    <>
      <Navbar />

      <section
        ref={sectionRef}
        className="overflow-hidden bg-white"
      >
        {/* ===== HERO with Enhanced Animations ===== */}
        <div ref={heroRef} className="relative min-h-[50vh] md:min-h-[60vh] flex items-center overflow-hidden pt-16 md:pt-20">
          <div className="absolute inset-0">
            <Image
              src="/portfolio/business-cards1.jpeg"
              alt="Portfolio Hero"
              fill
              unoptimized
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-transparent" />
          </div>

          <div className="absolute top-20 right-20 w-64 h-64 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-600/5 rounded-full blur-3xl animate-pulse delay-1000" />
          
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-red-400/20 rounded-full animate-float"
                style={{
                  left: `${10 + i * 15}%`,
                  top: `${20 + i * 10}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${4 + i * 0.5}s`
                }}
              />
            ))}
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 md:py-20 w-full">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-600/20 border border-red-500/30 px-4 py-1.5 md:px-5 md:py-2 text-xs md:text-sm font-medium text-red-400 mb-4 md:mb-6 animate-pulse">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-red-500 rounded-full" />
                Our Portfolio
              </div>

              <h1 ref={titleRef} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                Creative Excellence
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                  In Every Project
                </span>
              </h1>

              <div className="w-16 md:w-20 h-1 bg-gradient-to-r from-red-500 to-red-400 mt-4 md:mt-6 rounded-full animate-pulse" />

              <p ref={descRef} className="mt-4 md:mt-6 text-gray-300 text-base md:text-lg leading-relaxed max-w-lg">
                Explore our diverse portfolio of branding, print materials, and creative 
                projects that have helped businesses stand out and succeed.
              </p>
            </div>
          </div>
        </div>

        {/* ===== PORTFOLIO GALLERY ===== */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
          {portfolio.map((section, categoryIndex) => {
            const IconComponent = section.icon;
            return (
              <div key={categoryIndex} className="mb-16 md:mb-20 last:mb-0">
                <div className="category-header flex items-center justify-between mb-6 md:mb-10">
                  <div>
                    <div className="flex items-center gap-2 md:gap-3">
                      <div className="p-2 bg-red-50 rounded-xl group-hover:scale-110 transition-transform">
                        <IconComponent className="w-5 h-5 md:w-8 md:h-8 text-red-600" />
                      </div>
                      <h2 className="text-xl md:text-3xl lg:text-4xl font-bold text-gray-900">
                        {section.category}
                      </h2>
                    </div>
                    <div className="w-12 md:w-16 h-1 bg-gradient-to-r from-red-600 to-red-400 mt-2 rounded-full" />
                  </div>
                  <span className="text-xs md:text-sm text-gray-400 bg-gray-50 px-3 py-1 rounded-full">
                    {section.items.length} projects
                  </span>
                </div>

                <div className="relative group">
                  <button
                    onClick={() => {
                      const gallery = document.getElementById(`gallery-${categoryIndex}`) as HTMLDivElement | null;
                      scrollGallery(gallery, "left");
                    }}
                    className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-4 hover:translate-x-0 border border-gray-200"
                  >
                    <ChevronLeft className="w-6 h-6 text-gray-800" />
                  </button>

                  <div
                    id={`gallery-${categoryIndex}`}
                    className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-4 md:pb-6 scrollbar-hide scroll-smooth"
                    style={{ 
                      WebkitOverflowScrolling: "touch"
                    }}
                  >
                    {section.items.map((item, index) => (
                      <div
                        key={index}
                        className="portfolio-card flex-shrink-0 w-[260px] sm:w-[280px] md:w-[380px]"
                      >
                        <div className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                          <div className="relative w-full h-[200px] md:h-[280px] overflow-hidden bg-gray-100">
                            <Image
                              src={item.image}
                              alt={item.title}
                              fill
                              unoptimized
                              className="object-cover group-hover:scale-110 transition-transform duration-700"
                              sizes="(max-width: 640px) 260px, (max-width: 768px) 280px, 380px"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                              <p className="text-white/90 text-xs md:text-sm leading-relaxed mb-2 md:mb-3">
                                {item.description}
                              </p>
                              <button
                                onClick={() => openLightbox(item.image, item.title, false)}
                                className="inline-flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white rounded-full text-xs md:text-sm transition-all duration-300 w-fit group-hover:scale-105"
                              >
                                View Project
                                <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                              </button>
                            </div>
                          </div>

                          <div className="p-4 md:p-6">
                            <div className="flex items-start justify-between">
                              <div>
                                <h3 className="text-gray-900 font-bold text-sm md:text-lg group-hover:text-red-600 transition-colors">
                                  {item.title}
                                </h3>
                                <p className="text-gray-500 text-xs md:text-sm mt-1 line-clamp-2">
                                  {item.description}
                                </p>
                              </div>
                              <div className="w-6 h-6 md:w-8 md:h-8 bg-red-50 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                <span className="text-red-600 text-xs md:text-sm font-bold">
                                  {String(index + 1).padStart(2, '0')}
                                </span>
                              </div>
                            </div>
                            <div className="w-0 group-hover:w-full h-[2px] bg-gradient-to-r from-red-500 to-red-400 mt-3 md:mt-4 transition-all duration-700 rounded-full" />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      const gallery = document.getElementById(`gallery-${categoryIndex}`) as HTMLDivElement | null;
                      scrollGallery(gallery, "right");
                    }}
                    className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-xl rounded-full p-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-4 hover:translate-x-0 border border-gray-200"
                  >
                    <ChevronRight className="w-6 h-6 text-gray-800" />
                  </button>
                </div>

                <div className="flex justify-center mt-3 md:mt-4 gap-1.5">
                  {section.items.map((_, idx) => (
                    <div
                      key={idx}
                      className="indicator-dot w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gray-300"
                    />
                  ))}
                </div>

                <div className="text-center mt-2 text-xs text-gray-400 md:hidden animate-bounce">
                  ← Swipe to see more →
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== CTA SECTION ===== */}
        <div className="px-4 sm:px-6 pb-16 md:pb-28">
          <div className="max-w-6xl mx-auto">
            <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-[30px] md:rounded-[40px] p-10 md:p-16 lg:p-20 text-center overflow-hidden">
              <div className="absolute inset-0 bg-[url('/location/marvel1.jpeg')] opacity-5 bg-cover bg-center" />
              <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-1000" />
              
              <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#fff_1px,transparent_1px)] bg-[size:20px_20px]" />

              <div className="relative z-10">
                <span className="inline-block px-4 md:px-5 py-1.5 md:py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 text-[10px] md:text-xs tracking-[0.3em] backdrop-blur-sm mb-4 md:mb-6 animate-pulse">
                  LET&apos;S CREATE TOGETHER
                </span>

                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-tight">
                  Ready To Build Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-400">
                    Next Masterpiece?
                  </span>
                </h2>

                <p className="mt-4 md:mt-6 text-gray-300 max-w-2xl mx-auto text-sm md:text-lg leading-relaxed">
                  From concept to creation, we&apos;ll bring your vision to life with 
                  creativity, precision, and impact.
                </p>

                <Link
                  href="/contact"
                  className="mt-6 md:mt-10 inline-flex items-center gap-2 md:gap-3 px-6 md:px-10 py-3 md:py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-full font-semibold text-sm md:text-base transition-all duration-300 hover:scale-105 shadow-lg shadow-red-600/30 group"
                >
                  Start Your Project
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 md:top-6 right-4 md:right-6 text-white hover:text-red-500 transition-colors z-10"
          >
            <X className="w-8 h-8 md:w-10 md:h-10" />
          </button>

          <div
            className="max-w-5xl max-h-[90vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            {isVideo ? (
              <div className="relative w-full h-[50vh] md:h-[70vh] rounded-lg overflow-hidden bg-black">
                <video
                  src={lightboxImage}
                  controls
                  autoPlay
                  className="w-full h-full object-contain"
                  playsInline
                />
              </div>
            ) : (
              <div className="relative w-full h-[50vh] md:h-[70vh]">
                <Image
                  src={lightboxImage}
                  alt={lightboxTitle}
                  fill
                  unoptimized
                  className="object-contain rounded-lg"
                />
              </div>
            )}
            <div className="mt-4 md:mt-6 text-center">
              <h3 className="text-white text-lg md:text-2xl font-bold">{lightboxTitle}</h3>
            </div>
          </div>
        </div>
      )}

      {/* Custom Styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </>
  );
}