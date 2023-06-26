import React from "react";
import quartob from "../projetos/roowhite.jpg";
import cozinhanor from "../projetos/cozinhanorm.jpg";
import salap from "../projetos/salap.jpg";
import kitchen from "../projetos/kitchen.jpg";
import lustre from "../projetos/white.jpg";
import cozinhab from "../projetos/whitekitchen.jpg";
import cozinhamoderna from "../projetos/cozinhamoderna.jpg";
import sala from "../projetos/sala.jpg";
import quartopreto from "../projetos/quartopreto.jpg";
import banheiro from "../projetos/banheiropreto.jpg";

export const Projects = () => {
  {
    /* Projetos */
  }

  return (
    <div
      className="w-full h-full md:h-full bg-[#f6f6f6] dark:bg-slate-100 text-gray-300"
      id="arquitetura"
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-[3800px] md:h-[2050px] sm:h-[2300px]">
        <div className="pb-8 flex justify-center items-center mt-10 md:mt-0">
          <p className="text-2xl text-silver font-sans  tracking-medium underline dark:text-[#111112]">
            Arquitetura
          </p>
        </div>

        {/* Grid Container */}

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-40 mt-14">
          {/* Images */}
          <div
            style={{
              backgroundImage: `url(${quartob.src})`,
              width: "90%",
              height: "160%",
            }}
            className="shadow-lg bg-cover bg-center shadow-[#040C16] group container flex justify-start items-end mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out pt-32 w-full">
              <div className="hover:bg-[#f6f6f6a8] flex flex-col px-4 transition delay-100 duration-300 ease-in-out pb-2 pt-2">
                <span className="text-2xl font-sans text-silver tracking-widest">
                  Quarto Moderno
                </span>

                <div className="pt-1 text-justify text-1xl font-sans text-silver">
                  <p>São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${cozinhanor.src})`,
              width: "90%",
              height: "160%",
            }}
            className="shadow-lg bg-cover bg-center shadow-[#040C16] group container flex justify-start items-end mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out pt-32 w-full">
              <div className="hover:bg-[#f6f6f6a8] flex flex-col px-4 transition delay-100 duration-300 ease-in-out pb-2 pt-2">
                <span className="text-2xl font-sans text-silver tracking-widest">
                  Cozinha
                </span>

                <div className="pt-1 text-justify text-1xl font-sans text-silver">
                  <p>São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${salap.src})`,
              width: "90%",
              height: "160%",
            }}
            className="shadow-lg bg-cover bg-center shadow-[#040C16] group container flex justify-start items-end mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out pt-32 w-full">
              <div className="hover:bg-[#f6f6f6a8] flex flex-col px-4 transition delay-100 duration-300 ease-in-out pb-2 pt-2">
                <span className="text-2xl font-sans text-silver tracking-widest">
                  Sala Preta
                </span>

                <div className="pt-1 text-justify text-1xl font-sans text-silver">
                  <p>São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${kitchen.src})`,
              width: "90%",
              height: "160%",
            }}
            className="shadow-lg bg-cover bg-center shadow-[#040C16] group container flex justify-start items-end mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out pt-32 w-full">
              <div className="hover:bg-[#f6f6f6a8] flex flex-col px-4 transition delay-100 duration-300 ease-in-out pb-2 pt-2">
                <span className="text-2xl font-sans text-silver tracking-widest">
                  Cozinha Preta
                </span>

                <div className="pt-1 text-justify text-1xl font-sans text-silver">
                  <p>São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${lustre.src})`,
              width: "90%",
              height: "160%",
            }}
            className="shadow-lg bg-cover bg-center shadow-[#040C16] group container flex justify-start items-end mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out pt-32 w-full">
              <div className="hover:bg-[#f6f6f6a8] flex flex-col px-4 transition delay-100 duration-300 ease-in-out pb-2 pt-2">
                <span className="text-2xl font-sans text-silver tracking-widest">
                  Lustre
                </span>

                <div className="pt-1 text-justify text-1xl font-sans text-silver">
                  <p>São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${cozinhab.src})`,
              width: "90%",
              height: "160%",
            }}
            className="shadow-lg bg-cover bg-center shadow-[#040C16] group container flex justify-start items-end mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out pt-32 w-full">
              <div className="hover:bg-[#f6f6f6a8] flex flex-col px-4 transition delay-100 duration-300 ease-in-out pb-2 pt-2">
                <span className="text-2xl font-sans text-silver tracking-widest">
                  Cozinha branca
                </span>

                <div className="pt-1 text-justify text-1xl font-sans text-silver">
                  <p>São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${cozinhamoderna.src})`,
              width: "90%",
              height: "160%",
            }}
            className="shadow-lg bg-cover bg-center shadow-[#040C16] group container flex justify-start items-end mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out pt-32 w-full">
              <div className="hover:bg-[#f6f6f6a8] flex flex-col px-4 transition delay-100 duration-300 ease-in-out pb-2 pt-2">
                <span className="text-2xl font-sans text-silver tracking-widest">
                  Cozinha Moderna
                </span>

                <div className="pt-1 text-justify text-1xl font-sans text-silver">
                  <p>São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${sala.src})`,
              width: "90%",
              height: "160%",
            }}
            className="shadow-lg bg-cover bg-center shadow-[#040C16] group container flex justify-start items-end mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out pt-32 w-full">
              <div className="hover:bg-[#f6f6f6a8] flex flex-col px-4 transition delay-100 duration-300 ease-in-out pb-2 pt-2">
                <span className="text-2xl font-sans text-silver tracking-widest">
                  Sala de estar
                </span>

                <div className="pt-1 text-justify text-1xl font-sans text-silver">
                  <p>São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${quartopreto.src})`,
              width: "90%",
              height: "160%",
            }}
            className="shadow-lg bg-cover bg-center shadow-[#040C16] group container flex justify-start items-end mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out pt-32 w-full">
              <div className="hover:bg-[#f6f6f6a8] flex flex-col px-4 transition delay-100 duration-300 ease-in-out pb-2 pt-2">
                <span className="text-2xl font-sans text-silver tracking-widest">
                  Quarto preto
                </span>

                <div className="pt-1 text-justify text-1xl font-sans text-silver">
                  <p>São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage: `url(${banheiro.src})`,
              width: "90%",
              height: "160%",
            }}
            className="shadow-lg bg-cover bg-center shadow-[#040C16] group container flex justify-start items-end mx-auto content-div"
          >
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out pt-32 w-full">
              <div className="hover:bg-[#f6f6f6a8] flex flex-col px-4 transition delay-100 duration-300 ease-in-out pb-2 pt-2">
                <span className="text-2xl font-sans text-silver tracking-widest">
                  Banheiro moderno
                </span>

                <div className="pt-1 text-justify text-1xl font-sans text-silver">
                  <p>São Paulo, SP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
