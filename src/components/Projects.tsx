import React from "react";
import QuartoBranco from "../projetos/quartobranco.jpg";


export const Projects = () => {
  return (
    <div className="w-full md:h-screen bg-[#f6f6f6] dark:bg-slate-100 text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 flex justify-center items-center">
          <p className="text-2xl text-silver font-sans  tracking-medium underline dark:text-[#111112]">
            Arquitetura
          </p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-10">
          {/* Grid */}
          <div
          style={{ backgroundImage: `url(${QuartoBranco.src})`,
          width: '100%',
          height: '100%', }}
          className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out">
              <span className="text 2xl font-bold text-white tracking-wider">
                myCoffe
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://mycoffeesite.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Gustavosouza2/myCoffe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out">
              <span className="text 2xl font-bold text-white tracking-wider">
                Design System
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://gustavosouza2.github.io/lab-system/?path=/story/components-button--default"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Gustavosouza2/lab-system"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out">
              <span className="text 2xl font-bold text-white tracking-wider">
                Login
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://react-login-brown.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Gustavosouza2/React-Login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out">
              <span className="text 2xl font-bold text-white tracking-wider">
                Controle Financeiro
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://controle-financeiro-sable.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Gustavosouza2/Controle-Financeiro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out">
              <span className="text 2xl font-bold text-white tracking-wider">
                Netflix
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://netflix-clone-one-tau.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Gustavosouza2/Netflix"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="shadow-lg shadow-[#040C16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 transition delay-100 duration-300 ease-in-out">
              <span className="text 2xl font-bold text-white tracking-wider">
                RocketPay
              </span>

              <div className="pt-8 text-center">
                <a
                  href="https://rocketpay1.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/Gustavosouza2/rocketpay"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
