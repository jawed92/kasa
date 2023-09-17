import React from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import homeBannerImage from '../../assets/baniere.png';
import styled from 'styled-components';
import logementsData from '../../data/logement.json';
import '../../styles/Home.scss'

const FirstTitle = styled.h1`
position: absolute;
top: 35%;
left: 50%;
transform: translate(-50%, -50%);
font-size: 1.7rem;
color: white;
padding: 20px;
white-space: nowrap;
`
const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  padding: 35px;
  margin: 50px;
  border-radius: 15px;
  background-color: #f6f6f6;
`;

function Home() {
  const firstSixLogements = logementsData.slice(0, 6);
  return (
    <div className="app">
      <div className="banner-container">
      <Banner imageSrc={homeBannerImage} altText="Home Banner" />
      </div>
      <FirstTitle className='title'>Chez vous et partout ailleurs</FirstTitle>
      <main id="mainIndex">
      <GridContainer>
          {firstSixLogements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              // title={logement.title}
              imageSrc={logement.cover}
            />
          ))}
        </GridContainer>
      </main>
    </div>
  );
}

export default Home;