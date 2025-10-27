import React from "react";
import { productsData } from "@/components/Home/Data";
import Link from "next/link";
const Products = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-3 gap-4">
      {productsData.map((item) => (
        <Link href={`products/${item.slug}`} key={item.id}>
          <div>
            <h6>{item.name}</h6>
            <p>{item.desc}</p>
            <img src={item.image} alt={item.name} />
            <span>{item.price}</span>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Products;
