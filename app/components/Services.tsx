"use client";

import { useEffect } from "react";
import {
  FaPaintBrush,
  FaBullhorn,
  FaPrint,
  FaLightbulb,
  FaCubes,
  FaGlobe,
} from "react-icons/fa";

const services = [
  {
    title: "Branding & Identity",
    desc: "We craft powerful brand identities that make businesses instantly recognizable.",
    icon: FaPaintBrush,
    image: "/services/billboards1.jpeg",
  },
  {
    title: "Digital Marketing",
    desc: "High-impact campaigns that drive traffic, engagement, and real conversions.",
    icon: FaBullhorn,
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
    link: "https://www.facebook.com/marvelcreatives96",
  },
  {
    title: "Printing Solutions",
    desc: "Premium printing for business cards, banners, packaging, and corporate materials.",
    icon: FaPrint,
    image: "/services/printing video.mp4",
    isVideo: true,
  },
  {
    title: "Graphic Design",
    desc: "Smart creative direction aligned with business goals and audience psychology.",
    icon: FaLightbulb,
    image: "/services/business cards1.jpeg",
  },
  {
    title: "3D Signage",
    desc: "Eye-catching indoor and outdoor signage that builds strong brand visibility.",
    icon: FaCubes,
    image: "https://images.unsplash.com/photo-1504805572947-34fad45aed93?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Web Design",
    desc: "Modern, fast, and conversion-focused websites built for performance.",
    icon: FaGlobe,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Services() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll(".service-card");

      cards.forEach((card, i) => {
        const speed = (i + 1) * 0.02;

        const x = (e.clientX / window.innerWidth - 0.5) * speed * 30;
        const y = (e.clientY / window.innerHeight - 0.5) * speed * 30;

        (card as HTMLElement).style.transform = `translateY(-10px) translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative py-32 bg-white overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,0,80,0.08),transparent_50%),radial-gradient(circle_at_bottom_right,rgba(0,120,255,0.08),transparent_50%)]" />

      {/* Floating Blobs */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-red-200/40 blur-[140px] rounded-full" />
      <div className="absolute bottom-[-160px] right-[-140px] w-[500px] h-[500px] bg-blue-200/30 blur-[160px] rounded-full" />
      <div className="absolute top-[30%] left-[60%] w-[300px] h-[300px] bg-purple-200/30 blur-[140px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-black">
            Our <span className="text-red-600">Services</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mt-5 text-lg">
            We deliver complete creative solutions branding, marketing,
            design, printing and digital experiences.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="service-card group relative rounded-[28px] overflow-hidden bg-white border border-gray-100 shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                {/* Image/Video */}
                <div className="relative h-52 overflow-hidden">
                  {service.isVideo ? (
                    <video
                      src={service.image}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      muted
                      playsInline
                      loop
                      autoPlay
                    />
                  ) : service.link ? (
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full h-full"
                    >
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                      />
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="bg-red-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                          Visit Facebook
                        </span>
                      </div>
                    </a>
                  ) : (
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                  )}

                  {/* dark overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* icon badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-2 rounded-xl flex items-center gap-2 shadow">
                    <Icon className="text-red-600" />
                    <span className="text-xs font-semibold text-black">
                      {service.isVideo ? "Video" : "Service"}
                    </span>
                  </div>

                  {/* Video Badge */}
                  {service.isVideo && (
                    <div className="absolute top-4 right-4 bg-red-600 text-white text-xs px-3 py-1.5 rounded-full font-medium shadow-lg">
                      ▶ Watch
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 relative">

                  {/* glow line */}
                  <div className="absolute top-0 left-6 w-12 h-[3px] bg-red-600 rounded-full" />

                  <h3 className="text-xl font-bold text-black group-hover:text-red-600 transition mt-2">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                    {service.desc}
                  </p>

                  {/* CTA hint */}
                  <div className="mt-6 flex items-center justify-between">
                    {service.link ? (
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-red-600 hover:text-red-700 font-medium"
                      >
                        Visit Facebook →
                      </a>
                    ) : service.isVideo ? (
                      <span className="text-xs text-gray-400">
                        Watch the process
                      </span>
                    ) : (
                      <span className="text-xs text-gray-400">
                        Explore Service
                      </span>
                    )}

                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center group-hover:rotate-45 transition">
                      →
                    </div>
                  </div>

                </div>

                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-red-500/5" />
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}