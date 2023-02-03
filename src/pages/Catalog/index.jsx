import React from 'react';
import ProductItem from '../../components/ProductItem';
import Categories from '../../components/Categories';
import styles from './Catalog.module.scss';

const Catalog = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.pagination}>
          Главная <img src="/img/little-arrow.svg" alt="Arrow" /> Каталог
          <img src="/img/little-arrow.svg" alt="Arrow" />
        </div>
        <div className={styles.wrapper}>
          <Categories />
          <div className={styles.catalogBlock}>
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
            <ProductItem />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Catalog;
