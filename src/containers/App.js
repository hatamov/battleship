import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as GameActions from '../actions/GameActions';
import Game from '../components/Game';


class GameApp extends Component {
  render() {
    const { matrix, ships, actions } = this.props;
    return (
      <div className="main-app-container">
        <Game matrix={matrix} ships={ships} actions={actions} />
      </div>
    );
  }
}

GameApp.propTypes = {
  matrix: PropTypes.array.isRequired,
  ships: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    matrix: state.game.matrix,
    ships: state.game.ships,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(GameActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameApp);
