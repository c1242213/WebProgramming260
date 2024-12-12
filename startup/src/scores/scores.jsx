import React, { useEffect, useState } from 'react';
import './scores.css';

export function Scores() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('artworks');
    if (saved) {
      setArtworks(JSON.parse(saved));
    }
  }, []);

  return (
    <main className='container-fluid bg-secondary text-center'>
      <h2>Your Saved Artworks</h2>
      <div className='artwork-gallery'>
        {artworks.length > 0 ? (
          artworks.map((art, index) => (
            <div key={index} className='art-item'>
              <img
                src={art.imageData}
                alt={`Artwork by ${art.user}`}
                className='saved-art-img'
              />
              <p><strong>User:</strong> {art.user.split('@')[0]}</p>
              <p><strong>Date:</strong> {new Date(art.date).toLocaleString()}</p>
            </div>
          ))
        ) : (
          <p>No artworks saved yet. Go color something!</p>
        )}
      </div>
    </main>
  );
}
