import React, { useState, useEffect } from 'react';

function Dropdown({onOptionChange}) {
  const [selectedOption, setSelectedOption] = useState('');
  const [taskNames, setTaskNames] = useState([]);

  //fill taskNames state array
  useEffect(() => {
    fetch('http://localhost:4040/api/getTasks')
      .then((response) => response.json())
      .then((data) => {
        const extractedTaskNames = data.map((task) => task.taskName);
        setTaskNames(extractedTaskNames);
      })
      .catch((error) => {
        console.error('Error fetching task names:', error);
      });
  }, []);

  const handleOptionChange = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);

    // Call the callback function with the selected option
    onOptionChange(newOption);
  };

  return (
    <div>
        <label htmlFor="">Or choose from previous tasks: </label>
        <select onChange={handleOptionChange}>
            <option value="">Select a task</option>
                {taskNames.map((taskName) => (
                    <option key={taskName} value={taskName}>
                    {taskName}
                    </option>
                ))}
        </select>
    </div>
  );
}

export default Dropdown;