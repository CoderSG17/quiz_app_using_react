import axios from "axios";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";
import Result from "./Pages/Result/Result";

function App() {
  const [questions, setQuestions] = useState();
  const [name, setName] = useState();
  const [score, setScore] = useState(0);
  const [amount, setAmount] = useState();

  const fetchQuestions = async (category = "", difficulty = "",amount='') => {
    console.log(amount);
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
    );
    console.log(data);
    setQuestions(data.results);
    setAmount(amount);
  };

  return (
    <BrowserRouter>
      <div className="app" >
        <Header />
        <Switch>
          <Route path="/" exact>
            <Home
              name={name}
              setName={setName}
              fetchQuestions={fetchQuestions}
            />
          </Route>
          <Route path="/quiz">
            <Quiz
              name={name}
              questions={questions}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
              amount={amount}
              setAmount={setAmount}
            />
          </Route>
          <Route path="/result">
            <Result name={name} score={score}  amount={amount}/>
          </Route>
        </Switch>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
