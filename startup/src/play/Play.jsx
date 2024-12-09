// src/components/Play.jsx
import React from 'react';
import Header from components
import Footer from components

const Play = () => {
  return (
    <div className="bg-dark text-light">
      <Header />
      <main className="bg-secondary">
        <div className="players">
          Artist
          <span className="player-name">Mystery artist</span>
          <div id="player-messages">
            <div className="event"><span className="player-event">Linus</span> added to the gallery</div>
            <div className="event"><span className="player-event">Linus</span> started a new drawing</div>
            <div className="event"><span className="system-event">game</span> connected</div>
          </div>
        </div>

        <div className="sticky-title">
          <h2>Pick a Picture</h2>
        </div>

        <div className="image-grid">
          <img src="svg-images/farm-pig.svg" alt="SVG Image 1" className="img-choice" />
          <img src="svg-images/barn-farm.svg" alt="SVG Image 2" className="img-choice" />
          <img src="svg-images/horse-racing.svg" alt="SVG Image 3" className="img-choice" />
          <img src="svg-images/halloween-night-owl-on-a-branch.svg" alt="SVG Image 4" className="img-choice" />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Play;
