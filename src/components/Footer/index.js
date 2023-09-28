import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Footer.scss";
import FooterLogo from "../../assets/LOGO-footer.png";

function Footer() {
	return (
		<footer className="footer-container">
			<div className="logo-footer">
				<Link to="/">
					<img src={FooterLogo} alt="Logo Kasa" />
				</Link>
			</div>
			<div className="copyright">
				<p>2020 Kasa, Tous droits réservés</p>
			</div>
		</footer>
	);
}

export default Footer;
