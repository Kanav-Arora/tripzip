import React, { useState } from 'react';
import styles from './TripSearchBox.module.scss';

function SearchBox({ onSearch }) {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearchValue(searchTerm);
    onSearch(searchTerm);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by location"
        value={searchValue}
        onChange={handleSearchChange}
        className={styles.searchBox}
      />
    </div>
  );
}

export default SearchBox;
