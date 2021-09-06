import React, { useState, useEffect } from "react";

function QuestionOption(props) {
  const [myColor, setMyColor] = useState("question-option-paragraph");

  const changeColor = () => {
    if (props.correctness) {
      setMyColor("correct-choice");
    } else {
      setMyColor("uncorrect-choice");
    }
  };

  useEffect(() => {
    if (!props.haveAnswered) {
      setMyColor("question-option-paragraph");
    }
  }, [props.haveAnswered]);

  return (
    <button
      className={`${myColor}`}
      onClick={() => {
        props.parentFunction(props.correctness);
        changeColor();
      }}
    >
      {props.text}
    </button>
  );
}

export default QuestionOption;
