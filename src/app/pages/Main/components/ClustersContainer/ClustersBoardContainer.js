import React, { useState } from 'react';

import BoardSizeSelector from '../BoardSizeSelector';
import ClustersBoard from '../ClustersBoard';
import Container from '@material-ui/core/Container';

import { INITIAL_BOARD_SIZE } from '../../../../../constants/boardProperties';

const ClustersBoardContainer = props => {
  const clusterBoardRef = React.useRef(false);

  const [boardSize, setBoardSize] = useState(INITIAL_BOARD_SIZE);

  const changeBoardWidth = (newWidth) => setBoardSize({ ...boardSize, width: newWidth });
  const changeBoardHeight = (newHeight) => setBoardSize({ ...boardSize, height: newHeight });

  const refreshBoard = () => {
    setBoardSize(INITIAL_BOARD_SIZE);
    return clusterBoardRef.current.refreshMatrix();
  }

  return (
    <main className="app-main">
      <Container maxWidth="sm">
        <BoardSizeSelector
          currentWidth={boardSize.width}
          currentHeight={boardSize.height}
          changeBoardWidth={changeBoardWidth}
          changeBoardHeight={changeBoardHeight}
          refreshBoard={refreshBoard}
        />
        <ClustersBoard ref={clusterBoardRef} boardSize={boardSize} />
      </Container>
    </main>
  );
};

export default ClustersBoardContainer;
