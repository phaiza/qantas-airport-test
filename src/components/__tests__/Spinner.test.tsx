import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Spinner from '../Spinner';

describe('Spinner', () => {
  it('renders loading text and spinner', () => {
    render(<Spinner />);
    expect(screen.getByText(/loading airports/i)).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
  });
});
