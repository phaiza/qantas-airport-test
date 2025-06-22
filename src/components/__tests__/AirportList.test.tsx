import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import AirportList from '../AirPortList';
import { BrowserRouter } from 'react-router-dom';

const mockAirports = [
  {
    airportCode: 'AAA',
    airportName: 'Anaa',
    city: { cityName: 'Anaa' },
    country: { countryName: 'French Polynesia' },
  },
  {
    airportCode: 'AAB',
    airportName: 'Arrabury',
    city: { cityName: 'Arrabury' },
    country: { countryName: 'Australia' },
  },
];

describe('AirportList', () => {
  it('renders a list of airports', () => {
    render(
      <BrowserRouter>
        <AirportList airports={mockAirports} />
      </BrowserRouter>
    );

    expect(screen.getByText('Anaa')).toBeInTheDocument();
    expect(screen.getByText('Arrabury')).toBeInTheDocument();
  });

  it('shows "No airports found" if the list is empty', () => {
    render(
      <BrowserRouter>
        <AirportList airports={[]} />
      </BrowserRouter>
    );
    expect(screen.getByText(/no airports found/i)).toBeInTheDocument();
  });

  it('renders all passed airports', () => {
    render(
      <BrowserRouter>
        <AirportList airports={mockAirports} />
      </BrowserRouter>
    );

    const cards = screen.getAllByRole('link');
    expect(cards.length).toBe(mockAirports.length);
  });
});
