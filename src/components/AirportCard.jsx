import styles from './AirportCard.module.scss';

const AirportCard = ({ airport }) => {
  const { airportName, city, country, airportCode } = airport;

  return (
    <div className={styles.airportCard}>
      <div className={styles.airportCard__header}>
        <h3 className={styles.airportCard__name}>{airportName}</h3>
        <span className={styles.airportCard__code}>{airportCode}</span>
      </div>
      <p className={styles.airportCard__meta}>
        {city?.cityName}, {country?.countryName}
      </p>
    </div>
  );
};

export default AirportCard;
