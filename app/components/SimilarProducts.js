import React, { useEffect, useState } from "react";
import Product from "./Product";
import { BiLoader } from "react-icons/bi";
import useIsLoading from "../hooks/useIsLoading";
import Loading from "./loading";

function SimilasProducts() {
  const [products, setProducts] = useState([]);

  async function getRandomProducts() {
    try {
      useIsLoading(true);
      setProducts([]);
      const response = await fetch(`/api/products/get-random`);
      const prods = await response.json();
      setProducts(prods);
      useIsLoading(false);
    } catch (error) {
      console.log(error);
      alert(error);
    }
  }
  useEffect(() => {
    getRandomProducts();
  }, []);
  return (
    <>
      <div className="bg-white md:py-10">
        <div className="border-b p-4 max-w-[1200px] mx-auto" />

        <div className="max-w-[1200px] mx-auto">
          <div className="font-bold text-2xl py-2 px-4 mt-4 text-black">
            Pizzas que talvez goste:
          </div>

          {products.length > 0 ? (
            <div className="grid md:grid-cols-5 grid-cols-2 sm:grid-cols-4 gap-4 justify-around p-2">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <Loading />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SimilasProducts;
