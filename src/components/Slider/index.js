import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Slider.scss'; // Import du fichier Sass

function Slider({ images, currentIndex, setCurrentIndex }) {
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const showChevrons = images.length > 1;

  return (
    <div className="slider-container"> {/* Utilisation de la classe CSS */}
      {showChevrons && (
        <div className="slider-chevron prev-chevron" onClick={prevImage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      )}
      <img className="slider-image" src={images[currentIndex]} alt="" />
      {showChevrons && (
        <div className="slider-chevron next-chevron" onClick={nextImage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      )}
    </div>
  );
}

export default Slider;
