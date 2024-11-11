// src/components/ColorableSVG.jsx
import React, { useState } from 'react';
import './ColorableSVG.css';

const colors = [
  '#800080', // Purple
  '#008000', // Green
  '#FFFF00', // Yellow
  '#FF0000', // Red
  '#FFA500', // Orange
  '#0000FF', // Blue
  '#000000', // Black
  '#FFFFFF', // White
];

const ColorableSVG = ({ SVGComponent }) => {
  const [selectedColor, setSelectedColor] = useState('#000000');

  const handlePaletteClick = (color) => {
    setSelectedColor(color);
  };

  const handleShapeClick = (event) => {
    const target = event.target;
    if (target instanceof SVGElement) {
      target.setAttribute('fill', selectedColor);
    }
  };

  return (
    <div className="colorable-svg-container">
      <div className="color-palette">
        {colors.map((color) => (
          <div
            key={color}
            className="color-swatch"
            style={{ backgroundColor: color }}
            onClick={() => handlePaletteClick(color)}
          />
        ))}
      </div>

      <p>Select a color from the palette, then start coloring.</p>

      {/* Render the selected SVG, passing handleShapeClick as onClick */}
      {SVGComponent && <SVGComponent onClick={handleShapeClick} />}
    </div>
  );
};

export default ColorableSVG;
