import React from "react";
import Hero from "../components/ui/Hero";
import Navigation from "../components/ui/Navigation/Navigation";
import Projects from "../components/ui/Projects/Projects";

//https://rodolfo-mayora-pereda.vercel.app/

const Index: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero id="home" />
      <Projects id="projects" />
    </>
  );
};

export default Index;
