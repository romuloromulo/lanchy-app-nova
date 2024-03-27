import Link from "next/link";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "framer-motion";

function MobileMenu({ isOpen, handleClose }) {
  return (
    <motion.div
      className={
        isOpen
          ? "fixed left-0 top-0 w-screen h-screen bg-black bg-opacity-50 flex flex-col justify-center items-center z-50"
          : "fixed left-[-100%] top-0 p-10 z-50"
      }
      initial={{ opacity: 0 }}
      animate={{ opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.3 }}>
      <div className="w-full flex justify-end absolute top-5 right-5">
        <div
          onClick={handleClose}
          className="cursor-pointer p-4 bg-amber-400 rounded-md">
          <AiOutlineClose size={25} />
        </div>
      </div>
      <div className="bg-amber-400 rounded-lg p-10">
        <div className="w-full mt-5 flex items-center">
          <ul className="flex flex-col font-extrabold text-2xl text-gray-800">
            <li
              onClick={handleClose}
              className="hover:underline hover:text-white ease-in duration-300 mb-4">
              <Link href="/">Início</Link>
            </li>
            <li
              onClick={handleClose}
              className="hover:underline hover:text-white ease-in duration-300 mb-4">
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
    </motion.div>
  );
}

export default MobileMenu;
