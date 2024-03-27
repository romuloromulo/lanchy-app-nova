import React from "react";
import Image from "next/image";
import Link from "next/link";

function MenuItem({ pizza }) {
  return (
    <Link href={`/product/${pizza.id}`}>
      <div className="flex flex-col justify-center items-center text-xl font-bold text-red-600 hover:text-red-700 mb-5 group">
        <div className="relative w-[200px] h-[200px]">
          <div className="flex flex-col justify-center items-center p-3 bg-red-600 w-full h-full overflow-hidden rounded-full rotate-90 absolute">
            <Image
              src={pizza?.url}
              width={200}
              height={200}
              alt={pizza?.title}
              className="rounded-full group-hover:scale-125 group-hover:rotate-12 transition duration-500 cursor-pointer"
              loading="lazy"
            />
          </div>
        </div>
        <h2>{pizza?.title}</h2>
        <p>R${pizza?.price}</p>
      </div>
    </Link>
  );
}

export default MenuItem;
