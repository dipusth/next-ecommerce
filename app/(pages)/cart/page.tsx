"use client";
import { useCart } from "@/context/CartContext";
import Link from "next/link";
import React from "react";
import CartWrapper from "./Style";
import Image from "next/image";

const Cart = () => {
  const { cart } = useCart();
  console.log("cart", cart);
  const hasCart = cart.length;
  return (
    <div className="container">
      <div className="flex gap-8">
        <div className="p-5 border rounded-lg flex-2">
          {!hasCart && (
            <div className="flex">
              Your cart is empty
              <Link href={"/register"}>Sign up NOW</Link>
            </div>
          )}

          {cart.map((item, key) => {
            return (
              <CartWrapper className="flex p-5 " key={key}>
                <div className="icon-lg cart-img h-50 relative flex-1">
                  <Image
                    className="opacity-[0.9] h-20"
                    src={item.images[0]}
                    alt={item.name}
                    title={item.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="ml-5 flex-2">
                  <h4> {item.name}</h4>
                  {/* <span>{item}</span> */}
                  <p> {item.description}</p>
                </div>
              </CartWrapper>
            );
          })}
        </div>

        <div className="flex-1 border rounded-lg max-h-[300px]">
          <h3 className="border-b-1 p-5"> Price Details</h3>
          <div>
            <div className="flex p-5 justify-between">
              <span>Price ({hasCart} item)</span>
              <span> $1250</span>
            </div>
            <div className="flex p-5 justify-between">
              <span>
                <b>Total</b>
              </span>
              <span>
                <b> $1250</b>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
