"use client";

import MainLayout from "./layouts/MainLayout";
import { useEffect, useState } from "react";
import useIsLoading from "./hooks/useIsLoading";
import Hero from "./layouts/includes/Hero";
import About from "./layouts/includes/About";
import Menu from "./layouts/includes/Menu";
import Clientes from "./layouts/includes/Clientes";
import Reservas from "./layouts/includes/Reservas";

export default function Home() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    // useIsLoading(true);
    setProducts([]);
    const response = await fetch(`/api/products/`);
    const prods = await response.json();
    setProducts(prods);
    // useIsLoading(false);
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <MainLayout>
      <div className="mx-auto">
        <Hero />
        <About />
        {/* <Menu /> */}
        <Clientes />
        <Reservas />
      </div>
    </MainLayout>
  );
}
