import '@testing-library/jest-dom/vitest';

import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import * as useAirportsHook from '../../hooks/useAirports';
import HomePage from '../HomePage';

vi.mock('../../components/AirportList', () => ({
  default: () => <div>Mocked AirportList</div>,
}));

const mockAirports = [
  {
    airportCode: 'AAA',
    airportName: 'Anaa',
    city: { cityName: 'Anaa', timeZoneName: 'Pacific/Tahiti' },
    country: { countryName: 'French Polynesia' },
    region: { regionName: 'South Pacific' },
    location: { latitude: 17.25, longitude: 145.3 },
  },
];

function mockUseAirportsState(state: Partial<Record<string, any>>) {
  vi.spyOn(useAirportsHook, 'useAirports').mockReturnValue({
    data: [],
    isLoading: false,
    isError: false,
    isFetching: false,
    error: null,
    refetch: vi.fn(),
    isSuccess: true,
    status: 'success',
    isInitialLoading: false,
    isRefetching: false,
    isFetched: false,
    isPending: false,
    isStale: false,
    isLoadingError: false,
    isRefetchError: false,
    isPlaceholderData: false,
    dataUpdatedAt: Date.now(),
    errorUpdatedAt: 0,
    isFetchedAfterMount: false,
    isPaused: false,
    fetchStatus: 'idle',
    failureCount: 0,
    failureReason: null,
    errorUpdateCount: 0,
    promise: Promise.resolve([]),
    ...state,
  });
}

describe('HomePage', () => {
  it('renders AirportList on success', () => {
    mockUseAirportsState({ data: mockAirports, isSuccess: true });
    render(<HomePage />);
    expect(screen.getByText(/Mocked AirportList/i)).toBeInTheDocument();
  });
});
