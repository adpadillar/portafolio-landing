import React, { useEffect, useState } from "react";
import ContentSection from "../../layout/ContentSection";
import Modal from "../../layout/Modal";
import NavLink from "./NavLink";

const Navigation: React.FC = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");
  const [pdfState, setPdfState] = useState(false);

  const downloadResume = (path: string) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = path;
    link.click();
  };

  const togglePdf = () => {
    setPdfState(!pdfState);
  };

  // Section Navigation states
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
      sections.forEach((section) => {
        const sectionId = section.getAttribute("id");
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 4) {
          setCurrentSection(sectionId);
        }
      });
    });
  }, []);

  // Is On Top ?
  useEffect(() => {
    let isScrolling = false;

    const intervalWatcher = window.setInterval(() => {
      const scrollOffset = window.pageYOffset;

      if (scrollOffset === 0) {
        setIsOnTop(true);
      }

      if (isScrolling) {
        isScrolling = false;

        if (scrollOffset > 0 && isOnTop) {
          setIsOnTop(false);
        }
      }
    }, 100);

    const setScrollTrue = () => {
      isScrolling = true;
    };

    window.addEventListener("scroll", setScrollTrue);

    return () => {
      clearInterval(intervalWatcher);
      window.removeEventListener("scroll", setScrollTrue);
    };
  }, []);

  return (
    <>
      <nav
        className={`z-10 fixed top-0 w-full transition-all flex items-center font-poppins lowercase text-gray-700 ${
          isOnTop ? "bg-transparent py-8" : "bg-gray-50 py-4 shadow-xl"
        }`}
      >
        <ContentSection className="px-8">
          <ul
            className={`transition-all flex space-x-3 md:space-x-6 ${
              isOnTop ? "md:text-xl text-lg" : "md:text-lg text-base"
            }`}
          >
            <NavLink
              tabIndex={1}
              current={currentSection === "home" && true}
              href="#"
            >
              Home
            </NavLink>
            <NavLink
              tabIndex={2}
              current={currentSection === "projects" && true}
              href="#projects"
            >
              Projects
            </NavLink>
            <NavLink
              tabIndex={4}
              current={currentSection === "contact" && true}
              href="#contact"
            >
              Contact
            </NavLink>
            <NavLink
              tabIndex={3}
              current={currentSection === "about" && true}
              href="https://blog.axelpadilla.me"
            >
              Blog
            </NavLink>
          </ul>
        </ContentSection>
      </nav>
      <div
        className={`fixed z-40 md:bottom-12 md:right-12 bottom-6 right-6 transition-transform transform hover:rotate-3 hover:scale-105 focus:rotate-3 focus:scale-105 text-gray-50 px-8 py-2 text-xl rounded-full bg-gradient-to-r from-green-800 to-green-600 cursor-pointer ${
          isOnTop || pdfState ? "translate-x-64" : "translate-x-0"
        }`}
      >
        <button onClick={togglePdf}>Show resume</button>
      </div>

      <Modal state={pdfState} toggleState={togglePdf}>
        <iframe
          src="/pdf/Axel Daniel Padilla Reyes resume.pdf"
          className="max-w-5xl w-[95%] max-h-[80%]"
          style={{ aspectRatio: "21/30" }}
        />
        <div
          className={`md:bottom-12 md:right-12 bottom-6 right-6 transition-transform transform hover:rotate-3 hover:scale-105 focus:rotate-3 focus:scale-105 text-gray-50 px-8 py-2 text-xl rounded-full bg-gradient-to-r from-green-800 to-green-600 cursor-pointer`}
        >
          <button
            onClick={() =>
              downloadResume("/pdf/Axel Daniel Padilla Reyes resume.pdf")
            }
          >
            Download resume
          </button>
        </div>
      </Modal>
    </>
  );
};

export default Navigation;
