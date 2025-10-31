import React from "react";
import Depp from "@/../public/images/dior.webp";
import perfumeImg from "@/../public/images/ignis-bottle.png";
import Image from "next/image";
import { FadeIn } from "@/utils/FadeIn";
import { formatPrice } from "@/utils/formatters";
import ButtonLink from "@/utils/ButtonLink";
const FeatureProduct = () => {
  const formattedPrice = formatPrice(10000);
  return (
    <div className=" overflow-hidden bg-[#0C1A27] py-16 text-white md:py-24 px-8 lg:px-16">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:grid-row-[auto,auto]">
        <FadeIn
          className=" translate-y-16 opacity-0 lg:col-span-2 lg:row-span-2"
          vars={{ duration: 1 }}
        >
          <Image
            src={Depp}
            alt="gridImage"
            className=" h-auto w-full object-cover"
          />
        </FadeIn>
        <FadeIn className=" translate-y-16 space-y-6 self-start bg-[#060E16] p-10 opacity-0 lg:col-start-3 lg:row-start-1">
          <h2 className=" text-3xl leading-tight font-semibold md:text-4xl">
            Modern Luxury
          </h2>
          <div className=" text-base max-w-lg text-gray-400">
            Designed for those who appreciate sophistication in simplicity,
            every detail of Elysium reflects refined taste and timeless
            elegance. Each fragrance is carefully composed from the finest
            ingredients, creating scents that are both distinctive and enduring.
            From the minimalist design to the understated luxury in every
            detail, Elysium embodies the beauty of subtle expression and the art
            of quiet confidence.
          </div>
        </FadeIn>
        <FadeIn
          className=" animate-in opacity-0 relative translate-y-16 self-end bg-[#060E16] will-change-transform"
          vars={{ duration: 1, delay: 1 }}
        >
          <Image
            src={perfumeImg}
            alt="perfumeImg"
            className=" mx-auto -mt-10 w-full -rotate-12 md:-mt-20"
          />
          <div className=" flex justify-between p-10 pt-4">
            <div className="space-y-1">
              <h3 className=" font-display text-4xl">ignis</h3>
              <p className=" mt-2 text-gray-400">Eu perfume</p>
              <div className=" mt-6">
                <ButtonLink text="shop now" link="/" />
              </div>
            </div>
            <p className=" mt-4 text-gray-100" aria-label="Product price">
              <span>{formattedPrice}</span>
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default FeatureProduct;
