import React, { useState, useEffect } from "react";

function QuestionOption(props) {
  const [myColor, setMyColor] = useState(props.colors.default);

  const changeColor = () => {
    if (props.correctness) {
      setMyColor(props.colors.good);
    } else {
      setMyColor(props.colors.bad);
    }
  };

  useEffect(() => {
    if (!props.haveAnswered) {
      setMyColor(props.colors.default);
    }
  }, [props.haveAnswered]);

  return (
    <button
      className={`${props.defaultClass} bg-${myColor}-500 hover:bg-${myColor}-700`}
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
