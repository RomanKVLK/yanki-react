import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem, minusItem } from '../../redux/slices/cart/cartSlice';
import styles from './CartItem.module.scss';

const CartItem = ({ id, title, price, imageUrl, color }) => {
  const dispatch = useDispatch();
  console.log(id);
  const onClickPlus = () => {
    dispatch(addItem({ id }));
  };

  const onClickMinus = () => {
    dispatch(minusItem(id));
  };

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartInfo}>
        <img className={styles.image} src={`/${imageUrl[0]}`} alt="Fur coat 1" />
        <p>{title}</p>
      </div>
      <div className="productColor">{color}</div>
      <select className={styles.cartSelect}>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
      <div className={styles.countBlock}>
        <button onClick={onClickMinus}>
          <svg
            width="10"
            height="2"
            viewBox="0 0 10 2"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10 0.285706H5.71429H4.28571H0V1.71428H4.28571H5.71429H10V0.285706Z"
              fill="#E0BEA2"
            />
          </svg>
        </button>
        <i>3</i>
        <button onClick={onClickPlus}>
          <svg
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.28571 4.28571V0H5.71429V4.28571H10V5.71429H5.71429V10H4.28571V5.71429H0V4.28571H4.28571Z"
              fill="#E0BEA2"
            />
          </svg>
        </button>
      </div>
      <b>{price} BYN</b>
      <button className={styles.itemCartDelete}>
        <svg
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M18.75 5H25V7.5H22.5V23.75C22.5 24.0815 22.3683 24.3995 22.1339 24.6339C21.8995 24.8683 21.5815 25 21.25 25H3.75C3.41848 25 3.10054 24.8683 2.86612 24.6339C2.6317 24.3995 2.5 24.0815 2.5 23.75V7.5H0V5H6.25V1.25C6.25 0.918479 6.3817 0.600537 6.61612 0.366116C6.85054 0.131696 7.16848 0 7.5 0H17.5C17.8315 0 18.1495 0.131696 18.3839 0.366116C18.6183 0.600537 18.75 0.918479 18.75 1.25V5ZM20 7.5H5V22.5H20V7.5ZM8.75 11.25H11.25V18.75H8.75V11.25ZM13.75 11.25H16.25V18.75H13.75V11.25ZM8.75 2.5V5H16.25V2.5H8.75Z"
            fill="#E0BEA2"
          />
        </svg>
      </button>
    </div>
  );
};

export default CartItem;
