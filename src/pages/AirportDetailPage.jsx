import { useParams, useNavigate } from 'react-router-dom';
import { airports } from '../data/airports';

const AirportDetailPage = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const airport = airports.find((a) => a.airportCode === code);

  if (!airport) {
    return <p>Airport not found</p>;
  }

  return (
    <div>
      <button onClick={() => navigate(-1)}>← Back</button>
      <h2>{airport.airportName}</h2>
      <p>City: {airport.city?.cityName}</p>
      <p>Country: {airport.country?.countryName}</p>
      <p>Region: {airport.region?.regionName}</p>
      <p>Time Zone: {airport.city?.timeZoneName}</p>
      <p>
        Location: {airport.location.latitude}, {airport.location.longitude}
      </p>
    </div>
  );
};

export default AirportDetailPage;
