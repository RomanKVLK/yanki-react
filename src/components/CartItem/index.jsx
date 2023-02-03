import React from 'react';
import styles from './CartItem.module.scss';

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.productInfo}>
        <img className={styles.image} src="/img/contentImg/furcoat 1.jpg" alt="Fur coat 1" />
        <p>Кремовое пальто</p>
      </div>
      <div className="productColor">red</div>
      <select>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
      <div>
        <button>-</button>
        <i>3</i>
        <button>+</button>
      </div>
      <span>3594 p</span>
      <button>
        <img src="/img/trash.svg" alt="Удалить" />
      </button>
    </div>
  );
};

export default CartItem;
