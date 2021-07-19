import React from 'react';
import PropTypes from 'prop-types';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const NumberSelector = ({ currentNumber, onSelectNumber, rangeOfNumbers, label, uniqueKey, disabled }) => {
  return (
    <FormControl className="number-selector-container" disabled={disabled}>
      <InputLabel shrink id={`${uniqueKey}-number-selector`}>
        {label}
      </InputLabel>
      <Select
        labelId={`${uniqueKey}-number-selector`}
        value={currentNumber}
        onChange={onSelectNumber}
        displayEmpty
      >
      {
        rangeOfNumbers.map(number => (
          <MenuItem key={`${uniqueKey}-${number}`} value={number}>{number}</MenuItem>
        ))
      }
      </Select>
    </FormControl>
  );
};

NumberSelector.defaultProps = {
  currentNumber: 10,
  disabled: false
}

NumberSelector.propTypes = {
  currentNumber: PropTypes.number,
  onSelectNumber: PropTypes.func.isRequired,
  rangeOfNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  label: PropTypes.string.isRequired,
  uniqueKey: PropTypes.string.isRequired,
  disabled: PropTypes.bool
};

export default NumberSelector;
