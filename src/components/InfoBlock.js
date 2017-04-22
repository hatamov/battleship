/**
 * Created by farhad on 20.04.17.
 */
import './styles.less';
import ScorePanel from './ScorePanel';
import ShipPanel from './ShipPanel';

import React, { Component, PropTypes } from 'react';

export default class InfoBlock extends Component {

  render() {
    const player2Score = this.props.ships.reduce((t, ship) => t + ship.hits, 0);
    const ships = this.props.ships.map( (ship, i) => (
      <ShipPanel
        key={i}
        shipType={ship.shipType}
        size={ship.positions.length}
        hits={ship.hits}
      />
    ));

    return (
      <div className="info-block" >
        <div className="players-score-container">
          <ScorePanel className="player1" text="player 1" score={0} />
          <ScorePanel className="player2" text="player 2" score={player2Score} />
        </div>
        <div className="ships-container">
          { ships }
        </div>
      </div>
    );
  }
}

