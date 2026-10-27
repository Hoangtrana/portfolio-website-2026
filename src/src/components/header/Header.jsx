import React from "react";
import "./header.css";
import CTA from "./CTA";
import Terminal from "./Terminal";
import { BiChevronsDown } from "react-icons/bi";
import { SiHey } from "react-icons/si";
import { motion, useReducedMotion } from "framer-motion";
import HeaderSocials from "./HeaderSocials";

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.04 * i },
  }),
};

const child = {
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
  hidden: {
    opacity: 0,
    x: 20,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrolldown: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 1,
      repeat: Infinity,
    },
  },
};

const Header = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <header id="home">
      <HeaderSocials />
      <div className="container header__container">
        <motion.div
          className="header__greeting"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.h5 className="headline_medium text-light" variants={child}>
            Hey
          </motion.h5>
          <SiHey aria-hidden="true" />
        </motion.div>
        <h2 className="headline_medium header__name">I'm Hoang Tran</h2>
        <motion.h2
          className="headline_large header__headline"
          variants={child}
          initial="hidden"
          animate="visible"
        >
          I'm software developer!
        </motion.h2>
        <CTA />
        <motion.div />

        <Terminal />
        <motion.a
          href="#about"
          className="scroll__down"
          variants={textVariants}
          animate={prefersReducedMotion ? { opacity: 1, y: 0 } : "scrolldown"}
        >
          <BiChevronsDown className="scroll__down_icon" />
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
