import React from 'react';
import { Link } from 'react-router-dom';
import LogoHeader from '../../assets/LOGO.png';
import '../../styles/Header.scss';

function Header() {
  return (
    <header className="header-container">
      <Link to="/" className="logo">
        <img src={LogoHeader} alt="Logo Kasa" className="logo-responsive" />
      </Link>
      <nav className="nav">
        <ul className="ul-nav">
          <li className="nav-item">
            <Link to="/">Accueil</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
