"use client";

import { AiOutlineCheckCircle } from "react-icons/ai";
import MainLayout from "../layouts/MainLayout";
import Link from "next/link";

export default function Success() {
  return (
    <>
      <MainLayout>
        <div
          id="SuccessPage"
          className="mt-12 max-w-[1200px] mx-auto px-2 min-h-[50vh]">
          <div className="bg-white border-2 border-black w-full p-6 min-h-[150px] flex items-center justify-center">
            <div>
              <div className="flex items-center text-xl">
                <AiOutlineCheckCircle className="text-green-500" size={35} />
                <span className="pl-4">Pagamento feito!</span>
              </div>
              <p className="text-sm">
                Obrigado por pedir conosco! Cheque seu pedido em Pedidos.
              </p>

              <Link href="/" className="w-full">
                <div className="w-full text-center bg-amber-400 hover:bg-amber-500 duration-300 text-sm font-semibold text-black border-2 border-black p-[11px] mt-4">
                  Pedir mais pizzas!
                </div>
              </Link>
            </div>
          </div>
        </div>
      </MainLayout>
    </>
  );
}
