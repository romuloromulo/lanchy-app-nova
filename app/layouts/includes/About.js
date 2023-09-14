import React from "react";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";

function About() {
  return (
    <section
      id="About"
      className=" lg:px-0 min-h-screen flex lg:flex-row items-center justify-center  bg-white overflow-hidden px-8">
      <div className="h-full max-w-[1200px] flex lg:flex-row flex-col justify-center items-center sm:px-8">
        <div className="mt-10 lg:mt-0 gap-2 grid grid-cols-2 w-full  h-full bg-amber-400 rounded-lg p-2 md:mr-10">
          <div className="overflow-hidden rounded-tl-lg">
            <Image
              src="/images/sobre1.webp"
              width={300}
              height={300}
              className="hover:scale-125 duration-300 rounded-tl-lg"
            />
          </div>
          <div className="overflow-hidden rounded-tr-lg">
            <Image
              src="/images/sobre.webp"
              width={300}
              height={300}
              className="hover:scale-125 duration-300 rounded-tr-lg"
            />{" "}
          </div>
          <div className="overflow-hidden rounded-bl-lg">
            <Image
              src="/images/sobre3.jpeg"
              width={300}
              height={300}
              className="hover:scale-125 duration-300 rounded-bl-lg"
            />
          </div>
          <div className="overflow-hidden rounded-br-lg">
            <Image
              src="/images/sobre4.webp"
              width={300}
              height={300}
              className="hover:scale-125 duration-300 rounded-br-lg"
            />
          </div>
        </div>
        <div className="lg:w-[45%]  w-[90%] lg:text-start flex flex-col justify-center  h-full z-10 mt-5 p-5">
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-start text-center font-extrabold text-black mb-4 ">
              Sobre
              <br /> TOTALPIZZA
            </h1>
            <p className="md:w-4/5 text-center sm:text-start sm:text-lg text-base mb-6">
              Lorem ipsum dolor sit amet consectetur adipiscing elit enim
              bibendum sed et aliquet aliquet risus tempor semper odio egestas
              id pulvinar consectetur elit tortor.
            </p>
          </div>
          <div>
            <ul>
              <li className="flex ">
                <div className="bg-amber-400 p-1 h-[100%] mb-3 mr-3">
                  <MdEmail size={22} className="text-black" />
                </div>
                cidade@totalpizza.com
              </li>
              <li className="flex">
                <div className="bg-amber-400 p-1 mb-3 h-[100%] mr-3">
                  <BsFillTelephoneFill size={22} className="text-black" />
                </div>{" "}
                (98)982122264
              </li>
              <li className="flex">
                <div className="bg-amber-400 p-1  h-[100%] mr-3">
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
