import React from 'react';
import styles from './Search.module.scss';

const Search = ({ onSearchClose }) => {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div>
      <input
        className={styles.searchInput}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Поиск..."
      />
      <button onClick={() => onSearchClose()}>x</button>
    </div>
  );
};

export default Search;
