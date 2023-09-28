import React from 'react';
import Banner from '../../components/Banner';
import Card from '../../components/Card';
import homeBannerImage from '../../assets/baniere.png';
import '../../styles/Home.scss'; // Importez votre fichier Sass pour la page Home
import logementsData from '../../data/logement.json';

function Home() {
  const firstSixLogements = logementsData.slice(0, 6);
  return (
    <div className="app">
        <Banner imageSrc={homeBannerImage} altText="Home Banner" />     
      <h1 className="title">Chez vous, et partout ailleurs</h1>
      <main id="mainIndex">
        <div className="grid-container">
          {firstSixLogements.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              title={logement.title}
              imageSrc={logement.cover}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
