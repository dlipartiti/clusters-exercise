import React from 'react';
import PropTypes from 'prop-types';

import { useFlowContext } from '../../../../context/FlowContext';

const ClustersBoardCell = ({ rowIx, columnIx, cellValue, onClickCell }) => {
  const { serverActivePoints } = useFlowContext();

  const possibleServerActivePointsKey = `${rowIx}-${columnIx}`;
  const classNames = `clusters-board-row--cell ${serverActivePoints?.has(possibleServerActivePointsKey)? 'validated' : ''}`;

  return (
    <td className={classNames} onClick={onClickCell}>{cellValue}</td>
  );
};

ClustersBoardCell.propTypes = {
  rowIx: PropTypes.number.isRequired,
  columnIx: PropTypes.number.isRequired,
  cellValue: PropTypes.string.isRequired,
  onClickCell: PropTypes.func.isRequired
};

export default ClustersBoardCell;
