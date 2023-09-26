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
  const [previousTasks, setPreviousTasks] = useState([]);
  const [overriedStyle, setOverriedStyle] = useState({});

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

  const handleStartTask = () => {
    setTimerStart(true);

    if (!previousTasks.includes(inputValue)) {
      addTask(inputValue, inputImportance, 0);
    }

    setOverriedStyle({ backgroundColor: "rgb(24, 101, 73)" });
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

    fetch("http://localhost:4040/api/getTasks")
      .then((response) => response.json())
      .then((data) => {
        const extractedTaskNames = data.map((task) => task.taskName);
        setPreviousTasks(extractedTaskNames);
      })
      .catch((error) => {
        console.error("Error fetching task names:", error);
      });
  }, []);

  //////////////////////

  const taskData = {
    taskName: "Do something important",
    importance: 3,
    timesAccomplished: 0,
  };

  const addTask = async (taskName, importance, timesAccomplished) => {
    fetch("http://localhost:4040/api/addTask", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ taskName, importance, timesAccomplished }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Task added:", data.taskName);
      })
      .catch((error) => {
        console.error("Error adding task:", error);
      });
  };

  ////////////////////////////

  return (
    <div className="App">
      <div className="body">
        <div className="mainWidget" style={overriedStyle}>
          {timerStart ? (
            <Timer
              start={timerStart}
              minutesProp={inputTime}
              selectedOption={inputValue}
            />
          ) : (
            <>
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
              <div className="goButton" onClick={() => handleStartTask()}>
                Go and Do!
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
