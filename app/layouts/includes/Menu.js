import React from "react";
import { useEffect, useState } from "react";
import scrollSmoothTo from "@/app/hooks/scrollSmoothTo";

import Image from "next/image";
import Link from "next/link";
import { SiTrustedshops } from "react-icons/si";
import { AiOutlineLoading } from "react-icons/ai";

function Menu() {
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
      <div className="flex flex-col justify-center items-center text-xl font-bold text-red-600  hover:text-red-700 mb-5 group">
        <div className="relative  w-[200px] h-[200px]">
          <div className="flex flex-col  justify-center items-center p-3 bg-red-600 w-full h-full overflow-hidden rounded-full rotate-90 absolute">
            <Image
              src={pizza?.url}
              width={200}
              height={200}
              alt={pizza?.title}
              className="rounded-full group-hover:scale-125 group-hover:rotate-12  transition duration-500 cursor-pointer"
              loading="lazy"
            />
          </div>
        </div>
        <h2 className="">{pizza?.title}</h2>
        <p>R${pizza?.price}</p>
      </div>
    </Link>
  ));

  return (
    <section
      id="Menu"
      className="flex items-center justify-center bg-amber-400 overflow-hidden">
      <div className="h-full max-w-[1500px] flex flex-col justify-center items-center relative mt-10 mb-10">
        <div className=" text-center mx-auto w-2/3 mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-7xl text-black font-extrabold mb-2">
            Cardápio
          </h1>
          <p className="text-gray-700 text-sm sm:text-base">
            Amet consectetur adipiscing elit enim bibendum sed et aliquet
            aliquet risus tempor semper odio egestas id pulvinar consectetur
            elit tortor non hac pellentesque lacus donec accumsan quisque
            ultricies adipiscing mauris tortor cras est eu accumsan mauris.
          </p>
        </div>
        <div id="Pizzas">
          <div className="grid gap-2 grid-cols-1  md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 mt-5 ">
            {isLoading ? (
              <div className="text-xl font-bold flex">
                Carregando...
                <span>
                  <AiOutlineLoading size={33} className="animate-spin" />
                </span>
              </div>
            ) : (
              pizzas
            )}
          </div>
        </div>
        <div className="flex items-center justify-center lg:items-start lg:justify-start gap-5 sm:gap-4">
          <Link href="/menu">
            <div className="sm:w-44 sm:h-20 w-22 h-14  bg-white flex justify-center items-center p-2 text-black font-bold text-lg cursor-pointer hover:bg-black hover:text-white mt-5 hover:translate-y-[-0.5rem] duration-300">
              PEDIR ONLINE
            </div>
          </Link>
          <div
            onClick={() => scrollSmoothTo("Reservas")}
            className="sm:w-44  sm:h-20 w-32 h-14 bg-black flex justify-center items-center p-2 text-amber-400  font-bold lg:text-lg text-base cursor-pointer hover:bg-transparent hover:border-2  hover:text-black hover:border-black mt-5 hover:translate-y-[-0.5rem] duration-300">
            RESERVAS
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
