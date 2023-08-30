import React from "react";
import { useEffect, useState } from "react";
import { useCart } from "@/app/context/cart";
import useIsLoading from "@/app/hooks/useIsLoading";
import { usePathname } from "next/navigation";

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

  return (
    <section
      id="Menu"
      className="h-screen flex items-center justify-center  bg-white overflow-hidden"></section>
  );
}

export default Menu;
