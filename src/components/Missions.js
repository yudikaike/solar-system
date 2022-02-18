import React, { Component } from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';
import '../App.css';

class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="Missions">
        <Title headline="Missões" />
        {missions.map((mission, index) => (
          <MissionCard
            key={ index }
            name={ mission.name }
            year={ mission.year }
            country={ mission.country }
            destination={ mission.destination }
          />
        ))}
      </div>
    );
  }
}

export default Missions;
