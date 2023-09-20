"use client";

// import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { FaPizzaSlice } from "react-icons/fa";

export default function Loading() {
  return (
    <>
      <div
        className="
                fixed 
                bg-black 
                bg-opacity-70 
                inset-0 
                w-full 
                z-40 
                flex 
                items-center 
                justify-center 
                h-[100vh]
                overflow-hidden
            ">
        <div className="p-3 rounded-md">
          <FaPizzaSlice size={100} className="text-amber-400 animate-spin" />
          <div className="text-center pt-5 text-xl font-bold text-red-500">
            Carregando...
          </div>
        </div>
      </div>
    </>
  );
}
