import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./backtotop.css";

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      const shouldShow = window.scrollY > 300;
      setIsVisible((visible) =>
        visible === shouldShow ? visible : shouldShow
      );
    };

    window.addEventListener("scroll", updateVisibility, { passive: true });
    updateVisibility();

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      type="button"
      className="back-to-top"
      aria-label="Back to top"
      title="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaArrowUp aria-hidden="true" />
    </button>
  );
};

export default BackToTop;
