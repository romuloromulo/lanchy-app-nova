"use client";

import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/app/context/user";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { useCart } from "@/app/context/cart";

function TopMenu() {
  const [isMenu, setIsMenu] = useState(false);

  const user = useUser();

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
    cursor-pointer mr-4 lg:px-10">
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
            <a
              href="https://www.ifood.com.br/"
              target={"_blank"}
              rel={"noreferrer"}>
              <Image
                className="grayscale hover:grayscale-0 duration-300"
                src="/images/ifood-43.png"
                alt="ifood"
                width={52}
                height={52}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopMenu;
