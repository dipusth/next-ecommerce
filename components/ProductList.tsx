"use client";

import Stripe from "stripe";
import { ProductCard } from "./ProductCard";
import { Input } from "./ui/input";
import { Search } from "lucide-react";
interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <div className="mt-5">
      <div className="text-center max-w-3xs mb-5 flex border rounded-sm items-center px-2">
        <Search />
        <Input
          className="border-0 shadow-none"
          type="text"
          placeholder="Search products..."
        />
      </div>
      <ul className="flex flex-wrap gap-3 justify-between">
        {products.map((product, key) => {
          return (
            <li key={key} className="relative w-[23%] rounded-sm mb-5 pb-5">
              <ProductCard product={product} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
