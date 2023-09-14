import React, { useState } from "react";
import RatingStars from "@/app/components/RenderStar";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Clientes() {
  const persons = [
    {
      rating: 5,
      quote: "Melhor pizza que já comi!",
      avaliaçao:
        "“Lorem ipsum dolor sit amet consectetur adipiscing lectus a nunc mauris scelerisque sed quis pharetra arcu pharetra blandit.",
      nome: "Sandra Lopes",
      cidade: "São Luis - MA",
      foto: "https://eferdsxpshrqcxuqnlms.supabase.co/storage/v1/object/public/PersonsImages/person1.png?t=2023-08-31T21%3A30%3A19.931Z",
      color: "red-600",
    },
    {
      rating: 4,
      quote: "Gosto de infância.",
      avaliaçao:
        "“Lorem ipsum dolor sit amet consectetur adipiscing lectus a nunc mauris scelerisq pharetra arcu pharetra blandit.",
      nome: "Andre Ferreira",
      cidade: "São Paulo - SP",
      foto: "https://eferdsxpshrqcxuqnlms.supabase.co/storage/v1/object/public/PersonsImages/person2.png?t=2023-08-31T21%3A32%3A18.170Z",
      color: "blue-600",
    },
    {
      rating: 5,
      quote: "Peço todo final de semana!",
      avaliaçao:
        "“Lorem ipsum dolor sit amet consectetur adipiscing lectus a nunc sed quis pharetra arcu pharetra blandit t amet ca fofite.",
      nome: "Jonas Rodrigues",
      cidade: "Recife - PE",
      foto: "https://eferdsxpshrqcxuqnlms.supabase.co/storage/v1/object/public/PersonsImages/person3.png",
      color: "green-500",
    },
  ];

  const [info, setInfo] = useState(persons);
  const [counter, setCounter] = useState(0);

  function handleNext() {
    setCounter((prevCounter) => (prevCounter + 1) % info.length);
  }

  function handlePrevious() {
    setCounter((prevCounter) => (prevCounter - 1 + info.length) % info.length);
  }
  return (
    <section
      id="Clients"
      className="md:p-5 min-h-screen  bg-white w-full flex items-center justify-center">
      <div className="max-w-[1500px] h-full flex flex-col items-center justify-center ">
        <div className="p-2 md:w-3/5 mt-5 text-center">
          <h1 className=" text-2xl sm:text-3xl md:text-5xl font-extrabold text-black md:mb-6">
            Avaliação dos clientes
          </h1>
          <p clasName="sm:text-base text-sm">
            Amet consectetur adipiscing elit enim bibendum sed et aliquet
            aliquet risus tempor semper odio egestas id pulvinar consectetur
            elit tortor non hac pellentesque lacus donec accumsan quisque
            ultricies adipiscing mauris tortor cras est eu accumsan mauris.
          </p>
        </div>

        <div className="flex lg:h-2/3 sm:px-12 p-4 w-full justify-center items-center">
          <button
            id="Flecha-Esquerda"
            onClick={handlePrevious}
            className="p-4 bg-white  hover:bg-amber-300 text-black hover:text-red-600 duration-200 shadow-lg translate-x-[11rem] hidden lg:block">
            <FaChevronLeft size={22} />
          </button>
          <div className="mx-auto w-full h-full flex flex-col items-center justify-center">
            <div
              id="Slider"
              className="w-full lg:w-2/3 py-8 shadow-lg md:h-[25rem] border-gray-400 text-black flex md:flex-row flex-col items-center justify-center gap-8 ">
              <div
                className={`rounded-lg w-4/5 h-[9rem]  bg-amber-400 overflow-hidden md:w-1/3 md:h-1/2 flex justify-center items-center`}>
                <Image src={info[counter].foto} width={350} height={350} />
              </div>

              <div className="flex flex-col md:w-1/2 w-2/3">
                <RatingStars rating={info[counter].rating} />
                <div className="font-bold text-lg">{info[counter].quote}</div>
                <div className="text-base mt-2 mb-8">
                  {info[counter].avaliaçao}
                </div>
                <div className="font-extrabold text-lg mb-1">
                  {info[counter].nome}
                </div>
                <div>{info[counter].cidade}</div>
              </div>
            </div>
            <div className="flex items-center justify-around mt-5 gap-8">
              <div id="Flecha-Esquerda">
                <button
                  onClick={handlePrevious}
                  className="p-4 bg-amber-400 hover:bg-amber-300 text-black hover:text-red-600 duration-200 shadow-lg lg:hidden ">
                  <FaChevronLeft size={22} />
                </button>
              </div>
              <div id="Flecha-Direita">
                <button
                  className="p-4 bg-amber-400 hover:bg-amber-300 text-black hover:text-red-600 duration-200 shadow-lg lg:hidden "
                  onClick={handleNext}>
                  <FaChevronRight size={22} />
                </button>
              </div>
            </div>
          </div>
          <button
            id="Flecha-Direita"
            className="p-4 bg-amber-400 hover:bg-amber-300 text-black hover:text-red-600 duration-200 shadow-lg -translate-x-[11rem] hidden lg:block"
            onClick={handleNext}>
            <FaChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Clientes;
