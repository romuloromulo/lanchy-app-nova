"use client";
import { useCart } from "../context/cart";
import { toast } from "react-toastify";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function CartItem({ product }) {
  const [quantity, setQuantity] = useState(1);

  const cart = useCart();

  function removeItemFromCart() {
    let res = confirm(
      `Tem certeza que deseja retirar este item? "Pizza de ${product.title}"`
    );
    if (res) {
      cart.removeFromCart(product);
      toast.info("Removido do carrinho", { autoClose: 1500 });
    }
  }

  function handleQuantityChange(event) {
    setQuantity(parseInt(event.target.value, 10));
    addToCartHandler(quantity);
  }
  function addToCartHandler() {
    // Chame a função addToCart do contexto do carrinho com o produto e a quantidade selecionada
    cart.addToCart(product, quantity);
    toast.success("Adicionado ao carrinho", { autoClose: 1500 });
  }

  let options = [];
  for (let i = 1; i <= 20; i++) {
    options.push(
      <option key={i} value={i}>
        {i}
      </option>
    );
  }
  return (
    <div className="relative flex justify-start my-2 overflow-hidden border-2 border-black bg-amber-400 w-[90%]p-4 md:p-6">
      <Link href={`/product/${product.id}`}>
        <Image
          src={product?.url}
          width={150}
          height={150}
          alt="Product Image"
          className="rounded-md"
        />
      </Link>
      <div className="overflow-hidden pl-2 w-full sm:w-2/3">
        <div className="flex items-center justify-between w-full">
          <Link href={`/product/${product.id}`}>
            <div className="flex items-center font-semibold w-60 justify-between md:w-[400px] text-[16px] underline">
              {product?.title}
            </div>
          </Link>
          <div className="font-bold text-lg">
            R${(product?.price).toFixed(2)}
          </div>
        </div>

        <div className="text-sm mt-2">
          {product?.description.substring(0, 150)}...
        </div>

        <div className="flex items-center">
          <label for="pizzamount" className="font-semibold mr-2">
            Quantidade:
          </label>

          <select
            onChange={handleQuantityChange}
            name="pizzamount"
            id="pizzamount"
            value={quantity}
            className="bg-transparent border">
            {options}
          </select>
        </div>
        <button onClick={() => removeItemFromCart()} className=" text-white">
          <div className="absolute right-0 bottom-0 p-4 text-sm bg-red-500  hover:bg-red-700 duration-300 font-bold">
            REMOVER
          </div>
        </button>
      </div>
    </div>
  );
}
export default CartItem;
