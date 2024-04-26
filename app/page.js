"use client";

import MainLayout from "./layouts/MainLayout";
import { useEffect, useState } from "react";
import Hero from "./layouts/includes/Hero";
import About from "./layouts/includes/About";
import Menu from "./layouts/includes/Menu/Menu";
import Clientes from "./layouts/includes/Clientes";
import Reservas from "./layouts/includes/Reservas";

export default function Home() {
  const [products, setProducts] = useState([]);

  // async function getProducts() {
  //   setProducts([]);
  //   const response = await fetch(
  //     `%${process.env.NEXT_PUBLIC_API_URL}/api/products/`
  //   );
  //   const prods = await response.json();
  //   setProducts(prods);
  // }
  // useEffect(() => {
  //   getProducts();
  // }, []);

  return (
    <MainLayout>
      <div className="mx-auto">
        <Hero />
        <About />
        <Menu />
        <Clientes />
        <Reservas />
      </div>
    </MainLayout>
  );
}
