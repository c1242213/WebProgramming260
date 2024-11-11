// src/components/Gallery.jsx
import React from 'react';
import Header from components
import Footer from components

const Gallery = () => {
  return (
    <div className="bg-dark text-light">
      <Header />
      <main className="container-fluid bg-secondary text-center py-5">
        <h2 className="text-warning my-4">Saved Artwork</h2>
        <table className="table table-warning table-striped-columns">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Artwork</th>
              <th>Artist</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <a href="https://github.com/username/repo/blob/main/artwork1.svg" target="_blank" rel="noopener noreferrer">
                  <img src="https://github.com/username/repo/raw/main/artwork1.svg" alt="Artwork 1" width="100" height="100" />
                </a>
              </td>
              <td>Player 1</td>
              <td>May 20, 2021</td>
            </tr>
            <tr>
              <td>2</td>
              <td>
                <a href="https://github.com/username/repo/blob/main/artwork2.svg" target="_blank" rel="noopener noreferrer">
                  <img src="https://github.com/username/repo/raw/main/artwork2.svg" alt="Artwork 2" width="100" height="100" />
                </a>
              </td>
              <td>Player 2</td>
              <td>June 2, 2021</td>
            </tr>
          </tbody>
        </table>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
