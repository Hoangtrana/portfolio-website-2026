import React from "react";
import "./about.css";
import avatar_2026 from "../../assets/avatar_2026.png";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={avatar_2026} alt="Illustrated portrait of Hoang Tran" />
          </div>
        </div>

        <div className="about__content">
          <p className="body_large">
            I'm a graduate of Karelia University of Applied Sciences, where I
            completed a Bachelor's degree in Business Information Technology
            in December 2023 with a focus on software development. I have
            practical experience from software development roles at Valamis
            and atFlow, with a technical background in frontend development,
            web technologies, databases, and development workflows.
          </p>
          <p className="body_large">
            I'm currently developing my Python and data analysis skills through
            practical exercises and a Finnish IT Job Market Analysis project.
            I'm interested in applying my technical background to data-oriented
            work. I bring an independent approach, quick learning, problem
            solving, adaptability, and teamwork.
          </p>
          <a href="#contact" className="btn btn-primary">
            Contact
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
