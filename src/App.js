import { useEffect, useState } from "react";
import "./App.css";
import { Starting } from "./components/Starting";
import { Instructions } from "./components/Instructions";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Question } from "./components/Question";
import FinalScore from "./components/FinalScore";

function App() {
  const location = useLocation();
  const [countries, setCountries] = useState([]);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState({
    image: "",
    correctAnswer: "",
    options: [],
  });

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/all"
      );
      console.log(response);

      const data = await response.json();
      console.log(data);
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (countries === []) {
      return;
    }

    fetchCountries();
  }, []);
  console.log(countries);

  useEffect(() => {
    const TestQuestions = [];
    for (let i = 0; i < 5; i++) {
      let Random1 = countries[Math.floor(Math.random() * 250)];
      let Random2 = countries[Math.floor(Math.random() * 250)];
      let Random3 = countries[Math.floor(Math.random() * 250)];
      let Random4 = countries[Math.floor(Math.random() * 250)];
      let Random5 = countries[Math.floor(Math.random() * 250)];
      setQuestions({
        image: Random1.image,
        correctAnswer: Random1.name,
        options: [
          correctAnswer,
          Random2.name,
          Random3.name,
          Random4.name,
          Random5.name,
        ],
      });
      TestQuestions.push(questions);
    }
    return TestQuestions;
  }, [countries]);

  const QuestionsList = TestQuestions.map((q) => ({
    ...q,
    options: q.options.sort(() => 0.5 - Math.random()),
  }));

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
            <Question
              score={score}
              setScore={setScore}
              QuestionsList={QuestionsList}
            />
          </Route>
          <Route path="/finalscore">
            <FinalScore score={score} setScore={setScore} />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
