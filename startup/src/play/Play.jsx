import React, { useState } from 'react';
import './play.css';
import dogImage from '../assets/dog.svg'; // Example path

export function Play() {
  const [selectedColor, setSelectedColor] = useState('#000000');

  // Available colors
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300', '#8E44AD'];

  // Handle click on SVG parts
  const handleSvgClick = (event) => {
    if (event.target.tagName === 'path' || event.target.tagName === 'rect' || event.target.tagName === 'circle' || event.target.tagName === 'polygon') {
      event.target.setAttribute('fill', selectedColor);
    }
  };

  return (
    <main className='play-container'>
      <h2>Color the Dog!</h2>

      <div className='svg-container' onClick={handleSvgClick}>
        <object
          type='image/svg+xml'
          data={dogImage}
          className='coloring-svg'
          aria-label='Dog Image'
        />
      </div>

      <div className='color-picker'>
        {colors.map((color) => (
          <button
            key={color}
            className='color-square'
            style={{ backgroundColor: color }}
            onClick={() => setSelectedColor(color)}
          />
        ))}
      </div>
    </main>
  );
}
