"use client";

import SimilarProducts from "@/app/components/SimilarProducts";
import MainLayout from "@/app/layouts/MainLayout";
import Image from "next/image";
import { toast } from "react-toastify";
import { useCart } from "@/app/context/cart";
import { useEffect, useState } from "react";
import useIsLoading from "@/app/hooks/useIsLoading";
import { LuWheat, LuWheatOff } from "react-icons/lu";

function Product({ params }) {
  const cart = useCart();
  const [product, setProduct] = useState({});

  async function getProduct() {
    useIsLoading(true);
    setProduct({});
    const response = await fetch(`/api/product/${params.id}`);
    const prod = await response.json();
    setProduct(prod);
    cart.isItemAddedToCart(prod);
    useIsLoading(false);
  }

  console.log(product);

  const ingredients = product?.ingredients || [];

  useEffect(() => {
    getProduct();
  }, []);

  function addToCartHandler() {
    if (cart.isItemAdded) {
      cart.removeFromCart(product);
      // toast.info("Removed from cart", { autoClose: 3000 });
    } else {
      cart.addToCart(product);
      // toast.success("Added to cart", { autoClose: 3000 });
    }
  }

  return (
    <>
      <MainLayout>
        <section id="Produto" className="bg-white text-black">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex px-4 py-10">
              <div className="bg-red-500 p-10 flex items-center justify-around  rounded-lg">
                {product?.url ? (
                  <Image
                    width={780}
                    height={780}
                    className=" rounded-lg"
                    alt="Imagem do Produto"
                    src={product?.url}
                  />
                ) : (
                  <div className="w-[40%]"></div>
                )}
              </div>
              <div className="px-4 w-full flex flex-col justify-center items-start gap-2 ml-10">
                <div className="font-extrabold text-6xl">
                  Pizza de {product?.title}
                </div>
                <div>{product.description}</div>

                <div className="py-1" />
                <div className="flex flex-col items-center justify-center">
                  <span className="font-bold flex translate-x-[-1rem]">
                    <Image
                      src="/images/ingredients.png"
                      width={22}
                      height={22}
                      className=""
                    />
                    Ingredientes:
                  </span>
                  <ul className="text-lx text-black gap-2">
                    {ingredients.map((i) => (
                      <li className=""> - {i}</li>
                    ))}
                  </ul>
                </div>
                <div className="font-bold">
                  {product?.glutenFree === false ? (
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
                  {product?.price ? (
                    <div className="font-bold text-4xl ml-2">
                      R${(product?.price).toFixed(2)}
                    </div>
                  ) : null}
                </div>

                <button
                  className={`
                      text-black py-5 font-bold text-xl mt-4 px-16 cursor-pointer bg-amber-400 hover:bg-[#bf851a]`}
                  onClick={addToCartHandler}>
                  {cart.isItemAdded
                    ? "Remover do Carrinho"
                    : "Adicionar no Carrinho"}
                </button>

                <div className="border-b py-1" />
              </div>
            </div>
          </div>
          <div></div>

          <SimilarProducts />
        </section>
      </MainLayout>
    </>
  );
}

export default Product;
