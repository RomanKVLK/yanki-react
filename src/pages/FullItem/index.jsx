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
          <div>
            <h2>Кремовое пальто</h2>
            <b>3150 p</b>
            <div>color</div>
            <select className={styles.cartSelect}>
              <option value="S">S</option>
              <option value="M">M</option>
              <option value="L">L</option>
              <option value="XL">XL</option>
              <option value="XXL">XXL</option>
            </select>
            <button>В корзину</button>
            <button>В избранное</button>
            <div>
              <h3>Подробности</h3>
              <button>Обмеры и описание</button>
              <p>
                Состав: 50% Шерсть, 50% Полиэстер Подкладка: 100% Полиэстер Утеплитель: 90% Пух, 10%
                Перо - Не стирать - Гладить при температуре утюга до 110°C - Не отбеливать - Сухая
                чистка (химчистка) - Барабанная сушка запрещена
              </p>
              <button>Состав и уход</button>
              <p>
                Состав: 50% Шерсть, 50% Полиэстер Подкладка: 100% Полиэстер Утеплитель: 90% Пух, 10%
                Перо - Не стирать - Гладить при температуре утюга до 110°C - Не отбеливать - Сухая
                чистка (химчистка) - Барабанная сушка запрещена
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FullItem;
