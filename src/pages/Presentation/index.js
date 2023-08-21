import React, { useState } from 'react';
import Banner from '../../components/Banner';
import '../../styles/Presentation.scss';
import presentationBannerImage from '../../assets/baniere-presentation.png';

function Presentation() {
  const [descriptionOpen, setDescriptionOpen] = useState(false);
  const [equipementsOpen, setEquipementsOpen] = useState(false);

  const toggleDescription = () => {
    setDescriptionOpen(prevState => !prevState);
  };

  const toggleEquipements = () => {
    setEquipementsOpen(prevState => !prevState);
  };

  return (
    <div id="presentation">
      <Banner imageSrc={presentationBannerImage} altText="Presentation Banner" />
      <h1 className="description">Cozy loft on the Canal Saint-Martin</h1>
      <section className="sectionPresentation">
        <p className="localisation">Paris, île-de-France</p>
        <ul className="avantages">
          <li className="liAvantages">Cozy</li>
          <li className="liAvantages">Canal</li>
          <li className="liAvantages">Paris 10</li>
        </ul>
        <div className="menu-description">
          <h2 className="collapse-trigger" onClick={toggleDescription}>Description</h2>
          {descriptionOpen && (
            <div className="menu-roll">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit iure minus rerum odio? Voluptatibus recusandae
                nobis cum harum dignissimos dolor mollitia? Dolores omnis,
                aperiam iusto ab reiciendis voluptas perferendis quae?
              </p>
            </div>
          )}
        </div>
      </section>
      <section className="sectionEquipements">
        <div className="prop">
          <div className="respPrenom">
            <p className="propPrenom">Alexandre <br className="propNom" /> Dumas</p>
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
        <div className="menu-description">
          <h2 className="collapse-trigger" onClick={toggleEquipements}>Équipements</h2>
          {equipementsOpen && (
            <div className="menu-roll">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit iure minus rerum odio? Voluptatibus recusandae
                nobis cum harum dignissimos dolor mollitia? Dolores omnis,
                aperiam iusto ab reiciendis voluptas perferendis quae?
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
          }

export default Presentation;