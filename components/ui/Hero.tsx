import React from "react";
import ContentSection from "../layout/ContentSection";
import { Github, Linkedin, WhatsApp } from "../icons/Icons";

interface HeroProps {
  id?: string;
}

const Hero: React.FC<HeroProps> = ({ id }) => {
  return (
    <section
      id={id}
      className="flex min-h-screen bg-gradient-to-tl from-lime-400 via-green-400 to-green-300"
    >
      <div className="flex-3 flex flex-col justify-center bg-gradient-to-b from-[#ffffffb4] to-[#ffffff69]">
        <ContentSection className="px-8 space-y-6">
          <div className="max-w-2xl font-poppins flex flex-col space-y-8">
            <div className="flex flex-col space-y-2">
              <h1 className="tracking-tight bg-gradient-to-r from-green-800 to-green-600 bg-clip-text text-transparent text-7xl sm:text-9xl font-bold uppercase">
                Axel Padilla
              </h1>
              <h2 className="tracking-tight ml-1 sm:text-4xl text-2xl lowercase text-gray-700 transition-transform transform">
                Frontend Developer
              </h2>
            </div>
            <div className="flex space-x-6 px-1">
              <a href="https://github.com/FadedController/" target="_blank">
                <Github className="fill-current text-green-800 h-6 w-6 transform hover:scale-110 hover:rotate-6 transition-transform" />
              </a>
              <a href="https://wa.me/5213321752871" target="_blank">
                <WhatsApp className="fill-current text-green-800 h-6 w-6 transform hover:scale-110 hover:rotate-6 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/axel-padilla-26022520b/"
                target="_blank"
              >
                <Linkedin className="fill-current text-green-800 h-6 w-6 transform hover:scale-110 hover:rotate-6 transition-transform" />
              </a>
            </div>
            <div className="px-1 flex">
              <div className="transition-transform transform hover:rotate-3 hover:scale-105 text-gray-50 px-8 py-2 text-xl rounded-full bg-gradient-to-r from-green-800 to-green-600 cursor-pointer">
                <a href="#projects">My Projects</a>
              </div>
            </div>
          </div>
        </ContentSection>
      </div>
    </section>
  );
};

export default Hero;
