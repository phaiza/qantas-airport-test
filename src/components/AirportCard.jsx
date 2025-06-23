import { Link } from 'react-router-dom';
import styles from './AirportCard.module.scss';

const AirportCard = ({ airport }) => {
  const { airportName, city, country, airportCode } = airport;

  return (
    <Link
      to={`/airport/${airportCode}`}
      className={styles.airportCard}
      aria-label={`View airport details for ${airportName}, located in ${city?.cityName}, ${country?.countryName}`}
    >
      <div className={styles.airportCard__header}>
        <div className={styles.airportCard__text}>
          <h2 className={styles.airportCard__name} role="heading">
            {airportName}
          </h2>
          <span className={styles.airportCard__code}>({airportCode})</span>
        </div>
        <p className={styles.airportCard__meta}>
          {city?.cityName}, {country?.countryName}
        </p>
      </div>
      <div className={styles.airportCard__chevron}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          focusable="false"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </Link>
  );
};

export default AirportCard;
