import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../../styles/CollapseAnimation.scss';
import styled from 'styled-components';

const Title = styled.h3`
  font-size: 1.3rem;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
`;

const CollapseWrapper = styled.div`
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? '800px' : '0')};
  transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out;
`;

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
            <Title className="collapse-title">{this.props.title}</Title>
          </div>
          <div className="chevron-icon-container" onClick={this.toggleCollapse}>
            <FontAwesomeIcon
              icon={isOpen ? faChevronUp : faChevronDown}
              className={`chevron-icon ${isOpen ? 'rotateUp' : 'rotateDown'}`}
            />
          </div>
          
        </div>

        <CollapseWrapper isOpen={isOpen}>
          <div className="content content-collapse">{children}</div>
        </CollapseWrapper>
      </div>
    );
  }
}

Collapse.defaultProps = {
  isOpen: false,
};

export default Collapse;
