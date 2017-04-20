/**
 * Created by farhad on 20.04.17.
 */
import './styles.less'
import BattleMap from './BattleMap'
import InfoBlock from './InfoBlock'

import React, { Component, PropTypes } from 'react';


export default class Game extends Component {

  constructor (props){
    super(props);
    this.handleMapCellClick = this.handleMapCellClick.bind(this);
  }

  handleMapCellClick(rowIndex, colIndex){
      this.props.actions.shootComputer(rowIndex, colIndex);
  }

  render() {
    return (
      <div className="battleship-game">
        <div className="battle-map-container">
          <BattleMap matrix={this.props.matrix} onCellClick={this.handleMapCellClick} />
        </div>
        <InfoBlock ships={this.props.ships}/>
      </div>
    )
  }
}
