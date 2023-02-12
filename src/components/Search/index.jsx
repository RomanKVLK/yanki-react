import React from 'react';
import styles from './Search.module.scss';

const Search = () => {
  const [searchValue, setSearchValue] = React.useState('');
  console.log(searchValue);
  return (
    <div>
      <input
        className={styles.searchInput}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder='Поиск...'
      />
    </div>
  );
};

export default Search;
