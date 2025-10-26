import ButtonLink from "@/app/utils/ButtonLink";
import { FadeIn } from "@/app/utils/FadeIn";
import Image from "next/image";
import React from "react";

type ProductsListProps = {
  id: number;
  img: string;
  title: string;
  desc: string;
};
const ProductsList = ({ id, img, title, desc }: ProductsListProps) => {
  return (
    <FadeIn
      className=" relative z-10 grid min-h-[85vh] w-full translate-y-20 items-center justify-items-start border border-white/10 p-4 text-left md:p-14 lg:p-20"
      vars={{ duration: 2.5 }}
      start="top 50%"
    >
      <div className=" absolute inset-0 z-0">
        <img
          src={img}
          alt="img"
          className=" object-cover opacity-40 md:opacity-100"
          width={1150}
        />
      </div>

      <FadeIn
        className=" relative z-10 grid translate-y-8"
        vars={{ duration: 3, delay: 0.8 }}
        start="top 50%"
      >
        <h3 className=" font-display mb-3 text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h3>
        <p className="mb-8 text-base font-semibold text-gray-300">
          Eau da parfum
        </p>
        <div className="mb-10 max-w-md text-lg text-gray-300">{desc}</div>

        <div className="flex flex-wrap gap-4">
          <ButtonLink text="discover" link="/" />
          <ButtonLink text="+ add to bag" link="/" />
        </div>
      </FadeIn>
    </FadeIn>
  );
};

export default ProductsList;
