import React from 'react';
import styles from './Categories.module.scss';

const Categories = () => {
  const names = ['Все', 'New', 'Куртки', 'Пальто', 'Шубы', 'Парки', 'Пуховики', 'Аксессуары'];
  const [categoryName, setCategoryName] = React.useState(0);

  const clickCategoryName = (index) => {
    setCategoryName(index);
  };

  console.log(categoryName);

  return (
    <section className={styles.dark}>
      {names.map((categoryName, i) => (
        <h2
          className={categoryName === i ? styles.active : ''}
          onClick={() => clickCategoryName(i)}
          key={i}>
          {categoryName}
        </h2>
      ))}
    </section>
  );
};

export default Categories;
