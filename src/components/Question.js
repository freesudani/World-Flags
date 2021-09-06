import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { QuestionsList } from "../data/Q1data";
import QuestionOption from "./QuestionOption";
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

export const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [haveAnswered, setHaveAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const AnsweredQuestion = (IsitCorrect) => {
    setHaveAnswered(true);
    const nextQuestion = currentQuestion + 1;

    if (IsitCorrect) {
      setScore(score + 1);
    }
    setTimeout(() => {
      if (nextQuestion < QuestionsList.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
      setHaveAnswered(false);
    }, 500);
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
          <div className="score-section">
            {`You're in question #${currentQuestion + 1} out of ${
              QuestionsList.length
            }`}
          </div>
        )}
      </div>
      <motion.div className="question-flag">
        <img src={QuestionsList[currentQuestion].image} alt="photo" />
      </motion.div>

      <div className="question-heading">
        <h1>Pick The Right Country's Flag</h1>
      </div>
      <div className="question-option">
        {QuestionsList[currentQuestion].options.map((option, index) => {
          return (
            <QuestionOption
              key={index}
              correctness={option.IsitCorrect}
              parentFunction={AnsweredQuestion}
              defaultClass="question-option-paragraph"
              haveAnswered={haveAnswered}
              text={option.Answertext}
            />
          );
        })}
      </div>
      <div className="button-container">
        <Link to="/">
          <button className="btn">Exit</button>
        </Link>
      </div>
      {currentQuestion + 2 === QuestionsList.length && (
        <div className="final-score">
          <h1>Congratulations</h1>
          <p>{`You scored ${score} out of ${QuestionsList.length}`} </p>
        </div>
      )}
    </motion.div>
  );
};
