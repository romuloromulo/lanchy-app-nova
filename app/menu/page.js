"use client";
import React from "react";
import MainLayout from "../layouts/MainLayout";
import { useEffect, useState } from "react";
// import useIsLoading from "@/app/hooks/useIsLoading";
import Link from "next/link";
import Image from "next/image";
import { AiOutlineLoading } from "react-icons/ai";

function MenuPage() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getProducts() {
    setIsLoading(true);
    // useIsLoading(true);
    setProducts([]);
    const response = await fetch(`/api/products/`);
    const prods = await response.json();
    setProducts(prods);
    // useIsLoading(false);
    setIsLoading(false);
  }
  useEffect(() => {
    getProducts();
  }, []);

  const pizzas = products.map((pizza) => (
    <Link href={`/product/${pizza.id}`}>
      <div className="flex flex-col justify-center items-center text-black hover:text-red-500 duration-500 mb-5 group">
        <div className="relative w-[270px] h-[270px]">
          <div className="flex flex-col justify-center items-center p-3 bg-red-600 w-full h-full overflow-hidden rounded-full rotate-90 absolute">
            <Image
              src={pizza?.url}
              width={270}
              height={270}
              alt={pizza?.title}
              className="rounded-full group-hover:scale-125 group-hover:rotate-12 transition duration-500 cursor-pointer"
              loading="lazy"
            />
          </div>
        </div>
        <h2 className="text-xl sm:text-2xl font-extrabold mt-2">
          {pizza?.title}
        </h2>
        <p className="text-xl font-extrabold">R${pizza?.price}</p>
      </div>
    </Link>
  ));

  return (
    <MainLayout>
      <section
        id="Menu"
        className="flex items-center justify-center bg-white overflow-hidden">
        <div className="py-20 max-w-[1500px] flex flex-col justify-center items-center relative mt-5 sm:mt-8 md:mt-10 mb-10 ">
          <div className=" text-center mx-auto w-2/3 mb-12">
            <h1 className="text-5xl sm:text-6xl md:text-7xl text-black font-extrabold mb-2">
              NOSSO MENU
            </h1>
            <p className="text-gray-700 text-sm sm:text-base">
              Amet consectetur adipiscing elit enim bibendum sed et aliquet
              aliquet risus tempor semper odio egestas id pulvinar consectetu.
            </p>
          </div>
          <div id="Pizzas">
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5">
              {isLoading ? (
                <div className="text-xl font-bold flex items-center justify-center">
                  Carregando...
                  <span className="ml-4">
                    <AiOutlineLoading size={33} t className="animate-spin" />
                  </span>
                </div>
              ) : (
                pizzas
              )}
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}

export default MenuPage;
