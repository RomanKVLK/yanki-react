import React from 'react';
import CartItem from '../../components/CartItem';
import styles from './Cart.module.scss';

const Cart = () => {
  return (
    <div>
      <div className={styles.container}>
        <CartItem />
        <CartItem />
      </div>
    </div>
  );
};

export default Cart;
