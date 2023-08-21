import React, { useState } from 'react';
import Banner from '../../components/Banner';
import aboutBannerImage from '../../assets/baniere-apropos.png';
import styled from 'styled-components';

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
`;

const MenuTitle = styled.h3`
  font-size: 1.3rem;
  color: #FF6060;
`;

const Arrow = styled.span`
  font-size: 1.2rem;
  margin-left: 5px;
`;

const MenuRoll = styled.p`
  font-size: 1rem;
  color: #000000;
  display: ${props => (props.open ? 'block' : 'none')};
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
            <MenuTitle>Fiabilité <Arrow>{openIndex === 0 ? '▲' : '▼'}</Arrow></MenuTitle>
            <MenuRoll open={openIndex === 0}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit iure minus rerum odio? Voluptatibus recusandae nobis cum harum dignissimos dolor mollitia? Dolores omnis, aperiam iusto ab reiciendis voluptas perferendis quae?</MenuRoll>
          </Menu>

          <Menu onClick={() => handleCollapseClick(1)}>
            <MenuTitle>Respect <Arrow>{openIndex === 1 ? '▲' : '▼'}</Arrow></MenuTitle>
            <MenuRoll open={openIndex === 1}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit iure minus rerum odio? Voluptatibus recusandae nobis cum harum dignissimos dolor mollitia? Dolores omnis, aperiam iusto ab reiciendis voluptas perferendis quae?</MenuRoll>
          </Menu>

          <Menu onClick={() => handleCollapseClick(2)}>
            <MenuTitle>Service <Arrow>{openIndex === 2 ? '▲' : '▼'}</Arrow></MenuTitle>
            <MenuRoll open={openIndex === 2}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit iure minus rerum odio? Voluptatibus recusandae nobis cum harum dignissimos dolor mollitia? Dolores omnis, aperiam iusto ab reiciendis voluptas perferendis quae?</MenuRoll>
          </Menu>

          <Menu onClick={() => handleCollapseClick(3)}>
            <MenuTitle>Sécurité <Arrow>{openIndex === 3 ? '▲' : '▼'}</Arrow></MenuTitle>
            <MenuRoll open={openIndex === 3}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit iure minus rerum odio? Voluptatibus recusandae nobis cum harum dignissimos dolor mollitia? Dolores omnis, aperiam iusto ab reiciendis voluptas perferendis quae?</MenuRoll>
          </Menu>
        </SectionAbout>
      </Main>
    </div>
  );
}

export default About;
