import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";
import { useUser } from "@/app/context/user";

function UserMenu({ user, onSignOut }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -100 },
  };

  return (
    <li className="relative px-3">
      {user && user.id ? (
        <button
          className="flex items-center gap-2 duration-300 cursor-pointer"
          onClick={toggleMenu}>
          <div className="whitespace-nowrap">
            Olá, {user.name || user.email}
          </div>
          <BsChevronDown />
        </button>
      ) : (
        <div className="flex items-center justify-center">
          <Link href="/sign-up">
            <div className="flex items-center ease-in-out duration-500 cursor-pointer text-sm bg-white h-10 my-2 px-4 border-2 border-white hover:border-black hover:bg-transparent rounded-lg font-bold">
              Criar Conta
            </div>
          </Link>
          <Link href="/auth">
            <div className="flex items-center hover:underline duration-100 cursor-pointer text-sm mx-4 font-semibold transform hover:scale-115 transition-transform">
              Login
            </div>
          </Link>
        </div>
      )}
      <motion.div
        initial="hidden"
        animate={isMenuOpen ? "visible" : "hidden"}
        exit="exit"
        variants={dropdownVariants}
        id="AuthDropdown"
        className={`${
          isMenuOpen ? "visible" : "hidden"
        } placeholder:first-letter absolute bg-amber-400 overflow-hidden min-w-52 rounded-lg border border-black text-gray-800 duration-1000 z-40 top-5 left-0 mt-3 shadow-lg`}>
        <div className="flex items-center justify-start gap-1 p-3 bg-amber-400">
          <Image
            className="rounded-full"
            alt="foto-perfil"
            width={50}
            height={50}
            src={user?.picture || "https://picsum.photos/200"}
          />
          <div className="font-bold text-xs">{user?.name || user?.email}</div>
        </div>
        <div className="border-b border-black" />
        <ul className="bg-amber-400">
          <li className="text-xs py-2 px-4 w-full hover:underline text-gray-800 hover:text-amber-500 cursor-pointer">
            <Link href="/orders">Pedidos</Link>
          </li>
          <li
            className="text-xs py-2 px-4 w-full hover:underline text-gray-800 hover:text-amber-500 cursor-pointer"
            onClick={() => {
              onSignOut();
              setIsMenuOpen(false);
            }}>
            Sair da conta
          </li>
        </ul>
      </motion.div>
    </li>
  );
}

export default UserMenu;
