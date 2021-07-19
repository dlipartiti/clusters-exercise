import React from 'react';
import PropTypes from 'prop-types';

import NumberSelector from '../../../../components/NumberSelector';
import { useFlowContext } from "../../../../context/FlowContext";
import ResetButton from '@material-ui/core/Button';

const RANGE_OF_NUMBERS = [...Array(11).keys()].slice(1);

const BoardSizeSelector = ({ changeBoardWidth, changeBoardHeight, currentWidth, currentHeight, refreshBoard }) => {
  const { alreadyStarted, setAlreadyStarted } = useFlowContext();

  const onChangeSelectorNumber = (isChangingWidth) => ({ target }) => {
    isChangingWidth? changeBoardWidth(target.value) : changeBoardHeight(target.value);
  };

  const resetSelectors = () => {
    setAlreadyStarted(false);
    refreshBoard();
  }

  return (
    <div className="board-size-selector">
      <NumberSelector
        uniqueKey="board-width"
        currentNumber={currentWidth}
        label="Grid's width"
        onSelectNumber={onChangeSelectorNumber(true)}
        rangeOfNumbers={RANGE_OF_NUMBERS}
        disabled={alreadyStarted}
      />
      <NumberSelector
        uniqueKey="board-height"
        currentNumber={currentHeight}
        label="Grid's height"
        onSelectNumber={onChangeSelectorNumber(false)}
        rangeOfNumbers={RANGE_OF_NUMBERS}
        disabled={alreadyStarted}
      />
      <ResetButton color="primary" onClick={resetSelectors}>Clean board</ResetButton>
    </div>
  );
};

BoardSizeSelector.defaultProps = {
  currentWidth: 10,
  currentHeight: 10
};

BoardSizeSelector.propTypes = {
  changeBoardHeight: PropTypes.func.isRequired,
  changeBoardWidth: PropTypes.func.isRequired,
  currentHeight: PropTypes.number,
  currentWidth: PropTypes.number,
  refreshBoard: PropTypes.func.isRequired
};

export default BoardSizeSelector;
