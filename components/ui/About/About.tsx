import React from "react";
import ContentSection from "../../layout/ContentSection";
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
        </div>
        <div className="flex flex-col space-y-6 pb-16">
          <h2 className="w-full text-left md:text-center md:text-4xl text-3xl text-gray-700 font-bold cursor-default">
            Skillset
          </h2>
          <Technologies />
        </div>
      </ContentSection>
    </section>
  );
};

export default About;
