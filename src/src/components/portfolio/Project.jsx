import "./portfolio.css";

import React from "react";

const Project = ({ data }) => {
  return (
    <article className="portfolio__item" key={id}>
      <div className="portfolio__item-image">
        <img src={image} alt={title} className="portfolio_images" />
      </div>

      <div className="portfolio__item-cta">
        <h3>{title}</h3>
        <button>
          <a href={demo} className="btn btn-primary" target="_blank">
            See Demo
          </a>
        </button>
      </div>
    </article>
  );
};

export default Project;
