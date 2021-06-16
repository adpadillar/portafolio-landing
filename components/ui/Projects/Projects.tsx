import React, { useState } from "react";
import ContentSection from "../../layout/ContentSection";
import ProjectCard from "./ProjectCard";
import ENData from "./languages/en.json";

const generateCards = (n?: number) => {
  let reversed = false;
  let count = n;

  const ProjectCards = ENData.projects.map((project) => {
    reversed = !reversed;
    if (count <= 0) return undefined;
    count--;
    return <ProjectCard projectData={project} reverse={reversed} />;
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
      <ContentSection className="flex-col px-8 py-12 font-poppins space-y-6">
        <h2 className="text-4xl text-gray-700 font-bold">My Projects</h2>
        {ProjectCards}
        <div className="flex justify-center">
          <div
            onClick={toggleLoad}
            className="cursor-pointer transform transition-transform hover:rotate-3 hover:scale-105 text-xl font-medium bg-green-600 text-gray-50 px-8 py-2 rounded-full"
          >
            {length === cardAmount ? "See Less Projects" : "See More Projects"}
          </div>
        </div>
      </ContentSection>
    </section>
  );
};

export default Projects;
