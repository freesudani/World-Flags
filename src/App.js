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

  const fetchCountries = async () => {
    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://restcountries.eu/rest/v2/all"
      );
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  const getOptions = () => {
    const optionsArray = [
      countries[Math.floor(Math.random() * 250)],
      countries[Math.floor(Math.random() * 250)],
      countries[Math.floor(Math.random() * 250)],
      countries[Math.floor(Math.random() * 250)],
      countries[Math.floor(Math.random() * 250)],
    ];
    return optionsArray;
  };

  const CountryOptions1 = getOptions();
  const CountryOptions2 = getOptions();
  const CountryOptions3 = getOptions();
  const CountryOptions4 = getOptions();
  const CountryOptions5 = getOptions();

  const { name: CountryAName, flag: CountryAFlag } = CountryOptions1[0];
  const { name: CountryBName } = CountryOptions1[1];
  const { name: CountryCName } = CountryOptions1[2];
  const { name: CountryDName } = CountryOptions1[3];

  const { name: CountryEName, flag: CountryEFlag } = CountryOptions2[0];
  const { name: CountryFName } = CountryOptions2[1];
  const { name: CountryGName } = CountryOptions2[2];
  const { name: CountryHName } = CountryOptions2[3];

  const { name: CountryIName, flag: CountryIFlag } = CountryOptions3[0];
  const { name: CountryJName } = CountryOptions3[1];
  const { name: CountryKName } = CountryOptions3[2];
  const { name: CountryLName } = CountryOptions3[3];

  const { name: CountryMName, flag: CountryMFlag } = CountryOptions4[0];
  const { name: CountryNName } = CountryOptions4[1];
  const { name: CountryOName } = CountryOptions4[2];
  const { name: CountryPName } = CountryOptions4[3];

  const { name: CountryQName, flag: CountryQFlag } = CountryOptions5[0];
  const { name: CountryRName } = CountryOptions5[1];
  const { name: CountrySName } = CountryOptions5[2];
  const { name: CountryTName } = CountryOptions5[3];

  const QuestionsList = [
    {
      image: CountryAFlag,
      options: [
        { Answertext: CountryAName, IsitCorrect: true },
        { Answertext: CountryBName, IsitCorrect: false },
        { Answertext: CountryCName, IsitCorrect: false },
        { Answertext: CountryDName, IsitCorrect: false },
      ],
    },
    {
      image: CountryEFlag,
      options: [
        { Answertext: CountryEName, IsitCorrect: false },
        { Answertext: CountryFName, IsitCorrect: false },
        { Answertext: CountryGName, IsitCorrect: true },
        { Answertext: CountryHName, IsitCorrect: false },
      ],
    },
    {
      image: CountryIFlag,
      options: [
        { Answertext: CountryIName, IsitCorrect: false },
        { Answertext: CountryJName, IsitCorrect: true },
        { Answertext: CountryKName, IsitCorrect: false },
        { Answertext: CountryLName, IsitCorrect: false },
      ],
    },
    {
      image: CountryMFlag,
      options: [
        { Answertext: CountryMName, IsitCorrect: false },
        { Answertext: CountryNName, IsitCorrect: false },
        { Answertext: CountryOName, IsitCorrect: false },
        { Answertext: CountryPName, IsitCorrect: true },
      ],
    },
    {
      image: CountryQFlag,
      options: [
        { Answertext: CountryQName, IsitCorrect: true },
        { Answertext: CountryRName, IsitCorrect: false },
        { Answertext: CountrySName, IsitCorrect: false },
        { Answertext: CountryTName, IsitCorrect: false },
      ],
    },
  ];

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
