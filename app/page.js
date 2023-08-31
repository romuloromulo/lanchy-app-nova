"use client";
import CarouselComp from "./components/CarouselComp";
import Product from "./components/Product";
import MainHeader from "./layouts/includes/MainHeader";
import MainLayout from "./layouts/MainLayout";
import { useEffect, useState } from "react";
import { useCart } from "./context/cart";
import useIsLoading from "./hooks/useIsLoading";
import { usePathname } from "next/navigation";
import Hero from "./layouts/includes/Hero";
import About from "./layouts/includes/About";
import Menu from "./layouts/includes/Menu";
import Clientes from "./layouts/includes/Clientes";

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
      {/* <CarouselComp /> */}
      <div className="mx-auto">
        <Hero />
        <About />
        <Menu />
        <Clientes />
      </div>
    </MainLayout>
  );
}
