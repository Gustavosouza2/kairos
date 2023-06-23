import React from "react";
import Image from "next/image";
import Imgcontact from "../images/contact.jpg";
import Logocontact from '../images/Logocontact.png';

export const Contact = () => {

   {/* Contato */}

  return (
    <div className="w-full h-screen bg-[#f6f6f6] dark:bg-slate-100 flex justify-center items-center p-4" id="contato">
      <div className="bg-[#f6f6f6] max-w-full  inline-flex drop-shadow-2xl">

         {/* Formulário */}

        <form
          method="POST"
          action="https://getform.io/f/fd98e4c5-2028-4c7e-a545-e9cb9b7f8321"
          className="flex flex-col  w-[500px] justify-center md:w-full"
        >
          <div className="pb-4 flex justify-center mt-16">
            <p className="text-silver font-sans  tracking-medium text-2xl underline ">
              Contato
            </p>
          </div>
          <input
            className="bg-[#f6f6f6] p-2 m-12 rounded-xl border-2 border-silver text-silver font-sans tracking-widest "
            type="text"
            placeholder="Nome"
            name="name"
          />
          <input
            className="my-2 p-2 bg-[#f6f6f6] m-12 border-2 border-silver rounded-xl text-silver font-sans tracking-widest "
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#f6f6f6] p-2 m-12 border-2 border-silver rounded-xl text-silver font-sans tracking-widest"
            name="message"
            placeholder="Mensagem"
          ></textarea>
          <div className="flex justify-center mb-16">
            <button
              className="bg-transparent w-32
             hover:text-white hover:bg-silver py-2 border-2  border-silver text-silver font-sans
             tracking-widest
            "
            >
              Enviar
            </button>
          </div>
        </form>

         {/* Image Container */}

        <div className="flex justify-center ">
          <p className="absolute font-sans font-light  tracking-small mt-[500px] text-xs z-10 hidden md:block text-white">Rua Tapari, 158 - Penha</p>
          <Image
            src={Imgcontact}
            alt="Empresa"
            className="w-[500px] h-full hidden md:block brightness-50
            drop-shadow-2xl"
          ></Image>
          <Image
            src={Logocontact}
            alt="Empresa"
            className="hidden md:block absolute w-52 mt-[170px] mr-2 "
          ></Image>
        </div>
      </div>
    </div>
  );
};
