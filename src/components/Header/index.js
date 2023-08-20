import { Link } from 'react-router-dom';
import styled from 'styled-components';
import LogoHeader from '../../assets/LOGO.png';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  margin: 30px;
`;

const Logo = styled.img`
  width: 50%;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 50%;
`;

const UlNav = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  width: 100%;
  gap: 2rem;
`;

const NavItem = styled.li`
  a {
    color: #FF6060;
    text-decoration: none;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/" className="logo">
        <Logo src={LogoHeader} alt="Logo Kasa" className="logoResponsive" />
      </Link>
      <Nav>
        <UlNav>
          <NavItem>
            <Link to="/">Accueil</Link>
          </NavItem>
          <NavItem>
            <Link to="/about">A propos</Link>
          </NavItem>
        </UlNav>
      </Nav>
    </HeaderContainer>
  );
}

export default Header;
