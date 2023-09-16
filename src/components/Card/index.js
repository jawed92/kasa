import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  overflow: hidden;
  height: 230px;
  background-color: #FF6060;
`;

const Title = styled.h2`
  text-decoration: none;
  color: #FFFFFF;
`;

const Image = styled.img`
  width: 100%; 
  height: auto; 
`;

function Card({ id, title, imageSrc }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/presentation/${id}`);
  };
  
  return (
    <CardContainer onClick={handleCardClick}>
      <Link to={`/presentation/${id}`}>
        <div className="imageCard">
          <Image img src={imageSrc} alt="" />
        </div>
        <div className="title">
          <Title>{title}</Title>
        </div>
      </Link>
    </CardContainer>
  );
}

export default Card;
