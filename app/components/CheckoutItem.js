"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export default function CheckoutItem({ product }) {
  const pathname = usePathname();

  return (
    <>
      <div className="flex justify-start mb-2 border-2 border-black bg-amber-400 p-4">
        <Image
          width={150}
          height={150}
          className="rounded-md"
          src={product.url}
        />

        <div className="overflow-hidden pl-2">
          <div className="font-bold">Pizza de {product.title}</div>

          <div className="text-lg font-semibold ">
            <span className="font-bold">R${product.price.toFixed(2)}</span>
          </div>

          <div className="relative flex items-center text-[14px] text-gray-500">
            <div className="line-through">
              R${(product.price * 1.2).toFixed(2)}
            </div>
            <div className="px-2">-</div>
            <div className="line-through">20%</div>
          </div>

          <div className="text-sm mt-2">
            {product.description.substring(0, 130)}...
          </div>

          {pathname == "/cart" ? (
            <div className="text-sm mt-2 w-full flex justify-end underline text-blue-500 cursor-pointer">
              Remove
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
