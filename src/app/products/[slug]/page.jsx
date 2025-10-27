import React from "react";
import { notFound } from "next/navigation";

// Fetch data from your API
const getData = async (slug) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products`, {
      // Important for Next.js SSR
      next: { revalidate: 0 }, // disables caching during development
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const products = await res.json();

    // Find product by slug
    const product = products.find((item) => item.slug === slug);
    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

const ProductPage = async ({ params }) => {
  const { slug } = params;
  const product = await getData(slug);

  if (!product) {
    notFound(); // Next.js 404 page
  }

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">{product.name}</h1>

        {product.image && (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto rounded-2xl mb-6"
          />
        )}

        <p className="text-lg text-gray-700">{product.description}</p>

        {product.price && (
          <p className="mt-4 text-xl font-semibold">Price: ${product.price}</p>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
