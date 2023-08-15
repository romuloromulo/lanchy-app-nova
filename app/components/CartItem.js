"use client";
import { useCart } from "../context/cart";
import { toast } from "react-toastify";
import Image from "next/image";

function CartItem({ product }) {
  const cart = useCart();

  function removeItemFromCart() {
    let res = confirm(
      `Are you sure you want to remove this?"${product.title}"`
    );
    if (res) {
      cart.removeFromCart(product);
      toast.info("Removido do carrinho", { autoClose: 3000 });
    }
  }

  return (
    <>
      <div className="relative flex justify-start my-2 border w-[65%] p-6">
        <Image
          src={product?.url}
          width={150}
          height={150}
          alt="Product Image"
          className="rounded-md"
        />

        <div className="overflow-hidden pl-2 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center font-semibold justify-between w-[400px] text-[16px] underline">
              {product?.title}
            </div>
            <div className="font-bold text-lg">
              R${(product?.price / 100).toFixed(2)}
            </div>
          </div>

          <div className="font-semibold mt-2">NEW</div>

          <div className="text-sm mt-2">
            {product?.description.substring(0, 150)}...
          </div>

          <div className="absolute right-0 bottom-0 p-4 text-sm">
            <button
              onClick={() => removeItemFromCart()}
              className="underline text-blue-500">
              Remove
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartItem;
