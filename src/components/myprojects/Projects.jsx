import React from "react";
import java from "../../assets/java.PNG";
import moviesearch from "../../assets/moviesearch.PNG";
import rabbitcounter from "../../assets/rabbitcounter.png";
import scoreboard from "../../assets/scoreboard.PNG";
import tenzzie from "../../assets/tenzzie.PNG";
import finnishjobsearch from "../../assets/finnishjobsearch.png";
import SingleProject from "./SingleProject";
import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const data = [
  {
    id: 6,
    image: finnishjobsearch,
    title:
      "An exploratory analysis of Finnish IT job postings using Python, Pandas and data visualization.",
    github: "https://github.com/Hoangtrana/finnish-it-job-market-analysis",
    demo: "https://github.com/Hoangtrana/finnish-it-job-market-analysis",
  },
  {
    id: 5,
    image: moviesearch,
    title: "React app using themoviedb API to search movie",
    github: "https://github.com/Hoangtrana/MovieSearch",
    demo: "https://reactthemoviedbsearch.netlify.app/",
  },

  {
    id: 4,
    image: rabbitcounter,
    title: "Rabbit counter app with html, css, javascipt",
    github: "https://github.com/Hoangtrana/rabbit-counter",
    demo: "https://rabbits-counter.netlify.app/",
  },
  {
    id: 3,
    image: tenzzie,
    title: "Tenzies Game",
    github: "https://github.com/Hoangtrana/tenzies-game",
    demo: "https://tenzzie-game.netlify.app/",
  },

  {
    id: 2,
    image: scoreboard,
    title: "html, css, javascript web app",
    github: "https://github.com/Hoangtrana/basketball-scoreboard",
    demo: "https://basketball-score-board.netlify.app/",
  },

  {
    id: 1,
    image: java,
    title:
      "Office reservation application using JavaFX, SceneBuilder, Java and MariaDB",
    github: "https://github.com/Hoangtrana/reservationJavaApp",
  },
];

function Projects() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <div className=" container projects" ref={ref}>
      <h5>My Projetcs</h5>
      <h1>What I have built</h1>
      <div className="progress">
        <motion.div className="progressbar" style={{ scaleX }}></motion.div>
      </div>
      {data.map((item) => (
        <SingleProject item={data} key={item.id} />
      ))}
    </div>
  );
}

export default Projects;
