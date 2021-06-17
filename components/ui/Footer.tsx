import React from "react";
import ContentSection from "../layout/ContentSection";
import { Github, WhatsApp, Linkedin } from "../icons";
import { useRouter } from "next/router";

const Footer: React.FC = () => {
  const router = useRouter();

  const backToTop = () => router.push("#");

  return (
    <div className="w-full bg-gray-800">
      <ContentSection className="font-poppins px-6 pt-12 pb-10">
        <div className="flex-1 flex">
          <h4
            className="flex flex-col text-xl font-bold text-gray-50 hover:text-green-300 transition-all transform hover:rotate-3 hover:scale-105 cursor-pointer"
            onClick={backToTop}
          >
            <span>Axel</span>
            <span>Padilla</span>
          </h4>
        </div>
        <div className="flex-1 justify-center items-center hidden md:flex">
          <ul className="flex space-x-4 text-gray-50 lowercase">
            <li className="hover:text-green-300 transition-all transform hover:rotate-3 hover:scale-105">
              <a href="#">Home</a>
            </li>
            <li className="hover:text-green-300 transition-all transform hover:rotate-3 hover:scale-105">
              <a href="#projects">Projects</a>
            </li>
            <li className="hover:text-green-300 transition-all transform hover:rotate-3 hover:scale-105">
              <a href="#about">About</a>
            </li>
            <li className="hover:text-green-300 transition-all transform hover:rotate-3 hover:scale-105">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex flex-1 space-x-6 px-1 justify-end items-center">
          <a href="https://github.com/FadedController/" target="_blank">
            <Github className="fill-current text-gray-50 hover:text-green-300 transition-all h-6 w-6 transform hover:scale-110 hover:rotate-6" />
          </a>
          <a href="https://wa.me/5213321752871" target="_blank">
            <WhatsApp className="fill-current text-gray-50 hover:text-green-300 transition-all h-6 w-6 transform hover:scale-110 hover:rotate-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/axel-padilla-26022520b/"
            target="_blank"
          >
            <Linkedin className="fill-current text-gray-50 hover:text-green-300 transition-all h-6 w-6 transform hover:scale-110 hover:rotate-6" />
          </a>
        </div>
      </ContentSection>
      <ContentSection className="flex-col pb-10 px-6">
        <div className="w-full h-0.5 bg-green-500"></div>
        <div className="pt-10 flex items-center justify-center">
          <p className="font-poppins font-light text-sm text-gray-300 cursor-default">
            © {new Date().getFullYear()} - Axel Padilla
          </p>
        </div>
      </ContentSection>
    </div>
  );
};

export default Footer;
