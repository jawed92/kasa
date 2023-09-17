import React, { useState } from 'react';
import Banner from '../../components/Banner';
import aboutBannerImage from '../../assets/baniere-apropos.png';
import styled from 'styled-components';
import Collapse from '../../components/Collapse';

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
`;

const SectionAbout = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 800px;
`;

const Menu = styled.div`
  text-align: center;
  cursor: pointer;
  width: 100%;
  color: #ffffff;
`;

const MenuRoll = styled.p`
  font-size: 1rem;
  color: #FF6060;
  background-color: #f6f6f6;
  border-radius: 10px;
  
`;


function About() {
  const [openIndex, setOpenIndex] = useState(null);

  const handleCollapseClick = (index) => {
    setOpenIndex(prevOpenIndex => (prevOpenIndex === index ? null : index));
  };

  return (
    <div>
      <Banner imageSrc={aboutBannerImage} altText="À propos Banner" />
      <Main>
        <SectionAbout>
          <Menu onClick={() => handleCollapseClick(0)}>
          <Collapse isOpen={openIndex === 0} title="Fiabilité"> 
              <MenuRoll>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit iure minus rerum odio? Voluptatibus recusandae
                nobis cum harum dignissimos dolor mollitia? Dolores omnis,
                aperiam iusto ab reiciendis voluptas perferendis quae?
              </MenuRoll>
            </Collapse>
          </Menu>

          <Menu onClick={() => handleCollapseClick(1)}>
          <Collapse isOpen={openIndex === 1} title="Respect">           
              <MenuRoll>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit iure minus rerum odio? Voluptatibus recusandae
                nobis cum harum dignissimos dolor mollitia? Dolores omnis,
                aperiam iusto ab reiciendis voluptas perferendis quae?
              </MenuRoll>
            </Collapse> 
          </Menu>

          <Menu onClick={() => handleCollapseClick(2)}>
          <Collapse isOpen={openIndex === 2} title="Service">
              <MenuRoll>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit iure minus rerum odio? Voluptatibus recusandae
                nobis cum harum dignissimos dolor mollitia? Dolores omnis,
                aperiam iusto ab reiciendis voluptas perferendis quae?
              </MenuRoll>
            </Collapse>
          </Menu>

          <Menu onClick={() => handleCollapseClick(3)}>
          <Collapse isOpen={openIndex === 3} title="Sécurité">
              <MenuRoll>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Reprehenderit iure minus rerum odio? Voluptatibus recusandae
                nobis cum harum dignissimos dolor mollitia? Dolores omnis,
                aperiam iusto ab reiciendis voluptas perferendis quae?
              </MenuRoll>
            </Collapse>
          </Menu>
        </SectionAbout>
      </Main>
    </div>
  );
}


export default About;
