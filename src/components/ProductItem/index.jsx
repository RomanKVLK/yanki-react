import styles from './ProductItem.module.scss';

const ProductItem = ({ imageUrl, title, price, sizes, color }) => {
  return (
    <div className={styles.productItem}>
      <button className={styles.favorites}>
        <img src="/img/heart.svg" alt="Like" />
      </button>
      <img src={imageUrl[0]} alt="Coat" width={310} />
      <h2>{title}</h2>
      <b>{price} BYN</b>
      <p>{color}</p>
      <div className={styles.sizesItemBox}>
        <p>Размеры:</p>
        <ul className={styles.sizesBox}>
          {sizes.map((size, i) => (
            <li key={i}>{size}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductItem;
