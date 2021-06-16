import React, { useEffect } from "react";
import Hero from "../components/ui/Hero";
import Navigation from "../components/ui/Navigation/Navigation";
import Projects from "../components/ui/Projects/Projects";
import Footer from "../components/ui/Footer";

// kick off the polyfill!

//https://rodolfo-mayora-pereda.vercel.app/

const Index: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero id="home" />
      <Projects id="projects" />
      <Footer />
    </>
  );
};

export default Index;
