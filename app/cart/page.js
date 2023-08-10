"use client";
import React from "react";
import MainLayout from "../layouts/MainLayout";

import { DUMMY_DATA } from "../../dummy-data/dummy-data";
import SimilasProducts from "../components/SimilasProducts";
import CartItem from "../components/CartItem";
import { productionBrowserSourceMaps } from "@/next.config";
import Link from "next/link";
console.log(DUMMY_DATA);

function page() {
  const product = {
    id: 1,
    title: "brown leather bag",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    url: "https://picsum.photos/200",
    price: 2500,
  };

  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto mb-8 min-h-[300px]">
          <div className="text-2xl font-bold my-4">Shopping cart</div>
          <div className="relative flex items-baseline justify-between gap-2">
            <div className="w-[65%">
              <CartItem key={product.id} product={product} />
            </div>
            <div
              id="GoToCheckout"
              className=" md:w-1/3 absolute top-0 right-0 m-2">
              <div className="bg-white p-4 border">
                <Link href="/checkout">
                  <div className="flex items-center justify-center bg-blue-600 w-full text-white font-semibold p-3 rounded-full mt-4 hover:bg-blue-700">
                    Go to checkout
                  </div>
                </Link>
                <div className="flex items-center justify-between mt-4 text-sm mb-1">
                  <div>Items 3</div>
                  <div>£100</div>
                </div>
                <div className="flex items-center justify-between mb-4 text-sm">
                  <div>Shipping:</div>
                  <div>Free</div>
                </div>

                <div className="border-b border-gray-300" />

                <div className="flex items-center justify-between mt-4 mb-1 text-lg font-semibold">
                  <div>Subtotal</div>
                  <div>£100</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SimilasProducts />
      </MainLayout>
    </>
  );
}

export default page;
