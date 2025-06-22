import { useQuery } from '@tanstack/react-query';

const API_URL = 'https://api.qantas.com/flight/refData/airport';

export const useAirports = () => {
  return useQuery({
    queryKey: ['airports'],
    queryFn: async () => {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Failed to fetch airports');
      return res.json();
    },
    staleTime: 5 * 60 * 1000, // 5 min
    cacheTime: 10 * 60 * 1000, // 10 min
    select: (data) => data, // slice for performance
    suspense: true, // Enable suspense mode
  });
};
