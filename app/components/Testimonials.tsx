"use client";

import Image from "next/image";

const partners = [
  {
    name: "Prevail",
    logo: "/companies/prevail logo.png",
  },
  {
    name: "TapGo",
    logo: "/companies/tapgo.png",
  },
  {
    name: "Elephant",
    logo: "/companies/elephant.png",
  },
  {
    name: "ZIM",
    logo: "/companies/zim.png",
  },
  {
    name: "VTU",
    logo: "/companies/vtu.png",
  },
  {
    name: "AFMIN",
    logo: "/companies/afmin.png",
  },
];

export default function TrustedPartners() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-white to-gray-50/50 overflow-hidden">
      {/* Background Glows - Enhanced */}
      <div className="absolute top-[-100px] left-[-100px] w-96 h-96 bg-red-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-[-100px] right-[-100px] w-96 h-96 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red-50/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Heading - Enhanced */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-red-50 border border-red-100 mb-5">
            <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
            <span className="text-red-600 font-semibold text-sm tracking-widest uppercase">
              Our Network
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Trusted By Leading{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-700">
              Brands & Partners
            </span>
          </h2>

          <div className="w-20 h-1 bg-gradient-to-r from-red-600 to-red-400 mx-auto mt-4 rounded-full" />

          <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg leading-relaxed">
            We are proud to collaborate with respected organizations and
            businesses that trust Marvel Creatives to deliver exceptional
            branding, marketing, printing and digital solutions.
          </p>
        </div>

        {/* Logo Grid - Beautiful Layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 p-6 h-[140px] flex items-center justify-center hover:-translate-y-1"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-red-50/0 via-red-50/0 to-red-50/0 group-hover:from-red-50/20 group-hover:via-red-50/10 group-hover:to-red-50/0 transition-all duration-500" />

              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-red-200 transition-all duration-500" />

              {/* Logo */}
              <div className="relative w-full h-16 transition-all duration-500 group-hover:scale-105">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                />
              </div>

              {/* Tooltip with company name */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-full whitespace-nowrap">
                {partner.name}
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 left-2 w-1.5 h-1.5 bg-red-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100" />
            </div>
          ))}
        </div>

        {/* Bottom Section - Enhanced */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-3 bg-white border border-gray-100 rounded-full px-6 py-3 shadow-sm">
            <span className="text-gray-700 font-medium">
              Building long-term partnerships through creativity, innovation and
              results-driven solutions.
            </span>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-10 w-16 h-16 border-2 border-red-100 rounded-full opacity-20" />
        <div className="absolute top-20 right-20 w-8 h-8 border-2 border-red-100 rounded-full opacity-20" />
        <div className="absolute bottom-20 right-1/4 w-12 h-12 border-2 border-red-100 rounded-full opacity-10" />
      </div>
    </section>
  );
}