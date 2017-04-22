import './styles.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MapCell from './MapCell';

export default class BattleMap extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onCellClick(
      +e.target.getAttribute('data-row'),
      +e.target.getAttribute('data-col')
    );
  }

  render() {
    const size = `${(100 / this.props.matrix.length).toFixed(2)}%`;

    const mapRows = this.props.matrix.map((matrixRow, rowIndex) => (
      <div
        className="row"
        key={rowIndex}
        style={{ height: size }}
        onClick={ this.handleClick }
      >
        {
          matrixRow.map((cellStatus, colIndex) => (
            <MapCell
              key={colIndex}
              status={cellStatus}
              style={{ width: size }}
              data-row={rowIndex}
              data-col={colIndex}
            />
          ))
        }
      </div>
    ));

    return (
      <div className="battle-map"> { mapRows } </div>
    )
  }
}

BattleMap.propTypes = {
  matrix: PropTypes.array.isRequired,
  onCellClick: PropTypes.func.isRequired,
};
