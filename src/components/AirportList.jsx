import { useState, useMemo, useEffect } from 'react';
import AirportCard from './AirportCard';
import styles from './AirportList.module.scss'; // optional styles

const AirportList = ({ airports }) => {
  const [visibleCount, setVisibleCount] = useState(100);
  const LOAD_INCREMENT = 100;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [onlyOnline, setOnlyOnline] = useState(false);
  const [filterType, setFilterType] = useState(''); // 'international' | 'domestic' | ''

  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const countryOptions = useMemo(() => {
    const countries = airports
      .map((a) => a.country?.countryName)
      .filter(Boolean);
    return [...new Set(countries)].sort();
  }, [airports]);

  const filteredAirports = useMemo(() => {
    return airports.filter((airport) => {
      const matchesSearch =
        airport.airportName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        airport.city?.cityName
          ?.toLowerCase()
          .includes(searchTerm.toLowerCase()) ||
        airport.airportCode.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCountry = selectedCountry
        ? airport.country?.countryName === selectedCountry
        : true;

      const matchesOnline = onlyOnline
        ? airport.onlineIndicator === true
        : true;

      const matchesType =
        filterType === 'international'
          ? airport.internationalAirport
          : filterType === 'domestic'
          ? airport.domesticAirport
          : true;

      return matchesSearch && matchesCountry && matchesOnline && matchesType;
    });
  }, [airports, searchTerm, selectedCountry, onlyOnline, filterType]);

  const visibleAirports = filteredAirports.slice(0, visibleCount);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + LOAD_INCREMENT);
  };

  return (
    <div>
      <div className={styles.filters}>
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
        >
          <option value="">All Countries</option>
          {countryOptions.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

        <label>
          <input
            type="checkbox"
            checked={onlyOnline}
            onChange={() => setOnlyOnline((prev) => !prev)}
          />
          Online only
        </label>

        <label>
          <input
            type="radio"
            name="airportType"
            value=""
            checked={filterType === ''}
            onChange={(e) => setFilterType(e.target.value)}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            name="airportType"
            value="international"
            checked={filterType === 'international'}
            onChange={(e) => setFilterType(e.target.value)}
          />
          International
        </label>
        <label>
          <input
            type="radio"
            name="airportType"
            value="domestic"
            checked={filterType === 'domestic'}
            onChange={(e) => setFilterType(e.target.value)}
          />
          Domestic
        </label>
      </div>
      <input
        type="text"
        placeholder="Search by airport name, city, or code"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className={styles.searchInput}
      />
      <div className={styles.airportList}>
        {visibleAirports.map((airport) => (
          <AirportCard key={airport.airportCode} airport={airport} />
        ))}
      </div>

      {visibleCount < filteredAirports.length && (
        <button
          className={`${styles.loadMore} primary`}
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
      {showScrollTop && (
        <button
          className={`${styles.backToTop} secondary`}
          onClick={scrollToTop}
        >
          Back to Top
        </button>
      )}
    </div>
  );
};

export default AirportList;
