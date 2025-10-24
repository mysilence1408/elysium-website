"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import clsx from "clsx";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP);

type RevealTextProps = {
  id: string;
  className?: string;
  staggerAmount?: number;
  as?: React.ElementType;
  duration?: number;
  text: string;
  align?: "center" | "start" | "end";
};

export const RevealText = ({
  align = "start",
  id,
  as: Component = "div",
  className,
  duration = 0.8,
  staggerAmount = 0.1,
  text,
}: RevealTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const words = text.split(" ");

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(".reveal-text-word", {
          y: 0,
          stagger: staggerAmount,
          duration,
          ease: "power3.out",
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.to(".reveal-text-word", {
          duration: 0.5,
          opacity: 1,
          ease: "none",
          y: 0,
          stagger: 0,
        });
      });
    },
    { scope: containerRef }
  );

  return (
    <Component
      id={id}
      className={`text-${align} ${className || ""} ${clsx(
        "reveal-text text-balance",
        align === "center" && "text-center",
        align === "end" && "text-right",
        align === "start" && "text-left",
        className
      )}`}
      ref={containerRef}
    >
      {words.map((word, index) => (
        <span key={index} className="mb-0 inline-block overflow-hidden pb-4">
          <span className=" reveal-text-word mt-0 inline-block translate-y-[120%] will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
};
