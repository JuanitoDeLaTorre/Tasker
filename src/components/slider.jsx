import React, { useState, useEffect } from 'react';
import './css/slider.css';

function Slider({onImportanceChange}) {
  const [sliderValue, setSliderValue] = useState(2);

  const handleSliderChange = (e) => {
    setSliderValue(e.target.value);
    onImportanceChange(sliderValue)
  };

  useEffect(() => {
    onImportanceChange(sliderValue)
  }, [sliderValue])

  return (
    <div className="slider-container">
      <input
        type="range"
        value={sliderValue}
        onChange={handleSliderChange}
        min="0"
        max="10"
        step="1"
      />
      <div className="slider-value">{sliderValue}</div>
    </div>
  );
}

export default Slider;