import React, { useState } from 'react';

function Dropdown({onOptionChange}) {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    const newOption = event.target.value;
    setSelectedOption(newOption);

    // Call the callback function with the selected option
    onOptionChange(newOption);
  };

  return (
    <div>
        <label htmlFor="">Or choose from previous tasks: </label>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}

export default Dropdown;