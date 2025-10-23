import React from "react";
import heroImg from "@/../public/images/hero.jpg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className=" relative overflow-hidden min-h-screen bg-neutral-950 px-8 lg:px-16">
      <div className="absolute inset-0 scale-125">
        <Image
          src={heroImg}
          alt="HeroImg"
          priority
          fill
          className=" object-cover opacity-50"
        />
      </div>
      <div className="flex relative h-screen flex-col justify-center">
        <h6 className=" max-w-xl text-6xl leading-tight text-neutral-50 md:text-7xl lg:text-8xl font-display">
          Effortless Elegance
        </h6>
        <p className=" mt-6 max-w-md  text-lg text-neutral-100">
          An expression of quiet luxury, Côte Royale is designed for the man who
          commands attention without seeking it. A reflection of {"nature’s"}{" "}
          raw beauty.
        </p>
        <button className=" mt-8 inline-flex items-center justify-center px-12 py-4 text-center font-extrabold tracking-wider uppercase transition-colors duration-300 border border-white text-white hover:bg-white/20 cursor-pointer w-fit">
          shop now
        </button>
      </div>
    </div>
  );
};

export default Hero;
