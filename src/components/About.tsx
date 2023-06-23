import React from "react";
import Image from "next/image";
import ImgEmpresa from "../images/Inside.jpg";
import ImgAbout from "../images/thiago.jpg";

export const About = () => {

   {/* Sobre nós */}

  return (
    <div className="w-full h-full bg-[#f6f6f6] dark:bg-slate-100 text-gray-300" id="about">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <h1 className="text-silver font-sans mb-20 tracking-medium text-2xl underline">
          Empresa
        </h1>

         {/* Grid Container */}
         
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <Image src={ImgEmpresa} alt="Empresa" className="" />
          </div>
          <div className="text-silver flex items-center ">
            <p className="text-justify md:text-right text-silver">
              Especialista em projetos arquitetônicos e projetos de interiores,
              oferece todos os serviços necessários para obter os melhores
              resultados em sua obra, acompanhamento total desde o inicio da
              construção, consultoria para a escolha do melhor lote, projeto
              arquitetônico e aprovação do projeto junto a prefeitura e o
              projeto de interiores que traz a beleza e a harmonia para o
              ambiente com muita funcionalidade.
            </p>
          </div>

          <div className="text-silver text-center bg-[#f6f6f6] mt-14">
            <h1 className="text-silver font-sans mb-16 tracking-medium text-2xl underline">
              Thiago Souza
            </h1>
            <p className="text-justify text-silver">
              Thiago Souza, formado no Centro Universitário Belas Artes de São
              Paulo, é um dos nomes que se destacam no mercado da Arquitetura
              atualmente. Á frente do escritório desde 2012, é responsável por
              relevantes projetos. Especialista em projetos arquitetônicos e
              projetos de interiores, oferece todos os serviços necessários para
              obter os melhores resultados em sua obra, acompanhamento total
              desde o inicio da construção
            </p>
          </div>
          <div className="md:ml-44 md:mb-20 md:mt-14 flex items-center justify-center">
            <Image src={ImgAbout} alt="Empresa" className="w-96" />
          </div>
        </div>
      </div>
    </div>
  );
};
