import React, { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import Loading from "../../../components/loading";
import scrollSmoothTo from "../../../hooks/scrollSmoothTo";
import Link from "next/link";

function Menu() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getProducts() {
    setIsLoading(true);
    setProducts([]);
    const response = await fetch(`/api/products/`);
    const prods = await response.json();

    setProducts(prods);
    setIsLoading(false);
  }

  useEffect(() => {
    getProducts();
  }, []);

  const pizzas = products.map((pizza) => (
    <MenuItem key={pizza.id} pizza={pizza} />
  ));

  return (
    <section
      id="Menu"
      className="flex items-center justify-center bg-amber-400 overflow-hidden">
      <div className="h-full max-w-[1500px] flex flex-col justify-center items-center relative mt-10 mb-10">
        {/* Conteúdo do menu */}
        <div id="Pizzas">
          <div className="grid gap-2 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-5 mt-5 ">
            {isLoading ? <Loading /> : pizzas}
          </div>
        </div>
        {/* Links para pedir online e reservas */}
        <div className="flex items-center justify-center lg:items-start lg:justify-start gap-5 sm:gap-4">
          <Link href="/menu">
            <div className="sm:w-44 sm:h-20 w-22 h-14 bg-white flex justify-center items-center p-2 text-black font-bold text-lg cursor-pointer hover:bg-black hover:text-white mt-5 hover:translate-y-[-0.5rem] duration-300">
              PEDIR ONLINE
            </div>
          </Link>
          <div
            onClick={() => scrollSmoothTo("Reservas")}
            className="sm:w-44 sm:h-20 w-32 h-14 bg-black flex justify-center items-center p-2 text-amber-400 font-bold lg:text-lg text-base cursor-pointer hover:bg-transparent hover:border-2 hover:text-black hover:border-black mt-5 hover:translate-y-[-0.5rem] duration-300">
            RESERVAS
          </div>
        </div>
      </div>
    </section>
  );
}

export default Menu;
