import styles from './CartItem.module.scss';

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <img src='' alt='' />
      <h2>Белая куртка</h2>
      <b>2900 p</b>
      <p>XXS XS S M L</p>
    </div>
  );
};

export default CartItem;
