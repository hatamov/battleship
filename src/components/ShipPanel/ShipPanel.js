import './styles.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HitsBar from './HitsBar';

const ShipPanel = (props) => (
  <div className="ship-panel">
    <div className={`ship ship-type-${props.shipType}`} />
    <HitsBar
      total={props.size}
      hitsCount={props.hits === props.size ? props.hits : 0}
    />
  </div>
);

ShipPanel.propTypes = {
  size: PropTypes.number.isRequired,
}

export default ShipPanel;
