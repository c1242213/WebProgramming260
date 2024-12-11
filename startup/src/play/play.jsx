import React, { useState } from 'react';
import './play.css';

export function Play({ userName }) {
  const [selectedColor, setSelectedColor] = useState('#000000'); // Default black color

  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300', '#8E44AD'];

  const handleSvgClick = (event) => {
    const target = event.target;

    // Check if the clicked element is a valid SVG shape
    if (['path', 'circle', 'rect', 'polygon', 'line', 'ellipse'].includes(target.tagName)) {
      target.setAttribute('fill', selectedColor); // Update the fill attribute with the selected color
    }
  };

  return (
    <div className='play-container'>
      <h2>Color the picture!</h2>

      {/* SVG Container */}
      <div className='svg-container'>
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="coloring-svg"
          onClick={handleSvgClick} // Attach the click handler
        >
          <title>Simple Dog</title>

          {/* Body */}
          <ellipse cx="50" cy="60" rx="20" ry="15" fill="white" stroke="#000000" strokeWidth="2" />

          {/* Head */}
          <circle cx="50" cy="35" r="10" fill="white" stroke="#000000" strokeWidth="2" />

          {/* Left Ear */}
          <ellipse cx="40" cy="30" rx="4" ry="7" fill="white" stroke="#000000" strokeWidth="2" />

          {/* Right Ear */}
          <ellipse cx="60" cy="30" rx="4" ry="7" fill="white" stroke="#000000" strokeWidth="2" />

          {/* Left Eye */}
          <circle cx="47" cy="35" r="2" fill="white" stroke="#000000" strokeWidth="1" />
          {/* Left Eye pupil */}
          <circle cx="47" cy="35" r="1" fill="black" />

          {/* Right Eye */}
          <circle cx="53" cy="35" r="2" fill="white" stroke="#000000" strokeWidth="1" />

          {/* Right Eye pupil */}
          <circle cx="53" cy="35" r="1" fill="black" />

          {/* Nose */}
          <circle cx="50" cy="38" r="1.5" fill="black" />

          {/* Mouth */}
          <path d="M48 40 Q50 42, 52 40" stroke="#000000" strokeWidth="1" fill="none" />

          {/* Legs (Circular) */}
          <circle cx="45" cy="75" r="3" fill="white" stroke="#000000" strokeWidth="2" />
          <circle cx="55" cy="75" r="3" fill="white" stroke="#000000" strokeWidth="2" />
        </svg>
      </div>

      {/* Color Picker */}
      <div className='color-picker'>
        {colors.map((color) => (
          <button
            key={color}
            className={`color-square ${selectedColor === color ? 'selected' : ''}`}
            style={{
              backgroundColor: color,
              width: '50px',
              height: '50px',
              border: selectedColor === color ? '4px solid #000' : '2px solid #fff',
              cursor: 'pointer',
            }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>

      {/* Selected Color Display */}
      <div className='controls'>
        <h3 style={{ color: 'black' }}>
          Selected Color: <span>{selectedColor}</span>
        </h3>
      </div>
    </div>
  );
}
