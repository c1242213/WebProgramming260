import React, { useEffect, useState } from 'react';

export function Scores() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    async function loadArtworks() {
      const response = await fetch('/api/artworks');
      if (response.ok) {
        const data = await response.json();
        setArtworks(data);
      }
    }
    loadArtworks();
  }, []);

  return (
    <div>
      <h2>Artworks</h2>
      {artworks.map((art, i) => (
        <div key={i}>
          <img src={art.imageData} alt={art.user} />
          <p>{art.user.split('@')[0]} - {new Date(art.date).toLocaleString()}</p>
        </div>
      ))}
    </div>
  );
}
