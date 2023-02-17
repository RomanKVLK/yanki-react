import React from 'react';
import styles from './Categories.module.scss';

const Categories = ({ value, onChangeCategory }) => {
  const categories = ['Все', 'New', 'Куртки', 'Пальто', 'Плащи', 'Костюмы', 'Джемперы'];

  return (
    <section className={styles.dark}>
      <h2>Каталог</h2>
      {categories.map((categoryName, i) => (
        <li
          className={value === i ? styles.active : styles.dark}
          onClick={() => onChangeCategory(i)}
          key={i}>
          {categoryName}
        </li>
      ))}
    </section>
  );
};

export default Categories;
