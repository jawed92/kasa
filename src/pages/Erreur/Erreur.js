import React from "react";
import { Link } from "react-router-dom";
import "../../styles/Error.scss";

function Error() {
	return (
		<div className="error-wrapper">
			<h1 className="error-title">404</h1>
			<p className="error-subtitle">
				Oups! La page que vous demandez n'existe pas.
			</p>
			<Link href="/Home" className="retour">
				Retourner sur la page d'accueil
			</Link>
		</div>
	);
}

export default Error;
