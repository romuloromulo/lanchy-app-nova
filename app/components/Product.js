"use client";

import Image from "next/image";
import Link from "next/link";

export default function Product({ product }) {
  return (
    <>
      <Link
        href={`/product/${product?.id}`}
        className="max-w-[200px] text-white h-64 w-40 p-2 mt-2 border-2 border-black bg-red-500 rounded mx-auto">
        {product?.url ? (
          <Image
            className="rounded cursor-pointer"
            width={150}
            height={150}
            src={`${product.url}`}
          />
        ) : null}

        <div className="pt-2 px-1">
          <div className="font-semibold text-white text-[15px] hover:underline cursor-pointer">
            {product?.title}
          </div>
          <div className="font-extrabold">R${(product?.price).toFixed(2)}</div>

          <div className="relative flex items-center text-[12px] text-black">
            <div className="line-through">
              R${(product?.price * 1.2).toFixed(2)}
            </div>
            <div className="px-2">-</div>
            <div className="line-through">20%</div>
          </div>
        </div>
      </Link>
    </>
  );
}
