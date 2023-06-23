"use client";

import React, { useState } from "react";
import Image from "next/image";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  };
  
  {/* Navbar */}

  return (
    <div className="max-w-full h-[100px] md:h-[150px] container flex flex-wrap p-4  md:flex-row items-center justify-between bg-[#f6f6f6] text-black">
      <div className="relative pl-14 mt-0 md:mt-14 flex items-center  text-gray-950 md:mb-0">
        <Image src={Logo} alt="Logo" className="w-9 md:w-12" />
      </div>

      {/* Menu */}
      <div className="md:ml-auto md:mr-auto mt-14 flex flex-wrap items-end">
        <ul className="hidden md:flex gap-16 tracking-widest text-silver font-sans">
          <li
            className="cursor-pointer transform 
            transition duration-500 hover:scale-125 tracking-small"
          >
            <Link
              activeClass="active"
              to="HomePage"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              
            >
              Home
            </Link>
          </li>
          <li
            className="cursor-pointer transform 
            transition duration-500 hover:scale-125 tracking-small"
          >
              <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              
            >
              Sobre nós
            </Link>
            
          </li>
          <li
            className="cursor-pointer transform 
            transition duration-500 hover:scale-125 tracking-small"
          >
            <Link
              activeClass="active"
              to="arquitetura"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              
            >
              Arquitetura
            </Link>
          </li>
          <li
            className="cursor-pointer transform 
            transition duration-500 hover:scale-125 tracking-small"
          >
            <Link
              activeClass="active"
              to="contato"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              
            >
              Contato
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburguer */}
      <div className="">
        <div
          onClick={handleClick}
          className="md:hidden relative z-10 text-silver"
        >
          {!nav ? <FaBars /> : <FaTimes className="text-silver" />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#f6f6f6] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl cursor-pointer text-silver font-sans tracking-small">
          <a onClick={handleClick}>Home</a>
        </li>
        <li className="py-6 text-4xl cursor-pointer text-silver font-sans tracking-small">
          <a onClick={handleClick}>Sobre</a>
        </li>
        <li className="py-6 text-4xl cursor-pointer text-silver font-sans tracking-small">
          <a onClick={handleClick}>Habilidades</a>
        </li>
        <li className="py-6 text-4xl cursor-pointer text-silver font-sans tracking-small">
          <a onClick={handleClick}>Projetos</a>
        </li>
        <li className="py-6 text-4xl cursor-pointer text-silver font-sans tracking-small">
          <a onClick={handleClick}>Contato</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
