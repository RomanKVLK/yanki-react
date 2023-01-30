import React from 'react';
import CartItem from '../../components/CartItem';
import Categories from '../../components/Categories';
import styles from './Catalog.module.scss';

const Catalog = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.pagination}>
          Главная <img src='/img/little-arrow.svg' alt='Arrow' /> Каталог
        </div>
        <Categories />
        <CartItem />
      </div>
    </main>
  );
};

export default Catalog;
