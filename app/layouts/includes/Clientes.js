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
      className="p-5 h-screen bg-white overflow-hidden w-full flex items-center justify-center">
      <div className="max-w-[1500px] h-full flex flex-col items-center justify-center ">
        <div className=" w-3/5 mt-5 text-center">
          <h1 className="text-5xl font-extrabold text-black">
            Avaliação dos clientes
          </h1>
          <p>
            Amet consectetur adipiscing elit enim bibendum sed et aliquet
            aliquet risus tempor semper odio egestas id pulvinar consectetur
            elit tortor non hac pellentesque lacus donec accumsan quisque
            ultricies adipiscing mauris tortor cras est eu accumsan mauris.
          </p>
        </div>

        <div className="flex h-2/3 w-full justify-center items-center">
          <button
            onClick={handlePrevious}
            className="p-4 bg-amber-400 hover:bg-amber-300 text-black hover:text-red-600 duration-200 shadow-lg translate-x-6">
            <FaChevronLeft size={22} />
          </button>
          <div className="w-2/3 shadow-lg h-full border-gray-400 text-black flex items-center justify-center gap-8">
            <div
              className={`rounded-lg p-2 bg-amber-400 overflow-hidden w-1/3 h-1/2 flex justify-center items-center`}>
              <Image
                className="rounded-full"
                src={info[counter].foto}
                width={350}
                height={350}
              />
            </div>
            <div className="flex flex-col w-1/2">
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
          <button
            className="p-4 bg-amber-400 hover:bg-amber-300 text-black hover:text-red-600 duration-200 shadow-lg -translate-x-6"
            onClick={handleNext}>
            <FaChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Clientes;