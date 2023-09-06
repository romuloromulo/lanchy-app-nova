import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";

function About() {
  return (
    <section
      id="About"
      className="h-screen min-h-screen flex lg:flex-row items-center justify-center  bg-white overflow-hidden px-8">
      <div className="h-full max-w-[1500px] flex lg:flex-row flex-col justify-center items-center">
        <div className="relative max-h-[45rem] flex lg:w-[60%] w-full h-full">
          <div
            id="ImagePizza1"
            className="rounded-full ml-5 absolute p-4 right-20 bottom-4 bg-amber-400 h-[200px] w-[200px] lg:h-[250px] lg:w-[250px]">
            <Image
              src="/images/sobre1.webp"
              width={250}
              height={250}
              layout="responsive"
              className="rounded-full lg:h-full lg:w-full h-[150px] w-[150px] "
            />
          </div>
          <div
            id="ImagePizza2"
            className=" rounded-full ml-5 p-4 top-[30px] absolute botton-3 left-[100px] bg-amber-400">
            <Image
              src="/images/sobre.webp"
              width={230}
              height={230}
              className="rounded-full"
            />
          </div>
          <div
            id="ImagePizza2"
            className=" rounded-full ml-5 p-4 botton-[50px] absolute top-[340px] bg-amber-400">
            <Image
              src="/images/sobre3.jpeg"
              width={280}
              height={280}
              className="rounded-full lg:w-full lg:h-full"
            />
          </div>
          <div
            id="ImagePizza2"
            className=" rounded-full ml-5  p-4 right-[33px] top-[40px] bg-amber-400 absolute">
            <Image
              src="/images/sobre4.webp"
              width={265}
              height={265}
              className="rounded-full overflow-hidden"
            />
          </div>
        </div>
        <div className="lg:w-[45%] w-full lg:text-start flex flex-col justify-center  h-full z-10">
          <div>
            <h1 className="text-6xl lg:text-start text-center font-extrabold text-black mb-4 ">
              Sobre
              <br /> TOTALPIZZA
            </h1>
            <p className="w-4/5 text-lg mb-6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim
              bibendum sed et aliquet aliquet risus tempor semper odio egestas
              id pulvinar consectetur elit tortor.
            </p>
          </div>
          <div>
            <ul>
              <li className="flex ">
                <div className="bg-amber-400 p-1 mb-3 mr-3">
                  <MdEmail size={22} className="text-black" />
                </div>
                cidade@totalpizza.com
              </li>
              <li className="flex">
                <div className="bg-amber-400 p-1 mb-3  mr-3">
                  <BsFillTelephoneFill size={22} className="text-black" />
                </div>{" "}
                (98)982122264
              </li>
              <li className="flex">
                <div className="bg-amber-400 p-1  mr-3">
                  <GiPositionMarker size={22} className="text-black" />
                </div>{" "}
                Av. Holandeses, N. 28
              </li>
            </ul>
            <div className="w-40 h-16 bg-amber-400 flex justify-center items-center p-2 text-black font-bold text-lg cursor-pointer hover:bg-amber-500 mt-8">
              PEDIR ONLINE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
