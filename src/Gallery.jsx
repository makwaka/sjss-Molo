import React, { useState } from 'react';
import Football from '../assets/football-team.jpg';
import Dance from '../assets/maasai-dance.jpg';
import Picnic from '../assets/picnic.jpg';
import Food from '../assets/food.jpg';

function Gallery() {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setFullScreenImage(imageSrc);
  };

  const handleCloseFullScreen = () => {
    setFullScreenImage(null);
  };

  return (
    <>
      <h1>In Pictures</h1>
      <p>These are some of the hobbies, interests, projects, and activities students are engaged in:</p>
      <hr />
      <div className="hobbies">
        <ul>
          <li className="item" onClick={() => handleImageClick(Football)}>
            <img src={Football} alt="Football team" loading="lazy" />
            <div className="caption">Sports</div>
          </li>
          <li className="item" onClick={() => handleImageClick(Dance)}>
            <img src={Dance} alt="Maasai dance" loading="lazy" />
            <div className="caption">Drama</div>
          </li>
          <li className="item" onClick={() => handleImageClick(Food)}>
            <img src={Food} alt="Students eating" loading="lazy" />
            <div className="caption">Health and Diet</div>
          </li>
          <li className="item" onClick={() => handleImageClick(Picnic)}>
            <img src={Picnic} alt="Students dancing" loading="lazy" />
            <div className="caption">Dancing</div>
          </li>
        </ul>
      </div>

      {fullScreenImage && (
        <div className="fullscreen-overlay" onClick={handleCloseFullScreen}>
          <img src={fullScreenImage} alt="Full Screen" className="fullscreen-image" />
        </div>
      )}
    </>
  );
}

export default Gallery;
