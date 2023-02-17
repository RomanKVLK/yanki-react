import React from 'react';
// import debounce from 'lodash.debounce';
// import { useDispatch } from 'react-redux';

import styles from './Search.module.scss';
// import { setSearchValue } from '../../redux/slices/filter/filterSlice';

const Search = () => {
  const [value, setValue] = React.useState('');
  // const dispatch = useDispatch();
  const inputRef = React.useRef();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const updateSearchValue = debounce((str) => {
  //   dispatch(setSearchValue(str));
  // }, 800);

  const onChangeInput = (event) => {
    setValue(event.target.value);
    // updateSearchValue(event.target.value);
  };

  return (
    <>
      <input
        ref={inputRef}
        className={styles.searchInput}
        value={value}
        onChange={(event) => onChangeInput(event.target.value)}
        placeholder="Поиск..."
      />
    </>
  );
};

export default Search;
