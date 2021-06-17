import React from "react";
import ContentSection from "../../layout/ContentSection";
import Technologies from "./Technologies";

const calculateAge = (birthday: Date) => {
  var ageDifMs = Date.now() - birthday.getTime();
  var ageDate = new Date(ageDifMs); // miliseconds from epoch
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

interface AboutProps {
  id?: string;
}

const About: React.FC<AboutProps> = ({ id }) => {
  const age = calculateAge(new Date(2004, 9, 13));

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
        <div className="flex flex-col space-y-6 text-lg text-gray-600 font-light text-left cursor-default">
          <h3 className="text-left  text-2xl font-light text-gray-700">
            I'm a frontend developer focused on ReactJS, Typescript and other
            similar technologies
          </h3>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            porro delectus esse voluptatum asperiores beatae blanditiis! Sed ad
            similique minus labore veniam architecto enim laudantium in,
            adipisci molestiae cumque voluptatem! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Alias suscipit ea sequi quaerat nihil
            doloremque consequatur nisi illo, minus nostrum quae ipsam enim sit
            incidunt fuga labore iste esse ullam.
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni
            porro delectus esse voluptatum asperiores beatae blanditiis! Sed ad
            similique minus labore veniam architecto enim laudantium in,
            adipisci molestiae cumque voluptatem! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Alias suscipit ea sequi quaerat nihil
            doloremque consequatur nisi illo, minus nostrum quae ipsam enim sit
            incidunt fuga labore iste esse ullam.
          </p>
        </div>
        <div className="flex flex-col space-y-6">
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
