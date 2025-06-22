import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import AirportCard from '../AirportCard';

const mockAirport = {
  airportCode: 'AAA',
  airportName: 'Anaa',
  city: {
    cityName: 'Anaa',
  },
  country: {
    countryName: 'French Polynesia',
  },
};

describe('AirportCard', () => {
  it('renders airport name, code, and location', () => {
    render(
      <BrowserRouter>
        <AirportCard airport={mockAirport} />
      </BrowserRouter>
    );

    expect(screen.getByText('Anaa')).toBeInTheDocument(); // name
    expect(screen.getByText('(AAA)')).toBeInTheDocument(); // code
    expect(screen.getByText('Anaa, French Polynesia')).toBeInTheDocument(); // location
  });

  it('navigates to correct detail page', () => {
    render(
      <BrowserRouter>
        <AirportCard airport={mockAirport} />
      </BrowserRouter>
    );

    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/airport/AAA');
  });

  it('matches snapshot', () => {
    const { asFragment } = render(
      <BrowserRouter>
        <AirportCard airport={mockAirport} />
      </BrowserRouter>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
