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
    technologies?: string[];
  };
  reverse?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectData, reverse }) => {
  const { src, title, body, links, technologies } = projectData;
  return (
    <div
      className={`flex flex-col ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      }`}
    >
      <div className="flex-1 flex flex-col items-center space-y-2 px-4">
        <img src={src} />
      </div>
      <div className="flex flex-col space-y-4 flex-1 py-4">
        <h3 className="text-2xl font-medium text-gray-600">{title}</h3>

        {technologies && (
          <div className="flex space-x-1 overflow-x-auto">
            {technologies.map((text) => (
              <div className="inline-block flex-shrink-0 cursor-default transition-all text-green-500 hover:text-gray-50 hover:bg-green-500 text-sm border-green-500 border-2 px-4 py-1 rounded-full">
                {text}
              </div>
            ))}
          </div>
        )}
        <p className="text-lg font-light">{body}</p>
        <div className="flex space-x-3">
          <a
            href={links.website}
            target="_blank"
            className="text-center cursor-pointer transition-all transform hover:scale-105 bg-green-600 text-gray-50 font-medium px-8 py-2 rounded-md"
          >
            Go To Website
          </a>
          <a
            href={links.sourceCode}
            target="_blank"
            className="text-center cursor-pointer transition-all transform hover:scale-105 border-2 hover border-green-600 text-green-600 font-medium px-8 py-2 rounded-md"
          >
            Source code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
