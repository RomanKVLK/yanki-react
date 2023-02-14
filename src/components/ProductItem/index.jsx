import styles from './ProductItem.module.scss';

const ProductItem = ({ imageUrl, title, price }) => {
  return (
    <div className={styles.productItem}>
      <button className={styles.favorites}>
        <img src='/img/heart.svg' alt='Like' />
      </button>
      <img src={imageUrl[0]} alt='Coat' width={310} />
      <h2>{title}</h2>
      <b>{price} p</b>
      {}
    </div>
  );
};

export default ProductItem;
