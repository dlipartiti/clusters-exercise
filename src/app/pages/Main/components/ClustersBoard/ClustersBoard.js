import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const ClustersBoard = ({ boardSize }) => {
  const numberOfColumns = useMemo(() => boardSize.width, [boardSize.width]);
  const numberOfRows = useMemo(() => boardSize.height, [boardSize.height]);

  const [matrix, setMatrix] = useState([[]]);

  useEffect(() => {
    const initialMatrix = Array(numberOfRows).fill(0).map(() => new Array(numberOfColumns).fill('-'))
    setMatrix(initialMatrix);
  }, []);

  return (
    <div className="clusters-board">
      <table>
        <tbody>
        {matrix.map(matrixRow => (
          <tr>
            {matrixRow.map(matrixRowCell => (
              <td>{matrixRowCell}</td>
            ))}
          </tr>
        ))}
        </tbody>
      </table>
    </div>
  );
};

ClustersBoard.propTypes = {
  boardSize: PropTypes.shape({
    width: PropTypes.number,
    height: PropTypes.number
  }).isRequired
};

export default ClustersBoard;
