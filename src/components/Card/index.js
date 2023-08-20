import React from 'react';
import { Link } from 'react-router-dom';
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

function Card({ to, title, imageSrc }) {
  return (
    <CardContainer>
      <Link to={to}>
        <div className="imageCard">
          <img src={imageSrc} alt="" />
        </div>
        <div className="title">
          <Title>{title}</Title>
        </div>
      </Link>
    </CardContainer>
  );
}

export default Card;
