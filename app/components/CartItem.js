"use client";
import { useCart } from "../context/cart";
import { toast } from "react-toastify";
import Image from "next/image";

function CartItem({ product }) {
  const cart = useCart();

  function removeItemFromCart() {
    let res = confirm(
      `Tem certeza que deseja retirar este item? "Pizza de ${product.title}"`
    );
    if (res) {
      cart.removeFromCart(product);
      toast.info("Removido do carrinho", { autoClose: 3000 });
    }
  }

  return (
    <>
      <div className="relative flex justify-start my-2 overflow-hidden border-2 border-black bg-amber-400 w-[90%]p-4 md:p-6">
        <Image
          src={product?.url}
          width={150}
          height={150}
          alt="Product Image"
          className="rounded-md"
        />

        <div className="overflow-hidden pl-2 w-full sm:w-2/3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center font-semibold w-60 justify-between md:w-[400px] text-[16px] underline">
              {product?.title}
            </div>
            <div className="font-bold text-lg">
              R${(product?.price).toFixed(2)}
            </div>
          </div>

          <div className="text-sm mt-2">
            {product?.description.substring(0, 150)}...
          </div>

          <button onClick={() => removeItemFromCart()} className=" text-white">
            <div className="absolute right-0 bottom-0 p-4 text-sm bg-red-500  hover:bg-red-700 duration-300 font-bold">
              REMOVER
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
export default CartItem;
