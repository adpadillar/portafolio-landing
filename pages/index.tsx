import React, { useEffect } from "react";
import Hero from "../components/ui/Hero";
import Navigation from "../components/ui/Navigation/Navigation";
import Projects from "../components/ui/Projects/Projects";
import Footer from "../components/ui/Footer";
import About from "../components/ui/About/About";
import Head from "next/head";
import Contact from "../components/ui/Contact/Contact";

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Axel Padilla - Developer</title>
      </Head>
      <Navigation />
      <Hero id="home" />
      <Projects id="projects" />
      <About id="about" />
      <Contact id="contact" />
      <Footer />
    </>
  );
};

export default Index;
