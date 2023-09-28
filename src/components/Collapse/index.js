import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Collapse.scss"; // Importez le fichier de style SCSS

class Collapse extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isOpen: this.props.isOpen,
		};
	}

	toggleCollapse = () => {
		this.setState((prevState) => ({
			isOpen: !prevState.isOpen,
		}));
	};

	render() {
		const { children } = this.props;
		const { isOpen } = this.state;

		return (
			<div className={`collapse ${isOpen ? "open" : ""}`}>
				<div className="collapse-header">
					<div className="title-collapse">
						<h3>{this.props.title}</h3>
					</div>
					<div className="chevron-icon-container" onClick={this.toggleCollapse}>
						<FontAwesomeIcon
							icon={isOpen ? faChevronDown : faChevronUp}
							className={`chevron-icon ${isOpen ? "rotateDown" : "rotateUp"}`}
						/>
					</div>
				</div>

				<div className={`content content-collapse ${isOpen ? "open" : ""}`}>
					{children}
				</div>
			</div>
		);
	}
}

Collapse.defaultProps = {
	isOpen: false,
};

export default Collapse;
