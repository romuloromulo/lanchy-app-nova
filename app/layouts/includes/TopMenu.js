"use client";

import Image from "next/image";
import Link from "next/link";
import { useUser } from "@/app/context/user";
import { BsChevronDown } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";

function TopMenu() {
  const [isMenu, setIsMenu] = useState(false);

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3 }, // Adicione a transição para a entrada e saída
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 }, // Adicione a transição para a entrada e saída
    },
    exit: {
      opacity: 0,
      y: -100,
      transition: { duration: 0.3 }, // Defina a transição para a saída
    },
  };

  const user = useUser();

  function isLoggedIn() {
    if (user && user?.id) {
      return (
        <button
          className="flex items-center gap-2 duration-300  cursor-pointer"
          onClick={() => setIsMenu(!isMenu)}>
          <div className=" whitespace-nowrap ">Olá, {user.name}</div>
          <BsChevronDown />
        </button>
      );
    }

    return (
      <div className="flex items-center justify-center">
        <Link href="sign-up">
          <div
            className="flex items-center  
        ease-in-out duration-500 
        cursor-pointer text-sm bg-white h-10 my-2 px-4 border-2 border-white hover:border-black hover:bg-transparent rounded-lg font-bold ">
            Criar Conta
          </div>
        </Link>
        <Link href="/auth">
          <div
            className="flex items-center  hover:underline   
      duration-100 
        cursor-pointer text-sm mx-4 font-semibold transform hover:scale-115 transition-transform">
            Login
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div id="TopMenu" className=" bg-amber-400 ">
      <div className="flex items-center justify-between w-full mx-auto h-14 max-w-[80rem] px-5">
        <ul
          id="TopMenuLeft"
          className="flex items-center md:text-lg text-sm font-bold text-gray-800 sm:px-2 h-8  ">
          <li className="md:pr-5 pr-2 text-sm md:text-lg flex justify-center items-center whitespace-nowrap">
            PLATAFORMAS ONLINE:
            <a
              href="https://www.ifood.com.br/"
              target={"_blank"}
              rel={"noreferrer"}
              className="ml-2">
              <Image
                className="grayscale hover:grayscale-0 duration-300"
                src="/images/ifood-43.png"
                alt="ifood"
                width={52}
                height={52}
                loading="lazy"
              />
            </a>
          </li>
        </ul>
        <ul
          id="TopMenuRight"
          className="flex items-center  text-gray-800 px-2 h-8  translate-x-[-3rem] z-20">
          <li className="relative px-3 ">
            {isLoggedIn()}

            <motion.div
              initial="hidden"
              animate={isMenu ? "visible" : "hidden"}
              exit="exit" // Adicione a animação de saída aqui
              variants={dropdownVariants}
              id="AuthDropdown"
              className={`${
                isMenu ? "visible" : "hidden"
              } placeholder:first-letter absolute bg-amber-400 overflow-hidden w-52 rounded-lg  border border-black text-gray-800  duration-1000 z-40 top-5 left-0 mt-3  shadow-lg`}>
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
                  className="text-xs py-2 px-4 w-full hover:underline text-gray-800 hover:text-amber-500 cursor-pointer"
                  onClick={() => {
                    user.signOut();
                    setIsMenu(false);
                  }}>
                  Sair da conta
                </li>
              </ul>
            </motion.div>
          </li>
          {/* <li className="px-3 hover:underline cursor-pointer">Daily Deals</li>
          <li className="px-3 hover:underline cursor-pointer">
            Help & Contact
          </li> */}
        </ul>
      </div>
    </div>
  );
}

export default TopMenu;
