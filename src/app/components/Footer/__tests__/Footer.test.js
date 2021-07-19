import React from 'react'

import { render, screen } from '@testing-library/react'
import Footer from '../Footer';

describe('Footer Component', () => {
  let defaultProps = {};

  test('Footer should correctly renders', () => {
    render(<Footer {...defaultProps} />);

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    screen.getByText('Copyright 2021 - Dario Lipartiti');
  });
});
