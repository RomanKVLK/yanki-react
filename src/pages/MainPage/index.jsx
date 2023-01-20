import React from 'react';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={styles.Main}>
      <div className={styles.container}>
        <h4 className={styles.Main_title}>Новая коллекция</h4>
        <img src="/img/Rectangle.svg" alt="Line" />
        <p className={styles.Main_link}>
          Смотеть новинки
          <img src="/img/arrow-right.svg" alt="Arrow" />
        </p>
      </div>
      <div className={styles._ibg}>
        <img src="/img/background.png" alt="Background" />
      </div>
    </div>
  );
};

export default MainPage;