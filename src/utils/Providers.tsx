"use client";
import { Footer } from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import { SessionProvider } from "next-auth/react";
import React from "react";
import { Toaster } from "react-hot-toast";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <main className=" pt-14 md:pt-16">{children}</main>
      <Footer />
    </SessionProvider>
  );
};

export default Providers;
