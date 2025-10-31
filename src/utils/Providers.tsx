"use client";
import { Footer } from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import { SessionProvider } from "next-auth/react";
import { ReactLenis, useLenis } from "./lenis";
import { usePathname, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const lenis = useLenis();

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true });
  }, [pathname, searchParams, lenis]);
  return (
    <ReactLenis root options={{ lerp: 0.05 }}>
      <SessionProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <Navbar />
        <main className=" pt-14 md:pt-16">{children}</main>
        <Footer />
      </SessionProvider>
    </ReactLenis>
  );
};

export default Providers;
