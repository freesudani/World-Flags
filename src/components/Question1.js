import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Question.css";
import "./button.css";

const Question1Variant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    y: "-15vw",
  },
  visible: {
    opacity: 1,
    x: "-29vw",
    y: "-15vw",
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

export const Question1 = () => {
  return (
    <motion.div
      className="question-box"
      variants={Question1Variant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="question-flag">
        <img alt="photo" />
      </div>
      <div className="question-option">
        <p>Option 1</p>
        <p>Option 2</p>
        <p>Option 3</p>
        <p>Option 4</p>
      </div>
      <div className="button-container">
        <Link to="">
          <button className="btn">Proceed</button>
        </Link>
        <Link to="/">
          <button className="btn">Exit</button>
        </Link>
      </div>
    </motion.div>
  );
};
