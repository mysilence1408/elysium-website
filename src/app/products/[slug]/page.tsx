import React from "react";
import { notFound } from "next/navigation";

// Define Product interface
interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  price?: number;
}

// Fetch data from your API
const getData = async (slug: string): Promise<Product | null> => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      next: { revalidate: 0 },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }

    const products: Product[] = await res.json();
    const product = products.find((item) => item.slug === slug);
    return product || null;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

// ✅ Note the awaited params
const ProductPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const product = await getData(slug);

  if (!product) {
    notFound();
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
