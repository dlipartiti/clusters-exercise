import React from 'react';
import PropTypes from 'prop-types';

import NumberSelector from '../../../../components/NumberSelector';

const RANGE_OF_NUMBERS = [...Array(11).keys()].slice(1);

const BoardSizeSelector = ({ changeBoardWidth, changeBoardHeight, currentWidth, currentHeight }) => {
  const onChangeSelectorNumber = (isChangingWidth) => ({ target }) => {
    isChangingWidth? changeBoardWidth(target.value) : changeBoardHeight(target.value);
  };

  return (
    <div className="board-size-selector">
      <NumberSelector
        key="board-width"
        currentNumber={currentWidth}
        label={'Ancho de la grilla'}
        onSelectNumber={onChangeSelectorNumber(true)}
        rangeOfNumbers={RANGE_OF_NUMBERS}
      />
      <NumberSelector
        key="board-height"
        currentNumber={currentHeight}
        label={'Alto de la grilla'}
        onSelectNumber={onChangeSelectorNumber(false)}
        rangeOfNumbers={RANGE_OF_NUMBERS}
      />
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
  currentWidth: PropTypes.number
};

export default BoardSizeSelector;
