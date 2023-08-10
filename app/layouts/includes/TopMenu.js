"use client";

import Image from "next/image";
import Link from "next/link";

import { BsChevronDown } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

function TopMenu() {
  return (
    <div id="TopMenu" className="border-b">
      <div className="flex items-center justify-between w-full mx-auto max-w-[1200px]">
        <ul
          id="TopMenuLeft"
          className="flex items-center text-xs text-gray-800 px-2 h-8">
          <li className="relative px-3">
            <Link
              href="/auth"
              className="flex items-center gap-2 hover:underline  w-5
            ease-in duration-500
            cursor-pointer mr-4">
              <div>Login</div>
              <div>
                <BsChevronDown className="translate-x-[-50%] w-2" />
              </div>
            </Link>
            <div
              id="AuthDropdown"
              className={`hidden placeholder:first-letterhidden absolute bg-white w-52 text-gray-800 z-40 top-5 left-0 border shadow-lg`}>
              <div className="flex items-center justify-start gap-1 p-3">
                <Image width={50} height={50} src="https://picsum.photos/200" />
                <div className="font-bold text-xs">Suefleids Soprano</div>
              </div>

              <div className="border-b" />
              <ul className="bg-white">
                <li className="text-xs py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-700 cursor-pointer">
                  <Link href="/orders">My orders</Link>
                </li>
                <li className="text-xs py-2 px-4 w-full hover:underline text-blue-500 hover:text-blue-700 cursor-pointer">
                  <Link href="/orders">Sign out</Link>
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
            <Image width={32} height={32} src="/images/uk.png" />
            Ship to
          </li>
          <li className="px-3 hover:underline cursor-pointer">
            <div className="relative">
              <AiOutlineShoppingCart size={22} />
              <div className="rounded-full absolute text-[10px] -top-[2px] -right-[5px] bg-red-500 w-[14px] h-[14px] text-white">
                <div className="flex items-center justify-center -mt-[1px]">
                  3
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default TopMenu;
