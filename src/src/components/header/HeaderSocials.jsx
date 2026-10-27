import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import "./header.css";

const HeaderSocials = () => {
  return (
    <nav className="header__socials" aria-label="Social profiles">
      <a
        href="https://www.linkedin.com/in/ahoangtran/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn profile"
        title="LinkedIn profile"
      >
        <BsLinkedin className="header__socials-logo" />
      </a>
      <a
        href="https://github.com/Hoangtrana"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub profile"
        title="GitHub profile"
      >
        <FaGithub className="header__socials-logo" />
      </a>
    </nav>
  );
};
export default HeaderSocials;
