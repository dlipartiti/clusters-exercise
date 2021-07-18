import React from 'react';
import PropTypes from 'prop-types';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const NumberSelector = ({ currentNumber, onSelectNumber, rangeOfNumbers, label, key }) => {
  return (
    <FormControl className="number-selector-container">
      <InputLabel shrink id={`${key}-number-selector`}>
        {label}
      </InputLabel>
      <Select
        labelId={`${key}-number-selector`}
        value={currentNumber}
        onChange={onSelectNumber}
        displayEmpty
      >
      {
        rangeOfNumbers.map(number => (
          <MenuItem key={`${key}-${number}`} value={number}>{number}</MenuItem>
        ))
      }
      </Select>
    </FormControl>
  );
};

NumberSelector.defaultProps = {
  currentNumber: 10
}

NumberSelector.propTypes = {
  currentNumber: PropTypes.number,
  onSelectNumber: PropTypes.func.isRequired,
  rangeOfNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  label: PropTypes.string.isRequired,
  key: PropTypes.string.isRequired
};

export default NumberSelector;
