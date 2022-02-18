import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Image from './Image';
import '../App.css';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="PlanetCard">
        <p data-testid="planet-name">{planetName}</p>
        <Image src={ planetImage } alt={ planetName } />
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
