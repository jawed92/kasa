import React, { useState } from "react";
import Banner from "../../components/Banner";
import aboutBannerImage from "../../assets/baniere-apropos.png";
import Collapse from "../../components/Collapse";
import "../../styles/About.scss";

function About() {
	const [openIndex, setOpenIndex] = useState(null);

	const handleCollapseClick = (index) => {
		setOpenIndex((prevOpenIndex) => (prevOpenIndex === index ? null : index));
	};

	return (
		<div>
			<Banner imageSrc={aboutBannerImage} altText="À propos Banner" />
			<div className="main">
				<div className="section-about">
					<div className="menu" onClick={() => handleCollapseClick(0)}>
						<Collapse isOpen={openIndex === 0} title="Fiabilité">
							<p className="menu-roll">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Reprehenderit iure minus rerum odio? Voluptatibus recusandae
								nobis cum harum dignissimos dolor mollitia? Dolores omnis,
								aperiam iusto ab reiciendis voluptas perferendis quae?
							</p>
						</Collapse>
					</div>

					<div className="menu" onClick={() => handleCollapseClick(1)}>
						<Collapse isOpen={openIndex === 1} title="Respect">
							<p className="menu-roll">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Reprehenderit iure minus rerum odio? Voluptatibus recusandae
								nobis cum harum dignissimos dolor mollitia? Dolores omnis,
								aperiam iusto ab reiciendis voluptas perferendis quae?
							</p>
						</Collapse>
					</div>

					<div className="menu" onClick={() => handleCollapseClick(2)}>
						<Collapse isOpen={openIndex === 2} title="Service">
							<p className="menu-roll">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Reprehenderit iure minus rerum odio? Voluptatibus recusandae
								nobis cum harum dignissimos dolor mollitia? Dolores omnis,
								aperiam iusto ab reiciendis voluptas perferendis quae?
							</p>
						</Collapse>
					</div>

					<div className="menu" onClick={() => handleCollapseClick(3)}>
						<Collapse isOpen={openIndex === 3} title="Sécurité">
							<p className="menu-roll">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit.
								Reprehenderit iure minus rerum odio? Voluptatibus recusandae
								nobis cum harum dignissimos dolor mollitia? Dolores omnis,
								aperiam iusto ab reiciendis voluptas perferendis quae?
							</p>
						</Collapse>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
