import React from 'react';
import styles from './FullItem.module.scss';

const FullItem = () => {
  return (
    <main>
      <div className={styles.container}>
        <div className={styles.pagination}>
          Главная <img src="/img/little-arrow.svg" alt="Arrow" /> Каталог{' '}
          <img src="/img/little-arrow.svg" alt="Arrow" /> Пальто{' '}
          <img src="/img/little-arrow.svg" alt="Arrow" /> Кремовое Пальто
        </div>
        <div className={styles.itemBlock}>
          <div className={styles.imageRow}>
            <div className={styles.imageColumn}>
              <img src="/img/contentImg/CreamCoat/creamcoat1.jpg" alt="CreamCoat" />
              <img src="/img/contentImg/CreamCoat/creamcoat2.jpg" alt="CreamCoat" />
              <img src="/img/contentImg/CreamCoat/creamcoat3.jpg" alt="CreamCoat" />
              <img src="/img/contentImg/CreamCoat/creamcoat4.jpg" alt="CreamCoat" />
              <img src="/img/contentImg/CreamCoat/creamcoat5.jpg" alt="CreamCoat" />
            </div>
            <img
              className={styles.mainImage}
              src="/img/contentImg/CreamCoat/creamcoat6.jpg"
              alt="CreamCoat"
            />
          </div>
          <div className={styles.infoBlock}>
            <h2 className={styles.infoTitle}>Кремовое пальто</h2>
            <b>3150 p</b>
            <div>color</div>
            <select className={styles.cartSelect}>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <div className={styles.buttonsBox}>
              <button className={styles.toCart}>В корзину</button>
              <button className={styles.toFavorites}>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M7.50061 1.89671C9.26233 0.314993 11.9848 0.367492 13.682 2.06771C15.3785 3.76868 15.437 6.47763 13.859 8.24459L7.49911 14.6135L1.14073 8.24459C-0.437237 6.47763 -0.377988 3.76418 1.31773 2.06771C3.01645 0.369742 5.73365 0.312743 7.50061 1.89671ZM12.62 3.12744C11.495 2.00096 9.68007 1.95521 8.50259 3.01269L7.50136 3.91118L6.49938 3.01344C5.31816 1.95446 3.50694 2.00096 2.37896 3.12894C1.26148 4.24642 1.20523 6.03514 2.23496 7.21711L7.49986 12.4903L12.7648 7.21786C13.7952 6.03514 13.739 4.24867 12.62 3.12744Z"
                    fill="#cca88a"
                  />
                </svg>
                В избранное
              </button>
            </div>
            <div>
              <h3>Подробности</h3>
              <button>Обмеры и описание</button>
              <div>
                Состав: 50% Шерсть, 50% Полиэстер Подкладка: 100% Полиэстер Утеплитель: 90% Пух, 10%
                Перо - Не стирать - Гладить при температуре утюга до 110°C - Не отбеливать - Сухая
                чистка (химчистка) - Барабанная сушка запрещена
              </div>
              <button>Состав и уход</button>
              <div>
                Состав: 50% Шерсть, 50% Полиэстер Подкладка: 100% Полиэстер Утеплитель: 90% Пух, 10%
                Перо - Не стирать - Гладить при температуре утюга до 110°C - Не отбеливать - Сухая
                чистка (химчистка) - Барабанная сушка запрещена
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FullItem;
