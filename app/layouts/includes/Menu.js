import React from "react";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/cart";
import useIsLoading from "@/app/hooks/useIsLoading";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

function Menu() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    useIsLoading(true);
    setProducts([]);
    const response = await fetch(`/api/products/`);
    const prods = await response.json();
    setProducts(prods);
    useIsLoading(false);
  }
  useEffect(() => {
    getProducts();
  }, []);

  const pizzas = products.map((pizza) => (
    <Link href={`/product/${pizza.id}`}>
      <div className="flex flex-col justify-center items-center text-xl font-bold text-red-600  hover:text-red-700 mb-5">
        <div className="relative w-[180px] h-[180px]">
          <div className="flex flex-col justify-center items-center p-3 bg-red-600 w-full h-full overflow-hidden rounded-full rotate-90 absolute">
            <Image
              src={pizza?.url}
              width={170}
              height={170}
              alt={pizza?.title}
              className="rounded-full hover:scale-125 hover:rotate-12 transition duration-500 cursor-pointer"
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
          <h1 className="text-7xl text-black font-extrabold mb-2">Cardápio</h1>
          <p className="text-gray-700">
            Amet consectetur adipiscing elit enim bibendum sed et aliquet
            aliquet risus tempor semper odio egestas id pulvinar consectetur
            elit tortor non hac pellentesque lacus donec accumsan quisque
            ultricies adipiscing mauris tortor cras est eu accumsan mauris.
          </p>
        </div>
        <div id="Pizzas">
          <div className="grid gap-2 grid-cols-5 mt-5 ">{pizzas}</div>
        </div>
        <div className="flex gap-4">
          <div className="w-40 h-16  bg-white flex justify-center items-center p-2 text-black font-bold text-lg cursor-pointer hover:bg-black hover:text-white mt-5">
            PEDIR ONLINE
          </div>
          <div className="w-40 h-16 bg-black flex justify-center items-center p-2 text-amber-400  font-bold text-lg cursor-pointer hover:bg-gray-800 mt-5">
            RESERVAS
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
