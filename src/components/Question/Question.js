import { Button } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Question.css";
import ErrorMessage from "../Error/Error";

const Question = ({
  currQues,
  setCurrQues,
  questions,
  options,
  correct,
  setScore,
  score,
  // setQuestions,
  amount
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSelect = (i) => {
    if (selected === i && selected === correct) return "select";
    else if (selected === i && selected !== correct) return "wrong";
    else if (i === correct) return "select";
  };

  const handleCheck = (i) => {
    setSelected(i);
    if (i === correct) setScore(score + 1);
    setError(false);
  };

  const handleNext = () => {
    console.log(amount);
    console.log(currQues);
    if (currQues >=amount-1) {
      history.push("/result");
    } else if (selected) {
      setCurrQues(++currQues);
      setSelected();
    } else setError("Please select an option first");
  };

  const handleQuit = () => {
    setCurrQues(0);
    // setQuestions();
  };

  return (
    <div className="question">
      <h2>Question {currQues + 1} :</h2>

      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          {options &&
            options.map((i) => (
              <button
                className={`singleOption  ${selected && handleSelect(i)}`}
                key={i}
                onClick={() => handleCheck(i)}
                disabled={selected}
              >
                {i}
              </button>
            ))}
        </div>
        <div className="controls">
          <Button
            variant="contained"
            color="secondary"
            size="medium"
            style={{ width: 185 }}
            href="/"
            onClick={() => handleQuit()}
          >
            Quit
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            style={{ width: 185 }}
            onClick={handleNext}
          >
            {currQues > amount ? "Submit" : "Next Question"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Question;
