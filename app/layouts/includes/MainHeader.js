"use client";

import { debounce } from "debounce";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/context/cart";
import { AiOutlineSearch } from "react-icons/ai";
import { BiLoaderCircle } from "react-icons/bi";
import { FaPizzaSlice } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import ClientOnly from "@/app/components/ClientOnly";

export default function MainHeader() {
  const cart = useCart();
  const [items, setItems] = useState([]);
  const [isSearching, setIsSearching] = useState(null);

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
      <div id="MainHeader">
        <nav className="flex items-center justify-between w-full mx-auto max-w-[80rem] marker:$px-5 px-24 py-5 mb-5 mt-4">
          <div id="MenuLeft" className="flex items-center">
            <div className="flex lg:justify-start justify-between gap-10 max-w-[1150px] w-full mx-auto">
              <Link href="/">
                <div className="text-yellow-50 tems-center justify-center flex font-extrabold text-2xl">
                  <FaPizzaSlice
                    size={22}
                    className="mr-2 scale-x-[-1] text-amber-400"
                  />{" "}
                  TOTALPIZZA
                </div>
              </Link>

              <div className="relative">
                <div className="flex items-center justify-center">
                  <div className="relative flex items-center border-2 rounded-lg border-gray-900 w-full px-2 h-8 bg-inherit">
                    <button className="flex items-center mr-1">
                      <AiOutlineSearch size={22} />
                    </button>

                    <input
                      className="placeholder-red-200 text-sm    pl-3focus:outline-none w-full h-full bg-inherit"
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
                      <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
                        {items.map((item) => (
                          <div className="p-1" key={item.id}>
                            <Link
                              href={`/product/${item.id}`}
                              className="flex items-center justify-between w-full cursor-pointer hover:bg-gray-200 p-1 px-2">
                              <div className="flex items-center">
                                <img
                                  className="rounded-md"
                                  width="40"
                                  src={item?.url + "/40"}
                                />
                                <div className="truncate ml-2">
                                  {item?.title}
                                </div>
                              </div>

                              <div className="truncate">
                                R${(item?.price / 100).toFixed(2)}
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
          <div id="MenuRight" className="flex items-center">
            <ul className="flex gap-8 font-extrabold text-lg text-red-50 z-10">
              <li className="hover:text-gray-800">
                <Link href="/">Início</Link>
              </li>
              <li className="hover:text-gray-800">
                <Link href="/">Menu</Link>
              </li>
              <li className="hover:text-gray-800">
                <Link href="/">Contato</Link>
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
        </nav>
      </div>
    </>
  );
}
