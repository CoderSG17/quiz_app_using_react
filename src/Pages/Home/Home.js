import { Button, MenuItem, TextField } from "@material-ui/core";
import { useState } from "react";
import { useHistory } from "react-router";
import ErrorMessage from "../../components/Error/Error";
import Categories from "../../Data/Categories";
import "./Home.css";

const Home = ({ name, setName, fetchQuestions }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [amount, setAmount] = useState();
  const [error, setError] = useState(false);

  const history = useHistory();

  const handleSubmit = () => {
    console.log(amount);
    console.log(setAmount); 
    if (!category || !difficulty || !name || !amount) {
      setError(true);
      return;
    } else {
      setError(false);
      fetchQuestions(category, difficulty,amount);
      history.push("/quiz");
    }
  };

  return (
    <>
    <div className="content">
      <div className="settings">
        <span style={{ fontSize: 20 }}>Quiz Settings</span>
        <div className="settings__select">
          {error && <ErrorMessage>Please Fill all the fields</ErrorMessage>}
          <TextField
            style={{ marginBottom: 20 }}
            label="Enter Your Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            label="Select Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 20 }}
          >
            {Categories.map((elem) => (
              <MenuItem key={elem.category} value={elem.value}>
                {elem.category}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            label=" How many questions you want?"
            value={amount}
             type="number"
            variant="outlined"
            onChange={(e) => setAmount(e.target.value)}
          />
          {/* <label style={{paddingLeft:13 ,color:"red" ,textDecoration:"underline"}}> Max question limit is 20</label> */}
          <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginTop: 20 ,marginBottom:20}}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>
        </div>
      </div>
      <img src="/main.svg" className="banner" alt="quiz app" />
    </div>
    </>
  );
};

export default Home;
