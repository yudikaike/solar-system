import React, { Component } from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import '../App.css';

class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="SolarSystem">
        <Title headline="Planetas" />
        {planets.map((planet, index) => (
          <PlanetCard
            key={ index }
            planetName={ planet.name }
            planetImage={ planet.image }
          />
        ))}
      </div>
    );
  }
}

export default SolarSystem;
