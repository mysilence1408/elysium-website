import ButtonLink from "@/utils/ButtonLink";
import { FadeIn } from "@/utils/FadeIn";
import React from "react";

type ProductsListProps = {
  id: number;
  img: string;
  title: string;
  desc: string;
};
const ProductsList = ({ img, title, desc }: ProductsListProps) => {
  return (
    <FadeIn
      className="relative z-10 grid min-h-[85vh] w-full translate-y-20 items-center justify-items-start border border-white/10 p-4 text-left md:p-14 lg:p-20"
      vars={{ duration: 2.5 }}
      start="top 50%"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover object-top opacity-40 md:opacity-100"
        />
      </div>

      {/* Foreground content (left side) */}
      <FadeIn
        className="relative z-10 flex flex-col items-start gap-6 max-w-xl"
        vars={{ duration: 3, delay: 0.8 }}
        start="top 50%"
      >
        <h3 className="font-display mb-3 text-5xl md:text-6xl lg:text-7xl">
          {title}
        </h3>
        <p className="mb-4 text-base font-semibold text-gray-300">
          Eau de parfum
        </p>
        <div className="mb-8 max-w-md text-lg text-gray-200">
          {desc || "⚠️ No description found"}
        </div>

        <div className="flex flex-wrap gap-4">
          <ButtonLink text="discover" link="/products" />
        </div>
      </FadeIn>
    </FadeIn>
  );
};

export default ProductsList;
