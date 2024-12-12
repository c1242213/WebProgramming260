import React, { useState, useEffect } from 'react';

export function Play({ userName }) {
  const [selectedColor, setSelectedColor] = useState('#000000');
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
    const socket = new WebSocket(`${protocol}://${window.location.host}`);
    setWs(socket);

    // Listen for messages from other clients
    socket.onmessage = (message) => {
      const msg = JSON.parse(message.data);
      if (msg.event === 'artwork-saved') {
        // Show sidebar message that another user saved an image
        showSidebarMessage(`${msg.user} just saved an image!`);
      }
    };

    return () => socket.close();
  }, []);

  const handleSave = async () => {
    const svgElement = document.querySelector('.coloring-svg');
    if (!svgElement) return;

    // Serialize SVG
    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgElement);
    const encodedData = encodeURIComponent(svgString);
    const dataUrl = `data:image/svg+xml;charset=utf-8,${encodedData}`;

    // Send to server
    const response = await fetch('/api/artwork', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageData: dataUrl })
    });

    if (response.ok) {
      const artworks = await response.json();
      // You now have the updated artworks list in `artworks`
      // If you want, store them in state or ignore.

      // Notify other clients via WebSocket
      if (ws && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify({ event: 'artwork-saved', user: userName.split('@')[0] }));
      }

      showSidebarMessage('You just saved your image!');
    } else {
      alert('Error saving image.');
    }
  };

  function showSidebarMessage(text) {
    // Implement a sidebar message like Simon does
    // Could set state and show a div on the side, then hide after timeout
    console.log(text);
  }

  // ...rest of your component (color picker, etc.)...
  return (
    <div className='play-container'>
      {/* Your SVG, color picker, controls */}
      <button onClick={handleSave}>Save My Artwork</button>
    </div>
  );
}
