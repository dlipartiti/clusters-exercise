import React from 'react'

import { render, screen, fireEvent } from '@testing-library/react'
import NumberSelector from '../NumberSelector';

describe('NumberSelector Component', () => {
  let defaultProps = {};

  beforeEach(() => {
    defaultProps = {
      currentNumber: 5,
      onSelectNumber: jest.fn(),
      rangeOfNumbers: [1, 2, 3, 4, 5],
      label: 'Test label',
      uniqueKey: 'Testing-NumberSelector',
      disabled: false
    };
  });

  test('Should show select input label', () => {
    render(<NumberSelector {...defaultProps} />);

    screen.getByLabelText('Test label');
  });

  test('Should render currentNumber as value for button', () => {
    render(<NumberSelector {...defaultProps} />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    screen.getByText('5');
  });

  // test('Should call onSelectNumber prop function after onChange', async () => {
  //   render(<NumberSelector {...defaultProps} />);
  //
  //   const selectButtonEl = screen.getByRole('button');
  //   fireEvent.click(selectButtonEl.parentElement);
  //
  //   const continueButtonText = await screen.findByText('2');
  // });

  // Test disabled behavior
});
