import React, { useEffect, useState } from "react";
import "./sidebarstyle.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import {
  BsBriefcase,
  BsChatQuote,
  BsCodeSlash,
  BsEnvelope,
  BsGrid,
} from "react-icons/bs";
import MyLogo from "../../assets/MyLogo.svg";

const navigationItems = [
  { id: "home", label: "Home", shortLabel: "Home", Icon: AiOutlineHome },
  { id: "about", label: "About", shortLabel: "About", Icon: AiOutlineUser },
  {
    id: "experiences",
    label: "Work Experience",
    shortLabel: "Experience",
    Icon: BsBriefcase,
  },
  {
    id: "technical-skills",
    label: "Technical Skills",
    shortLabel: "Skills",
    Icon: BsCodeSlash,
  },
  {
    id: "projects",
    label: "Featured Work",
    shortLabel: "Projects",
    Icon: BsGrid,
  },
  {
    id: "testimonials",
    label: "Professional References",
    shortLabel: "References",
    Icon: BsChatQuote,
  },
  {
    id: "contact",
    label: "Contact",
    shortLabel: "Contact",
    Icon: BsEnvelope,
  },
];

const Sidebar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + window.innerHeight * 0.28;
      let currentSection = "home";

      navigationItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top + window.scrollY <= marker) {
          currentSection = id;
        }
      });

      setActiveSection((current) =>
        current === currentSection ? current : currentSection
      );
    };

    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  const handleNavigation = (event, id) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
      return;
    }

    const section = document.getElementById(id);
    if (!section) return;

    event.preventDefault();
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    section.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <aside className="sidebar" aria-label="Portfolio navigation">
      <a className="sidebar__brand" href="#home" aria-label="Hoang Tran, home">
        <img src={MyLogo} alt="" />
      </a>
      <nav className="sidebar__nav" aria-label="Main navigation">
        {navigationItems.map(({ id, label, shortLabel, Icon }) => {
          const isActive = activeSection === id;

          return (
            <a
              className={`sidebar__link${isActive ? " active" : ""}`}
              href={`#${id}`}
              key={id}
              aria-label={label}
              aria-current={isActive ? "location" : undefined}
              title={label}
              onClick={(event) => handleNavigation(event, id)}
            >
              <Icon className="sidebar__icon" aria-hidden="true" />
              <span className="sidebar__label">{shortLabel}</span>
            </a>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
