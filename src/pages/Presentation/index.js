import React, { useState } from 'react';
import Banner from '../../components/Banner';
import presentationBannerImage from '../../assets/baniere.png';
import '../../styles/Presentation.scss'


function Presentation() {
  const [isDescriptionOpen, setDescriptionOpen] = useState(false);
  const [isEquipmentsOpen, setEquipmentsOpen] = useState(false);

  const toggleDescriptionCollapse = () => {
    setDescriptionOpen(!isDescriptionOpen);
  };

  const toggleEquipmentsCollapse = () => {
    setEquipmentsOpen(!isEquipmentsOpen);
  };

  return (
    <div id="presentation">
      <Banner imageSrc={presentationBannerImage} altText="Presentation Banner" />
      <main className="mainPresentation">
        <h1 className="description" >
                        Cozy loft on the Canal Saint-Martin
                    </h1>
              <article>
                <section className="sectionPresentation">
                    
                    <p className="localisation">Paris, île-de-France</p>
                    <ul className="avantages">
                    <li className="liAvantages">Cozy</li>
                <li className="liAvantages">Canal</li>
                <li className="liAvantages">Paris 10</li>
                      </ul>
                      <div className={`menu-description ${isDescriptionOpen ? 'collapse-open' : ''}`}>
                      <h2 onClick={toggleDescriptionCollapse}>Description</h2>
                        <p className="menu-roll">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit iure minus
                            rerum odio? Voluptatibus recusandae nobis cum harum dignissimos dolor mollitia? Dolores omnis,
                            aperiam iusto ab reiciendis voluptas perferendis quae?
                        </p>
                    </div>
                </section>
                <section className="sectionEquipements">
                    <div className="prop">
                        <div className="respPrenom">
                            <p className="propPrenom">
                                Alexandre <br className="propNom" /> Dumas
                            </p>
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
                    <div className={`menu-description ${isDescriptionOpen ? 'collapse-open' : ''}`}>
                        <h2 onClick={toggleEquipmentsCollapse}>Equipements  </h2>
                        <p className="menu-roll">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit iure minus
                            rerum odio? Voluptatibus recusandae nobis cum harum dignissimos dolor mollitia? Dolores omnis,
                            aperiam iusto ab reiciendis voluptas perferendis quae?
                        </p>
                    </div>
                </section>
                </article>
            </main>
        </div>
    );
}

export default Presentation;
