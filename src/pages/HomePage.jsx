import { useAirports } from '../hooks/useAirports';
import AirportList from '../components/AirPortList';

const HomePage = () => {
  const { data: airports, isLoading, isError } = useAirports();

  if (isLoading) return <p>Loading airports...</p>;
  if (isError) return <p>Failed to load airports.</p>;

  return (
    <main>
      <h1>Airports</h1>
      <p>Explore airports around the world.</p>
      <AirportList airports={airports} />
    </main>
  );
};

export default HomePage;
