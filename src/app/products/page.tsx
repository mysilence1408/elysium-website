import React from "react";
import { Link } from "next-view-transitions";

interface Product {
  _id: string;
  name: string;
  slug: string;
  description: string;
  image?: string;
  price?: number;
}

const getProducts = async (): Promise<Product[]> => {
  try {
    const res = await fetch("http://localhost:3000/api/products", {
      next: { revalidate: 0 }, // Disable caching during development
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

const Products = async () => {
  const products = await getProducts();

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-6 py-12">
      {products.map((item: Product) => (
        <Link href={`/products/${item.slug}`} key={item._id}>
          <div className="border rounded-2xl p-4 hover:shadow-lg transition">
            {item.image && (
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
            )}
            <h6 className="text-xl font-semibold mb-2">{item.name}</h6>
            <p className="text-gray-600 mb-2">{item.description}</p>
            {item.price && (
              <span className="font-bold text-lg">${item.price}</span>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
