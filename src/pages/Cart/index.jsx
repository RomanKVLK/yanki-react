import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from '../../components/CartItem';
import MakingOrder from '../../components/MakingOrder';
import styles from './Cart.module.scss';

const Cart = () => {
  const { totalPrice } = useSelector((state) => state.cart.totalPrice);
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
        <p className={styles.totalPrice}>
          К оплате:<b>{totalPrice} BYN</b>
        </p>
      </section>
      <section>
        <MakingOrder />
      </section>
    </main>
  );
};

export default Cart;
