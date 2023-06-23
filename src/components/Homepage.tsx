import Image from "next/image";
import React from "react";
import BackgroundImage from "../images/back.png";

export const Homepage = () => {
  
  {/* HomePage */}

  return (
    <div className="w-full h-screen flex bg-[#f6f6f6]" id="Homepage">

      {/* Container */}

      <div className="max-w-[1000px] mx-auto px-0 flex flex-col justify-center mt-3 md:mt-0 h-[540px]">
        <div className="md:hidden flex justify-center">
          <h1 className="text-silver mb-14 text-lg tracking-medium">
            Arquitetura Kairós
          </h1>
        </div>
        <div className="relative md:absolute -right-[100px] top-[350px] sm:-right-[100px] -rotate-90 flex items-center">
          <h1
            className="hidden md:inline-flex text-silver md:text-5xl tracking-full font-alt
            opacity-70"
            style={{ writingMode: "sideways-lr" }}
          >
            KAIRÓS
          </h1>
        </div>
        <div className="flex justify-center items-center w-72 md:w-128">
          <Image
            src={BackgroundImage}
            alt="Logo"
            className="w-128 md:96 md:flex justify-center items-center"
          />
        </div>
      </div>
    </div>
  );
};
