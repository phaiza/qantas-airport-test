import AirportCard from './AirportCard';

const AirportList = ({ airports }) => {
  if (!airports.length) return <p>No airports found.</p>;

  return (
    <div className="airport-list">
      {airports.map((airport) => (
        <AirportCard key={airport.airportCode} airport={airport} />
      ))}
    </div>
  );
};

export default AirportList;
