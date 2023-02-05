import React from 'react';
import CartItem from '../../components/CartItem';
import MakingOrder from '../../components/MakingOrder';
import styles from './Cart.module.scss';

const Cart = () => {
  return (
    <main className={styles.container}>
      <div>
        <div className={styles.pagination}>
          Главная <img src='/img/little-arrow.svg' alt='Arrow' /> Корзина
        </div>
        <h2 className={styles.title}>Ваш заказ</h2>
      </div>
      <section>
        <CartItem />
        <CartItem />
      </section>
      <section>
        <MakingOrder />
      </section>
    </main>
  );
};

export default Cart;
