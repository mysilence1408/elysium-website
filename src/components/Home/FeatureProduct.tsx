import React from "react";
import gridImage from "@/../public/images/grid-picture.jpg";
import perfumeImg from "@/../public/images/ignis-bottle.png";
import Image from "next/image";
import { FadeIn } from "@/utils/FadeIn";
import { formatPrice } from "@/utils/formatters";
import ButtonLink from "@/utils/ButtonLink";
const FeatureProduct = () => {
  const formattedPrice = formatPrice(10000);
  return (
    <div className=" overflow-hidden bg-black py-16 text-white md:py-24 px-8 lg:px-16">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:grid-row-[auto,auto]">
        <FadeIn
          className=" translate-y-16 opacity-0 lg:col-span-2 lg:row-span-2"
          vars={{ duration: 1 }}
        >
          <Image
            src={gridImage}
            alt="gridImage"
            className=" h-auto w-full object-cover"
          />
        </FadeIn>
        <FadeIn className=" translate-y-16 space-y-6 self-start bg-white/10 p-10 opacity-0 lg:col-start-3 lg:row-start-1">
          <h2 className=" text-3xl leading-tight font-semibold md:text-4xl">
            Powerful simplicity
          </h2>
          <div className=" text-base max-w-lg text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
            modi sequi voluptas officiis eveniet aperiam expedita ipsam,
            reiciendis corrupti architecto amet, eum nisi eos, odio aut
            accusantium deleniti vero. Laboriosam. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Excepturi, officia aspernatur,
            corrupti aliquam nisi magni quam laborum dolorem suscipit commodi,
            id corporis velit tempore laboriosam possimus? Vitae praesentium at
            nesciunt?
          </div>
        </FadeIn>
        <FadeIn
          className=" animate-in opacity-0 relative translate-y-16 self-end bg-white/10 will-change-transform"
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
