import React from 'react';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.Main}>
      <div>
        <h4>Новая коллекция</h4>
        <p>
          Смотеть новинки
          <img src="/img/arrow-right.svg" alt="Arrow" />
        </p>
      </div>
    </div>
  );
};

export default MainPage;
