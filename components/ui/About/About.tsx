import React, { useState } from "react";
import ContentSection from "../../layout/ContentSection";
import Modal from "../../layout/Modal";
import Technologies from "./Technologies";

const calculateAge = (birthday: Date) => {
  // Given a Date object, calculate the age of the person
  // get today's date
  const today = new Date();
  // get the difference between today and the birthday
  const difference = today.getTime() - birthday.getTime();
  // convert the difference to years
  const age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
  return age;
};

const calculateExperience = (age: number) => age - 16;

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  const age = calculateAge(new Date(2003, 9, 13));
  const experience = calculateExperience(age);

  const [pdfState, setPdfState] = useState(false);

  const downloadResume = (path: string) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = path;
    link.click();
  };

  const togglePdf = () => {
    setPdfState(!pdfState);
  };

  return (
    <section id={id} className="bg-gray-200 shadow-inner">
      <ContentSection className="flex-col px-8 py-20 space-y-8 font-poppins max-w-3xl">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex">
            <div className="transition-transform transform hover:scale-105 focus-within:scale-105 overflow-hidden rounded-full p-1 bg-green-400">
              <img
                src="/img/me.jpg"
                tabIndex={51}
                className="h-56 w-56 rounded-full"
              />
            </div>
          </div>
          <h2 className="w-full text-left md:text-center md:text-4xl text-3xl text-gray-700 font-bold cursor-default">
            Hello, I'm Axel Padilla
          </h2>
        </div>
        <div className="flex flex-col space-y-6 md:text-lg text-base text-gray-600 font-light text-left cursor-default pb-16">
          <h3 className="text-left font-medium md:text-2xl text-xl text-gray-700">
            I'm a frontend developer focused on ReactJS, Typescript and other
            similar technologies
          </h3>
          <p>
            I am currently a {age} year old developer and I have been working on
            the web for about {experience} years now. I learned to code at the
            start of the Covid-19 pandemic, so I could build a simple Discord
            Bot for my friends. It was at that moment when I realized that I
            wanted to learn more about the web and how it works.
          </p>
          <p>
            I consider myself as someone who is good at math, and I participated
            on Mexico's 34th and 35th National Math Olympiads. I love to learn
            about anything and everything, specially when it comes to
            technology.
          </p>
          <div className="flex items-center justify-center">
            <button
              className="cursor-pointer transform transition-transform hover:rotate-3 hover:scale-105 focus:rotate-3 focus:scale-105 md:text-xl text-lg font-medium bg-green-600 text-gray-50 md:px-8 px-4 py-2 rounded-full"
              onClick={togglePdf}
            >
              See Resume
            </button>
            <button
              className="fixed z-50 md:right-12 right-6 bottom-6 md:bottom-12 cursor-pointer transform transition-transform hover:rotate-3 hover:scale-105 focus:rotate-3 focus:scale-105 md:text-xl text-lg font-medium bg-green-600 text-gray-50 md:px-8 px-4 py-2 rounded-full"
              onClick={togglePdf}
            >
              See Resume
            </button>
          </div>
        </div>
        {/* <div className="flex flex-col space-y-6">
          <h2 className="w-full text-left md:text-center md:text-4xl text-3xl text-gray-700 font-bold cursor-default">
            Awards
          </h2>
        </div>
        <div className="flex flex-col space-y-6 md:text-lg text-base text-gray-600 font-light text-left cursor-default pb-16">
          <h3 className="text-left font-medium md:text-2xl text-xl text-gray-700">
            I'm a frontend developer focused on ReactJS, Typescript and other
            similar technologies
          </h3>
          <p>
            I am currently a {age} year old developer and I have been working on
            the web for about {experience} years now. I learned to code at the
            start of the Covid-19 pandemic, so I could build a simple Discord
            Bot for my friends. It was at that moment when I realized that I
            wanted to learn more about the web and how it works.
          </p>
          <p>
            I consider myself as someone who is good at math, and I participated
            on Mexico's 34th and 35th National Math Olympiads. I love to learn
            about anything and everything, specially when it comes to
            technology.
          </p>
        </div> */}
        <div className="flex flex-col space-y-6 pb-16">
          <h2 className="w-full text-left md:text-center md:text-4xl text-3xl text-gray-700 font-bold cursor-default">
            Skillset
          </h2>
          <Technologies />
        </div>
        <Modal state={pdfState} toggleState={togglePdf}>
          <iframe
            src="/pdf/Axel Daniel Padilla Reyes resume.pdf"
            className="w-[90%] max-h-[80%]"
            style={{ aspectRatio: "8.5 / 11" }}
          />
          <button
            className="cursor-pointer transform transition-transform hover:rotate-3 hover:scale-105 focus:rotate-3 focus:scale-105 md:text-xl text-lg font-medium bg-green-600 text-gray-50 md:px-8 px-4 py-2 rounded-full"
            onClick={() =>
              downloadResume("/pdf/Axel Daniel Padilla Reyes resume.pdf")
            }
          >
            Download
          </button>
        </Modal>
      </ContentSection>
    </section>
  );
};

export default About;
