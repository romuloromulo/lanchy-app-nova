import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import FormInput from "@/app/components/InputFormulario";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GiPositionMarker } from "react-icons/gi";
import Image from "next/image";

const Reservas = () => {
  const [enviar, setEnviar] = useState("Reservar");
  const [styleButton, setStyleButton] = useState(
    "bg-black text-white  hover:bg-white hover:border hover:text-black z-10 "
  );
  const form = useRef();
  const teste = "teste";

  const sendEmail = (e) => {
    e.preventDefault();

    setEnviar("Reservando... ");
    setStyleButton("text-black bg-white border-black ");

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
    <>
      <section
        id="Reservas"
        className="h-screen bg-black flex  w-full  justify-center items-center py-9 p-12 overflow-hidden">
        {/* <div className="w-[30rem] h-[60rem] bg-white"> */}
        <div className="flex gap-5 max-w-[1500px] h-full justify-center items-center">
          <div className="w-[45%] flex flex-col justify-center  h-full">
            <div>
              <h1 className="text-6xl font-extrabold text-white mb-3">
                Reserve uma mesa agora!
              </h1>
              <p className="w-4/5 text-lg text-white mb-3">
                Lorem ipsum dolor sit amet consectetur adipiscing elit enim
                bibendum sed et aliquet aliquet risus tempor semper odio egestas
                id pulvinar consectetur elit tortor.
              </p>
            </div>
            <div>
              <ul>
                <li className="flex  text-white">
                  <div className="bg-amber-400 p-1 mb-3 mr-3">
                    <MdEmail size={22} className="text-black" />
                  </div>
                  cidade@totalpizza.com
                </li>
                <li className="flex text-white">
                  <div className="bg-amber-400 p-1 mb-3  mr-3">
                    <BsFillTelephoneFill size={22} className="text-black" />
                  </div>{" "}
                  (98)982122264
                </li>
                <li className="flex text-white">
                  <div className="bg-amber-400 p-1  mr-3">
                    <GiPositionMarker size={22} className="text-black" />
                  </div>{" "}
                  837 W. Marshall Lane Marshalltown, IA 50158, Los Angeles
                </li>
              </ul>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="max-w-xl bg-white h-2/3 sm:p-5 bg-secondary-light dark:bg-secondary-dark shadow-xl text-left">
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
                inputLabel="Local"
                labelFor="local"
                inputType="text"
                inputId="localizaçao"
                inputName="localizaçao"
                placeholderText="Ex. COHAB"
                ariaLabelName="Localização"
              />

              <FormInput
                inputLabel="Data"
                labelFor="data"
                inputType="date"
                inputId="date"
                inputName="date"
                placeholderText="xx/xx/xxxx"
                ariaLabelName="Data"
              />
              <FormInput
                inputLabel="Horário"
                labelFor="horario"
                inputType="text"
                inputId="horario"
                inputName="horario"
                placeholderText="Ex. 14:00"
                ariaLabelName="Horário"
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
                placeholder="Alguma observação?"></textarea>
            </div>
            <div>
              <button
                type="submit"
                className={`${styleButton} font-general-medium w-40 h-16 px-4 py-2.5 text-center font-medium tracking-wider focus:ring-1 mt-6 duration-500`}>
                {enviar}
              </button>
            </div>
          </form>
        </div>
        {/* </div> */}
      </section>
      <Image
        src="/images/map.jpeg"
        alt="backgroundmap"
        width={2000}
        height={400}
        className="z-0"
      />
    </>
  );
};

export default Reservas;
