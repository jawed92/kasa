import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Banner from '../../components/Banner';
import Slider from '../../components/Slider';
import Collapse from '../../components/Collapse';
import '../../styles/Presentation.scss';
import logementsData from '../../data/logement.json';
import { useNavigate } from 'react-router-dom';

  
function Presentation() {
  const navigate = useNavigate();
  const { logementId } = useParams();
  const logement = logementsData.find((logement) => logement.id === logementId);
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [equipementsOpen, setEquipementsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const fullName = logement.host.name;
  const [firstName, lastName] = fullName.split(' ');

  useEffect(() => {
    if (!logement) {
      console.log(12);
      navigate('/error');
      return null;
    }
  }, [logement, navigate]);
  

  return logement ? (
    <div className="presentation-container">
      {logement.pictures && logement.pictures.length > 0 ? (
        <Slider
          images={[logement.cover, ...logement.pictures]}
          currentIndex={currentImageIndex}
          setCurrentIndex={setCurrentImageIndex}
        />
      ) : (
        <Banner imageSrc={logement.cover} altText="Logement Banner" />
      )}

      <h1 className="description">{logement.title}</h1>
      <div className="sections-container">
        <section className="sectionPresentation">
          <p className="localisation">{logement.location}</p>
          <ul className="avantages">
            {logement.tags.map((tag, index) => (
              <li className="liAvantages" key={index}>
                {tag}
              </li>
            ))}
          </ul>
          <div className={`menu-description ${descriptionOpen ? 'active' : ''}`}>
            <Collapse isOpen={descriptionOpen} title="Description">
              <div className="menu-roll">
                <p className='contenuMargin'>{logement.description}</p>
              </div>
            </Collapse>
          </div>
        </section>
        <section className="sectionEquipements">
          <div className="container-host">
            <div className="host-info">
              <p className="host-name">{firstName}</p>
              <p className="host-lastname">{lastName}</p>
            </div>
            <img className="host-picture" src={logement.host.picture} alt="Hôte" />
          </div>
          <div className={`menu-description ${equipementsOpen ? 'active' : ''}`}>
            <Collapse isOpen={equipementsOpen} title="Equipements">
              <div className="menu-roll">
                <ul className='contenuMargin'>
                  {logement.equipments.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
                </ul>
              </div>
            </Collapse>
          </div>
        </section>
      </div>
    </div>
  ) : '';
}

export default Presentation;
