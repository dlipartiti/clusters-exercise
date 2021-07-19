import React, { useMemo, useState, useEffect, forwardRef, useImperativeHandle, useCallback } from 'react';
import PropTypes from 'prop-types';

import Spinner from '@material-ui/core/CircularProgress';
import ClustersBoardCell from '../ClustersBoardCell';
import { useFlowContext } from '../../../../context/FlowContext';
import { ACTIVE_POINT, INACTIVE_POINT } from '../../../../../constants/boardProperties'
import { getBoardConfiguration, submitBoardConfiguration } from '../../../../services/clientServices';
import SubmitButton from "@material-ui/core/Button";

const ClustersBoard = forwardRef(({ boardSize }, ref) => {
  const { alreadyStarted, setAlreadyStarted, addServerBoardConfiguration } = useFlowContext();

  const numberOfColumns = useMemo(() => boardSize.width, [boardSize.width]);
  const numberOfRows = useMemo(() => boardSize.height, [boardSize.height]);

  const [loading, setLoading] = useState(true);
  const [matrix, setMatrix] = useState(null);

  const refreshBoardConfiguration = useCallback(() => getBoardConfiguration(numberOfColumns, numberOfRows).then(boardConfiguration => {
    setMatrix(boardConfiguration);
    setLoading(false)
  }), [numberOfRows, numberOfColumns]);

  useEffect( () => {
    setLoading(true);
    refreshBoardConfiguration();
  }, [numberOfRows, numberOfColumns, refreshBoardConfiguration]);

  const togglePointValue = (pointValue) => pointValue === INACTIVE_POINT ? ACTIVE_POINT : INACTIVE_POINT;

  const onClickBoardCell = (currValue, columnIndex, rowIndex) => () => {
    const currentMatrix = matrix.slice();
    currentMatrix[rowIndex][columnIndex] = togglePointValue(currValue);
    setMatrix(currentMatrix);
    if (!alreadyStarted) {
      setAlreadyStarted(true);
    }
  };

  const onClickSubmitButton = () => {
    setLoading(true)
    submitBoardConfiguration(matrix)
      .then(serverBoardConfiguration => {
        addServerBoardConfiguration(serverBoardConfiguration);
      })
      .finally(() => setLoading(false));
  };

  useImperativeHandle(
    ref,
    () => ({
      refreshMatrix: () => {
        setLoading(true);
        return refreshBoardConfiguration();
      }
    }),
    [refreshBoardConfiguration]
  );

  return (
    <div className="clusters-board">
      {!loading && matrix &&
        <>
          <table>
            <tbody>
            {matrix.map((matrixRow, rowIndex) => (
              <tr className="clusters-board-row" key={`row-${rowIndex}`}>
                {matrixRow.map((matrixRowCell, columnIndex) => (
                  <ClustersBoardCell
                    key={`${rowIndex}-${columnIndex}-${matrixRowCell}`}
                    cellValue={matrixRowCell}
                    rowIx={rowIndex}
                    columnIx={columnIndex}
                    onClickCell={onClickBoardCell(matrixRowCell, columnIndex, rowIndex)}
                  />
                ))}
              </tr>
            ))}
            </tbody>
          </table>
          <SubmitButton className="clusters-board--submit" variant="contained" disabled={!alreadyStarted} onClick={onClickSubmitButton}>Submit</SubmitButton>
        </>
      }
      {loading && <Spinner className="clusters-board--loader" />}
    </div>
  );
});

ClustersBoard.propTypes = {
  boardSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired
};

export default ClustersBoard;
