import React from 'react';
import styles from './Categories.module.scss';

const Categories = () => {
  const categories = ['Все', 'New', 'Куртки', 'Пальто', 'Шубы', 'Парки', 'Пуховики', 'Аксессуары'];
  const [categoryId, setCategoryName] = React.useState(0);

  const clickCategoryName = (index) => {
    setCategoryName(index);
  };

  return (
    <section className={styles.dark}>
      <h2>Каталог</h2>
      {categories.map((categoryName, i) => (
        <h2
          className={categoryId === i ? styles.active : ''}
          onClick={() => clickCategoryName(i)}
          key={i}>
          {categoryName}
        </h2>
      ))}
    </section>
  );
};

export default Categories;
