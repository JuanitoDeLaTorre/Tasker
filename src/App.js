import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect } from "react";

import Dropdown from "./components/dropdown";
import Slider from "./components/slider";
import Timer from "./components/timer";

function App() {
  const [timeOfDay, setTimeOfDay] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [inputValue, setInputValue] = useState(selectedOption);
  const [inputTime, setInputTime] = useState(0);
  const [inputImportance, setInputImportance] = useState(0);
  const [timerStart, setTimerStart] = useState(false);

  const handleOptionChange = (newOption) => {
    setSelectedOption(newOption);
    setInputValue(newOption);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTimeChange = (e) => {
    if (e.target.innerHTML === "10m") {
      setInputTime(10);
    } else if (e.target.innerHTML === "15m") {
      setInputTime(15);
    } else if (e.target.innerHTML === "30m") {
      setInputTime(30);
    } else if (e.target.innerHTML === "1hr") {
      setInputTime(60);
    } else if (e.target.innerHTML === "2hr") {
      setInputTime(120);
    }
  };

  const handleImportanceChange = (newImportance) => {
    setInputImportance(newImportance);
  };

  const handleStartTimer = () => {
    setTimerStart(true);
  };

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 9 && currentTime < 12) {
      setTimeOfDay("Morning");
    } else if (currentTime >= 12 && currentTime < 17) {
      setTimeOfDay("Afternoon");
    } else {
      setTimeOfDay("Evening");
    }
  }, []);

  return (
    <div className="App">
      <div className="body">
        <div className="mainWidget">
          <h1 style={{ margin: "20px 0px 10px 0px" }}>Good {timeOfDay}!</h1>
          <input
            placeholder="What do you want to accomplish?"
            className="textBox"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
          />
          <Dropdown onOptionChange={handleOptionChange} />
          <h4>Time Limit</h4>
          <div
            className="bubbleContainer"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <button
              onClick={handleTimeChange}
              className={`timeBubble ${
                inputTime === 10 ? "selectedBubble" : ""
              }`}
            >
              10m
            </button>
            <button
              onClick={handleTimeChange}
              className={`timeBubble ${
                inputTime === 15 ? "selectedBubble" : ""
              }`}
            >
              15m
            </button>
            <button
              onClick={handleTimeChange}
              className={`timeBubble ${
                inputTime === 30 ? "selectedBubble" : ""
              }`}
            >
              30m
            </button>
            <button
              onClick={handleTimeChange}
              className={`timeBubble ${
                inputTime === 60 ? "selectedBubble" : ""
              }`}
            >
              1hr
            </button>
            <button
              onClick={handleTimeChange}
              className={`timeBubble ${
                inputTime === 120 ? "selectedBubble" : ""
              }`}
            >
              2hr
            </button>
          </div>
          <h4>Importance</h4>
          <Slider onImportanceChange={handleImportanceChange} />
          <div className="goButton" onClick={() => handleStartTimer()}>
            Go and Do!
          </div>
        </div>
        <Timer start={timerStart} minutesProp={inputTime} />
      </div>
    </div>
  );
}

export default App;
