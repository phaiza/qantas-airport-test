import { useParams, useNavigate } from 'react-router-dom';
import { useAirports } from '../hooks/useAirports';
import styles from './AirportDetailPage.module.scss';

const AirportDetailPage = () => {
  const { code } = useParams();
  const navigate = useNavigate();
  const { data: airports = [] } = useAirports();
  const airport = airports.find(
    (a) => a.airportCode.toLowerCase() === code.toLowerCase()
  );
  if (!airport) {
    return <p>Airport not found</p>;
  }

  return (
    <main>
      <div className={styles.detailPage}>
        <button
          onClick={() => navigate(-1)}
          className={styles.detailPage__backButton}
        >
          ← Back to Airports
        </button>
        <h1 className={styles.detailPage__title}>{airport.airportName}</h1>
        <div className={styles.detailPage__details}>
          {' '}
          <div className={styles.detailPage__row}>
            <span className={styles.detailPage__label}>City</span>
            <span className={styles.detailPage__value}>
              {airport.city?.cityName}
            </span>
          </div>
          <div className={styles.detailPage__row}>
            <span className={styles.detailPage__label}>Country</span>
            <span className={styles.detailPage__value}>
              {airport.country?.countryName}
            </span>
          </div>
          <div className={styles.detailPage__row}>
            <span className={styles.detailPage__label}>Region</span>
            <span className={styles.detailPage__value}>
              {airport.region?.regionName}
            </span>
          </div>
          <div className={styles.detailPage__row}>
            <span className={styles.detailPage__label}>Time Zone</span>
            <span className={styles.detailPage__value}>
              {airport.city?.timeZoneName}
            </span>
          </div>
          <div className={styles.detailPage__row}>
            <span className={styles.detailPage__label}>Location</span>
            <span className={styles.detailPage__value}>
              {airport.location.latitude}, {airport.location.longitude}
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AirportDetailPage;
