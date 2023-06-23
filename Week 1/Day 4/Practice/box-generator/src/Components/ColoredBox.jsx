import React, { useState } from 'react';

const ColoredBox = () => {
  const [color, setColor] = useState('');
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setBoxes([...boxes, color]);
    setColor('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Color:
          <input
            type="text"
            value={color}
            onChange={(event) => setColor(event.target.value)}
          />
        </label>
        <button type="submit">Add Box</button>
      </form>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {boxes.map((boxColor, index) => (
          <div
            key={index}
            style={{
              backgroundColor: boxColor,
              width: '100px',
              height: '100px',
              margin: '10px',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ColoredBox;
