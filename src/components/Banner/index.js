import React from 'react';
import '../../styles/Banner.scss';

function Banner({ imageSrc, altText, responsive }) {
  return (
    <div className={`banner-container ${responsive ? 'responsive' : ''}`}>
      <img src={imageSrc} alt={altText} />
    </div>
  );
}

export default Banner;