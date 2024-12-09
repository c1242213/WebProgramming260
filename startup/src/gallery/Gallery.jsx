// src/gallery/Gallery.jsx
import React from 'react';
import './gallery.css';

export function Gallery() {
  const [galleryItems, setGalleryItems] = React.useState([]);

  // Fetch gallery items from localStorage on component mount
  React.useEffect(() => {
    const galleryText = localStorage.getItem('gallery');
    if (galleryText) {
      setGalleryItems(JSON.parse(galleryText));
    }
  }, []);

  // Create rows for each gallery item, or show a message if empty
  const galleryRows = [];
  if (galleryItems.length) {
    for (const [i, item] of galleryItems.entries()) {
      galleryRows.push(
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{item.name}</td>
          <td>
            <img src={item.image} alt={item.name} className="gallery-image" />
          </td>
          <td>{item.date}</td>
        </tr>
      );
    }
  } else {
    galleryRows.push(
      <tr key="0">
        <td colSpan="4">No artwork in the gallery yet</td>
      </tr>
    );
  }

  return (
    <main className="container-fluid bg-secondary text-center">
      <h2 className="text-warning my-4">Gallery</h2>
      <table className="table table-warning table-striped-columns">
        <thead className="table-dark">
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Artwork</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>{galleryRows}</tbody>
      </table>
    </main>
  );
}
