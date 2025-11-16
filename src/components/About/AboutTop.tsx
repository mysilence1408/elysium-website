"use client";
import React, { useRef } from "react";
import AboutImg from "@/../public/images/about.jpg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "motion/react";

const AboutTop = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  return (
    <div className="relative" ref={ref}>
      <Image
        src={AboutImg}
        alt="About image"
        className=" h-screen lg:h-full object-cover"
      />

      <motion.p
        className=" text-6xl lg:text-7xl absolute top-[20%] right-[10%] max-w-md px-4 md:px-8 lg:px-0"
        style={{ translateY: y }}
      >
        Designed to captivate audiences
      </motion.p>

      <motion.div
        style={{ translateY: y }}
        className=" absolute inset-0 w-fit h-fit m-auto hidden lg:block"
      >
        <video
          src="/videos/about.mp4"
          playsInline
          muted
          autoPlay
          loop
          width={650}
          height={650}
        />
      </motion.div>
    </div>
  );
};

export default AboutTop;
