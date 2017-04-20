/**
 * Created by farhad on 20.04.17.
 */
import { BATTLEFIELD_SIZE, SHIPS_CONFIGURATION } from '../constants/GameConsts';
import { SHOOT_COMPUTER } from '../constants/ActionTypes';

const getInitialState = (mapSize=BATTLEFIELD_SIZE)=> {

  // Initialize hits matrix
  const matrix = []
  for(let i=0; i<mapSize; i++){
    matrix.push(new Array(mapSize).fill(undefined))
  }

  // Initialize ships
  const ships = SHIPS_CONFIGURATION.layout.map( layout => ({
    shipType: layout.ship,
    positions: layout.positions,
    hits: 0,
  }));

  return {matrix,  ships};
};

export default function game(state=getInitialState(), action) {

  if (action.type == SHOOT_COMPUTER) {

    const {row, col} = action;
    const targetCellStatus = state.matrix[row][col];

    // Check that cell wasn't shot before
    if (targetCellStatus !== undefined)
      return state;

    // Copy matrix array
    const newMatrix = state.matrix.map(arr => arr.slice());

    // Find ship index located under [row, col] cell
    const targetShipIndex = state.ships.findIndex(ship => (
      ship.positions.findIndex(pos => pos[0] == row && pos[1] == col) !== -1
    ));

    let newShips = state.ships, newCellStatus = 'miss';

    if (targetShipIndex !== -1) {
      // User hit the ship. Increase its hits counter.
      const ship = {...state.ships[targetShipIndex]};
      ship.hits++;
      newShips = state.ships.slice()
      newShips.splice(targetShipIndex, 1, ship);
      newCellStatus = 'hit';
    }

    newMatrix[row][col] = newCellStatus;

    return {
      ships: newShips,
      matrix: newMatrix,
    }
  }
  return state
}
