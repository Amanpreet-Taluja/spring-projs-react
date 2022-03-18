import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Switch, withStyles } from "@material-ui/core";
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions";
import { grey } from "@material-ui/core/colors";
function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");
  const [light, setLight] = useState(false);
  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(meanings);
  useEffect(() => {
    dictionaryApi();
  }, [word, category]);
  return (
    <div
      className="App"
      style={{
        height: "100vh",
        backgroundColor: light ? "#fff" : "#282c34",
        color: light ? "black" : "white",
        transition:'all 0.5s linear'
      }}
    >
      <Container
        maxWidth="md"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyContent: "space-evenly",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 50,
            paddingTop: "10px",
          }}
        >
          <span>{!light ? "Light " : "Dark "} Mode</span>
          <DarkMode
            checked={light}
            onChange={() => setLight((prev) => !prev)}
          />
        </div>
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
          light={light}
        />
        {meanings && (
          <Definitions word={word} meanings={meanings} category={category} light={light} />
        )}
      </Container>
    </div>
  );
}

export default App;
