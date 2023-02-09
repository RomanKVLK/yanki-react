import styles from './ProductItem.module.scss';

const ProductItem = ({ imageUrl, title, price }) => {
  return (
    <div className={styles.productItem}>
      <button className={styles.favorites}>
        <img src="/img/heart.svg" alt="Like" />
      </button>
      <img src={imageUrl} alt="Coat" />
      <h2>{title}</h2>
      <b>{price} p</b>
      <p>XXS XS S M L</p>
    </div>
  );
};

export default ProductItem;
