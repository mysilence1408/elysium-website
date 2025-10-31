import { RevealText } from "@/utils/RevealText";
import React from "react";
import ProductsList from "./ProductsList";

interface Product {
  _id: number;
  name: string;
  description: string;
  image?: string;
  price?: number;
  slug: string;
}

const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await res.json();
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const AllProducts = async () => {
  const products = await getProducts();

  return (
    <div className="space-y-8 bg-[#0C1A27] py-16 text-center text-white md:py-24">
      <div className="mx-auto space-y-8">
        <p className="text-sm font-light tracking-[0.2em] uppercase">
          The Collection
        </p>

        <RevealText
          text="An Elegance For Every Mood"
          as="h2"
          id="product-heading"
          align="center"
          duration={1.5}
          staggerAmount={0.3}
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-widest"
        />

        <p className="mx-auto max-w-2xl text-lg text-balance text-gray-300">
          Where luxury meets emotion, transforming every fragrance into a
          signature expression of character and elegance.
        </p>

        {products.length === 0 ? (
          <p className="text-gray-500 text-lg mt-12">No products found.</p>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-12">
            {products.map((product) => (
              <ProductsList
                key={product._id}
                id={product._id}
                img={product.image || "/placeholder.jpg"}
                title={product.name}
                desc={product.description}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProducts;
