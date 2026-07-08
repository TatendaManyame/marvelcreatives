// app/components/ClientLayout.tsx
"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Loader from "./Loader";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(true);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  useEffect(() => {
    // Only show loader on initial load and route changes
    if (isFirstLoad) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsFirstLoad(false);
      // Show loader on first load
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2500);
      return () => clearTimeout(timer);
    }

    // Show loader on route changes
    setIsLoading(true);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  // Show loader while loading
  if (isLoading) {
    return <Loader />;
  }

  return <>{children}</>;
}