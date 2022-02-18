import React, { Component } from 'react';
import Image from './Image';

class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <Image src={ planetImage } alt={ planetName } />
      </div>
    );
  }
}

export default PlanetCard;
