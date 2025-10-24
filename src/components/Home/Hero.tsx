import React from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { FadeIn } from "@/app/utils/FadeIn";
import heroImg from "@/../public/images/hero.jpg";
import { RevealText } from "@/app/utils/RevealText";

gsap.registerPlugin(useGSAP);

const Hero = () => {
  return (
    <div className=" relative overflow-hidden min-h-screen bg-neutral-950 px-8 lg:px-16">
      <FadeIn
        vars={{ scale: 1, opacity: 0.5 }}
        className="absolute inset-0 motion-safe:scale-125 opacity-0"
      >
        <Image
          src={heroImg}
          alt="HeroImg"
          priority
          fill
          className=" object-cover motion-reduce:opacity-50"
        />
      </FadeIn>
      <div className="flex relative h-screen flex-col justify-center">
        <RevealText
          id="hero-heading"
          text="  Effortless Elegance"
          className=" max-w-xl text-6xl leading-none text-neutral-50 md:text-7xl lg:text-8xl font-display"
          staggerAmount={0.2}
          duration={1.7}
          as="h1"
        />
        <FadeIn
          vars={{ delay: 1, duration: 1.3 }}
          className=" mt-6 max-w-md  text-lg text-neutral-100 translate-y-8"
        >
          An expression of quiet luxury, Côte Royale is designed for the man who
          commands attention without seeking it. A reflection of {"nature’s"}{" "}
          raw beauty.
        </FadeIn>
        <FadeIn
          vars={{ delay: 1.7, duration: 1.1 }}
          className=" translate-y-5 mt-8 inline-flex items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300 border border-white text-white hover:bg-white/20 cursor-pointer w-fit"
        >
          shop now
        </FadeIn>
      </div>
    </div>
  );
};

export default Hero;
