import React from "react";
import "./portfolio.css";
import finnishjobsearch from "../../assets/finnishjobsearch.png";
import moviesearch from "../../assets/moviesearch.PNG";
import rabbitcounter from "../../assets/rabbitcounter.png";
import scoreboard from "../../assets/scoreboard.PNG";
import tenzzie from "../../assets/tenzzie.PNG";
import java from "../../assets/java.PNG";

const data = [
  {
    id: 6,
    image: finnishjobsearch,
    title: "Finnish IT Job Market Analysis",
    github: "https://github.com/Hoangtrana/finnish-it-job-market-analysis",
    tech: ["Python", "Pandas", "Data Visualization"],
    description:
      "An exploratory analysis of Finnish IT job postings using Python, Pandas, and data visualization.",
  },
  {
    id: 1,
    image: moviesearch,
    title: "Movie Search App",
    github: "https://github.com/Hoangtrana/MovieSearch",
    demo: "https://reactthemoviedbsearch.netlify.app/",
    tech: ["React", "JavaScript", "TMDB API"],
    description: "A movie search app built with React that uses The Movie Database API.",
  },
  {
    id: 2,
    image: rabbitcounter,
    title: "Rabbit Counter",
    github: "https://github.com/Hoangtrana/rabbit-counter",
    demo: "https://rabbits-counter.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "A rabbit counter app built with HTML, CSS, and JavaScript.",
  },

  {
    id: 3,
    image: tenzzie,
    title: "Tenzies Game",
    github: "https://github.com/Hoangtrana/tenzies-game",
    demo: "https://tenzzie-game.netlify.app/",
    tech: ["React", "JavaScript"],
    description: "A Tenzies game built with React and JavaScript.",
  },

  {
    id: 4,
    image: scoreboard,
    title: "Basketball Scoreboard",
    github: "https://github.com/Hoangtrana/basketball-scoreboard",
    demo: "https://basketball-score-board.netlify.app/",
    tech: ["HTML", "CSS", "JavaScript"],
    description: "A basketball scoreboard web app built with HTML, CSS, and JavaScript.",
  },

  {
    id: 5,
    image: java,
    title: "Office Reservation Application",
    github: "https://github.com/Hoangtrana/reservationJavaApp",
    tech: ["Java", "JavaFX", "SceneBuilder", "MariaDB"],
    description: "An office reservation application built with JavaFX, SceneBuilder, Java, and MariaDB.",
  },
];

function Portfolio() {
  return (
    <section id="projects">
      <h5>My projects</h5>
      <h2>Featured Work</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo, tech, description }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} className="portfolio_images" />
              </div>

              <div className="portfolio__item-cta">
                <h4>{title}</h4>
                <p className="portfolio__description">{description}</p>
                <ul className="portfolio__tags" aria-label={`${title} technologies`}>
                  {tech.map((technology) => (
                    <li className="techTag" key={technology}>{technology}</li>
                  ))}
                </ul>
                <div className="portfolio__actions">
                  {demo && (
                    <a href={demo} className="btn btn-primary portfolio__demo" target="_blank" rel="noreferrer">
                      Live Demo
                    </a>
                  )}
                  {github && (
                    <a href={github} className="portfolio__source" target="_blank" rel="noreferrer">
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Portfolio;
