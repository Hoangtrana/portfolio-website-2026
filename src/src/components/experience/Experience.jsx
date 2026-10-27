import React from "react";
import "./experience.css";

const experienceItems = [
  {
    date: "2025–Present",
    role: "Independent Development Projects",
    organization: "Independent Projects",
    responsibilities: [
      "Developing a Finnish IT Job Market Analysis project to explore recruitment trends and technical skill requirements.",
      "Practising Python, pandas, data cleaning, data exploration, and analysis through hands-on project work.",
    ],
  },
  {
    date: "2024–2025",
    role: "Software Developer Intern",
    organization: "atFlow",
    responsibilities: [
      "Gained practical experience working with web technologies in a development environment.",
      "Contributed to frontend implementation and backend and database tasks using PHP and MySQL.",
    ],
  },
  {
    date: "Aug 2022–Mar 2023",
    role: "Software Developer Trainee",
    organization: "Valamis Group",
    responsibilities: [
      "Contributed to the development and maintenance of a Liferay-based learning platform, including portlet work and product updates.",
      "Worked with SQL queries and Git-based development workflows, including Helm chart changelogs.",
      "Helped investigate and resolve escalated technical support issues.",
    ],
  },
];

const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["JavaScript", "React", "CSS", "Liferay"],
  },
  {
    title: "Backend & Databases",
    skills: ["PHP", "Python", "MySQL, SQL, PostgreSQL", "Node.js"],
  },
  {
    title: "Cloud & Development Workflows",
    skills: ["Azure", "Git", "DevOps"],
  },
];

const Experience = () => {
  return (
    <section id="experiences">
      <h5>Professional Background</h5>
      <h2>Work Experience</h2>

      <div className="container experience__timeline">
        {experienceItems.map(
          ({ date, role, organization, responsibilities }) => (
            <article className="experience__item" key={role}>
              <p className="experience__date">{date}</p>
              <div className="experience__item-content">
                <h3>{role}</h3>
                <p className="experience__organization">{organization}</p>
                <ul className="experience__responsibilities">
                  {responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </article>
          ),
        )}
      </div>

      <div className="container experience__skills" id="technical-skills">
        <h3>Technical Skills</h3>
        <div className="experience__skills-grid">
          {skillGroups.map(({ title, skills }) => (
            <article className="experience__skill-group" key={title}>
              <h4>{title}</h4>
              <div className="experience__skill-list">
                {skills.map((name) => (
                  <div className="experience__skill" key={name}>
                    <h5>{name}</h5>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
