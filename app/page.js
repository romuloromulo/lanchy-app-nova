"use client";
import CarouselComp from "./components/CarouselComp";
import Product from "./components/Product";
import MainHeader from "./layouts/includes/MainHeader";
import MainLayout from "./layouts/MainLayout";

export default function Home() {
  const products = [
    {
      id: 1,
      title: "brown leather bag",
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      url: "https://picsum.photos/200",
      price: 2500,
    },
    {
      id: 2,
      title: "caixa a",
      description:
        "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
      url: "https://picsum.photos/200",
      price: 1990,
    },
  ];

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
