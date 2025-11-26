// src/components/AddToBagButton.tsx
"use client";
import React from "react";
import { useAppDispatch } from "@/store/hooks";
import { addItem } from "@/store/cartSlice";

type ProductMinimal = {
  _id: string;
  name: string;
  slug: string;
  price?: number | null;
  image?: string | null;
};

export default function AddToBagButton({
  product,
}: {
  product: ProductMinimal;
}) {
  const dispatch = useAppDispatch();

  const handleAdd = () => {
    // send minimal product info to the store
    dispatch(
      addItem({
        _id: product._id,
        name: product.name,
        slug: product.slug,
        price: product.price ?? null,
        image: product.image ?? null,
      })
    );
  };

  return (
    <button
      onClick={handleAdd}
      className="cursor-pointer w-full bg-white py-3 font-medium text-black uppercase transition hover:bg-neutral-200 duration-200"
    >
      Add to Bag
    </button>
  );
}
