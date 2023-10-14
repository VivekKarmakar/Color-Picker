import React, { useState } from 'react';

const ColorPicker = ({ colors }) => {
  const [isColorListVisible, setIsColorListVisible] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setIsColorListVisible(false);
    document.querySelector('.color-picker-container').style.backgroundColor = color; // Change background color of the container
  };

  return (
    <div className="color-picker-container">
      <button className="color-button" onClick={() => setIsColorListVisible(!isColorListVisible)}>
        Pick a color
      </button>
      {isColorListVisible && (
        <div style={{ marginTop: '10px' }}>
          {colors.map((color, index) => (
            <div
              key={index}
              className="color-square"
              style={{
                backgroundColor: color,
              }}
              onClick={() => handleColorClick(color)}
            ></div>
          ))}
        </div>
      )}
      {selectedColor && <p>You picked: {selectedColor}</p>}
    </div>
  );
};

export default ColorPicker;
