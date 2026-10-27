import React from "react";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import About from "./components/about/About";

import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Portfolio from "./components/portfolio/Portfolio";
import { motion, useScroll } from "framer-motion";
import Projects from "./components/myprojects/Projects";
import Sidebar from "./components/sidebar/Sidebar";
import BackToTop from "./components/backtotop/BackToTop";

const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <Sidebar />
      <BackToTop />
      <main className="site-main">
        <Header />
        <About />
        <Experience />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default App;
