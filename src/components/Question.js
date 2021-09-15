import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { QuestionsList } from "../data/Q1data";
import QuestionOption from "./QuestionOption";
import "./Question.css";
import "./button.css";
import transitionVariants from "./transitionVariants";

export const Question = (props) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [haveAnswered, setHaveAnswered] = useState(false);

  const AnsweredQuestion = (IsitCorrect) => {
    setHaveAnswered(true);
    const nextQuestion = currentQuestion + 1;

    if (IsitCorrect) {
      props.setScore(props.score + 1);
    }
    setTimeout(() => {
      if (nextQuestion < props.QuestionsList.length) {
        setCurrentQuestion(nextQuestion);
      } else {
        setShowScore(true);
      }
      setHaveAnswered(false);
    }, 50);
  };

  return (
    <motion.div
      className="question-box modal"
      variants={transitionVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="show-score">
        <div className="score-section">
          {`You're in question #${currentQuestion + 1} out of ${
            props.QuestionsList.length
          }`}
        </div>
      </div>
      {!showScore && (
        <motion.div className="question-flag">
          <img src={props.QuestionsList[currentQuestion].image} alt="photo" />
        </motion.div>
      )}
      {!showScore ? (
        <div className="question-heading">
          <h1>Pick The Right Country's Flag</h1>
        </div>
      ) : (
        <p> Questions finished</p>
      )}
      {!showScore && (
        <div className="question-option">
          {props.QuestionsList[currentQuestion].options.map((option, index) => {
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
      )}
      <div className="button-container">
        {!showScore && (
          <Link to="/">
            <button className="btn">Exit</button>
          </Link>
        )}
        {showScore && (
          <Link to="/finalscore">
            <button className="btn">Show Score</button>
          </Link>
        )}
      </div>
    </motion.div>
  );
};
