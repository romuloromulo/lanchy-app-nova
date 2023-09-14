import Image from "next/image";
import Link from "next/link";
import React from "react";
import scrollSmoothTo from "@/app/hooks/scrollSmoothTo";

function Hero() {
  return (
    <section
      id="Hero"
      className="max-w-[1200px] min-h-screen lg:mt-0 mt-16 mx-auto md:px-8 block overflow-hidden lg:overflow-visible">
      <div className="lg:flex lg:flex-row flex-col flex justify-between items-center max-h-screen h-auto lg:min-h-screen">
        <div
          id="Description"
          className="flex flex-col text-center lg:text-start gap-5 lg:gap-0  w-full  p-2 lg:w-3/5 ">
          <div className="text-red-50 tracking-wider text-4xl lg:text-7xl font-extrabold justify-center items-center z-10">
            O MELHOR LUGAR PARA COMER PIZZA.
          </div>
          <p className="text-red-50">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
            diam vitae velit bibendum elementum eget non vivamus volutpat odio
            cras vestibulum purus aliquam
          </p>
          <div className="flex items-center justify-center lg:items-start lg:justify-start gap-2  sm:gap-4">
            <Link href="/menu">
              <div className="sm:w-44 sm:h-20 w-22 h-14 bg-amber-400 flex justify-center items-center p-2 text-black font-bold lg:text-lg text-base  cursor-pointer hover:bg-amber-500 mt-5">
                PEDIR ONLINE
              </div>
            </Link>
            <Link href="#Reservas " scroll={false}>
              <div
                onClick={() => scrollSmoothTo("Reservas")}
                className="sm:w-44  sm:h-20 w-22 h-14 bg-black flex justify-center items-center p-2 text-amber-400  font-bold lg:text-lg text-base cursor-pointer hover:bg-gray-800 mt-5">
                RESERVAS
              </div>
            </Link>
          </div>
        </div>
        <div
          id="Images"
          className="relative  h-auto flex items-center justify-center w-[30rem] lg:w-full mt-5">
          <Image
            src="/images/PizzaGrande.png"
            width={900}
            height={900}
            alt="Pizza"
            layout="responsive"
            className="lg:translate-x-[190px] lg:scale-x-[-1] lg:w-[900px] lg:h-[900px] md:w-[%50] md:h-[%50]"
          />
          <Image
            src="/images/peperonislice.png"
            width={100}
            height={100}
            alt="Peperoni"
            className="absolute hidden  lg:block top-[10rem] right-[45rem]"
          />
          <Image
            src="/images/peperonislice.png"
            width={100}
            height={100}
            alt="Peperoni"
            className="absolute hidden   lg:block right-[18rem]"
          />
          <Image
            src="/images/manjericao.png"
            width={200}
            height={200}
            alt="Peperoni"
            className="absolute  hidden lg:block  top-[25rem] left-[3rem] rotate-45"
          />
          <Image
            src="/images/spinach.png"
            width={200}
            height={200}
            alt="Peperoni"
            className="absolute hidden  lg:block top-[-10rem] left-[18rem] rotate-45"
          />
          <Image
            src="/images/tomato2.png"
            width={200}
            height={200}
            alt="Peperoni"
            className="absolute hidden lg:overflow-visible top-[1rem] right-[30rem] rotate-45"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
