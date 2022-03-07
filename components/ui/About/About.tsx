import React from "react";
import ContentSection from "../../layout/ContentSection";
import Technologies from "./Technologies";

const calculateAge = (birthday: Date) => {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

const calculateExperience = (age: number) => age - 15;

interface AboutProps {
  id: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  const age = calculateAge(new Date(2004, 9, 13));
  const experience = calculateExperience(age);

  return (
    <section id={id} className="bg-gray-200 shadow-inner">
      <ContentSection className="flex-col px-8 py-20 space-y-8 font-poppins max-w-5xl">
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
          <h2 className="w-full text-left md:text-center text-4xl text-gray-700 font-bold cursor-default">
            Hello, I'm Axel Padilla
          </h2>
        </div>
        <div className="flex flex-col space-y-6 text-lg text-gray-600 font-light text-left cursor-default pb-16">
          <h3 className="text-left  text-2xl font-light text-gray-700">
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
        </div>
        <div className="flex flex-col space-y-6 pb-16">
          <h2 className="w-full text-left md:text-center text-4xl text-gray-700 font-bold cursor-default">
            Technologies I use
          </h2>
          <Technologies />
        </div>
      </ContentSection>
    </section>
  );
};

export default About;
