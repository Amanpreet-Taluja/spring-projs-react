import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [advice, setAdvice] = useState("");
  
  const fetchAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        setAdvice(response.data.slip.advice);
        console.log(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchAdvice();
  }, []);
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
