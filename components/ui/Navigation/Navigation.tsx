import React, { useEffect, useState } from "react";
import ContentSection from "../../layout/ContentSection";
import NavLink from "./NavLink";

const Navigation: React.FC = () => {
  const [isOnTop, setIsOnTop] = useState(true);
  const [currentSection, setCurrentSection] = useState("home");

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
    <nav
      className={`z-10 fixed top-0 w-full transition-all flex items-center font-poppins text-xl lowercase text-gray-700 ${
        isOnTop ? "bg-transparent py-8" : "bg-gray-50 py-4 shadow-xl"
      }`}
    >
      <ContentSection className="px-8">
        <ul className="flex space-x-6">
          <NavLink current={currentSection === "home" && true} href="#">
            Home
          </NavLink>
          <NavLink
            current={currentSection === "projects" && true}
            href="#projects"
          >
            Projects
          </NavLink>
          <NavLink current={currentSection === "about" && true} href="#about">
            About
          </NavLink>
          <NavLink
            current={currentSection === "contact" && true}
            href="#contact"
          >
            Contact
          </NavLink>
        </ul>
      </ContentSection>
    </nav>
  );
};

export default Navigation;
