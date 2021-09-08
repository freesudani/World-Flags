import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Starting.css";
import "./button.css";

const StartingVariant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    y: "-5vw",
  },
  visible: {
    opacity: 1,
    x: "-20vw",
    y: "-5vw",
    transition: {
      type: "spring",
      delay: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export const Starting = () => {
  return (
    <motion.div
      className="starting-box modal"
      variants={StartingVariant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>World Flag Quiz Test</h1>
      <Link to="/instructions">
        <button className="btn">
          <span>Start Quiz</span>
        </button>
      </Link>
    </motion.div>
  );
};
