"use client";
import clsx from "clsx";
import Image from "next/image";
import { Link } from "next-view-transitions";
import React, { useEffect, useRef, useState } from "react";
import { HiBars3, HiShoppingBag, HiXMark } from "react-icons/hi2";
import UserButton from "@/utils/UserButton";

type NavIconsProps = {
  className?: string;
  tabIndex?: number;
  isAudioPlaying: boolean;
  isIndicatorActive: boolean;
  toggleAudioIndicator: () => void;
  audioElementRef: React.RefObject<HTMLAudioElement | null>;
};

const NavIcons = ({
  className = "",
  tabIndex,
  isAudioPlaying,
  isIndicatorActive,
  toggleAudioIndicator,
  audioElementRef,
}: NavIconsProps) => (
  <div className={clsx("flex items-center gap-8", className)}>
    <button
      onClick={toggleAudioIndicator}
      className="flex items-center space-x-0.5 cursor-pointer"
      aria-label={isAudioPlaying ? "Pause music" : "Play music"}
      tabIndex={tabIndex}
    >
      <audio
        ref={audioElementRef}
        className="hidden"
        src="/audio/loop.mp3"
        loop
      />
      {[1, 2, 3, 4].map((bar) => (
        <div
          key={bar}
          className={clsx("indicator-line", {
            active: isIndicatorActive,
          })}
          style={{
            animationDelay: `${bar * 0.1}s`,
          }}
        />
      ))}
    </button>
    <UserButton />
    <Link href="#" aria-label="Cart" tabIndex={tabIndex}>
      <HiShoppingBag size={24} color="#c7d7e6" />
    </Link>
  </div>
);

const NavLinks = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Products", href: "/products" },
  { id: 3, title: "About", href: "/about" },
  { id: 4, title: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const audioElementRef = useRef<HTMLAudioElement>(null);

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
  };

  useEffect(() => {
    if (audioElementRef.current) {
      if (isAudioPlaying) {
        audioElementRef.current.play();
      } else {
        audioElementRef.current.pause();
      }
    }
  }, [isAudioPlaying]);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <header>
      <div className="navbar fixed top-0 left-0 z-50 w-full bg-[#020609]">
        <div className="flex items-center justify-between p-2 md:p-4">
          <button
            onClick={toggleDrawer}
            aria-label="Menu"
            className="p-2 cursor-pointer transition-colors duration-300 hover:bg-white/20"
          >
            <HiBars3 size={24} color="#c7d7e6" />
          </button>

          <div className="absolute left-1/2 -translate-x-1/2 transform">
            <Link href="/">
              <Image
                src="/images/logo.png"
                width={180}
                height={30}
                alt="logo"
                className="w-32 md:w-44"
              />
            </Link>
          </div>

          <div className="flex">
            <NavIcons
              className="hidden md:flex"
              isAudioPlaying={isAudioPlaying}
              isIndicatorActive={isIndicatorActive}
              toggleAudioIndicator={toggleAudioIndicator}
              audioElementRef={audioElementRef}
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          "nav-drawer-blur fixed inset-0 z-40 bg-black/40 opacity-0 transition-all duration-500",
          isDrawerOpen
            ? "pointer-events-auto opacity-100 backdrop-blur-xs"
            : "pointer-events-none backdrop-blur-none"
        )}
        onClick={toggleDrawer}
        aria-hidden="true"
      />

      <div
        className={clsx(
          "nav-drawer fixed top-0 left-0 z-50 h-full w-72 bg-[#060E16] p-6 transition-transform duration-500",
          isDrawerOpen ? "translate-x-0" : "-translate-x-full"
        )}
        role="dialog"
        aria-modal={isDrawerOpen}
      >
        <div className="flex mb-6 justify-end">
          <button
            className="p-2 transition-colors duration-300 hover:bg-white/10 cursor-pointer"
            onClick={toggleDrawer}
            aria-label="Close Menu"
            tabIndex={isDrawerOpen ? 0 : -1}
          >
            <HiXMark size={24} />
          </button>
        </div>

        <nav className="space-y-4" aria-label="Main Navigation">
          {NavLinks.map((link) => (
            <Link
              href={link.href}
              key={link.id}
              className="block border-b border-white/10 py-2 text-xl font-semibold tracking-wide uppercase hover:text-gray-300"
              tabIndex={isDrawerOpen ? 0 : -1}
              onClick={toggleDrawer}
            >
              {link.title}
            </Link>
          ))}
          <div className="pt-4 md:hidden">
            <NavIcons
              className="justify-around"
              tabIndex={isDrawerOpen ? 0 : -1}
              isAudioPlaying={isAudioPlaying}
              isIndicatorActive={isIndicatorActive}
              toggleAudioIndicator={toggleAudioIndicator}
              audioElementRef={audioElementRef}
            />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
