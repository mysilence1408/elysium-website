import React from "react";
import { notFound } from "next/navigation";
import { formatPrice } from "@/utils/formatters";

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
    <div className=" px-8 lg:px-16 py-16">
      <div className=" grid grid-cols-1 items-center gap-10 pb-10 lg:grid-cols-2">
        <div className=" relative mb-14 flex justify-center pb-10">
          <img
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className=" absolute top-[90%] -scale-y-100 [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_70%,rgba(0,0,0,.15)_100%)]"
          />
          <img
            src={product.image}
            alt={product.name}
            width={600}
            height={600}
            className=" relative"
          />
        </div>
        {/* products info section */}
        <div className="text-white">
          <h1 className="font-display mb-4 border-b border-neutral-700 pb-2 text-4xl md:text-5xl">
            {product.name}
          </h1>
          <div className=" space-y-6">
            <p>{product.description}</p>
            <p className=" mt-10  text-3xl font-light">
              {formatPrice(product.price)}
            </p>

            <button className=" cursor-pointer w-full bg-white py-3 font-medium text-black uppercase transition hover:bg-neutral-200 duration-200">
              Add to Bag
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
