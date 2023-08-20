import React from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import homeBannerImage from '../../assets/baniere.png';
import styled from 'styled-components';

const FirstTitle = styled.h1`
position: absolute;
    top: 27%;
    width: 100%;
    font-size: 1rem;
    color: #FFFFFF;
    text-align: center; 
`
const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 30px;
  border-radius: 15px;
  background-color: #f6f6f6;
`;

function Home() {
  return (
    <div className="app">
      <Banner imageSrc={homeBannerImage} altText="Home Banner" />
        <FirstTitle><h1>Chez vous et partout ailleurs</h1></FirstTitle>
      <main id="mainIndex">
          <GridContainer>
        <Card to="/presentation" title="Titre de la location" imageSrc="" />
          <Card to="#" title="Titre de la location" imageSrc="" />
          <Card to="#" title="Titre de la location" imageSrc="" />
          <Card to="#" title="Titre de la location" imageSrc="" />
          <Card to="#" title="Titre de la location" imageSrc="" />
          <Card to="#" title="Titre de la location" imageSrc="" />
         </GridContainer>
      </main>
      
    </div>
  );
}

export default Home;
