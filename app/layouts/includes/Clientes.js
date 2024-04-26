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
      foto: "https://qxejovzhjmcusbgwiklu.supabase.co/storage/v1/object/sign/PersonImages/person1.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQZXJzb25JbWFnZXMvcGVyc29uMS5wbmciLCJpYXQiOjE3MTQwOTc1NTIsImV4cCI6MTc0NTYzMzU1Mn0.mCG1SCBcM_PzVlormK7oy-ZJ6jm03KP9C6r4nn-gkK4&t=2024-04-26T02%3A12%3A33.097Z",
      color: "red-600",
    },
    {
      rating: 4,
      quote: "Gosto de infância.",
      avaliaçao:
        "“Lorem ipsum dolor sit amet consectetur adipiscing lectus a nunc mauris scelerisq pharetra arcu pharetra blandit.",
      nome: "Andre Ferreira",
      cidade: "São Paulo - SP",
      foto: "https://qxejovzhjmcusbgwiklu.supabase.co/storage/v1/object/sign/PersonImages/person2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQZXJzb25JbWFnZXMvcGVyc29uMi5wbmciLCJpYXQiOjE3MTQwOTc1NjEsImV4cCI6MTc0NTYzMzU2MX0.Y66AA5H2kM5yIO9lcJBdX1HrC2r2AXGncJq1X16Ae5k&t=2024-04-26T02%3A12%3A42.006Z",
      color: "blue-600",
    },
    {
      rating: 5,
      quote: "Peço todo final de semana!",
      avaliaçao:
        "“Lorem ipsum dolor sit amet consectetur adipiscing lectus a nunc sed quis pharetra arcu pharetra blandit t amet ca fofite.",
      nome: "Jonas Rodrigues",
      cidade: "Recife - PE",
      foto: "https://qxejovzhjmcusbgwiklu.supabase.co/storage/v1/object/sign/PersonImages/person2.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJQZXJzb25JbWFnZXMvcGVyc29uMi5wbmciLCJpYXQiOjE3MTQwOTc1NjEsImV4cCI6MTc0NTYzMzU2MX0.Y66AA5H2kM5yIO9lcJBdX1HrC2r2AXGncJq1X16Ae5k&t=2024-04-26T02%3A12%3A42.006Z",
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
      className="md:p-5 lg:min-h-screen  bg-white w-full flex items-center justify-center">
      <div className="max-w-[1500px] h-full flex flex-col items-center justify-center ">
        <div className="p-2 md:w-3/5 mt-5 text-center">
          <h1 className=" text-2xl sm:text-3xl md:text-5xl font-extrabold text-black md:mb-6">
            Avaliação dos clientes
          </h1>
          <p className="sm:text-base text-sm">
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
