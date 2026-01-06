import React, { useEffect, useState } from 'react';
import './App.css';
import { MasonryPhotoAlbum } from "react-photo-album";
import { Routes, Route } from 'react-router-dom'; // Import Routes and Route
import "react-photo-album/masonry.css";
import images from "./photos.json";
import About from './About'; // Import About component
import Header from './Header'; 

function App() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPhotos = async () => { 
      const loadedPhotos = await Promise.all(
        images.map((image) => {
          const img = new Image();
          img.src = `./pictures/${image.filename}`;

          return new Promise((resolve) => {
            img.onload = () => {
              resolve({
                src: img.src,
                width: img.naturalWidth,
                height: img.naturalHeight,
                alt: image.alt,
              });
            };
            img.onerror = () => {
              resolve(null);
            };
          });
        })
      );

      setPhotos(loadedPhotos.filter(photo => photo !== null));
      setLoading(false); 
    };

    loadPhotos();
  }, []);

  if (loading) { 
    return <div>Loading...</div>;
  }

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={
        <MasonryPhotoAlbum
          photos={photos}
          columns={(containerWidth) => (containerWidth < 768 ? 1 : 2)}
        />
      } />
      <Route path="/about" element={<About />} /> {/* About page route */}
    </Routes>
    </>
  );
}

export default App;
