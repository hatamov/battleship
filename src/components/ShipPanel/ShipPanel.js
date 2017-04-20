import './styles.less'

import React, { Component, PropTypes } from 'react'
import HitsBar from './HitsBar'

const ShipPanel = (props) => (
  <div className="ship-panel">
    <div className={`ship ship-type-${props.shipType}`} />
    <HitsBar
      total={props.size}
      hitsCount={props.hits === props.size ? props.hits : 0}
    />
  </div>
);

export default ShipPanel
