"use client";

import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/app/context/user";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { useCart } from "@/app/context/cart";
import ClientOnly from "@/app/components/ClientOnly";

function TopMenu() {
  const [isMenu, setIsMenu] = useState(false);

  const user = useUser();
  const cart = useCart();
  console.log(isMenu);

  function isLoggedIn() {
    if (user && user?.id) {
      return (
        <button
          className="flex items-center gap-2 duration-300  cursor-pointer"
          onClick={() => (!isMenu ? setIsMenu(true) : setIsMenu(false))}>
          <div>Olá, {user.name}</div>
          <BsChevronDown />
        </button>
      );
    }

    return (
      <Link
        href="/auth"
        className="flex items-center gap-2 hover:underline   w-5
    ease-in-out duration-500 
    cursor-pointer mr-4">
        <div>Login</div>
        <div>
          {user && user?.id ? (
            <BsChevronDown className="translate-x-[-50%] w-2" />
          ) : null}
        </div>
      </Link>
    );
  }

  return (
    <div id="TopMenu" className=" bg-amber-400 ">
      <div className="flex items-center justify-between w-full mx-auto h-14 max-w-[80rem] px-5">
        <ul
          id="TopMenuLeft"
          className="flex items-center md:text-lg  font-bold text-gray-800 px-2 h-8 hover:text-yellow-50 ease-in">
          <li className="relative px-3">
            {isLoggedIn()}

            <div
              id="AuthDropdown"
              className={`${
                isMenu ? "visible" : "hidden"
              } placeholder:first-letter absolute bg-amber-400 w-52 text-gray-800  duration-1000 z-40 top-5 left-0 border mt-3 border-black shadow-lg`}>
              <div className="flex items-center justify-start gap-1 p-3 bg-amber-400">
                <Image
                  className="rounded-full"
                  alt="foto-perfil"
                  width={50}
                  height={50}
                  src={user?.picture || "https://picsum.photos/200"}
                />
                <div className="font-bold text-xs">{user?.name}</div>
              </div>

              <div className="border-b border-black" />
              <ul className="bg-amber-400">
                <li className="text-xs py-2 px-4 w-full hover:underline text-gray-800 hover:text-amber-500 cursor-pointer">
                  <Link href="/orders">Pedidos</Link>
                </li>
                <li
                  className="text-xs py-2 px-4 w-full hover:underline text-gray-800 hover:text-amber-500cursor-pointer"
                  onClick={() => {
                    user.signOut();
                    setIsMenu(false);
                  }}>
                  Sair da conta
                </li>
              </ul>
            </div>
          </li>
          {/* <li className="px-3 hover:underline cursor-pointer">Daily Deals</li>
          <li className="px-3 hover:underline cursor-pointer">
            Help & Contact
          </li> */}
        </ul>

        <ul
          id="TopMenuRight"
          className="flex items-center md:text-lg text-sm font-bold text-gray-800 px-2 h-8 ">
          <li className="md:pr-5 pr-2 text-sm md:text-lg">
            PLATAFORMAS ONLINE:
          </li>
          <li>
            <a href="ifood.com.br" target={"_blank"} rel={"noreferrer"}>
              <Image
                className="grayscale hover:grayscale-0 duration-300"
                src="/images/ifood-43.png"
                alt="ifood"
                width={52}
                height={52}
              />
            </a>
          </li>
          {/* <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
            <Image
              alt="bandeira britanica"
              width={32}
              height={32}
              src="/images/uk.png"
            />
            Ship to
          </li> */}
          {/* 
          <ClientOnly>
            <li className="px-3 hover:underline cursor-pointer">
              <div className="relative">
                <Link href="/cart">
                  <AiOutlineShoppingCart size={22} />
                  {cart.cartCount() > 0 ? (
                    <div className="rounded-full absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] text-white">
                      <div className="flex items-center justify-center -mt-[1px]">
                        {cart.cartCount()}
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </Link>
              </div>
            </li>
          </ClientOnly> */}
        </ul>
      </div>
    </div>
  );
}

export default TopMenu;
