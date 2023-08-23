"use client";
import CarouselComp from "./components/CarouselComp";
import Product from "./components/Product";
import MainHeader from "./layouts/includes/MainHeader";
import MainLayout from "./layouts/MainLayout";
import { useEffect, useState } from "react";
import { useCart } from "./context/cart";
import useIsLoading from "./hooks/useIsLoading";
import { usePathname } from "next/navigation";

export default function Home() {
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
    <MainLayout>
      <CarouselComp />
      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>
        <div className="grid grid-cols-5 gap-x-44">
          {products.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </MainLayout>
  );
}
