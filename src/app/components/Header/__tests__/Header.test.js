import React from 'react'

import { render, screen } from '@testing-library/react'
import Header from '../index';

describe('Header Component', () => {
  let defaultProps = {};

  beforeEach(() => {
    defaultProps = {
      title: 'Test'
    };
  });

  test('Header should correctly renders', () => {
    render(<Header {...defaultProps} />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    screen.getByText('Test');
  });
});
