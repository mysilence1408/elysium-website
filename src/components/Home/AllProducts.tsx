import { RevealText } from "@/app/utils/RevealText";
import React from "react";
import ProductsList from "./ProductsList";
import { productsData } from "./Data";

const AllProducts = () => {
  return (
    <div className=" space-y-8 bg-black py-16 text-center text-white md:py-24">
      <div className=" mx-auto space-y-8">
        <p className=" text-sm font-light tracking-[0.2em] uppercase">
          Our Fragrances
        </p>
        <RevealText
          text="An Essence for Every Man"
          as="h2"
          id="product-heading"
          align="center"
          duration={1.5}
          staggerAmount={0.3}
          className=" font-display text-5xl uppercase sm:text-6xl md:text-7xl lg:text-8xl tracking-widest"
        />

        <p className=" mx-auto max-w-2xl text-lg text-balance text-gray-300">
          An expression of quiet luxury, Côte Royale is designed for the man who
          commands attention without seeking it.
        </p>
        <div className=" mt-12 grid grid-cols-1 gap-12">
          {productsData.map((product) => {
            return (
              <ProductsList
                key={product.id}
                id={product.id}
                img={product.image}
                title={product.name}
                desc={product.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
