import React from "react";
import { Github } from "../../icons";
interface ProjectCardProps {
  projectData: {
    src: string;
    title: string;
    body: string;
    links: {
      website: string;
      sourceCode?: string;
    };
    technologies?: string[];
  };
  reverse?: boolean;
  tabIndex: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectData,
  reverse,
  tabIndex,
}) => {
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
        <h3 className="md:text-2xl text-xl font-medium text-gray-600 cursor-default">
          {title}
        </h3>

        {technologies && (
          <div className="flex space-x-1 overflow-x-auto">
            {technologies.map((text, i) => (
              <div
                key={i}
                className="inline-block flex-shrink-0 cursor-default transition-all text-green-500 hover:text-gray-50 hover:bg-green-500 md:text-sm text-xs border-green-500 border-2 md:px-4 px-2 py-1 rounded-full"
              >
                {text}
              </div>
            ))}
          </div>
        )}
        <p className="md:text-lg text-base font-light cursor-default text-gray-600">
          {body}
        </p>
        <div className="flex space-x-3">
          <a
            tabIndex={tabIndex}
            href={links.website}
            target="_blank"
            className="text-center md:text-lg text-base cursor-pointer transition-all transform hover:scale-105 focus:scale-105 bg-green-600 text-gray-50 font-medium md:px-8 px-4 py-2 rounded-md"
          >
            Go To Website
          </a>
          {links.sourceCode && (
            <a
              tabIndex={tabIndex + 1}
              href={links.sourceCode}
              target="_blank"
              className="text-center cursor-pointer transition-all transform hover:scale-105 focus:scale-105 border-2 hover border-green-600 text-green-600 font-medium px-8 py-2 rounded-md"
            >
              <Github className="w-6 h-6 fill-current text-green-600" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
