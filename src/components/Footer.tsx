import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineLinkedin,
  AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";

export const Footer = () => {

   {/* Footer */}

  return (
    <div className="w-full h-44 bg-silver justify-center items-center flex flex-col">
      <footer className="max-w-full mx-36 gap-36 md:inline-flex">
        <p className="font-sans font-light text-justify">
          Copyright © 2023. All Right Reserved by Arquitetura Kairos.
        </p>

        <div className="flex text-3xl text-right gap-14 items-center mt-10 md:mt-0">
          <Link
            href="https://www.instagram.com/arquiteturakairos/"
            target="_blank"
          >
            <AiOutlineInstagram
              className="cursor-pointer transform 
            transition duration-500 hover:scale-125 "
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/thiago-souza-b78a4878/"
            target="_blank"
          >
            <AiOutlineLinkedin
              className="cursor-pointer transform 
            transition duration-500 hover:scale-125 "
            />
          </Link>
          <Link href="https://twitter.com/arqkairos" target="_blank">
            <AiOutlineTwitter
              className="cursor-pointer transform 
            transition duration-500 hover:scale-125 "
            />
          </Link>
        </div>
      </footer>
    </div>
  );
};
