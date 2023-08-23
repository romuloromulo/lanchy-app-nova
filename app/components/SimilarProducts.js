import React, { useEffect, useState } from "react";
import Product from "./Product";
import { BiLoader } from "react-icons/bi";
import useIsLoading from "../hooks/useIsLoading";

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
      <div>
        <div className="border-b py-1 max-w-[1200px] mx-auto" />

        <div className="max-w-[1200px] mx-auto">
          <div className="font-bold text-2xl py-2 mt-4">
            Similar sponsored items
          </div>

          {products.length > 0 ? (
            <div className="grid grid-cols-5 gap-4">
              {products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <div className="flex items-center justify-center gap-4 font-semibold">
                <BiLoader size={30} className="text-blue-400 animate-spin" />
                Loading Products...
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SimilasProducts;
