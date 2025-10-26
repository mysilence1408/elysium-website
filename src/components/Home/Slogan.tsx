import { FadeIn } from "@/app/utils/FadeIn";
import { RevealText } from "@/app/utils/RevealText";
import React from "react";

const Slogan = () => {
  return (
    <div className=" relative overflow-hidden bg-[url('/images/background.avif')] bg-cover bg-center py-16 text-gray-50 md:py-28">
      <div className="relative z-10 mx-auto max-w-4xl space-y-8 text-center">
        <FadeIn
          className=" translate-y-2 text-sm font-light tracking-[0.2em] uppercase"
          vars={{ duration: 0.8 }}
        >
          <div>slogan</div>
        </FadeIn>
        <RevealText
          id="cta-heading"
          text="Heading"
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis illo
            quibusdam consectetur. Illum at consectetur fugit beatae ipsa.
            Officiis nihil voluptates magnam doloremque labore illum reiciendis
            incidunt perspiciatis neque a.
          </p>
        </FadeIn>
      </div>
    </div>
  );
};

export default Slogan;
