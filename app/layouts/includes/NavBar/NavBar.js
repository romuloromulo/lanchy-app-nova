import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/app/context/cart";
import { FaPizzaSlice } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import ClientOnly from "@/app/components/ClientOnly";
import SearchField from "./SearchField";
import SearchResults from "./SearchResults";
import MobileMenu from "./MobileMenu";
import CartModal from "@/app/components/Cart/CartModal";

export default function NavBar() {
  const cart = useCart();
  const [items, setItems] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [openNav, setOpenNav] = useState(false);
  const [openCart, setOpenCart] = useState(false);
  console.log("OPEN CART", openCart);
  const toggleNav = () => {
    setOpenNav(!openNav);
  };

  const toggleCart = () => {
    setOpenCart(!openCart);
  };

  const handleSearch = async (value) => {
    if (value === "") {
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
  };

  return (
    <>
      <div id="NavBar">
        <nav className="flex items-center justify-between w-full mx-auto max-w-[80rem] ls:px-5 md:px-5 lg:px-16 py-5 px-5 mb-5 mt-4">
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
                <SearchField handleSearch={handleSearch} />
                {isSearching && items.length > 0 && (
                  <SearchResults items={items} />
                )}
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
                    <div
                      onClick={() => {
                        toggleCart();
                      }}>
                      <CartModal isOpen={openCart} />
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
                    </div>
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
            {/* <ClientOnly>
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
            </ClientOnly> */}
            <div
              id="MenuMobile"
              onClick={toggleNav}
              className="sm:hidden cursor-pointer md:pl-24">
              <AiOutlineMenu size={25} />
            </div>
            <MobileMenu isOpen={openNav} handleClose={toggleNav} />
          </div>
        </nav>
      </div>
    </>
  );
}
