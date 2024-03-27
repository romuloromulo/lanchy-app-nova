"use client";
import SimilarProducts from "@/app/components/SimilarProducts";
import MainLayout from "@/app/layouts/MainLayout";
import Image from "next/legacy/image";
import { toast } from "react-toastify";
import { useCart } from "@/app/context/cart";
import { useEffect, useState } from "react";
import useIsLoading from "@/app/hooks/useIsLoading";
import { LuWheat, LuWheatOff } from "react-icons/lu";
import { AiOutlineLoading } from "react-icons/ai";

function Product({ params }) {
  const cart = useCart();
  const [product, setProduct] = useState({});
  const [loadingProduct, setLoadingProduct] = useState(true);

  async function getProduct() {
    useIsLoading(true);
    setProduct({});
    const response = await fetch(`/api/product/${params.id}`);
    const prod = await response.json();
    setProduct(prod);
    cart.isItemAddedToCart(prod);
    setLoadingProduct(false);
    useIsLoading(false);
  }

  const ingredients = product?.ingredients || [];

  useEffect(() => {
    getProduct();
  }, []);

  function addToCartHandler() {
    if (cart.isItemAdded) {
      cart.removeFromCart(product);
      toast.info("Removido do carrinho.", { autoClose: 1500 });
    } else {
      cart.addToCart(product);
      toast.success("Adicionado ao carrinho.", { autoClose: 1500 });
    }
  }

  return (
    <>
      <MainLayout>
        <section id="Produto" className="bg-white text-black">
          <div className="max-w-[1200px] gi add .  mx-auto">
            <div className="flex md:flex-row flex-col items-center px-2 py-10">
              {product.url ? (
                <div className="bg-red-500 p-4 md:p-10 flex justify-around  rounded-lg ">
                  <Image
                    width={780}
                    height={780}
                    className="rounded-lg"
                    alt="Imagem da Pizza"
                    src={product?.url}
                    placeholder="blur"
                    blurDataURL="/images/PizzasMenu/Tomato.png"
                  />
                </div>
              ) : (
                <div className="bg-red-500 p-4 md:p-10 flex justify-center items-center rounded-lg  w-[80%] h-[310px] sm:h-[38px] md:h-[400px] lg:h-[490px]">
                  {loadingProduct ? (
                    <AiOutlineLoading
                      size={55}
                      className="animate-spin text-white"
                    />
                  ) : null}
                </div>
              )}
              <div className="md:px-4 w-full mt-2 md:mt-0 flex flex-col  md:items-start gap-2 md:ml-10">
                <div className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
                  {loadingProduct ? (
                    <div className="w-[200px] h-12 md:w-[400px] md:h-24 bg-gray-300 animate-pulse" />
                  ) : (
                    `Pizza ${product?.title}`
                  )}
                </div>
                <div>
                  {loadingProduct ? (
                    <div className="w-[300px] h-6 bg-gray-300 animate-pulse" />
                  ) : (
                    product.description
                  )}
                </div>

                <div className="py-1" />
                <div className="flex  px-4 flex-col">
                  <span className="font-bold flex translate-x-[-1rem]">
                    <Image
                      src="/images/ingredients.png"
                      width={22}
                      height={22}
                      alt="ingredients"
                    />
                    Ingredientes:
                  </span>
                  <ul className="text-lx text-black gap-2">
                    {loadingProduct ? (
                      <>
                        <li className="w-[100px] h-4 bg-gray-300 animate-pulse mb-2" />
                        <li className="w-[100px] h-4 bg-gray-300 animate-pulse mb-2" />
                        <li className="w-[100px] h-4 bg-gray-300 animate-pulse mb-2" />
                        <li className="w-[100px] h-4 bg-gray-300 animate-pulse mb-2" />
                      </>
                    ) : (
                      ingredients.map((i) => <li key={i}> - {i}</li>)
                    )}
                  </ul>
                </div>
                <div className="font-bold">
                  {loadingProduct ? (
                    <div className="w-[150px] h-5 bg-gray-300 animate-pulse" />
                  ) : product?.glutenFree === false ? (
                    <div className="flex">
                      {" "}
                      <LuWheat size={22} />
                      Contém Glúten
                    </div>
                  ) : (
                    <div className="flex">
                      {" "}
                      <LuWheatOff size={22} />
                      Sem glúten
                    </div>
                  )}
                </div>
                <div className="flex items-center mt-5">
                  {loadingProduct ? (
                    <div className="w-[100px] h-10 bg-gray-300 animate-pulse" />
                  ) : (
                    <div className="font-bold text-4xl ml-2">
                      R${product?.price?.toFixed(2)}
                    </div>
                  )}
                </div>
                <div className="w-full flex justify-center items-center md:w-auto ">
                  <button
                    className={`
                  text-black w-full py-5 font-bold text-xl mt-4 px-4 sm:px-6 md:px-16 cursor-pointer bg-amber-400 hover:bg-[#bf851a] rounded-md shadow-sm`}
                    onClick={addToCartHandler}>
                    {cart.isItemAdded
                      ? "Remover do Carrinho"
                      : "Adicionar no Carrinho"}
                  </button>
                </div>
                <div className="border-b py-1" />
              </div>
            </div>
          </div>

          <SimilarProducts />
        </section>
      </MainLayout>
    </>
  );
}

export default Product;
