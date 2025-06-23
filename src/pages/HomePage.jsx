import { useAirports } from '../hooks/useAirports';
import AirportList from '../components/AirportList';

const HomePage = () => {
  const { data: airports } = useAirports();

  return (
    <main>
      <h1 role="heading">Airports</h1>
      <p>Explore airports around the world.</p>
      <AirportList airports={airports} />
    </main>
  );
};

export default HomePage;
