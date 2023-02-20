import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../../components/CartItem';
import MakingOrder from '../../components/MakingOrder';
import styles from './Cart.module.scss';
import { clearItems } from '../../redux/slices/cart/cartSlice';

const Cart = () => {
  const selectCart = (state) => state.cart;
  const dispatch = useDispatch();

  const { items, totalPrice } = useSelector(selectCart);

  const onClickClear = () => {
    if (window.confirm('Очистить корзину?')) {
      dispatch(clearItems());
    }
  };

  return (
    <main className={styles.container}>
      <div>
        <div className={styles.pagination}>
          Главная <img src='/img/little-arrow.svg' alt='Arrow' /> Корзина
        </div>
        <h2 className={styles.title} onClick={onClickClear}>
          Ваш заказ
        </h2>
      </div>
      <section>
        {items.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
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
