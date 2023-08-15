"use client";

import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/app/context/user";
import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useState } from "react";
import { useCart } from "@/app/context/cart";

function TopMenu() {
  const [isMenu, setIsMenu] = useState(false);

  const user = useUser();
  const cart = useCart();

  function isLoggedIn() {
    if (user && user?.id) {
      return (
        <button
          className="flex items-center gap-2 hover:underline cursor-pointer"
          onClick={() => (!isMenu ? setIsMenu(true) : setIsMenu(false))}>
          <div>Hi,{user.name}</div>
          <BsChevronDown />
        </button>
      );
    }

    return (
      <Link
        href="/auth"
        className="flex items-center gap-2 hover:underline  w-5
    ease-in duration-500
    cursor-pointer mr-4">
        <div>Login</div>
        {/* <div>
          {user && user?.id ? (
            <BsChevronDown className="translate-x-[-50%] w-2" />
          ) : null}
        </div> */}
      </Link>
    );
  }

  return (
    <div id="TopMenu" className="border-b">
      <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
        <ul
          id="TopMenuLeft"
          className="flex items-center text-xs text-gray-800 px-2 h-8">
          <li className="relative px-3">
            {isLoggedIn()}
            <div
              id="AuthDropdown"
              className={`${
                isMenu ? "visible" : "hidden"
              } placeholder:first-letterhidden absolute bg-white w-52 text-gray-800 z-40 top-5 left-0 border shadow-lg`}>
              <div className="flex items-center justify-start gap-1 p-3">
                <Image
                  alt="bandeira britanica"
                  width={50}
                  height={50}
                  src={user?.picture || "https://picsum.photos/200"}
                />
                <div className="font-bold text-xs">{user?.name}</div>
              </div>

              <div className="border-b" />
              <ul className="bg-white">
                <li className="text-xs py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-700 cursor-pointer">
                  <Link href="/orders">My orders</Link>
                </li>
                <li
                  className="text-xs py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-700 cursor-pointer"
                  onClick={() => {
                    user.signOut();
                    setIsMenu(false);
                  }}>
                  Sign out
                </li>
              </ul>
            </div>
          </li>
          <li className="px-3 hover:underline cursor-pointer">Daily Deals</li>
          <li className="px-3 hover:underline cursor-pointer">
            Help & Contact
          </li>
        </ul>

        <ul
          id="TopMenuRight"
          className="flex items-center text-xs text-gray-800 px-2 h-8">
          <li className="flex items-center gap-2 px-3 hover:underline cursor-pointer">
            <Image
              alt="bandeira britanica"
              width={32}
              height={32}
              src="/images/uk.png"
            />
            Ship to
          </li>
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
        </ul>
      </div>
    </div>
  );
}

export default TopMenu;
