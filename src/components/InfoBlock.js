/**
 * Created by farhad on 20.04.17.
 */
import './styles.less';
import ScorePanel from './ScorePanel';
import ShipPanel from './ShipPanel';

import React, { Component, PropTypes } from 'react';

export default class InfoBlock extends Component {

  constructor(props) {
    super(props);
    this.state = { isCompact: false };
    this.updateDimensions = this.updateDimensions.bind(this);
  }

  componentWillMount() {
    this.updateDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions);
  }

  updateDimensions() {
    this.setState({
      isCompact: window.innerWidth < 1000
    });
  }

  render() {
    const { isCompact } = this.state;
    const player2Score = this.props.ships.reduce((t, ship) => t + ship.hits, 0);
    const ships = this.props.ships.map( (ship, i) => (
      <ShipPanel
        key={i}
        shipType={ship.shipType}
        size={ship.positions.length}
        hits={ship.hits}
      />
    ));

    let shipsEl = ships;
    // if (isCompact) {
    //   shipsEl = (
    //     <table style={{ width: '100%' }}>
    //       <tbody>
    //         <tr><td>{ships[0]}</td><td>{ships[3]}</td></tr>
    //         <tr><td>{ships[1]}</td><td>{ships[4]}</td></tr>
    //         <tr><td>{ships[2]}</td></tr>
    //       </tbody>
    //     </table>
    //   );
    // }

    return (
      <div className={`info-block ${isCompact ? 'compact' : ''}` } >
        <div className="players-score-container">
          <ScorePanel className="player1" text="player 1" score={0} />
          <ScorePanel className="player2" text="player 2" score={player2Score} />
        </div>
        <div className="ships-container">
          { shipsEl }
        </div>
      </div>
    );
  }
}

