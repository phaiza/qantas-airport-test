import '@testing-library/jest-dom/vitest';

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import AirportDetailPage from '../AirportDetailPage';
import * as useAirportsHook from '../../hooks/useAirports';

const mockAirports = [
  {
    airportCode: 'AAA',
    airportName: 'Anaa Airport',
    city: { cityName: 'Anaa', timeZoneName: 'Pacific/Tahiti' },
    country: { countryName: 'French Polynesia' },
    region: { regionName: 'South Pacific' },
    location: { latitude: 17.25, longitude: 145.3 },
  },
];

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => vi.fn(),
  };
});
function mockUseAirports(data: any) {
  vi.spyOn(useAirportsHook, 'useAirports').mockReturnValue({
    data,
    isLoading: false,
    isError: false,
    isSuccess: true,
    isFetching: false,
    error: null,
    refetch: vi.fn(),
    status: 'success',
    isInitialLoading: false,
    isRefetching: false,
    isFetched: true,
    isPending: false,
    isStale: false,
    isLoadingError: false,
    isRefetchError: false,
    isPlaceholderData: false,
    dataUpdatedAt: Date.now(),
    errorUpdatedAt: 0,
    isFetchedAfterMount: true,
    isPaused: false,
    fetchStatus: 'idle',
    failureCount: 0,
    failureReason: null,
    errorUpdateCount: 0,
    promise: Promise.resolve(mockAirports),
  });
}

describe('AirportDetailPage', () => {
  it('renders airport details when code is valid', () => {
    mockUseAirports(mockAirports);

    render(
      <MemoryRouter initialEntries={['/airport/AAA']}>
        <Routes>
          <Route path="/airport/:code" element={<AirportDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Anaa Airport')).toBeInTheDocument(); // airportName
    expect(screen.getByText('Anaa')).toBeInTheDocument(); // city
    expect(screen.getByText('French Polynesia')).toBeInTheDocument(); // country
    expect(screen.getByText('South Pacific')).toBeInTheDocument(); // region
    expect(screen.getByText('Pacific/Tahiti')).toBeInTheDocument(); // time zone
    expect(screen.getByText('17.25, 145.3')).toBeInTheDocument(); // location
  });

  it('displays "Airport not found" when code is invalid', () => {
    mockUseAirports([]);

    render(
      <MemoryRouter initialEntries={['/airport/XYZ']}>
        <Routes>
          <Route path="/airport/:code" element={<AirportDetailPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('Airport not found')).toBeInTheDocument();
  });
});
