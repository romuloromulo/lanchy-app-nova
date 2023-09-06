"use client";
import React, { useRef, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import FormInput from "../components/InputFormulario";
import Image from "next/image";

function page() {
  const [enviar, setEnviar] = useState("ENVIAR");
  const [styleButton, setStyleButton] = useState(
    "bg-black text-white font-extrabold hover:bg-white hover:border hover:text-black z-10 "
  );
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setEnviar("Enviando... ");
    setStyleButton("text-black bg-amber-400 font-bold border-black ");

    emailjs
      .sendForm(
        "service_8pwnevy",
        "template_bueqi1d",
        form.current,
        "7nsUQEWBczrTywy5f"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setTimeout(() => {
              setEnviar("ok!");
              setStyleButton(
                "bg-green-500 text-black  hover:bg-green-700 focus:ring-green-900"
              );
              e.target.reset();
              setTimeout(() => {
                setEnviar("Reservar");
                setStyleButton(
                  "bg-black text-white  hover:bg-white hover:border hover:text-black "
                );
              }, 3000);
            }, 3000);
          }
        },

        (error) => {
          console.log(error.text);
          setTimeout(() => {
            setEnviar("Tente mais tarde!");
            setStyleButton("bg-red-800 text-white focus:ring-red-900");
          }, 2000);
        }
      );
  };

  return (
    <MainLayout>
      <section
        id="Menu"
        className="max-w-[1500px] flex pt-20 flex-col justify-center bg-white ">
        <div className=" text-center mx-auto w-2/3 mb-12">
          <h1 className="text-7xl text-black font-extrabold mb-2">
            NOS CONTATE
          </h1>
          <p className="text-gray-700">
            Amet consectetur adipiscing elit enim bibendum sed et aliquet
            aliquet risus tempor semper odio egestas id pulvinar consectetu.
          </p>
        </div>
        <div className="flex gap-12 px-10 mt-10 mb-10 items-center">
          <form
            ref={form}
            onSubmit={() => {}}
            className="max-w-[50rem] sm:w-2/3 shadow-xl bg-white h-[45rem] sm:p-20 bg-secondary-light dark:bg-secondary-dark text-left">
            <div className="grid grid-cols-2 gap-4">
              <FormInput
                inputLabel="Nome completo"
                labelFor="name"
                inputType="text"
                inputId="name"
                inputName="name"
                placeholderText="Seu nome"
                ariaLabelName="Name"
              />
              <FormInput
                inputLabel="Email"
                labelFor="email"
                inputType="email"
                inputId="email"
                inputName="email"
                placeholderText="Seu email"
                ariaLabelName="Email"
              />

              <FormInput
                inputLabel="Telefone"
                labelFor="numeric"
                inputType="number"
                inputId="numero"
                inputName="numero"
                placeholderText="(12) 91234-1234"
                ariaLabelName="Numero"
              />
              <FormInput
                inputLabel="Assunto"
                labelFor="subject"
                inputType="text"
                inputId="subject"
                inputName="subject"
                placeholderText="Ex. RESERVAS"
                ariaLabelName="subject"
              />
            </div>
            <div className="mt-2">
              <label
                className="block text-lg text-dim-gray dark:text-primary-light mb-2"
                htmlFor="message">
                Mensagem
              </label>
              <textarea
                className="w-full px-5 py-2 border border-gray-300 dark:border-primary-dark border-opacity-50 text-primary-dark dark:text-secondary-light bg-ternary-light dark:bg-ternary-dark rounded-md shadow-sm text-md"
                id="message"
                name="message"
                cols="14"
                rows="6"
                aria-label="Observação"
                placeholder="Sua mensagem"></textarea>
            </div>
            <div>
              <button
                type="submit"
                className={`${styleButton}  w-40 h-20 px-4 py-2.5 text-center tracking-wider focus:ring-1 mt-6 duration-500`}>
                {enviar}
              </button>
            </div>
          </form>

          <div className="relative  rounded-full h-[30rem] w-[30rem]   p-8 flex items-center ">
            <div className="bg-red-500 rounded-full h-[26rem] w-[26rem] absolute overflow-hidden">
              <Image
                src="/images/pizzaguy.png"
                width={380}
                height={380}
                alt="Cara da Pizza"
                className="translate-x-[2rem]"
              />
            </div>
          </div>
        </div>

        <div className="w-full bg-red-500  py-20 px-5 [&>*:last-child]:border-none">
          <div className=" text-center mx-auto w-2/3 mb-12">
            <h1 className="text-3xl text-white font-extrabold mb-2">
              PERGUNTAS FREQUENTES
            </h1>
            <p className="text-white">
              Amet consectetur adipiscing elit enim bibendum sed et aliquet
              aliquet risus tempor semper odio egestas id pulvinar consectetu.
            </p>
          </div>

          <details className="w-full border-b-4 border-white hover:translate-x-2 duration-300 ">
            <summary className="p-12 text-white font-bold text-2xl cursor-pointer">
              <span className=" text-white font-extrabold text-3xl">01 - </span>{" "}
              Quais os horários de funcionamento?
            </summary>
            <p className="px-20 mt-[-2rem] pb-8 text-white text-lg">
              Requires a computer running an operating system. The computer must
              have some memory and ideally some kind of long-term storage. An
              input device as well as some form of output device is recommended.
            </p>
          </details>
          <details className="w-full border-b-4 border-white hover:translate-x-2 duration-300 ">
            <summary className="p-12 text-white font-bold text-2xl cursor-pointer">
              <span className=" text-white font-extrabold text-3xl">02 - </span>{" "}
              Vocês estão contratando?
            </summary>
            <p className="px-20 mt-[-2rem] pb-8 text-white text-lg">
              Requires a computer running an operating system. The computer must
              have some memory and ideally some kind of long-term storage. An
              input device as well as some form of output device is recommended.
            </p>
          </details>
          <details className="w-full border-b-4 border-white hover:translate-x-2 duration-300 ">
            <summary className="p-12 text-white font-bold text-2xl cursor-pointer">
              <span className=" text-white font-extrabold text-3xl">03 - </span>{" "}
              Seu restaurante está aberto a parcerias?
            </summary>
            <p className="px-20 mt-[-2rem] pb-8 text-white text-lg">
              Requires a computer running an operating system. The computer must
              have some memory and ideally some kind of long-term storage. An
              input device as well as some form of output device is recommended.
            </p>
          </details>
          <details className="w-full border-b-4 border-white hover:translate-x-2 duration-300 ">
            <summary className="p-12 text-white font-bold text-2xl cursor-pointer">
              <span className=" text-white font-extrabold text-3xl">04 - </span>{" "}
              Mais franquias serão abertas?
            </summary>
            <p className="px-20 mt-[-2rem] pb-8 text-white text-lg">
              Requires a computer running an operating system. The computer must
              have some memory and ideally some kind of long-term storage. An
              input device as well as some form of output device is recommended.
            </p>
          </details>
          <details className="w-full border-b-4 border-white hover:translate-x-2 duration-300 ">
            <summary className="p-12 text-white font-bold text-2xl cursor-pointer flex items-center">
              <span className=" text-white font-extrabold text-3xl mr-4">
                05 -{" "}
              </span>{" "}
              Posso pedir pelo Ifood ou UberEats?
            </summary>
            <p className="px-20 mt-[-2rem] pb-8 text-white text-lg">
              Requires a computer running an operating system. The computer must
              have some memory and ideally some kind of long-term storage. An
              input device as well as some form of output device is recommended.
            </p>
          </details>
        </div>
      </section>
    </MainLayout>
  );
}

export default page;