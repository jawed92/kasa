import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/Card.scss'; 

function Card({ id, title, imageSrc }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/presentation/${id}`);
  };

  console.log(title);

  return (
    <div className="card-container" onClick={handleCardClick}>
      <Link to={`/presentation/${id}`}>        
          <img src={imageSrc} alt="" className='image'/>
          <h2 className="titleCard">{title}</h2>
      </Link>
    </div>
  );
}

export default Card;
