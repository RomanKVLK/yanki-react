import React from 'react';
import { Link } from 'react-router-dom';
// import Categories from '../../components/Categories';
import MailingList from '../../components/MailingList';

import styles from './MainPage.module.scss';

const MainPage = () => {
  return (
    <main className={styles.Main}>
      <div className={styles.container}>
        <h4 className={styles.Main_title}>Новая коллекция</h4>
        <img src="/img/Rectangle.svg" alt="Line" />
        <p className={styles.Main_link}>
          <Link to="full-item">Смотеть новинки</Link>
          <img src="/img/arrow-right.svg" alt="Arrow" />
        </p>
      </div>
      <div className={styles._ibg}>
        <img src="/img/background.png" alt="Background" />
      </div>
      {/* <Categories /> */}
      <MailingList />
    </main>
  );
};

export default MainPage;
