// src/components/About.jsx
import React from 'react';
import Header from components
import Footer from components

const About = () => {
  return (
    <div className="bg-dark text-light">
      <Header />
      <main className="container-fluid bg-secondary text-center">
        <div id="picture" className="picture-box">
          <img src="placeholder.jpg" alt="random" />
        </div>
        <p>Picture perfect is an online coloring book that allows the artist to select a picture to color.</p>
        <p>Start by choosing a picture and then a color. Each section of the picture you can choose a different color.</p>
        <div id="quote" className="quote-box bg-light text-dark">
          <p className="quote">Words are cheap. Show me the code.</p>
          <p className="author">Linus Torvalds</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
