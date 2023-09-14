"use client";
import { FaPizzaSlice } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { SiIfood } from "react-icons/si";
import { BsFacebook } from "react-icons/bs";
import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <div
        id="Footer"
        className="md:h-[40rem] bg-black px-2 py-20 w-full flex flex-col justify-center items-center">
        <div className="max-w-[1500px]  flex sm:flex-row flex-col justify-start sm:justify-center md:justify-around items-center text-center md:items-start md:text-start ">
          <div className="flex flex-col items-center w-4/5 sm:w-1/3 justify-center">
            <Link href="/">
              <div className="text-yellow-50 items-center flex font-extrabold text-2xl mb-3">
                <FaPizzaSlice
                  size={22}
                  className="mr-2 scale-x-[-1] text-amber-400"
                />{" "}
                TOTALPIZZA
              </div>
            </Link>

            <p className="text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
              diam vitae velit bibendum elementum.
            </p>
            <div className="flex mt-5 gap-3 relative">
              <a href="https://instagram.com">
                <div className="rounded-full bg-white p-1 hover:bg-amber-400 hover:translate-y-[-0.5rem] duration-300 ">
                  <AiFillInstagram size={22} className="" />
                </div>
              </a>
              <a href="https://ifood.com">
                <div className="rounded-full bg-white p-1 hover:bg-amber-400 hover:translate-y-[-0.5rem] duration-300">
                  <SiIfood size={22} className="" />
                </div>
              </a>
              <a href="https://facebook.com">
                <div className="rounded-full bg-white p-1 hover:bg-amber-400 hover:translate-y-[-0.5rem] duration-300">
                  <BsFacebook size={22} className="" />
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-center mt-4 sm:mt-0">
            <div className="text-white text-2xl font-extrabold mb-2">
              Nos siga no instagram!
            </div>
            <a
              href="https://instagram.com"
              className="grid grid-cols-2 gap-1 md:gap-2 ">
              <div className="w-[130px] h-[130px] sm:w-[160px] sm:h-[160px] overflow-hidden">
                <Image
                  src="/images/sobre1.webp"
                  height={160}
                  width={160}
                  className="hover:scale-125 transition duration-500 cursor-pointer"
                />
              </div>
              <div className="w-[130px] h-[130px]  sm:w-[160px] sm:h-[160px]] overflow-hidden">
                <Image
                  src="/images/sobre4.webp"
                  height={160}
                  width={160}
                  className="hover:scale-125 transition duration-500 cursor-pointer"
                />
              </div>
              <div className="w-[130px] h-[130px]   sm:w-[160px] sm:h-[160px]overflow-hidden">
                <Image
                  src="/images/sobre4.avif"
                  height={160}
                  width={160}
                  className="hover:scale-125 transition duration-500 cursor-pointer"
                />
              </div>
              <di className=" sm:w-[160px] sm:h-[160px] w-[130px] h-[130px] overflow-hidden">
                <Image
                  src="/images/sobre3.jpeg"
                  height={160}
                  width={160}
                  className="hover:scale-125 transition duration-500 cursor-pointer"
                />
              </di>
            </a>
          </div>
        </div>
        <div className="m-auto border-t border-gray-800 w-auto md:w-[50rem] botton-2 text-center mt-20 text-white text-lg p-3">
          © Criado por Rômulo Viana.
        </div>
      </div>
    </>
  );
}
