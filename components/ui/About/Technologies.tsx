import React from "react";
import {
  FirebaseLogo,
  ReactLogo,
  Css,
  Html,
  Javascript,
  Typescript,
  NextJS,
  Git,
  TailwindLogo,
} from "../../icons";

const Technologies: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="flex shadow-lg transition-transform transform hover:scale-105 hover:rotate-1">
        <div className="p-3 bg-gray-50 rounded-l-xl">
          <ReactLogo className="h-12 w-12" />
        </div>
        <div className="w-2 bg-green-500"></div>
        <div className="flex w-full items-center justify-center bg-gray-800 rounded-r-xl">
          <p className="text-xl font-medium text-gray-50">React</p>
        </div>
      </div>
      <div className="flex shadow-lg transition-transform transform hover:scale-105 hover:rotate-1">
        <div className="p-3 bg-gray-50 rounded-l-xl">
          <Typescript className="h-12 w-12" />
        </div>
        <div className="w-2 bg-green-500"></div>
        <div className="flex w-full items-center justify-center bg-gray-800 rounded-r-xl">
          <p className="text-xl font-medium text-gray-50">Typescript</p>
        </div>
      </div>
      <div className="flex shadow-lg transition-transform transform hover:scale-105 hover:rotate-1">
        <div className="p-3 bg-gray-50 rounded-l-xl">
          <FirebaseLogo className="h-12 w-12" />
        </div>
        <div className="w-2 bg-green-500"></div>
        <div className="flex w-full items-center justify-center bg-gray-800 rounded-r-xl">
          <p className="text-xl font-medium text-gray-50">Firebase</p>
        </div>
      </div>

      <div className="flex shadow-lg transition-transform transform hover:scale-105 hover:rotate-1">
        <div className="p-3 bg-gray-50 rounded-l-xl">
          <Css className="h-12 w-12" />
        </div>
        <div className="w-2 bg-green-500"></div>
        <div className="flex w-full items-center justify-center bg-gray-800 rounded-r-xl">
          <p className="text-xl font-medium text-gray-50">CSS3</p>
        </div>
      </div>
      <div className="flex shadow-lg transition-transform transform hover:scale-105 hover:rotate-1">
        <div className="p-3 bg-gray-50 rounded-l-xl">
          <Html className="h-12 w-12" />
        </div>
        <div className="w-2 bg-green-500"></div>
        <div className="flex w-full items-center justify-center bg-gray-800 rounded-r-xl">
          <p className="text-xl font-medium text-gray-50">HTML5</p>
        </div>
      </div>
      <div className="flex shadow-lg transition-transform transform hover:scale-105 hover:rotate-1">
        <div className="p-3 bg-gray-50 rounded-l-xl">
          <Javascript className="h-12 w-12" />
        </div>
        <div className="w-2 bg-green-500"></div>
        <div className="flex w-full items-center justify-center bg-gray-800 rounded-r-xl">
          <p className="text-xl font-medium text-gray-50">Javascript</p>
        </div>
      </div>

      <div className="flex shadow-lg transition-transform transform hover:scale-105 hover:rotate-1">
        <div className="p-3 bg-gray-50 rounded-l-xl">
          <NextJS className="h-12 w-12" />
        </div>
        <div className="w-2 bg-green-500"></div>
        <div className="flex w-full items-center justify-center bg-gray-800 rounded-r-xl">
          <p className="text-xl font-medium text-gray-50">Next JS</p>
        </div>
      </div>
      <div className="flex shadow-lg transition-transform transform hover:scale-105 hover:rotate-1">
        <div className="p-3 bg-gray-50 rounded-l-xl">
          <TailwindLogo className="h-12 w-12" />
        </div>
        <div className="w-2 bg-green-500"></div>
        <div className="flex w-full items-center justify-center bg-gray-800 rounded-r-xl">
          <p className="text-xl font-medium text-gray-50">TailwindCSS</p>
        </div>
      </div>
      <div className="flex shadow-lg transition-transform transform hover:scale-105 hover:rotate-1">
        <div className="p-3 bg-gray-50 rounded-l-xl">
          <Git className="h-12 w-12" />
        </div>
        <div className="w-2 bg-green-500"></div>
        <div className="flex w-full items-center justify-center bg-gray-800 rounded-r-xl">
          <p className="text-xl font-medium text-gray-50">Git</p>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
