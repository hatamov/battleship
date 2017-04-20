import './styles.less'

import React, { Component, PropTypes } from 'react';
import MapCell from './MapCell'

export default class BattleMap extends Component {

  render() {
    const size = `${(100/this.props.matrix.length).toFixed(2)}%`;

    const mapRows = this.props.matrix.map((matrixRow, rowIndex) => (
      <div
        className="row"
        key={rowIndex}
        style={{height: size}}
      >
        {
          matrixRow.map((cellStatus, collIndex) => (
            <MapCell
              key={collIndex}
              status={cellStatus}
              style={{width: size}}
              onClick={ () => this.props.onCellClick(rowIndex, collIndex) }
            />
          ))
        }
      </div>
    ));

    return <div className="battle-map"> { mapRows } </div>;
  }
}
