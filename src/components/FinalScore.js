import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { QuestionsList } from "../data/Q1data";
import "./FinalScore.css";

const backdropVariant = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

const FinalScoreVariant = {
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

const FinalScore = ({ gettingfs }) => {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowModal(true);
    }, 2000);
  }, [setShowModal]);
  return (
    <>
      {showModal && (
        <motion.div
          className="backdrop"
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          exit="hidden"
        />
      )}
      <motion.div
        className="finalscore-box"
        variants={FinalScoreVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <p>
          {`You scored ${gettingfs.result} out of ${QuestionsList.length}`}{" "}
        </p>
      </motion.div>
    </>
  );
};

export default FinalScore;
