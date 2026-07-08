// app/components/Loader.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface LoaderProps {
  children?: React.ReactNode;
}

export default function Loader({ children }: LoaderProps) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currentLogo, setCurrentLogo] = useState<"logo1" | "logo2">("logo1");
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Reset loading state when route changes
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    setProgress(0);
    setFadeOut(false);
    
    // Alternate logos on each navigation
    setCurrentLogo((prev) => (prev === "logo1" ? "logo2" : "logo1"));

    // Animate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 25);

    // Hide loader after progress completes
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2300);

    const hideTimer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, [pathname]); // Re-run when route changes - NO REDIRECT

  if (!isLoading) return <>{children}</>;

  return (
    <div 
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo Container with Animation */}
        <div className="relative mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <Image
              src={currentLogo === "logo1" ? "/logo/logo.png" : "/logo/logo 2.png"}
              alt="Marvel Creatives"
              fill
              className="object-contain animate-pulse"
              priority
            />
          </div>
          
          {/* Pulsing Ring Effect - Outer */}
          <div className="absolute inset-0 -m-4 rounded-full border-4 border-transparent border-t-red-600 animate-spin" />
          <div className="absolute inset-0 -m-4 rounded-full border-4 border-transparent border-b-red-500 animate-spin-slow" />
          
          {/* Inner Glow Effect */}
          <div className="absolute inset-0 -m-6 rounded-full bg-red-600/5 blur-xl animate-pulse" />
        </div>

        {/* Services Tagline with animated dots */}
        <div className="flex items-center justify-center gap-3 mt-2">
          <span className="text-xs md:text-sm text-gray-300 font-light tracking-[0.2em] uppercase animate-pulse">
            Branding
          </span>
          <span className="text-red-500 text-xs animate-ping">•</span>
          <span className="text-xs md:text-sm text-gray-300 font-light tracking-[0.2em] uppercase animate-pulse" style={{ animationDelay: "0.3s" }}>
            Signage
          </span>
          <span className="text-red-500 text-xs animate-ping" style={{ animationDelay: "0.5s" }}>•</span>
          <span className="text-xs md:text-sm text-gray-300 font-light tracking-[0.2em] uppercase animate-pulse" style={{ animationDelay: "0.6s" }}>
            Design
          </span>
          <span className="text-red-500 text-xs animate-ping" style={{ animationDelay: "0.8s" }}>•</span>
          <span className="text-xs md:text-sm text-gray-300 font-light tracking-[0.2em] uppercase animate-pulse" style={{ animationDelay: "0.9s" }}>
            Printing
          </span>
        </div>

        {/* Progress Bar with Glow Effect */}
        <div className="mt-6 w-48 md:w-64 h-1.5 bg-gray-700 rounded-full overflow-hidden shadow-lg shadow-red-500/20">
          <div 
            className="h-full bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-full transition-all duration-300 ease-out shadow-lg shadow-red-500/50"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Loading Percentage */}
        <div className="mt-3 flex items-center gap-2">
          <span className="text-xs text-gray-400 font-mono">
            {progress}%
          </span>
          <div className="w-1 h-1 bg-red-500 rounded-full animate-ping" />
        </div>

        {/* Loading Dots Animation */}
        <div className="mt-4 flex gap-1">
          <div 
            className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" 
            style={{ animationDelay: "0s" }}
          />
          <div 
            className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" 
            style={{ animationDelay: "0.2s" }}
          />
          <div 
            className="w-1.5 h-1.5 bg-red-500 rounded-full animate-bounce" 
            style={{ animationDelay: "0.4s" }}
          />
        </div>
      </div>
    </div>
  );
}