import { SHOOT_COMPUTER} from '../constants/ActionTypes';

export function shootComputer(rowIndex, colIndex) {
  return {
    type: SHOOT_COMPUTER,
    row: rowIndex,
    col: colIndex,
  };
}
