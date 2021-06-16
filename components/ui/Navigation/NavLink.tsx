import React, { useState } from "react";

interface NavLinkProps {
  href?: string;
  current?: boolean;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, current }) => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const handleMouseEnter = () => setIsMouseOver(true);
  const handleMouseLeave = () => setIsMouseOver(false);

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`flex flex-col transition-transform transform hover:-rotate-2 hover:scale-105`}
    >
      <a href={href ? href : "#"}>{children}</a>
      <div
        className={`h-0.5 transition-all bg-gradient-to-r from-green-800 to-green-600 ${
          isMouseOver || current ? "w-6" : "w-0"
        }`}
      ></div>
    </li>
  );
};

export default NavLink;
