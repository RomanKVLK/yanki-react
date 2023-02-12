import React from 'react';

import ProductItem from '../../components/ProductItem';
import Categories from '../../components/Categories';
// import Pagination from '../../components/Pagination';
import styles from './Catalog.module.scss';

const Catalog = () => {
  const [product, setProduct] = React.useState([]);

  React.useEffect(() => {
    fetch('https://63e903085f3e35d898f94b79.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setProduct(arr);
      });
  }, []);

  console.log(product);

  return (
    <main>
      <div className={styles.container}>
        <div className={styles.pagination}>
          Главная <img src='/img/little-arrow.svg' alt='Arrow' /> Каталог
          <img src='/img/little-arrow.svg' alt='Arrow' />
        </div>
        <div className={styles.wrapper}>
          <Categories />
          <div className={styles.catalogBlock}>
            {product.map((obj) => (
              <ProductItem key={obj.id} {...obj} />
            ))}
          </div>
        </div>
        {/* <Pagination /> */}
      </div>
    </main>
  );
};

export default Catalog;
