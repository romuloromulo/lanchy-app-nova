import Image from "next/image";
import Link from "next/link";
import React from "react";
import scrollSmoothTo from "@/app/hooks/scrollSmoothTo";

function Hero() {
  return (
    <section
      id="Hero"
      className="max-w-[1500px] lg:mt-0 mt-16 mx-auto overflow-hidden lg:overflow-visible pb-8">
      <div className="lg:flex lg:flex-row flex-col flex  justify-center items-center lg:min-h-screen py-8">
        <div
          id="Description"
          className="flex flex-col text-center lg:text-start gap-5 lg:gap-0  w-full  p-2 lg:w-4/5    justify-center lg:translate-x-12  z-10">
          <div className="text-red-50 tracking-wider text-4xl lg:text-6xl font-extrabold justify-center items-center z-10">
            O MELHOR LUGAR PARA COMER PIZZA.
          </div>
          <p className="text-red-50">
            Lorem ipsum dolor sit amet consectetur adipiscing elit ugue quam
            diam vitae velit bibendum elementum eget non vivamus volutpat odio
            cras vestibulum purus aliquam
          </p>
          <div className="flex items-center justify-center lg:items-start lg:justify-start gap-5 sm:gap-4">
            <Link href="/menu">
              <div className="sm:w-44 sm:h-20 w-32 h-14 bg-amber-400 flex justify-center items-center p-2 text-black font-bold lg:text-lg text-base  cursor-pointer hover:bg-amber-500 mt-5 hover:translate-y-[-0.5rem] duration-300 ">
                PEDIR ONLINE
              </div>
            </Link>

            <div
              onClick={() => scrollSmoothTo("Reservas")}
              className="sm:w-44  sm:h-20 w-32 h-14 bg-black flex justify-center items-center p-2 text-amber-400  font-bold lg:text-lg text-base cursor-pointer hover:bg-transparent hover:border-2  hover:text-black hover:border-black mt-5 hover:translate-y-[-0.5rem] duration-300">
              RESERVAS
            </div>
          </div>
        </div>
        <div
          id="Images"
          className="relative h-auto flex items-center justify-center w-[26rem] lg:w-full mt-5">
          <Image
            src="/images/PizzaGrande.png"
            width={1000}
            height={1000}
            alt="Pizza"
            intrinsic
            className="lg:translate-x-[190px] lg:scale-x-[-1] md:w-[%50] md:h-[%50] "
          />
          <Image
            src="/images/peperonislice.png"
            width={100}
            height={100}
            alt="Peperoni"
            className="absolute hidden  lg:block top-[10rem] z-0 right-[45rem]"
          />
          <Image
            src="/images/peperonislice.png"
            width={100}
            height={100}
            alt="Peperoni"
            className="absolute  hidden lg:block  top-[29rem] z-0 left-[3rem] rotate-45"
          />
          <Image
            src="/images/manjericao.png"
            width={200}
            height={200}
            alt="Peperoni"
            className="absolute hidden lg:block  top-[15rem] z-0  right-[32rem]"
          />
          <Image
            src="/images/spinach.png"
            width={200}
            height={200}
            alt="Peperoni"
            className="absolute hidden  lg:block top-[-10rem] z-0 left-[18rem] rotate-45"
          />
          <Image
            src="/images/tomato2.png"
            width={200}
            height={200}
            alt="Peperoni"
            className="absolute hidden lg:block top-[1rem] z-0 right-[30rem] rotate-45"
          />
          <Image
            src="/images/tomato2.png"
            width={200}
            height={200}
            alt="Peperoni"
            className="absolute hidden lg:block top-[29rem]  z-0 right-[50rem] rotate-45"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
