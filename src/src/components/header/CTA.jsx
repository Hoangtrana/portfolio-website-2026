import React from "react";
import Hoang_Tran_CV from "../../assets/Hoang_Tran_CV.pdf";
import { motion } from "framer-motion";
import "./header.css";
const CTA = () => {
  return (
    <div className="cta">
      <motion.a
        href={Hoang_Tran_CV}
        download
        className="btn"
        whileHover={{
          scale: 1.05,
          textShadow: "0px 0px rgb(255,255,255)",
          boxShadow: "0px 0px rgb(255,255,255)",
        }}
      >
        Download CV
      </motion.a>
      {/*<a href="#contact" className="btn-primary">
        Let's Talk
      </a> */}
    </div>
  );
};

export default CTA;
