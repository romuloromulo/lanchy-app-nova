import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section id="Hero" className="max-w-[1200px] mx-auto">
      <div className="flex justify-center items-center max-h-screen h-screen">
        <div id="Description" className="flex flex-col w-3/5 ">
          <div className="text-red-50 tracking-wider text-7xl font-extrabold justify-center items-center z-10">
            O MELHOR LUGAR PARA COMER PIZZA.
          </div>
          <p className="text-red-50">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
            diam vitae velit bibendum elementum eget non vivamus volutpat odio
            cras vestibulum purus aliquam
          </p>
          <div className="flex gap-4">
            <div className="w-40 h-16 bg-amber-400 flex justify-center items-center p-2 text-black font-bold text-lg cursor-pointer hover:bg-amber-500 mt-5">
              PEDIR ONLINE
            </div>
            <div className="w-40 h-16 bg-black flex justify-center items-center p-2 text-amber-400  font-bold text-lg cursor-pointer hover:bg-gray-800 mt-5">
              RESERVAS
            </div>
          </div>
        </div>
        <div id="Images" className="relative">
          <Image
            src="/images/PizzaGrande.png"
            className="translate-x-[190px] scale-x-[-1]"
            width={1000}
            height={1000}
            alt="Pizza"
          />
          <Image
            src="/images/peperonislice.png"
            width={100}
            height={100}
            alt="Peperoni"
            className="absolute top-[10rem] right-[45rem]"
          />
          <Image
            src="/images/peperonislice.png"
            width={100}
            height={100}
            alt="Peperoni"
            className="absolute  right-[18rem]"
          />
          <Image
            src="/images/manjericao.png"
            width={200}
            height={200}
            alt="Peperoni"
            className="absolute top-[25rem] left-[3rem] rotate-45"
          />
          <Image
            src="/images/spinach.png"
            width={200}
            height={200}
            alt="Peperoni"
            className="absolute top-[-10rem] left-[18rem] rotate-45"
          />
          <Image
            src="/images/tomato2.png"
            width={200}
            height={200}
            alt="Peperoni"
            className="absolute top-[1rem] right-[30rem] rotate-45"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
