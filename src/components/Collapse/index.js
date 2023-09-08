import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../../styles/CollapseAnimation.scss';

class Collapse extends Component {
  render() {
    const { children, isOpen } = this.props;

    return (
      <div className={`collapse ${isOpen ? 'open' : ''}`}>
        <div>
          <FontAwesomeIcon
            icon={isOpen ? faChevronDown : faChevronUp}
            className={`chevron-icon ${isOpen ? 'rotateDown' : 'rotateUp'}`}
          />
          {children}
        </div>
      </div>
    );
  }
}

Collapse.defaultProps = {
  isOpen: false
};

export default Collapse;
