"use client";
import CarouselComp from "./components/CarouselComp";
import Product from "./components/Product";
import MainHeader from "./layouts/includes/MainHeader";
import MainLayout from "./layouts/MainLayout";
import { DUMMY_DATA } from "@/dummy-data/dummy-data";

export default function Home() {
  const products = DUMMY_DATA;

  return (
    <MainLayout>
      <CarouselComp />
      <div className="max-w-[1200px] mx-auto">
        <div className="text-2xl font-bold mt-4 mb-6 px-4">Products</div>
        <div className="grid grid-cols-5 gap-x-44">
          {products.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </div>
    </MainLayout>
  );
}
