import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../../styles/CollapseAnimation.scss';

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
      <div className={`collapse ${isOpen ? 'open' : ''}`}>
        <div className="collapse-header">
        <div className="title title-collapse">
            {this.props.title} {/* Ajoutez le titre du Collapse ici */}
          </div>
          <div className="chevron-icon-container" onClick={this.toggleCollapse}>
            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
              className={`chevron-icon ${isOpen ? 'rotateUp' : 'rotateDown'}`}
            />
          </div>
          
        </div>

        {isOpen && (
          <div className="collapse-content">
            <div className="content content-collapse">{children}</div>
          </div>
        )}
      </div>
    );
  }
}

Collapse.defaultProps = {
  isOpen: false,
};

export default Collapse;
