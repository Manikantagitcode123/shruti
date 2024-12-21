import React, { useState } from 'react';
import './App.css';

function App() {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(true); // When the button is clicked, display the image
  };

  return (
    <div className="app">
      {!showImage && (
        <header className="app-header">
          <h1 className="heading">
            Do you want to see moon ☾?
          </h1>
          <button className="impress-button" onClick={handleClick}>
            Click me!
          </button>
        </header>
      )}

      {showImage && (
        <div className="image-container">
          <img
            src="/photo/IMG_20241221_115416.jpg" // Your image source here
            alt="Impressing Image"
            className="impress-image"
          />
          <audio controls autoPlay className="audio-player">
            <source src="/song/Mayavi-(MusicJagat).mp3" type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
}

export default App;
