import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { ViewTransitions } from "next-view-transitions";
import Providers from "@/utils/Providers";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

const gambarino = localFont({
  src: "./gambarino.woff2",
  display: "swap",
  variable: "--font-gambarino",
});

export const metadata: Metadata = {
  title: {
    default: "Elysium – Elegance in Every Note",
    template: "%s - Elysium – Elegance in Every Note",
  },
  description: "Leave a Quiet Mark",
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html
        lang="en"
        className={`${raleway.variable} ${gambarino.variable} antialiased`}
      >
        <body className=" bg-[#0C1A27] text-white">
          <Providers>{children}</Providers>
        </body>
      </html>
    </ViewTransitions>
  );
}
