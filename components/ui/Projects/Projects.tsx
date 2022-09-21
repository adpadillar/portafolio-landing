import React, { useState } from "react";
import ContentSection from "../../layout/ContentSection";
import ProjectCard from "./ProjectCard";
import ENData from "./languages/en.json";

const generateCards = (n?: number) => {
  let reversed = false;
  let count = n;
  let tabIndex = 7; // 7+2 = 9th element on the TabIndex

  const ProjectCards = ENData.projects.map((project, i) => {
    tabIndex += 2;
    reversed = !reversed;
    if (count <= 0) return undefined;
    count--;
    return (
      <ProjectCard
        key={i}
        tabIndex={tabIndex}
        projectData={project}
        reverse={reversed}
      />
    );
  });

  return ProjectCards;
};

interface ProjectProps {
  id?: string;
}

const Projects: React.FC<ProjectProps> = ({ id }) => {
  const [cardAmount, setCardAmount] = useState(3);
  const ProjectCards = generateCards(cardAmount);
  const length = generateCards().length;

  const toggleLoad = () => {
    if (cardAmount === length) {
      setCardAmount(3);
    } else {
      setCardAmount(length);
    }
  };

  return (
    <section id={id}>
      <ContentSection className="flex-col px-8 py-24 font-poppins space-y-16">
        <div className="flex flex-col space-y-6">
          <h2 className="md:text-4xl text-3xl text-gray-700 font-bold cursor-default">
            My Projects
          </h2>
          <p className="md:text-2xl text-lg text-gray-700 font-light cursor-default">
            Take a look at this list! These are a list of some of the projects I
            have worked on recently. They were all built from scratch using some
            of the latest web technologies.
          </p>
        </div>
        <div className="flex flex-col md:space-y-32 space-y-16">
          {ProjectCards}
        </div>
        <div className="flex justify-center">
          <button
            tabIndex={50}
            onClick={toggleLoad}
            className="cursor-pointer transform transition-transform hover:rotate-3 hover:scale-105 focus:rotate-3 focus:scale-105 md:text-xl text-lg font-medium bg-green-600 text-gray-50 md:px-8 px-4 py-2 rounded-full"
          >
            {length === cardAmount ? "See Less Projects" : "See All Projects"}
          </button>
        </div>
      </ContentSection>
    </section>
  );
};

export default Projects;
