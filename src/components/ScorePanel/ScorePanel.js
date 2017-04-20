import './styles.less';

import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ScorePanel extends Component {

  render() {

    const { text, score } = this.props;
    let scoreTxt = score < 10 ? `0${score}` : `${score}`;


    return (
      <div className={`score-panel ${this.props.className || ''}`}>
        <span className="score">{scoreTxt}</span>
        <hr />
        <span className="text">{text}</span>
      </div>
    );
  }
}

ScorePanel.propTypes = {
  text: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};
