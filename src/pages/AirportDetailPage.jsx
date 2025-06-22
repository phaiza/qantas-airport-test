import { useParams, useNavigate } from 'react-router-dom';
import { airports } from '../data/airports';
import styles from './AirportDetailPage.module.scss';

const AirportDetailPage = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const airport = airports.find((a) => a.airportCode === code);

  if (!airport) {
    return <p>Airport not found</p>;
  }

  return (
    <div className={styles.detailPage}>
      <button onClick={() => navigate(-1)} className={styles.backButton}>
        ← Back
      </button>
      <h2 className={styles.title}>{airport.airportName}</h2>
      <p className={styles.field}>City: {airport.city?.cityName}</p>
      <p className={styles.field}>Country: {airport.country?.countryName}</p>
      <p className={styles.field}>Region: {airport.region?.regionName}</p>
      <p className={styles.field}>Time Zone: {airport.city?.timeZoneName}</p>
      <p className={styles.field}>
        Location: {airport.location.latitude}, {airport.location.longitude}
      </p>
    </div>
  );
};

export default AirportDetailPage;
