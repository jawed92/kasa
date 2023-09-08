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
  
  const toggleDescription = () => {
    setDescriptionOpen(prevState => !prevState);
  };

  const toggleEquipements = () => {
    setEquipementsOpen(prevState => !prevState);
  };
  
  useEffect(() => {
    if (!logement) {
    console.log(12);
    navigate('/error');
    return null;
  }
  }, [logement, navigate]);
  

  return logement ? (
    <div id="presentation">
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
          <h2 className="collapse-trigger" onClick={toggleDescription}>Description</h2>
          <Collapse isOpen={descriptionOpen}>
            <div className="menu-roll">
              <p>{logement.description}</p>
            </div>
          </Collapse>
        </div>
      </section>
      <section className="sectionEquipements">
        <div className="prop">
          <div className="respPrenom">
            <p className="propPrenom">{logement.name} <br className="propNom" /> Dumas</p>
            <span className="cercle"></span>
          </div>
          <div className="etoile">
            <i className="fas fa-star" aria-hidden="true"></i>
            <i className="fas fa-star" aria-hidden="true"></i>
            <i className="fas fa-star" aria-hidden="true"></i>
            <i className="fas fa-star" aria-hidden="false"></i>
            <i className="fas fa-star gris" aria-hidden="false"></i>
          </div>
        </div>
        <div className={`menu-description ${equipementsOpen ? 'active' : ''}`}>
          <h2 className="collapse-trigger" onClick={toggleEquipements}>Équipements</h2>
          <Collapse isOpen={equipementsOpen}>
            <div className="menu-roll">
              <ul>
                {logement.equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            </div>
          </Collapse>
        </div>
      </section>
    </div>
  ): '';
          }

export default Presentation;