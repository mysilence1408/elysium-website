"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useRef } from "react";

const AboutBottom = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0.2, 1]);
  return (
    <motion.div ref={ref} style={{ scaleY, transformOrigin: "top center" }}>
      <div className=" px-4 md:px-8 py-16 bg-black ">
        <div className=" space-y-8 ">
          <h6
            className="text-[#ff5000] font-bold text-4xl"
            style={{ textShadow: "0 10px 15px #ff5000" }}
          >
            About Elysium
          </h6>
          <p>
            Elysium is a sanctuary of scent and sophistication — a space where
            luxury meets emotion. Born from a passion for timeless beauty and
            refined craftsmanship, Elysium redefines what it means to wear a
            fragrance. Each creation is more than a perfume; {"it’s"} an
            experience — a delicate balance of art, emotion, and individuality.
            <br />
            <br />
            Our philosophy is rooted in the belief that true elegance is
            effortless. Every fragrance is composed with precision, blending the
            {"world’s"} finest ingredients to capture moments, moods, and
            memories. From the minimalist design to the lasting impression of
            each scent, Elysium embodies quiet confidence and modern grace.
            <br />
            <br />
            Elysium is made for those who understand that luxury {"isn’t"} about
            being noticed — {"it’s"} about being remembered.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default AboutBottom;
