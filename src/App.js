import React, { useState } from "react";
import "./App.css";
import { Starting } from "./components/Starting";
import { Instructions } from "./components/Instructions";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Question } from "./components/Question";
import FinalScore from "./components/FinalScore";

function App() {
  const location = useLocation();

  const gettingfs = (goal) => {
    let result = goal;
    return result;
  };

  return (
    <div className="App">
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <Starting />
          </Route>
          <Route path="/instructions">
            <Instructions />
          </Route>
          <Route path="/Question">
            <Question gettingfs={gettingfs} />
          </Route>
          <Route path="/finalscore">
            <FinalScore gettingfs={gettingfs} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
