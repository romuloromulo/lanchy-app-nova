"use client";
import React, { useEffect } from "react";
import MainLayout from "../layouts/MainLayout";

import SimilasProducts from "../components/SimilarProducts";
import CartItem from "../components/CartItem";
import { productionBrowserSourceMaps } from "@/next.config";
import { useRouter } from "next/navigation";
import { useCart } from "../context/cart";
import useIsLoading from "../hooks/useIsLoading";
import ClientOnly from "../components/ClientOnly";

function Cart() {
  const router = useRouter();
  const cart = useCart();

  useEffect(() => {
    useIsLoading(true);
    cart.getCart();
    cart.cartTotal();
    useIsLoading(false);
  }, [cart]);

  function goToCheckout() {
    if (!cart.cartTotal()) {
      alert("Você não tem items no carrinho de compras.");
      return;
    }
    router.push("/checkout");
  }

  return (
    <>
      <MainLayout>
        <div className="w-full py-16 bg-white">
          <div className="max-w-[1200px] mx-auto mt-10 mb-8 min-h-[300px]">
            <div className="text-3xl font-extrabold my-4 text-center">
              Carro de Compras
            </div>
            <div className="lg:flex-row flex flex-col items-center justify-start md:items-start p-4  lg:justify-between gap-2">
              <div className="flex flex-col justify-center items-center md:w-full h-auto w-auto">
                <ClientOnly>
                  {cart.getCart().map((product) => (
                    <CartItem key={product.id} product={product} />
                  ))}
                </ClientOnly>
              </div>
              <div id="GoToCheckout" className="lg:w-1/3 w-[90%]">
                <ClientOnly>
                  <div className="bg-red-500 p-4 border-black border-2">
                    <button
                      onClick={() => goToCheckout()}
                      className="flex items-center border-2 border-black justify-center bg-amber-400 w-full text-black font-bold p-3 mt-4 py-5 hover:bg-amber-500 duration-300">
                      CHECKOUT
                    </button>
                    <div className="flex items-center justify-between mt-4 text-xl mb-1">
                      <div>Items ({cart.getCart().length})</div>
                      <div>R${cart.cartTotal().toFixed(2)}</div>
                    </div>
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="font-bold">Frete:</div>
                      <div className="font-bold">Grátis</div>
                    </div>

                    <div className="border-b border-black border-2" />

                    <div className="flex items-center justify-between mt-4 mb-1 text-2xl font-extrabold">
                      <div>Subtotal</div>
                      <div>R${cart.cartTotal().toFixed(2)}</div>
                    </div>
                  </div>
                </ClientOnly>
              </div>
            </div>
          </div>

          <SimilasProducts />
        </div>
      </MainLayout>
    </>
  );
}

export default Cart;
