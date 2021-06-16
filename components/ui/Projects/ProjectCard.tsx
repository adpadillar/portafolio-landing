import React from "react";

interface ProjectCardProps {
  projectData: {
    src: string;
    title: string;
    body: string;
    links: {
      website: string;
      sourceCode: string;
    };
  };
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectData, reverse }) => {
  const { src, title, body, links } = projectData;
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="flex-1 px-4">
        <img src={src} />
      </div>
      <div className="flex flex-col space-y-4 flex-1 py-4">
        <h3 className="text-2xl font-medium text-gray-600">{title}</h3>
        <p className="text-lg font-light">{body}</p>
        <div className="flex space-x-3">
          <div className="cursor-pointer transition-all transform hover:scale-105 bg-green-600 text-gray-50 font-medium px-8 py-2 rounded-md">
            <a href={links.website} target="_blank">
              Go To Website
            </a>
          </div>
          <div className="cursor-pointer transition-all transform hover:scale-105 border-2 border-green-600 text-green-600 font-medium px-8 py-2 rounded-md">
            <a href={links.sourceCode} target="_blank">
              Source code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
