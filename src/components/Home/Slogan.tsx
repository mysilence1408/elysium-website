import { FadeIn } from "@/utils/FadeIn";
import { RevealText } from "@/utils/RevealText";
import React from "react";

const Slogan = () => {
  return (
    <div className=" relative overflow-hidden bg-[url('/images/background.jpg')] lg:bg-fixed bg-cover bg-center py-16 text-gray-50 md:py-28">
      <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
        <FadeIn
          className=" translate-y-2 text-sm font-light tracking-[0.2em] uppercase"
          vars={{ duration: 0.8 }}
        >
          <div>Defined by Elegance</div>
        </FadeIn>
        <RevealText
          id="cta-heading"
          text="Elysium"
          as="h2"
          className=" font-display mx-auto max-w-3xl sm:text-6xl md:text-7xl"
          align="center"
          staggerAmount={0.1}
          duration={0.8}
        />
        <FadeIn
          className=" mx-auto max-w-2xl translate-y-2 text-lg text-gray-300"
          vars={{ duration: 0.8, delay: 0.4 }}
        >
          <p>
            Elysium embodies the essence of refined luxury and timeless
            sophistication. Each fragrance is crafted with care, blending
            purity, balance, and artistry into every note. Designed for those
            who appreciate the beauty of simplicity, Elysium transforms scent
            into a signature of grace and individuality.
          </p>
        </FadeIn>
      </div>
    </div>
  );
};

export default Slogan;
