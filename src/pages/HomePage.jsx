import { airports } from '../data/airports';
import AirportList from '../components/AirportList';

const HomePage = () => {
  return (
    <main>
      <h1>Airports</h1>
      <AirportList airports={airports} />
    </main>
  );
};

export default HomePage;
