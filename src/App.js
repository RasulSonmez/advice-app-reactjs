import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
function App() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = async () => {
    try {
      const { data } = await axios.get("https://api.adviceslip.com/advice");

      setAdvice(data.slip.advice);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>Give Me Advice!</span>
        </button>
      </div>
    </div>
  );
}

export default App;
