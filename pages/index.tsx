import React, { useEffect } from "react";
import Hero from "../components/ui/Hero";
import Navigation from "../components/ui/Navigation/Navigation";
import Projects from "../components/ui/Projects/Projects";
import Footer from "../components/ui/Footer";
import About from "../components/ui/About/About";

//https://rodolfo-mayora-pereda.vercel.app/

const Index: React.FC = () => {
  return (
    <>
      <Navigation />
      <Hero id="home" />
      <Projects id="projects" />
      <About id="about" />
      <Footer />
    </>
  );
};

export default Index;
