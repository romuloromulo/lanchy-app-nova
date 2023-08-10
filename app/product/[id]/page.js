"use client";

import SimilasProducts from "@/app/components/SimilasProducts";
import MainLayout from "@/app/layouts/MainLayout";
import Image from "next/image";

function Product() {
  const products = {
    id: 1,
    title: "brown leather bag",
    description:
      "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries",
    url: "https://picsum.photos/200",
    price: 2500,
  };

  return (
    <>
      <MainLayout>
        <div className="max-w-[1200px] mx-auto">
          <div className="flex px-4 py-10">
            {products?.url ? (
              <Image
                width={280}
                height={280}
                className="w-[40%] rounded-lg"
                src={products?.url}
              />
            ) : (
              <div className="w-[40%]"></div>
            )}
            <div className="px-4 w-full">
              <div className="font-bold text-xl">{products?.title}</div>
              <div className="text-sm text-gray-700 pt-2">
                Brand New - Full Warranty
              </div>

              <div className="border-b py-1" />

              <div className="pt-3 pb-2">
                <div className="flex items-center">
                  Condition:
                  <span className="font-bold text-[17px] ml-1"> New</span>
                </div>
              </div>

              <div className="border-b py-1" />

              <div className="pt-3">
                <div className="w-full flex items-center justify-between">
                  <div className="flex items-center">
                    Price:
                    {products?.price ? (
                      <div className="font-bold text-[20px] ml-2">
                        R${(products?.price / 100).toFixed(2)}
                      </div>
                    ) : null}
                  </div>
                  <button
                    className={`
                      text-white py-2 px-20 rounded-full cursor-pointer bg-[#3498C9]`}>
                    Add to cart
                  </button>
                </div>
                <div className="border-b py-1" />
                <div className="pt-3">
                  <div className="font-semibold pb-1">Description:</div>
                  <div className="text-sm">{products?.description}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SimilasProducts />
      </MainLayout>
    </>
  );
}

export default Product;
