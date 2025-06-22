import { useState } from 'react';
import AirportCard from './AirportCard';
import styles from './AirportList.module.scss'; // optional styles

const AirportList = ({ airports }) => {
  const [visibleCount, setVisibleCount] = useState(100);
  const LOAD_INCREMENT = 100;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_INCREMENT);
  };

  const visibleAirports = airports.slice(0, visibleCount);

  return (
    <div>
      <div className={styles.airportList}>
        {visibleAirports.map((airport) => (
          <AirportCard key={airport.airportCode} airport={airport} />
        ))}
      </div>

      {visibleCount < airports.length && (
        <button className={styles.loadMore} onClick={handleLoadMore}>
          Load More
        </button>
      )}
    </div>
  );
};

export default AirportList;
