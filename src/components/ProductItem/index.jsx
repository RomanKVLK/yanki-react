import styles from './ProductItem.module.scss';

const ProductItem = () => {
  return (
    <div className={styles.productItem}>
      <button className={styles.favorites}>
        <img src="/img/heart.svg" alt="Like" />
      </button>
      <img src="/img/contentImg/coat 1.jpg" alt="Coat" />
      <h2>Белая куртка</h2>
      <b>2900 p</b>
      <p>XXS XS S M L</p>
    </div>
  );
};

export default ProductItem;
