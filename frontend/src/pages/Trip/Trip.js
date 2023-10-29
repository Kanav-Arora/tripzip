import React, { useState, useEffect } from 'react';

import TripCard from '../../components/TripCard';
import SearchBox from '../../components/TripSearchBox/TripSearchBox';
import RishikeshBanner from '../../images/thumbnails/rishikesh.jpg';
import useDebounce from '../../hooks/useDebounce.js';
import styles from './Trip.module.scss';

const TRIPS_DATA = [
  {
    location: 'Rishikesh',
    date: '30 Oct, 2023',
    thumbnail: RishikeshBanner,
    total_days: 10,
  },
  {
    location: 'Ludhiana',
    date: '28 Oct, 2023',
    thumbnail: RishikeshBanner,
    total_days: 8,
  },
  {
    location: 'Delhi',
    date: '29 Oct, 2023',
    thumbnail: RishikeshBanner,
    total_days: 10,
  },
  {
    location: 'Darjelling',
    date: '28 Oct, 2023',
    thumbnail: RishikeshBanner,
    total_days: 8,
  },
  {
    location: 'Gangtok',
    date: '29 Oct, 2023',
    thumbnail: RishikeshBanner,
    total_days: 10,
  },
]

function Trip() {
  const [filteredTrips, setFilteredTrips] = useState(TRIPS_DATA);
  const [searchTerm, setSearchTerm] = useState('');

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    const filteredData = TRIPS_DATA.filter((trip) =>
      trip.location.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );
    setFilteredTrips(filteredData);
  }, [debouncedSearchTerm]);

  const handleSearch = (value) => {
    setSearchTerm(value);
  };

  return (
    <div>
      <div className={styles.searchBox}>
        <SearchBox onSearch={handleSearch} />
      </div>
      <TripCard trips={filteredTrips} />
    </div>
  );
}

export default Trip;
