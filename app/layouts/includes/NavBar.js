"use client";

import { debounce } from "debounce";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/context/cart";
import { AiOutlineSearch, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ClientOnly from "@/app/components/ClientOnly";

export default function NavBar() {
  const cart = useCart();
  const [items, setItems] = useState([]);
  const [isSearching, setIsSearching] = useState(null);
  const [openNav, setOpenNav] = useState(false);

  function handleNav() {
    setOpenNav((prev) => !prev);
  }

  const handleSearchName = debounce(async (event) => {
    const value = event.target.value;
    if (value == "") {
      setItems([]);
      return;
    }

    setIsSearching(true);

    try {
      const response = await fetch(`/api/products/search-by-name/${value}`);
      const result = await response.json();

      if (result) {
        setItems(result);
        setIsSearching(false);
      }
    } catch (error) {
      alert(error);
    }
  }, 500);
  return (
    <>
      <div id="NavBar">
        <nav className="  flex items-center justify-between w-full mx-auto max-w-[80rem] ls:px-5 md:px-5 lg:px-16 py-5 px-5 mb-5 mt-4">
          <div id="MenuLeft" className="flex items-center">
            <div className="lg:flex lg:flex-row flex flex-col items-start justify-start lg:gap-5 max-w-[1150px] w-full mx-auto">
              <Link href="/">
                <div className="text-black lg:items-center items-start justify-start lg:justify-center flex font-extrabold text-lg lg:text-2xl">
                  <FaPizzaSlice
                    size={22}
                    className="mr-2 lg:scale-x-[-1] text-amber-400"
                  />{" "}
                  TOTALPIZZA
                </div>
              </Link>

              <div className="relative sm:block hidden">
                <div className="flex items-center justify-center">
                  <div className="relative flex items-center border-2 rounded-lg border-gray-900 w-full px-2 h-8 bg-inherit">
                    <button className="flex items-center mr-1">
                      <AiOutlineSearch size={22} />
                    </button>

                    <input
                      className="placeholder-red-200 text-sm    pl-3focus:outline-none w-full h-full bg-inherit outline-none"
                      placeholder="Busque Pizza"
                      type="text"
                      onChange={handleSearchName}
                    />
                    {isSearching ? (
                      <BiLoaderCircle
                        className="mr-2 animation-spin"
                        size={22}
                      />
                    ) : null}

                    {items.length > 0 ? (
                      <div className="absolute bg-amber-400  h-auto w-[20rem] z-20 left-0 top-10 border-2 border-black p-1">
                        {items.map((item) => (
                          <div className="p-1" key={item.id}>
                            <Link
                              href={`/product/${item.id}`}
                              className="flex items-center justify-between w-full cursor-pointer hover:bg-gray-200 p-1 px-2">
                              <div className="flex items-center">
                                <img
                                  className="rounded-md"
                                  width="40px"
                                  height="40px"
                                  src={item?.url}
                                />
                                <div className="truncate ml-2 w-full">
                                  {item?.title}
                                </div>
                              </div>

                              <div className="truncate">
                                R${(item?.price).toFixed(2)}
                              </div>
                            </Link>
                          </div>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <button className="flex items-center bg-amber-400 hover:bg-amber-500 rounded-lg text-sm font-semibold text-white p-[11px] ml-2 px-8 h-8">
                    Buscar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div id="MenuRight" className="sm:flex hidden items-center">
            <ul className="flex gap-2  sm:gap-5 md:gap-8 font-extrabold text-lg text-red-50 z-10">
              <li className="hover:text-gray-800">
                <Link href="/">Início</Link>
              </li>
              <li className="hover:text-gray-800">
                <Link href="/menu">Menu</Link>
              </li>
              <li className="hover:text-gray-800">
                <Link href="/contato">Contato</Link>
              </li>

              <ClientOnly>
                <li className="px-3 hover:underline cursor-pointer">
                  <div className="relative">
                    <Link href="/cart">
                      <AiOutlineShoppingCart size={30} />
                      {cart.cartCount() > 0 ? (
                        <div className="rounded-full absolute text-[10px] -top-[5px] pt-[2px]  -right-[5px] bg-amber-400 w-[20px] h-[18px] text-gray-800">
                          <div className="flex items-center justify-center -translate-y-2">
                            {cart.cartCount()}
                          </div>
                        </div>
                      ) : (
                        <div></div>
                      )}
                    </Link>
                  </div>
                </li>
              </ClientOnly>
            </ul>
          </div>
          <div className="sm:hidden  flex items-center gap-8">
            <ClientOnly>
              <div className="relative cursor-pointer">
                <Link href="/cart">
                  <AiOutlineShoppingCart size={30} />
                  {cart.cartCount() > 0 ? (
                    <div className="rounded-full absolute text-[10px] -top-[5px] pt-[2px]  bg-amber-500 w-[20px] h-[18px] text-gray-800 font-bold mr-8 ">
                      <div className="flex items-center justify-center">
                        {cart.cartCount()}
                      </div>
                    </div>
                  ) : (
                    <div></div>
                  )}
                </Link>
              </div>
            </ClientOnly>
            <div
              id="MenuMobile"
              onClick={handleNav}
              className="sm:hidden cursor-pointer md:pl-24">
              <AiOutlineMenu size={25} />
            </div>
            <div
              className={
                openNav
                  ? "fixed left-0 top-0 w-screen sm:hidden h-2/3 bg-amber-400 border-2 border-black p-10 ease-in duration-500 z-20"
                  : "fixed left-[-100%] top-0 p-10 ease-out duration-500 z-20"
              }>
              <div className="w-full flex items-center justify-between">
                <div>
                  <ClientOnly>
                    <div className="relative">
                      <Link href="/cart">
                        <AiOutlineShoppingCart size={30} />
                        {cart.cartCount() > 0 ? (
                          <div className="rounded-full absolute text-[10px] -top-[5px] pt-[2px]  -right-[5px] bg-red-500 w-[20px] h-[18px] text-gray-800 font-bold">
                            <div className="flex items-center justify-center">
                              {cart.cartCount()}
                            </div>
                          </div>
                        ) : (
                          <div></div>
                        )}
                      </Link>
                    </div>
                  </ClientOnly>
                </div>
                <div onClick={handleNav} className="cursor-pointer">
                  <AiOutlineClose size={25} className="top-1 left-1" />
                </div>
              </div>
              <div className=" ml-4 w-full mt-5 flex justify-center items-center z-50">
                <ul className="flex gap-8 flex-col font-extrabold text-2xl text-black z-10">
                  <li
                    onClick={handleNav}
                    className=" hover:underline hover:text-white ease-in duration-300  ">
                    <Link href="/">Início</Link>
                  </li>
                  <li
                    onClick={handleNav}
                    className=" hover:underline hover:text-white ease-in duration-300 ">
                    <Link href="/menu">Menu</Link>
                  </li>
                  <li
                    onClick={handleNav}
                    className=" hover:underline hover:text-white ease-in duration-300 ">
                    <Link href="/contato">Contato</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
