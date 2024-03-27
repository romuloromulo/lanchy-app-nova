import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";

function MobileMenu({ isOpen, handleClose }) {
  return (
    <div
      className={
        isOpen
          ? "fixed left-0 top-0 w-screen sm:hidden h-2/3 bg-amber-400 border-2 border-black p-10 ease-in duration-500 z-50"
          : "fixed left-[-100%] top-0 p-10 ease-out duration-500 z-50"
      }>
      <div className="w-full flex items-center justify-between">
        <div onClick={handleClose} className="cursor-pointer">
          <AiOutlineClose size={25} className="top-1 left-1" />
        </div>
      </div>
      <div className="ml-4 w-full mt-5 flex justify-center items-center z-50">
        <ul className="flex gap-8 flex-col font-extrabold text-2xl text-black z-10">
          <li
            onClick={handleClose}
            className="hover:underline hover:text-white ease-in duration-300">
            <Link href="/">Início</Link>
          </li>
          <li
            onClick={handleClose}
            className="hover:underline hover:text-white ease-in duration-300">
            <Link href="/menu">Menu</Link>
          </li>
          <li
            onClick={handleClose}
            className="hover:underline hover:text-white ease-in duration-300">
            <Link href="/contato">Contato</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MobileMenu;
