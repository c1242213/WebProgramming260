import React, { useState, useEffect } from 'react';
import './play.css';

export function Play({ userName }) {
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [sidebarMessage, setSidebarMessage] = useState(null);

  useEffect(() => {
    // Connect to WebSocket just like the Simon example
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const ws = new WebSocket(`${protocol}://${window.location.host}`);

    ws.onmessage = (message) => {
      const msg = JSON.parse(message.data);
      if (msg.event === 'artwork-saved') {
        // Show the sidebar message
        setSidebarMessage(`${msg.data.user} just saved an image!`);
        // Optional: Hide the message after 5 seconds
        setTimeout(() => {
          setSidebarMessage(null);
        }, 5000);
      }
    };

    return () => ws.close();
  }, []);

  const handleSvgClick = (event) => {
    const target = event.target;
    if (['path', 'circle', 'rect', 'polygon', 'line', 'ellipse'].includes(target.tagName)) {
      target.setAttribute('fill', selectedColor);
    }
  };

  const handleSave = async () => {
    const svgElement = document.querySelector('.coloring-svg');
    if (!svgElement) return;

    // Serialize the SVG
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);
    const encodedData = encodeURIComponent(svgString);
    const dataUrl = `data:image/svg+xml;charset=utf-8,${encodedData}`;

    // Send to server instead of localStorage
    const response = await fetch('/api/artwork', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageData: dataUrl })
    });

    if (!response.ok) {
      alert('Error saving image.');
    }
  };

  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#FFC300', '#8E44AD'];

  return (
    <div className='play-container'>
      {sidebarMessage && (
        <div className='sidebar-message'>
          {sidebarMessage}
        </div>
      )}

      <h2>Color the picture!</h2>
      <div className='svg-container'>
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          className="coloring-svg"
          onClick={handleSvgClick}
        >
          <title>Simple Dog</title>
          <ellipse cx="50" cy="60" rx="20" ry="15" fill="white" stroke="#000000" strokeWidth="2" />
          <circle cx="50" cy="35" r="10" fill="white" stroke="#000000" strokeWidth="2" />
          <ellipse cx="40" cy="30" rx="4" ry="7" fill="white" stroke="#000000" strokeWidth="2" />
          <ellipse cx="60" cy="30" rx="4" ry="7" fill="white" stroke="#000000" strokeWidth="2" />
          <circle cx="47" cy="35" r="2" fill="white" stroke="#000000" strokeWidth="1" />
          <circle cx="47" cy="35" r="1" fill="black" />
          <circle cx="53" cy="35" r="2" fill="white" stroke="#000000" strokeWidth="1" />
          <circle cx="53" cy="35" r="1" fill="black" />
          <circle cx="50" cy="38" r="1.5" fill="black" />
          <path d="M48 40 Q50 42, 52 40" stroke="#000000" strokeWidth="1" fill="none" />
          <circle cx="45" cy="75" r="3" fill="white" stroke="#000000" strokeWidth="2" />
          <circle cx="55" cy="75" r="3" fill="white" stroke="#000000" strokeWidth="2" />
        </svg>
      </div>

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

      <div className='controls'>
        <h3 style={{ color: 'black' }}>
          Selected Color: <span>{selectedColor}</span>
        </h3>
      </div>

      <div className='controls'>
        <button onClick={handleSave}>Save My Artwork</button>
      </div>
    </div>
  );
}
