import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { QuestionsList } from "../data/Q1data";
import "./Question.css";
import "./button.css";

const Question1Variant = {
  hidden: {
    opacity: 0,
    x: "-100vw",
    y: "-17vw",
  },
  visible: {
    opacity: 1,
    x: "-29vw",
    y: "-17vw",
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
  const [answer, setAnswer] = useState(false);
  const [wrong, setWrong] = useState(false);

  const ChoosenOption = (answer || wrong) && !(answer && wrong);

  return (
    <motion.div
      className="question-box"
      variants={Question1Variant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="question-flag">
        <img src={QuestionsList[0].image} alt="photo" />
      </div>
      <div className="question-heading">
        <h1>Pick The Right Country's Flag</h1>
      </div>
      <div className="question-option">
        {QuestionsList[0].options.map((option, index) => {
          <button key={index} className="question-option-paragraph">
            {option.Answertext}
          </button>;
        })}
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
