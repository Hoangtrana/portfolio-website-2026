import React from "react";
import { motion } from "framer-motion";
const SingleProject = ({ item }) => {
  return (
    <section id="portfolio">
      <div className="container">
        <div className="wrapper">
          <div className="imagecontainer">
            <img src={item.image} alt="" />
          </div>
          <motion.div className="textContainer">
            <h2>{item.title}</h2>

            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SingleProject;
