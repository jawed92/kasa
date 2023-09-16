import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const sliderStyles = {
  position: 'relative',
  overflow: 'hidden',
  height: '450px',
  with: '100%',
  margin: '50px',
  borderRadius: '25px',
};

const imageStyles = {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
};

const chevronStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  fontSize: '24px',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: 'white',
  padding: '10px',
  cursor: 'pointer',
};

const prevChevronStyles = {
  ...chevronStyles,
  left: '10px',
};

const nextChevronStyles = {
  ...chevronStyles,
  right: '10px',
};

function Slider({ images, currentIndex, setCurrentIndex }) {
  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const showChevrons = images.length > 1; // Vérifiez s'il y a plus d'une image dans 'pictures'

  return (
    <div style={sliderStyles}>
      {showChevrons && (
        <div style={prevChevronStyles} onClick={prevImage}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </div>
      )}
      <img style={imageStyles} src={images[currentIndex]} alt="" />
      {showChevrons && (
        <div style={nextChevronStyles} onClick={nextImage}>
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      )}
    </div>
  );
}

export default Slider;



