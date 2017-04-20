/**
 * Created by farhad on 20.04.17.
 */
import React, { Component, PropTypes } from 'react';

const HitsBar = (props) => {
  const { total, hitsCount } = props;
  const items = [];
  for (let i = 0; i < total; i++) {
    const status = i < hitsCount ? 'hit' : 'miss';
    items.push(<div key={i} className={`item status-${status}`} />);
  }
  return (
    <div className="hits-bar">
      {items}
    </div>
  );
};

export default HitsBar;
