import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import Banner from "../../components/Banner";
import Slider from "../../components/Slider";
import Collapse from "../../components/Collapse";
import "../../styles/Presentation.scss";
import logementsData from "../../data/logement.json";
import { useNavigate } from "react-router-dom";

function Presentation() {
	const navigate = useNavigate();
	const { logementId } = useParams();
	const logement = logementsData.find((logement) => logement.id === logementId);
	const [descriptionOpen, setDescriptionOpen] = useState(true);
	const [equipementsOpen, setEquipementsOpen] = useState(true);
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	const fullName = logement.host.name;
	const [firstName, lastName] = fullName.split(" ");
	const rating = parseInt(logement.rating);

	useEffect(() => {
		if (!logement) {
			console.log(12);
			navigate("/error");
			return null;
		}
	}, [logement, navigate]);

	return logement ? (
		<div className="presentation-container">
			<div className="banner-cont">
				{logement.pictures && logement.pictures.length > 0 ? (
					<Slider
						images={[logement.cover, ...logement.pictures]}
						currentIndex={currentImageIndex}
						setCurrentIndex={setCurrentImageIndex}
					/>
				) : (
					<Banner imageSrc={logement.cover} altText="Logement Banner" />
				)}
			</div>
			<div className="sections-container">
				<section className="sectionPresentation">
					<h1 className="description">{logement.title}</h1>

					<p className="localisation">{logement.location}</p>
					<ul className="avantages">
						{logement.tags.map((tag, index) => (
							<li className="liAvantages" key={index}>
								{tag}
							</li>
						))}
					</ul>
					<div
						className={`menu-description ${descriptionOpen ? "active" : ""}`}
					>
						<Collapse isOpen={descriptionOpen} title="Description">
							<div className="menu-roll">
								<p className="contenuMargin">{logement.description}</p>
							</div>
						</Collapse>
					</div>
				</section>
				<section className="sectionEquipements">
					<div className="container-host">
						<div className="host-info">
							<p className="host-name">{firstName}</p>
							<p className="host-lastname">{lastName}</p>
						</div>
						<img
							className="host-picture"
							src={logement.host.picture}
							alt="Hôte"
						/>
					</div>
					<div className="rating-stars">
						{[...Array(rating)].map((_, index) => (
							<FontAwesomeIcon
								key={index}
								icon={solidStar}
								className="star-solid"
							/>
						))}
						{[...Array(5 - rating)].map((_, index) => (
							<FontAwesomeIcon
								key={index}
								icon={regularStar}
								className="star-regular"
							/>
						))}
					</div>
					<div
						className={`menu-description ${equipementsOpen ? "active" : ""}`}
					>
						<Collapse isOpen={equipementsOpen} title="Equipements">
							<div className="menu-roll">
								<ul className="contenuMargin">
									{logement.equipments.map((equipment, index) => (
										<li key={index}>{equipment}</li>
									))}
								</ul>
							</div>
						</Collapse>
					</div>
				</section>
			</div>
		</div>
	) : (
		""
	);
}

export default Presentation;
