import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FooterLogo from '../../assets/LOGO-footer.png';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 30px;
  background-color: #000000;
`;

const LogoFooter = styled.div`
  a {
    display: block;
  }
`;

const LogoImage = styled.img``;

const Copyright = styled.div`
  color: #f6f6f6;
`;

function Footer() {
  return (
    <FooterContainer>
      <LogoFooter>
        <Link to="/">
          <LogoImage src={FooterLogo} alt="Logo Kasa" />
        </Link>
      </LogoFooter>
      <Copyright>
        <p>2020 Kasa, Tous droits réservés</p>
      </Copyright>
    </FooterContainer>
  );
}

export default Footer;
