"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React, { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ScrollText = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const words = "Elysium is made for the one who leaves a mark in silence";

  useGSAP(
    () => {
      const component = componentRef.current;
      const textElement = textRef.current;
      const contentElement = contentRef.current;
      const letters = textElement?.querySelectorAll("span");

      if (!component || !textElement || !letters || !contentElement) return;

      gsap.set(contentElement, { filter: "blur(40px)" });
      gsap.set(letters, { color: "hsl(220, 9%, 20%)" });

      gsap.to(contentElement, {
        filter: "blur(0px)",
        duration: 1,
        scrollTrigger: {
          trigger: component,
          start: "top 75%",
          end: "top top",
          scrub: 2,
        },
      });

      const colorTl = gsap.timeline({
        scrollTrigger: {
          trigger: component,
          start: "top top",
          end: "bottom -100%",
          pin: true,
          scrub: 2,
        },
      });

      colorTl.to(letters, {
        color: "white",
        stagger: {
          each: 0.01,
          from: "start",
          ease: "power1.inOut",
        },
      });

      colorTl.to(
        ".glow-background",
        {
          opacity: 1,
          ease: "power2.inOut",
          duration: 1,
        },
        0
      );
    },
    { scope: componentRef }
  );

  return (
    <div
      ref={componentRef}
      className=" flex flex-col h-screen items-center justify-center bg-[#0C1A27] relative"
    >
      <div className="glow-background absolute inset-0 z-0 h-full w-full opacity-0"></div>
      <div className="absolute inset-0 bg-[url('/images/noisetexture.jpg')] opacity-30 mix-blend-multiply"></div>
      <div ref={contentRef}>
        <div className=" mb-2 text-center text-sm tracking-wider text-neutral-200 uppercase md:mb-8 md:text-base">
          Silent Power
        </div>
        <div ref={textRef} className="text-center">
          <p className="font-display flex flex-wrap justify-center text-5xl leading-tight text-balance uppercase md:text-7xl">
            {words.split(" ").map((word, index) => (
              <span key={index} className="inline">
                {word.split("").map((char, charIndex) => (
                  <span key={charIndex} className=" inline">
                    {char}
                  </span>
                ))}
                {index < words.length - 1 ? (
                  <span className=" inline">&nbsp;</span>
                ) : null}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScrollText;
