"use client";
import Stripe from "stripe";
import { Card } from "./ui/card";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  products: Stripe.Product[];
}
export const Carousel = ({ products }: Props) => {
  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => {
        if (products.length === 0) return prev;
        return (prev + 1) % products.length;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [products.length]);
  const currentProduct = products[current];
  const price = currentProduct.default_price as Stripe.Price;
  return (
    <Card className="relative h-[350]">
      {currentProduct.images && currentProduct.images[0] && (
        <div className="flex-1 w-full h-80">
          <Image
            src={currentProduct.images[0]}
            alt={currentProduct.name}
            title={currentProduct.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      )}
    </Card>
  );
};
