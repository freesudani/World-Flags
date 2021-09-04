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
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(true);
  const [score, setScore] = useState(0);

  const AnsweredQuestion = (IsitCorrect) => {
    const nextQuestion = currentQuestion + 1;

    if (IsitCorrect) {
      setScore(score + 1);
    }
    if (nextQuestion < QuestionsList.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <motion.div
      className="question-box"
      variants={Question1Variant}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="show-score">
        {showScore ? (
          <div className="score-section">
            {`You scored ${score} out of ${QuestionsList.length}`}
          </div>
        ) : (
          <>// ... quiz question/answer markup</>
        )}
      </div>
      <div className="question-flag">
        <img src={QuestionsList[currentQuestion].image} alt="photo" />
      </div>

      <div className="question-heading">
        <h1>Pick The Right Country's Flag</h1>
      </div>
      <div className="question-option">
        {QuestionsList[currentQuestion].options.map((option, index) => {
          return (
            <button
              key={index}
              className="question-option-paragraph"
              onClick={() => AnsweredQuestion(option.IsitCorrect)}
            >
              {option.Answertext}
            </button>
          );
        })}
      </div>
      <div className="button-container">
        <button className="btn" onClick={() => AnsweredQuestion()}>
          Proceed
        </button>

        <Link to="/">
          <button className="btn">Exit</button>
        </Link>
      </div>
    </motion.div>
  );
};
