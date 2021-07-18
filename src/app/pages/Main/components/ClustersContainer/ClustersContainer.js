import React, { useState } from 'react';

import BoardSizeSelector from '../BoardSizeSelector';
import ClustersBoard from '../ClustersBoard';
import Container from '@material-ui/core/Container';

const ClustersContainer = props => {
  const [boardSize, setBoardSize] = useState({ width: 10, height: 10 });

  const changeBoardWidth = (newWidth) => setBoardSize({ ...boardSize, width: newWidth });
  const changeBoardHeight = (newHeight) => setBoardSize({ ...boardSize, height: newHeight });

  return (
    <main className="app-main">
      <Container maxWidth="sm">
        <BoardSizeSelector
          currentWidth={boardSize.width}
          currentHeight={boardSize.height}
          changeBoardWidth={changeBoardWidth}
          changeBoardHeight={changeBoardHeight}
        />
        <ClustersBoard boardSize={boardSize} />
      </Container>
    </main>
  );
};

export default ClustersContainer;
